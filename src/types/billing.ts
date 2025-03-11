export interface TaxInvoice {
  Total: number; //1899.73;
  Name: string; //"IVA";
  Base: number; //11873.3;
  Rate: number; //0.16;
  IsRetention: boolean; //false;
}

export interface ProductInvoice {
  ProductCode: string; //"01010101";
  IdentificationNumber: string; //"EDL";
  Description: string; //"Factura global";
  Unit: string; //"Actividad";
  UnitCode: string; //"ACT";
  UnitPrice: number; //11873.3;
  Quantity: number; //1.0;
  Subtotal: number; //11873.3;
  TaxObject: string; //"02";
  Total: number; //13773.03;
  Taxes: TaxInvoice[];
}

export interface ClientInvoice {
  Rfc: string; //"ZUÑ920208KL4",
  Name: string; //"ZAPATERIA URTADO ÑERI",
  CfdiUse: string; //"G03",
  FiscalRegime: string; //"601",
  TaxZipCode: string; //"34541",
}

export interface CfdiInvoice {
  NameId: string; //"34";
  Folio: string; //"203";
  Serie: null;
  CfdiType: string; //"I";
  Currency: string; //"MXN";
  PaymentForm: string; //"03";
  PaymentMethod: string; //"PUE";
  OrderNumber: string; //"RES189123";
  ExpeditionPlace: string; //"42501";
  Date: string; //"2025-02-24T12:10:00";
  Observations: string; //"";
  Exportation: string; //"01";
  Receiver: ClientInvoice;
  Items: ProductInvoice[];
}

export interface DataInvoice {
  cfdi: CfdiInvoice;
}
