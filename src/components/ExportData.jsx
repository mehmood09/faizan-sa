import { useExportData } from 'react-table-plugins'
import Papa from "papaparse";
import XLSX from "xlsx";
import JsPDF from "jspdf";
import "jspdf-autotable";

import React from 'react'

function getExportFileBlob({ columns, data, fileType, fileName }) {
    if (fileType === "csv") {
        // CSV example
        const headerNames = columns.filter((c) => c.Header != 'Action').map((col) => col.exportValue);
        const csvString = Papa.unparse({ fields: headerNames, data });
        return new Blob([csvString], { type: "text/csv" });
    } else if (fileType === "xlsx") {
        // XLSX example

        const header = columns.filter((c) => c.Header != 'Action').map((c) => c.exportValue);
        const compatibleData = data.map((row) => {
            const obj = {};
            header.forEach((col, index) => {
                obj[col] = row[index];
            });
            return obj;
        });

        let wb = XLSX.utils.book_new();
        let ws1 = XLSX.utils.json_to_sheet(compatibleData, {
            header,
        });
        XLSX.utils.book_append_sheet(wb, ws1, "React Table Data");
        XLSX.writeFile(wb, `${fileName}.xlsx`);

        // Returning false as downloading of file is already taken care of
        return false;
    }
    //PDF example
    if (fileType === "pdf") {
        const headerNames = columns.filter((c) => c.Header != 'Action').map((column) => column.exportValue);
        const doc = new JsPDF();
        doc.autoTable({
            head: [headerNames],
            body: data,
            styles: {
                minCellHeight: 9,
                halign: "left",
                valign: "center",
                fontSize: 11,
            },
        });
        doc.save(`${fileName}.pdf`);

        return false;
    }

    // Other formats goes here
    return false;
}

const ExportData = () => {

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        prepareRow,
        setFilter,
        page, // Instead of using 'rows', we'll use page,
        // which has only the rows for the active page
        exportData,
        // The rest of these things are super handy, too ;)
        canPreviousPage,
        canNextPage,
        pageOptions,
        pageCount,
        gotoPage,
        nextPage,
        previousPage,
        setPageSize,
        selectedFlatRows,
        state: { pageIndex, pageSize, selectedRowIds },
    } = useTable(

        {
            columns,
            data,
            defaultColumn,
            updateMyData, skipPageReset,
            initialState: { pageIndex: 2 },
            getExportFileBlob,
        }, useFilters, useGroupBy, useSortBy, useExpanded, usePagination, useExportData,
    )
    return (

        <div className="form-group input-group">
            <button class="btn btnexport mr-1"
                onClick={() => {
                    exportData("csv", true);
                }}
            ><i class="fa fa-file-csv"></i>{' '}
                Export  as CSV
            </button>{' '}
            <button class="btn btnexport mr-1"
                onClick={() => {
                    exportData("xlsx", true);
                }}
            ><i class="fa fa-file-excel"></i>{' '}
                Export  as xlsx
            </button>{' '}
            <button class="btn btnexport mr-1"
                onClick={() => {
                    exportData("pdf", true);
                }}
            ><i class="fa fa-file-pdf"></i>
                Export as PDF
            </button>
        </div>

    )
}

export default ExportData


