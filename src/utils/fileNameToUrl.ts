import { type RecordModel } from "pocketbase";
import pb from "./pb";
import { type Project } from "@/types/Project.type";

const fileNameToUrl = (fileName: string, data: Project) => {
  if (fileName) {
    const record = {
      id: data?.id,
      collectionId: data?.collectionId,
      collectionName: data?.collectionName,
    } as RecordModel;

    const url = pb.files.getUrl(record, fileName, { thumb: "100x250" });
    return url;
  }
};

export default fileNameToUrl;
