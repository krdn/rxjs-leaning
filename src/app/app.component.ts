import { Component } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { NestedTreeControl } from '@angular/cdk/tree';
import { MatTreeNestedDataSource } from '@angular/material/tree';
import { Router } from '@angular/router';
import { BreakpointObserver } from '@angular/cdk/layout';


interface FoodNode {
  name: string;
  value?: string;
  children?: FoodNode[];
}

const TREE_DATA: FoodNode[] = [
  {
    name: 'RxJS',
    children: [
      {name: 'Subject', value: 'subject'},
      {name: 'Home', value: 'home'},
      {name: 'Fruit loops'},
    ]
  }, {
    name: 'Angular',
    children: [
      {
        name: 'Green',
        children: [
          {name: 'Broccoli'},
          {name: 'Brussels sprouts'},
        ]
      }, {
        name: 'Orange',
        children: [
          {name: 'Pumpkins'},
          {name: 'Carrots'},
        ]
      },
    ]
  },
];


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  appTitle = 'rxjs-leaning';
  mobileQuery: MediaQueryList;

  treeControl = new NestedTreeControl<FoodNode>(node => node.children);
  dataSource = new MatTreeNestedDataSource<FoodNode>();

  constructor(
    private breakpointObserver: BreakpointObserver,
    private router: Router,
    media: MediaMatcher) {

    this.dataSource.data = TREE_DATA;
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    // this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    // this.mobileQuery.addListener(this._mobileQueryListener);

    // storageManager.initialiseStorageSyncListener();

    // this.toastaConfig.theme = 'material';
    // this.toastaConfig.position = 'top-right';
    // this.toastaConfig.limit = 100;
    // this.toastaConfig.showClose = true;
    // this.toastaConfig.showDuration = false;

    // this.appTitleService.appName = this.appTitle;

  }

  navigateToPage(name: string) {
    this.router.navigate([name]);


    // if (name === 'Degrees') {
    //   // this.router.navigate([name]);
    //   this.router.navigate(['subject']);
    //   alert(name);
    // }
    // alert(name);
  }

  hasChild = (_: number, node: FoodNode) => !!node.children && node.children.length > 0;
}
