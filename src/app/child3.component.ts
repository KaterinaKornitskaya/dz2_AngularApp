import {Input,Component} from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { NgFor } from '@angular/common';

@Component({
    selector: 'child3_comp',
    standalone: true,
    imports: [MatIconModule, MatButtonModule, NgFor],
    templateUrl: './child3.component.html',
    styleUrl: './app.component.css'
})

export class ChildComponent3{
    name = 'component3';
    link1:string[] = ["https://en.wikipedia.org/wiki/Bill_Gates", "More on wiki"];
    link2:string[] = ["https://www.gatesfoundation.org/", "About foundation"];
    link3:string[] = ["https://www.gatesnotes.com/", "More about"];
    link4:string[] = ["https://x.com/billgates", "More in x.com"];
    linkArr:string[][] = [this.link1, this.link2, this.link3, this.link4];
    
    @Input() myLink:string='';
    @Input() myAbout:string='';
    @Input() newLink:string[] = [this.myLink, this.myAbout];
    
    addLink():void{
        this.linkArr.push(this.newLink);
    }
}