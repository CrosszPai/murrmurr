export interface post {
    id: string;
    campus: string;
    content: string;
    createAt: Date;
    userId: string;
    replyCount: number;
    userName: string
}

export interface reply {
    Icon: number;
    content: string;
    createAt: Date;
    postRef: string;
    userId: string;
    userName: string;
    createId: string;
    postContent: String;
}