import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions, RequestMethod } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class ServiceCallService {

  private flightBookingUrl = 'http://localhost:51022/air-booking';

  private requestBody = '<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:gs="http://www.iata.org/IATA/EDIST/2017.1"> '+
                        +'<soapenv:Header/> <soapenv:Body> <gs:OrderCreateRQ>	<gs:Query> <gs:Passengers> <gs:Group>	<gs:PassengerCount>1</gs:PassengerCount> '+
                        +'<gs:Contacts>	<gs:Contact> <gs:AddressContact> <gs:BuildingRoom>201</gs:BuildingRoom> '+
                        +'<gs:CityName>Bangalore</gs:CityName> <gs:StateProv>Karnataka</gs:StateProv> '+
                        +'<gs:PostalCode>560098</gs:PostalCode>	<gs:County>India</gs:County> '+
                        +'</gs:AddressContact> <gs:EmailContact> <gs:Address>keshavkishlay@gmail.com</gs:Address> '+
                        +'</gs:EmailContact> <gs:PhoneContact> <gs:Number CountryCode="91">9641042106</gs:Number> '+
                        +'</gs:PhoneContact> <gs:Name> <gs:Surname>Kishlay</gs:Surname>	<gs:Given>Keshav</gs:Given> '+
                        +'<gs:Title>Mr</gs:Title> </gs:Name> </gs:Contact> <gs:Contact> <gs:AddressContact> '+
                        +'<gs:BuildingRoom>301</gs:BuildingRoom> <gs:CityName>Bangalore</gs:CityName> '+
                        +'<gs:StateProv>Karnataka</gs:StateProv> <gs:PostalCode>560059</gs:PostalCode> '+
                        +'<gs:County>India</gs:County> </gs:AddressContact> <gs:EmailContact> '+
                        +'<gs:Address>keshavkishlay007@gmail.com</gs:Address> </gs:EmailContact> <gs:PhoneContact> '+
                        +'<gs:Number CountryCode="91">8095337131</gs:Number> </gs:PhoneContact> <gs:Name> '+
                        +'<gs:Surname>Kishlay</gs:Surname> <gs:Given>Kishan</gs:Given> <gs:Title>Mr</gs:Title> '+
                        +'</gs:Name> </gs:Contact> </gs:Contacts>	</gs:Group> </gs:Passengers> <gs:Payments> <gs:Payment> '+
                        +'<gs:Method>	<gs:PaymentCard> <gs:CardCode>343</gs:CardCode> <gs:MaskedCardNumber>63530559326233</gs:MaskedCardNumber> <gs:CardHolderName>Keshav Kishlay</gs:CardHolderName><gs:EffectiveExpireDate> <gs:Effective>01/17</gs:Effective> <gs:Expiration>12/20</gs:Expiration> </gs:EffectiveExpireDate> </gs:PaymentCard> </gs:Method> <gs:Amount>4000</gs:Amount> </gs:Payment> <gs:Payment> <gs:Method> <gs:PaymentCard> <gs:CardCode>343</gs:CardCode> <gs:MaskedCardNumber>63530559326233</gs:MaskedCardNumber> <gs:CardHolderName>Keshav Kishlay</gs:CardHolderName> <gs:EffectiveExpireDate> <gs:Effective>01/17</gs:Effective> <gs:Expiration>12/20</gs:Expiration> </gs:EffectiveExpireDate> </gs:PaymentCard> </gs:Method> <gs:Amount>5000</gs:Amount> </gs:Payment> <gs:Payment> <gs:Method> <gs:PaymentCard> <gs:CardCode>343</gs:CardCode> <gs:MaskedCardNumber>63530559326233</gs:MaskedCardNumber> <gs:CardHolderName>Keshav Kishlay</gs:CardHolderName> <gs:EffectiveExpireDate> <gs:Effective>01/17</gs:Effective> <gs:Expiration>12/20</gs:Expiration> </gs:EffectiveExpireDate> </gs:PaymentCard> </gs:Method> <gs:Amount>6000</gs:Amount> </gs:Payment> </gs:Payments> <gs:DataLists> <gs:FlightList> <gs:Flight FlightKey="MT300"> <gs:SegmentReferences OffPoint="BLR" OnPoint="PNB"/> </gs:Flight> <gs:Flight FlightKey="MT301"> <gs:SegmentReferences OffPoint="PNB" OnPoint="DLR"/> </gs:Flight> <gs:Flight FlightKey="MT302"> <gs:SegmentReferences OffPoint="DLR" OnPoint="KOL"/> </gs:Flight> </gs:FlightList> </gs:DataLists> </gs:Query> </gs:OrderCreateRQ> </soapenv:Body> </soapenv:Envelope>';

  // headers = new Headers({ 'Content-Type': 'text/xml' });
  // options = new RequestOptions({ headers: this.headers });
  
  headers = new Headers({"Content-Type": 'text/xml'});
    
  requestoptions = new RequestOptions({
            method: RequestMethod.Post,
            url: this.flightBookingUrl,
            headers: this.headers,
            body: this.requestBody
        })
  

  constructor(private http: Http) { }

  soapServiceHttpCall() {
    // return this
    //   .http
    //   .post(this.flightBookingUrl, this.requestBody, this.options)
    //   .toPromise()
    //   .then(res => console.log(res))
    //   .catch(this.handleError);
    
    return this.http.request(new Request(this.requestoptions))
            .toPromise().then(res => {
              console.log(res);
            }).catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    return Promise.reject(error.message || error);
  }

}
