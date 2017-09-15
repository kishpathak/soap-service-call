import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions, RequestMethod } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class ServiceCallService {

  //private flightBookingUrl = 'http://40.121.207.102:51021/air-shop';
  private flightBookingUrl = 'http://a2ml17619:51022/air-booking';

  private requestBody = '<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:gs="http://www.iata.org/IATA/EDIST/2017.1"> ' +
  +'<soapenv:Header/> <soapenv:Body> <gs:OrderCreateRQ>	<gs:Query> <gs:Passengers> <gs:Group>	<gs:PassengerCount>1</gs:PassengerCount> ' +
  +'<gs:Contacts>	<gs:Contact> <gs:AddressContact> <gs:BuildingRoom>201</gs:BuildingRoom> ' +
  +'<gs:CityName>Bangalore</gs:CityName> <gs:StateProv>Karnataka</gs:StateProv> ' +
  +'<gs:PostalCode>560098</gs:PostalCode>	<gs:County>India</gs:County> ' +
  +'</gs:AddressContact> <gs:EmailContact> <gs:Address>keshavkishlay@gmail.com</gs:Address> ' +
  +'</gs:EmailContact> <gs:PhoneContact> <gs:Number CountryCode="91">9641042106</gs:Number> ' +
  +'</gs:PhoneContact> <gs:Name> <gs:Surname>Kishlay</gs:Surname>	<gs:Given>Keshav</gs:Given> ' +
  +'<gs:Title>Mr</gs:Title> </gs:Name> </gs:Contact> <gs:Contact> <gs:AddressContact> ' +
  +'<gs:BuildingRoom>301</gs:BuildingRoom> <gs:CityName>Bangalore</gs:CityName> ' +
  +'<gs:StateProv>Karnataka</gs:StateProv> <gs:PostalCode>560059</gs:PostalCode> ' +
  +'<gs:County>India</gs:County> </gs:AddressContact> <gs:EmailContact> ' +
  +'<gs:Address>keshavkishlay007@gmail.com</gs:Address> </gs:EmailContact> <gs:PhoneContact> ' +
  +'<gs:Number CountryCode="91">8095337131</gs:Number> </gs:PhoneContact> <gs:Name> ' +
  +'<gs:Surname>Kishlay</gs:Surname> <gs:Given>Kishan</gs:Given> <gs:Title>Mr</gs:Title> ' +
  +'</gs:Name> </gs:Contact> </gs:Contacts>	</gs:Group> </gs:Passengers> <gs:Payments> <gs:Payment> ' +
  +'<gs:Method>	<gs:PaymentCard> <gs:CardCode>343</gs:CardCode> <gs:MaskedCardNumber>63530559326233</gs:MaskedCardNumber> <gs:CardHolderName>Keshav Kishlay</gs:CardHolderName><gs:EffectiveExpireDate> <gs:Effective>01/17</gs:Effective> <gs:Expiration>12/20</gs:Expiration> </gs:EffectiveExpireDate> </gs:PaymentCard> </gs:Method> <gs:Amount>4000</gs:Amount> </gs:Payment> <gs:Payment> <gs:Method> <gs:PaymentCard> <gs:CardCode>343</gs:CardCode> <gs:MaskedCardNumber>63530559326233</gs:MaskedCardNumber> <gs:CardHolderName>Keshav Kishlay</gs:CardHolderName> <gs:EffectiveExpireDate> <gs:Effective>01/17</gs:Effective> <gs:Expiration>12/20</gs:Expiration> </gs:EffectiveExpireDate> </gs:PaymentCard> </gs:Method> <gs:Amount>5000</gs:Amount> </gs:Payment> <gs:Payment> <gs:Method> <gs:PaymentCard> <gs:CardCode>343</gs:CardCode> <gs:MaskedCardNumber>63530559326233</gs:MaskedCardNumber> <gs:CardHolderName>Keshav Kishlay</gs:CardHolderName> <gs:EffectiveExpireDate> <gs:Effective>01/17</gs:Effective> <gs:Expiration>12/20</gs:Expiration> </gs:EffectiveExpireDate> </gs:PaymentCard> </gs:Method> <gs:Amount>6000</gs:Amount> </gs:Payment> </gs:Payments> <gs:DataLists> <gs:FlightList> <gs:Flight FlightKey="MT300"> <gs:SegmentReferences OffPoint="BLR" OnPoint="PNB"/> </gs:Flight> <gs:Flight FlightKey="MT301"> <gs:SegmentReferences OffPoint="PNB" OnPoint="DLR"/> </gs:Flight> <gs:Flight FlightKey="MT302"> <gs:SegmentReferences OffPoint="DLR" OnPoint="KOL"/> </gs:Flight> </gs:FlightList> </gs:DataLists> </gs:Query> </gs:OrderCreateRQ> </soapenv:Body> </soapenv:Envelope>';

  // private requestBody2 = '<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:gs="http://www.iata.org/IATA/EDIST/2017.1">' +
  // '<soapenv:Header/><soapenv:Body><gs:AirShoppingRQ><gs:CoreQuery><gs:OriginDestinations><gs:OriginDestination>' +
  // '<gs:Departure><gs:AirportCode>BLR</gs:AirportCode><gs:Time>4.40</gs:Time></gs:Departure>' +
  // '<gs:Arrival><gs:AirportCode>LON</gs:AirportCode><gs:Time>1.30</gs:Time></gs:Arrival>' +
  // '</gs:OriginDestination></gs:OriginDestinations></gs:CoreQuery></gs:AirShoppingRQ></soapenv:Body></soapenv:Envelope>';

  // headers = new Headers({ 'Content-Type': 'text/xml' });
  // options = new RequestOptions({ headers: this.headers });
  jquery: JQuery;

  headers = new Headers({ "Content-Type": 'text/xml' });
  requestoptions: RequestOptions;

  constructor(private http: Http) {
    this.headers.append('Access-Control-Allow-Origin', '*');
    this.headers.append('Access-Control-Allow-Credentials', 'true');
    console.log(this.headers);
    this.requestoptions = new RequestOptions({
      headers: this.headers
    })
  }

  soapServiceHttpCall() {
    var arr = ["a", "b", "c", "d", "e"];
    $.map(arr, function (n, i) {
      console.log(n.toUpperCase() + i);
    });

    $.ajax({
      type: "POST",
      url: this.flightBookingUrl,
      contentType: "text/xml",
      dataType: "xml",
      data: this.requestBody,
      success: function(data, status, req) {
        if (status == "success") {
          console.log(data);
          return(data);
        }
      },
      error: function(data, status, req) {
        return(data);
      }
    });
  
  
  

    // return this
    //   .http
    //   .post(this.flightBookingUrl, this.requestBody, { headers: this.headers})
    //   .toPromise()
    //   .then(res => console.log(res))
    //   .catch(this.handleError);
  }

  private handleError(error: any): Promise < any > {
  return Promise.reject(error.message || error);
}

}
