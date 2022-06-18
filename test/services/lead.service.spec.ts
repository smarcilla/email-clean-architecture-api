import { LeadDomain } from "../../src/domains/lead.domain";
import LeadService from "../../src/services/lead.service";

export const mockSaveLeadInSystemFn: jest.Mock<any, any> = jest.fn();

describe("given a lead that dont exist in system", () => {
  const leadDomainToSave: LeadDomain = { email: "user@mail.com" };
  let leadService: LeadService;

  beforeAll(() => {
    leadService = new LeadService(mockSaveLeadInSystemFn);
  });

  beforeEach(() => {
    leadService.leadAnEmail(leadDomainToSave);
  });

  test("should save lead in system", () => {
    expect(mockSaveLeadInSystemFn).toHaveBeenCalledWith(leadDomainToSave);
  });
});
