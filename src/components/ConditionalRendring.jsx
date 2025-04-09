import React from "react";
// multiple return , tenary operator, short circuit
const ConditionalRendring = () => {
  const isLoading = false;
  const isSubmitting = true;
  const isError = true;

  if (isLoading) {
    return <h1>Loading....</h1>;
  }

  return (
    <div>
      <h1>MAIN CONTENT</h1>
      <button className="mybtn">
        {isSubmitting ? "Submitting..." : "Submit"}
      </button>
      {isError && <h1>Error Loading Page, try again</h1>}
    </div>
  );
};

export default ConditionalRendring;
