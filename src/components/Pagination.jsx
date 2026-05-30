import { Button } from "react-bootstrap";

function Pagination({ currentPage, totalPages, onPrevious, onNext }) {
  return (
    <div className="d-flex justify-content-center align-items-center gap-3 my-4">
      <Button
        variant="outline-primary"
        onClick={onPrevious}
        disabled={currentPage === 1}
      >
        Föregående
      </Button>

      <span>
        Sida {currentPage} av {totalPages}
      </span>

      <Button
        variant="outline-primary"
        onClick={onNext}
        disabled={currentPage === totalPages}
      >
        Nästa
      </Button>
    </div>
  );
}

export default Pagination;