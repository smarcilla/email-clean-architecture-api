import { LeadDomain } from "../domains/lead.domain";

class LeadService {
  saveLead: any;

  constructor(saveLead: any) {
    this.saveLead = saveLead;
  }

  leadAnEmail(leadDomainToSave: LeadDomain) {
    this.saveLead(leadDomainToSave);
  }
}

export default LeadService;
