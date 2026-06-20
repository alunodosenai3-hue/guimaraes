import { Benefit, ServiceItem, CaseStudy, Testimonial, GoogleReview, FAQItem } from "./types";

export const BRAND_INFO = {
  name: "Saraiva Advocacia da Saúde",
  cnpj: "42.890.312/0001-89",
  oab: "OAB/BA 48.912",
  phone: "(71) 9 8198-4595",
  phoneRaw: "+5571981984595",
  email: "contato@saraivaadvsaude.com.br",
  address: "Av. Tancredo Neves, 1632, Edif. Salvador Trade Center, Torre Norte, Sala 904 - Caminho das Árvores, Salvador - BA, 41820-020",
  whatsappMessage: "Olá! Preciso de ajuda urgente com uma negativa de cobertura médica. Gostaria de falar com um especialista.",
  headline: "A Solução Definitiva em Assessoria Jurídica Especializada contra Abusos de Planos de Saúde e SUS para Você Obter a liberação imediata e segura de procedimentos médicos e cirurgias.",
  subheadline: "Descubra como a Saraiva Advocacia da Saúde ajuda moradores de Salvador/Bahia a reverter negativas de cirurgias, tratamentos ou fornecimento de medicamentos de alto custo pelo plano de saúde ou SUS com agilidade jurídica comprovada.",
  ctaText: "Obter Liberação de Procedimento Agora!",
  guaranteeText: "Transparência total e conformidade integral com o Código de Ética e Disciplina da OAB. Lutamos incansavelmente pelo seu direito à saúde.",
  priceLabel: "Sob Consulta",
  pricePromo: "Atendimento imediato e análise de viabilidade gratuita"
};

export const BENEFITS_LIST: Benefit[] = [
  {
    id: "b1",
    title: "Direito à Vida em Primeiro Lugar",
    description: "Revertemos negativas abusivas de cirurgias de urgência, internações, UTIs ou exames de alta complexidade em prazos recordes através de pedidos de liminares.",
    tagline: "Proteção imediata",
    badge: "Urgente"
  },
  {
    id: "b2",
    title: "Medicamentos de Alto Custo",
    description: "Conquiste judicialmente o fornecimento de medicações oncológicas, autoimunes ou raras que foram negadas pelo plano ou pelo SUS em Salvador.",
    tagline: "Acesso garantido",
    badge: "Alto Custo"
  },
  {
    id: "b3",
    title: "Garantia de Resposta Rápida",
    description: "Nossa metodologia ágil e contato personalizado via WhatsApp garantem suporte permanente em Salvador para reverter abusos sem burocracias desnecessárias.",
    tagline: "Resultados até 3x mais velozes",
    badge: "Suporte Premium"
  },
  {
    id: "b4",
    title: "Análise Reversa da Negativa",
    description: "Realizamos uma perícia técnica completa dos laudos e do contrato com o plano de saúde para fundamentar uma petição cível inabalável perante o juiz.",
    tagline: "Forte embasamento",
    badge: "Metodologia Exclusiva"
  }
];

export const SERVICES_LIST: ServiceItem[] = [
  {
    id: "s1",
    title: "Liminares Médicas Urgentes",
    description: "Pedidos de urgência (tutela de urgência) para decisões judiciais em 24h a 48h para viabilizar cirurgias urgentes e órteses/próteses.",
    iconName: "Flame",
    urgency: "Urgência Máxima",
    details: [
      "Negativas de marcapassos e stents",
      "Cirurgias cardíacas e oncológicas",
      "Internação em UTI negada pelo plano",
      "Home Care prescrito e recusado"
    ]
  },
  {
    id: "s2",
    title: "Liberação de Medicamentos Especiais",
    description: "Ação judicial para forçar planos de saúde ou o Estado (SUS) a fornecer medicamentos importados ou não listados no rol da ANS.",
    iconName: "Pills",
    urgency: "Urgência Alta",
    details: [
      "Quimioterapias e tratamentos imunológicos",
      "Medicamentos órfãos e de alta tecnologia",
      "Negativas sob pretexto de 'uso experimental'",
      "Tratamentos para doenças raras"
    ]
  },
  {
    id: "s3",
    title: "Ações por Erro de Reajuste Abusivo",
    description: "Revisão jurídica de contratos com reajustes abusivos por mudança de faixa etária ou aumentos anuais muito acima da inflação permitida.",
    iconName: "TrendingUp",
    urgency: "Prazo Preventivo",
    details: [
      "Aumentos abusivos aos 59 anos",
      "Reajustes abusivos de planos coletivos",
      "Devolução de valores pagos indevidamente",
      "Manutenção da mensalidade original justa"
    ]
  },
  {
    id: "s4",
    title: "Reembolsos Integrais de Tratamentos",
    description: "Cobrança legal de valores pagos em clínicas particulares quando o plano não possuía rede credenciada apta ou em casos de extrema emergência.",
    iconName: "ReceiptCheck",
    urgency: "Prazo de 30 dias",
    details: [
      "Reembolso de honorários médicos",
      "Garantia de reembolso integral em emergência",
      "Recusa de reembolso sem justificativa válida",
      "Adequação aos limites da tabela contratual"
    ]
  }
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: "c1",
    title: "Liminar contra Negativa de Cirurgia Oncológica",
    status: "Liminar Deferida com Sucesso",
    description: "Paciente em Salvador necessitava de cirurgia robótica urgente para remoção de tumor. O plano de saúde recusou alegando falta de previsão no rol da ANS. Nossa petição demonstrou o risco de morte iminente.",
    local: "Salvador - BA",
    resultTime: "Deferida em 18 horas",
    beforeImgUrl: "Laudo médico com marcação vermelha de 'Recusado pelo Auditor'",
    afterImgUrl: "Despacho do Juiz com carimbo dourado de 'Deferido - Intime-se com urgência'"
  },
  {
    id: "c2",
    title: "Fornecimento de Medicamento de R$ 85.000 mensais",
    status: "Tratamento Totalmente Liberado",
    description: "Criança diagnosticada com atrofia muscular espinhal em Salvador teve o medicamento de alto custo negado. Entramos com ação urgente demonstrando a necessidade vital da terapia gênica prescrita.",
    local: "Salvador - BA",
    resultTime: "Medicamento entregue em 5 dias",
    beforeImgUrl: "Carta oficial do plano de saúde em tom cinza informando reanálise negada",
    afterImgUrl: "Imagens reais da caixa do medicamento de alta tecnologia sob fundo azul clínico"
  },
  {
    id: "c3",
    title: "Internação em Home Care para Idosa com AVC",
    status: "Home Care Deferido na Justiça",
    description: "Plano exigia alta hospitalar imediata para idosa acamada, mas recusou o suporte Home Care domiciliar necessário prescrito pela junta médica. O tribunal impôs multa diária imediata de R$ 5.000 ao plano.",
    local: "Salvador - BA",
    resultTime: "Home Care instalado em 36 horas",
    beforeImgUrl: "Guia de alta em Salvador com ausência de indicação de suporte residencial",
    afterImgUrl: "Laudos com anotações de fiscalização e deferimento imediato pela Vara de Família/Consumo"
  }
];

export const TESTIMONIALS_LIST: Testimonial[] = [
  {
    id: "t1",
    name: "Aline Meireles Santos",
    role: "Administradora e Mãe do Pedro",
    location: "Salvador - BA",
    rating: 5,
    text: "Fui surpreendida com a negativa da cirurgia que meu filho precisava urgentemente. Fiquei desesperada mas a Dra. Saraiva agiu com uma rapidez incrível. Em menos de 24 horas a liminar foi concedida e ele foi operado no mesmo dia. Gratidão eterna por salvarem a vida do meu pequeno!",
    avatarUrl: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=120"
  },
  {
    id: "t2",
    name: "Dr. Roberto Cavalcanti",
    role: "Médico Cardiologista",
    location: "Salvador - BA",
    rating: 5,
    text: "Como profissional da saúde, vejo de perto os abusos dos planos. Indiquei meus próprios familiares à Saraiva Advocacia da saúde para a liberação de órteses que foram ilegalmente glosadas pelo auditor. O trabalho deles é cirúrgico, rápido e de um profissionalismo absurdo.",
    avatarUrl: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=120"
  },
  {
    id: "t3",
    name: "Marinalva de Souza Cruz",
    role: "Aposentada",
    location: "Salvador - BA",
    rating: 5,
    text: "Eu precisava de um remédio de alto custo de uso contínuo que custava o valor de toda minha aposentadoria. O SUS negou as duas vezes. Dra. Saraiva entrou com mandado de segurança e o juiz mandou entregar a medicação em 3 dias. Recomendo de olhos fechados!",
    avatarUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=120"
  }
];

export const GOOGLE_REVIEWS_LIST: GoogleReview[] = [
  {
    id: "g1",
    author: "Felipe Góes",
    relativeTime: "há uma semana",
    rating: 5,
    snippet: "Excelente atendimento! Tivemos o home care do vovô cortado repentinamente pelo plano de saúde. A equipe do escritório foi extremamente ágil, a liminar saiu de tarde e no outro dia a enfermeira já estava em casa com todos os equipamentos de volta.",
    avatarLetter: "F",
    verified: true
  },
  {
    id: "g2",
    author: "Bruna Cerqueira",
    relativeTime: "há 2 semanas",
    rating: 5,
    snippet: "Equipe super humana, atenciosa e ágil. Tratam o caso com o respeito e a urgência que a saúde exige. Meu muito obrigada pelo empenho de todos na liberação da minha quimioterapia especial.",
    avatarLetter: "B",
    verified: true
  },
  {
    id: "g3",
    author: "Carlos Eduardo Costa",
    relativeTime: "há um mês",
    rating: 5,
    snippet: "O melhor escritório de direito de saúde de Salvador. Extremamente competentes nas liminares. Me deram todo o suporte das 22h até a liberação no outro dia cedo. Parabéns!",
    avatarLetter: "C",
    verified: true
  }
];

export const FAQ_LIST: FAQItem[] = [
  {
    id: "f1",
    question: "O plano de saúde nega a cirurgia dizendo que está no período de carência. É permitido?",
    answer: "Não para casos de urgência ou emergência. A Lei dos Planos de Saúde (Lei nº 9.656/98) fixa que, em situações de urgência e emergência (ameaça à vida ou lesões graves), a carência máxima é de apenas 24 horas a partir da contratação. Portanto, negativas de urgência fundadas em carência são abusivas e podem ser derrubadas na justiça imediatamente."
  },
  {
    id: "f2",
    question: "Quanto tempo demora para a justiça conceder uma liminar médica?",
    answer: "Geralmente ocorre em um prazo de 12 a 48 horas em casos urgentes. Como se trata de um direito iminente à saúde e à vida, o juiz analisa o pedido de tutela de urgência (liminar) em caráter de plantão judiciário, aplicando multas diárias pesadas ao plano de saúde ou SUS em caso de descumprimento instantâneo."
  },
  {
    id: "f3",
    question: "O tratamento prescrito pelo meu médico não está no rol da ANS, o plano pode negar?",
    answer: "Não! A Justiça brasileira consolidou o entendimento (inclusive em leis recentes) de que o rol da ANS é apenas uma lista de coberturas mínimas e não taxativa absoluta. Se existe comprovação científica de eficácia do tratamento e prescrição idônea fundamentada por seu médico assistente, o plano é sim obrigado a cobrir o seu tratamento."
  },
  {
    id: "f4",
    question: "Como funciona a contratação e os honorários do escritório?",
    answer: "Atuamos com total transparência e estrita conformidade com o Código de Ética e Disciplina da OAB. Nossa análise de viabilidade é gratuita e sem compromisso. Avaliamos a documentação médica e as cláusulas contratuais preliminarmente. Oferecemos condições personalizadas e facilitadas visando o acesso pleno à justiça."
  },
  {
    id: "f5",
    question: "Posso acionar a Justiça para conseguir remédios que não estão disponíveis no SUS?",
    answer: "Sim! Os cidadãos têm direito constitucional à saúde integral assegurada pelo Estado. Em casos de medicamentos de alto custo ausentes na lista básica municipal ou estadual, é perfeitamente possível requerer judicialmente que a União, o Estado ou o Município forneça o tratamento, desde que comprovada a necessidade e a ausência de alternativa viável na rede pública."
  },
  {
    id: "f6",
    question: "Preciso ir presencialmente ao escritório de advocacia para dar entrada no processo?",
    answer: "Não. Atualmente, os processos judiciais na Bahia e em todo o Brasil correm em formato 100% digital (sistemas PJe/PROJUDI). Toda a documentação pode ser enviada de forma prática por fotos ou PDFs diretamente via WhatsApp ou e-mail, e as reuniões ocorrem no conforto de sua casa online, tornando o trâmite infinitamente mais prático e rápido."
  }
];
