import { ChangeDetectionStrategy, Component, OnInit, ViewEncapsulation } from '@angular/core';
import { CompactType, DisplayGrid, Draggable, GridsterConfig, GridsterItem, GridType, PushDirections, Resizable } from 'angular-gridster2';

interface Safe extends GridsterConfig {
  draggable: Draggable;
  resizable: Resizable;
  pushDirections: PushDirections;
}

interface Viewer {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-gridster',
  templateUrl: './gridster.component.html',
  styleUrls: ['./gridster.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None
})
export class GridsterComponent implements OnInit {

  options!: Safe;
  dashboard!: Array<GridsterItem>;
  selectedViewer = "msa";

  viewers: Viewer[] = [
    { value: 'msa', viewValue: 'MSA' },
    { value: 'igv', viewValue: 'IGV' },
    { value: 'ncbi', viewValue: 'NCBI' },
    { value: 'ncbimsa', viewValue: 'NCBI-MSA' },
    { value: 'auspice', viewValue: 'Auspice' },
    { value: 'itol', viewValue: 'iTOL' },
    { value: 'jbrowse', viewValue: 'JBrowse' }
  ];

  itemChange(item: any, itemComponent: any): void {
    console.info('itemChanged', item, itemComponent);
  }

  itemResize(item: any, itemComponent: any): void {
    console.info('itemResized', item, itemComponent);
  }

  ngOnInit(): void {
    this.options = {
      gridType: GridType.Fixed,
      fixedColWidth: 105,
      fixedRowHeight: 105,
      compactType: CompactType.None,
      margin: 10,
      outerMargin: true,
      outerMarginTop: null,
      outerMarginRight: null,
      outerMarginBottom: null,
      outerMarginLeft: null,
      useTransformPositioning: true,
      mobileBreakpoint: 640,
      minCols: 1,
      maxCols: 1000,
      minRows: 1,
      maxRows: 1000,
      maxItemCols: 1000,
      minItemCols: 1,
      maxItemRows: 1000,
      minItemRows: 1,
      maxItemArea: 2500,
      minItemArea: 1,
      defaultItemCols: 1,
      defaultItemRows: 1,
      keepFixedHeightInMobile: true,
      keepFixedWidthInMobile: false,
      scrollSensitivity: 10,
      scrollSpeed: 20,
      enableEmptyCellClick: false,
      enableEmptyCellContextMenu: false,
      enableEmptyCellDrop: false,
      enableEmptyCellDrag: false,
      enableOccupiedCellDrop: false,
      emptyCellDragMaxCols: 50,
      emptyCellDragMaxRows: 50,
      ignoreMarginInRow: false,
      draggable: {
        delayStart: 0,
        enabled: true,
        ignoreContentClass: 'gridster-item-content',
        ignoreContent: true,
        dragHandleClass: 'drag-handler',
        dropOverItems: false
      },
      resizable: {
        enabled: true,
      },
      swap: false,
      pushItems: true,
      disablePushOnDrag: false,
      disablePushOnResize: false,
      pushDirections: { north: true, east: true, south: true, west: true },
      pushResizeItems: false,
      displayGrid: DisplayGrid.Always,
      disableWindowResize: false,
      disableWarnings: false,
      scrollToNewItems: true
    };

    this.dashboard = [
      //{x: 0, y: 0, cols: 11, rows: 4, msa: true},
    ];
  }

  changedOptions(): void {
    if (this.options.api && this.options.api.optionsChanged) {
      this.options.api.optionsChanged();
    }
  }

  removeItem($event: MouseEvent | TouchEvent, item: any): void {
    $event.preventDefault();
    $event.stopPropagation();
    this.dashboard.splice(this.dashboard.indexOf(item), 1);
  }

  addItem(viewer: string): void {
    switch (viewer) {
      case "igv":
        this.dashboard.push({ x: 0, y: 0, cols: 11, rows: 5.5, igv: true })
        break;
      case "msa":
        this.dashboard.push({ x: 0, y: 0, cols: 11, rows: 4, msa: true })
        break;
      case "ncbi":
        this.dashboard.push({ x: 0, y: 0, cols: 11, rows: 7.5, ncbi: true })
        break;
      case "ncbimsa":
        this.dashboard.push({ x: 0, y: 0, cols: 11, rows: 3.5, ncbimsa: true })
        break;
      case "auspice":
        this.dashboard.push({ x: 0, y: 0, cols: 11, rows: 6, auspice: true })
        break;
      case "itol":
        this.dashboard.push({ x: 0, y: 0, cols: 11, rows: 5, itol: true })
        break;
      case "jbrowse":
        this.dashboard.push({ x: 0, y: 0, cols: 11, rows: 5, jbrowse: true })
        break;
    };
  }

  getSelected() {
    this.addItem(this.selectedViewer);
  }

}
