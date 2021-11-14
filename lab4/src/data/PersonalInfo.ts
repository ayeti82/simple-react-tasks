export default interface PersonalInfo {
  firstName: string;
  lastName: string;
  emailAddress: string;
  deliveryZipCode: string;
  deliveryStreet: string;
  deliveryCity: string;
  sameAsDeliveryAddress: boolean;
  invoiceStreet: string;
  invoiceZipCode: string;
  invoiceCity: string;
}
