'use client';

import { useState, useEffect } from 'react';
import { DataTable } from '@/components/custom/dashboard/table'; // Asumsikan ini adalah reusable table component
import { ColumnDef } from '@tanstack/react-table';
import { Button } from '@/components/ui/button';
import { Dialog, DialogTitle, DialogDescription, DialogTrigger, DialogContent, DialogHeader, DialogFooter } from '@/components/ui/dialog';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import { Select, SelectTrigger, SelectContent, SelectLabel, SelectItem } from '@/components/ui/select';
import { SelectValue } from '@radix-ui/react-select';

interface User {
  id: string;
  name: string;
  email: string;
  accountType: string;
  createdAt: string;
  userGroups: string[];
}

interface Group {
    id: string;
    name: string;
}

export default function GroupTable() {
  const [group, setGroup] = useState<Group[]>([]);
  const [loading, setLoading] = useState(false);
  const [openAddGroup, setOpenAddGroup] = useState(false);
  const [newGroup, setNewGroup] = useState({ name: '', email: '', accountType: 'student' });

  // Definisikan kolom tabel
  const columns: ColumnDef<Group>[] = [
    {
      id: "select",
      header: ({ table }) => (
        <Checkbox
          checked={
            table.getIsAllPageRowsSelected() ||
            (table.getIsSomePageRowsSelected() && "indeterminate")
          }
          onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
          aria-label="Select all"
        />
      ),
      cell: ({ row }) => (
        <Checkbox
          checked={row.getIsSelected()}
          onCheckedChange={(value) => row.toggleSelected(!!value)}
          aria-label="Select row"
        />
      ),
      enableSorting: false,
      enableHiding: false,
    },
    {
      accessorKey: 'name',
      header: 'Nama',
      cell: info => info.getValue(), // Mendapatkan nama
    },
    {
        accessorKey: 'createdAt',
        header: 'Dibuat pada',
        cell: info => info.getValue()
    },
    {
        accessorKey: '_count.users',
        header: 'Jumlah anggota',
        cell: info => info.getValue(), // Format tanggal pembuatan
    },
    {
        accessorKey: 'createdAt',
        header: 'Created At',
        cell: info => new Date(info.getValue() as string).toLocaleDateString(), // Format tanggal pembuatan
    },
  ];

  useEffect(() => {
    fetchUsers(); // Ambil data pengguna saat pertama kali dimuat
  }, []);

  const fetchUsers = async () => {
    setLoading(true);
    try {
      const response = await fetch('/api/users/group'); // Panggil API untuk mengambil data
      const data = await response.json();
      setGroup(data); // Simpan data pengguna
    } catch (error) {
      console.error(error); // Jika ada error, tampilkan di konsol
    } finally {
      setLoading(false); // Set loading menjadi false setelah data diterima
    }
  };

  const handleAddUser = async () => {
    try {
      const response = await fetch('/api/users/group', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newGroup), // Kirim data pengguna baru ke API
      });
      if (response.ok) {
        fetchUsers(); // Refresh data pengguna setelah menambah pengguna baru
        setOpenAddGroup(false); // Tutup modal
      }
    } catch (error) {
      console.error(error); // Jika ada error, tampilkan di konsol
    }
  };

  return (
    <div>
      {/* Input Pencarian dan Tombol Tambah Siswa */}
      <div className="w-full flex gap-2">
        <Button onClick={() => setOpenAddGroup(true)} className="ml-auto">Tambah grup</Button>
      </div>

      {/* Tabel Data Pengguna */}
      <DataTable
        data={group} // Data pengguna dari state
        columns={columns} // Kolom yang sudah didefinisikan
        searchPlaceholder="Cari grup..." // Placeholder pencarian
      />

      {/* Modal untuk Menambah Siswa Baru */}
      <Dialog open={openAddGroup} onOpenChange={setOpenAddGroup}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Tambah grup</DialogTitle>
          </DialogHeader>
          <DialogDescription>

          </DialogDescription>
          <form onSubmit={(e) => { e.preventDefault(); handleAddUser(); }} className="flex flex-col gap-4">
            <div className = "grid grid-cols-4 items-center">
              <Label>Nama</Label>
              <Input
                type="text"
                placeholder="Siswa kelas 10"
                value={newGroup.name}
                onChange={(e) => setNewGroup({ ...newGroup, name: e.target.value })}
                required
                className="col-span-3"
              />
            </div>

            <DialogFooter>
              <Button type="submit">Tambah</Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}
