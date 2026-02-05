"use client";
import React, { useState } from 'react';
import { ChevronDown, ChevronLeft, ChevronRight } from 'lucide-react';

interface Invoice {
    id: string;
    no: string;
    subject: string;
    client: string;
    vatNo: string;
    created: string;
    status: 'Paid' | 'Pending' | 'Due in 2 Weeks' | 'Due in 3 Weeks' | 'Paid Today';
    price: string;
    countryCode: string;
}

const invoices: Invoice[] = [
    { id: '1', no: '001401', subject: 'Design Works', client: 'Carlson Limited', vatNo: '87956621', created: '15 Dec 2017', status: 'Paid', price: '$887', countryCode: '🇺🇸' },
    { id: '2', no: '001402', subject: 'UX Wireframes', client: 'Adobe', vatNo: '87956421', created: '12 Apr 2017', status: 'Pending', price: '$1200', countryCode: '🇬🇧' },
    { id: '3', no: '001403', subject: 'New Dashboard', client: 'Bluewolf', vatNo: '87952621', created: '23 Oct 2017', status: 'Pending', price: '$534', countryCode: '🇩🇪' },
    { id: '4', no: '001404', subject: 'Landing Page', client: 'Salesforce', vatNo: '87953421', created: '2 Sep 2017', status: 'Due in 2 Weeks', price: '$1500', countryCode: '🇧🇷' },
    { id: '5', no: '001405', subject: 'Marketing Templates', client: 'Printic', vatNo: '87956621', created: '29 Jan 2018', status: 'Paid Today', price: '$648', countryCode: '🇵🇱' },
    { id: '6', no: '001406', subject: 'Sales Presentation', client: 'Tabdaq', vatNo: '87956621', created: '4 Feb 2018', status: 'Due in 3 Weeks', price: '$300', countryCode: '🇧🇷' },
    { id: '7', no: '001407', subject: 'Logo & Print', client: 'Apple', vatNo: '87956621', created: '22 Mar 2018', status: 'Paid Today', price: '$2500', countryCode: '🇺🇸' },
    { id: '8', no: '001408', subject: 'Icons', client: 'Tookapic', vatNo: '87956621', created: '13 May 2018', status: 'Paid Today', price: '$940', countryCode: '🇵🇱' },
];

const getStatusColor = (status: string) => {
    switch (status) {
        case 'Paid':
        case 'Paid Today': return 'bg-green-500';
        case 'Pending': return 'bg-orange-500';
        case 'Due in 2 Weeks':
        case 'Due in 3 Weeks': return 'bg-slate-400';
        default: return 'bg-gray-400';
    }
};

const InvoicesService = () => {
    const [selected, setSelected] = useState<string[]>(['1', '2']);

    const toggleRow = (id: string) => {
        setSelected(prev =>
            prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
        );
    };

    const toggleAll = () => {
        if (selected.length === invoices.length) {
            setSelected([]);
        } else {
            setSelected(invoices.map(i => i.id));
        }
    };

    return (
        <div className="w-[73.5%] mx-auto rounded-lg shadow-sm border border-gray-200 overflow-hidden font-sans">

            {/* Header */}
            <div className="p-4 border-b border-gray-100 bg-white">
                <h2 className="text-lg font-semibold text-gray-800">Invoices</h2>
            </div>

            {/* Table */}
            <div className="overflow-x-auto">
                <table className="w-full text-left text-sm">

                    {/* Head */}
                    <thead className="bg-gray-50 text-gray-400 font-medium border-y border-gray-100 uppercase text-[11px] tracking-wider">
                        <tr>
                            <th className="px-4 py-3 w-10">
                                <input
                                    type="checkbox"
                                    checked={selected.length === invoices.length}
                                    onChange={toggleAll}
                                />
                            </th>
                            <th className="px-4 py-3">No.</th>
                            <th className="px-4 py-3">Invoice Subject</th>
                            <th className="px-4 py-3">Client</th>
                            <th className="px-4 py-3">Vat No.</th>
                            <th className="px-4 py-3">Created</th>
                            <th className="px-4 py-3">Status</th>
                            <th className="px-4 py-3">Price</th>
                            <th className="px-4 py-3"></th>
                        </tr>
                    </thead>

                    {/* Body */}
                    <tbody className="divide-y divide-gray-100">
                        {invoices.map(invoice => {
                            const isSelected = selected.includes(invoice.id);

                            return (
                                <tr
                                    key={invoice.id}
                                    onClick={() => toggleRow(invoice.id)}
                                    className={`transition cursor-pointer ${isSelected ? 'bg-[#ecf4fc]' : 'hover:bg-gray-50'
                                        }`}
                                >
                                    <td className="px-4 py-4">
                                        <input
                                            type="checkbox"
                                            checked={isSelected}
                                            onChange={() => toggleRow(invoice.id)}
                                            onClick={(e) => e.stopPropagation()}
                                            className="w-[17px] h-[17px]  rounded-[5px] accent-[#066FD1]"
                                        />

                                    </td>

                                    <td className="px-4 py-4 text-gray-500 font-medium">{invoice.no}</td>
                                    <td className="px-4 py-4 text-gray-700">{invoice.subject}</td>

                                    <td className="px-4 py-4 flex items-center gap-2">
                                        <span className="text-lg">{invoice.countryCode}</span>
                                        <span>{invoice.client}</span>
                                    </td>

                                    <td className="px-4 py-4 text-gray-500">{invoice.vatNo}</td>
                                    <td className="px-4 py-4 text-gray-500">{invoice.created}</td>

                                    <td className="px-4 py-4 flex items-center gap-2">
                                        <span className={`w-2 h-2 rounded-full ${getStatusColor(invoice.status)}`}></span>
                                        <span className="text-gray-700">{invoice.status}</span>
                                    </td>

                                    <td className="px-4 py-4 font-semibold text-gray-800">{invoice.price}</td>

                                    <td className="px-4 py-4 text-right">
                                        <button className="border border-gray-300 rounded px-3 py-1 flex items-center gap-1 text-gray-600 hover:bg-gray-50">
                                            Actions <ChevronDown className="w-4 h-4" />
                                        </button>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>

                </table>
            </div>

            {/* Pagination */}
            <div className="p-4 border-t border-gray-100 flex justify-between text-sm text-gray-500">
                <p>Showing 1 to 8 of 16 entries</p>

                <div className="flex items-center gap-1">
                    <button className="p-2 hover:bg-gray-100 rounded-md"><ChevronLeft className="w-4 h-4" /></button>
                    {[1, 2, 3, 4, 5].map(page => (
                        <button key={page} className={`w-8 h-8 rounded-md ${page === 3 ? 'bg-blue-600 text-white' : 'hover:bg-gray-100'}`}>
                            {page}
                        </button>
                    ))}
                    <button className="p-2 hover:bg-gray-100 rounded-md"><ChevronRight className="w-4 h-4" /></button>
                </div>
            </div>

        </div>
    );
};

export default InvoicesService;
