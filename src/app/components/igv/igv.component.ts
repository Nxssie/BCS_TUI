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

    const path ="../../../assets/seq-data/set1/";

    var igvDiv = document.getElementById("igv-div");
      var options =
        {
          locus:"Untitled",
          reference: {
            fastaURL: path + "sequences.fasta",
            indexed: false
          },
          tracks: [
            {
              name: "Alignment",
              type: "annotation",
              format: "aln",
              sourceType: "file",
              url: path + "alignment.aln",
              indexed: false,
              displayMode: "EXPANDED"
            }
          ]        
        };

        igv.createBrowser(igvDiv, options)
                .then(function () {
                    console.log("Created IGV browser");
                })
    
  }
}
