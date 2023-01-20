export class CDipendente {
    public id: number;
    public nome: string;
    public cognome: string;
    public dataDiNascita: string;
    public email: string;

    public constructor(id: number, nome: string, cognome: string, dataDiNascita: string, email: string) {
      this.id = id;
      this.nome = nome;
      this.cognome = cognome;
      this.dataDiNascita = dataDiNascita;
      this.email = email;
     
    }
  
    public getName(): string {
      return this.nome + ' ' + this.cognome;
    }
}
