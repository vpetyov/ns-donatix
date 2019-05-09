import { Common } from './ns-donatix.common';
var application = require("application");

export class NsDonatix extends Common {
    public greet() {
        let alertController = UIAlertController.alertControllerWithTitleMessagePreferredStyle("", "Hello world!", UIAlertControllerStyle.Alert);

        alertController.addAction(UIAlertAction(title: "Dismiss", style: .destructive, handler: nil));

        showUIAlertController(alertController);
    }

    function showUIAlertController(alertController: UIAlertController) {
        let currentView = application.getRootView();
    
        if (currentView) {
            currentView = currentView.modal || currentView;
    
            let viewController: UIViewController = currentView.ios;
    
            if (!(currentView.ios instanceof UIViewController)) {
                const parentWithController = application.ios.getParentWithViewController(currentView);
                viewController = parentWithController ? parentWithController.viewController : undefined;
            }
    
            if (viewController) {
                if (alertController.popoverPresentationController) {
                    alertController.popoverPresentationController.sourceView = viewController.view;
                    alertController.popoverPresentationController.sourceRect = CGRectMake(viewController.view.bounds.size.width / 2.0, viewController.view.bounds.size.height / 2.0, 1.0, 1.0);
                    alertController.popoverPresentationController.permittedArrowDirections = 0;
                }
    
                viewController.presentModalViewControllerAnimated(alertController, true);
            }
        }
    }
}
