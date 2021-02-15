import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-msa',
  templateUrl: './msa.component.html',
  styleUrls: ['./msa.component.css'],
})
export class MsaComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    var msa = require('msa');

    var opts = {
      el: document.getElementById('msaTable'),
      conf: {
        registerMouseHover: false,
        registerMouseClicks: true,
        eventBus: true,
        alphabetSize: 20,
        dropImport: false,
        debug: false,
        hasRef: true, // hasReference,
        manualRendering: false, // manually control the render (not recommened)
      },
      colorscheme: {
        scheme: 'taylor', // name of your color scheme
        colorBackground: true, // otherwise only the text will be colored
        showLowerCase: true, // used to hide and show lowercase chars in the overviewbox
        opacity: 0.6, //opacity for the residues
      },
      columns: {
        hidden: [], // hidden columns
      },
      vis: {
        sequences: true,
        markers: true,
        metacell: false,
        conserv: false,
        overviewbox: false,
        seqlogo: false,
        gapHeader: false,
        leftHeader: true,

        // about the labels
        labels: true,
        labelName: true,
        labelId: true,
        labelPartition: false,
        labelCheckbox: false,

        // meta stuff
        metaGaps: true,
        metaIdentity: true,
        metaLinks: true,
      },
      zoomer: {
        // general
        alignmentWidth: 'auto',
        alignmentHeight: 225,
        columnWidth: 15,
        rowHeight: 15,
        autoResize: true, // only for the width

        // labels
        textVisible: true,
        labelIdLength: 30,
        labelNameLength: 100,
        labelPartLength: 15,
        labelCheckLength: 15,
        labelFontsize: 13,
        labelLineHeight: '13px',

        // marker
        markerFontsize: '10px',
        stepSize: 1,
        markerStepSize: 2,
        markerHeight: 20,

        // canvas
        residueFont: '13', //in px
        canvasEventScale: 1,

        // overview box
        boxRectHeight: 2,
        boxRectWidth: 2,
        overviewboxPaddingTop: 10,

        // meta cell
        metaGapWidth: 35,
        metaIdentWidth: 40,
        metaLinksWidth: 25,
      },
      importURL: '../../../assets/seq-data/set1/sequences.fasta',
    };

    var m = new msa.msa(opts);
    m.render();

    var defaultURL =
      '../../../assets/seq-data/set1/sequences.fasta';
    var url = defaultURL;

    m.u.file.importURL(url, renderMSA);

    function renderMSA() {
      // the menu is independent to the MSA container
      var menuOpts = {
        el: document.getElementById('div'),
        msa: m,
        menuFontsize: '14px',
        menuItemFontsize: '14px',
        menuItemLineHeight: '14px',
        menuMarginLeft: '3px',
        menuPadding: '3px 4px 3px 4px',
      };
      var defMenu = new msa.menu.defaultmenu(menuOpts);
      m.addView('menu', defMenu);

      // call render at the end to display the whole MSA
      m.render();
    }
  }
}
