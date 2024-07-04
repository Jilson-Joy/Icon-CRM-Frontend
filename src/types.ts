export interface URLPara {
    parameters: string;
}

export interface Prospects {
    id: number;
    name: string;
    telephone: string;
    address: string;
    district: string;
    pincode: string;
    adhaar_no: string;
    pan_no: string;
}

export interface OEM {
    id: number;
    code: string;
    name: string;
}

export interface DealType {
    id: number;
    description: string;
}

export interface DealSuggestedBy {
    id: number;
    description: string;
    // Add more properties if needed
}

export interface MachineType {
    id: string;
    code: string;
    name: string;
    oem_id: string;
    model_name: string;
    tonnage_id: string;
    segment_id: string;
    price: string;
    created_by: string;
    created_on: string;
    status: string;
}

export interface Tonnage {
    id: number;
    code: string;
    name: string;
}


export interface Financier {
    id: number;
    financierName: string;
    district: string;
    officeAddress: string;
    executiveName: string;
    phoneNo: string;
    mailId: string;
}








export interface OEM {
    id: number;
    code: string;
    name: string;
}

export interface DealType {
    id: number;
    description: string;
}

export interface DealSuggestedBy {
    id: number;
    description: string;
    // Add more properties if needed
}

export interface MachineType {
    id: string;
    code: string;
    name: string;
    oem_id: string;
    model_name: string;
    tonnage_id: string;
    segment_id: string;
    price: string;
    created_by: string;
    created_on: string;
    status: string;
}

export interface Tonnage {
    id: number;
    code: string;
    name: string;
}


export interface Financier {
    id: number;
    financierName: string;
    district: string;
    officeAddress: string;
    executiveName: string;
    phoneNo: string;
    mailId: string;
}








export interface Deal {
    id: number;
    name: string;
    dealType: DealType;
    dealSuggestedBy: DealSuggestedBy;
}

export interface DealType {
    id: number;
    description: string;
    // Add more properties if needed
}

export interface DealSuggestedBy {
    id: number;
    description: string;
    // Add more properties if needed
}

export interface GetDeal {
    id: string;
    prospects_id: string;
    prospects_name:string;
    deal_name: string;
    machine_id: string;
    machine_name:string;
    deal_type_id: string;
    deal_type_name:string;
    suggested_by_id: string;
    suggested_by_name:string;
    created_by: string;
    created_on: string;
    status: string;
}

export interface MachineType {
    id: string;
    code: string;
    name: string;
    oem_id: string;
    model_name: string;
    tonnage_id: string;
    segment_id: string;
    price: string;
    created_by: string;
    created_on: string;
    status: string;
}

export interface OEM {
    id: number;
    code: string;
    name: string;
}

export interface TivProjection {
    id: string;
    customer_name: string;
    proposed_date: string;
    orm_id: string;
    machine_id: string;
    competition1: string;
    competition2: string;
    user_id: string;
    created_by: string;
    created_on: string;
    status: string;
}

export interface RoiMarketting {
    id: string;
    marketing_event: string;
    deal: string;
    model: string;
    type: string;
    report: string;
}
export interface OrderLossData {
    customerName: string;
    district: string;
    subseg: string;
    hub: string;
    mcapplication: string;
    cusfleetsize: string;
    custype: string;
    phno: string;
    financeyear: string;
    com_oem?: string;
    model?: string;
    qnty?: string;
    bucket?: string;
    Participation?: string;
    visitafterlost?: string;
    visitdate?: string;
    rsonforloss?: string;
    rsonforbysany?: string;
    remarks?: string;
  }
  

  
  export interface SalesEngineerTarget {
    id: string;
    salesEngineer: string;
    district: string;
    salesCalls: string;
    newProspect: string;
    markettingActivity: string;
    newMachineSales: string;
    participationRate: string;
    marketShare: string;
    strikeRate: string;
  }

  export interface SalesManagerTarget {
    id: string;
    salesManager: string;
    district: string;
    salesCalls: string;
    newProspect: string;
    markettingActivity: string;
    newMachineSales: string;
    participationRate: string;
    marketShare: string;
    strikeRate: string;
    salesCallWithTeam: string;
    CoutesyCalls : string;
    CustomerVisitWithServiceTeam: string;
  }

  export interface GMTarget {
    id: string;
    salesManager: string;
    district: string;
    salesCalls: string;
    newProspect: string;
    markettingActivity: string;
    newMachineSales: string;
    participationRate: string;
    marketShare: string;
    strikeRate: string;
    salesCallWithTeam: string;
    CoutesyCalls : string;
    CustomerVisitWithServiceTeam: string;
    profitTargetSales:string;
    profitTargetService:string;
    profitTargetParts:string;
  }

  export interface Ofm {
    id: string;
    customerName: string;
    Address: string;
    GSTNumber: string;
    PANNumber: string;
    dateOfBirth: string;
    weddingAnniversery: string;
    participationRate: string;
    mcModel: string;
    financiarName: string;
    billingPrice: string;
    DoAmount : string;
    cashDiscount: string;
    ExchangeMachine:string;
    ExchangeMcOem:string;
    MachineModel:string;
    manufactureYear: string;
    purchasePrice: string;
    committedSellingPrice : string;
    leverageIfAny: string;
    marginMoney:string;
    warrentyExtends:string;
    offers:string;
  }
