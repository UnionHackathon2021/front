import { getRequest } from "../default";
import uri from "../uri";

export const getReview = async () => {
  try {
    const request = getRequest();
    const response = await request.get(uri.review);
    return response;
  } catch (error) {
    throw error;
  }
};

export const postReview = async (content: string) => {
  try {
    const request = getRequest();
    const response = await request.post(uri.review, {
      content: content,
    });
    return response;
  } catch (error) {
    throw error;
  }
};
