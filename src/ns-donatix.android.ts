import { Common } from './ns-donatix.common';
import application from "tns-core-modules/application";

export class NsDonatix extends Common {
  public greet() {
    "use strict";
    var Toast = application.android.widget.Toast;
    var text = "Hello world!";

    var centeredText = new application.android.text.SpannableString(text);
    centeredText.setSpan(
        new application.android.text.style.AlignmentSpan.Standard(application.android.text.Layout.Alignment.ALIGN_CENTER),
        0,
        text.length - 1,
        application.android.text.Spannable.SPAN_INCLUSIVE_INCLUSIVE);

    return Toast.makeText(application.android.context, centeredText, Toast.LENGTH_LONG);
  }
}
