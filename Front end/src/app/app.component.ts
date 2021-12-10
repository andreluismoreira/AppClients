import { AfterViewInit, Component } from '@angular/core';
import * as jQuery from 'jquery'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  title = 'AppClients';

  ngAfterViewInit(){
    (function($) {
      "use strict";
  
      $("#sidebarToggle").on("click", function(e) {
          e.preventDefault();
          $("body").toggleClass("sb-sidenav-toggled");
      });
  })(jQuery);
  }
  
}
