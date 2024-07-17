function Props(Props) {
    const {meja, buku, penghapus, siswa} = Props;
    return ( 
        <>
        {siswa ?
        <div>
            <h2>Pesan dari meja : {meja}</h2>
            <p>Buku : {buku}</p>
            <p>Penghapus : {penghapus}</p>
        </div>:
        <p> Anda bukan siswa</p>
        }
        </>
     );
}

export default Props;