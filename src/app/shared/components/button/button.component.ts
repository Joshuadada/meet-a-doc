import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
  @Input() disabled!: boolean;
  @Input() buttonText!: string;
  @Input() buttonImage!: string;
  @Input() customClass!: string;
  @Input() status!: string;

  @Input() buttonImage2!: string;
  @Output() buttonClick = new EventEmitter<boolean>();
  constructor() {}

  ngOnInit(): void {}

  handleClick() {
    this.buttonClick.emit(true);
  }
}
