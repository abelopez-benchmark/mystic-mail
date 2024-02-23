import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-html-viewer',
  standalone: true,
  imports: [],
  templateUrl: './html-viewer.component.html',
  styleUrl: './html-viewer.component.scss',
})
export class HtmlViewerComponent implements OnChanges {
  @Input() rawHtml: string = '';

  htmlPreview: SafeHtml | null = null;

  constructor(private _sanitizer: DomSanitizer) {}

  ngOnChanges(changes: SimpleChanges): void {
    const rawHtmlChange = changes['rawHtml'];
    if (
      rawHtmlChange &&
      rawHtmlChange.currentValue &&
      rawHtmlChange.currentValue.length > 0
    ) {
      this.safeRenderHtml();
    }
  }

  safeRenderHtml() {
    this.htmlPreview = this._sanitizer.bypassSecurityTrustHtml(this.rawHtml);
  }
}
