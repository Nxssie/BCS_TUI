import { Component, OnInit, Inject, ViewEncapsulation } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import * as igv from 'node_modules/igv/dist/igv.min.js';

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

export interface Load {
  url: string;
}

@Component({
  selector: 'app-igv',
  templateUrl: './igv.component.html',
  styleUrls: ['./igv.component.css'],
})
export class IGVComponent implements OnInit {

  stringURL!: string;

  session: any;
  sessionJSON: any;

  constructor(public dialog: MatDialog) {}

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

  public saveSession() {
    this.session = igv.browser.toJSON();
    alert("Saved current browser state");
    this.sessionJSON = igv.browser.compressedSession();
    console.log(this.sessionJSON);
    var data = "text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(this.sessionJSON));
    $('<button><a href="data:' + data + '" download="IGVSession.json">Download session</a></button>').appendTo('#container');
  }

  public loadSession() {
    igv.browser.loadSession(this.session);
    alert("Loaded previous browser state");
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

  openLoad(): void {
    const dialogRef = this.dialog.open(LoadIGVForm, {
      width: '900px',
      data: {stringURL: this.stringURL}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.stringURL = result;
    });
  }
}

@Component({
  selector: 'dialog-igv-form',
  templateUrl: './dialog.igv.form.html',
  styleUrls: ['./dialog.igv.form.css'],
  encapsulation: ViewEncapsulation.None,
})

export class DialogIGVForm {

  panelOpenState = false;
  fileUploadQueue = document.getElementById("fileUploadQueue");

  constructor(
    public dialogRef: MatDialogRef<DialogIGVForm>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    @Inject(MAT_DIALOG_DATA) public genomeData: Genome,
    @Inject(MAT_DIALOG_DATA) public trackData: Track) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  onSubmitAddTrack(): void {
    if(!this.data.stringURL) {
      alert("Please fill empty fields")
    } else {
      IGVComponent.loadTrack(this.data.stringURL, this.data.label);
      this.dialogRef.close();
    }
  }

  onSubmitAddGenome(): void {
    if(!this.genomeData.url) {
      alert("Please fill empty fields")
    } else {
      IGVComponent.loadGenome(this.genomeData, this.trackData);
      this.dialogRef.close();
    }
  }

  onSubmitFile(): void {
    //This method receives an input file to inject it directly to IGV
  }
}

@Component({
  selector: 'load-igv-form',
  templateUrl: './load.igv.form.html',
  styleUrls: ['./load.igv.form.css'],
  encapsulation: ViewEncapsulation.None,
})

export class LoadIGVForm {

  panelOpenState = false;
  fileUploadQueue = document.getElementById("fileUploadQueue");

  constructor(
    public dialogRef: MatDialogRef<LoadIGVForm>,
    @Inject(MAT_DIALOG_DATA) public data: Load) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  onSubmitLoadSession(): void {
    if(!this.data.url) {
      alert("Please fill empty fields")
    } else {
      window.location.href = 'http://localhost:4200/igv?sessionURL=blob:' + this.data.url;
    }
  }

  onSubmitFile(): void {
    //This method receives an input file to inject it directly to IGV
  }
}
