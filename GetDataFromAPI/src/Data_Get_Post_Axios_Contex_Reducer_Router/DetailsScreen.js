import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { DataContext } from "./DataContext";
export default function DetailsScreen() {
  const { state, setDetailsId } = useContext(DataContext);
  const { id } = useParams();
  const detailsID = parseInt(id);

  useEffect(() => {
    setDetailsId(detailsID);
  }, [detailsID]);

  return (
    <div>
      {state.getDataPostState.loading && "Loading ..."}
      {state.getDataPostState.data && (
        <>
          <h3>{state.getDataPostState.data.title}</h3>
          <h3>{state.getDataPostState.data.id}</h3>
        </>
      )}
      {state.getDataPostState.error ? state.getDataPostState.error : null}
    </div>
  );
}
