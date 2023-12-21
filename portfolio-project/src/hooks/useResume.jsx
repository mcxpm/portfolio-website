import { ref, getDownloadURL } from "firebase/storage";
import { storage } from "../config/firebase.js";
import { useState, useEffect } from "react";

export function useResume() {
  const [resumeUrl, setResumeUrl] = useState();

  useEffect(() => {
    const storageRef = ref(storage, "documents/CVFinal - Copy.pdf");

    getDownloadURL(storageRef)
      .then((url) => setResumeUrl(url))
      .catch((e) => {
        console.log(`Error fetching resume from Firebase:\n${e.message}`);
      });
  }, []);

  return resumeUrl;
}
