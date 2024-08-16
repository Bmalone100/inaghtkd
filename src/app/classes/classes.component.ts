import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatListModule } from '@angular/material/list';
import { MatIcon } from '@angular/material/icon';
import { FlexLayoutModule } from '@angular/flex-layout';

@Component({
  selector: 'app-classes',
  standalone: true,
  imports: [MatCardModule, MatTableModule, MatListModule, MatIcon, FlexLayoutModule],
  templateUrl: './classes.component.html',
  styleUrls: ['./classes.component.scss']
})
export class ClassesComponent {
  // Define the data sources for the tables
  tuesdayData = [
    { time: '7:00 PM - 7:45 PM', classType: '6 to 8 year olds' },
    { time: '7:45 PM - 8:30 PM', classType: 'under 13s' },
    { time: '8:30 PM - 9:15 PM', classType: 'Over 13s and Seniors' }
  ];

  fridayData = [
    { time: '7:45 PM - 8:30 PM', classType: 'under 13s' },
    { time: '8:30 PM - 9:15 PM', classType: 'Over 13s and Seniors' }
  ];

  saturdayData = [
    { time: '10:00 AM - 11:00 AM', classType: '4-6 year olds' }
  ];

  displayedColumns: string[] = ['time', 'classType'];
}
