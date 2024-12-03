export const webTableSnapshot = `
- grid:
  - row "First Name Last Name Age Email Salary Department Action":
    - columnheader "First Name"
    - columnheader "Last Name"
    - columnheader "Age"
    - columnheader "Email"
    - columnheader "Salary"
    - columnheader "Department"
    - columnheader "Action"
  - rowgroup:
    - row /Cierra Vega \\d+ cierra@example\\.com \\d+ Insurance Edit Delete/:
      - gridcell "Cierra"
      - gridcell "Vega"
      - gridcell /\\d+/
      - gridcell "cierra@example.com"
      - gridcell /\\d+/
      - gridcell "Insurance"
      - gridcell "Edit Delete":
        - img
        - img
  - rowgroup:
    - row /Alden Cantrell \\d+ alden@example\\.com \\d+ Compliance Edit Delete/:
      - gridcell "Alden"
      - gridcell "Cantrell"
      - gridcell /\\d+/
      - gridcell "alden@example.com"
      - gridcell /\\d+/
      - gridcell "Compliance"
      - gridcell "Edit Delete":
        - img
        - img
  - rowgroup:
    - row /Kierra Gentry \\d+ kierra@example\\.com \\d+ Legal Edit Delete/:
      - gridcell "Kierra"
      - gridcell "Gentry"
      - gridcell /\\d+/
      - gridcell "kierra@example.com"
      - gridcell /\\d+/
      - gridcell "Legal"
      - gridcell "Edit Delete":
        - img
        - img
  - rowgroup:
    - row:
      - gridcell
      - gridcell
      - gridcell
      - gridcell
      - gridcell
      - gridcell
      - gridcell
  - rowgroup:
    - row:
      - gridcell
      - gridcell
      - gridcell
      - gridcell
      - gridcell
      - gridcell
      - gridcell
  - rowgroup:
    - row:
      - gridcell
      - gridcell
      - gridcell
      - gridcell
      - gridcell
      - gridcell
      - gridcell
  - rowgroup:
    - row:
      - gridcell
      - gridcell
      - gridcell
      - gridcell
      - gridcell
      - gridcell
      - gridcell
  - rowgroup:
    - row:
      - gridcell
      - gridcell
      - gridcell
      - gridcell
      - gridcell
      - gridcell
      - gridcell
  - rowgroup:
    - row:
      - gridcell
      - gridcell
      - gridcell
      - gridcell
      - gridcell
      - gridcell
      - gridcell
  - rowgroup:
    - row:
      - gridcell
      - gridcell
      - gridcell
      - gridcell
      - gridcell
      - gridcell
      - gridcell
- button "Previous" [disabled]
- text: Page
- spinbutton "jump to page"
- text: of 1
- combobox "rows per page":
  - option "5 rows"
  - option /\\d+ rows/ [selected]
  - option /\\d+ rows/
  - option /\\d+ rows/
  - option /\\d+ rows/
  - option /\\d+ rows/
- button "Next" [disabled]
- text: Loading...
`;