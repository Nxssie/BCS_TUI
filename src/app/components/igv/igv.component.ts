import { Component, OnInit } from '@angular/core';
import * as igv from 'node_modules/igv/dist/igv.min.js';

@Component({
  selector: 'app-igv',
  templateUrl: './igv.component.html',
  styleUrls: ['./igv.component.css'],
})
export class IGVComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    var igvDiv = document.getElementById('igv-div');
    var options = {
      genome: "hg38",
      locus: "chr8:127,736,588-127,739,371",
      tracks: [
        {
          name: 'HG00103',
          url:
            'https://s3.amazonaws.com/1000genomes/data/HG00103/alignment/HG00103.alt_bwamem_GRCh38DH.20150718.GBR.low_coverage.cram',
          indexURL:
            'https://s3.amazonaws.com/1000genomes/data/HG00103/alignment/HG00103.alt_bwamem_GRCh38DH.20150718.GBR.low_coverage.cram.crai',
          format: 'cram',
        },
      ],
    };

    igv.createBrowser(igvDiv, options).then(function () {
      console.log('Created IGV browser');
    });
  }
}
