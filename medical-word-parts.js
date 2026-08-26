const wordPartData = [
  {
    "part": "a-",
    "definition": "not, without (alpha privative)"
  },
  {
    "part": "an-",
    "definition": "not, without (alpha privative)"
  },
  {
    "part": "ab-",
    "definition": "from; away from"
  },
  {
    "part": "abdomin-",
    "definition": "of or relating to the abdomen"
  },
  {
    "part": "-ac",
    "definition": "pertaining to; one afflicted with"
  },
  {
    "part": "acanth-",
    "definition": "thorn or spine"
  },
  {
    "part": "acou-",
    "definition": "of or relating to hearing"
  },
  {
    "part": "acr-",
    "definition": "extremity, topmost"
  },
  {
    "part": "-acusis",
    "definition": "hearing"
  },
  {
    "part": "-ad",
    "definition": "toward, in the direction of"
  },
  {
    "part": "aden-",
    "definition": "of or relating to a gland"
  },
  {
    "part": "adip-",
    "definition": "of or relating to fat or fatty tissue"
  },
  {
    "part": "adren-",
    "definition": "of or relating to the adrenal glands"
  },
  {
    "part": "-aemia",
    "definition": "blood condition"
  },
  {
    "part": "ema",
    "definition": "blood condition"
  },
  {
    "part": "hemat",
    "definition": "blood condition"
  },
  {
    "part": "aer(o)-",
    "definition": "air, gas"
  },
  {
    "part": "aesthesi-",
    "definition": "sensation"
  },
  {
    "part": "-al",
    "definition": "pertaining to"
  },
  {
    "part": "alb-",
    "definition": "denoting a white or pale color"
  },
  {
    "part": "alge(si)-",
    "definition": "pain"
  },
  {
    "part": "-algia",
    "definition": "pain"
  },
  {
    "part": "alg(i)o-",
    "definition": "pain"
  },
  {
    "part": "all-",
    "definition": "denoting something as different, or as an addition"
  },
  {
    "part": "ambi-",
    "definition": "denoting something as positioned on both sides; describing both of two"
  },
  {
    "part": "amnio-",
    "definition": "Pertaining to the membranous fetal sac (amnion)"
  },
  {
    "part": "amph(i)-",
    "definition": "on both sides"
  },
  {
    "part": "amylo-",
    "definition": "starchy, carbohydrate- related"
  },
  {
    "part": "ana-",
    "definition": "back, again, up"
  },
  {
    "part": "andr-",
    "definition": "pertaining to a man"
  },
  {
    "part": "angi-",
    "definition": "blood vessel"
  },
  {
    "part": "aniso-",
    "definition": "describing something as unequal"
  },
  {
    "part": "ankyl-",
    "definition": "denoting something as crooked or bent"
  },
  {
    "part": "ancyl-",
    "definition": "denoting something as crooked or bent"
  },
  {
    "part": "ante-",
    "definition": "describing something as positioned in front of another thing"
  },
  {
    "part": "anthropo-",
    "definition": "human"
  },
  {
    "part": "anti-",
    "definition": "describing something as 'against' or 'opposed to' another"
  },
  {
    "part": "apo-",
    "definition": "away, separated from, derived from"
  },
  {
    "part": "archi-",
    "definition": "first, primitive"
  },
  {
    "part": "arsen(o)-",
    "definition": "of or pertaining to a male; masculine"
  },
  {
    "part": "arteri(o)-",
    "definition": "of or pertaining to an artery"
  },
  {
    "part": "arthr-",
    "definition": "of or pertaining to the joints, limbs"
  },
  {
    "part": "articul-",
    "definition": "joint"
  },
  {
    "part": "-ary",
    "definition": "pertaining to"
  },
  {
    "part": "-ase",
    "definition": "enzyme"
  },
  {
    "part": "-asthenia",
    "definition": "weakness"
  },
  {
    "part": "bacillus",
    "definition": "rod-shaped"
  },
  {
    "part": "bacteri-",
    "definition": "Pertaining to bacteria"
  },
  {
    "part": "balan-",
    "definition": "of the glans penis or glans clitoridis"
  },
  {
    "part": "bas-",
    "definition": "of or pertaining to base"
  },
  {
    "part": "bi-",
    "definition": "twice, double"
  },
  {
    "part": "bio-",
    "definition": "life"
  },
  {
    "part": "blast-",
    "definition": "germinate or bud"
  },
  {
    "part": "blephar(o)-",
    "definition": "of or pertaining to the eyelid"
  },
  {
    "part": "brachi(o)-",
    "definition": "of or relating to the arm"
  },
  {
    "part": "brachy-",
    "definition": "indicating 'short' or less commonly 'little'"
  },
  {
    "part": "brady-",
    "definition": "slow"
  },
  {
    "part": "bronch(i)-",
    "definition": "of or relating to the bronchus"
  },
  {
    "part": "bucc(o)-",
    "definition": "of or pertaining to the cheek"
  },
  {
    "part": "capill-",
    "definition": "of or pertaining to hair"
  },
  {
    "part": "capit-",
    "definition": "pertaining to the head as a whole"
  },
  {
    "part": "carcin-",
    "definition": "cancer"
  },
  {
    "part": "cardi-",
    "definition": "of or pertaining to the heart"
  },
  {
    "part": "carp-",
    "definition": "of or pertaining to the wrist"
  },
  {
    "part": "cata-",
    "definition": "down, under"
  },
  {
    "part": "-cele",
    "definition": "pouching, hernia"
  },
  {
    "part": "-centesis",
    "definition": "surgical puncture for aspiration"
  },
  {
    "part": "cephal(o)-",
    "definition": "of or pertaining to the head (as a whole)"
  },
  {
    "part": "cerat(o)-",
    "definition": "of or pertaining to the cornu; a horn"
  },
  {
    "part": "cerebell(o)-",
    "definition": "of or pertaining to the cerebellum"
  },
  {
    "part": "cerebr(o)-",
    "definition": "of or pertaining to the brain"
  },
  {
    "part": "cervic-",
    "definition": "of or pertaining to the neck or the cervix"
  },
  {
    "part": "cheil-",
    "definition": "of or pertaining to the lips"
  },
  {
    "part": "chem(o)-",
    "definition": "chemistry, drug"
  },
  {
    "part": "chir-",
    "definition": "of or pertaining to the hand"
  },
  {
    "part": "cheir-",
    "definition": "of or pertaining to the hand"
  },
  {
    "part": "chlor-",
    "definition": "denoting a green color"
  },
  {
    "part": "bil(i)-",
    "definition": "of or pertaining to bile"
  },
  {
    "part": "chol(e)-",
    "definition": "of or pertaining to bile"
  },
  {
    "part": "cholecyst(o)-",
    "definition": "of or pertaining to the gallbladder"
  },
  {
    "part": "chondr(i)o-",
    "definition": "cartilage, gristle, granule, granular"
  },
  {
    "part": "chrom(ato)-",
    "definition": "color"
  },
  {
    "part": "-cidal",
    "definition": "killing, destroying"
  },
  {
    "part": "-cide",
    "definition": "killing, destroying"
  },
  {
    "part": "cili-",
    "definition": "of or pertaining to the cilia, the eyelashes; eyelids"
  },
  {
    "part": "circum-",
    "definition": "denoting something as 'around' another"
  },
  {
    "part": "cis-",
    "definition": "on this side"
  },
  {
    "part": "-clast",
    "definition": "break"
  },
  {
    "part": "clostr-",
    "definition": "spindle"
  },
  {
    "part": "co-",
    "definition": "with, together, in association"
  },
  {
    "part": "-coccus",
    "definition": "round, spherical"
  },
  {
    "part": "\u2011coccal",
    "definition": "round, spherical"
  },
  {
    "part": "col-",
    "definition": "colon"
  },
  {
    "part": "colo-",
    "definition": "colon"
  },
  {
    "part": "colono-",
    "definition": "colon"
  },
  {
    "part": "colp-",
    "definition": "of or pertaining to the vagina"
  },
  {
    "part": "com-",
    "definition": "with, together"
  },
  {
    "part": "contra-",
    "definition": "against"
  },
  {
    "part": "cor-",
    "definition": "with, together"
  },
  {
    "part": "cord(i)-",
    "definition": "of or pertaining to the heart (uncommon as a prefix)"
  },
  {
    "part": "cornu-",
    "definition": "applied to describing processes and parts of the body as likened or similar to horns"
  },
  {
    "part": "coron-",
    "definition": "pertaining to the heart"
  },
  {
    "part": "cortic-",
    "definition": "cortex, outer region"
  },
  {
    "part": "cost-",
    "definition": "of or pertaining to the ribs"
  },
  {
    "part": "cox-",
    "definition": "of or relating to the hip, haunch, or hip-joint"
  },
  {
    "part": "crani(o)-",
    "definition": "belonging or relating to the cranium"
  },
  {
    "part": "-crine",
    "definition": "to secrete"
  },
  {
    "part": "crin(o)-",
    "definition": "to secrete"
  },
  {
    "part": "cry(o)-",
    "definition": "cold"
  },
  {
    "part": "cutane-",
    "definition": "skin"
  },
  {
    "part": "cyan(o)-",
    "definition": "having a blue color"
  },
  {
    "part": "dacry(o)-",
    "definition": "of or pertaining to tears"
  },
  {
    "part": "-dactyl(o)-",
    "definition": "of or pertaining to a finger, toe"
  },
  {
    "part": "de-",
    "definition": "from, down, or away from"
  },
  {
    "part": "dent-",
    "definition": "of or pertaining to teeth"
  },
  {
    "part": "dermat(o)-",
    "definition": "of or pertaining to the skin"
  },
  {
    "part": "derm(o)-",
    "definition": "of or pertaining to the skin"
  },
  {
    "part": "-desis",
    "definition": "binding"
  },
  {
    "part": "dextr(o)-",
    "definition": "right, on the right side"
  },
  {
    "part": "di-",
    "definition": "two"
  },
  {
    "part": "dif-",
    "definition": "apart, separation, taking apart"
  },
  {
    "part": "dis-",
    "definition": "apart, separation, taking apart"
  },
  {
    "part": "dia-",
    "definition": "through, during, across"
  },
  {
    "part": "digit-",
    "definition": "of or pertaining to the finger [rare as a root]"
  },
  {
    "part": "diplo-",
    "definition": "twofold"
  },
  {
    "part": "-dipsia",
    "definition": "(condition of) thirst"
  },
  {
    "part": "dors(o)-",
    "definition": "of or pertaining to the back"
  },
  {
    "part": "dors(i)-",
    "definition": "of or pertaining to the back"
  },
  {
    "part": "dromo-",
    "definition": "running, conduction, course"
  },
  {
    "part": "duodeno-",
    "definition": "twelve"
  },
  {
    "part": "dura-",
    "definition": "hard"
  },
  {
    "part": "dynam(o)-",
    "definition": "force, energy, power"
  },
  {
    "part": "-dynia",
    "definition": "pain"
  },
  {
    "part": "-eal (see -al)",
    "definition": "pertaining to"
  },
  {
    "part": "ec-",
    "definition": "out, away"
  },
  {
    "part": "ect(o)-",
    "definition": "outer, outside"
  },
  {
    "part": "-ectasia",
    "definition": "expansion, dilation"
  },
  {
    "part": "-ectasis",
    "definition": "expansion, dilation"
  },
  {
    "part": "-ectomy",
    "definition": "denotes a surgical operation or removal of a body part; resection, excision"
  },
  {
    "part": "-edema",
    "definition": "swelling"
  },
  {
    "part": "-emesis",
    "definition": "vomiting condition"
  },
  {
    "part": "-emia",
    "definition": "blood condition (Am. Engl.)"
  },
  {
    "part": "encephal(o)-",
    "definition": "of or pertaining to the brain; see also cerebro-"
  },
  {
    "part": "endo-",
    "definition": "denotes something as inside or within"
  },
  {
    "part": "eosin(o)-",
    "definition": "having a red color"
  },
  {
    "part": "enter(o)-",
    "definition": "of or pertaining to the intestine"
  },
  {
    "part": "epi-",
    "definition": "on, upon"
  },
  {
    "part": "episi(o)-",
    "definition": "of or pertaining to the pubic region, the loins"
  },
  {
    "part": "erythr(o)-",
    "definition": "having a red color"
  },
  {
    "part": "-esophageal",
    "definition": "gullet (AmE)"
  },
  {
    "part": "-esophago-",
    "definition": "gullet (AmE)"
  },
  {
    "part": "esthesio-",
    "definition": "sensation (AmE)"
  },
  {
    "part": "eu-",
    "definition": "true, good, well, normal"
  },
  {
    "part": "ex-",
    "definition": "out of, away from, to remove"
  },
  {
    "part": "galact-",
    "definition": "milk"
  },
  {
    "part": "gastr-",
    "definition": "of or pertaining to the stomach"
  },
  {
    "part": "-gen",
    "definition": "*born in, from of a certain kind"
  },
  {
    "part": "-genic",
    "definition": "formative; pertaining to producing"
  },
  {
    "part": "genu-",
    "definition": "of or pertaining to the knee"
  },
  {
    "part": "-geusia",
    "definition": "taste"
  },
  {
    "part": "gingiv-",
    "definition": "of or pertaining to the gums"
  },
  {
    "part": "glauc(o)-",
    "definition": "Having a grey or bluish- grey colour"
  },
  {
    "part": "halluc-",
    "definition": "to wander in mind"
  },
  {
    "part": "haem(ato)-",
    "definition": "of or pertaining to blood"
  },
  {
    "part": "hema-",
    "definition": "blood (AmE)"
  },
  {
    "part": "hemo-",
    "definition": "blood (AmE)"
  },
  {
    "part": "hemangi(o)-",
    "definition": "blood vessels"
  },
  {
    "part": "hemi-",
    "definition": "one-half"
  },
  {
    "part": "hepat-",
    "definition": "of or pertaining to the liver"
  },
  {
    "part": "hepatic-",
    "definition": "of or pertaining to the liver"
  },
  {
    "part": "heter(o)-",
    "definition": "denotes something as \"the other\" (of two), as an addition, or different"
  },
  {
    "part": "hidr(o)-",
    "definition": "sweat"
  },
  {
    "part": "hist(o)-",
    "definition": "tissue"
  },
  {
    "part": "histio-",
    "definition": "tissue"
  },
  {
    "part": "home(o)-",
    "definition": "similar"
  },
  {
    "part": "hom(o)-",
    "definition": "denotes something as \"the same\" as another or common"
  },
  {
    "part": "-iasis",
    "definition": "condition, formation, or presence of"
  },
  {
    "part": "iatr(o)-",
    "definition": "of or pertaining to medicine or a physician (uncommon as a prefix but common as a suffix; see -iatry)"
  },
  {
    "part": "-iatry",
    "definition": "denotes a field in medicine emphasizing a certain body component"
  },
  {
    "part": "-ic",
    "definition": "pertaining to"
  },
  {
    "part": "-ics",
    "definition": "organized knowledge, treatment"
  },
  {
    "part": "idio-",
    "definition": "self, one's own"
  },
  {
    "part": "ileo-",
    "definition": "ileum"
  },
  {
    "part": "infra-",
    "definition": "below"
  },
  {
    "part": "inter-",
    "definition": "between, among"
  },
  {
    "part": "intra-",
    "definition": "within"
  },
  {
    "part": "ipsi-",
    "definition": "same"
  },
  {
    "part": "irid(o)-",
    "definition": "of or pertaining to the iris"
  },
  {
    "part": "isch-",
    "definition": "restriction"
  },
  {
    "part": "ischio-",
    "definition": "of or pertaining to the ischium, the hip-joint"
  },
  {
    "part": "-ine",
    "definition": "of or pertaining to"
  },
  {
    "part": "juxta-",
    "definition": "near to, alongside, or next to"
  },
  {
    "part": "kal-",
    "definition": "potassium"
  },
  {
    "part": "kary-",
    "definition": "nucleus"
  },
  {
    "part": "kerat-",
    "definition": "cornea (eye or skin)"
  },
  {
    "part": "kine-",
    "definition": "movement"
  },
  {
    "part": "koil-",
    "definition": "hollow"
  },
  {
    "part": "kyph-",
    "definition": "humped"
  },
  {
    "part": "latero-",
    "definition": "lateral"
  },
  {
    "part": "lei(o)-",
    "definition": "smooth"
  },
  {
    "part": "-lepsis",
    "definition": "attack, seizure"
  },
  {
    "part": "-lepsy",
    "definition": "attack, seizure"
  },
  {
    "part": "lept(o)-",
    "definition": "light, slender"
  },
  {
    "part": "leuc(o)-",
    "definition": "denoting a white color"
  },
  {
    "part": "leuk(o)-",
    "definition": "denoting a white color"
  },
  {
    "part": "lingu(a)-",
    "definition": "of or pertaining to the tongue"
  },
  {
    "part": "lingu(o)-",
    "definition": "of or pertaining to the tongue"
  },
  {
    "part": "lip(o)-",
    "definition": "fat"
  },
  {
    "part": "liss(os)-",
    "definition": "smooth"
  },
  {
    "part": "lith(o)-",
    "definition": "stone, calculus"
  },
  {
    "part": "log(o)-",
    "definition": "speech"
  },
  {
    "part": "-logist",
    "definition": "denotes someone who studies a certain field (the field of _____-logy); a specialist; one who treats"
  },
  {
    "part": "-logy",
    "definition": "denotes the academic study or practice of a certain field; the study of"
  },
  {
    "part": "lumb(o)-",
    "definition": "of or relating to the part of the trunk between the lowest ribs and the pelvis."
  },
  {
    "part": "lumb(a)-",
    "definition": "of or relating to the part of the trunk between the lowest ribs and the pelvis."
  },
  {
    "part": "lymph(o)-",
    "definition": "lymph"
  },
  {
    "part": "lys(o)-",
    "definition": "dissolution"
  },
  {
    "part": "-lytic",
    "definition": "dissolution"
  },
  {
    "part": "-lysis",
    "definition": "destruction, separation"
  },
  {
    "part": "meg(a)-",
    "definition": "enlargement, million"
  },
  {
    "part": "megal(o)-",
    "definition": "enlargement, million"
  },
  {
    "part": "-megaly",
    "definition": "enlargement, million"
  },
  {
    "part": "melan(o)-",
    "definition": "having a black color"
  },
  {
    "part": "melos",
    "definition": "extremity"
  },
  {
    "part": "mening(o)-",
    "definition": "membrane"
  },
  {
    "part": "men-",
    "definition": "month, menstrual cycle"
  },
  {
    "part": "mer(o)-",
    "definition": "part"
  },
  {
    "part": "mes-",
    "definition": "middle"
  },
  {
    "part": "met",
    "definition": "after, beside, beyond or change"
  },
  {
    "part": "meta-",
    "definition": "after, beside, beyond or change"
  },
  {
    "part": "-meter",
    "definition": "instrument used to measure or count"
  },
  {
    "part": "-metry",
    "definition": "process of measuring, - meter + -y (see -meter)"
  },
  {
    "part": "metr-",
    "definition": "pertaining to conditions or instruments of the uterus"
  },
  {
    "part": "micr-",
    "definition": "millionth; denoting something as small, relating to smallness"
  },
  {
    "part": "milli-",
    "definition": "thousandth"
  },
  {
    "part": "mon-",
    "definition": "single"
  },
  {
    "part": "morph-",
    "definition": "form, shape"
  },
  {
    "part": "muscul(o)-",
    "definition": "muscle"
  },
  {
    "part": "my(o)-",
    "definition": "of or relating to muscle"
  },
  {
    "part": "myc(o)-",
    "definition": "fungus"
  },
  {
    "part": "myel(o)-",
    "definition": "of or relating to bone marrow or the spinal cord"
  },
  {
    "part": "myl(o)-",
    "definition": "of or relating to molar teeth or the lower jaw"
  },
  {
    "part": "myri-",
    "definition": "ten thousand"
  },
  {
    "part": "myring(o)-",
    "definition": "eardrum"
  },
  {
    "part": "nan(o)-",
    "definition": "dwarf, small"
  },
  {
    "part": "narc(o)-",
    "definition": "numb, sleep"
  },
  {
    "part": "nas(o)-",
    "definition": "of or pertaining to the nose"
  },
  {
    "part": "nat(o)-",
    "definition": "birth"
  },
  {
    "part": "necr(o)-",
    "definition": "death"
  },
  {
    "part": "neo-",
    "definition": "new"
  },
  {
    "part": "nephr(o)-",
    "definition": "of or pertaining to the kidney"
  },
  {
    "part": "nerv-",
    "definition": "of or pertaining to nerves and the nervous system (uncommon as a root: neuro- mostly always used)"
  },
  {
    "part": "neur-",
    "definition": "of or pertaining to nerves and the nervous system"
  },
  {
    "part": "noci-",
    "definition": "pain, injury, hurt"
  },
  {
    "part": "norm-",
    "definition": "normal"
  },
  {
    "part": "normo-",
    "definition": "normal"
  },
  {
    "part": "olig-",
    "definition": "having little, having few"
  },
  {
    "part": "om(o)-",
    "definition": "shoulder"
  },
  {
    "part": "-oma (singular)",
    "definition": "tumor, mass, fluid collection"
  },
  {
    "part": "-omata (plural)",
    "definition": "tumor, mass, fluid collection"
  },
  {
    "part": "omphal(o)-",
    "definition": "of or pertaining to the navel, the umbilicus"
  },
  {
    "part": "onco-",
    "definition": "tumor, bulk, volume"
  },
  {
    "part": "onych(o)-",
    "definition": "of or pertaining to the nail (of a finger or toe)"
  },
  {
    "part": "oo-",
    "definition": "of or pertaining to an (egg), a woman's egg, the ovum"
  },
  {
    "part": "oophor(o)-",
    "definition": "of or pertaining to the woman's (ovary)"
  },
  {
    "part": "ophthalm(o)-",
    "definition": "of or pertaining to the (eye)"
  },
  {
    "part": "opistho-",
    "definition": "back, behind, rear[8]"
  },
  {
    "part": "-opsy",
    "definition": "examination or inspection"
  },
  {
    "part": "optic(o)-",
    "definition": "of or relating to chemical properties of the eye"
  },
  {
    "part": "or(o)-",
    "definition": "of or pertaining to the mouth"
  },
  {
    "part": "-or",
    "definition": "one who, agent noun\u2013forming suffix"
  },
  {
    "part": "orchi(o)-",
    "definition": "testis"
  },
  {
    "part": "orchid(o)-",
    "definition": "testis"
  },
  {
    "part": "orch(o)-",
    "definition": "testis"
  },
  {
    "part": "orth(o)-",
    "definition": "denoting something as straight or correct"
  },
  {
    "part": "-osis",
    "definition": "a condition, disease, process or increase"
  },
  {
    "part": "ossi-",
    "definition": "bone, bony"
  },
  {
    "part": "osse-",
    "definition": "bone, bony"
  },
  {
    "part": "ost(e)-",
    "definition": "bone"
  },
  {
    "part": "oste(o)-",
    "definition": "bone"
  },
  {
    "part": "pachy-",
    "definition": "thick"
  },
  {
    "part": "-pagus",
    "definition": "Indicates conjoined twins, with the first part denoting the organs fused"
  },
  {
    "part": "palpebr-",
    "definition": "of or pertaining to the eyelid (uncommon as a root)"
  },
  {
    "part": "pan-",
    "definition": "denoting something as 'complete' or containing 'everything'; \"all\""
  },
  {
    "part": "pant(o)-",
    "definition": "denoting something as 'complete' or containing 'everything'; \"all\""
  },
  {
    "part": "papill-",
    "definition": "of or pertaining to the nipple (of the chest/breast)"
  },
  {
    "part": "papul(o)-",
    "definition": "Indicates papulosity, a small elevation or swelling in the skin, a pimple, swelling"
  },
  {
    "part": "para-",
    "definition": "alongside of"
  },
  {
    "part": "-paresis",
    "definition": "slight paralysis"
  },
  {
    "part": "parvo-",
    "definition": "small"
  },
  {
    "part": "path(o)-",
    "definition": "disease"
  },
  {
    "part": "-pathy",
    "definition": "denotes (with a negative sense) a disease, or disorder"
  },
  {
    "part": "pauci-",
    "definition": "Few"
  },
  {
    "part": "pector-",
    "definition": "breast or chest"
  },
  {
    "part": "ped-",
    "definition": "of or pertaining to the foot; -footed"
  },
  {
    "part": "-pes",
    "definition": "of or pertaining to the foot; -footed"
  },
  {
    "part": "pedo-",
    "definition": "of or pertaining to the child"
  },
  {
    "part": "pelv(i)-",
    "definition": "hip bone"
  },
  {
    "part": "pelv(o)-",
    "definition": "hip bone"
  },
  {
    "part": "-penia",
    "definition": "deficiency"
  },
  {
    "part": "peo-",
    "definition": "of or pertaining to the penis"
  },
  {
    "part": "-pepsia",
    "definition": "denotes something relating to digestion, or the digestive tract."
  },
  {
    "part": "per-",
    "definition": "through"
  },
  {
    "part": "peri-",
    "definition": "denoting something with a position 'surrounding' or 'around' another"
  },
  {
    "part": "-pexy",
    "definition": "fixation"
  },
  {
    "part": "phaco-",
    "definition": "lens-shaped"
  },
  {
    "part": "-phagia",
    "definition": "Forms terms denoting conditions relating to eating or ingestion"
  },
  {
    "part": "-phage",
    "definition": "Forms terms denoting conditions relating to eating or ingestion"
  },
  {
    "part": "-phago-",
    "definition": "eating, devouring"
  },
  {
    "part": "phagist-",
    "definition": "Forms nouns that denote a person who 'feeds on' the first element or part of the word"
  },
  {
    "part": "-phagy",
    "definition": "Forms nouns that denotes 'feeding on' the first element or part of the word"
  },
  {
    "part": "phall-",
    "definition": "phallus"
  },
  {
    "part": "pharmac-",
    "definition": "drug, medication"
  },
  {
    "part": "pharyng-",
    "definition": "of or pertaining to the pharynx, the upper throat cavity"
  },
  {
    "part": "-phil(ia)",
    "definition": "attraction for"
  },
  {
    "part": "phleb-",
    "definition": "of or pertaining to the (blood) veins, a vein"
  },
  {
    "part": "-phobia",
    "definition": "exaggerated fear, sensitivity, aversion"
  },
  {
    "part": "phon-",
    "definition": "sound"
  },
  {
    "part": "phos-",
    "definition": "of or pertaining to light or its chemical properties, now historic and used rarely. See the common root phot- below."
  },
  {
    "part": "phot-",
    "definition": "of or pertaining to light"
  },
  {
    "part": "phren-",
    "definition": "the mind"
  },
  {
    "part": "phrenic-",
    "definition": "the mind"
  },
  {
    "part": "phyllo-",
    "definition": "leaf-like"
  },
  {
    "part": "-phyte",
    "definition": "to grow"
  },
  {
    "part": "phyto-",
    "definition": "to grow"
  },
  {
    "part": "pia",
    "definition": "soft"
  },
  {
    "part": "piri-",
    "definition": "Pear"
  },
  {
    "part": "-plasia",
    "definition": "formation, development"
  },
  {
    "part": "-plasty",
    "definition": "surgical repair, reconstruction"
  },
  {
    "part": "-plegia",
    "definition": "paralysis"
  },
  {
    "part": "pleio-",
    "definition": "more, excessive, multiple"
  },
  {
    "part": "pleur-",
    "definition": "of or pertaining to the ribs"
  },
  {
    "part": "-plexy",
    "definition": "stroke or seizure"
  },
  {
    "part": "pne-",
    "definition": "air, breath, lung"
  },
  {
    "part": "pneum-",
    "definition": "air, breath, lung"
  },
  {
    "part": "pod-",
    "definition": "of or pertaining to the foot, -footed"
  },
  {
    "part": "-pus",
    "definition": "of or pertaining to the foot, -footed"
  },
  {
    "part": "-poiesis",
    "definition": "production"
  },
  {
    "part": "polio-",
    "definition": "having a grey color"
  },
  {
    "part": "poly-",
    "definition": "denotes a 'plurality' of something"
  },
  {
    "part": "por-",
    "definition": "pore, porous"
  },
  {
    "part": "porphyr-",
    "definition": "denotes a purple color"
  },
  {
    "part": "post-",
    "definition": "denotes something as 'after (time)' or 'behind (space)' another"
  },
  {
    "part": "pre-",
    "definition": "denotes something as 'before' another (in [physical] position or time)"
  },
  {
    "part": "presby-",
    "definition": "old age"
  },
  {
    "part": "prim-",
    "definition": "denotes something as 'first' or 'most-important'"
  },
  {
    "part": "pro-",
    "definition": "denotes something as 'before' another (in [physical] position or time)"
  },
  {
    "part": "proct-",
    "definition": "anus, rectum"
  },
  {
    "part": "prosop-",
    "definition": "face"
  },
  {
    "part": "prot-",
    "definition": "denotes something as 'first' or 'most important'"
  },
  {
    "part": "pseud-",
    "definition": "denotes something false or fake"
  },
  {
    "part": "psor-",
    "definition": "Itching"
  },
  {
    "part": "psych-",
    "definition": "of or pertaining to the mind"
  },
  {
    "part": "ptero-",
    "definition": "Pertaining to a wing; 'pterygo-', wing-shaped"
  },
  {
    "part": "ptery-",
    "definition": "Pertaining to a wing; 'pterygo-', wing-shaped"
  },
  {
    "part": "-ptosis",
    "definition": "falling, drooping, downward placement, prolapse"
  },
  {
    "part": "-ptyal-",
    "definition": "saliva, salivary glands, sialaden"
  },
  {
    "part": "ptyalo",
    "definition": "saliva, salivary glands, sialaden"
  },
  {
    "part": "-ptysis",
    "definition": "spitting"
  },
  {
    "part": "pulmon-",
    "definition": "of or relating to the lungs"
  },
  {
    "part": "pulmo-",
    "definition": "of or relating to the lungs"
  },
  {
    "part": "py-",
    "definition": "pus"
  },
  {
    "part": "pyel-",
    "definition": "pelvis"
  },
  {
    "part": "pykno-",
    "definition": "to thicken (as the nucleus does in early stages of cell death)"
  },
  {
    "part": "pylor-",
    "definition": "gate"
  },
  {
    "part": "pyr-",
    "definition": "fever"
  },
  {
    "part": "quadr(i)-",
    "definition": "four"
  },
  {
    "part": "radi-",
    "definition": "radiation"
  },
  {
    "part": "radic-",
    "definition": "referring to the beginning, or the root, of a structure, usually a nerve or a vein"
  },
  {
    "part": "re-",
    "definition": "again, back"
  },
  {
    "part": "rect-",
    "definition": "rectum"
  },
  {
    "part": "ren(o)",
    "definition": "of or pertaining to the kidney"
  },
  {
    "part": "reticul(o)-",
    "definition": "net"
  },
  {
    "part": "retro-",
    "definition": "backward, behind"
  },
  {
    "part": "rhabd(o)-",
    "definition": "rod shaped, striated"
  },
  {
    "part": "rhachi(o)-",
    "definition": "spine"
  },
  {
    "part": "rhin(o)-",
    "definition": "of or pertaining to the nose"
  },
  {
    "part": "rhod(o)-",
    "definition": "denoting a rose-red color"
  },
  {
    "part": "-rrhage",
    "definition": "burst forth, rapid flow (of blood, usually)"
  },
  {
    "part": "-rrhagia",
    "definition": "burst forth, rapid flow (of blood, usually)"
  },
  {
    "part": "-rrhaphy",
    "definition": "surgical suturing"
  },
  {
    "part": "-rrhea",
    "definition": "flowing, discharge"
  },
  {
    "part": "-rrhexis",
    "definition": "rupture"
  },
  {
    "part": "-rrhoea",
    "definition": "flowing, discharge"
  },
  {
    "part": "rubr(o)-",
    "definition": "of or pertaining to the red nucleus of the brain"
  },
  {
    "part": "-rupt",
    "definition": "break or burst"
  },
  {
    "part": "sapro-",
    "definition": "relating to putrefaction or decay"
  },
  {
    "part": "sarco-",
    "definition": "muscular, flesh-like"
  },
  {
    "part": "scapul(o)-",
    "definition": "of or pertaining to the scapula"
  },
  {
    "part": "schist(o)-",
    "definition": "split, cleft"
  },
  {
    "part": "schiz(o)-",
    "definition": "denoting something \"split\" or \"double-sided\""
  },
  {
    "part": "scler(o)-",
    "definition": "hard"
  },
  {
    "part": "-sclerosis",
    "definition": "hardening"
  },
  {
    "part": "scoli(o)-",
    "definition": "twisted"
  },
  {
    "part": "-scope",
    "definition": "instrument for viewing"
  },
  {
    "part": "-scopy",
    "definition": "process of viewing"
  },
  {
    "part": "scoto-",
    "definition": "darkness"
  },
  {
    "part": "semi-",
    "definition": "one-half, partly"
  },
  {
    "part": "sial(o)-",
    "definition": "saliva, salivary gland"
  },
  {
    "part": "sigmoid(o)-",
    "definition": "sigmoid, S-shaped curvature"
  },
  {
    "part": "sinistr(o)-",
    "definition": "left, left side"
  },
  {
    "part": "sinus-",
    "definition": "of or pertaining to the sinus"
  },
  {
    "part": "sito-",
    "definition": "food, grain"
  },
  {
    "part": "somat(o)-",
    "definition": "body, bodily"
  },
  {
    "part": "somatico-",
    "definition": "body, bodily"
  },
  {
    "part": "somn(o)",
    "definition": "Sleep"
  },
  {
    "part": "-spadias",
    "definition": "slit, fissure"
  },
  {
    "part": "spasmo-",
    "definition": "spasm"
  },
  {
    "part": "sperma-",
    "definition": "semen, spermatozoa"
  },
  {
    "part": "spermo-",
    "definition": "semen, spermatozoa"
  },
  {
    "part": "spermato-",
    "definition": "semen, spermatozoa"
  },
  {
    "part": "splanchn(i)-",
    "definition": "viscera"
  },
  {
    "part": "splanchn(o)-",
    "definition": "viscera"
  },
  {
    "part": "splen(o)-",
    "definition": "spleen"
  },
  {
    "part": "spondyl(o)-",
    "definition": "of or pertaining to the spine, the vertebra"
  },
  {
    "part": "squamos(o)-",
    "definition": "denoting something as \"full of scales\" or \"scaly\""
  },
  {
    "part": "-stalsis",
    "definition": "contraction"
  },
  {
    "part": "-stasis",
    "definition": "stopping, standing"
  },
  {
    "part": "-statin",
    "definition": "maintain cholesterol"
  },
  {
    "part": "-staxis",
    "definition": "dripping, trickling"
  },
  {
    "part": "sten(o)-",
    "definition": "denoting something as narrow in shape or pertaining to narrowness"
  },
  {
    "part": "-stenosis",
    "definition": "abnormal narrowing of a blood vessel or other tubular organ or structure"
  },
  {
    "part": "steth-",
    "definition": "of or pertaining to the upper chest, the area above the breast and under the neck"
  },
  {
    "part": "stheno-",
    "definition": "strength, force, power"
  },
  {
    "part": "stom-",
    "definition": "of or pertaining to the mouth; an artificially created opening[12]"
  },
  {
    "part": "stomat-",
    "definition": "of or pertaining to the mouth; an artificially created opening[12]"
  },
  {
    "part": "-stomy",
    "definition": "creation of an opening"
  },
  {
    "part": "sub-",
    "definition": "beneath, under"
  },
  {
    "part": "super-",
    "definition": "in excess, above, superior"
  },
  {
    "part": "supra-",
    "definition": "above, excessive"
  },
  {
    "part": "sy",
    "definition": "indicates similarity, likeness, or being together; assimilates before some consonants: before l to syl-, s to sys-, before a labial consonant to sym-"
  },
  {
    "part": "syl-",
    "definition": "indicates similarity, likeness, or being together; assimilates before some consonants: before l to syl-, s to sys-, before a labial consonant to sym-"
  },
  {
    "part": "sym-",
    "definition": "indicates similarity, likeness, or being together; assimilates before some consonants: before l to syl-, s to sys-, before a labial consonant to sym-"
  },
  {
    "part": "syn-",
    "definition": "indicates similarity, likeness, or being together; assimilates before some consonants: before l to syl-, s to sys-, before a labial consonant to sym-"
  },
  {
    "part": "sys-",
    "definition": "indicates similarity, likeness, or being together; assimilates before some consonants: before l to syl-, s to sys-, before a labial consonant to sym-"
  },
  {
    "part": "thec-",
    "definition": "case, sheath"
  },
  {
    "part": "thel-",
    "definition": "of or pertaining to a nipple (uncommon as a prefix)"
  },
  {
    "part": "thely-",
    "definition": "denoting something as relating to a woman, feminine"
  },
  {
    "part": "therap-",
    "definition": "treatment"
  },
  {
    "part": "therm(o)-",
    "definition": "heat"
  },
  {
    "part": "thorac(i)-",
    "definition": "of or pertaining to the upper chest, chest; the area above the breast and under the neck"
  },
  {
    "part": "thorac(o)-",
    "definition": "of or pertaining to the upper chest, chest; the area above the breast and under the neck"
  },
  {
    "part": "thoracico-",
    "definition": "of or pertaining to the upper chest, chest; the area above the breast and under the neck"
  },
  {
    "part": "thromb(o)-",
    "definition": "of or relating to a blood clot, clotting of blood"
  },
  {
    "part": "thyr(o)-",
    "definition": "thyroid"
  },
  {
    "part": "thym-",
    "definition": "emotions"
  },
  {
    "part": "-tic",
    "definition": "pertaining to"
  },
  {
    "part": "-tide",
    "definition": "bound to, forming a noun from an adjective by dropping -ic and adding - tide."
  },
  {
    "part": "toco-",
    "definition": "childbirth"
  },
  {
    "part": "-tome",
    "definition": "cutting instrument"
  },
  {
    "part": "-tomy",
    "definition": "act of cutting; incising, incision"
  },
  {
    "part": "ton-",
    "definition": "tone, tension, pressure"
  },
  {
    "part": "-tony",
    "definition": "tension"
  },
  {
    "part": "top(o)-",
    "definition": "place, topical"
  },
  {
    "part": "tort(i)-",
    "definition": "twisted"
  },
  {
    "part": "tox(i)-",
    "definition": "toxin, poison"
  },
  {
    "part": "tox(o)-",
    "definition": "toxin, poison"
  },
  {
    "part": "toxic(o)-",
    "definition": "toxin, poison"
  },
  {
    "part": "trache(a)-",
    "definition": "trachea"
  },
  {
    "part": "trachel(o)-",
    "definition": "of or pertaining to the neck"
  },
  {
    "part": "trans-",
    "definition": "denoting something as moving or situated across"
  },
  {
    "part": "-ula",
    "definition": "small"
  },
  {
    "part": "-ule",
    "definition": "small"
  },
  {
    "part": "ultra-",
    "definition": "beyond, excessive"
  },
  {
    "part": "umbilic-",
    "definition": "of or pertaining to the navel, the umbilicus"
  },
  {
    "part": "ungui-",
    "definition": "of or pertaining to the nail, a claw"
  },
  {
    "part": "un(i)-",
    "definition": "one"
  },
  {
    "part": "ur-",
    "definition": "of or pertaining to urine, the urinary system"
  },
  {
    "part": "urin-",
    "definition": "of or pertaining to urine, the urinary system"
  },
  {
    "part": "uter(o)-",
    "definition": "of or pertaining to the uterus or womb"
  },
  {
    "part": "xanth(o)-",
    "definition": "having a yellow color, especially an abnormally yellow color"
  },
  {
    "part": "xen(o)-",
    "definition": "foreign, different"
  },
  {
    "part": "xer(o)-",
    "definition": "dry, desert-like"
  },
  {
    "part": "xiph-",
    "definition": "sword"
  },
  {
    "part": "-y",
    "definition": "condition or process of"
  },
  {
    "part": "ze-",
    "definition": "boil"
  },
  {
    "part": "zo(o)-",
    "definition": "animal, animal life"
  },
  {
    "part": "zym(o)-",
    "definition": "fermentation"
  },
  {
    "part": "lapar-",
    "definition": "abdomen"
  },
  {
    "part": "aort-",
    "definition": "aorta"
  },
  {
    "part": "brachi-",
    "definition": "arm"
  },
  {
    "part": "arm-",
    "definition": "arm"
  },
  {
    "part": "maschal-",
    "definition": "armpit"
  },
  {
    "part": "axill-",
    "definition": "armpit"
  },
  {
    "part": "arteri-",
    "definition": "artery"
  },
  {
    "part": "not-",
    "definition": "back"
  },
  {
    "part": "dors-",
    "definition": "back"
  },
  {
    "part": "allic-",
    "definition": "big toe"
  },
  {
    "part": "hallic-",
    "definition": "big toe"
  },
  {
    "part": "cyst-",
    "definition": "bladder"
  },
  {
    "part": "vesic-",
    "definition": "bladder"
  },
  {
    "part": "haem(at)- (Br. English); hem(at)- (Am. English)",
    "definition": "blood"
  },
  {
    "part": "sangui-",
    "definition": "blood"
  },
  {
    "part": "sanguin-",
    "definition": "blood"
  },
  {
    "part": "thromb-",
    "definition": "blood clot"
  },
  {
    "part": "vas-",
    "definition": "blood vessel"
  },
  {
    "part": "vascul-",
    "definition": "blood vessel"
  },
  {
    "part": "soma-",
    "definition": "body"
  },
  {
    "part": "somat-",
    "definition": "body"
  },
  {
    "part": "corpor-",
    "definition": "body"
  },
  {
    "part": "myel-",
    "definition": "bone marrow, marrow"
  },
  {
    "part": "medull-",
    "definition": "bone marrow, marrow"
  },
  {
    "part": "encephal-",
    "definition": "brain"
  },
  {
    "part": "cerebr-",
    "definition": "brain"
  },
  {
    "part": "mast-",
    "definition": "breast"
  },
  {
    "part": "mamm-",
    "definition": "breast"
  },
  {
    "part": "parei-",
    "definition": "cheek"
  },
  {
    "part": "bucc-",
    "definition": "cheek"
  },
  {
    "part": "ot(o)-",
    "definition": "ear"
  },
  {
    "part": "aur(i)-",
    "definition": "ear"
  },
  {
    "part": "ov-",
    "definition": "eggs, ova"
  },
  {
    "part": "ocul(o)-",
    "definition": "eye"
  },
  {
    "part": "optic(o)- (French)",
    "definition": "eye"
  },
  {
    "part": "prosop(o)-",
    "definition": "face"
  },
  {
    "part": "faci(o)-",
    "definition": "face"
  },
  {
    "part": "front(o)-",
    "definition": "forehead"
  },
  {
    "part": "fell-",
    "definition": "gallbladder"
  },
  {
    "part": "gon(o)-",
    "definition": "genitals, sexually undifferentiated"
  },
  {
    "part": "phall(o)-",
    "definition": "genitals, sexually undifferentiated"
  },
  {
    "part": "aden(o)-",
    "definition": "gland"
  },
  {
    "part": "balan(o)-",
    "definition": "glans penis or clitoridis"
  },
  {
    "part": "trich(o)-",
    "definition": "hair"
  },
  {
    "part": "cheir(o)-",
    "definition": "hands"
  },
  {
    "part": "chir(o)-",
    "definition": "hands"
  },
  {
    "part": "manu-",
    "definition": "hands"
  },
  {
    "part": "capit(o)-",
    "definition": "head"
  },
  {
    "part": "cardi(o)-",
    "definition": "heart"
  },
  {
    "part": "gnath(o)-",
    "definition": "jaw"
  },
  {
    "part": "ren-",
    "definition": "kidney"
  },
  {
    "part": "gon-",
    "definition": "knee"
  },
  {
    "part": "cheil(o)-",
    "definition": "lip"
  },
  {
    "part": "chil(o)-",
    "definition": "lip"
  },
  {
    "part": "labi(o)-",
    "definition": "lip"
  },
  {
    "part": "hepat(o)-",
    "definition": "liver"
  },
  {
    "part": "jecor-",
    "definition": "liver"
  },
  {
    "part": "pudend-",
    "definition": "loins, pubic region"
  },
  {
    "part": "pneumon-",
    "definition": "lungs"
  },
  {
    "part": "pulmon(i)-",
    "definition": "lungs"
  },
  {
    "part": "ment-",
    "definition": "mind"
  },
  {
    "part": "stomat(o)-",
    "definition": "mouth"
  },
  {
    "part": "neur(o)-",
    "definition": "nerve; the nervous system"
  },
  {
    "part": "thele-",
    "definition": "nipple, teat"
  },
  {
    "part": "mammill-",
    "definition": "nipple, teat"
  },
  {
    "part": "nas-",
    "definition": "nose"
  },
  {
    "part": "ovari(o)-",
    "definition": "ovary"
  },
  {
    "part": "pyel(o)-",
    "definition": "pelvis"
  },
  {
    "part": "core-",
    "definition": "pupil (of the eye)"
  },
  {
    "part": "coro-",
    "definition": "pupil (of the eye)"
  },
  {
    "part": "humer(o)-",
    "definition": "shoulder"
  },
  {
    "part": "derm-",
    "definition": "skin"
  },
  {
    "part": "cut-",
    "definition": "skin"
  },
  {
    "part": "cuticul-",
    "definition": "skin"
  },
  {
    "part": "gastr(o)-",
    "definition": "stomach"
  },
  {
    "part": "ventr(o)-",
    "definition": "stomach"
  },
  {
    "part": "pharyng(o)-",
    "definition": "throat (upper throat cavity)"
  },
  {
    "part": "laryng(o)-",
    "definition": "throat (lower throat cavity/voice box)"
  },
  {
    "part": "pollic-",
    "definition": "thumb"
  },
  {
    "part": "odont(o)-",
    "definition": "tooth"
  },
  {
    "part": "dent(i)-",
    "definition": "tooth"
  },
  {
    "part": "gloss-",
    "definition": "tongue"
  },
  {
    "part": "glott-",
    "definition": "tongue"
  },
  {
    "part": "cel-",
    "definition": "tumour"
  },
  {
    "part": "tum-",
    "definition": "tumour"
  },
  {
    "part": "ureter(o)-",
    "definition": "ureter"
  },
  {
    "part": "urethr(o)-",
    "definition": "urethra"
  },
  {
    "part": "urethr(a)-",
    "definition": "urethra"
  },
  {
    "part": "ur(o)-",
    "definition": "urine, urinary system"
  },
  {
    "part": "urin(o)-",
    "definition": "urine, urinary system"
  },
  {
    "part": "salping(o)-",
    "definition": "uterine tubes"
  },
  {
    "part": "hyster(o)-",
    "definition": "uterus"
  },
  {
    "part": "metr(o)-",
    "definition": "uterus"
  },
  {
    "part": "colp(o)-",
    "definition": "vagina"
  },
  {
    "part": "vagin-",
    "definition": "vagina"
  },
  {
    "part": "phleb(o)-",
    "definition": "vein"
  },
  {
    "part": "ven-",
    "definition": "vein"
  },
  {
    "part": "vulv-",
    "definition": "vulva"
  },
  {
    "part": "carp(o)-",
    "definition": "wrist"
  },
  {
    "part": "cac-",
    "definition": "bad, incorrect"
  },
  {
    "part": "dys-",
    "definition": "bad, incorrect"
  },
  {
    "part": "mal-",
    "definition": "bad, incorrect"
  },
  {
    "part": "mis-",
    "definition": "bad, incorrect"
  },
  {
    "part": "prav-",
    "definition": "bent, crooked"
  },
  {
    "part": "magn(i)-",
    "definition": "big"
  },
  {
    "part": "megist-",
    "definition": "biggest"
  },
  {
    "part": "maxim-",
    "definition": "biggest"
  },
  {
    "part": "eury-",
    "definition": "broad, wide"
  },
  {
    "part": "lat(i)-",
    "definition": "broad, wide"
  },
  {
    "part": "frig(i)-",
    "definition": "cold"
  },
  {
    "part": "mort-",
    "definition": "dead"
  },
  {
    "part": "is(o)-",
    "definition": "equal"
  },
  {
    "part": "equ(i)-",
    "definition": "equal"
  },
  {
    "part": "pseud(o)-",
    "definition": "false"
  },
  {
    "part": "fals(i)-",
    "definition": "false"
  },
  {
    "part": "tachy-",
    "definition": "fast"
  },
  {
    "part": "celer-",
    "definition": "fast"
  },
  {
    "part": "platy-",
    "definition": "flat"
  },
  {
    "part": "plan(i)-",
    "definition": "flat"
  },
  {
    "part": "ben(e)-",
    "definition": "good, well"
  },
  {
    "part": "bon(i)-",
    "definition": "good, well"
  },
  {
    "part": "dur(i)-",
    "definition": "hard"
  },
  {
    "part": "bar(o)-",
    "definition": "heavy"
  },
  {
    "part": "grav(i)-",
    "definition": "heavy"
  },
  {
    "part": "coel(o)-",
    "definition": "hollow"
  },
  {
    "part": "cav(i)-",
    "definition": "hollow"
  },
  {
    "part": "poikil(o)",
    "definition": "irregular"
  },
  {
    "part": "macr(o)-",
    "definition": "long"
  },
  {
    "part": "long(i)-",
    "definition": "long"
  },
  {
    "part": "vir-",
    "definition": "male, masculine"
  },
  {
    "part": "angust(i)-",
    "definition": "narrow"
  },
  {
    "part": "nov(i)-",
    "definition": "new"
  },
  {
    "part": "rect(i)-",
    "definition": "normal, correct"
  },
  {
    "part": "paleo-",
    "definition": "old"
  },
  {
    "part": "veter-",
    "definition": "old"
  },
  {
    "part": "oxy-",
    "definition": "sharp"
  },
  {
    "part": "brev(i)-",
    "definition": "short"
  },
  {
    "part": "micr(o)-",
    "definition": "small"
  },
  {
    "part": "parv(i)- (rare)",
    "definition": "small"
  },
  {
    "part": "minim-",
    "definition": "smallest"
  },
  {
    "part": "dupli-",
    "definition": "double"
  },
  {
    "part": "oligo-",
    "definition": "few"
  },
  {
    "part": "demi- (French)",
    "definition": "half"
  },
  {
    "part": "multi-",
    "definition": "many, much"
  },
  {
    "part": "bis-",
    "definition": "twice"
  }
];
