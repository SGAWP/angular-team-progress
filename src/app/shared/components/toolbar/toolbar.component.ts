import { Component, EventEmitter, Output } from '@angular/core';
import * as screenfull from 'screenfull';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent  {

  @Output('toggleSidebar') toggleSidebar = new EventEmitter();

  private get screenfull(): screenfull.Screenfull {
    return screenfull as screenfull.Screenfull;
  }

  fullscreen() {
    if (this.screenfull.isEnabled) {
      this.screenfull.toggle();
    }
  }

  sideMenuToggle(event) {
    event.preventDefault();
    this.toggleSidebar.emit();
  }

}
