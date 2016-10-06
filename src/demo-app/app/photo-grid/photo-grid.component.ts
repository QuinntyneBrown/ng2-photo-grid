import { Component, ChangeDetectionStrategy, Input, OnInit } from "@angular/core";

@Component({
    template: require("./photo-grid.component.html"),
    styles: [require("./photo-grid.component.scss")],
    selector: "photo-grid",
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class PhotoGridComponent implements OnInit { 
    ngOnInit() {

    }
}
