export interface ISendEmailResponse {
    destinationName: string;
    destinationAddress: string;
    dueDate: Date;
    subject: string;
    body: string;
    deletedAt?: any;
    id: string;
    status: string;
    createdAt: Date;
    updatedAt: Date;
}