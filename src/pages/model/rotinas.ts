
export class EventoRotina {

    sinaisvitais = [
        {
            rotina: "Pressão Arterial",
            template: "/app/evento/pressaoarterial.html"
        },
        {
            rotina: "Frequência Cardíaca",
            template: "/app/evento/frequenciacardiaca.html"
        },
        {
            rotina: "Temperatura Corporal",
            template: "/app/evento/temperatura.xhtml"
        },
        {
            rotina: "Frequência Respiratória",
            template: "/app/evento/frequenciarespiratoria.xhtml"
        },
        {
            rotina: "Saturação de Oxigênio (oximetria)",
            template: "/app/evento/oximetria.xhtml"
        },
        {
            rotina: "Controle da Glicemia",
            template: "/app/evento/glicemia.xhtml"
        }];

    respiratorio = [
        {
            rotina: "Aspiração Traqueal",
            opcoes: ["Oral", "Nasal"],
            quantidade: ["Pouco", "Normal", "Grande"],
            aspecto: ["Seroide", "Mucosa", "Purulenta"],
            template: "/app/evento/traqueal.xhtml"
        },
        {
            rotina: "Frequência Cardíaca",
            opcoes: ["Oral", "Nasal"],
            quantidade: ["Pouco", "Normal", "Grande"],
            aspecto: ["Seroide", "Mucosa", "Purulenta"],
            template: "/app/evento/nebulizacao.xhtml"
        }
    ];

    nutricao = [
        {
            rotina: "Café da manhã",
            opcoes: ["Aceitou bem", "Aceitou parcialmente", "Não aceitou"],
            template: "/app/evento/cafe.xhtml"
        },
        {
            rotina: "Almoço",
            opcoes: ["Aceitou bem", "Aceitou parcialmente", "Não aceitou"],
            template: "/app/evento/almoco.xhtml"
        },
        {
            rotina: "Jantar",
            opcoes: ["Aceitou bem", "Aceitou parcialmente", "Não aceitou"],
            template: "/app/evento/jantar.xhtml"
        },
        {
            rotina: "Ceia",
            opcoes: ["Aceitou bem", "Aceitou parcialmente", "Não aceitou"],
            template: "/app/evento/ceia.xhtml"
        },
        {
            rotina: "Lanche",
            opcoes: ["Aceitou bem", "Aceitou parcialmente", "Não aceitou"],
            template: "/app/evento/lanche.xhtml"
        },
        {
            rotina: "Ingestão de Líquidos",
            opcoes: ["Pouco", "Moderada", "Grande"],
            template: "/app/evento/liquidos.xhtml"
        }
    ];

    medicacao = [
        {
            rotina: "Hipertensão Arterial",
            template: "/app/evento/ha.html"
        },
        {
            rotina: "Diabetes",
            template: "/app/evento/diabetes.html"
        },
        {
            rotina: "HIV",
            template: "/app/evento/hiv.xhtml"
        },
        {
            rotina: "Cardiopatia (problemas cardiacos)",
            template: "/app/evento/cardiopatia.xhtml"
        },
        {
            rotina: "Asma/bronquite",
            template: "/app/evento/asma.xhtml"
        },
        {
            rotina: "Pneumopatia (enfizema, bronquite, pneumonia)",
            template: "/app/evento/pneumo.xhtml"
        },
        {
            rotina: "Acidente vascular cerebral",
            template: "/app/evento/avc.html"
        },
        {
            rotina: "Obesidade",
            template: "/app/evento/obesidade.xhtml"
        },
        {
            rotina: "Renal crônico",
            template: "/app/evento/renal.xhtml"
        },
        {
            rotina: "Epilepsia",
            template: "/app/evento/epilepsia.xhtml"
        },
        {
            rotina: "Cancer",
            template: "/app/evento/cancer.xhtml"
        },
        {
            rotina: "Faz uso de Traqueostomia",
            template: "/app/evento/traqueo.html"
        },
        {
            rotina: "Faz uso de Oxigenioterapia",
            template: "/app/evento/oxigen.xhtml"
        },
        {
            rotina: "Hepatite",
            template: "/app/evento/hepatite.xhtml"
        },
        {
            rotina: "Problemas Neurológicos",
            template: "/app/evento/neuro.xhtml"
        },
        {
            rotina: "Outros",
            template: "/app/evento/outros.xhtml"
        }
    ];
    higiene = [
        {
            rotina: "Realização de Banho",
            template: "/app/evento/banho.html"
        },
        {
            rotina: "Higiene Oral",
            template: "/app/evento/higieneoral.html"
        }
    ];
    eliminacao = [
        {
            rotina: "Urina",
            quantidade: ["Pouco", "Normal", "Grande"],
            aspecto: ["Clara", "Escura", "Avermelhada"],
            template: "/app/evento/urina.xhtml"
        },
        {
            rotina: "Fezes",
            quantidade: ["Pouco", "Normal", "Grande"],
            aspecto: ["Líquido", "Pastoso", "Endurecido", "Fecaloma,Sangue"],
            template: "/app/evento/fezes.xhtml"
        },
        {
            rotina: "Vomito",
            quantidade: ["Pouco", "Normal", "Grande"],
            aspecto: ["Restos Alimentares", "Amarelo", "Sangue", "Borra de Café"],
            template: "/app/evento/vomito.xhtml"
        }
    ];
    consulta = [
        {
            rotina: "Consultas de Saúde",
            template: "/app/evento/consulta.html"
        }
    ];

    bemestar = [
        {
            rotina: "Sono - Acordou",
            opcoes: ["Dormiu bem", "Agitou", "Insônia"],
            template: "/app/evento/acordou.xhtml"
        },
        {
            rotina: "Sono - Dormiu",
            opcoes: ["Normal", "A base de remédios"],
            template: "/app/evento/dormiu.xhtml"
        },
        {
            rotina: "Passeios",
            opcoes: ["Iniciou", "Retornou"],
            template: "/app/evento/passeio.xhtml"
        },
        {
            rotina: "Nível de Consciência",
            opcoes: ["Acordado", "Sonolento", "Irresponsivo"],
            template: "/app/evento/conscie.xhtml"
        },
        {
            rotina: "Humor",
            opcoes: ["Alegre", "Calmo", "Apático", "Depressivo", "Agressivo", "Agitado"],
            template: "/app/evento/humor.xhtml"
        }
    ];
    atividade = [
        {
            rotina: "Arterapia",
            template: "/app/evento/arterapia.html"
        },
        {
            rotina: "Estimulação Cognitiva",
            template: "/app/evento/cognitiva.html"
        },
        {
            rotina: "Massagem",
            template: "/app/evento/massagem.html"
        },
        {
            rotina: "Dança",
            template: "/app/evento/danca.html"
        },
        {
            rotina: "Atividade Física",
            template: "/app/evento/fisica.html"
        },
        {
            rotina: "Atividades Lúdicas",
            template: "/app/evento/ludica.html"
        },
        {
            rotina: "Outras",
            template: "/app/evento/outra.html"
        }
    ];
    eventos =
        [{ descricao: "Sinais Vitais", rotinas: this.sinaisvitais },
        { descricao: "Respiratório", rotinas: this.respiratorio },
        { descricao: "Nutrição", rotinas: this.nutricao },
        { descricao: "Medicação", rotinas: this.medicacao },
        { descricao: "Interocorrências", rotinas: null },
        { descricao: "Higiene", rotinas: this.higiene },
        { descricao: "Eliminações", rotinas: this.eliminacao },
        { descricao: "Dor", rotinas: null },
        { descricao: "Consultas", rotinas: this.consulta },
        { descricao: "Bem Estar", rotinas: this.bemestar },
        { descricao: "Atividades", rotinas: this.atividade }
        ];

    
        constructor(){
          
        }

    getDescricaoEvento(): string[] {
        return this.eventos.map(this.mapDescricao);
    }

    getRotinas(descricao:string){
        let pos = this.eventos.map(_eventos=>{return _eventos.descricao}).indexOf(descricao);
        return this.eventos[pos].rotinas;
    }


    private mapDescricao(element): string {
        return element.descricao;
    }

    private filterDescricaoEvento(element, index, array): string {
        return (element);
    }




}






