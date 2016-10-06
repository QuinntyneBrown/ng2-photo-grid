import { Component, ChangeDetectionStrategy, Input, OnInit } from "@angular/core";

@Component({
    template: require("./home-page.component.html"),
    styles: [require("./home-page.component.scss")],
    selector: "home-page",
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomePageComponent implements OnInit { 
    ngOnInit() {
        //alert(moment(1475049600000).format("ddd"));
        //alert(moment(1475049600000).format("MMM. d"));
    }

    public days: Array<any> = [
        {
            dayOfWeek: "Mon",
            date: "Sept. 19"
        },
        {
            dayOfWeek: "Tues",
            date: "Sept. 20"
        },
        {
            dayOfWeek: "Wed",
            date: "Sept. 21"
        },
        {
            dayOfWeek: "Thurs",
            date: "Sept. 22"
        },
        {
            dayOfWeek: "Fri",
            date: "Sept. 23"
        },
        {
            dayOfWeek: "Sat",
            date: "Sept. 23"
        },
        {
            dayOfWeek: "Sun",
            date: "Sept. 25"
        },
        {
            dayOfWeek: "Mon",
            date: "Sept. 26"
        },
        {
            dayOfWeek: "Tues",
            date: "Sept. 27"
        },
        {
            dayOfWeek: "Wed",
            date: "Sept. 28"
        },
        {
            dayOfWeek: "Thurs",
            date: "Sept. 29"
        },
        {
            dayOfWeek: "Fri",
            date: "Sept. 30"
        },
        {
            dayOfWeek: "Sat",
            date: "Oct. 1"
        },
        {
            dayOfWeek: "Sun",
            date: "Oct. 2"
        },
        {
            dayOfWeek: "Mon",
            date: "Oct. 3"
        },
        {
            dayOfWeek: "Tues",
            date: "Oct. 4"
        },
        {
            dayOfWeek: "Wed",
            date: "Oct. 5"
        },
        {
            dayOfWeek: "Thurs",
            date: "Oct. 6"
        },
        {
            dayOfWeek: "Fri",
            date: "Oct. 7"
        },
        {
            dayOfWeek: "Sat",
            date: "Oct. 8"
        },
        {
            dayOfWeek: "Sun",
            date: "Oct. 9"
        }
    ];

    public scheduledItems: Array<any> = [
        {
            title: "Your Morning",
            date: "Sept. 20",
            time: "8:00 AM"
        },
        {
            title: "Live with Kelly",
            date: "Sept. 20",
            time: "10:00 AM"
        },
        {
            title: "The Marilyn Denis Show",
            date: "Sept. 20",
            time: "12:00 PM"
        },
        {
            title: "The View",
            date: "Sept. 20",
            time: "4:00 PM"
        },
        {
            title: "CTV News Toronto",
            date: "Sept. 20",
            time: "6:00 PM"
        },
        {
            title: "Your Morning",
            date: "Sept. 29",
            time: "8:00 AM"
        },
        {
            title: "Live with Kelly",
            date: "Sept. 29",
            time: "10:00 AM"
        },
        {
            title: "The Marilyn Denis Show",
            date: "Sept. 29",
            time: "12:00 PM"
        },
        {
            title: "The View",
            date: "Sept. 29",
            time: "4:00 PM"
        },
        {
            title: "CTV News Toronto",
            date: "Sept. 29",
            time: "6:00 PM"
        },
        {
            title: "Your Morning",
            date: "Oct. 9",
            time: "8:00 AM"
        },
        {
            title: "Live with Kelly",
            date: "Oct. 9",
            time: "10:00 AM"
        },
        {
            title: "The Marilyn Denis Show",
            date: "Oct. 9",
            time: "12:00 PM"
        },
        {
            title: "The View",
            date: "Oct. 9",
            time: "4:00 PM"
        },
        {
            title: "CTV News Toronto",
            date: "Oct. 9",
            time: "6:00 PM"
        },
    ];
}
