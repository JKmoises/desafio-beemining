import Link from "next/link";

interface AppProps {
  page: number;
  totalPages: number;
}

export const GridPagination = ({ page, totalPages }: AppProps) => {
  return (
    <nav aria-label="Paginación de grilla">
      <ul className="pagination d-flex justify-content-center">
        {page > 1 && (
          <li className="page-item">
            <Link
              className="page-link border-secondary text-dark text-uppercase fw-bolder"
              href={`/?page=${page - 1}`}
              aria-label="Previous"
            >
              <span aria-hidden="true">Anterior</span>
            </Link>
          </li>
        )}

        {page < totalPages && (
          <li className="page-item">
            <Link
              className="page-link border-secondary text-dark text-uppercase fw-bolder"
              href={`/?page=${page + 1}`}
              aria-label="Next"
            >
              <span aria-hidden="true">Siguiente</span>
            </Link>
          </li>
        )}
      </ul>
    </nav>
  );
};
