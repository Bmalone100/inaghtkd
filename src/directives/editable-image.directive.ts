import { Directive, ElementRef, HostListener, Renderer2, Input } from '@angular/core';
import { EditModeService } from '../app/services/edit-mode.service';
import { Subscription } from 'rxjs';

@Directive({
  selector: '[appEditableImage]'
})
export class EditableImageDirective {
  private isEditMode = false;
  private editModeSubscription: Subscription;

  constructor(
    private el: ElementRef,
    private renderer: Renderer2,
    private editModeService: EditModeService
  ) {
    this.editModeSubscription = this.editModeService.editMode$.subscribe(
      (mode) => this.toggleEditMode(mode)
    );
  }

  @Input() editableImageSrc?: string;

  @HostListener('click')
  onClick() {
    if (this.isEditMode) {
      this.openFileExplorer();
    }
  }

  toggleEditMode(isEditMode: boolean) {
    this.isEditMode = isEditMode;
    if (this.isEditMode) {
      this.addOverlay();
    } else {
      this.removeOverlay();
    }
  }

  private addOverlay() {
    const overlay = this.renderer.createElement('div');
    this.renderer.setStyle(overlay, 'position', 'absolute');
    this.renderer.setStyle(overlay, 'top', '0');
    this.renderer.setStyle(overlay, 'left', '0');
    this.renderer.setStyle(overlay, 'width', '100%');
    this.renderer.setStyle(overlay, 'height', '100%');
    this.renderer.setStyle(overlay, 'background', 'rgba(0, 0, 0, 0.5)');
    this.renderer.setStyle(overlay, 'display', 'flex');
    this.renderer.setStyle(overlay, 'align-items', 'center');
    this.renderer.setStyle(overlay, 'justify-content', 'center');
    this.renderer.setStyle(overlay, 'cursor', 'pointer');
    this.renderer.setProperty(overlay, 'innerHTML', '<span style="color: white; font-size: 2em;">+</span>');
    this.renderer.appendChild(this.el.nativeElement, overlay);
  }

  private removeOverlay() {
    const overlay = this.el.nativeElement.querySelector('div');
    if (overlay) {
      this.renderer.removeChild(this.el.nativeElement, overlay);
    }
  }

  private openFileExplorer() {
    const input = this.renderer.createElement('input');
    this.renderer.setAttribute(input, 'type', 'file');
    this.renderer.setAttribute(input, 'accept', 'image/*');
    this.renderer.setStyle(input, 'display', 'none');

    this.renderer.listen(input, 'change', (event) => {
      const file = event.target.files[0];
      if (file) {
        this.replaceImage(file);
      }
    });

    input.click();
  }

  private replaceImage(file: File) {
    const reader = new FileReader();
    reader.onload = () => {
      this.renderer.setAttribute(this.el.nativeElement, 'src', reader.result as string);
    };
    reader.readAsDataURL(file);
  }

  ngOnDestroy() {
    this.editModeSubscription.unsubscribe();
  }
}
