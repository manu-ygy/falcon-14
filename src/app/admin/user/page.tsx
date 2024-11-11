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
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from '@radix-ui/react-dropdown-menu';
import { MoreHorizontal } from 'lucide-react';

interface User {
  id: string;
  name: string;
  email: string;
  accountType: string;
  createdAt: string;
  userGroups: string[];
}

export default function StudentTable() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(false);
  const [openAddUser, setOpenAddUser] = useState(false);
  const [newUser, setNewUser] = useState({ name: '', email: '', accountType: 'student' });

  // Definisikan kolom tabel
  const columns: ColumnDef<User>[] = [
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
      accessorKey: 'email',
      header: 'Email',
      cell: info => info.getValue(), // Mendapatkan email
    },
    {
      accessorKey: 'accountType',
      header: 'Tipe akun',
      cell: info => (info.getValue() === 'guest') ? 'Tamu' : (info.getValue() === 'student') ? 'Murid' : 'Administrator', // Mendapatkan tipe akun
    },
    {
      accessorKey: 'createdAt',
      header: 'Created At',
      cell: info => new Date(info.getValue() as string).toLocaleDateString(), // Format tanggal pembuatan
    },
    {
      accessorKey: 'userGroups',
      header: 'Groups',
      cell: info => (info.getValue() as string[]).join(', '), // Gabungkan array grup menjadi string
    },
    {
      id: 'actions',
      enableHiding: false,
      cell: ({row}) => {
        const currentRow = row.original

        return (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="h-8 w-8 p-0">
                <MoreHorizontal className="w-4 h-4 text-zinc-900"/>
              </Button>
            </DropdownMenuTrigger>

            <DropdownMenuContent align="end">
              <DropdownMenuItem>Apa kabar</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        )
      }
    }
  ];

  useEffect(() => {
    fetchUsers(); // Ambil data pengguna saat pertama kali dimuat
  }, []);

  const fetchUsers = async () => {
    setLoading(true);
    try {
      const response = await fetch('/api/users'); // Panggil API untuk mengambil data
      const data = await response.json();
      setUsers(data); // Simpan data pengguna
    } catch (error) {
      console.error(error); // Jika ada error, tampilkan di konsol
    } finally {
      setLoading(false); // Set loading menjadi false setelah data diterima
    }
  };

  const handleAddUser = async () => {
    try {
      const response = await fetch('/api/users', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newUser), // Kirim data pengguna baru ke API
      });
      if (response.ok) {
        fetchUsers(); // Refresh data pengguna setelah menambah pengguna baru
        setOpenAddUser(false); // Tutup modal
      }
    } catch (error) {
      console.error(error); // Jika ada error, tampilkan di konsol
    }
  };

  return (
    <div>
      {/* Input Pencarian dan Tombol Tambah Siswa */}
      <div className="w-full flex gap-2">
        <Button onClick={() => setOpenAddUser(true)} className="ml-auto">Tambah siswa</Button>
      </div>

      {/* Tabel Data Pengguna */}
      <DataTable
        data={users} // Data pengguna dari state
        columns={columns} // Kolom yang sudah didefinisikan
        searchPlaceholder="Search students..." // Placeholder pencarian
        isLoading={loading}
      />

      {/* Modal untuk Menambah Siswa Baru */}
      <Dialog open={openAddUser} onOpenChange={setOpenAddUser}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Tambah user</DialogTitle>
          </DialogHeader>
          <DialogDescription>

          </DialogDescription>
          <form onSubmit={(e) => { e.preventDefault(); handleAddUser(); }} className="flex flex-col gap-4">
            <div className = "grid grid-cols-4 items-center">
              <Label>Nama</Label>
              <Input
                type="text"
                placeholder="John Doe"
                value={newUser.name}
                onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
                required
                className="col-span-3"
              />
            </div>

            <div className = "grid grid-cols-4 items-center">
              <Label>Alamat e-mail</Label>
              <Input
                type="email"
                placeholder="me@mail.com"
                value={newUser.email}
                onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
                required
                className="col-span-3"
              />
            </div>

            <div className = "grid grid-cols-4 items-center">
              <Label>Tipe akun</Label>
              <Select>
                <SelectTrigger className = "col-span-3">
                  <SelectValue placeholder = "Pilih..."/>
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value = "student">Siswa</SelectItem>
                  <SelectItem value = "teacher">Guru</SelectItem>
                  <SelectItem value = "administrator">Administrator</SelectItem>
                  <SelectItem value = "guest">Tamu</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="grid grid-cols-4 items-center">
              <Label>Grup</Label>
              <Input placeholder="Ketik untuk tambah..." className = "col-span-3"></Input>
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
