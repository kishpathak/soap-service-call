import { ServiceCallService } from './service-call.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-service-call',
  templateUrl: './service-call.component.html',
  styleUrls: ['./service-call.component.css'],
  providers: [ServiceCallService]
})
export class ServiceCallComponent implements OnInit {

  constructor(private serviceCallService: ServiceCallService) { }

  ngOnInit() {
  }

  callSoapService() {
    console.log("Hi Service is calling ");
    this.serviceCallService.soapServiceHttpCall();
  }
}