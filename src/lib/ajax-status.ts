/**
 * The view should not be responsible for handing HTTP error codes, in most cases.
 * Theses four values are enough to tell what feedback to display when making http requests.
 * Use None as default, when no request has been made.
 * Use Pending when you start the request.
 * Use Error when request fail for any reason.
 * Use Success when request succeed.
 */
export enum AjaxStatus {
  None = 'None',
  Pending = 'Pending',
  Error = 'Error',
  Success = 'Success',
}
