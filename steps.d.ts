/// <reference types='codeceptjs' />
type steps_file = typeof import('./steps_file.js');

declare namespace CodeceptJS {
  interface SupportObject { I: I, current: any }
  interface Methods extends Puppeteer {}
  interface I extends ReturnType<steps_file> {
    /**
     * Method to interact with the website page
     */
    onPage: {
      /**
       * Custom method to click an element on the page
       * Only performs the click if the current page is not the warning popup
       * @param locator - Element locator
       */
      click: (locator: CodeceptJS.LocatorOrString) => void;
    }
  }
  namespace Translation {
    interface Actions {}
  }
}
