import { Component, ElementRef, EventEmitter, HostListener, Output, QueryList, Renderer2, ViewChild, ViewChildren } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import{BreakpointObserver} from '@angular/cdk/layout'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'sivaHariharanResume';
  @ViewChild(MatSidenav )
  sidenav!:MatSidenav;
  // divHeight !: number;

  constructor(private observer :BreakpointObserver,private renderer : Renderer2 ,private elementRef :ElementRef){
    // this.updateDivHeight();
   
  } 
  // @HostListener('window:resize', ['$event'])
  // onWindowResize(event: any) {
  //   // Update the height when the window is resized
  //   this.updateDivHeight();
  // }
  private updateDivHeight() {
    const element = this.elementRef.nativeElement.querySelector('.your-element-class');
   this.observer.observe(['(max-width :800px)']).subscribe((res)=>{
    if(res.matches){
      this.renderer.setProperty(element, 'height', 'calc(100vh - 98px);');
    }
    else{
      this.renderer.setProperty(element ,'height','calc(200vh - 198px);')
    }
   })
    // this.divHeight = window.innerHeight ;
  }


  ngAfterViewInit(){
    this.observer.observe(['(max-width : 800px)']).subscribe((res) =>{
      if(res.matches){
        this.sidenav.mode='over';
        this.sidenav.close();
      }else{
        this.sidenav.mode ='side';
        this.sidenav.open();
      }
    });
  }
}
