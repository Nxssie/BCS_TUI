import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import * as igv from 'node_modules/igv/dist/igv.min.js';
import { DialogIGVForm } from '../igv/igv.component';

export interface DialogData {
  stringURL: string;
  label: string;
}

export interface Genome {
  id: string;
  name: string;
  url: string;
  indexUrl: string;
  cytobandUrl: string;
}

export interface Track {
  trackName: string;
  trackUrl: string;
  trackOrder: number;
  trackIndexed: boolean;
}

@Component({
  selector: 'app-igvgrid',
  templateUrl: './igvgrid.component.html',
  styleUrls: ['./igvgrid.component.sass']
})
export class IgvgridComponent implements OnInit {

  stringURL!: string;

  constructor(public dialog: MatDialog) { }

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

    igv.createBrowser(igvDiv, options).then(function (browser: any) {
      igv.browser = browser;
      console.log('Created IGV browser');
    });
  }

  public static loadGenome = (genome: Genome, track: Track) => {
    igv.browser.loadGenome(
      {
          "id": genome.id,
          "name": genome.name,
          "fastaURL": genome.url,
          "indexURL": genome.indexUrl,
          "cytobandURL": genome.cytobandUrl,
          "tracks": [
            {
              "name": track.trackName,
              "url": track.trackUrl,
              "order": track.trackOrder,
              "indexed": track.trackIndexed
            },
          ]
        }
    ); 
  }
  
  public static loadTrack = (url: string, label: string) => {
    igv.browser.loadTrack({
      url: url,
      label: label
        })
    .then(function (newTrack: any) {
      alert("Track loaded: " + newTrack.name);
    })
    .catch(function (error: string)  {
       // Handle error
    })
  }

  removeTrackByName = () => {
    igv.browser.removeTrackByName('HG02450').then((track: any) => {
      alert('Track removed: ' + track.name);
    })
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogIGVForm, {
      width: '900px',
      data: {stringURL: this.stringURL}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.stringURL = result;
    });
  }
}
