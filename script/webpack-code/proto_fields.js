try {
  let e =
      "undefined" != typeof window
        ? window
        : "undefined" != typeof global
        ? global
        : "undefined" != typeof globalThis
        ? globalThis
        : "undefined" != typeof self
        ? self
        : {},
    n = new e.Error().stack;
  n &&
    ((e._sentryDebugIds = e._sentryDebugIds || {}),
    (e._sentryDebugIds[n] = "11805da2-324b-4a59-8a9d-8ca33e99b999"),
    (e._sentryDebugIdIdentifier =
      "sentry-dbid-11805da2-324b-4a59-8a9d-8ca33e99b999"));
} catch (e) {}
("use strict");
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [9902],
  {
    67986: function (e, n, t) {
      t.r(n),
        t.d(n, {
          CodeContextItem: function () {
            return a.$4G;
          },
          CodeContextSource: function () {
            return a.gQ9;
          },
          CodeContextType: function () {
            return a.fIx;
          },
          CompletionByDateEntry: function () {
            return a.kCJ;
          },
          CompletionByLanguageEntry: function () {
            return a.qBR;
          },
          CompletionStatistics: function () {
            return a.yRI;
          },
          ConnectGithubAccountResponse: function () {
            return r.ebJ;
          },
          ConnectNetlifyAccountResponse: function () {
            return r.aU0;
          },
          ContextScopeItem: function () {
            return a.igh;
          },
          GetAnalyticsRequest: function () {
            return i.th;
          },
          GetGitHubAccessTokenResponse: function () {
            return r.W0G;
          },
          GetGitHubAccountStatusResponse: function () {
            return r.JSK;
          },
          GetNetlifyAccountStatusResponse: function () {
            return r.If1;
          },
          GetPublicProfileRequest: function () {
            return r.CnX;
          },
          GetPublicProfileResponse: function () {
            return r.OZE;
          },
          GetTeamActivityRequest: function () {
            return r.gS5;
          },
          GetTeamActivityResponse: function () {
            return r.Cg6;
          },
          GetTeamBillingResponse_Invoice: function () {
            return r.dW;
          },
          GetTeamConfigRecordRequest: function () {
            return r.nQR;
          },
          GetTeamConfigRecordResponse: function () {
            return r.z02;
          },
          GetTeamSettingsResponse: function () {
            return r.wDg;
          },
          GitRepoInfo: function () {
            return a.LMS;
          },
          Language: function () {
            return a.SQ0;
          },
          Metadata: function () {
            return a.SFo;
          },
          PathScopeItem: function () {
            return a.eww;
          },
          PreapprovalNotFoundError: function () {
            return _;
          },
          PreapprovedUser: function () {
            return r.s55;
          },
          QueryRequest: function () {
            return i.D4;
          },
          QueryResult: function () {
            return i.IE;
          },
          QueryResultActiveUserCount: function () {
            return i.Db;
          },
          QueryResultCascadeRuns: function () {
            return i.I6;
          },
          QueryResultCompletionStats: function () {
            return i.ER;
          },
          QueryResultCompletionsByApiKey: function () {
            return i.Vd;
          },
          QueryResultCompletionsByDay: function () {
            return i.Lk;
          },
          QueryResultCompletionsByIde: function () {
            return i.dF;
          },
          QueryResultCompletionsByLanguage: function () {
            return i.ML;
          },
          QueryResultPercentCodeWritten: function () {
            return i.Cw;
          },
          RecordAnalyticsEventRequest: function () {
            return s.T;
          },
          ScmProvider: function () {
            return a.C2G;
          },
          Team: function () {
            return r.SZ7;
          },
          UpdateTeamConfigExternalRequest: function () {
            return r.IiL;
          },
          User: function () {
            return r.n5m;
          },
          UserAlreadyInTeamError: function () {
            return E;
          },
          UserNeedsReverifyError: function () {
            return m;
          },
          UserNotFoundError: function () {
            return o;
          },
          UserTeamStatus: function () {
            return a.ngL;
          },
        });
      var a = t(35165),
        r = t(46238),
        i = t(4577),
        s = t(2750);
      class o extends Error {
        constructor(e) {
          super(null != e ? e : "User not found."),
            (this.name = "UserNotFoundError");
        }
      }
      class _ extends Error {
        constructor(e) {
          super(null != e ? e : "Preapproval not found."),
            (this.name = "PreapprovalNotFoundError");
        }
      }
      class m extends Error {
        constructor(e) {
          super(null != e ? e : "user needs to reverify account"),
            (this.name = "UserNeedsReverifyError");
        }
      }
      class E extends Error {
        constructor(e) {
          super(null != e ? e : "user already exists in a different team"),
            (this.name = "UserAlreadyInTeamError");
        }
      }
    },
    35165: function (e, n, t) {
      t.d(n, {
        $4G: function () {
          return at;
        },
        $5R: function () {
          return n1;
        },
        $9O: function () {
          return rT;
        },
        $K7: function () {
          return tr;
        },
        $PV: function () {
          return tO;
        },
        $Wp: function () {
          return io;
        },
        AER: function () {
          return aM;
        },
        Azl: function () {
          return tB;
        },
        BBB: function () {
          return ro;
        },
        Bfb: function () {
          return rj;
        },
        Bk$: function () {
          return e2;
        },
        C2G: function () {
          return ni;
        },
        C3P: function () {
          return tk;
        },
        CSl: function () {
          return a9;
        },
        CaZ: function () {
          return tw;
        },
        Dj3: function () {
          return aE;
        },
        E$4: function () {
          return rp;
        },
        FLT: function () {
          return nf;
        },
        FSd: function () {
          return rA;
        },
        G2x: function () {
          return im;
        },
        Ghe: function () {
          return tV;
        },
        Hbb: function () {
          return rY;
        },
        Hnr: function () {
          return eV;
        },
        HsB: function () {
          return rx;
        },
        IGB: function () {
          return eF;
        },
        IVM: function () {
          return nS;
        },
        J0j: function () {
          return t6;
        },
        LMS: function () {
          return an;
        },
        LND: function () {
          return nr;
        },
        M5c: function () {
          return t2;
        },
        MJ6: function () {
          return th;
        },
        NxT: function () {
          return rB;
        },
        OsT: function () {
          return e3;
        },
        PCp: function () {
          return nm;
        },
        PGO: function () {
          return af;
        },
        QIb: function () {
          return tX;
        },
        QVo: function () {
          return rm;
        },
        QnO: function () {
          return rk;
        },
        Quq: function () {
          return ah;
        },
        R4O: function () {
          return nX;
        },
        R6U: function () {
          return ab;
        },
        RLC: function () {
          return t$;
        },
        RT3: function () {
          return rF;
        },
        Rib: function () {
          return ra;
        },
        SFo: function () {
          return tx;
        },
        SQ0: function () {
          return e4;
        },
        SqK: function () {
          return ax;
        },
        TlR: function () {
          return r$;
        },
        Tru: function () {
          return tH;
        },
        Uep: function () {
          return rK;
        },
        Uj7: function () {
          return ti;
        },
        Uqi: function () {
          return nV;
        },
        UxG: function () {
          return rX;
        },
        V1k: function () {
          return nD;
        },
        VPs: function () {
          return aI;
        },
        VhE: function () {
          return ir;
        },
        Vk5: function () {
          return t_;
        },
        Vo0: function () {
          return aR;
        },
        WTG: function () {
          return rn;
        },
        X8m: function () {
          return a5;
        },
        XWE: function () {
          return tf;
        },
        Y7c: function () {
          return e6;
        },
        YJw: function () {
          return aH;
        },
        YZc: function () {
          return tJ;
        },
        ZNC: function () {
          return rz;
        },
        _Aj: function () {
          return a6;
        },
        _j1: function () {
          return ai;
        },
        aYQ: function () {
          return e7;
        },
        b5v: function () {
          return t8;
        },
        bIX: function () {
          return nQ;
        },
        bY4: function () {
          return as;
        },
        bd9: function () {
          return rU;
        },
        dPs: function () {
          return rQ;
        },
        dxv: function () {
          return tK;
        },
        e23: function () {
          return t1;
        },
        e4h: function () {
          return r1;
        },
        ejj: function () {
          return n$;
        },
        eqT: function () {
          return rd;
        },
        eww: function () {
          return aJ;
        },
        fIx: function () {
          return no;
        },
        g1l: function () {
          return tS;
        },
        gQ9: function () {
          return n_;
        },
        gX1: function () {
          return r_;
        },
        haP: function () {
          return tz;
        },
        igh: function () {
          return a0;
        },
        jCT: function () {
          return ad;
        },
        juk: function () {
          return tv;
        },
        k8e: function () {
          return ry;
        },
        kCJ: function () {
          return a_;
        },
        l8u: function () {
          return rR;
        },
        lmn: function () {
          return r2;
        },
        loO: function () {
          return tZ;
        },
        m2s: function () {
          return a7;
        },
        mEC: function () {
          return t4;
        },
        nZ9: function () {
          return al;
        },
        n_u: function () {
          return nq;
        },
        neP: function () {
          return nv;
        },
        ngL: function () {
          return e8;
        },
        niP: function () {
          return aC;
        },
        ntn: function () {
          return il;
        },
        o40: function () {
          return rG;
        },
        oEB: function () {
          return rw;
        },
        ogd: function () {
          return e5;
        },
        pgC: function () {
          return rI;
        },
        qBR: function () {
          return am;
        },
        qbd: function () {
          return rr;
        },
        rNj: function () {
          return r7;
        },
        rUP: function () {
          return tj;
        },
        rdQ: function () {
          return e9;
        },
        rg1: function () {
          return tg;
        },
        rpR: function () {
          return eb;
        },
        t9T: function () {
          return nx;
        },
        tDI: function () {
          return eX;
        },
        tbr: function () {
          return nY;
        },
        tyb: function () {
          return nl;
        },
        u8K: function () {
          return tE;
        },
        uC0: function () {
          return tb;
        },
        uTW: function () {
          return e$;
        },
        unC: function () {
          return nG;
        },
        vDv: function () {
          return tY;
        },
        viY: function () {
          return aU;
        },
        wuw: function () {
          return nn;
        },
        xKl: function () {
          return tp;
        },
        xdI: function () {
          return ac;
        },
        y3$: function () {
          return ne;
        },
        yRI: function () {
          return ao;
        },
        yUQ: function () {
          return au;
        },
        ybJ: function () {
          return rL;
        },
        z1k: function () {
          return eW;
        },
        zcD: function () {
          return n2;
        },
        zfq: function () {
          return a4;
        },
        ztj: function () {
          return ay;
        },
      });
      var a,
        r,
        i,
        s,
        o,
        _,
        m,
        E,
        u,
        l,
        c,
        T,
        d,
        S,
        A,
        O,
        N,
        C,
        f,
        w,
        I,
        R,
        L,
        p,
        D,
        P,
        M,
        y,
        h,
        U,
        g,
        J,
        k,
        B,
        G,
        F,
        x,
        q,
        b,
        v,
        H,
        V,
        W,
        K,
        X,
        Y,
        Q,
        z,
        j,
        Z,
        $,
        ee,
        en,
        et,
        ea,
        er,
        ei,
        es,
        eo,
        e_,
        em,
        eE,
        eu,
        el,
        ec,
        eT,
        ed,
        eS,
        eA,
        eO,
        eN,
        eC,
        ef,
        ew,
        eI,
        eR,
        eL,
        ep,
        eD,
        eP,
        eM,
        ey,
        eh,
        eU,
        eg,
        eJ,
        ek,
        eB,
        eG,
        eF,
        ex,
        eq,
        eb,
        ev,
        eH,
        eV,
        eW,
        eK,
        eX,
        eY,
        eQ,
        ez,
        ej,
        eZ,
        e$,
        e1,
        e2,
        e0,
        e9,
        e3,
        e4,
        e5,
        e8,
        e6,
        e7,
        ne,
        nn,
        nt,
        na,
        nr,
        ni,
        ns,
        no,
        n_,
        nm,
        nE,
        nu,
        nl,
        nc,
        nT,
        nd,
        nS,
        nA,
        nO,
        nN,
        nC,
        nf,
        nw,
        nI,
        nR,
        nL,
        np,
        nD,
        nP,
        nM,
        ny,
        nh,
        nU,
        ng,
        nJ,
        nk,
        nB,
        nG,
        nF,
        nx,
        nq,
        nb,
        nv,
        nH,
        nV,
        nW,
        nK,
        nX,
        nY,
        nQ,
        nz,
        nj,
        nZ,
        n$,
        n1,
        n2,
        n0,
        n9,
        n3,
        n4,
        n5,
        n8,
        n6,
        n7 = t(18698),
        te = t(5462),
        tn = t(26847),
        tt = t(21552),
        ta = t(38229);
      ((a = eF || (eF = {}))[(a.UNSPECIFIED = 0)] = "UNSPECIFIED"),
        (a[(a.AUTOCOMPLETE = 1)] = "AUTOCOMPLETE"),
        (a[(a.CHAT = 2)] = "CHAT"),
        (a[(a.COMMAND_GENERATE = 4)] = "COMMAND_GENERATE"),
        (a[(a.COMMAND_EDIT = 5)] = "COMMAND_EDIT"),
        (a[(a.SUPERCOMPLETE = 6)] = "SUPERCOMPLETE"),
        (a[(a.COMMAND_PLAN = 7)] = "COMMAND_PLAN"),
        (a[(a.QUERY = 8)] = "QUERY"),
        (a[(a.FAST_APPLY = 9)] = "FAST_APPLY"),
        (a[(a.COMMAND_TERMINAL = 10)] = "COMMAND_TERMINAL"),
        (a[(a.TAB_JUMP = 11)] = "TAB_JUMP"),
        (a[(a.CASCADE = 12)] = "CASCADE"),
        n7.w.util.setEnumType(eF, "exa.codeium_common_pb.ProviderSource", [
          {
            no: 0,
            name: "PROVIDER_SOURCE_UNSPECIFIED",
          },
          {
            no: 1,
            name: "PROVIDER_SOURCE_AUTOCOMPLETE",
          },
          {
            no: 2,
            name: "PROVIDER_SOURCE_CHAT",
          },
          {
            no: 4,
            name: "PROVIDER_SOURCE_COMMAND_GENERATE",
          },
          {
            no: 5,
            name: "PROVIDER_SOURCE_COMMAND_EDIT",
          },
          {
            no: 6,
            name: "PROVIDER_SOURCE_SUPERCOMPLETE",
          },
          {
            no: 7,
            name: "PROVIDER_SOURCE_COMMAND_PLAN",
          },
          {
            no: 8,
            name: "PROVIDER_SOURCE_QUERY",
          },
          {
            no: 9,
            name: "PROVIDER_SOURCE_FAST_APPLY",
          },
          {
            no: 10,
            name: "PROVIDER_SOURCE_COMMAND_TERMINAL",
          },
          {
            no: 11,
            name: "PROVIDER_SOURCE_TAB_JUMP",
          },
          {
            no: 12,
            name: "PROVIDER_SOURCE_CASCADE",
          },
        ]),
        ((r = ex || (ex = {}))[(r.UNSPECIFIED = 0)] = "UNSPECIFIED"),
        (r[(r.FILE_MARKER = 2)] = "FILE_MARKER"),
        (r[(r.OTHER_DOCUMENT = 4)] = "OTHER_DOCUMENT"),
        (r[(r.BEFORE_CURSOR = 5)] = "BEFORE_CURSOR"),
        (r[(r.AFTER_CURSOR = 7)] = "AFTER_CURSOR"),
        (r[(r.FIM = 8)] = "FIM"),
        (r[(r.SOT = 9)] = "SOT"),
        (r[(r.EOT = 10)] = "EOT"),
        (r[(r.CODE_CONTEXT_ITEM = 13)] = "CODE_CONTEXT_ITEM"),
        (r[(r.INSTRUCTION = 14)] = "INSTRUCTION"),
        (r[(r.SELECTION = 15)] = "SELECTION"),
        (r[(r.TRAJECTORY_STEP = 16)] = "TRAJECTORY_STEP"),
        (r[(r.ACTIVE_DOCUMENT = 17)] = "ACTIVE_DOCUMENT"),
        (r[(r.CACHED_MESSAGE = 18)] = "CACHED_MESSAGE"),
        n7.w.util.setEnumType(ex, "exa.codeium_common_pb.PromptElementKind", [
          {
            no: 0,
            name: "PROMPT_ELEMENT_KIND_UNSPECIFIED",
          },
          {
            no: 2,
            name: "PROMPT_ELEMENT_KIND_FILE_MARKER",
          },
          {
            no: 4,
            name: "PROMPT_ELEMENT_KIND_OTHER_DOCUMENT",
          },
          {
            no: 5,
            name: "PROMPT_ELEMENT_KIND_BEFORE_CURSOR",
          },
          {
            no: 7,
            name: "PROMPT_ELEMENT_KIND_AFTER_CURSOR",
          },
          {
            no: 8,
            name: "PROMPT_ELEMENT_KIND_FIM",
          },
          {
            no: 9,
            name: "PROMPT_ELEMENT_KIND_SOT",
          },
          {
            no: 10,
            name: "PROMPT_ELEMENT_KIND_EOT",
          },
          {
            no: 13,
            name: "PROMPT_ELEMENT_KIND_CODE_CONTEXT_ITEM",
          },
          {
            no: 14,
            name: "PROMPT_ELEMENT_KIND_INSTRUCTION",
          },
          {
            no: 15,
            name: "PROMPT_ELEMENT_KIND_SELECTION",
          },
          {
            no: 16,
            name: "PROMPT_ELEMENT_KIND_TRAJECTORY_STEP",
          },
          {
            no: 17,
            name: "PROMPT_ELEMENT_KIND_ACTIVE_DOCUMENT",
          },
          {
            no: 18,
            name: "PROMPT_ELEMENT_KIND_CACHED_MESSAGE",
          },
        ]),
        ((i = eq || (eq = {}))[(i.UNSPECIFIED = 0)] = "UNSPECIFIED"),
        (i[(i.COPY = 1)] = "COPY"),
        (i[(i.PROMPT_CACHE = 2)] = "PROMPT_CACHE"),
        n7.w.util.setEnumType(
          eq,
          "exa.codeium_common_pb.PromptAnnotationKind",
          [
            {
              no: 0,
              name: "PROMPT_ANNOTATION_KIND_UNSPECIFIED",
            },
            {
              no: 1,
              name: "PROMPT_ANNOTATION_KIND_COPY",
            },
            {
              no: 2,
              name: "PROMPT_ANNOTATION_KIND_PROMPT_CACHE",
            },
          ]
        ),
        ((s = eb || (eb = {}))[(s.UNSPECIFIED = 0)] = "UNSPECIFIED"),
        (s[(s.USE_INTERNAL_CHAT_MODEL = 36)] = "USE_INTERNAL_CHAT_MODEL"),
        (s[(s.RECORD_FILES = 47)] = "RECORD_FILES"),
        (s[(s.NO_SAMPLER_EARLY_STOP = 48)] = "NO_SAMPLER_EARLY_STOP"),
        (s[(s.CM_MEMORY_TELEMETRY = 53)] = "CM_MEMORY_TELEMETRY"),
        (s[(s.LANGUAGE_SERVER_VERSION = 55)] = "LANGUAGE_SERVER_VERSION"),
        (s[(s.LANGUAGE_SERVER_AUTO_RELOAD = 56)] =
          "LANGUAGE_SERVER_AUTO_RELOAD"),
        (s[(s.ONLY_MULTILINE = 60)] = "ONLY_MULTILINE"),
        (s[(s.USE_AUTOCOMPLETE_MODEL = 64)] = "USE_AUTOCOMPLETE_MODEL"),
        (s[(s.USE_ATTRIBUTION_FOR_INDIVIDUAL_TIER = 68)] =
          "USE_ATTRIBUTION_FOR_INDIVIDUAL_TIER"),
        (s[(s.CHAT_MODEL_CONFIG = 78)] = "CHAT_MODEL_CONFIG"),
        (s[(s.COMMAND_MODEL_CONFIG = 79)] = "COMMAND_MODEL_CONFIG"),
        (s[(s.MIN_IDE_VERSION = 81)] = "MIN_IDE_VERSION"),
        (s[(s.API_SERVER_VERBOSE_ERRORS = 84)] = "API_SERVER_VERBOSE_ERRORS"),
        (s[(s.DEFAULT_ENABLE_SEARCH = 86)] = "DEFAULT_ENABLE_SEARCH"),
        (s[(s.COLLECT_ONBOARDING_EVENTS = 87)] = "COLLECT_ONBOARDING_EVENTS"),
        (s[(s.COLLECT_EXAMPLE_COMPLETIONS = 88)] =
          "COLLECT_EXAMPLE_COMPLETIONS"),
        (s[(s.USE_MULTILINE_MODEL = 89)] = "USE_MULTILINE_MODEL"),
        (s[(s.ATTRIBUTION_KILL_SWITCH = 92)] = "ATTRIBUTION_KILL_SWITCH"),
        (s[(s.FAST_MULTILINE = 94)] = "FAST_MULTILINE"),
        (s[(s.SINGLE_COMPLETION = 95)] = "SINGLE_COMPLETION"),
        (s[(s.STOP_FIRST_NON_WHITESPACE_LINE = 96)] =
          "STOP_FIRST_NON_WHITESPACE_LINE"),
        (s[(s.CORTEX_CONFIG = 102)] = "CORTEX_CONFIG"),
        (s[(s.MODEL_CHAT_11121_VARIANTS = 103)] = "MODEL_CHAT_11121_VARIANTS"),
        (s[(s.INCLUDE_PROMPT_COMPONENTS = 105)] = "INCLUDE_PROMPT_COMPONENTS"),
        (s[(s.NON_TEAMS_KILL_SWITCH = 106)] = "NON_TEAMS_KILL_SWITCH"),
        (s[(s.PERSIST_CODE_TRACKER = 108)] = "PERSIST_CODE_TRACKER"),
        (s[(s.API_SERVER_LIVENESS_PROBE = 112)] = "API_SERVER_LIVENESS_PROBE"),
        (s[(s.CHAT_COMPLETION_TOKENS_SOFT_LIMIT = 114)] =
          "CHAT_COMPLETION_TOKENS_SOFT_LIMIT"),
        (s[(s.CHAT_TOKENS_SOFT_LIMIT = 115)] = "CHAT_TOKENS_SOFT_LIMIT"),
        (s[(s.DISABLE_COMPLETIONS_CACHE = 118)] = "DISABLE_COMPLETIONS_CACHE"),
        (s[(s.LLAMA3_405B_KILL_SWITCH = 119)] = "LLAMA3_405B_KILL_SWITCH"),
        (s[(s.USE_COMMAND_DOCSTRING_GENERATION = 121)] =
          "USE_COMMAND_DOCSTRING_GENERATION"),
        (s[(s.ENABLE_SUPERCOMPLETE = 123)] = "ENABLE_SUPERCOMPLETE"),
        (s[(s.SENTRY = 136)] = "SENTRY"),
        (s[(s.FAST_SINGLELINE = 144)] = "FAST_SINGLELINE"),
        (s[(s.R2_LANGUAGE_SERVER_DOWNLOAD = 147)] =
          "R2_LANGUAGE_SERVER_DOWNLOAD"),
        (s[(s.SPLIT_MODEL = 152)] = "SPLIT_MODEL"),
        (s[(s.WINDSURF_SENTRY_SAMPLE_RATE = 198)] =
          "WINDSURF_SENTRY_SAMPLE_RATE"),
        (s[(s.API_SERVER_CUTOFF = 158)] = "API_SERVER_CUTOFF"),
        (s[(s.FAST_SPEED_KILL_SWITCH = 159)] = "FAST_SPEED_KILL_SWITCH"),
        (s[(s.PREDICTIVE_MULTILINE = 160)] = "PREDICTIVE_MULTILINE"),
        (s[(s.SUPERCOMPLETE_FILTER_REVERT = 125)] =
          "SUPERCOMPLETE_FILTER_REVERT"),
        (s[(s.SUPERCOMPLETE_FILTER_PREFIX_MATCH = 126)] =
          "SUPERCOMPLETE_FILTER_PREFIX_MATCH"),
        (s[(s.SUPERCOMPLETE_FILTER_SCORE_THRESHOLD = 127)] =
          "SUPERCOMPLETE_FILTER_SCORE_THRESHOLD"),
        (s[(s.SUPERCOMPLETE_FILTER_INSERTION_CAP = 128)] =
          "SUPERCOMPLETE_FILTER_INSERTION_CAP"),
        (s[(s.SUPERCOMPLETE_FILTER_DELETION_CAP = 133)] =
          "SUPERCOMPLETE_FILTER_DELETION_CAP"),
        (s[(s.SUPERCOMPLETE_FILTER_WHITESPACE_ONLY = 156)] =
          "SUPERCOMPLETE_FILTER_WHITESPACE_ONLY"),
        (s[(s.SUPERCOMPLETE_FILTER_NO_OP = 170)] =
          "SUPERCOMPLETE_FILTER_NO_OP"),
        (s[(s.SUPERCOMPLETE_FILTER_SUFFIX_MATCH = 176)] =
          "SUPERCOMPLETE_FILTER_SUFFIX_MATCH"),
        (s[(s.SUPERCOMPLETE_FILTER_PREVIOUSLY_SHOWN = 182)] =
          "SUPERCOMPLETE_FILTER_PREVIOUSLY_SHOWN"),
        (s[(s.SUPERCOMPLETE_MIN_SCORE = 129)] = "SUPERCOMPLETE_MIN_SCORE"),
        (s[(s.SUPERCOMPLETE_MAX_INSERTIONS = 130)] =
          "SUPERCOMPLETE_MAX_INSERTIONS"),
        (s[(s.SUPERCOMPLETE_LINE_RADIUS = 131)] = "SUPERCOMPLETE_LINE_RADIUS"),
        (s[(s.SUPERCOMPLETE_MAX_DELETIONS = 132)] =
          "SUPERCOMPLETE_MAX_DELETIONS"),
        (s[(s.SUPERCOMPLETE_USE_CURRENT_LINE = 135)] =
          "SUPERCOMPLETE_USE_CURRENT_LINE"),
        (s[(s.SUPERCOMPLETE_RECENT_STEPS_DURATION = 138)] =
          "SUPERCOMPLETE_RECENT_STEPS_DURATION"),
        (s[(s.SUPERCOMPLETE_USE_CODE_DIAGNOSTICS = 143)] =
          "SUPERCOMPLETE_USE_CODE_DIAGNOSTICS"),
        (s[(s.SUPERCOMPLETE_DIAGNOSTIC_SEVERITY_THRESHOLD = 223)] =
          "SUPERCOMPLETE_DIAGNOSTIC_SEVERITY_THRESHOLD"),
        (s[(s.SUPERCOMPLETE_CODE_DIAGNOSTICS_TOP_K = 232)] =
          "SUPERCOMPLETE_CODE_DIAGNOSTICS_TOP_K"),
        (s[(s.SUPERCOMPLETE_MAX_TRAJECTORY_STEPS = 154)] =
          "SUPERCOMPLETE_MAX_TRAJECTORY_STEPS"),
        (s[(s.SUPERCOMPLETE_ON_ACCEPT_ONLY = 157)] =
          "SUPERCOMPLETE_ON_ACCEPT_ONLY"),
        (s[(s.SUPERCOMPLETE_TEMPERATURE = 183)] = "SUPERCOMPLETE_TEMPERATURE"),
        (s[(s.SUPERCOMPLETE_MAX_TRAJECTORY_STEP_SIZE = 203)] =
          "SUPERCOMPLETE_MAX_TRAJECTORY_STEP_SIZE"),
        (s[(s.SUPERCOMPLETE_DISABLE_TYPING_CACHE = 231)] =
          "SUPERCOMPLETE_DISABLE_TYPING_CACHE"),
        (s[(s.SUPERCOMPLETE_ALWAYS_USE_CACHE_ON_EQUAL_STATE = 293)] =
          "SUPERCOMPLETE_ALWAYS_USE_CACHE_ON_EQUAL_STATE"),
        (s[(s.SUPERCOMPLETE_CACHE_ON_PARENT_ID_KILL_SWITCH = 297)] =
          "SUPERCOMPLETE_CACHE_ON_PARENT_ID_KILL_SWITCH"),
        (s[(s.SUPERCOMPLETE_PRUNE_RESPONSE = 140)] =
          "SUPERCOMPLETE_PRUNE_RESPONSE"),
        (s[(s.SUPERCOMPLETE_PRUNE_MAX_INSERT_DELETE_LINE_DELTA = 141)] =
          "SUPERCOMPLETE_PRUNE_MAX_INSERT_DELETE_LINE_DELTA"),
        (s[(s.SUPERCOMPLETE_MODEL_CONFIG = 145)] =
          "SUPERCOMPLETE_MODEL_CONFIG"),
        (s[(s.SUPERCOMPLETE_ON_TAB = 151)] = "SUPERCOMPLETE_ON_TAB"),
        (s[(s.SUPERCOMPLETE_INLINE_PURE_DELETE = 171)] =
          "SUPERCOMPLETE_INLINE_PURE_DELETE"),
        (s[(s.SUPERCOMPLETE_INLINE_RICH_GHOST_TEXT_INSERTIONS = 218)] =
          "SUPERCOMPLETE_INLINE_RICH_GHOST_TEXT_INSERTIONS"),
        (s[(s.MODEL_CHAT_19821_VARIANTS = 308)] = "MODEL_CHAT_19821_VARIANTS"),
        (s[(s.SUPERCOMPLETE_MAX_CONCURRENT_REQUESTS = 284)] =
          "SUPERCOMPLETE_MAX_CONCURRENT_REQUESTS"),
        (s[(s.COMMAND_PROMPT_CACHE_CONFIG = 255)] =
          "COMMAND_PROMPT_CACHE_CONFIG"),
        (s[(s.CUMULATIVE_PROMPT_CONFIG = 256)] = "CUMULATIVE_PROMPT_CONFIG"),
        (s[(s.CUMULATIVE_PROMPT_CASCADE_CONFIG = 279)] =
          "CUMULATIVE_PROMPT_CASCADE_CONFIG"),
        (s[(s.TAB_JUMP_CUMULATIVE_PROMPT_CONFIG = 301)] =
          "TAB_JUMP_CUMULATIVE_PROMPT_CONFIG"),
        (s[(s.COMPLETION_SPEED_SUPERCOMPLETE_CACHE = 207)] =
          "COMPLETION_SPEED_SUPERCOMPLETE_CACHE"),
        (s[(s.COMPLETION_SPEED_PREDICTIVE_SUPERCOMPLETE = 208)] =
          "COMPLETION_SPEED_PREDICTIVE_SUPERCOMPLETE"),
        (s[(s.COMPLETION_SPEED_TAB_JUMP_CACHE = 209)] =
          "COMPLETION_SPEED_TAB_JUMP_CACHE"),
        (s[(s.COMPLETION_SPEED_PREDICTIVE_TAB_JUMP = 210)] =
          "COMPLETION_SPEED_PREDICTIVE_TAB_JUMP"),
        (s[
          (s.COMPLETION_SPEED_BLOCK_TAB_JUMP_ON_PREDICTIVE_SUPERCOMPLETE = 294)
        ] = "COMPLETION_SPEED_BLOCK_TAB_JUMP_ON_PREDICTIVE_SUPERCOMPLETE"),
        (s[(s.JETBRAINS_ENABLE_ONBOARDING = 137)] =
          "JETBRAINS_ENABLE_ONBOARDING"),
        (s[(s.ENABLE_AUTOCOMPLETE_DURING_INTELLISENSE = 146)] =
          "ENABLE_AUTOCOMPLETE_DURING_INTELLISENSE"),
        (s[(s.COMMAND_BOX_ON_TOP = 155)] = "COMMAND_BOX_ON_TOP"),
        (s[(s.CONTEXT_ACTIVE_DOCUMENT_FRACTION = 149)] =
          "CONTEXT_ACTIVE_DOCUMENT_FRACTION"),
        (s[(s.CONTEXT_COMMAND_TRAJECTORY_PROMPT_CONFIG = 150)] =
          "CONTEXT_COMMAND_TRAJECTORY_PROMPT_CONFIG"),
        (s[(s.CONTEXT_FORCE_LOCAL_CONTEXT = 178)] =
          "CONTEXT_FORCE_LOCAL_CONTEXT"),
        (s[(s.CROSS_SELL_EXTENSION_DOWNLOAD_WINDSURF = 220)] =
          "CROSS_SELL_EXTENSION_DOWNLOAD_WINDSURF"),
        (s[(s.MODEL_LLAMA_3_1_70B_INSTRUCT_LONG_CONTEXT_VARIANTS = 295)] =
          "MODEL_LLAMA_3_1_70B_INSTRUCT_LONG_CONTEXT_VARIANTS"),
        (s[(s.USE_AUTOCOMPLETE_MODEL_SERVER_SIDE = 163)] =
          "USE_AUTOCOMPLETE_MODEL_SERVER_SIDE"),
        (s[(s.SUPERCOMPLETE_NO_CONTEXT = 165)] = "SUPERCOMPLETE_NO_CONTEXT"),
        (s[(s.SUPERCOMPLETE_NO_ACTIVE_NODE = 166)] =
          "SUPERCOMPLETE_NO_ACTIVE_NODE"),
        (s[(s.TAB_JUMP_ENABLED = 168)] = "TAB_JUMP_ENABLED"),
        (s[(s.TAB_JUMP_ACCEPT_ENABLED = 169)] = "TAB_JUMP_ACCEPT_ENABLED"),
        (s[(s.TAB_JUMP_LINE_RADIUS = 177)] = "TAB_JUMP_LINE_RADIUS"),
        (s[(s.TAB_JUMP_MIN_FILTER_RADIUS = 197)] =
          "TAB_JUMP_MIN_FILTER_RADIUS"),
        (s[(s.TAB_JUMP_ON_ACCEPT_ONLY = 205)] = "TAB_JUMP_ON_ACCEPT_ONLY"),
        (s[(s.TAB_JUMP_FILTER_IN_SELECTION = 215)] =
          "TAB_JUMP_FILTER_IN_SELECTION"),
        (s[(s.TAB_JUMP_MODEL_CONFIG = 237)] = "TAB_JUMP_MODEL_CONFIG"),
        (s[(s.TAB_JUMP_FILTER_NO_OP = 238)] = "TAB_JUMP_FILTER_NO_OP"),
        (s[(s.TAB_JUMP_FILTER_REVERT = 239)] = "TAB_JUMP_FILTER_REVERT"),
        (s[(s.TAB_JUMP_FILTER_SCORE_THRESHOLD = 240)] =
          "TAB_JUMP_FILTER_SCORE_THRESHOLD"),
        (s[(s.TAB_JUMP_FILTER_WHITESPACE_ONLY = 241)] =
          "TAB_JUMP_FILTER_WHITESPACE_ONLY"),
        (s[(s.TAB_JUMP_FILTER_INSERTION_CAP = 242)] =
          "TAB_JUMP_FILTER_INSERTION_CAP"),
        (s[(s.TAB_JUMP_FILTER_DELETION_CAP = 243)] =
          "TAB_JUMP_FILTER_DELETION_CAP"),
        (s[(s.TAB_JUMP_PRUNE_RESPONSE = 260)] = "TAB_JUMP_PRUNE_RESPONSE"),
        (s[(s.TAB_JUMP_PRUNE_MAX_INSERT_DELETE_LINE_DELTA = 261)] =
          "TAB_JUMP_PRUNE_MAX_INSERT_DELETE_LINE_DELTA"),
        (s[(s.TAB_JUMP_STOP_TOKEN_MIDSTREAM = 317)] =
          "TAB_JUMP_STOP_TOKEN_MIDSTREAM"),
        (s[(s.VIEWED_FILE_TRACKER_CONFIG = 211)] =
          "VIEWED_FILE_TRACKER_CONFIG"),
        (s[(s.SNAPSHOT_TO_STEP_OPTIONS_OVERRIDE = 305)] =
          "SNAPSHOT_TO_STEP_OPTIONS_OVERRIDE"),
        (s[(s.STREAMING_EXTERNAL_COMMAND = 172)] =
          "STREAMING_EXTERNAL_COMMAND"),
        (s[(s.USE_SPECIAL_EDIT_CODE_BLOCK = 179)] =
          "USE_SPECIAL_EDIT_CODE_BLOCK"),
        (s[(s.ENABLE_SUGGESTED_RESPONSES = 187)] =
          "ENABLE_SUGGESTED_RESPONSES"),
        (s[(s.CASCADE_BASE_MODEL_ID = 190)] = "CASCADE_BASE_MODEL_ID"),
        (s[(s.CASCADE_PLAN_BASED_CONFIG_OVERRIDE = 266)] =
          "CASCADE_PLAN_BASED_CONFIG_OVERRIDE"),
        (s[(s.CASCADE_GLOBAL_CONFIG_OVERRIDE = 212)] =
          "CASCADE_GLOBAL_CONFIG_OVERRIDE"),
        (s[(s.CASCADE_BACKGROUND_RESEARCH_CONFIG_OVERRIDE = 193)] =
          "CASCADE_BACKGROUND_RESEARCH_CONFIG_OVERRIDE"),
        (s[(s.CASCADE_ENFORCE_QUOTA = 204)] = "CASCADE_ENFORCE_QUOTA"),
        (s[(s.CASCADE_ENABLE_AUTOMATED_MEMORIES = 224)] =
          "CASCADE_ENABLE_AUTOMATED_MEMORIES"),
        (s[(s.CASCADE_MEMORY_CONFIG_OVERRIDE = 314)] =
          "CASCADE_MEMORY_CONFIG_OVERRIDE"),
        (s[(s.CASCADE_USE_REPLACE_CONTENT_EDIT_TOOL = 228)] =
          "CASCADE_USE_REPLACE_CONTENT_EDIT_TOOL"),
        (s[(s.CASCADE_VIEW_FILE_TOOL_CONFIG_OVERRIDE = 258)] =
          "CASCADE_VIEW_FILE_TOOL_CONFIG_OVERRIDE"),
        (s[(s.CASCADE_USE_EXPERIMENT_CHECKPOINTER = 247)] =
          "CASCADE_USE_EXPERIMENT_CHECKPOINTER"),
        (s[(s.CASCADE_ENABLE_CUSTOM_RECIPES = 236)] =
          "CASCADE_ENABLE_CUSTOM_RECIPES"),
        (s[(s.CASCADE_ENABLE_MCP_TOOLS = 245)] = "CASCADE_ENABLE_MCP_TOOLS"),
        (s[(s.CASCADE_AUTO_FIX_LINTS = 275)] = "CASCADE_AUTO_FIX_LINTS"),
        (s[(s.USE_ANTHROPIC_TOKEN_EFFICIENT_TOOLS_BETA = 296)] =
          "USE_ANTHROPIC_TOKEN_EFFICIENT_TOOLS_BETA"),
        (s[(s.CASCADE_USER_MEMORIES_IN_SYS_PROMPT = 289)] =
          "CASCADE_USER_MEMORIES_IN_SYS_PROMPT"),
        (s[(s.CASCADE_ENABLE_PROXY_WEB_SERVER = 290)] =
          "CASCADE_ENABLE_PROXY_WEB_SERVER"),
        (s[(s.COLLAPSE_ASSISTANT_MESSAGES = 312)] =
          "COLLAPSE_ASSISTANT_MESSAGES"),
        (s[(s.CASCADE_DEFAULT_MODEL_OVERRIDE = 321)] =
          "CASCADE_DEFAULT_MODEL_OVERRIDE"),
        (s[(s.ENABLE_SMART_COPY = 181)] = "ENABLE_SMART_COPY"),
        (s[(s.ENABLE_COMMIT_MESSAGE_GENERATION = 185)] =
          "ENABLE_COMMIT_MESSAGE_GENERATION"),
        (s[(s.SKIP_CONSISTENCY_MANAGER = 194)] = "SKIP_CONSISTENCY_MANAGER"),
        (s[(s.FIREWORKS_ON_DEMAND_DEPLOYMENT = 276)] =
          "FIREWORKS_ON_DEMAND_DEPLOYMENT"),
        (s[(s.API_SERVER_CLIENT_USE_HTTP_2 = 202)] =
          "API_SERVER_CLIENT_USE_HTTP_2"),
        (s[(s.AUTOCOMPLETE_DEFAULT_DEBOUNCE_MS = 213)] =
          "AUTOCOMPLETE_DEFAULT_DEBOUNCE_MS"),
        (s[(s.AUTOCOMPLETE_FAST_DEBOUNCE_MS = 214)] =
          "AUTOCOMPLETE_FAST_DEBOUNCE_MS"),
        (s[(s.PROFILING_TELEMETRY_SAMPLE_RATE = 219)] =
          "PROFILING_TELEMETRY_SAMPLE_RATE"),
        (s[(s.STREAM_USER_SHELL_COMMANDS = 225)] =
          "STREAM_USER_SHELL_COMMANDS"),
        (s[(s.API_SERVER_PROMPT_CACHE_REPLICAS = 307)] =
          "API_SERVER_PROMPT_CACHE_REPLICAS"),
        (s[(s.API_SERVER_ENABLE_MORE_LOGGING = 272)] =
          "API_SERVER_ENABLE_MORE_LOGGING"),
        (s[(s.COMMAND_INJECT_USER_MEMORIES = 233)] =
          "COMMAND_INJECT_USER_MEMORIES"),
        (s[(s.AUTOCOMPLETE_HIDDEN_ERROR_REGEX = 234)] =
          "AUTOCOMPLETE_HIDDEN_ERROR_REGEX"),
        (s[(s.DISABLE_IDE_COMPLETIONS_DEBOUNCE = 278)] =
          "DISABLE_IDE_COMPLETIONS_DEBOUNCE"),
        (s[(s.COMBINED_MODEL_USE_FULL_INSTRUCTION_FOR_RETRIEVAL = 264)] =
          "COMBINED_MODEL_USE_FULL_INSTRUCTION_FOR_RETRIEVAL"),
        (s[(s.MAX_PAST_TRAJECTORY_TOKENS_FOR_RETRIEVAL = 265)] =
          "MAX_PAST_TRAJECTORY_TOKENS_FOR_RETRIEVAL"),
        (s[(s.ENABLE_QUICK_ACTIONS = 250)] = "ENABLE_QUICK_ACTIONS"),
        (s[(s.QUICK_ACTIONS_WHITELIST_REGEX = 251)] =
          "QUICK_ACTIONS_WHITELIST_REGEX"),
        (s[(s.CASCADE_NEW_MODELS_NUX = 259)] = "CASCADE_NEW_MODELS_NUX"),
        (s[(s.CASCADE_NEW_WAVE_2_MODELS_NUX = 270)] =
          "CASCADE_NEW_WAVE_2_MODELS_NUX"),
        (s[(s.SUPERCOMPLETE_FAST_DEBOUNCE = 262)] =
          "SUPERCOMPLETE_FAST_DEBOUNCE"),
        (s[(s.SUPERCOMPLETE_REGULAR_DEBOUNCE = 263)] =
          "SUPERCOMPLETE_REGULAR_DEBOUNCE"),
        (s[(s.XML_TOOL_PARSING_MODELS = 268)] = "XML_TOOL_PARSING_MODELS"),
        (s[(s.SUPERCOMPLETE_DONT_FILTER_MID_STREAMED = 269)] =
          "SUPERCOMPLETE_DONT_FILTER_MID_STREAMED"),
        (s[(s.ANNOYANCE_MANAGER_MAX_NAVIGATION_RENDERS = 285)] =
          "ANNOYANCE_MANAGER_MAX_NAVIGATION_RENDERS"),
        (s[(s.ANNOYANCE_MANAGER_INLINE_PREVENTION_THRESHOLD_MS = 286)] =
          "ANNOYANCE_MANAGER_INLINE_PREVENTION_THRESHOLD_MS"),
        (s[
          (s.ANNOYANCE_MANAGER_INLINE_PREVENTION_MAX_INTENTIONAL_REJECTIONS = 287)
        ] = "ANNOYANCE_MANAGER_INLINE_PREVENTION_MAX_INTENTIONAL_REJECTIONS"),
        (s[(s.ANNOYANCE_MANAGER_INLINE_PREVENTION_MAX_AUTO_REJECTIONS = 288)] =
          "ANNOYANCE_MANAGER_INLINE_PREVENTION_MAX_AUTO_REJECTIONS"),
        (s[(s.USE_CUSTOM_CHARACTER_DIFF = 292)] = "USE_CUSTOM_CHARACTER_DIFF"),
        (s[(s.FORCE_NON_OPTIMIZED_DIFF = 298)] = "FORCE_NON_OPTIMIZED_DIFF"),
        (s[(s.CASCADE_WEB_APP_DEPLOYMENTS_ENABLED = 300)] =
          "CASCADE_WEB_APP_DEPLOYMENTS_ENABLED"),
        (s[(s.CASCADE_RECIPES_AT_MENTION_VISIBILITY = 316)] =
          "CASCADE_RECIPES_AT_MENTION_VISIBILITY"),
        (s[(s.IMPLICIT_USES_CLIPBOARD = 310)] = "IMPLICIT_USES_CLIPBOARD"),
        (s[(s.DISABLE_SUPERCOMPLETE_PCW = 303)] = "DISABLE_SUPERCOMPLETE_PCW"),
        (s[(s.BLOCK_TAB_ON_SHOWN_AUTOCOMPLETE = 304)] =
          "BLOCK_TAB_ON_SHOWN_AUTOCOMPLETE"),
        (s[(s.CASCADE_WEB_SEARCH_NUX = 311)] = "CASCADE_WEB_SEARCH_NUX"),
        (s[(s.MODEL_NOTIFICATIONS = 319)] = "MODEL_NOTIFICATIONS"),
        (s[(s.MODEL_SELECTOR_NUX_COPY = 320)] = "MODEL_SELECTOR_NUX_COPY"),
        (s[(s.CASCADE_TOOL_CALL_PRICING_NUX = 322)] =
          "CASCADE_TOOL_CALL_PRICING_NUX"),
        (s[(s.CASCADE_PLUGINS_TAB = 323)] = "CASCADE_PLUGINS_TAB"),
        (s[(s.WAVE_8_RULES_ENABLED = 324)] = "WAVE_8_RULES_ENABLED"),
        (s[(s.WAVE_8_KNOWLEDGE_ENABLED = 325)] = "WAVE_8_KNOWLEDGE_ENABLED"),
        (s[(s.CASCADE_ONBOARDING = 326)] = "CASCADE_ONBOARDING"),
        (s[(s.CASCADE_ONBOARDING_REVERT = 327)] = "CASCADE_ONBOARDING_REVERT"),
        (s[(s.CASCADE_WINDSURF_BROWSER_TOOLS_ENABLED = 328)] =
          "CASCADE_WINDSURF_BROWSER_TOOLS_ENABLED"),
        (s[(s.CASCADE_MODEL_HEADER_WARNING = 329)] =
          "CASCADE_MODEL_HEADER_WARNING"),
        (s[(s.TEST_ONLY = 999)] = "TEST_ONLY"),
        n7.w.util.setEnumType(eb, "exa.codeium_common_pb.ExperimentKey", [
          {
            no: 0,
            name: "UNSPECIFIED",
          },
          {
            no: 36,
            name: "USE_INTERNAL_CHAT_MODEL",
          },
          {
            no: 47,
            name: "RECORD_FILES",
          },
          {
            no: 48,
            name: "NO_SAMPLER_EARLY_STOP",
          },
          {
            no: 53,
            name: "CM_MEMORY_TELEMETRY",
          },
          {
            no: 55,
            name: "LANGUAGE_SERVER_VERSION",
          },
          {
            no: 56,
            name: "LANGUAGE_SERVER_AUTO_RELOAD",
          },
          {
            no: 60,
            name: "ONLY_MULTILINE",
          },
          {
            no: 64,
            name: "USE_AUTOCOMPLETE_MODEL",
          },
          {
            no: 68,
            name: "USE_ATTRIBUTION_FOR_INDIVIDUAL_TIER",
          },
          {
            no: 78,
            name: "CHAT_MODEL_CONFIG",
          },
          {
            no: 79,
            name: "COMMAND_MODEL_CONFIG",
          },
          {
            no: 81,
            name: "MIN_IDE_VERSION",
          },
          {
            no: 84,
            name: "API_SERVER_VERBOSE_ERRORS",
          },
          {
            no: 86,
            name: "DEFAULT_ENABLE_SEARCH",
          },
          {
            no: 87,
            name: "COLLECT_ONBOARDING_EVENTS",
          },
          {
            no: 88,
            name: "COLLECT_EXAMPLE_COMPLETIONS",
          },
          {
            no: 89,
            name: "USE_MULTILINE_MODEL",
          },
          {
            no: 92,
            name: "ATTRIBUTION_KILL_SWITCH",
          },
          {
            no: 94,
            name: "FAST_MULTILINE",
          },
          {
            no: 95,
            name: "SINGLE_COMPLETION",
          },
          {
            no: 96,
            name: "STOP_FIRST_NON_WHITESPACE_LINE",
          },
          {
            no: 102,
            name: "CORTEX_CONFIG",
          },
          {
            no: 103,
            name: "MODEL_CHAT_11121_VARIANTS",
          },
          {
            no: 105,
            name: "INCLUDE_PROMPT_COMPONENTS",
          },
          {
            no: 106,
            name: "NON_TEAMS_KILL_SWITCH",
          },
          {
            no: 108,
            name: "PERSIST_CODE_TRACKER",
          },
          {
            no: 112,
            name: "API_SERVER_LIVENESS_PROBE",
          },
          {
            no: 114,
            name: "CHAT_COMPLETION_TOKENS_SOFT_LIMIT",
          },
          {
            no: 115,
            name: "CHAT_TOKENS_SOFT_LIMIT",
          },
          {
            no: 118,
            name: "DISABLE_COMPLETIONS_CACHE",
          },
          {
            no: 119,
            name: "LLAMA3_405B_KILL_SWITCH",
          },
          {
            no: 121,
            name: "USE_COMMAND_DOCSTRING_GENERATION",
          },
          {
            no: 123,
            name: "ENABLE_SUPERCOMPLETE",
          },
          {
            no: 136,
            name: "SENTRY",
          },
          {
            no: 144,
            name: "FAST_SINGLELINE",
          },
          {
            no: 147,
            name: "R2_LANGUAGE_SERVER_DOWNLOAD",
          },
          {
            no: 152,
            name: "SPLIT_MODEL",
          },
          {
            no: 198,
            name: "WINDSURF_SENTRY_SAMPLE_RATE",
          },
          {
            no: 158,
            name: "API_SERVER_CUTOFF",
          },
          {
            no: 159,
            name: "FAST_SPEED_KILL_SWITCH",
          },
          {
            no: 160,
            name: "PREDICTIVE_MULTILINE",
          },
          {
            no: 125,
            name: "SUPERCOMPLETE_FILTER_REVERT",
          },
          {
            no: 126,
            name: "SUPERCOMPLETE_FILTER_PREFIX_MATCH",
          },
          {
            no: 127,
            name: "SUPERCOMPLETE_FILTER_SCORE_THRESHOLD",
          },
          {
            no: 128,
            name: "SUPERCOMPLETE_FILTER_INSERTION_CAP",
          },
          {
            no: 133,
            name: "SUPERCOMPLETE_FILTER_DELETION_CAP",
          },
          {
            no: 156,
            name: "SUPERCOMPLETE_FILTER_WHITESPACE_ONLY",
          },
          {
            no: 170,
            name: "SUPERCOMPLETE_FILTER_NO_OP",
          },
          {
            no: 176,
            name: "SUPERCOMPLETE_FILTER_SUFFIX_MATCH",
          },
          {
            no: 182,
            name: "SUPERCOMPLETE_FILTER_PREVIOUSLY_SHOWN",
          },
          {
            no: 129,
            name: "SUPERCOMPLETE_MIN_SCORE",
          },
          {
            no: 130,
            name: "SUPERCOMPLETE_MAX_INSERTIONS",
          },
          {
            no: 131,
            name: "SUPERCOMPLETE_LINE_RADIUS",
          },
          {
            no: 132,
            name: "SUPERCOMPLETE_MAX_DELETIONS",
          },
          {
            no: 135,
            name: "SUPERCOMPLETE_USE_CURRENT_LINE",
          },
          {
            no: 138,
            name: "SUPERCOMPLETE_RECENT_STEPS_DURATION",
          },
          {
            no: 143,
            name: "SUPERCOMPLETE_USE_CODE_DIAGNOSTICS",
          },
          {
            no: 223,
            name: "SUPERCOMPLETE_DIAGNOSTIC_SEVERITY_THRESHOLD",
          },
          {
            no: 232,
            name: "SUPERCOMPLETE_CODE_DIAGNOSTICS_TOP_K",
          },
          {
            no: 154,
            name: "SUPERCOMPLETE_MAX_TRAJECTORY_STEPS",
          },
          {
            no: 157,
            name: "SUPERCOMPLETE_ON_ACCEPT_ONLY",
          },
          {
            no: 183,
            name: "SUPERCOMPLETE_TEMPERATURE",
          },
          {
            no: 203,
            name: "SUPERCOMPLETE_MAX_TRAJECTORY_STEP_SIZE",
          },
          {
            no: 231,
            name: "SUPERCOMPLETE_DISABLE_TYPING_CACHE",
          },
          {
            no: 293,
            name: "SUPERCOMPLETE_ALWAYS_USE_CACHE_ON_EQUAL_STATE",
          },
          {
            no: 297,
            name: "SUPERCOMPLETE_CACHE_ON_PARENT_ID_KILL_SWITCH",
          },
          {
            no: 140,
            name: "SUPERCOMPLETE_PRUNE_RESPONSE",
          },
          {
            no: 141,
            name: "SUPERCOMPLETE_PRUNE_MAX_INSERT_DELETE_LINE_DELTA",
          },
          {
            no: 145,
            name: "SUPERCOMPLETE_MODEL_CONFIG",
          },
          {
            no: 151,
            name: "SUPERCOMPLETE_ON_TAB",
          },
          {
            no: 171,
            name: "SUPERCOMPLETE_INLINE_PURE_DELETE",
          },
          {
            no: 218,
            name: "SUPERCOMPLETE_INLINE_RICH_GHOST_TEXT_INSERTIONS",
          },
          {
            no: 308,
            name: "MODEL_CHAT_19821_VARIANTS",
          },
          {
            no: 284,
            name: "SUPERCOMPLETE_MAX_CONCURRENT_REQUESTS",
          },
          {
            no: 255,
            name: "COMMAND_PROMPT_CACHE_CONFIG",
          },
          {
            no: 256,
            name: "CUMULATIVE_PROMPT_CONFIG",
          },
          {
            no: 279,
            name: "CUMULATIVE_PROMPT_CASCADE_CONFIG",
          },
          {
            no: 301,
            name: "TAB_JUMP_CUMULATIVE_PROMPT_CONFIG",
          },
          {
            no: 207,
            name: "COMPLETION_SPEED_SUPERCOMPLETE_CACHE",
          },
          {
            no: 208,
            name: "COMPLETION_SPEED_PREDICTIVE_SUPERCOMPLETE",
          },
          {
            no: 209,
            name: "COMPLETION_SPEED_TAB_JUMP_CACHE",
          },
          {
            no: 210,
            name: "COMPLETION_SPEED_PREDICTIVE_TAB_JUMP",
          },
          {
            no: 294,
            name: "COMPLETION_SPEED_BLOCK_TAB_JUMP_ON_PREDICTIVE_SUPERCOMPLETE",
          },
          {
            no: 137,
            name: "JETBRAINS_ENABLE_ONBOARDING",
          },
          {
            no: 146,
            name: "ENABLE_AUTOCOMPLETE_DURING_INTELLISENSE",
          },
          {
            no: 155,
            name: "COMMAND_BOX_ON_TOP",
          },
          {
            no: 149,
            name: "CONTEXT_ACTIVE_DOCUMENT_FRACTION",
          },
          {
            no: 150,
            name: "CONTEXT_COMMAND_TRAJECTORY_PROMPT_CONFIG",
          },
          {
            no: 178,
            name: "CONTEXT_FORCE_LOCAL_CONTEXT",
          },
          {
            no: 220,
            name: "CROSS_SELL_EXTENSION_DOWNLOAD_WINDSURF",
          },
          {
            no: 295,
            name: "MODEL_LLAMA_3_1_70B_INSTRUCT_LONG_CONTEXT_VARIANTS",
          },
          {
            no: 163,
            name: "USE_AUTOCOMPLETE_MODEL_SERVER_SIDE",
          },
          {
            no: 165,
            name: "SUPERCOMPLETE_NO_CONTEXT",
          },
          {
            no: 166,
            name: "SUPERCOMPLETE_NO_ACTIVE_NODE",
          },
          {
            no: 168,
            name: "TAB_JUMP_ENABLED",
          },
          {
            no: 169,
            name: "TAB_JUMP_ACCEPT_ENABLED",
          },
          {
            no: 177,
            name: "TAB_JUMP_LINE_RADIUS",
          },
          {
            no: 197,
            name: "TAB_JUMP_MIN_FILTER_RADIUS",
          },
          {
            no: 205,
            name: "TAB_JUMP_ON_ACCEPT_ONLY",
          },
          {
            no: 215,
            name: "TAB_JUMP_FILTER_IN_SELECTION",
          },
          {
            no: 237,
            name: "TAB_JUMP_MODEL_CONFIG",
          },
          {
            no: 238,
            name: "TAB_JUMP_FILTER_NO_OP",
          },
          {
            no: 239,
            name: "TAB_JUMP_FILTER_REVERT",
          },
          {
            no: 240,
            name: "TAB_JUMP_FILTER_SCORE_THRESHOLD",
          },
          {
            no: 241,
            name: "TAB_JUMP_FILTER_WHITESPACE_ONLY",
          },
          {
            no: 242,
            name: "TAB_JUMP_FILTER_INSERTION_CAP",
          },
          {
            no: 243,
            name: "TAB_JUMP_FILTER_DELETION_CAP",
          },
          {
            no: 260,
            name: "TAB_JUMP_PRUNE_RESPONSE",
          },
          {
            no: 261,
            name: "TAB_JUMP_PRUNE_MAX_INSERT_DELETE_LINE_DELTA",
          },
          {
            no: 317,
            name: "TAB_JUMP_STOP_TOKEN_MIDSTREAM",
          },
          {
            no: 211,
            name: "VIEWED_FILE_TRACKER_CONFIG",
          },
          {
            no: 305,
            name: "SNAPSHOT_TO_STEP_OPTIONS_OVERRIDE",
          },
          {
            no: 172,
            name: "STREAMING_EXTERNAL_COMMAND",
          },
          {
            no: 179,
            name: "USE_SPECIAL_EDIT_CODE_BLOCK",
          },
          {
            no: 187,
            name: "ENABLE_SUGGESTED_RESPONSES",
          },
          {
            no: 190,
            name: "CASCADE_BASE_MODEL_ID",
          },
          {
            no: 266,
            name: "CASCADE_PLAN_BASED_CONFIG_OVERRIDE",
          },
          {
            no: 212,
            name: "CASCADE_GLOBAL_CONFIG_OVERRIDE",
          },
          {
            no: 193,
            name: "CASCADE_BACKGROUND_RESEARCH_CONFIG_OVERRIDE",
          },
          {
            no: 204,
            name: "CASCADE_ENFORCE_QUOTA",
          },
          {
            no: 224,
            name: "CASCADE_ENABLE_AUTOMATED_MEMORIES",
          },
          {
            no: 314,
            name: "CASCADE_MEMORY_CONFIG_OVERRIDE",
          },
          {
            no: 228,
            name: "CASCADE_USE_REPLACE_CONTENT_EDIT_TOOL",
          },
          {
            no: 258,
            name: "CASCADE_VIEW_FILE_TOOL_CONFIG_OVERRIDE",
          },
          {
            no: 247,
            name: "CASCADE_USE_EXPERIMENT_CHECKPOINTER",
          },
          {
            no: 236,
            name: "CASCADE_ENABLE_CUSTOM_RECIPES",
          },
          {
            no: 245,
            name: "CASCADE_ENABLE_MCP_TOOLS",
          },
          {
            no: 275,
            name: "CASCADE_AUTO_FIX_LINTS",
          },
          {
            no: 296,
            name: "USE_ANTHROPIC_TOKEN_EFFICIENT_TOOLS_BETA",
          },
          {
            no: 289,
            name: "CASCADE_USER_MEMORIES_IN_SYS_PROMPT",
          },
          {
            no: 290,
            name: "CASCADE_ENABLE_PROXY_WEB_SERVER",
          },
          {
            no: 312,
            name: "COLLAPSE_ASSISTANT_MESSAGES",
          },
          {
            no: 321,
            name: "CASCADE_DEFAULT_MODEL_OVERRIDE",
          },
          {
            no: 181,
            name: "ENABLE_SMART_COPY",
          },
          {
            no: 185,
            name: "ENABLE_COMMIT_MESSAGE_GENERATION",
          },
          {
            no: 194,
            name: "SKIP_CONSISTENCY_MANAGER",
          },
          {
            no: 276,
            name: "FIREWORKS_ON_DEMAND_DEPLOYMENT",
          },
          {
            no: 202,
            name: "API_SERVER_CLIENT_USE_HTTP_2",
          },
          {
            no: 213,
            name: "AUTOCOMPLETE_DEFAULT_DEBOUNCE_MS",
          },
          {
            no: 214,
            name: "AUTOCOMPLETE_FAST_DEBOUNCE_MS",
          },
          {
            no: 219,
            name: "PROFILING_TELEMETRY_SAMPLE_RATE",
          },
          {
            no: 225,
            name: "STREAM_USER_SHELL_COMMANDS",
          },
          {
            no: 307,
            name: "API_SERVER_PROMPT_CACHE_REPLICAS",
          },
          {
            no: 272,
            name: "API_SERVER_ENABLE_MORE_LOGGING",
          },
          {
            no: 233,
            name: "COMMAND_INJECT_USER_MEMORIES",
          },
          {
            no: 234,
            name: "AUTOCOMPLETE_HIDDEN_ERROR_REGEX",
          },
          {
            no: 278,
            name: "DISABLE_IDE_COMPLETIONS_DEBOUNCE",
          },
          {
            no: 264,
            name: "COMBINED_MODEL_USE_FULL_INSTRUCTION_FOR_RETRIEVAL",
          },
          {
            no: 265,
            name: "MAX_PAST_TRAJECTORY_TOKENS_FOR_RETRIEVAL",
          },
          {
            no: 250,
            name: "ENABLE_QUICK_ACTIONS",
          },
          {
            no: 251,
            name: "QUICK_ACTIONS_WHITELIST_REGEX",
          },
          {
            no: 259,
            name: "CASCADE_NEW_MODELS_NUX",
          },
          {
            no: 270,
            name: "CASCADE_NEW_WAVE_2_MODELS_NUX",
          },
          {
            no: 262,
            name: "SUPERCOMPLETE_FAST_DEBOUNCE",
          },
          {
            no: 263,
            name: "SUPERCOMPLETE_REGULAR_DEBOUNCE",
          },
          {
            no: 268,
            name: "XML_TOOL_PARSING_MODELS",
          },
          {
            no: 269,
            name: "SUPERCOMPLETE_DONT_FILTER_MID_STREAMED",
          },
          {
            no: 285,
            name: "ANNOYANCE_MANAGER_MAX_NAVIGATION_RENDERS",
          },
          {
            no: 286,
            name: "ANNOYANCE_MANAGER_INLINE_PREVENTION_THRESHOLD_MS",
          },
          {
            no: 287,
            name: "ANNOYANCE_MANAGER_INLINE_PREVENTION_MAX_INTENTIONAL_REJECTIONS",
          },
          {
            no: 288,
            name: "ANNOYANCE_MANAGER_INLINE_PREVENTION_MAX_AUTO_REJECTIONS",
          },
          {
            no: 292,
            name: "USE_CUSTOM_CHARACTER_DIFF",
          },
          {
            no: 298,
            name: "FORCE_NON_OPTIMIZED_DIFF",
          },
          {
            no: 300,
            name: "CASCADE_WEB_APP_DEPLOYMENTS_ENABLED",
          },
          {
            no: 316,
            name: "CASCADE_RECIPES_AT_MENTION_VISIBILITY",
          },
          {
            no: 310,
            name: "IMPLICIT_USES_CLIPBOARD",
          },
          {
            no: 303,
            name: "DISABLE_SUPERCOMPLETE_PCW",
          },
          {
            no: 304,
            name: "BLOCK_TAB_ON_SHOWN_AUTOCOMPLETE",
          },
          {
            no: 311,
            name: "CASCADE_WEB_SEARCH_NUX",
          },
          {
            no: 319,
            name: "MODEL_NOTIFICATIONS",
          },
          {
            no: 320,
            name: "MODEL_SELECTOR_NUX_COPY",
          },
          {
            no: 322,
            name: "CASCADE_TOOL_CALL_PRICING_NUX",
          },
          {
            no: 323,
            name: "CASCADE_PLUGINS_TAB",
          },
          {
            no: 324,
            name: "WAVE_8_RULES_ENABLED",
          },
          {
            no: 325,
            name: "WAVE_8_KNOWLEDGE_ENABLED",
          },
          {
            no: 326,
            name: "CASCADE_ONBOARDING",
          },
          {
            no: 327,
            name: "CASCADE_ONBOARDING_REVERT",
          },
          {
            no: 328,
            name: "CASCADE_WINDSURF_BROWSER_TOOLS_ENABLED",
          },
          {
            no: 329,
            name: "CASCADE_MODEL_HEADER_WARNING",
          },
          {
            no: 999,
            name: "TEST_ONLY",
          },
        ]),
        ((o = ev || (ev = {}))[(o.UNSPECIFIED = 0)] = "UNSPECIFIED"),
        (o[(o.EXTENSION = 1)] = "EXTENSION"),
        (o[(o.LANGUAGE_SERVER = 2)] = "LANGUAGE_SERVER"),
        (o[(o.API_SERVER = 3)] = "API_SERVER"),
        n7.w.util.setEnumType(ev, "exa.codeium_common_pb.ExperimentSource", [
          {
            no: 0,
            name: "EXPERIMENT_SOURCE_UNSPECIFIED",
          },
          {
            no: 1,
            name: "EXPERIMENT_SOURCE_EXTENSION",
          },
          {
            no: 2,
            name: "EXPERIMENT_SOURCE_LANGUAGE_SERVER",
          },
          {
            no: 3,
            name: "EXPERIMENT_SOURCE_API_SERVER",
          },
        ]),
        ((_ = eH || (eH = {}))[(_.UNSPECIFIED = 0)] = "UNSPECIFIED"),
        (_[(_.CASCADE_BASE = 1)] = "CASCADE_BASE"),
        (_[(_.VISTA = 3)] = "VISTA"),
        (_[(_.SHAMU = 4)] = "SHAMU"),
        (_[(_.SWE_1 = 5)] = "SWE_1"),
        (_[(_.SWE_1_LITE = 6)] = "SWE_1_LITE"),
        (_[(_.AUTO = 7)] = "AUTO"),
        n7.w.util.setEnumType(eH, "exa.codeium_common_pb.ModelAlias", [
          {
            no: 0,
            name: "MODEL_ALIAS_UNSPECIFIED",
          },
          {
            no: 1,
            name: "MODEL_ALIAS_CASCADE_BASE",
          },
          {
            no: 3,
            name: "MODEL_ALIAS_VISTA",
          },
          {
            no: 4,
            name: "MODEL_ALIAS_SHAMU",
          },
          {
            no: 5,
            name: "MODEL_ALIAS_SWE_1",
          },
          {
            no: 6,
            name: "MODEL_ALIAS_SWE_1_LITE",
          },
          {
            no: 7,
            name: "MODEL_ALIAS_AUTO",
          },
        ]),
        ((m = eV || (eV = {}))[(m.MODEL_UNSPECIFIED = 0)] =
          "MODEL_UNSPECIFIED"),
        (m[(m.MODEL_EMBED_6591 = 20)] = "MODEL_EMBED_6591"),
        (m[(m.MODEL_8341 = 33)] = "MODEL_8341"),
        (m[(m.MODEL_8528 = 42)] = "MODEL_8528"),
        (m[(m.MODEL_9024 = 41)] = "MODEL_9024"),
        (m[(m.MODEL_14602 = 112)] = "MODEL_14602"),
        (m[(m.MODEL_15133 = 115)] = "MODEL_15133"),
        (m[(m.MODEL_15302 = 119)] = "MODEL_15302"),
        (m[(m.MODEL_15335 = 121)] = "MODEL_15335"),
        (m[(m.MODEL_15336 = 122)] = "MODEL_15336"),
        (m[(m.MODEL_15931 = 167)] = "MODEL_15931"),
        (m[(m.MODEL_QUERY_9905 = 48)] = "MODEL_QUERY_9905"),
        (m[(m.MODEL_QUERY_11791 = 66)] = "MODEL_QUERY_11791"),
        (m[(m.MODEL_CHAT_11120 = 57)] = "MODEL_CHAT_11120"),
        (m[(m.MODEL_CHAT_11121 = 58)] = "MODEL_CHAT_11121"),
        (m[(m.MODEL_CHAT_12119 = 70)] = "MODEL_CHAT_12119"),
        (m[(m.MODEL_CHAT_12121 = 69)] = "MODEL_CHAT_12121"),
        (m[(m.MODEL_CHAT_12437 = 74)] = "MODEL_CHAT_12437"),
        (m[(m.MODEL_CHAT_12491 = 76)] = "MODEL_CHAT_12491"),
        (m[(m.MODEL_CHAT_12623 = 78)] = "MODEL_CHAT_12623"),
        (m[(m.MODEL_CHAT_12950 = 79)] = "MODEL_CHAT_12950"),
        (m[(m.MODEL_CHAT_12968 = 101)] = "MODEL_CHAT_12968"),
        (m[(m.MODEL_CHAT_13404 = 102)] = "MODEL_CHAT_13404"),
        (m[(m.MODEL_CHAT_13566 = 103)] = "MODEL_CHAT_13566"),
        (m[(m.MODEL_CHAT_13930 = 108)] = "MODEL_CHAT_13930"),
        (m[(m.MODEL_CHAT_14255 = 110)] = "MODEL_CHAT_14255"),
        (m[(m.MODEL_CHAT_14256 = 111)] = "MODEL_CHAT_14256"),
        (m[(m.MODEL_CHAT_14942 = 114)] = "MODEL_CHAT_14942"),
        (m[(m.MODEL_CHAT_15305 = 120)] = "MODEL_CHAT_15305"),
        (m[(m.MODEL_CHAT_15600 = 123)] = "MODEL_CHAT_15600"),
        (m[(m.MODEL_CHAT_16801 = 124)] = "MODEL_CHAT_16801"),
        (m[(m.MODEL_CHAT_16718 = 175)] = "MODEL_CHAT_16718"),
        (m[(m.MODEL_CHAT_15729 = 168)] = "MODEL_CHAT_15729"),
        (m[(m.MODEL_CHAT_16579 = 173)] = "MODEL_CHAT_16579"),
        (m[(m.MODEL_CHAT_16579_CRUSOE = 174)] = "MODEL_CHAT_16579_CRUSOE"),
        (m[(m.MODEL_CHAT_18805 = 181)] = "MODEL_CHAT_18805"),
        (m[(m.MODEL_CHAT_18468 = 210)] = "MODEL_CHAT_18468"),
        (m[(m.MODEL_CHAT_19484 = 233)] = "MODEL_CHAT_19484"),
        (m[(m.MODEL_CHAT_20706 = 235)] = "MODEL_CHAT_20706"),
        (m[(m.MODEL_CHAT_21779 = 245)] = "MODEL_CHAT_21779"),
        (m[(m.MODEL_CHAT_19040 = 211)] = "MODEL_CHAT_19040"),
        (m[(m.MODEL_CHAT_19820 = 229)] = "MODEL_CHAT_19820"),
        (m[(m.MODEL_CHAT_19821 = 230)] = "MODEL_CHAT_19821"),
        (m[(m.MODEL_CHAT_19821_CRUSOE = 244)] = "MODEL_CHAT_19821_CRUSOE"),
        (m[(m.MODEL_CHAT_23310 = 269)] = "MODEL_CHAT_23310"),
        (m[(m.MODEL_CHAT_28580 = 330)] = "MODEL_CHAT_28580"),
        (m[(m.MODEL_CHAT_28581 = 331)] = "MODEL_CHAT_28581"),
        (m[(m.MODEL_CHAT_28582 = 332)] = "MODEL_CHAT_28582"),
        (m[(m.MODEL_CHAT_28583 = 333)] = "MODEL_CHAT_28583"),
        (m[(m.MODEL_CHAT_28584 = 334)] = "MODEL_CHAT_28584"),
        (m[(m.MODEL_CHAT_19822 = 231)] = "MODEL_CHAT_19822"),
        (m[(m.MODEL_CHAT_22798 = 255)] = "MODEL_CHAT_22798"),
        (m[(m.MODEL_CHAT_22799 = 256)] = "MODEL_CHAT_22799"),
        (m[(m.MODEL_CHAT_22800 = 257)] = "MODEL_CHAT_22800"),
        (m[(m.MODEL_CHAT_23151 = 267)] = "MODEL_CHAT_23151"),
        (m[(m.MODEL_CHAT_23152 = 268)] = "MODEL_CHAT_23152"),
        (m[(m.MODEL_CASCADE_22893 = 270)] = "MODEL_CASCADE_22893"),
        (m[(m.MODEL_CASCADE_20064 = 225)] = "MODEL_CASCADE_20064"),
        (m[(m.MODEL_CASCADE_20065 = 236)] = "MODEL_CASCADE_20065"),
        (m[(m.MODEL_CASCADE_20066 = 237)] = "MODEL_CASCADE_20066"),
        (m[(m.MODEL_CASCADE_20067 = 238)] = "MODEL_CASCADE_20067"),
        (m[(m.MODEL_CASCADE_20068 = 239)] = "MODEL_CASCADE_20068"),
        (m[(m.MODEL_CASCADE_20069 = 240)] = "MODEL_CASCADE_20069"),
        (m[(m.MODEL_CASCADE_20070 = 250)] = "MODEL_CASCADE_20070"),
        (m[(m.MODEL_CASCADE_20071 = 251)] = "MODEL_CASCADE_20071"),
        (m[(m.MODEL_CASCADE_20072 = 252)] = "MODEL_CASCADE_20072"),
        (m[(m.MODEL_CASCADE_20073 = 253)] = "MODEL_CASCADE_20073"),
        (m[(m.MODEL_CASCADE_20074 = 254)] = "MODEL_CASCADE_20074"),
        (m[(m.MODEL_CASCADE_20075 = 307)] = "MODEL_CASCADE_20075"),
        (m[(m.MODEL_CASCADE_20076 = 308)] = "MODEL_CASCADE_20076"),
        (m[(m.MODEL_CASCADE_20077 = 309)] = "MODEL_CASCADE_20077"),
        (m[(m.MODEL_CASCADE_20078 = 310)] = "MODEL_CASCADE_20078"),
        (m[(m.MODEL_CASCADE_20079 = 311)] = "MODEL_CASCADE_20079"),
        (m[(m.MODEL_CASCADE_20080 = 297)] = "MODEL_CASCADE_20080"),
        (m[(m.MODEL_CASCADE_20081 = 298)] = "MODEL_CASCADE_20081"),
        (m[(m.MODEL_CASCADE_20082 = 299)] = "MODEL_CASCADE_20082"),
        (m[(m.MODEL_CASCADE_20083 = 300)] = "MODEL_CASCADE_20083"),
        (m[(m.MODEL_CASCADE_20084 = 301)] = "MODEL_CASCADE_20084"),
        (m[(m.MODEL_CASCADE_20085 = 302)] = "MODEL_CASCADE_20085"),
        (m[(m.MODEL_CASCADE_20086 = 303)] = "MODEL_CASCADE_20086"),
        (m[(m.MODEL_CASCADE_20087 = 304)] = "MODEL_CASCADE_20087"),
        (m[(m.MODEL_CASCADE_20088 = 305)] = "MODEL_CASCADE_20088"),
        (m[(m.MODEL_CASCADE_20089 = 306)] = "MODEL_CASCADE_20089"),
        (m[(m.MODEL_DEEPSEEK_V3_INTERNAL = 247)] =
          "MODEL_DEEPSEEK_V3_INTERNAL"),
        (m[(m.MODEL_DEEPSEEK_V3_0324_INTERNAL = 248)] =
          "MODEL_DEEPSEEK_V3_0324_INTERNAL"),
        (m[(m.MODEL_DEEPSEEK_R1_INTERNAL = 249)] =
          "MODEL_DEEPSEEK_R1_INTERNAL"),
        (m[(m.MODEL_ANTHROPIC_WINDSURF_RESEARCH = 241)] =
          "MODEL_ANTHROPIC_WINDSURF_RESEARCH"),
        (m[(m.MODEL_ANTHROPIC_WINDSURF_RESEARCH_THINKING = 242)] =
          "MODEL_ANTHROPIC_WINDSURF_RESEARCH_THINKING"),
        (m[(m.MODEL_DRAFT_11408 = 65)] = "MODEL_DRAFT_11408"),
        (m[(m.MODEL_DRAFT_CHAT_11883 = 67)] = "MODEL_DRAFT_CHAT_11883"),
        (m[(m.MODEL_DRAFT_CHAT_12196 = 72)] = "MODEL_DRAFT_CHAT_12196"),
        (m[(m.MODEL_DRAFT_CHAT_12413 = 73)] = "MODEL_DRAFT_CHAT_12413"),
        (m[(m.MODEL_DRAFT_CHAT_13175 = 104)] = "MODEL_DRAFT_CHAT_13175"),
        (m[(m.MODEL_DRAFT_CHAT_19823 = 232)] = "MODEL_DRAFT_CHAT_19823"),
        (m[(m.MODEL_DRAFT_CHAT_20707 = 243)] = "MODEL_DRAFT_CHAT_20707"),
        (m[(m.MODEL_DRAFT_CHAT_22801 = 258)] = "MODEL_DRAFT_CHAT_22801"),
        (m[(m.MODEL_DRAFT_CHAT_23508 = 273)] = "MODEL_DRAFT_CHAT_23508"),
        (m[(m.MODEL_DRAFT_CASCADE_23672 = 274)] = "MODEL_DRAFT_CASCADE_23672"),
        (m[(m.MODEL_CHAT_3_5_TURBO = 28)] = "MODEL_CHAT_3_5_TURBO"),
        (m[(m.MODEL_CHAT_GPT_4 = 30)] = "MODEL_CHAT_GPT_4"),
        (m[(m.MODEL_CHAT_GPT_4_1106_PREVIEW = 37)] =
          "MODEL_CHAT_GPT_4_1106_PREVIEW"),
        (m[(m.MODEL_TEXT_EMBEDDING_OPENAI_ADA = 91)] =
          "MODEL_TEXT_EMBEDDING_OPENAI_ADA"),
        (m[(m.MODEL_TEXT_EMBEDDING_OPENAI_3_SMALL = 163)] =
          "MODEL_TEXT_EMBEDDING_OPENAI_3_SMALL"),
        (m[(m.MODEL_TEXT_EMBEDDING_OPENAI_3_LARGE = 164)] =
          "MODEL_TEXT_EMBEDDING_OPENAI_3_LARGE"),
        (m[(m.MODEL_CHAT_GPT_4O_2024_05_13 = 71)] =
          "MODEL_CHAT_GPT_4O_2024_05_13"),
        (m[(m.MODEL_CHAT_GPT_4O_2024_08_06 = 109)] =
          "MODEL_CHAT_GPT_4O_2024_08_06"),
        (m[(m.MODEL_CHAT_GPT_4O_MINI_2024_07_18 = 113)] =
          "MODEL_CHAT_GPT_4O_MINI_2024_07_18"),
        (m[(m.MODEL_CHAT_GPT_4_1_2025_04_14 = 259)] =
          "MODEL_CHAT_GPT_4_1_2025_04_14"),
        (m[(m.MODEL_CHAT_GPT_4_1_MINI_2025_04_14 = 260)] =
          "MODEL_CHAT_GPT_4_1_MINI_2025_04_14"),
        (m[(m.MODEL_CHAT_GPT_4_1_NANO_2025_04_14 = 261)] =
          "MODEL_CHAT_GPT_4_1_NANO_2025_04_14"),
        (m[(m.MODEL_CHAT_O1_PREVIEW = 117)] = "MODEL_CHAT_O1_PREVIEW"),
        (m[(m.MODEL_CHAT_O1_MINI = 118)] = "MODEL_CHAT_O1_MINI"),
        (m[(m.MODEL_CHAT_O1 = 170)] = "MODEL_CHAT_O1"),
        (m[(m.MODEL_CHAT_O3_MINI = 207)] = "MODEL_CHAT_O3_MINI"),
        (m[(m.MODEL_CHAT_O3_MINI_LOW = 213)] = "MODEL_CHAT_O3_MINI_LOW"),
        (m[(m.MODEL_CHAT_O3_MINI_HIGH = 214)] = "MODEL_CHAT_O3_MINI_HIGH"),
        (m[(m.MODEL_CHAT_O3 = 218)] = "MODEL_CHAT_O3"),
        (m[(m.MODEL_CHAT_O3_LOW = 262)] = "MODEL_CHAT_O3_LOW"),
        (m[(m.MODEL_CHAT_O3_HIGH = 263)] = "MODEL_CHAT_O3_HIGH"),
        (m[(m.MODEL_CHAT_O4_MINI = 264)] = "MODEL_CHAT_O4_MINI"),
        (m[(m.MODEL_CHAT_O4_MINI_LOW = 265)] = "MODEL_CHAT_O4_MINI_LOW"),
        (m[(m.MODEL_CHAT_O4_MINI_HIGH = 266)] = "MODEL_CHAT_O4_MINI_HIGH"),
        (m[(m.MODEL_CHAT_GPT_4_5 = 228)] = "MODEL_CHAT_GPT_4_5"),
        (m[(m.MODEL_CODEX_MINI_LATEST = 287)] = "MODEL_CODEX_MINI_LATEST"),
        (m[(m.MODEL_CODEX_MINI_LATEST_LOW = 288)] =
          "MODEL_CODEX_MINI_LATEST_LOW"),
        (m[(m.MODEL_CODEX_MINI_LATEST_HIGH = 289)] =
          "MODEL_CODEX_MINI_LATEST_HIGH"),
        (m[(m.MODEL_O3_PRO_2025_06_10 = 294)] = "MODEL_O3_PRO_2025_06_10"),
        (m[(m.MODEL_O3_PRO_2025_06_10_LOW = 295)] =
          "MODEL_O3_PRO_2025_06_10_LOW"),
        (m[(m.MODEL_O3_PRO_2025_06_10_HIGH = 296)] =
          "MODEL_O3_PRO_2025_06_10_HIGH"),
        (m[(m.MODEL_GPT_OSS_120B = 326)] = "MODEL_GPT_OSS_120B"),
        (m[(m.MODEL_GPT_5_NANO = 337)] = "MODEL_GPT_5_NANO"),
        (m[(m.MODEL_CHAT_GPT_5_MINIMAL = 338)] = "MODEL_CHAT_GPT_5_MINIMAL"),
        (m[(m.MODEL_CHAT_GPT_5_LOW = 339)] = "MODEL_CHAT_GPT_5_LOW"),
        (m[(m.MODEL_CHAT_GPT_5 = 340)] = "MODEL_CHAT_GPT_5"),
        (m[(m.MODEL_CHAT_GPT_5_HIGH = 341)] = "MODEL_CHAT_GPT_5_HIGH"),
        (m[(m.MODEL_GOOGLE_GEMINI_1_0_PRO = 61)] =
          "MODEL_GOOGLE_GEMINI_1_0_PRO"),
        (m[(m.MODEL_GOOGLE_GEMINI_1_5_PRO = 62)] =
          "MODEL_GOOGLE_GEMINI_1_5_PRO"),
        (m[(m.MODEL_GOOGLE_GEMINI_EXP_1206 = 183)] =
          "MODEL_GOOGLE_GEMINI_EXP_1206"),
        (m[(m.MODEL_GOOGLE_GEMINI_2_0_FLASH = 184)] =
          "MODEL_GOOGLE_GEMINI_2_0_FLASH"),
        (m[(m.MODEL_GOOGLE_GEMINI_2_5_PRO = 246)] =
          "MODEL_GOOGLE_GEMINI_2_5_PRO"),
        (m[(m.MODEL_GOOGLE_GEMINI_2_5_FLASH_PREVIEW_04_17 = 272)] =
          "MODEL_GOOGLE_GEMINI_2_5_FLASH_PREVIEW_04_17"),
        (m[(m.MODEL_GOOGLE_GEMINI_2_5_FLASH_PREVIEW_05_20 = 275)] =
          "MODEL_GOOGLE_GEMINI_2_5_FLASH_PREVIEW_05_20"),
        (m[(m.MODEL_GOOGLE_GEMINI_2_5_FLASH_PREVIEW_05_20_THINKING = 276)] =
          "MODEL_GOOGLE_GEMINI_2_5_FLASH_PREVIEW_05_20_THINKING"),
        (m[(m.MODEL_GOOGLE_GEMINI_2_5_FLASH = 312)] =
          "MODEL_GOOGLE_GEMINI_2_5_FLASH"),
        (m[(m.MODEL_GOOGLE_GEMINI_2_5_FLASH_THINKING = 313)] =
          "MODEL_GOOGLE_GEMINI_2_5_FLASH_THINKING"),
        (m[(m.MODEL_GOOGLE_GEMINI_2_5_FLASH_LITE = 343)] =
          "MODEL_GOOGLE_GEMINI_2_5_FLASH_LITE"),
        (m[(m.MODEL_CLAUDE_CODE = 344)] = "MODEL_CLAUDE_CODE"),
        (m[(m.MODEL_CLAUDE_3_OPUS_20240229 = 63)] =
          "MODEL_CLAUDE_3_OPUS_20240229"),
        (m[(m.MODEL_CLAUDE_3_SONNET_20240229 = 64)] =
          "MODEL_CLAUDE_3_SONNET_20240229"),
        (m[(m.MODEL_CLAUDE_3_HAIKU_20240307 = 172)] =
          "MODEL_CLAUDE_3_HAIKU_20240307"),
        (m[(m.MODEL_CLAUDE_3_5_HAIKU_20241022 = 171)] =
          "MODEL_CLAUDE_3_5_HAIKU_20241022"),
        (m[(m.MODEL_CLAUDE_3_5_SONNET_20240620 = 80)] =
          "MODEL_CLAUDE_3_5_SONNET_20240620"),
        (m[(m.MODEL_CLAUDE_3_5_SONNET_20241022 = 166)] =
          "MODEL_CLAUDE_3_5_SONNET_20241022"),
        (m[(m.MODEL_CLAUDE_3_7_SONNET_20250219 = 226)] =
          "MODEL_CLAUDE_3_7_SONNET_20250219"),
        (m[(m.MODEL_CLAUDE_3_7_SONNET_20250219_THINKING = 227)] =
          "MODEL_CLAUDE_3_7_SONNET_20250219_THINKING"),
        (m[(m.MODEL_CLAUDE_3_5_SONNET_BYOK = 284)] =
          "MODEL_CLAUDE_3_5_SONNET_BYOK"),
        (m[(m.MODEL_CLAUDE_3_7_SONNET_BYOK = 285)] =
          "MODEL_CLAUDE_3_7_SONNET_BYOK"),
        (m[(m.MODEL_CLAUDE_3_7_SONNET_OPEN_ROUTER_BYOK = 319)] =
          "MODEL_CLAUDE_3_7_SONNET_OPEN_ROUTER_BYOK"),
        (m[(m.MODEL_CLAUDE_3_7_SONNET_THINKING_BYOK = 286)] =
          "MODEL_CLAUDE_3_7_SONNET_THINKING_BYOK"),
        (m[(m.MODEL_CLAUDE_3_7_SONNET_THINKING_OPEN_ROUTER_BYOK = 320)] =
          "MODEL_CLAUDE_3_7_SONNET_THINKING_OPEN_ROUTER_BYOK"),
        (m[(m.MODEL_CLAUDE_4_OPUS_BYOK = 277)] = "MODEL_CLAUDE_4_OPUS_BYOK"),
        (m[(m.MODEL_CLAUDE_4_OPUS_THINKING_BYOK = 278)] =
          "MODEL_CLAUDE_4_OPUS_THINKING_BYOK"),
        (m[(m.MODEL_CLAUDE_4_OPUS = 290)] = "MODEL_CLAUDE_4_OPUS"),
        (m[(m.MODEL_CLAUDE_4_OPUS_THINKING = 291)] =
          "MODEL_CLAUDE_4_OPUS_THINKING"),
        (m[(m.MODEL_CLAUDE_4_SONNET_BYOK = 279)] =
          "MODEL_CLAUDE_4_SONNET_BYOK"),
        (m[(m.MODEL_CLAUDE_4_SONNET_OPEN_ROUTER_BYOK = 321)] =
          "MODEL_CLAUDE_4_SONNET_OPEN_ROUTER_BYOK"),
        (m[(m.MODEL_CLAUDE_4_SONNET_THINKING_BYOK = 280)] =
          "MODEL_CLAUDE_4_SONNET_THINKING_BYOK"),
        (m[(m.MODEL_CLAUDE_4_SONNET_THINKING_OPEN_ROUTER_BYOK = 322)] =
          "MODEL_CLAUDE_4_SONNET_THINKING_OPEN_ROUTER_BYOK"),
        (m[(m.MODEL_CLAUDE_4_SONNET = 281)] = "MODEL_CLAUDE_4_SONNET"),
        (m[(m.MODEL_CLAUDE_4_SONNET_THINKING = 282)] =
          "MODEL_CLAUDE_4_SONNET_THINKING"),
        (m[(m.MODEL_CLAUDE_4_1_OPUS = 328)] = "MODEL_CLAUDE_4_1_OPUS"),
        (m[(m.MODEL_CLAUDE_4_1_OPUS_THINKING = 329)] =
          "MODEL_CLAUDE_4_1_OPUS_THINKING"),
        (m[(m.MODEL_CLAUDE_4_SONNET_DATABRICKS = 292)] =
          "MODEL_CLAUDE_4_SONNET_DATABRICKS"),
        (m[(m.MODEL_CLAUDE_4_SONNET_THINKING_DATABRICKS = 293)] =
          "MODEL_CLAUDE_4_SONNET_THINKING_DATABRICKS"),
        (m[(m.MODEL_TOGETHERAI_TEXT_EMBEDDING_M2_BERT = 81)] =
          "MODEL_TOGETHERAI_TEXT_EMBEDDING_M2_BERT"),
        (m[(m.MODEL_TOGETHERAI_LLAMA_3_1_8B_INSTRUCT = 165)] =
          "MODEL_TOGETHERAI_LLAMA_3_1_8B_INSTRUCT"),
        (m[(m.MODEL_HUGGING_FACE_TEXT_EMBEDDING_M2_BERT = 82)] =
          "MODEL_HUGGING_FACE_TEXT_EMBEDDING_M2_BERT"),
        (m[(m.MODEL_HUGGING_FACE_TEXT_EMBEDDING_UAE_CODE = 83)] =
          "MODEL_HUGGING_FACE_TEXT_EMBEDDING_UAE_CODE"),
        (m[(m.MODEL_HUGGING_FACE_TEXT_EMBEDDING_BGE = 84)] =
          "MODEL_HUGGING_FACE_TEXT_EMBEDDING_BGE"),
        (m[(m.MODEL_HUGGING_FACE_TEXT_EMBEDDING_BLADE = 85)] =
          "MODEL_HUGGING_FACE_TEXT_EMBEDDING_BLADE"),
        (m[(m.MODEL_HUGGING_FACE_TEXT_EMBEDDING_ARCTIC_LARGE = 86)] =
          "MODEL_HUGGING_FACE_TEXT_EMBEDDING_ARCTIC_LARGE"),
        (m[(m.MODEL_HUGGING_FACE_TEXT_EMBEDDING_E5_BASE = 87)] =
          "MODEL_HUGGING_FACE_TEXT_EMBEDDING_E5_BASE"),
        (m[(m.MODEL_HUGGING_FACE_TEXT_EMBEDDING_MXBAI = 88)] =
          "MODEL_HUGGING_FACE_TEXT_EMBEDDING_MXBAI"),
        (m[(m.MODEL_LLAMA_3_1_8B_INSTRUCT = 106)] =
          "MODEL_LLAMA_3_1_8B_INSTRUCT"),
        (m[(m.MODEL_LLAMA_3_1_70B_INSTRUCT = 107)] =
          "MODEL_LLAMA_3_1_70B_INSTRUCT"),
        (m[(m.MODEL_LLAMA_3_1_405B_INSTRUCT = 105)] =
          "MODEL_LLAMA_3_1_405B_INSTRUCT"),
        (m[(m.MODEL_LLAMA_3_3_70B_INSTRUCT = 208)] =
          "MODEL_LLAMA_3_3_70B_INSTRUCT"),
        (m[(m.MODEL_LLAMA_3_3_70B_INSTRUCT_R1 = 209)] =
          "MODEL_LLAMA_3_3_70B_INSTRUCT_R1"),
        (m[(m.MODEL_LLAMA_3_1_70B_INSTRUCT_LONG_CONTEXT = 116)] =
          "MODEL_LLAMA_3_1_70B_INSTRUCT_LONG_CONTEXT"),
        (m[(m.MODEL_LLAMA_3_1_8B_HERMES_3 = 176)] =
          "MODEL_LLAMA_3_1_8B_HERMES_3"),
        (m[(m.MODEL_LLAMA_3_1_70B_HERMES_3 = 177)] =
          "MODEL_LLAMA_3_1_70B_HERMES_3"),
        (m[(m.MODEL_QWEN_2_5_7B_INSTRUCT = 178)] =
          "MODEL_QWEN_2_5_7B_INSTRUCT"),
        (m[(m.MODEL_QWEN_2_5_32B_INSTRUCT = 179)] =
          "MODEL_QWEN_2_5_32B_INSTRUCT"),
        (m[(m.MODEL_QWEN_2_5_72B_INSTRUCT = 180)] =
          "MODEL_QWEN_2_5_72B_INSTRUCT"),
        (m[(m.MODEL_QWEN_2_5_32B_INSTRUCT_R1 = 224)] =
          "MODEL_QWEN_2_5_32B_INSTRUCT_R1"),
        (m[(m.MODEL_QWEN_3_235B_INSTRUCT = 324)] =
          "MODEL_QWEN_3_235B_INSTRUCT"),
        (m[(m.MODEL_QWEN_3_CODER_480B_INSTRUCT = 325)] =
          "MODEL_QWEN_3_CODER_480B_INSTRUCT"),
        (m[(m.MODEL_QWEN_3_CODER_480B_INSTRUCT_FAST = 327)] =
          "MODEL_QWEN_3_CODER_480B_INSTRUCT_FAST"),
        (m[(m.MODEL_GLM_4_5 = 342)] = "MODEL_GLM_4_5"),
        (m[(m.MODEL_LLAMA_FT_DEEPWIKI_ARTICLE = 335)] =
          "MODEL_LLAMA_FT_DEEPWIKI_ARTICLE"),
        (m[(m.MODEL_LLAMA_FT_DEEPWIKI_HOVER = 336)] =
          "MODEL_LLAMA_FT_DEEPWIKI_HOVER"),
        (m[(m.MODEL_NOMIC_TEXT_EMBEDDING_V1 = 89)] =
          "MODEL_NOMIC_TEXT_EMBEDDING_V1"),
        (m[(m.MODEL_NOMIC_TEXT_EMBEDDING_V1_5 = 90)] =
          "MODEL_NOMIC_TEXT_EMBEDDING_V1_5"),
        (m[(m.MODEL_MISTRAL_7B = 77)] = "MODEL_MISTRAL_7B"),
        (m[(m.MODEL_SALESFORCE_EMBEDDING_2R = 99)] =
          "MODEL_SALESFORCE_EMBEDDING_2R"),
        (m[(m.MODEL_CUSTOM_VLLM = 182)] = "MODEL_CUSTOM_VLLM"),
        (m[(m.MODEL_TEI_BGE_M3 = 92)] = "MODEL_TEI_BGE_M3"),
        (m[(m.MODEL_TEI_NOMIC_EMBED_TEXT_V1 = 93)] =
          "MODEL_TEI_NOMIC_EMBED_TEXT_V1"),
        (m[(m.MODEL_TEI_INTFLOAT_E5_LARGE_INSTRUCT = 94)] =
          "MODEL_TEI_INTFLOAT_E5_LARGE_INSTRUCT"),
        (m[(m.MODEL_TEI_SNOWFLAKE_ARCTIC_EMBED_L = 95)] =
          "MODEL_TEI_SNOWFLAKE_ARCTIC_EMBED_L"),
        (m[(m.MODEL_TEI_UAE_CODE_LARGE_V1 = 96)] =
          "MODEL_TEI_UAE_CODE_LARGE_V1"),
        (m[(m.MODEL_TEI_B1ADE = 97)] = "MODEL_TEI_B1ADE"),
        (m[(m.MODEL_TEI_WHEREISAI_UAE_LARGE_V1 = 98)] =
          "MODEL_TEI_WHEREISAI_UAE_LARGE_V1"),
        (m[(m.MODEL_TEI_WHEREISAI_UAE_CODE_LARGE_V1 = 100)] =
          "MODEL_TEI_WHEREISAI_UAE_CODE_LARGE_V1"),
        (m[(m.MODEL_OPENAI_COMPATIBLE = 200)] = "MODEL_OPENAI_COMPATIBLE"),
        (m[(m.MODEL_ANTHROPIC_COMPATIBLE = 201)] =
          "MODEL_ANTHROPIC_COMPATIBLE"),
        (m[(m.MODEL_VERTEX_COMPATIBLE = 202)] = "MODEL_VERTEX_COMPATIBLE"),
        (m[(m.MODEL_BEDROCK_COMPATIBLE = 203)] = "MODEL_BEDROCK_COMPATIBLE"),
        (m[(m.MODEL_AZURE_COMPATIBLE = 204)] = "MODEL_AZURE_COMPATIBLE"),
        (m[(m.MODEL_DEEPSEEK_V3 = 205)] = "MODEL_DEEPSEEK_V3"),
        (m[(m.MODEL_DEEPSEEK_R1 = 206)] = "MODEL_DEEPSEEK_R1"),
        (m[(m.MODEL_DEEPSEEK_R1_SLOW = 215)] = "MODEL_DEEPSEEK_R1_SLOW"),
        (m[(m.MODEL_DEEPSEEK_R1_FAST = 216)] = "MODEL_DEEPSEEK_R1_FAST"),
        (m[(m.MODEL_KIMI_K2 = 323)] = "MODEL_KIMI_K2"),
        (m[(m.MODEL_CUSTOM_OPEN_ROUTER = 185)] = "MODEL_CUSTOM_OPEN_ROUTER"),
        (m[(m.MODEL_XAI_GROK_2 = 212)] = "MODEL_XAI_GROK_2"),
        (m[(m.MODEL_XAI_GROK_3 = 217)] = "MODEL_XAI_GROK_3"),
        (m[(m.MODEL_XAI_GROK_3_MINI_REASONING = 234)] =
          "MODEL_XAI_GROK_3_MINI_REASONING"),
        (m[(m.MODEL_PRIVATE_1 = 219)] = "MODEL_PRIVATE_1"),
        (m[(m.MODEL_PRIVATE_2 = 220)] = "MODEL_PRIVATE_2"),
        (m[(m.MODEL_PRIVATE_3 = 221)] = "MODEL_PRIVATE_3"),
        (m[(m.MODEL_PRIVATE_4 = 222)] = "MODEL_PRIVATE_4"),
        (m[(m.MODEL_PRIVATE_5 = 223)] = "MODEL_PRIVATE_5"),
        (m[(m.MODEL_PRIVATE_6 = 314)] = "MODEL_PRIVATE_6"),
        (m[(m.MODEL_PRIVATE_7 = 315)] = "MODEL_PRIVATE_7"),
        (m[(m.MODEL_PRIVATE_8 = 316)] = "MODEL_PRIVATE_8"),
        (m[(m.MODEL_PRIVATE_9 = 317)] = "MODEL_PRIVATE_9"),
        (m[(m.MODEL_PRIVATE_10 = 318)] = "MODEL_PRIVATE_10"),
        (m[(m.MODEL_ROUTING_GROUP_DEEP_WIKI = 800)] =
          "MODEL_ROUTING_GROUP_DEEP_WIKI"),
        n7.w.util.setEnumType(eV, "exa.codeium_common_pb.Model", [
          {
            no: 0,
            name: "MODEL_UNSPECIFIED",
          },
          {
            no: 20,
            name: "MODEL_EMBED_6591",
          },
          {
            no: 33,
            name: "MODEL_8341",
          },
          {
            no: 42,
            name: "MODEL_8528",
          },
          {
            no: 41,
            name: "MODEL_9024",
          },
          {
            no: 112,
            name: "MODEL_14602",
          },
          {
            no: 115,
            name: "MODEL_15133",
          },
          {
            no: 119,
            name: "MODEL_15302",
          },
          {
            no: 121,
            name: "MODEL_15335",
          },
          {
            no: 122,
            name: "MODEL_15336",
          },
          {
            no: 167,
            name: "MODEL_15931",
          },
          {
            no: 48,
            name: "MODEL_QUERY_9905",
          },
          {
            no: 66,
            name: "MODEL_QUERY_11791",
          },
          {
            no: 57,
            name: "MODEL_CHAT_11120",
          },
          {
            no: 58,
            name: "MODEL_CHAT_11121",
          },
          {
            no: 70,
            name: "MODEL_CHAT_12119",
          },
          {
            no: 69,
            name: "MODEL_CHAT_12121",
          },
          {
            no: 74,
            name: "MODEL_CHAT_12437",
          },
          {
            no: 76,
            name: "MODEL_CHAT_12491",
          },
          {
            no: 78,
            name: "MODEL_CHAT_12623",
          },
          {
            no: 79,
            name: "MODEL_CHAT_12950",
          },
          {
            no: 101,
            name: "MODEL_CHAT_12968",
          },
          {
            no: 102,
            name: "MODEL_CHAT_13404",
          },
          {
            no: 103,
            name: "MODEL_CHAT_13566",
          },
          {
            no: 108,
            name: "MODEL_CHAT_13930",
          },
          {
            no: 110,
            name: "MODEL_CHAT_14255",
          },
          {
            no: 111,
            name: "MODEL_CHAT_14256",
          },
          {
            no: 114,
            name: "MODEL_CHAT_14942",
          },
          {
            no: 120,
            name: "MODEL_CHAT_15305",
          },
          {
            no: 123,
            name: "MODEL_CHAT_15600",
          },
          {
            no: 124,
            name: "MODEL_CHAT_16801",
          },
          {
            no: 175,
            name: "MODEL_CHAT_16718",
          },
          {
            no: 168,
            name: "MODEL_CHAT_15729",
          },
          {
            no: 173,
            name: "MODEL_CHAT_16579",
          },
          {
            no: 174,
            name: "MODEL_CHAT_16579_CRUSOE",
          },
          {
            no: 181,
            name: "MODEL_CHAT_18805",
          },
          {
            no: 210,
            name: "MODEL_CHAT_18468",
          },
          {
            no: 233,
            name: "MODEL_CHAT_19484",
          },
          {
            no: 235,
            name: "MODEL_CHAT_20706",
          },
          {
            no: 245,
            name: "MODEL_CHAT_21779",
          },
          {
            no: 211,
            name: "MODEL_CHAT_19040",
          },
          {
            no: 229,
            name: "MODEL_CHAT_19820",
          },
          {
            no: 230,
            name: "MODEL_CHAT_19821",
          },
          {
            no: 244,
            name: "MODEL_CHAT_19821_CRUSOE",
          },
          {
            no: 269,
            name: "MODEL_CHAT_23310",
          },
          {
            no: 330,
            name: "MODEL_CHAT_28580",
          },
          {
            no: 331,
            name: "MODEL_CHAT_28581",
          },
          {
            no: 332,
            name: "MODEL_CHAT_28582",
          },
          {
            no: 333,
            name: "MODEL_CHAT_28583",
          },
          {
            no: 334,
            name: "MODEL_CHAT_28584",
          },
          {
            no: 231,
            name: "MODEL_CHAT_19822",
          },
          {
            no: 255,
            name: "MODEL_CHAT_22798",
          },
          {
            no: 256,
            name: "MODEL_CHAT_22799",
          },
          {
            no: 257,
            name: "MODEL_CHAT_22800",
          },
          {
            no: 267,
            name: "MODEL_CHAT_23151",
          },
          {
            no: 268,
            name: "MODEL_CHAT_23152",
          },
          {
            no: 270,
            name: "MODEL_CASCADE_22893",
          },
          {
            no: 225,
            name: "MODEL_CASCADE_20064",
          },
          {
            no: 236,
            name: "MODEL_CASCADE_20065",
          },
          {
            no: 237,
            name: "MODEL_CASCADE_20066",
          },
          {
            no: 238,
            name: "MODEL_CASCADE_20067",
          },
          {
            no: 239,
            name: "MODEL_CASCADE_20068",
          },
          {
            no: 240,
            name: "MODEL_CASCADE_20069",
          },
          {
            no: 250,
            name: "MODEL_CASCADE_20070",
          },
          {
            no: 251,
            name: "MODEL_CASCADE_20071",
          },
          {
            no: 252,
            name: "MODEL_CASCADE_20072",
          },
          {
            no: 253,
            name: "MODEL_CASCADE_20073",
          },
          {
            no: 254,
            name: "MODEL_CASCADE_20074",
          },
          {
            no: 307,
            name: "MODEL_CASCADE_20075",
          },
          {
            no: 308,
            name: "MODEL_CASCADE_20076",
          },
          {
            no: 309,
            name: "MODEL_CASCADE_20077",
          },
          {
            no: 310,
            name: "MODEL_CASCADE_20078",
          },
          {
            no: 311,
            name: "MODEL_CASCADE_20079",
          },
          {
            no: 297,
            name: "MODEL_CASCADE_20080",
          },
          {
            no: 298,
            name: "MODEL_CASCADE_20081",
          },
          {
            no: 299,
            name: "MODEL_CASCADE_20082",
          },
          {
            no: 300,
            name: "MODEL_CASCADE_20083",
          },
          {
            no: 301,
            name: "MODEL_CASCADE_20084",
          },
          {
            no: 302,
            name: "MODEL_CASCADE_20085",
          },
          {
            no: 303,
            name: "MODEL_CASCADE_20086",
          },
          {
            no: 304,
            name: "MODEL_CASCADE_20087",
          },
          {
            no: 305,
            name: "MODEL_CASCADE_20088",
          },
          {
            no: 306,
            name: "MODEL_CASCADE_20089",
          },
          {
            no: 247,
            name: "MODEL_DEEPSEEK_V3_INTERNAL",
          },
          {
            no: 248,
            name: "MODEL_DEEPSEEK_V3_0324_INTERNAL",
          },
          {
            no: 249,
            name: "MODEL_DEEPSEEK_R1_INTERNAL",
          },
          {
            no: 241,
            name: "MODEL_ANTHROPIC_WINDSURF_RESEARCH",
          },
          {
            no: 242,
            name: "MODEL_ANTHROPIC_WINDSURF_RESEARCH_THINKING",
          },
          {
            no: 65,
            name: "MODEL_DRAFT_11408",
          },
          {
            no: 67,
            name: "MODEL_DRAFT_CHAT_11883",
          },
          {
            no: 72,
            name: "MODEL_DRAFT_CHAT_12196",
          },
          {
            no: 73,
            name: "MODEL_DRAFT_CHAT_12413",
          },
          {
            no: 104,
            name: "MODEL_DRAFT_CHAT_13175",
          },
          {
            no: 232,
            name: "MODEL_DRAFT_CHAT_19823",
          },
          {
            no: 243,
            name: "MODEL_DRAFT_CHAT_20707",
          },
          {
            no: 258,
            name: "MODEL_DRAFT_CHAT_22801",
          },
          {
            no: 273,
            name: "MODEL_DRAFT_CHAT_23508",
          },
          {
            no: 274,
            name: "MODEL_DRAFT_CASCADE_23672",
          },
          {
            no: 28,
            name: "MODEL_CHAT_3_5_TURBO",
          },
          {
            no: 30,
            name: "MODEL_CHAT_GPT_4",
          },
          {
            no: 37,
            name: "MODEL_CHAT_GPT_4_1106_PREVIEW",
          },
          {
            no: 91,
            name: "MODEL_TEXT_EMBEDDING_OPENAI_ADA",
          },
          {
            no: 163,
            name: "MODEL_TEXT_EMBEDDING_OPENAI_3_SMALL",
          },
          {
            no: 164,
            name: "MODEL_TEXT_EMBEDDING_OPENAI_3_LARGE",
          },
          {
            no: 71,
            name: "MODEL_CHAT_GPT_4O_2024_05_13",
          },
          {
            no: 109,
            name: "MODEL_CHAT_GPT_4O_2024_08_06",
          },
          {
            no: 113,
            name: "MODEL_CHAT_GPT_4O_MINI_2024_07_18",
          },
          {
            no: 259,
            name: "MODEL_CHAT_GPT_4_1_2025_04_14",
          },
          {
            no: 260,
            name: "MODEL_CHAT_GPT_4_1_MINI_2025_04_14",
          },
          {
            no: 261,
            name: "MODEL_CHAT_GPT_4_1_NANO_2025_04_14",
          },
          {
            no: 117,
            name: "MODEL_CHAT_O1_PREVIEW",
          },
          {
            no: 118,
            name: "MODEL_CHAT_O1_MINI",
          },
          {
            no: 170,
            name: "MODEL_CHAT_O1",
          },
          {
            no: 207,
            name: "MODEL_CHAT_O3_MINI",
          },
          {
            no: 213,
            name: "MODEL_CHAT_O3_MINI_LOW",
          },
          {
            no: 214,
            name: "MODEL_CHAT_O3_MINI_HIGH",
          },
          {
            no: 218,
            name: "MODEL_CHAT_O3",
          },
          {
            no: 262,
            name: "MODEL_CHAT_O3_LOW",
          },
          {
            no: 263,
            name: "MODEL_CHAT_O3_HIGH",
          },
          {
            no: 264,
            name: "MODEL_CHAT_O4_MINI",
          },
          {
            no: 265,
            name: "MODEL_CHAT_O4_MINI_LOW",
          },
          {
            no: 266,
            name: "MODEL_CHAT_O4_MINI_HIGH",
          },
          {
            no: 228,
            name: "MODEL_CHAT_GPT_4_5",
          },
          {
            no: 287,
            name: "MODEL_CODEX_MINI_LATEST",
          },
          {
            no: 288,
            name: "MODEL_CODEX_MINI_LATEST_LOW",
          },
          {
            no: 289,
            name: "MODEL_CODEX_MINI_LATEST_HIGH",
          },
          {
            no: 294,
            name: "MODEL_O3_PRO_2025_06_10",
          },
          {
            no: 295,
            name: "MODEL_O3_PRO_2025_06_10_LOW",
          },
          {
            no: 296,
            name: "MODEL_O3_PRO_2025_06_10_HIGH",
          },
          {
            no: 326,
            name: "MODEL_GPT_OSS_120B",
          },
          {
            no: 337,
            name: "MODEL_GPT_5_NANO",
          },
          {
            no: 338,
            name: "MODEL_CHAT_GPT_5_MINIMAL",
          },
          {
            no: 339,
            name: "MODEL_CHAT_GPT_5_LOW",
          },
          {
            no: 340,
            name: "MODEL_CHAT_GPT_5",
          },
          {
            no: 341,
            name: "MODEL_CHAT_GPT_5_HIGH",
          },
          {
            no: 61,
            name: "MODEL_GOOGLE_GEMINI_1_0_PRO",
          },
          {
            no: 62,
            name: "MODEL_GOOGLE_GEMINI_1_5_PRO",
          },
          {
            no: 183,
            name: "MODEL_GOOGLE_GEMINI_EXP_1206",
          },
          {
            no: 184,
            name: "MODEL_GOOGLE_GEMINI_2_0_FLASH",
          },
          {
            no: 246,
            name: "MODEL_GOOGLE_GEMINI_2_5_PRO",
          },
          {
            no: 272,
            name: "MODEL_GOOGLE_GEMINI_2_5_FLASH_PREVIEW_04_17",
          },
          {
            no: 275,
            name: "MODEL_GOOGLE_GEMINI_2_5_FLASH_PREVIEW_05_20",
          },
          {
            no: 276,
            name: "MODEL_GOOGLE_GEMINI_2_5_FLASH_PREVIEW_05_20_THINKING",
          },
          {
            no: 312,
            name: "MODEL_GOOGLE_GEMINI_2_5_FLASH",
          },
          {
            no: 313,
            name: "MODEL_GOOGLE_GEMINI_2_5_FLASH_THINKING",
          },
          {
            no: 343,
            name: "MODEL_GOOGLE_GEMINI_2_5_FLASH_LITE",
          },
          {
            no: 344,
            name: "MODEL_CLAUDE_CODE",
          },
          {
            no: 63,
            name: "MODEL_CLAUDE_3_OPUS_20240229",
          },
          {
            no: 64,
            name: "MODEL_CLAUDE_3_SONNET_20240229",
          },
          {
            no: 172,
            name: "MODEL_CLAUDE_3_HAIKU_20240307",
          },
          {
            no: 171,
            name: "MODEL_CLAUDE_3_5_HAIKU_20241022",
          },
          {
            no: 80,
            name: "MODEL_CLAUDE_3_5_SONNET_20240620",
          },
          {
            no: 166,
            name: "MODEL_CLAUDE_3_5_SONNET_20241022",
          },
          {
            no: 226,
            name: "MODEL_CLAUDE_3_7_SONNET_20250219",
          },
          {
            no: 227,
            name: "MODEL_CLAUDE_3_7_SONNET_20250219_THINKING",
          },
          {
            no: 284,
            name: "MODEL_CLAUDE_3_5_SONNET_BYOK",
          },
          {
            no: 285,
            name: "MODEL_CLAUDE_3_7_SONNET_BYOK",
          },
          {
            no: 319,
            name: "MODEL_CLAUDE_3_7_SONNET_OPEN_ROUTER_BYOK",
          },
          {
            no: 286,
            name: "MODEL_CLAUDE_3_7_SONNET_THINKING_BYOK",
          },
          {
            no: 320,
            name: "MODEL_CLAUDE_3_7_SONNET_THINKING_OPEN_ROUTER_BYOK",
          },
          {
            no: 277,
            name: "MODEL_CLAUDE_4_OPUS_BYOK",
          },
          {
            no: 278,
            name: "MODEL_CLAUDE_4_OPUS_THINKING_BYOK",
          },
          {
            no: 290,
            name: "MODEL_CLAUDE_4_OPUS",
          },
          {
            no: 291,
            name: "MODEL_CLAUDE_4_OPUS_THINKING",
          },
          {
            no: 279,
            name: "MODEL_CLAUDE_4_SONNET_BYOK",
          },
          {
            no: 321,
            name: "MODEL_CLAUDE_4_SONNET_OPEN_ROUTER_BYOK",
          },
          {
            no: 280,
            name: "MODEL_CLAUDE_4_SONNET_THINKING_BYOK",
          },
          {
            no: 322,
            name: "MODEL_CLAUDE_4_SONNET_THINKING_OPEN_ROUTER_BYOK",
          },
          {
            no: 281,
            name: "MODEL_CLAUDE_4_SONNET",
          },
          {
            no: 282,
            name: "MODEL_CLAUDE_4_SONNET_THINKING",
          },
          {
            no: 328,
            name: "MODEL_CLAUDE_4_1_OPUS",
          },
          {
            no: 329,
            name: "MODEL_CLAUDE_4_1_OPUS_THINKING",
          },
          {
            no: 292,
            name: "MODEL_CLAUDE_4_SONNET_DATABRICKS",
          },
          {
            no: 293,
            name: "MODEL_CLAUDE_4_SONNET_THINKING_DATABRICKS",
          },
          {
            no: 81,
            name: "MODEL_TOGETHERAI_TEXT_EMBEDDING_M2_BERT",
          },
          {
            no: 165,
            name: "MODEL_TOGETHERAI_LLAMA_3_1_8B_INSTRUCT",
          },
          {
            no: 82,
            name: "MODEL_HUGGING_FACE_TEXT_EMBEDDING_M2_BERT",
          },
          {
            no: 83,
            name: "MODEL_HUGGING_FACE_TEXT_EMBEDDING_UAE_CODE",
          },
          {
            no: 84,
            name: "MODEL_HUGGING_FACE_TEXT_EMBEDDING_BGE",
          },
          {
            no: 85,
            name: "MODEL_HUGGING_FACE_TEXT_EMBEDDING_BLADE",
          },
          {
            no: 86,
            name: "MODEL_HUGGING_FACE_TEXT_EMBEDDING_ARCTIC_LARGE",
          },
          {
            no: 87,
            name: "MODEL_HUGGING_FACE_TEXT_EMBEDDING_E5_BASE",
          },
          {
            no: 88,
            name: "MODEL_HUGGING_FACE_TEXT_EMBEDDING_MXBAI",
          },
          {
            no: 106,
            name: "MODEL_LLAMA_3_1_8B_INSTRUCT",
          },
          {
            no: 107,
            name: "MODEL_LLAMA_3_1_70B_INSTRUCT",
          },
          {
            no: 105,
            name: "MODEL_LLAMA_3_1_405B_INSTRUCT",
          },
          {
            no: 208,
            name: "MODEL_LLAMA_3_3_70B_INSTRUCT",
          },
          {
            no: 209,
            name: "MODEL_LLAMA_3_3_70B_INSTRUCT_R1",
          },
          {
            no: 116,
            name: "MODEL_LLAMA_3_1_70B_INSTRUCT_LONG_CONTEXT",
          },
          {
            no: 176,
            name: "MODEL_LLAMA_3_1_8B_HERMES_3",
          },
          {
            no: 177,
            name: "MODEL_LLAMA_3_1_70B_HERMES_3",
          },
          {
            no: 178,
            name: "MODEL_QWEN_2_5_7B_INSTRUCT",
          },
          {
            no: 179,
            name: "MODEL_QWEN_2_5_32B_INSTRUCT",
          },
          {
            no: 180,
            name: "MODEL_QWEN_2_5_72B_INSTRUCT",
          },
          {
            no: 224,
            name: "MODEL_QWEN_2_5_32B_INSTRUCT_R1",
          },
          {
            no: 324,
            name: "MODEL_QWEN_3_235B_INSTRUCT",
          },
          {
            no: 325,
            name: "MODEL_QWEN_3_CODER_480B_INSTRUCT",
          },
          {
            no: 327,
            name: "MODEL_QWEN_3_CODER_480B_INSTRUCT_FAST",
          },
          {
            no: 342,
            name: "MODEL_GLM_4_5",
          },
          {
            no: 335,
            name: "MODEL_LLAMA_FT_DEEPWIKI_ARTICLE",
          },
          {
            no: 336,
            name: "MODEL_LLAMA_FT_DEEPWIKI_HOVER",
          },
          {
            no: 89,
            name: "MODEL_NOMIC_TEXT_EMBEDDING_V1",
          },
          {
            no: 90,
            name: "MODEL_NOMIC_TEXT_EMBEDDING_V1_5",
          },
          {
            no: 77,
            name: "MODEL_MISTRAL_7B",
          },
          {
            no: 99,
            name: "MODEL_SALESFORCE_EMBEDDING_2R",
          },
          {
            no: 182,
            name: "MODEL_CUSTOM_VLLM",
          },
          {
            no: 92,
            name: "MODEL_TEI_BGE_M3",
          },
          {
            no: 93,
            name: "MODEL_TEI_NOMIC_EMBED_TEXT_V1",
          },
          {
            no: 94,
            name: "MODEL_TEI_INTFLOAT_E5_LARGE_INSTRUCT",
          },
          {
            no: 95,
            name: "MODEL_TEI_SNOWFLAKE_ARCTIC_EMBED_L",
          },
          {
            no: 96,
            name: "MODEL_TEI_UAE_CODE_LARGE_V1",
          },
          {
            no: 97,
            name: "MODEL_TEI_B1ADE",
          },
          {
            no: 98,
            name: "MODEL_TEI_WHEREISAI_UAE_LARGE_V1",
          },
          {
            no: 100,
            name: "MODEL_TEI_WHEREISAI_UAE_CODE_LARGE_V1",
          },
          {
            no: 200,
            name: "MODEL_OPENAI_COMPATIBLE",
          },
          {
            no: 201,
            name: "MODEL_ANTHROPIC_COMPATIBLE",
          },
          {
            no: 202,
            name: "MODEL_VERTEX_COMPATIBLE",
          },
          {
            no: 203,
            name: "MODEL_BEDROCK_COMPATIBLE",
          },
          {
            no: 204,
            name: "MODEL_AZURE_COMPATIBLE",
          },
          {
            no: 205,
            name: "MODEL_DEEPSEEK_V3",
          },
          {
            no: 206,
            name: "MODEL_DEEPSEEK_R1",
          },
          {
            no: 215,
            name: "MODEL_DEEPSEEK_R1_SLOW",
          },
          {
            no: 216,
            name: "MODEL_DEEPSEEK_R1_FAST",
          },
          {
            no: 323,
            name: "MODEL_KIMI_K2",
          },
          {
            no: 185,
            name: "MODEL_CUSTOM_OPEN_ROUTER",
          },
          {
            no: 212,
            name: "MODEL_XAI_GROK_2",
          },
          {
            no: 217,
            name: "MODEL_XAI_GROK_3",
          },
          {
            no: 234,
            name: "MODEL_XAI_GROK_3_MINI_REASONING",
          },
          {
            no: 219,
            name: "MODEL_PRIVATE_1",
          },
          {
            no: 220,
            name: "MODEL_PRIVATE_2",
          },
          {
            no: 221,
            name: "MODEL_PRIVATE_3",
          },
          {
            no: 222,
            name: "MODEL_PRIVATE_4",
          },
          {
            no: 223,
            name: "MODEL_PRIVATE_5",
          },
          {
            no: 314,
            name: "MODEL_PRIVATE_6",
          },
          {
            no: 315,
            name: "MODEL_PRIVATE_7",
          },
          {
            no: 316,
            name: "MODEL_PRIVATE_8",
          },
          {
            no: 317,
            name: "MODEL_PRIVATE_9",
          },
          {
            no: 318,
            name: "MODEL_PRIVATE_10",
          },
          {
            no: 800,
            name: "MODEL_ROUTING_GROUP_DEEP_WIKI",
          },
        ]),
        ((E = eW || (eW = {}))[(E.UNSPECIFIED = 0)] = "UNSPECIFIED"),
        (E[(E.CAPACITY_FALLBACK = 1)] = "CAPACITY_FALLBACK"),
        (E[(E.LITE_FREE = 2)] = "LITE_FREE"),
        (E[(E.LITE_PAID = 3)] = "LITE_PAID"),
        (E[(E.PREMIUM = 4)] = "PREMIUM"),
        n7.w.util.setEnumType(eW, "exa.codeium_common_pb.DeepWikiModelType", [
          {
            no: 0,
            name: "DEEP_WIKI_MODEL_TYPE_UNSPECIFIED",
          },
          {
            no: 1,
            name: "DEEP_WIKI_MODEL_TYPE_CAPACITY_FALLBACK",
          },
          {
            no: 2,
            name: "DEEP_WIKI_MODEL_TYPE_LITE_FREE",
          },
          {
            no: 3,
            name: "DEEP_WIKI_MODEL_TYPE_LITE_PAID",
          },
          {
            no: 4,
            name: "DEEP_WIKI_MODEL_TYPE_PREMIUM",
          },
        ]),
        ((u = eK || (eK = {}))[(u.EXCLUSION_UNSPECIFIED = 0)] =
          "EXCLUSION_UNSPECIFIED"),
        (u[(u.EXCLUSION_ELEMENT_KIND_DISABLED = 1)] =
          "EXCLUSION_ELEMENT_KIND_DISABLED"),
        (u[(u.EXCLUSION_ELEMENT_MISSING_DEPENDENCY = 2)] =
          "EXCLUSION_ELEMENT_MISSING_DEPENDENCY"),
        (u[(u.EXCLUSION_TOKEN_BUDGET = 3)] = "EXCLUSION_TOKEN_BUDGET"),
        (u[(u.EXCLUSION_ACTIVE_SOURCE_OVERLAP = 4)] =
          "EXCLUSION_ACTIVE_SOURCE_OVERLAP"),
        n7.w.util.setEnumType(
          eK,
          "exa.codeium_common_pb.PromptElementExclusionReason",
          [
            {
              no: 0,
              name: "EXCLUSION_UNSPECIFIED",
            },
            {
              no: 1,
              name: "EXCLUSION_ELEMENT_KIND_DISABLED",
            },
            {
              no: 2,
              name: "EXCLUSION_ELEMENT_MISSING_DEPENDENCY",
            },
            {
              no: 3,
              name: "EXCLUSION_TOKEN_BUDGET",
            },
            {
              no: 4,
              name: "EXCLUSION_ACTIVE_SOURCE_OVERLAP",
            },
          ]
        ),
        ((l = eX || (eX = {}))[(l.UNSPECIFIED = 0)] = "UNSPECIFIED"),
        (l[(l.INCOMPLETE = 1)] = "INCOMPLETE"),
        (l[(l.STOP_PATTERN = 2)] = "STOP_PATTERN"),
        (l[(l.MAX_TOKENS = 3)] = "MAX_TOKENS"),
        (l[(l.MIN_LOG_PROB = 4)] = "MIN_LOG_PROB"),
        (l[(l.MAX_NEWLINES = 5)] = "MAX_NEWLINES"),
        (l[(l.EXIT_SCOPE = 6)] = "EXIT_SCOPE"),
        (l[(l.NONFINITE_LOGIT_OR_PROB = 7)] = "NONFINITE_LOGIT_OR_PROB"),
        (l[(l.FIRST_NON_WHITESPACE_LINE = 8)] = "FIRST_NON_WHITESPACE_LINE"),
        (l[(l.PARTIAL = 9)] = "PARTIAL"),
        (l[(l.FUNCTION_CALL = 10)] = "FUNCTION_CALL"),
        (l[(l.CONTENT_FILTER = 11)] = "CONTENT_FILTER"),
        (l[(l.NON_INSERTION = 12)] = "NON_INSERTION"),
        (l[(l.ERROR = 13)] = "ERROR"),
        n7.w.util.setEnumType(eX, "exa.codeium_common_pb.StopReason", [
          {
            no: 0,
            name: "STOP_REASON_UNSPECIFIED",
          },
          {
            no: 1,
            name: "STOP_REASON_INCOMPLETE",
          },
          {
            no: 2,
            name: "STOP_REASON_STOP_PATTERN",
          },
          {
            no: 3,
            name: "STOP_REASON_MAX_TOKENS",
          },
          {
            no: 4,
            name: "STOP_REASON_MIN_LOG_PROB",
          },
          {
            no: 5,
            name: "STOP_REASON_MAX_NEWLINES",
          },
          {
            no: 6,
            name: "STOP_REASON_EXIT_SCOPE",
          },
          {
            no: 7,
            name: "STOP_REASON_NONFINITE_LOGIT_OR_PROB",
          },
          {
            no: 8,
            name: "STOP_REASON_FIRST_NON_WHITESPACE_LINE",
          },
          {
            no: 9,
            name: "STOP_REASON_PARTIAL",
          },
          {
            no: 10,
            name: "STOP_REASON_FUNCTION_CALL",
          },
          {
            no: 11,
            name: "STOP_REASON_CONTENT_FILTER",
          },
          {
            no: 12,
            name: "STOP_REASON_NON_INSERTION",
          },
          {
            no: 13,
            name: "STOP_REASON_ERROR",
          },
        ]),
        ((c = eY || (eY = {}))[(c.NONE = 0)] = "NONE"),
        (c[(c.INCOMPLETE = 1)] = "INCOMPLETE"),
        (c[(c.EMPTY = 2)] = "EMPTY"),
        (c[(c.REPETITIVE = 3)] = "REPETITIVE"),
        (c[(c.DUPLICATE = 4)] = "DUPLICATE"),
        (c[(c.LONG_LINE = 5)] = "LONG_LINE"),
        (c[(c.COMPLETIONS_CUTOFF = 6)] = "COMPLETIONS_CUTOFF"),
        (c[(c.ATTRIBUTION = 7)] = "ATTRIBUTION"),
        (c[(c.NON_MATCHING = 8)] = "NON_MATCHING"),
        (c[(c.NON_INSERTION = 9)] = "NON_INSERTION"),
        n7.w.util.setEnumType(eY, "exa.codeium_common_pb.FilterReason", [
          {
            no: 0,
            name: "FILTER_REASON_NONE",
          },
          {
            no: 1,
            name: "FILTER_REASON_INCOMPLETE",
          },
          {
            no: 2,
            name: "FILTER_REASON_EMPTY",
          },
          {
            no: 3,
            name: "FILTER_REASON_REPETITIVE",
          },
          {
            no: 4,
            name: "FILTER_REASON_DUPLICATE",
          },
          {
            no: 5,
            name: "FILTER_REASON_LONG_LINE",
          },
          {
            no: 6,
            name: "FILTER_REASON_COMPLETIONS_CUTOFF",
          },
          {
            no: 7,
            name: "FILTER_REASON_ATTRIBUTION",
          },
          {
            no: 8,
            name: "FILTER_REASON_NON_MATCHING",
          },
          {
            no: 9,
            name: "FILTER_REASON_NON_INSERTION",
          },
        ]),
        ((T = eQ || (eQ = {}))[(T.UNSPECIFIED = 0)] = "UNSPECIFIED"),
        (T[(T.NEW_CODE = 1)] = "NEW_CODE"),
        (T[(T.NO_LICENSE = 2)] = "NO_LICENSE"),
        (T[(T.NONPERMISSIVE = 3)] = "NONPERMISSIVE"),
        (T[(T.PERMISSIVE = 4)] = "PERMISSIVE"),
        (T[(T.PERMISSIVE_BLOCKED = 5)] = "PERMISSIVE_BLOCKED"),
        n7.w.util.setEnumType(eQ, "exa.codeium_common_pb.AttributionStatus", [
          {
            no: 0,
            name: "ATTRIBUTION_STATUS_UNSPECIFIED",
          },
          {
            no: 1,
            name: "ATTRIBUTION_STATUS_NEW_CODE",
          },
          {
            no: 2,
            name: "ATTRIBUTION_STATUS_NO_LICENSE",
          },
          {
            no: 3,
            name: "ATTRIBUTION_STATUS_NONPERMISSIVE",
          },
          {
            no: 4,
            name: "ATTRIBUTION_STATUS_PERMISSIVE",
          },
          {
            no: 5,
            name: "ATTRIBUTION_STATUS_PERMISSIVE_BLOCKED",
          },
        ]),
        ((d = ez || (ez = {}))[(d.UNSPECIFIED = 0)] = "UNSPECIFIED"),
        (d[(d.HIGH = 1)] = "HIGH"),
        (d[(d.LOW = 2)] = "LOW"),
        n7.w.util.setEnumType(ez, "exa.codeium_common_pb.EmbeddingPriority", [
          {
            no: 0,
            name: "EMBEDDING_PRIORITY_UNSPECIFIED",
          },
          {
            no: 1,
            name: "EMBEDDING_PRIORITY_HIGH",
          },
          {
            no: 2,
            name: "EMBEDDING_PRIORITY_LOW",
          },
        ]),
        ((S = ej || (ej = {}))[(S.UNSPECIFIED = 0)] = "UNSPECIFIED"),
        (S[(S.NOMIC_DOCUMENT = 1)] = "NOMIC_DOCUMENT"),
        (S[(S.NOMIC_SEARCH = 2)] = "NOMIC_SEARCH"),
        (S[(S.NOMIC_CLASSIFICATION = 3)] = "NOMIC_CLASSIFICATION"),
        (S[(S.NOMIC_CLUSTERING = 4)] = "NOMIC_CLUSTERING"),
        n7.w.util.setEnumType(ej, "exa.codeium_common_pb.EmbeddingPrefix", [
          {
            no: 0,
            name: "EMBEDDING_PREFIX_UNSPECIFIED",
          },
          {
            no: 1,
            name: "EMBEDDING_PREFIX_NOMIC_DOCUMENT",
          },
          {
            no: 2,
            name: "EMBEDDING_PREFIX_NOMIC_SEARCH",
          },
          {
            no: 3,
            name: "EMBEDDING_PREFIX_NOMIC_CLASSIFICATION",
          },
          {
            no: 4,
            name: "EMBEDDING_PREFIX_NOMIC_CLUSTERING",
          },
        ]),
        ((A = eZ || (eZ = {}))[(A.UNSPECIFIED = 0)] = "UNSPECIFIED"),
        (A[(A.CODE_CONTEXT_ITEM = 1)] = "CODE_CONTEXT_ITEM"),
        (A[(A.COMMIT_INTENT = 2)] = "COMMIT_INTENT"),
        n7.w.util.setEnumType(eZ, "exa.codeium_common_pb.EmbeddingSource", [
          {
            no: 0,
            name: "EMBEDDING_SOURCE_UNSPECIFIED",
          },
          {
            no: 1,
            name: "EMBEDDING_SOURCE_CODE_CONTEXT_ITEM",
          },
          {
            no: 2,
            name: "EMBEDDING_SOURCE_COMMIT_INTENT",
          },
        ]),
        ((O = e$ || (e$ = {}))[(O.CODEIUM = 0)] = "CODEIUM"),
        (O[(O.DEEPNOTE = 1)] = "DEEPNOTE"),
        (O[(O.CODESANDBOX = 2)] = "CODESANDBOX"),
        (O[(O.STACKBLITZ = 3)] = "STACKBLITZ"),
        (O[(O.VALTOWN = 4)] = "VALTOWN"),
        (O[(O.HEX = 5)] = "HEX"),
        (O[(O.ZAPIER = 6)] = "ZAPIER"),
        (O[(O.SUPERBLOCKS = 7)] = "SUPERBLOCKS"),
        (O[(O.EMBARCADERO = 8)] = "EMBARCADERO"),
        n7.w.util.setEnumType(e$, "exa.codeium_common_pb.AuthSource", [
          {
            no: 0,
            name: "AUTH_SOURCE_CODEIUM",
          },
          {
            no: 1,
            name: "AUTH_SOURCE_DEEPNOTE",
          },
          {
            no: 2,
            name: "AUTH_SOURCE_CODESANDBOX",
          },
          {
            no: 3,
            name: "AUTH_SOURCE_STACKBLITZ",
          },
          {
            no: 4,
            name: "AUTH_SOURCE_VALTOWN",
          },
          {
            no: 5,
            name: "AUTH_SOURCE_HEX",
          },
          {
            no: 6,
            name: "AUTH_SOURCE_ZAPIER",
          },
          {
            no: 7,
            name: "AUTH_SOURCE_SUPERBLOCKS",
          },
          {
            no: 8,
            name: "AUTH_SOURCE_EMBARCADERO",
          },
        ]),
        ((N = e1 || (e1 = {}))[(N.UNSPECIFIED = 0)] = "UNSPECIFIED"),
        (N[(N.ENABLE_CODEIUM = 1)] = "ENABLE_CODEIUM"),
        (N[(N.DISABLE_CODEIUM = 2)] = "DISABLE_CODEIUM"),
        (N[(N.SHOW_PREVIOUS_COMPLETION = 3)] = "SHOW_PREVIOUS_COMPLETION"),
        (N[(N.SHOW_NEXT_COMPLETION = 4)] = "SHOW_NEXT_COMPLETION"),
        (N[(N.COPILOT_STATUS = 5)] = "COPILOT_STATUS"),
        (N[(N.COMPLETION_SUPPRESSED = 6)] = "COMPLETION_SUPPRESSED"),
        (N[(N.MEMORY_STATS = 8)] = "MEMORY_STATS"),
        (N[(N.LOCAL_CONTEXT_RELEVANCE_CHECK = 9)] =
          "LOCAL_CONTEXT_RELEVANCE_CHECK"),
        (N[(N.ACTIVE_EDITOR_CHANGED = 10)] = "ACTIVE_EDITOR_CHANGED"),
        (N[(N.SHOW_PREVIOUS_CORTEX_STEP = 11)] = "SHOW_PREVIOUS_CORTEX_STEP"),
        (N[(N.SHOW_NEXT_CORTEX_STEP = 12)] = "SHOW_NEXT_CORTEX_STEP"),
        (N[(N.INDEXER_STATS = 13)] = "INDEXER_STATS"),
        n7.w.util.setEnumType(e1, "exa.codeium_common_pb.EventType", [
          {
            no: 0,
            name: "EVENT_TYPE_UNSPECIFIED",
          },
          {
            no: 1,
            name: "EVENT_TYPE_ENABLE_CODEIUM",
          },
          {
            no: 2,
            name: "EVENT_TYPE_DISABLE_CODEIUM",
          },
          {
            no: 3,
            name: "EVENT_TYPE_SHOW_PREVIOUS_COMPLETION",
          },
          {
            no: 4,
            name: "EVENT_TYPE_SHOW_NEXT_COMPLETION",
          },
          {
            no: 5,
            name: "EVENT_TYPE_COPILOT_STATUS",
          },
          {
            no: 6,
            name: "EVENT_TYPE_COMPLETION_SUPPRESSED",
          },
          {
            no: 8,
            name: "EVENT_TYPE_MEMORY_STATS",
          },
          {
            no: 9,
            name: "EVENT_TYPE_LOCAL_CONTEXT_RELEVANCE_CHECK",
          },
          {
            no: 10,
            name: "EVENT_TYPE_ACTIVE_EDITOR_CHANGED",
          },
          {
            no: 11,
            name: "EVENT_TYPE_SHOW_PREVIOUS_CORTEX_STEP",
          },
          {
            no: 12,
            name: "EVENT_TYPE_SHOW_NEXT_CORTEX_STEP",
          },
          {
            no: 13,
            name: "EVENT_TYPE_INDEXER_STATS",
          },
        ]),
        ((C = e2 || (e2 = {}))[(C.UNSPECIFIED = 0)] = "UNSPECIFIED"),
        (C[(C.CLUSTER = 1)] = "CLUSTER"),
        (C[(C.EXACT = 2)] = "EXACT"),
        n7.w.util.setEnumType(e2, "exa.codeium_common_pb.SearchResultType", [
          {
            no: 0,
            name: "SEARCH_RESULT_TYPE_UNSPECIFIED",
          },
          {
            no: 1,
            name: "SEARCH_RESULT_TYPE_CLUSTER",
          },
          {
            no: 2,
            name: "SEARCH_RESULT_TYPE_EXACT",
          },
        ]),
        ((f = e0 || (e0 = {}))[(f.UNSPECIFIED = 0)] = "UNSPECIFIED"),
        (f[(f.RAW_SOURCE = 1)] = "RAW_SOURCE"),
        (f[(f.DOCSTRING = 2)] = "DOCSTRING"),
        (f[(f.FUNCTION = 3)] = "FUNCTION"),
        (f[(f.NODEPATH = 4)] = "NODEPATH"),
        (f[(f.DECLARATION = 5)] = "DECLARATION"),
        (f[(f.NAIVE_CHUNK = 6)] = "NAIVE_CHUNK"),
        (f[(f.SIGNATURE = 7)] = "SIGNATURE"),
        n7.w.util.setEnumType(e0, "exa.codeium_common_pb.EmbedType", [
          {
            no: 0,
            name: "EMBED_TYPE_UNSPECIFIED",
          },
          {
            no: 1,
            name: "EMBED_TYPE_RAW_SOURCE",
          },
          {
            no: 2,
            name: "EMBED_TYPE_DOCSTRING",
          },
          {
            no: 3,
            name: "EMBED_TYPE_FUNCTION",
          },
          {
            no: 4,
            name: "EMBED_TYPE_NODEPATH",
          },
          {
            no: 5,
            name: "EMBED_TYPE_DECLARATION",
          },
          {
            no: 6,
            name: "EMBED_TYPE_NAIVE_CHUNK",
          },
          {
            no: 7,
            name: "EMBED_TYPE_SIGNATURE",
          },
        ]),
        ((w = e9 || (e9 = {}))[(w.UNSPECIFIED = 0)] = "UNSPECIFIED"),
        (w[(w.TYPING_AS_SUGGESTED = 1)] = "TYPING_AS_SUGGESTED"),
        (w[(w.CACHE = 2)] = "CACHE"),
        (w[(w.NETWORK = 3)] = "NETWORK"),
        n7.w.util.setEnumType(e9, "exa.codeium_common_pb.CompletionSource", [
          {
            no: 0,
            name: "COMPLETION_SOURCE_UNSPECIFIED",
          },
          {
            no: 1,
            name: "COMPLETION_SOURCE_TYPING_AS_SUGGESTED",
          },
          {
            no: 2,
            name: "COMPLETION_SOURCE_CACHE",
          },
          {
            no: 3,
            name: "COMPLETION_SOURCE_NETWORK",
          },
        ]),
        ((I = e3 || (e3 = {}))[(I.UNSPECIFIED = 0)] = "UNSPECIFIED"),
        (I[(I.SINGLE = 1)] = "SINGLE"),
        (I[(I.MULTI = 2)] = "MULTI"),
        (I[(I.INLINE_FIM = 3)] = "INLINE_FIM"),
        (I[(I.CASCADE = 4)] = "CASCADE"),
        n7.w.util.setEnumType(e3, "exa.codeium_common_pb.CompletionType", [
          {
            no: 0,
            name: "COMPLETION_TYPE_UNSPECIFIED",
          },
          {
            no: 1,
            name: "COMPLETION_TYPE_SINGLE",
          },
          {
            no: 2,
            name: "COMPLETION_TYPE_MULTI",
          },
          {
            no: 3,
            name: "COMPLETION_TYPE_INLINE_FIM",
          },
          {
            no: 4,
            name: "COMPLETION_TYPE_CASCADE",
          },
        ]),
        ((R = e4 || (e4 = {}))[(R.UNSPECIFIED = 0)] = "UNSPECIFIED"),
        (R[(R.C = 1)] = "C"),
        (R[(R.CLOJURE = 2)] = "CLOJURE"),
        (R[(R.COFFEESCRIPT = 3)] = "COFFEESCRIPT"),
        (R[(R.CPP = 4)] = "CPP"),
        (R[(R.CSHARP = 5)] = "CSHARP"),
        (R[(R.CSS = 6)] = "CSS"),
        (R[(R.CUDACPP = 7)] = "CUDACPP"),
        (R[(R.DOCKERFILE = 8)] = "DOCKERFILE"),
        (R[(R.GO = 9)] = "GO"),
        (R[(R.GROOVY = 10)] = "GROOVY"),
        (R[(R.HANDLEBARS = 11)] = "HANDLEBARS"),
        (R[(R.HASKELL = 12)] = "HASKELL"),
        (R[(R.HCL = 13)] = "HCL"),
        (R[(R.HTML = 14)] = "HTML"),
        (R[(R.INI = 15)] = "INI"),
        (R[(R.JAVA = 16)] = "JAVA"),
        (R[(R.JAVASCRIPT = 17)] = "JAVASCRIPT"),
        (R[(R.JSON = 18)] = "JSON"),
        (R[(R.JULIA = 19)] = "JULIA"),
        (R[(R.KOTLIN = 20)] = "KOTLIN"),
        (R[(R.LATEX = 21)] = "LATEX"),
        (R[(R.LESS = 22)] = "LESS"),
        (R[(R.LUA = 23)] = "LUA"),
        (R[(R.MAKEFILE = 24)] = "MAKEFILE"),
        (R[(R.MARKDOWN = 25)] = "MARKDOWN"),
        (R[(R.OBJECTIVEC = 26)] = "OBJECTIVEC"),
        (R[(R.OBJECTIVECPP = 27)] = "OBJECTIVECPP"),
        (R[(R.PERL = 28)] = "PERL"),
        (R[(R.PHP = 29)] = "PHP"),
        (R[(R.PLAINTEXT = 30)] = "PLAINTEXT"),
        (R[(R.PROTOBUF = 31)] = "PROTOBUF"),
        (R[(R.PBTXT = 32)] = "PBTXT"),
        (R[(R.PYTHON = 33)] = "PYTHON"),
        (R[(R.R = 34)] = "R"),
        (R[(R.RUBY = 35)] = "RUBY"),
        (R[(R.RUST = 36)] = "RUST"),
        (R[(R.SASS = 37)] = "SASS"),
        (R[(R.SCALA = 38)] = "SCALA"),
        (R[(R.SCSS = 39)] = "SCSS"),
        (R[(R.SHELL = 40)] = "SHELL"),
        (R[(R.SQL = 41)] = "SQL"),
        (R[(R.STARLARK = 42)] = "STARLARK"),
        (R[(R.SWIFT = 43)] = "SWIFT"),
        (R[(R.TSX = 44)] = "TSX"),
        (R[(R.TYPESCRIPT = 45)] = "TYPESCRIPT"),
        (R[(R.VISUALBASIC = 46)] = "VISUALBASIC"),
        (R[(R.VUE = 47)] = "VUE"),
        (R[(R.XML = 48)] = "XML"),
        (R[(R.XSL = 49)] = "XSL"),
        (R[(R.YAML = 50)] = "YAML"),
        (R[(R.SVELTE = 51)] = "SVELTE"),
        (R[(R.TOML = 52)] = "TOML"),
        (R[(R.DART = 53)] = "DART"),
        (R[(R.RST = 54)] = "RST"),
        (R[(R.OCAML = 55)] = "OCAML"),
        (R[(R.CMAKE = 56)] = "CMAKE"),
        (R[(R.PASCAL = 57)] = "PASCAL"),
        (R[(R.ELIXIR = 58)] = "ELIXIR"),
        (R[(R.FSHARP = 59)] = "FSHARP"),
        (R[(R.LISP = 60)] = "LISP"),
        (R[(R.MATLAB = 61)] = "MATLAB"),
        (R[(R.POWERSHELL = 62)] = "POWERSHELL"),
        (R[(R.SOLIDITY = 63)] = "SOLIDITY"),
        (R[(R.ADA = 64)] = "ADA"),
        (R[(R.OCAML_INTERFACE = 65)] = "OCAML_INTERFACE"),
        (R[(R.TREE_SITTER_QUERY = 66)] = "TREE_SITTER_QUERY"),
        (R[(R.APL = 67)] = "APL"),
        (R[(R.ASSEMBLY = 68)] = "ASSEMBLY"),
        (R[(R.COBOL = 69)] = "COBOL"),
        (R[(R.CRYSTAL = 70)] = "CRYSTAL"),
        (R[(R.EMACS_LISP = 71)] = "EMACS_LISP"),
        (R[(R.ERLANG = 72)] = "ERLANG"),
        (R[(R.FORTRAN = 73)] = "FORTRAN"),
        (R[(R.FREEFORM = 74)] = "FREEFORM"),
        (R[(R.GRADLE = 75)] = "GRADLE"),
        (R[(R.HACK = 76)] = "HACK"),
        (R[(R.MAVEN = 77)] = "MAVEN"),
        (R[(R.M68KASSEMBLY = 78)] = "M68KASSEMBLY"),
        (R[(R.SAS = 79)] = "SAS"),
        (R[(R.UNIXASSEMBLY = 80)] = "UNIXASSEMBLY"),
        (R[(R.VBA = 81)] = "VBA"),
        (R[(R.VIMSCRIPT = 82)] = "VIMSCRIPT"),
        (R[(R.WEBASSEMBLY = 83)] = "WEBASSEMBLY"),
        (R[(R.BLADE = 84)] = "BLADE"),
        (R[(R.ASTRO = 85)] = "ASTRO"),
        (R[(R.MUMPS = 86)] = "MUMPS"),
        (R[(R.GDSCRIPT = 87)] = "GDSCRIPT"),
        (R[(R.NIM = 88)] = "NIM"),
        (R[(R.PROLOG = 89)] = "PROLOG"),
        (R[(R.MARKDOWN_INLINE = 90)] = "MARKDOWN_INLINE"),
        (R[(R.APEX = 91)] = "APEX"),
        n7.w.util.setEnumType(e4, "exa.codeium_common_pb.Language", [
          {
            no: 0,
            name: "LANGUAGE_UNSPECIFIED",
          },
          {
            no: 1,
            name: "LANGUAGE_C",
          },
          {
            no: 2,
            name: "LANGUAGE_CLOJURE",
          },
          {
            no: 3,
            name: "LANGUAGE_COFFEESCRIPT",
          },
          {
            no: 4,
            name: "LANGUAGE_CPP",
          },
          {
            no: 5,
            name: "LANGUAGE_CSHARP",
          },
          {
            no: 6,
            name: "LANGUAGE_CSS",
          },
          {
            no: 7,
            name: "LANGUAGE_CUDACPP",
          },
          {
            no: 8,
            name: "LANGUAGE_DOCKERFILE",
          },
          {
            no: 9,
            name: "LANGUAGE_GO",
          },
          {
            no: 10,
            name: "LANGUAGE_GROOVY",
          },
          {
            no: 11,
            name: "LANGUAGE_HANDLEBARS",
          },
          {
            no: 12,
            name: "LANGUAGE_HASKELL",
          },
          {
            no: 13,
            name: "LANGUAGE_HCL",
          },
          {
            no: 14,
            name: "LANGUAGE_HTML",
          },
          {
            no: 15,
            name: "LANGUAGE_INI",
          },
          {
            no: 16,
            name: "LANGUAGE_JAVA",
          },
          {
            no: 17,
            name: "LANGUAGE_JAVASCRIPT",
          },
          {
            no: 18,
            name: "LANGUAGE_JSON",
          },
          {
            no: 19,
            name: "LANGUAGE_JULIA",
          },
          {
            no: 20,
            name: "LANGUAGE_KOTLIN",
          },
          {
            no: 21,
            name: "LANGUAGE_LATEX",
          },
          {
            no: 22,
            name: "LANGUAGE_LESS",
          },
          {
            no: 23,
            name: "LANGUAGE_LUA",
          },
          {
            no: 24,
            name: "LANGUAGE_MAKEFILE",
          },
          {
            no: 25,
            name: "LANGUAGE_MARKDOWN",
          },
          {
            no: 26,
            name: "LANGUAGE_OBJECTIVEC",
          },
          {
            no: 27,
            name: "LANGUAGE_OBJECTIVECPP",
          },
          {
            no: 28,
            name: "LANGUAGE_PERL",
          },
          {
            no: 29,
            name: "LANGUAGE_PHP",
          },
          {
            no: 30,
            name: "LANGUAGE_PLAINTEXT",
          },
          {
            no: 31,
            name: "LANGUAGE_PROTOBUF",
          },
          {
            no: 32,
            name: "LANGUAGE_PBTXT",
          },
          {
            no: 33,
            name: "LANGUAGE_PYTHON",
          },
          {
            no: 34,
            name: "LANGUAGE_R",
          },
          {
            no: 35,
            name: "LANGUAGE_RUBY",
          },
          {
            no: 36,
            name: "LANGUAGE_RUST",
          },
          {
            no: 37,
            name: "LANGUAGE_SASS",
          },
          {
            no: 38,
            name: "LANGUAGE_SCALA",
          },
          {
            no: 39,
            name: "LANGUAGE_SCSS",
          },
          {
            no: 40,
            name: "LANGUAGE_SHELL",
          },
          {
            no: 41,
            name: "LANGUAGE_SQL",
          },
          {
            no: 42,
            name: "LANGUAGE_STARLARK",
          },
          {
            no: 43,
            name: "LANGUAGE_SWIFT",
          },
          {
            no: 44,
            name: "LANGUAGE_TSX",
          },
          {
            no: 45,
            name: "LANGUAGE_TYPESCRIPT",
          },
          {
            no: 46,
            name: "LANGUAGE_VISUALBASIC",
          },
          {
            no: 47,
            name: "LANGUAGE_VUE",
          },
          {
            no: 48,
            name: "LANGUAGE_XML",
          },
          {
            no: 49,
            name: "LANGUAGE_XSL",
          },
          {
            no: 50,
            name: "LANGUAGE_YAML",
          },
          {
            no: 51,
            name: "LANGUAGE_SVELTE",
          },
          {
            no: 52,
            name: "LANGUAGE_TOML",
          },
          {
            no: 53,
            name: "LANGUAGE_DART",
          },
          {
            no: 54,
            name: "LANGUAGE_RST",
          },
          {
            no: 55,
            name: "LANGUAGE_OCAML",
          },
          {
            no: 56,
            name: "LANGUAGE_CMAKE",
          },
          {
            no: 57,
            name: "LANGUAGE_PASCAL",
          },
          {
            no: 58,
            name: "LANGUAGE_ELIXIR",
          },
          {
            no: 59,
            name: "LANGUAGE_FSHARP",
          },
          {
            no: 60,
            name: "LANGUAGE_LISP",
          },
          {
            no: 61,
            name: "LANGUAGE_MATLAB",
          },
          {
            no: 62,
            name: "LANGUAGE_POWERSHELL",
          },
          {
            no: 63,
            name: "LANGUAGE_SOLIDITY",
          },
          {
            no: 64,
            name: "LANGUAGE_ADA",
          },
          {
            no: 65,
            name: "LANGUAGE_OCAML_INTERFACE",
          },
          {
            no: 66,
            name: "LANGUAGE_TREE_SITTER_QUERY",
          },
          {
            no: 67,
            name: "LANGUAGE_APL",
          },
          {
            no: 68,
            name: "LANGUAGE_ASSEMBLY",
          },
          {
            no: 69,
            name: "LANGUAGE_COBOL",
          },
          {
            no: 70,
            name: "LANGUAGE_CRYSTAL",
          },
          {
            no: 71,
            name: "LANGUAGE_EMACS_LISP",
          },
          {
            no: 72,
            name: "LANGUAGE_ERLANG",
          },
          {
            no: 73,
            name: "LANGUAGE_FORTRAN",
          },
          {
            no: 74,
            name: "LANGUAGE_FREEFORM",
          },
          {
            no: 75,
            name: "LANGUAGE_GRADLE",
          },
          {
            no: 76,
            name: "LANGUAGE_HACK",
          },
          {
            no: 77,
            name: "LANGUAGE_MAVEN",
          },
          {
            no: 78,
            name: "LANGUAGE_M68KASSEMBLY",
          },
          {
            no: 79,
            name: "LANGUAGE_SAS",
          },
          {
            no: 80,
            name: "LANGUAGE_UNIXASSEMBLY",
          },
          {
            no: 81,
            name: "LANGUAGE_VBA",
          },
          {
            no: 82,
            name: "LANGUAGE_VIMSCRIPT",
          },
          {
            no: 83,
            name: "LANGUAGE_WEBASSEMBLY",
          },
          {
            no: 84,
            name: "LANGUAGE_BLADE",
          },
          {
            no: 85,
            name: "LANGUAGE_ASTRO",
          },
          {
            no: 86,
            name: "LANGUAGE_MUMPS",
          },
          {
            no: 87,
            name: "LANGUAGE_GDSCRIPT",
          },
          {
            no: 88,
            name: "LANGUAGE_NIM",
          },
          {
            no: 89,
            name: "LANGUAGE_PROLOG",
          },
          {
            no: 90,
            name: "LANGUAGE_MARKDOWN_INLINE",
          },
          {
            no: 91,
            name: "LANGUAGE_APEX",
          },
        ]),
        ((L = e5 || (e5 = {}))[(L.UNSPECIFIED = 0)] = "UNSPECIFIED"),
        (L[(L.USER = 1)] = "USER"),
        (L[(L.SYSTEM = 2)] = "SYSTEM"),
        (L[(L.UNKNOWN = 3)] = "UNKNOWN"),
        (L[(L.TOOL = 4)] = "TOOL"),
        (L[(L.SYSTEM_PROMPT = 5)] = "SYSTEM_PROMPT"),
        n7.w.util.setEnumType(e5, "exa.codeium_common_pb.ChatMessageSource", [
          {
            no: 0,
            name: "CHAT_MESSAGE_SOURCE_UNSPECIFIED",
          },
          {
            no: 1,
            name: "CHAT_MESSAGE_SOURCE_USER",
          },
          {
            no: 2,
            name: "CHAT_MESSAGE_SOURCE_SYSTEM",
          },
          {
            no: 3,
            name: "CHAT_MESSAGE_SOURCE_UNKNOWN",
          },
          {
            no: 4,
            name: "CHAT_MESSAGE_SOURCE_TOOL",
          },
          {
            no: 5,
            name: "CHAT_MESSAGE_SOURCE_SYSTEM_PROMPT",
          },
        ]),
        ((p = e8 || (e8 = {}))[(p.UNSPECIFIED = 0)] = "UNSPECIFIED"),
        (p[(p.PENDING = 1)] = "PENDING"),
        (p[(p.APPROVED = 2)] = "APPROVED"),
        (p[(p.REJECTED = 3)] = "REJECTED"),
        n7.w.util.setEnumType(e8, "exa.codeium_common_pb.UserTeamStatus", [
          {
            no: 0,
            name: "USER_TEAM_STATUS_UNSPECIFIED",
          },
          {
            no: 1,
            name: "USER_TEAM_STATUS_PENDING",
          },
          {
            no: 2,
            name: "USER_TEAM_STATUS_APPROVED",
          },
          {
            no: 3,
            name: "USER_TEAM_STATUS_REJECTED",
          },
        ]),
        ((D = e6 || (e6 = {}))[(D.UNSPECIFIED = 0)] = "UNSPECIFIED"),
        (D[(D.SSO = 1)] = "SSO"),
        (D[(D.ATTRIBUTION = 2)] = "ATTRIBUTION"),
        (D[(D.PHI = 3)] = "PHI"),
        (D[(D.CORTEX = 4)] = "CORTEX"),
        (D[(D.OPENAI_DISABLED = 5)] = "OPENAI_DISABLED"),
        (D[(D.REMOTE_INDEXING_DISABLED = 6)] = "REMOTE_INDEXING_DISABLED"),
        (D[(D.API_KEY_ENABLED = 7)] = "API_KEY_ENABLED"),
        n7.w.util.setEnumType(e6, "exa.codeium_common_pb.TeamsFeatures", [
          {
            no: 0,
            name: "TEAMS_FEATURES_UNSPECIFIED",
          },
          {
            no: 1,
            name: "TEAMS_FEATURES_SSO",
          },
          {
            no: 2,
            name: "TEAMS_FEATURES_ATTRIBUTION",
          },
          {
            no: 3,
            name: "TEAMS_FEATURES_PHI",
          },
          {
            no: 4,
            name: "TEAMS_FEATURES_CORTEX",
          },
          {
            no: 5,
            name: "TEAMS_FEATURES_OPENAI_DISABLED",
          },
          {
            no: 6,
            name: "TEAMS_FEATURES_REMOTE_INDEXING_DISABLED",
          },
          {
            no: 7,
            name: "TEAMS_FEATURES_API_KEY_ENABLED",
          },
        ]),
        ((P = e7 || (e7 = {}))[(P.UNSPECIFIED = 0)] = "UNSPECIFIED"),
        (P[(P.CORTEX = 1)] = "CORTEX"),
        (P[(P.CORTEX_TEST = 2)] = "CORTEX_TEST"),
        n7.w.util.setEnumType(e7, "exa.codeium_common_pb.UserFeatures", [
          {
            no: 0,
            name: "USER_FEATURES_UNSPECIFIED",
          },
          {
            no: 1,
            name: "USER_FEATURES_CORTEX",
          },
          {
            no: 2,
            name: "USER_FEATURES_CORTEX_TEST",
          },
        ]),
        ((M = ne || (ne = {}))[(M.UNSPECIFIED = 0)] = "UNSPECIFIED"),
        (M[(M.ATTRIBUTION_READ = 1)] = "ATTRIBUTION_READ"),
        (M[(M.ANALYTICS_READ = 2)] = "ANALYTICS_READ"),
        (M[(M.LICENSE_READ = 3)] = "LICENSE_READ"),
        (M[(M.TEAM_USER_READ = 4)] = "TEAM_USER_READ"),
        (M[(M.TEAM_USER_UPDATE = 5)] = "TEAM_USER_UPDATE"),
        (M[(M.TEAM_USER_DELETE = 6)] = "TEAM_USER_DELETE"),
        (M[(M.TEAM_USER_INVITE = 17)] = "TEAM_USER_INVITE"),
        (M[(M.INDEXING_READ = 7)] = "INDEXING_READ"),
        (M[(M.INDEXING_CREATE = 8)] = "INDEXING_CREATE"),
        (M[(M.INDEXING_UPDATE = 9)] = "INDEXING_UPDATE"),
        (M[(M.INDEXING_DELETE = 10)] = "INDEXING_DELETE"),
        (M[(M.INDEXING_MANAGEMENT = 27)] = "INDEXING_MANAGEMENT"),
        (M[(M.FINETUNING_READ = 19)] = "FINETUNING_READ"),
        (M[(M.FINETUNING_CREATE = 20)] = "FINETUNING_CREATE"),
        (M[(M.FINETUNING_UPDATE = 21)] = "FINETUNING_UPDATE"),
        (M[(M.FINETUNING_DELETE = 22)] = "FINETUNING_DELETE"),
        (M[(M.SSO_READ = 11)] = "SSO_READ"),
        (M[(M.SSO_WRITE = 12)] = "SSO_WRITE"),
        (M[(M.SERVICE_KEY_READ = 13)] = "SERVICE_KEY_READ"),
        (M[(M.SERVICE_KEY_CREATE = 14)] = "SERVICE_KEY_CREATE"),
        (M[(M.SERVICE_KEY_UPDATE = 28)] = "SERVICE_KEY_UPDATE"),
        (M[(M.SERVICE_KEY_DELETE = 15)] = "SERVICE_KEY_DELETE"),
        (M[(M.ROLE_READ = 23)] = "ROLE_READ"),
        (M[(M.ROLE_CREATE = 24)] = "ROLE_CREATE"),
        (M[(M.ROLE_UPDATE = 25)] = "ROLE_UPDATE"),
        (M[(M.ROLE_DELETE = 26)] = "ROLE_DELETE"),
        (M[(M.BILLING_READ = 16)] = "BILLING_READ"),
        (M[(M.BILLING_WRITE = 18)] = "BILLING_WRITE"),
        (M[(M.EXTERNAL_CHAT_UPDATE = 29)] = "EXTERNAL_CHAT_UPDATE"),
        (M[(M.TEAM_SETTINGS_READ = 30)] = "TEAM_SETTINGS_READ"),
        (M[(M.TEAM_SETTINGS_UPDATE = 31)] = "TEAM_SETTINGS_UPDATE"),
        n7.w.util.setEnumType(ne, "exa.codeium_common_pb.Permission", [
          {
            no: 0,
            name: "PERMISSION_UNSPECIFIED",
          },
          {
            no: 1,
            name: "PERMISSION_ATTRIBUTION_READ",
          },
          {
            no: 2,
            name: "PERMISSION_ANALYTICS_READ",
          },
          {
            no: 3,
            name: "PERMISSION_LICENSE_READ",
          },
          {
            no: 4,
            name: "PERMISSION_TEAM_USER_READ",
          },
          {
            no: 5,
            name: "PERMISSION_TEAM_USER_UPDATE",
          },
          {
            no: 6,
            name: "PERMISSION_TEAM_USER_DELETE",
          },
          {
            no: 17,
            name: "PERMISSION_TEAM_USER_INVITE",
          },
          {
            no: 7,
            name: "PERMISSION_INDEXING_READ",
          },
          {
            no: 8,
            name: "PERMISSION_INDEXING_CREATE",
          },
          {
            no: 9,
            name: "PERMISSION_INDEXING_UPDATE",
          },
          {
            no: 10,
            name: "PERMISSION_INDEXING_DELETE",
          },
          {
            no: 27,
            name: "PERMISSION_INDEXING_MANAGEMENT",
          },
          {
            no: 19,
            name: "PERMISSION_FINETUNING_READ",
          },
          {
            no: 20,
            name: "PERMISSION_FINETUNING_CREATE",
          },
          {
            no: 21,
            name: "PERMISSION_FINETUNING_UPDATE",
          },
          {
            no: 22,
            name: "PERMISSION_FINETUNING_DELETE",
          },
          {
            no: 11,
            name: "PERMISSION_SSO_READ",
          },
          {
            no: 12,
            name: "PERMISSION_SSO_WRITE",
          },
          {
            no: 13,
            name: "PERMISSION_SERVICE_KEY_READ",
          },
          {
            no: 14,
            name: "PERMISSION_SERVICE_KEY_CREATE",
          },
          {
            no: 28,
            name: "PERMISSION_SERVICE_KEY_UPDATE",
          },
          {
            no: 15,
            name: "PERMISSION_SERVICE_KEY_DELETE",
          },
          {
            no: 23,
            name: "PERMISSION_ROLE_READ",
          },
          {
            no: 24,
            name: "PERMISSION_ROLE_CREATE",
          },
          {
            no: 25,
            name: "PERMISSION_ROLE_UPDATE",
          },
          {
            no: 26,
            name: "PERMISSION_ROLE_DELETE",
          },
          {
            no: 16,
            name: "PERMISSION_BILLING_READ",
          },
          {
            no: 18,
            name: "PERMISSION_BILLING_WRITE",
          },
          {
            no: 29,
            name: "PERMISSION_EXTERNAL_CHAT_UPDATE",
          },
          {
            no: 30,
            name: "PERMISSION_TEAM_SETTINGS_READ",
          },
          {
            no: 31,
            name: "PERMISSION_TEAM_SETTINGS_UPDATE",
          },
        ]),
        ((y = nn || (nn = {}))[(y.UNSPECIFIED = 0)] = "UNSPECIFIED"),
        (y[(y.TEAMS = 1)] = "TEAMS"),
        (y[(y.PRO = 2)] = "PRO"),
        (y[(y.TRIAL = 9)] = "TRIAL"),
        (y[(y.ENTERPRISE_SAAS = 3)] = "ENTERPRISE_SAAS"),
        (y[(y.HYBRID = 4)] = "HYBRID"),
        (y[(y.ENTERPRISE_SELF_HOSTED = 5)] = "ENTERPRISE_SELF_HOSTED"),
        (y[(y.ENTERPRISE_SELF_SERVE = 10)] = "ENTERPRISE_SELF_SERVE"),
        (y[(y.WAITLIST_PRO = 6)] = "WAITLIST_PRO"),
        (y[(y.TEAMS_ULTIMATE = 7)] = "TEAMS_ULTIMATE"),
        (y[(y.PRO_ULTIMATE = 8)] = "PRO_ULTIMATE"),
        n7.w.util.setEnumType(nn, "exa.codeium_common_pb.TeamsTier", [
          {
            no: 0,
            name: "TEAMS_TIER_UNSPECIFIED",
          },
          {
            no: 1,
            name: "TEAMS_TIER_TEAMS",
          },
          {
            no: 2,
            name: "TEAMS_TIER_PRO",
          },
          {
            no: 9,
            name: "TEAMS_TIER_TRIAL",
          },
          {
            no: 3,
            name: "TEAMS_TIER_ENTERPRISE_SAAS",
          },
          {
            no: 4,
            name: "TEAMS_TIER_HYBRID",
          },
          {
            no: 5,
            name: "TEAMS_TIER_ENTERPRISE_SELF_HOSTED",
          },
          {
            no: 10,
            name: "TEAMS_TIER_ENTERPRISE_SELF_SERVE",
          },
          {
            no: 6,
            name: "TEAMS_TIER_WAITLIST_PRO",
          },
          {
            no: 7,
            name: "TEAMS_TIER_TEAMS_ULTIMATE",
          },
          {
            no: 8,
            name: "TEAMS_TIER_PRO_ULTIMATE",
          },
        ]),
        ((h = nt || (nt = {}))[(h.UNSPECIFIED = 0)] = "UNSPECIFIED"),
        (h[(h.WINDSURF = 1)] = "WINDSURF"),
        (h[(h.OPENAI = 2)] = "OPENAI"),
        (h[(h.ANTHROPIC = 3)] = "ANTHROPIC"),
        (h[(h.GOOGLE = 4)] = "GOOGLE"),
        (h[(h.XAI = 5)] = "XAI"),
        (h[(h.DEEPSEEK = 6)] = "DEEPSEEK"),
        (h[(h.MOONSHOT = 7)] = "MOONSHOT"),
        (h[(h.QWEN = 8)] = "QWEN"),
        n7.w.util.setEnumType(nt, "exa.codeium_common_pb.ModelProvider", [
          {
            no: 0,
            name: "MODEL_PROVIDER_UNSPECIFIED",
          },
          {
            no: 1,
            name: "MODEL_PROVIDER_WINDSURF",
          },
          {
            no: 2,
            name: "MODEL_PROVIDER_OPENAI",
          },
          {
            no: 3,
            name: "MODEL_PROVIDER_ANTHROPIC",
          },
          {
            no: 4,
            name: "MODEL_PROVIDER_GOOGLE",
          },
          {
            no: 5,
            name: "MODEL_PROVIDER_XAI",
          },
          {
            no: 6,
            name: "MODEL_PROVIDER_DEEPSEEK",
          },
          {
            no: 7,
            name: "MODEL_PROVIDER_MOONSHOT",
          },
          {
            no: 8,
            name: "MODEL_PROVIDER_QWEN",
          },
        ]),
        ((U = na || (na = {}))[(U.UNSPECIFIED = 0)] = "UNSPECIFIED"),
        (U[(U.STATIC_CREDIT = 1)] = "STATIC_CREDIT"),
        (U[(U.API = 2)] = "API"),
        (U[(U.BYOK = 3)] = "BYOK"),
        n7.w.util.setEnumType(na, "exa.codeium_common_pb.ModelPricingType", [
          {
            no: 0,
            name: "MODEL_PRICING_TYPE_UNSPECIFIED",
          },
          {
            no: 1,
            name: "MODEL_PRICING_TYPE_STATIC_CREDIT",
          },
          {
            no: 2,
            name: "MODEL_PRICING_TYPE_API",
          },
          {
            no: 3,
            name: "MODEL_PRICING_TYPE_BYOK",
          },
        ]),
        ((g = nr || (nr = {}))[(g.UNSPECIFIED = 0)] = "UNSPECIFIED"),
        (g[(g.SUCCEEDED = 1)] = "SUCCEEDED"),
        (g[(g.PROCESSING = 2)] = "PROCESSING"),
        (g[(g.FAILED = 3)] = "FAILED"),
        (g[(g.NO_ACTIVE = 4)] = "NO_ACTIVE"),
        n7.w.util.setEnumType(nr, "exa.codeium_common_pb.TransactionStatus", [
          {
            no: 0,
            name: "TRANSACTION_STATUS_UNSPECIFIED",
          },
          {
            no: 1,
            name: "TRANSACTION_STATUS_SUCCEEDED",
          },
          {
            no: 2,
            name: "TRANSACTION_STATUS_PROCESSING",
          },
          {
            no: 3,
            name: "TRANSACTION_STATUS_FAILED",
          },
          {
            no: 4,
            name: "TRANSACTION_STATUS_NO_ACTIVE",
          },
        ]),
        ((J = ni || (ni = {}))[(J.UNSPECIFIED = 0)] = "UNSPECIFIED"),
        (J[(J.GITHUB = 1)] = "GITHUB"),
        (J[(J.GITLAB = 2)] = "GITLAB"),
        (J[(J.BITBUCKET = 3)] = "BITBUCKET"),
        (J[(J.AZURE_DEVOPS = 4)] = "AZURE_DEVOPS"),
        n7.w.util.setEnumType(ni, "exa.codeium_common_pb.ScmProvider", [
          {
            no: 0,
            name: "SCM_PROVIDER_UNSPECIFIED",
          },
          {
            no: 1,
            name: "SCM_PROVIDER_GITHUB",
          },
          {
            no: 2,
            name: "SCM_PROVIDER_GITLAB",
          },
          {
            no: 3,
            name: "SCM_PROVIDER_BITBUCKET",
          },
          {
            no: 4,
            name: "SCM_PROVIDER_AZURE_DEVOPS",
          },
        ]),
        ((k = ns || (ns = {}))[(k.UNSPECIFIED = 0)] = "UNSPECIFIED"),
        (k[(k.GIT = 1)] = "GIT"),
        (k[(k.PERFORCE = 2)] = "PERFORCE"),
        n7.w.util.setEnumType(ns, "exa.codeium_common_pb.ScmType", [
          {
            no: 0,
            name: "SCM_TYPE_UNSPECIFIED",
          },
          {
            no: 1,
            name: "SCM_TYPE_GIT",
          },
          {
            no: 2,
            name: "SCM_TYPE_PERFORCE",
          },
        ]),
        ((B = no || (no = {}))[(B.UNSPECIFIED = 0)] = "UNSPECIFIED"),
        (B[(B.FUNCTION = 1)] = "FUNCTION"),
        (B[(B.CLASS = 2)] = "CLASS"),
        (B[(B.IMPORT = 3)] = "IMPORT"),
        (B[(B.NAIVE_LINECHUNK = 4)] = "NAIVE_LINECHUNK"),
        (B[(B.REFERENCE_FUNCTION = 5)] = "REFERENCE_FUNCTION"),
        (B[(B.REFERENCE_CLASS = 6)] = "REFERENCE_CLASS"),
        (B[(B.FILE = 7)] = "FILE"),
        (B[(B.TERMINAL = 8)] = "TERMINAL"),
        n7.w.util.setEnumType(no, "exa.codeium_common_pb.CodeContextType", [
          {
            no: 0,
            name: "CODE_CONTEXT_TYPE_UNSPECIFIED",
          },
          {
            no: 1,
            name: "CODE_CONTEXT_TYPE_FUNCTION",
          },
          {
            no: 2,
            name: "CODE_CONTEXT_TYPE_CLASS",
          },
          {
            no: 3,
            name: "CODE_CONTEXT_TYPE_IMPORT",
          },
          {
            no: 4,
            name: "CODE_CONTEXT_TYPE_NAIVE_LINECHUNK",
          },
          {
            no: 5,
            name: "CODE_CONTEXT_TYPE_REFERENCE_FUNCTION",
          },
          {
            no: 6,
            name: "CODE_CONTEXT_TYPE_REFERENCE_CLASS",
          },
          {
            no: 7,
            name: "CODE_CONTEXT_TYPE_FILE",
          },
          {
            no: 8,
            name: "CODE_CONTEXT_TYPE_TERMINAL",
          },
        ]),
        ((G = n_ || (n_ = {}))[(G.UNSPECIFIED = 0)] = "UNSPECIFIED"),
        (G[(G.OPEN_DOCS = 1)] = "OPEN_DOCS"),
        (G[(G.SEARCH_RESULT = 2)] = "SEARCH_RESULT"),
        (G[(G.IMPORT = 3)] = "IMPORT"),
        (G[(G.LOCAL_DIRECTORY = 4)] = "LOCAL_DIRECTORY"),
        (G[(G.LAST_ACTIVE_DOC = 5)] = "LAST_ACTIVE_DOC"),
        (G[(G.ORACLE_ITEMS = 6)] = "ORACLE_ITEMS"),
        (G[(G.PINNED_CONTEXT = 7)] = "PINNED_CONTEXT"),
        (G[(G.RESEARCH_STATE = 8)] = "RESEARCH_STATE"),
        (G[(G.GROUND_TRUTH_PLAN_EDIT = 9)] = "GROUND_TRUTH_PLAN_EDIT"),
        (G[(G.COMMIT_GRAPH = 10)] = "COMMIT_GRAPH"),
        n7.w.util.setEnumType(n_, "exa.codeium_common_pb.CodeContextSource", [
          {
            no: 0,
            name: "CODE_CONTEXT_SOURCE_UNSPECIFIED",
          },
          {
            no: 1,
            name: "CODE_CONTEXT_SOURCE_OPEN_DOCS",
          },
          {
            no: 2,
            name: "CODE_CONTEXT_SOURCE_SEARCH_RESULT",
          },
          {
            no: 3,
            name: "CODE_CONTEXT_SOURCE_IMPORT",
          },
          {
            no: 4,
            name: "CODE_CONTEXT_SOURCE_LOCAL_DIRECTORY",
          },
          {
            no: 5,
            name: "CODE_CONTEXT_SOURCE_LAST_ACTIVE_DOC",
          },
          {
            no: 6,
            name: "CODE_CONTEXT_SOURCE_ORACLE_ITEMS",
          },
          {
            no: 7,
            name: "CODE_CONTEXT_SOURCE_PINNED_CONTEXT",
          },
          {
            no: 8,
            name: "CODE_CONTEXT_SOURCE_RESEARCH_STATE",
          },
          {
            no: 9,
            name: "CODE_CONTEXT_SOURCE_GROUND_TRUTH_PLAN_EDIT",
          },
          {
            no: 10,
            name: "CODE_CONTEXT_SOURCE_COMMIT_GRAPH",
          },
        ]),
        ((F = nm || (nm = {}))[(F.UNSPECIFIED = 0)] = "UNSPECIFIED"),
        (F[(F.RAW_SOURCE = 1)] = "RAW_SOURCE"),
        (F[(F.SIGNATURE = 2)] = "SIGNATURE"),
        (F[(F.NODEPATH = 3)] = "NODEPATH"),
        n7.w.util.setEnumType(nm, "exa.codeium_common_pb.ContextSnippetType", [
          {
            no: 0,
            name: "CONTEXT_SNIPPET_TYPE_UNSPECIFIED",
          },
          {
            no: 1,
            name: "CONTEXT_SNIPPET_TYPE_RAW_SOURCE",
          },
          {
            no: 2,
            name: "CONTEXT_SNIPPET_TYPE_SIGNATURE",
          },
          {
            no: 3,
            name: "CONTEXT_SNIPPET_TYPE_NODEPATH",
          },
        ]),
        ((x = nE || (nE = {}))[(x.UNSPECIFIED = 0)] = "UNSPECIFIED"),
        (x[(x.COMMIT_MESSAGE = 1)] = "COMMIT_MESSAGE"),
        n7.w.util.setEnumType(nE, "exa.codeium_common_pb.CommitIntentType", [
          {
            no: 0,
            name: "COMMIT_INTENT_TYPE_UNSPECIFIED",
          },
          {
            no: 1,
            name: "COMMIT_INTENT_TYPE_COMMIT_MESSAGE",
          },
        ]),
        ((q = nu || (nu = {}))[(q.UNSPECIFIED = 0)] = "UNSPECIFIED"),
        (q[(q.L4 = 1)] = "L4"),
        (q[(q.T4 = 2)] = "T4"),
        (q[(q.A10 = 3)] = "A10"),
        (q[(q.A100 = 4)] = "A100"),
        (q[(q.V100 = 5)] = "V100"),
        (q[(q.A5000 = 6)] = "A5000"),
        n7.w.util.setEnumType(nu, "exa.codeium_common_pb.GpuType", [
          {
            no: 0,
            name: "GPU_TYPE_UNSPECIFIED",
          },
          {
            no: 1,
            name: "GPU_TYPE_L4",
          },
          {
            no: 2,
            name: "GPU_TYPE_T4",
          },
          {
            no: 3,
            name: "GPU_TYPE_A10",
          },
          {
            no: 4,
            name: "GPU_TYPE_A100",
          },
          {
            no: 5,
            name: "GPU_TYPE_V100",
          },
          {
            no: 6,
            name: "GPU_TYPE_A5000",
          },
        ]),
        ((b = nl || (nl = {}))[(b.UNSPECIFIED = 0)] = "UNSPECIFIED"),
        (b[(b.INCLUDE = 1)] = "INCLUDE"),
        (b[(b.EXCLUDE = 2)] = "EXCLUDE"),
        n7.w.util.setEnumType(
          nl,
          "exa.codeium_common_pb.ContextInclusionType",
          [
            {
              no: 0,
              name: "CONTEXT_INCLUSION_TYPE_UNSPECIFIED",
            },
            {
              no: 1,
              name: "CONTEXT_INCLUSION_TYPE_INCLUDE",
            },
            {
              no: 2,
              name: "CONTEXT_INCLUSION_TYPE_EXCLUDE",
            },
          ]
        ),
        ((v = nc || (nc = {}))[(v.UNSPECIFIED = 0)] = "UNSPECIFIED"),
        (v[(v.AUTO = 1)] = "AUTO"),
        (v[(v.LIGHT = 2)] = "LIGHT"),
        (v[(v.DARK = 3)] = "DARK"),
        n7.w.util.setEnumType(nc, "exa.codeium_common_pb.ThemePreference", [
          {
            no: 0,
            name: "THEME_PREFERENCE_UNSPECIFIED",
          },
          {
            no: 1,
            name: "THEME_PREFERENCE_AUTO",
          },
          {
            no: 2,
            name: "THEME_PREFERENCE_LIGHT",
          },
          {
            no: 3,
            name: "THEME_PREFERENCE_DARK",
          },
        ]),
        ((H = nT || (nT = {}))[(H.UNSPECIFIED = 0)] = "UNSPECIFIED"),
        (H[(H.SMALL = 1)] = "SMALL"),
        (H[(H.DEFAULT = 2)] = "DEFAULT"),
        (H[(H.LARGE = 3)] = "LARGE"),
        n7.w.util.setEnumType(nT, "exa.codeium_common_pb.FontSize", [
          {
            no: 0,
            name: "FONT_SIZE_UNSPECIFIED",
          },
          {
            no: 1,
            name: "FONT_SIZE_SMALL",
          },
          {
            no: 2,
            name: "FONT_SIZE_DEFAULT",
          },
          {
            no: 3,
            name: "FONT_SIZE_LARGE",
          },
        ]),
        ((V = nd || (nd = {}))[(V.UNSPECIFIED = 0)] = "UNSPECIFIED"),
        (V[(V.SLOW = 1)] = "SLOW"),
        (V[(V.DEFAULT = 2)] = "DEFAULT"),
        (V[(V.FAST = 3)] = "FAST"),
        n7.w.util.setEnumType(nd, "exa.codeium_common_pb.AutocompleteSpeed", [
          {
            no: 0,
            name: "AUTOCOMPLETE_SPEED_UNSPECIFIED",
          },
          {
            no: 1,
            name: "AUTOCOMPLETE_SPEED_SLOW",
          },
          {
            no: 2,
            name: "AUTOCOMPLETE_SPEED_DEFAULT",
          },
          {
            no: 3,
            name: "AUTOCOMPLETE_SPEED_FAST",
          },
        ]),
        ((W = nS || (nS = {}))[(W.UNSPECIFIED = 0)] = "UNSPECIFIED"),
        (W[(W.OFF = 1)] = "OFF"),
        (W[(W.AUTO = 2)] = "AUTO"),
        (W[(W.EAGER = 3)] = "EAGER"),
        n7.w.util.setEnumType(
          nS,
          "exa.codeium_common_pb.CascadeCommandsAutoExecution",
          [
            {
              no: 0,
              name: "CASCADE_COMMANDS_AUTO_EXECUTION_UNSPECIFIED",
            },
            {
              no: 1,
              name: "CASCADE_COMMANDS_AUTO_EXECUTION_OFF",
            },
            {
              no: 2,
              name: "CASCADE_COMMANDS_AUTO_EXECUTION_AUTO",
            },
            {
              no: 3,
              name: "CASCADE_COMMANDS_AUTO_EXECUTION_EAGER",
            },
          ]
        ),
        ((K = nA || (nA = {}))[(K.UNSPECIFIED = 0)] = "UNSPECIFIED"),
        (K[(K.CHAT = 1)] = "CHAT"),
        (K[(K.PROFILE = 2)] = "PROFILE"),
        (K[(K.BRAIN = 4)] = "BRAIN"),
        (K[(K.COMMAND = 5)] = "COMMAND"),
        (K[(K.CORTEX = 6)] = "CORTEX"),
        (K[(K.DEBUG = 7)] = "DEBUG"),
        n7.w.util.setEnumType(nA, "exa.codeium_common_pb.ExtensionPanelTab", [
          {
            no: 0,
            name: "EXTENSION_PANEL_TAB_UNSPECIFIED",
          },
          {
            no: 1,
            name: "EXTENSION_PANEL_TAB_CHAT",
          },
          {
            no: 2,
            name: "EXTENSION_PANEL_TAB_PROFILE",
          },
          {
            no: 4,
            name: "EXTENSION_PANEL_TAB_BRAIN",
          },
          {
            no: 5,
            name: "EXTENSION_PANEL_TAB_COMMAND",
          },
          {
            no: 6,
            name: "EXTENSION_PANEL_TAB_CORTEX",
          },
          {
            no: 7,
            name: "EXTENSION_PANEL_TAB_DEBUG",
          },
        ]),
        ((X = nO || (nO = {}))[(X.UNSPECIFIED = 0)] = "UNSPECIFIED"),
        (X[(X.ENABLED = 1)] = "ENABLED"),
        (X[(X.DISABLED = 2)] = "DISABLED"),
        n7.w.util.setEnumType(
          nO,
          "exa.codeium_common_pb.RememberLastModelSelection",
          [
            {
              no: 0,
              name: "REMEMBER_LAST_MODEL_SELECTION_UNSPECIFIED",
            },
            {
              no: 1,
              name: "REMEMBER_LAST_MODEL_SELECTION_ENABLED",
            },
            {
              no: 2,
              name: "REMEMBER_LAST_MODEL_SELECTION_DISABLED",
            },
          ]
        ),
        ((Y = nN || (nN = {}))[(Y.CASCADE_NUX_EVENT_UNSPECIFIED = 0)] =
          "CASCADE_NUX_EVENT_UNSPECIFIED"),
        (Y[(Y.CASCADE_NUX_EVENT_DIFF_OVERVIEW = 1)] =
          "CASCADE_NUX_EVENT_DIFF_OVERVIEW"),
        (Y[(Y.CASCADE_NUX_EVENT_WEB_SEARCH = 2)] =
          "CASCADE_NUX_EVENT_WEB_SEARCH"),
        (Y[(Y.CASCADE_NUX_EVENT_NEW_MODELS_WAVE2 = 3)] =
          "CASCADE_NUX_EVENT_NEW_MODELS_WAVE2"),
        (Y[(Y.CASCADE_NUX_EVENT_TOOL_CALL = 4)] =
          "CASCADE_NUX_EVENT_TOOL_CALL"),
        (Y[(Y.CASCADE_NUX_EVENT_MODEL_SELECTOR_NUX = 5)] =
          "CASCADE_NUX_EVENT_MODEL_SELECTOR_NUX"),
        (Y[(Y.CASCADE_NUX_EVENT_TOOL_CALL_PRICING_NUX = 6)] =
          "CASCADE_NUX_EVENT_TOOL_CALL_PRICING_NUX"),
        (Y[(Y.CASCADE_NUX_EVENT_WRITE_CHAT_MODE = 7)] =
          "CASCADE_NUX_EVENT_WRITE_CHAT_MODE"),
        (Y[(Y.CASCADE_NUX_EVENT_REVERT_STEP = 8)] =
          "CASCADE_NUX_EVENT_REVERT_STEP"),
        (Y[(Y.CASCADE_NUX_EVENT_RULES = 9)] = "CASCADE_NUX_EVENT_RULES"),
        (Y[(Y.CASCADE_NUX_EVENT_WEB_MENTION = 10)] =
          "CASCADE_NUX_EVENT_WEB_MENTION"),
        (Y[(Y.CASCADE_NUX_EVENT_BACKGROUND_CASCADE = 11)] =
          "CASCADE_NUX_EVENT_BACKGROUND_CASCADE"),
        (Y[(Y.CASCADE_NUX_EVENT_ANTHROPIC_API_PRICING = 12)] =
          "CASCADE_NUX_EVENT_ANTHROPIC_API_PRICING"),
        (Y[(Y.CASCADE_NUX_EVENT_PLAN_MODE = 13)] =
          "CASCADE_NUX_EVENT_PLAN_MODE"),
        (Y[(Y.CASCADE_NUX_EVENT_OPEN_BROWSER_URL = 14)] =
          "CASCADE_NUX_EVENT_OPEN_BROWSER_URL"),
        n7.w.util.setEnumType(nN, "exa.codeium_common_pb.CascadeNUXEvent", [
          {
            no: 0,
            name: "CASCADE_NUX_EVENT_UNSPECIFIED",
          },
          {
            no: 1,
            name: "CASCADE_NUX_EVENT_DIFF_OVERVIEW",
          },
          {
            no: 2,
            name: "CASCADE_NUX_EVENT_WEB_SEARCH",
          },
          {
            no: 3,
            name: "CASCADE_NUX_EVENT_NEW_MODELS_WAVE2",
          },
          {
            no: 4,
            name: "CASCADE_NUX_EVENT_TOOL_CALL",
          },
          {
            no: 5,
            name: "CASCADE_NUX_EVENT_MODEL_SELECTOR_NUX",
          },
          {
            no: 6,
            name: "CASCADE_NUX_EVENT_TOOL_CALL_PRICING_NUX",
          },
          {
            no: 7,
            name: "CASCADE_NUX_EVENT_WRITE_CHAT_MODE",
          },
          {
            no: 8,
            name: "CASCADE_NUX_EVENT_REVERT_STEP",
          },
          {
            no: 9,
            name: "CASCADE_NUX_EVENT_RULES",
          },
          {
            no: 10,
            name: "CASCADE_NUX_EVENT_WEB_MENTION",
          },
          {
            no: 11,
            name: "CASCADE_NUX_EVENT_BACKGROUND_CASCADE",
          },
          {
            no: 12,
            name: "CASCADE_NUX_EVENT_ANTHROPIC_API_PRICING",
          },
          {
            no: 13,
            name: "CASCADE_NUX_EVENT_PLAN_MODE",
          },
          {
            no: 14,
            name: "CASCADE_NUX_EVENT_OPEN_BROWSER_URL",
          },
        ]),
        ((Q = nC || (nC = {}))[(Q.USER_NUX_EVENT_UNSPECIFIED = 0)] =
          "USER_NUX_EVENT_UNSPECIFIED"),
        (Q[(Q.USER_NUX_EVENT_DISMISS_WINDSURF_CROSS_SELL = 1)] =
          "USER_NUX_EVENT_DISMISS_WINDSURF_CROSS_SELL"),
        n7.w.util.setEnumType(nC, "exa.codeium_common_pb.UserNUXEvent", [
          {
            no: 0,
            name: "USER_NUX_EVENT_UNSPECIFIED",
          },
          {
            no: 1,
            name: "USER_NUX_EVENT_DISMISS_WINDSURF_CROSS_SELL",
          },
        ]),
        ((z = nf || (nf = {}))[(z.UNSPECIFIED = 0)] = "UNSPECIFIED"),
        (z[(z.DEFAULT = 1)] = "DEFAULT"),
        (z[(z.READ_ONLY = 2)] = "READ_ONLY"),
        (z[(z.NO_TOOL = 3)] = "NO_TOOL"),
        n7.w.util.setEnumType(
          nf,
          "exa.codeium_common_pb.ConversationalPlannerMode",
          [
            {
              no: 0,
              name: "CONVERSATIONAL_PLANNER_MODE_UNSPECIFIED",
            },
            {
              no: 1,
              name: "CONVERSATIONAL_PLANNER_MODE_DEFAULT",
            },
            {
              no: 2,
              name: "CONVERSATIONAL_PLANNER_MODE_READ_ONLY",
            },
            {
              no: 3,
              name: "CONVERSATIONAL_PLANNER_MODE_NO_TOOL",
            },
          ]
        ),
        ((j = nw || (nw = {}))[(j.UNSPECIFIED = 0)] = "UNSPECIFIED"),
        (j[(j.ENABLED = 1)] = "ENABLED"),
        (j[(j.DISABLED = 2)] = "DISABLED"),
        n7.w.util.setEnumType(nw, "exa.codeium_common_pb.TabToJump", [
          {
            no: 0,
            name: "TAB_TO_JUMP_UNSPECIFIED",
          },
          {
            no: 1,
            name: "TAB_TO_JUMP_ENABLED",
          },
          {
            no: 2,
            name: "TAB_TO_JUMP_DISABLED",
          },
        ]),
        ((Z = nI || (nI = {}))[(Z.UNSPECIFIED = 0)] = "UNSPECIFIED"),
        (Z[(Z.ENABLED = 1)] = "ENABLED"),
        (Z[(Z.DISABLED = 2)] = "DISABLED"),
        n7.w.util.setEnumType(
          nI,
          "exa.codeium_common_pb.CascadeWebSearchTool",
          [
            {
              no: 0,
              name: "CASCADE_WEB_SEARCH_TOOL_UNSPECIFIED",
            },
            {
              no: 1,
              name: "CASCADE_WEB_SEARCH_TOOL_ENABLED",
            },
            {
              no: 2,
              name: "CASCADE_WEB_SEARCH_TOOL_DISABLED",
            },
          ]
        ),
        (($ = nR || (nR = {}))[($.UNSPECIFIED = 0)] = "UNSPECIFIED"),
        ($[($.ENABLED = 1)] = "ENABLED"),
        ($[($.DISABLED = 2)] = "DISABLED"),
        ($[($.ONLY = 3)] = "ONLY"),
        n7.w.util.setEnumType(
          nR,
          "exa.codeium_common_pb.CascadeRunExtensionCode",
          [
            {
              no: 0,
              name: "CASCADE_RUN_EXTENSION_CODE_UNSPECIFIED",
            },
            {
              no: 1,
              name: "CASCADE_RUN_EXTENSION_CODE_ENABLED",
            },
            {
              no: 2,
              name: "CASCADE_RUN_EXTENSION_CODE_DISABLED",
            },
            {
              no: 3,
              name: "CASCADE_RUN_EXTENSION_CODE_ONLY",
            },
          ]
        ),
        ((ee = nL || (nL = {}))[(ee.UNSPECIFIED = 0)] = "UNSPECIFIED"),
        (ee[(ee.ENABLED = 1)] = "ENABLED"),
        (ee[(ee.DISABLED = 2)] = "DISABLED"),
        n7.w.util.setEnumType(
          nL,
          "exa.codeium_common_pb.CascadeInputAutocomplete",
          [
            {
              no: 0,
              name: "CASCADE_INPUT_AUTOCOMPLETE_UNSPECIFIED",
            },
            {
              no: 1,
              name: "CASCADE_INPUT_AUTOCOMPLETE_ENABLED",
            },
            {
              no: 2,
              name: "CASCADE_INPUT_AUTOCOMPLETE_DISABLED",
            },
          ]
        ),
        ((en = np || (np = {}))[(en.UNSPECIFIED = 0)] = "UNSPECIFIED"),
        (en[(en.ENABLED = 1)] = "ENABLED"),
        (en[(en.DISABLED = 2)] = "DISABLED"),
        n7.w.util.setEnumType(
          np,
          "exa.codeium_common_pb.CommandPopupAutocomplete",
          [
            {
              no: 0,
              name: "COMMAND_POPUP_AUTOCOMPLETE_UNSPECIFIED",
            },
            {
              no: 1,
              name: "COMMAND_POPUP_AUTOCOMPLETE_ENABLED",
            },
            {
              no: 2,
              name: "COMMAND_POPUP_AUTOCOMPLETE_DISABLED",
            },
          ]
        ),
        ((et = nD || (nD = {}))[(et.UNSPECIFIED = 0)] = "UNSPECIFIED"),
        (et[(et.ENABLED = 1)] = "ENABLED"),
        (et[(et.DISABLED = 2)] = "DISABLED"),
        (et[(et.MODEL_DECIDES = 3)] = "MODEL_DECIDES"),
        n7.w.util.setEnumType(
          nD,
          "exa.codeium_common_pb.CascadeRunExtensionCodeAutoRun",
          [
            {
              no: 0,
              name: "CASCADE_RUN_EXTENSION_CODE_AUTO_RUN_UNSPECIFIED",
            },
            {
              no: 1,
              name: "CASCADE_RUN_EXTENSION_CODE_AUTO_RUN_ENABLED",
            },
            {
              no: 2,
              name: "CASCADE_RUN_EXTENSION_CODE_AUTO_RUN_DISABLED",
            },
            {
              no: 3,
              name: "CASCADE_RUN_EXTENSION_CODE_AUTO_RUN_MODEL_DECIDES",
            },
          ]
        ),
        ((ea = nP || (nP = {}))[(ea.UNSPECIFIED = 0)] = "UNSPECIFIED"),
        (ea[(ea.CASCADE_BROWSER = 1)] = "CASCADE_BROWSER"),
        (ea[(ea.CASCADE_WEB_AT_MENTION = 2)] = "CASCADE_WEB_AT_MENTION"),
        (ea[(ea.CASCADE_REVERT_TO_STEP = 3)] = "CASCADE_REVERT_TO_STEP"),
        (ea[(ea.CASCADE_CLICK_MODEL_SELECTOR = 4)] =
          "CASCADE_CLICK_MODEL_SELECTOR"),
        (ea[(ea.CASCADE_MESSAGE_FEEDBACK = 5)] = "CASCADE_MESSAGE_FEEDBACK"),
        n7.w.util.setEnumType(nP, "exa.codeium_common_pb.FeatureUsageType", [
          {
            no: 0,
            name: "FEATURE_USAGE_TYPE_UNSPECIFIED",
          },
          {
            no: 1,
            name: "FEATURE_USAGE_TYPE_CASCADE_BROWSER",
          },
          {
            no: 2,
            name: "FEATURE_USAGE_TYPE_CASCADE_WEB_AT_MENTION",
          },
          {
            no: 3,
            name: "FEATURE_USAGE_TYPE_CASCADE_REVERT_TO_STEP",
          },
          {
            no: 4,
            name: "FEATURE_USAGE_TYPE_CASCADE_CLICK_MODEL_SELECTOR",
          },
          {
            no: 5,
            name: "FEATURE_USAGE_TYPE_CASCADE_MESSAGE_FEEDBACK",
          },
        ]),
        ((er = nM || (nM = {}))[(er.UNSPECIFIED = 0)] = "UNSPECIFIED"),
        (er[(er.ON = 1)] = "ON"),
        (er[(er.OFF = 2)] = "OFF"),
        n7.w.util.setEnumType(nM, "exa.codeium_common_pb.PlanMode", [
          {
            no: 0,
            name: "PLAN_MODE_UNSPECIFIED",
          },
          {
            no: 1,
            name: "PLAN_MODE_ON",
          },
          {
            no: 2,
            name: "PLAN_MODE_OFF",
          },
        ]),
        ((ei = ny || (ny = {}))[(ei.UNSPECIFIED = 0)] = "UNSPECIFIED"),
        (ei[(ei.ENABLED = 1)] = "ENABLED"),
        (ei[(ei.DISABLED = 2)] = "DISABLED"),
        n7.w.util.setEnumType(
          ny,
          "exa.codeium_common_pb.AutoContinueOnMaxGeneratorInvocations",
          [
            {
              no: 0,
              name: "AUTO_CONTINUE_ON_MAX_GENERATOR_INVOCATIONS_UNSPECIFIED",
            },
            {
              no: 1,
              name: "AUTO_CONTINUE_ON_MAX_GENERATOR_INVOCATIONS_ENABLED",
            },
            {
              no: 2,
              name: "AUTO_CONTINUE_ON_MAX_GENERATOR_INVOCATIONS_DISABLED",
            },
          ]
        ),
        ((es = nh || (nh = {}))[(es.CASCADE_NUX_LOCATION_UNSPECIFIED = 0)] =
          "CASCADE_NUX_LOCATION_UNSPECIFIED"),
        (es[(es.CASCADE_NUX_LOCATION_CASCADE_INPUT = 1)] =
          "CASCADE_NUX_LOCATION_CASCADE_INPUT"),
        (es[(es.CASCADE_NUX_LOCATION_MODEL_SELECTOR = 2)] =
          "CASCADE_NUX_LOCATION_MODEL_SELECTOR"),
        (es[(es.CASCADE_NUX_LOCATION_RULES_TAB = 4)] =
          "CASCADE_NUX_LOCATION_RULES_TAB"),
        (es[(es.CASCADE_NUX_LOCATION_REVERT_STEP = 6)] =
          "CASCADE_NUX_LOCATION_REVERT_STEP"),
        (es[(es.CASCADE_NUX_LOCATION_PLAN_MODE = 7)] =
          "CASCADE_NUX_LOCATION_PLAN_MODE"),
        (es[(es.CASCADE_NUX_LOCATION_WRITE_CHAT_MODE = 8)] =
          "CASCADE_NUX_LOCATION_WRITE_CHAT_MODE"),
        (es[(es.CASCADE_NUX_LOCATION_TOOLBAR = 9)] =
          "CASCADE_NUX_LOCATION_TOOLBAR"),
        n7.w.util.setEnumType(nh, "exa.codeium_common_pb.CascadeNUXLocation", [
          {
            no: 0,
            name: "CASCADE_NUX_LOCATION_UNSPECIFIED",
          },
          {
            no: 1,
            name: "CASCADE_NUX_LOCATION_CASCADE_INPUT",
          },
          {
            no: 2,
            name: "CASCADE_NUX_LOCATION_MODEL_SELECTOR",
          },
          {
            no: 4,
            name: "CASCADE_NUX_LOCATION_RULES_TAB",
          },
          {
            no: 6,
            name: "CASCADE_NUX_LOCATION_REVERT_STEP",
          },
          {
            no: 7,
            name: "CASCADE_NUX_LOCATION_PLAN_MODE",
          },
          {
            no: 8,
            name: "CASCADE_NUX_LOCATION_WRITE_CHAT_MODE",
          },
          {
            no: 9,
            name: "CASCADE_NUX_LOCATION_TOOLBAR",
          },
        ]),
        ((eo = nU || (nU = {}))[(eo.CASCADE_NUX_ICON_UNSPECIFIED = 0)] =
          "CASCADE_NUX_ICON_UNSPECIFIED"),
        (eo[(eo.CASCADE_NUX_ICON_WEB_SEARCH = 1)] =
          "CASCADE_NUX_ICON_WEB_SEARCH"),
        (eo[(eo.CASCADE_NUX_ICON_WINDSURF_BROWSER = 2)] =
          "CASCADE_NUX_ICON_WINDSURF_BROWSER"),
        n7.w.util.setEnumType(nU, "exa.codeium_common_pb.CascadeNUXIcon", [
          {
            no: 0,
            name: "CASCADE_NUX_ICON_UNSPECIFIED",
          },
          {
            no: 1,
            name: "CASCADE_NUX_ICON_WEB_SEARCH",
          },
          {
            no: 2,
            name: "CASCADE_NUX_ICON_WINDSURF_BROWSER",
          },
        ]),
        ((e_ = ng || (ng = {}))[(e_.CASCADE_NUX_TRIGGER_UNSPECIFIED = 0)] =
          "CASCADE_NUX_TRIGGER_UNSPECIFIED"),
        (e_[(e_.CASCADE_NUX_TRIGGER_PRODUCED_CODE_DIFF = 1)] =
          "CASCADE_NUX_TRIGGER_PRODUCED_CODE_DIFF"),
        (e_[(e_.CASCADE_NUX_TRIGGER_OPEN_BROWSER_URL = 3)] =
          "CASCADE_NUX_TRIGGER_OPEN_BROWSER_URL"),
        (e_[(e_.CASCADE_NUX_TRIGGER_WEB_SEARCH = 4)] =
          "CASCADE_NUX_TRIGGER_WEB_SEARCH"),
        n7.w.util.setEnumType(ng, "exa.codeium_common_pb.CascadeNUXTrigger", [
          {
            no: 0,
            name: "CASCADE_NUX_TRIGGER_UNSPECIFIED",
          },
          {
            no: 1,
            name: "CASCADE_NUX_TRIGGER_PRODUCED_CODE_DIFF",
          },
          {
            no: 3,
            name: "CASCADE_NUX_TRIGGER_OPEN_BROWSER_URL",
          },
          {
            no: 4,
            name: "CASCADE_NUX_TRIGGER_WEB_SEARCH",
          },
        ]),
        ((em = nJ || (nJ = {}))[(em.UNSPECIFIED = 0)] = "UNSPECIFIED"),
        (em[(em.ENABLED = 1)] = "ENABLED"),
        (em[(em.DISABLED = 2)] = "DISABLED"),
        n7.w.util.setEnumType(nJ, "exa.codeium_common_pb.AnnotationsConfig", [
          {
            no: 0,
            name: "ANNOTATIONS_CONFIG_UNSPECIFIED",
          },
          {
            no: 1,
            name: "ANNOTATIONS_CONFIG_ENABLED",
          },
          {
            no: 2,
            name: "ANNOTATIONS_CONFIG_DISABLED",
          },
        ]),
        ((eE = nk || (nk = {}))[(eE.UNSPECIFIED = 0)] = "UNSPECIFIED"),
        (eE[(eE.ENABLED = 1)] = "ENABLED"),
        (eE[(eE.DISABLED = 2)] = "DISABLED"),
        n7.w.util.setEnumType(
          nk,
          "exa.codeium_common_pb.BrowserExperimentalFeaturesConfig",
          [
            {
              no: 0,
              name: "BROWSER_EXPERIMENTAL_FEATURES_CONFIG_UNSPECIFIED",
            },
            {
              no: 1,
              name: "BROWSER_EXPERIMENTAL_FEATURES_CONFIG_ENABLED",
            },
            {
              no: 2,
              name: "BROWSER_EXPERIMENTAL_FEATURES_CONFIG_DISABLED",
            },
          ]
        ),
        ((eu = nB || (nB = {}))[(eu.UNSPECIFIED = 0)] = "UNSPECIFIED"),
        (eu[(eu.COMPLETION = 1)] = "COMPLETION"),
        (eu[(eu.CHAT = 2)] = "CHAT"),
        (eu[(eu.EMBED = 3)] = "EMBED"),
        (eu[(eu.QUERY = 4)] = "QUERY"),
        n7.w.util.setEnumType(nB, "exa.codeium_common_pb.ModelType", [
          {
            no: 0,
            name: "MODEL_TYPE_UNSPECIFIED",
          },
          {
            no: 1,
            name: "MODEL_TYPE_COMPLETION",
          },
          {
            no: 2,
            name: "MODEL_TYPE_CHAT",
          },
          {
            no: 3,
            name: "MODEL_TYPE_EMBED",
          },
          {
            no: 4,
            name: "MODEL_TYPE_QUERY",
          },
        ]),
        ((el = nG || (nG = {}))[(el.API_PROVIDER_UNSPECIFIED = 0)] =
          "API_PROVIDER_UNSPECIFIED"),
        (el[(el.API_PROVIDER_INTERNAL = 1)] = "API_PROVIDER_INTERNAL"),
        (el[(el.API_PROVIDER_OPENAI = 2)] = "API_PROVIDER_OPENAI"),
        (el[(el.API_PROVIDER_GOOGLE_VERTEX = 3)] =
          "API_PROVIDER_GOOGLE_VERTEX"),
        (el[(el.API_PROVIDER_ANTHROPIC = 4)] = "API_PROVIDER_ANTHROPIC"),
        (el[(el.API_PROVIDER_VLLM = 5)] = "API_PROVIDER_VLLM"),
        (el[(el.API_PROVIDER_TOGETHER_AI = 6)] = "API_PROVIDER_TOGETHER_AI"),
        (el[(el.API_PROVIDER_HUGGING_FACE = 7)] = "API_PROVIDER_HUGGING_FACE"),
        (el[(el.API_PROVIDER_NOMIC = 8)] = "API_PROVIDER_NOMIC"),
        (el[(el.API_PROVIDER_TEI = 9)] = "API_PROVIDER_TEI"),
        (el[(el.API_PROVIDER_OPENAI_COMPATIBLE_EXTERNAL = 10)] =
          "API_PROVIDER_OPENAI_COMPATIBLE_EXTERNAL"),
        (el[(el.API_PROVIDER_ANTHROPIC_COMPATIBLE_EXTERNAL = 11)] =
          "API_PROVIDER_ANTHROPIC_COMPATIBLE_EXTERNAL"),
        (el[(el.API_PROVIDER_VERTEX_COMPATIBLE_EXTERNAL = 12)] =
          "API_PROVIDER_VERTEX_COMPATIBLE_EXTERNAL"),
        (el[(el.API_PROVIDER_BEDROCK_COMPATIBLE_EXTERNAL = 13)] =
          "API_PROVIDER_BEDROCK_COMPATIBLE_EXTERNAL"),
        (el[(el.API_PROVIDER_AZURE_COMPATIBLE_EXTERNAL = 14)] =
          "API_PROVIDER_AZURE_COMPATIBLE_EXTERNAL"),
        (el[(el.API_PROVIDER_ANTHROPIC_BEDROCK = 15)] =
          "API_PROVIDER_ANTHROPIC_BEDROCK"),
        (el[(el.API_PROVIDER_FIREWORKS = 16)] = "API_PROVIDER_FIREWORKS"),
        (el[(el.API_PROVIDER_OPEN_ROUTER = 17)] = "API_PROVIDER_OPEN_ROUTER"),
        (el[(el.API_PROVIDER_XAI = 18)] = "API_PROVIDER_XAI"),
        (el[(el.API_PROVIDER_ANTHROPIC_BYOK = 20)] =
          "API_PROVIDER_ANTHROPIC_BYOK"),
        (el[(el.API_PROVIDER_CEREBRAS = 21)] = "API_PROVIDER_CEREBRAS"),
        (el[(el.API_PROVIDER_XAI_BYOK = 22)] = "API_PROVIDER_XAI_BYOK"),
        (el[(el.API_PROVIDER_GEMINI_OPENAI = 23)] =
          "API_PROVIDER_GEMINI_OPENAI"),
        (el[(el.API_PROVIDER_GOOGLE_GEMINI = 24)] =
          "API_PROVIDER_GOOGLE_GEMINI"),
        (el[(el.API_PROVIDER_GOOGLE_GENAI_VERTEX = 25)] =
          "API_PROVIDER_GOOGLE_GENAI_VERTEX"),
        (el[(el.API_PROVIDER_ANTHROPIC_VERTEX = 26)] =
          "API_PROVIDER_ANTHROPIC_VERTEX"),
        (el[(el.API_PROVIDER_DATABRICKS = 27)] = "API_PROVIDER_DATABRICKS"),
        (el[(el.API_PROVIDER_OPEN_ROUTER_BYOK = 28)] =
          "API_PROVIDER_OPEN_ROUTER_BYOK"),
        (el[(el.API_PROVIDER_ANTHROPIC_DEVIN = 29)] =
          "API_PROVIDER_ANTHROPIC_DEVIN"),
        (el[(el.API_PROVIDER_FIREWORKS_DEVIN = 30)] =
          "API_PROVIDER_FIREWORKS_DEVIN"),
        (el[(el.API_PROVIDER_GROQ = 31)] = "API_PROVIDER_GROQ"),
        (el[(el.API_PROVIDER_OPENAI_DEVIN = 32)] = "API_PROVIDER_OPENAI_DEVIN"),
        (el[(el.API_PROVIDER_LLAMA_FT_DEEPWIKI = 33)] =
          "API_PROVIDER_LLAMA_FT_DEEPWIKI"),
        (el[(el.API_PROVIDER_XAI_INTERNAL = 34)] = "API_PROVIDER_XAI_INTERNAL"),
        n7.w.util.setEnumType(nG, "exa.codeium_common_pb.APIProvider", [
          {
            no: 0,
            name: "API_PROVIDER_UNSPECIFIED",
          },
          {
            no: 1,
            name: "API_PROVIDER_INTERNAL",
          },
          {
            no: 2,
            name: "API_PROVIDER_OPENAI",
          },
          {
            no: 3,
            name: "API_PROVIDER_GOOGLE_VERTEX",
          },
          {
            no: 4,
            name: "API_PROVIDER_ANTHROPIC",
          },
          {
            no: 5,
            name: "API_PROVIDER_VLLM",
          },
          {
            no: 6,
            name: "API_PROVIDER_TOGETHER_AI",
          },
          {
            no: 7,
            name: "API_PROVIDER_HUGGING_FACE",
          },
          {
            no: 8,
            name: "API_PROVIDER_NOMIC",
          },
          {
            no: 9,
            name: "API_PROVIDER_TEI",
          },
          {
            no: 10,
            name: "API_PROVIDER_OPENAI_COMPATIBLE_EXTERNAL",
          },
          {
            no: 11,
            name: "API_PROVIDER_ANTHROPIC_COMPATIBLE_EXTERNAL",
          },
          {
            no: 12,
            name: "API_PROVIDER_VERTEX_COMPATIBLE_EXTERNAL",
          },
          {
            no: 13,
            name: "API_PROVIDER_BEDROCK_COMPATIBLE_EXTERNAL",
          },
          {
            no: 14,
            name: "API_PROVIDER_AZURE_COMPATIBLE_EXTERNAL",
          },
          {
            no: 15,
            name: "API_PROVIDER_ANTHROPIC_BEDROCK",
          },
          {
            no: 16,
            name: "API_PROVIDER_FIREWORKS",
          },
          {
            no: 17,
            name: "API_PROVIDER_OPEN_ROUTER",
          },
          {
            no: 18,
            name: "API_PROVIDER_XAI",
          },
          {
            no: 20,
            name: "API_PROVIDER_ANTHROPIC_BYOK",
          },
          {
            no: 21,
            name: "API_PROVIDER_CEREBRAS",
          },
          {
            no: 22,
            name: "API_PROVIDER_XAI_BYOK",
          },
          {
            no: 23,
            name: "API_PROVIDER_GEMINI_OPENAI",
          },
          {
            no: 24,
            name: "API_PROVIDER_GOOGLE_GEMINI",
          },
          {
            no: 25,
            name: "API_PROVIDER_GOOGLE_GENAI_VERTEX",
          },
          {
            no: 26,
            name: "API_PROVIDER_ANTHROPIC_VERTEX",
          },
          {
            no: 27,
            name: "API_PROVIDER_DATABRICKS",
          },
          {
            no: 28,
            name: "API_PROVIDER_OPEN_ROUTER_BYOK",
          },
          {
            no: 29,
            name: "API_PROVIDER_ANTHROPIC_DEVIN",
          },
          {
            no: 30,
            name: "API_PROVIDER_FIREWORKS_DEVIN",
          },
          {
            no: 31,
            name: "API_PROVIDER_GROQ",
          },
          {
            no: 32,
            name: "API_PROVIDER_OPENAI_DEVIN",
          },
          {
            no: 33,
            name: "API_PROVIDER_LLAMA_FT_DEEPWIKI",
          },
          {
            no: 34,
            name: "API_PROVIDER_XAI_INTERNAL",
          },
        ]),
        ((ec = nF || (nF = {}))[(ec.UNSPECIFIED = 0)] = "UNSPECIFIED"),
        (ec[(ec.INFO = 1)] = "INFO"),
        (ec[(ec.WARNING = 2)] = "WARNING"),
        n7.w.util.setEnumType(nF, "exa.codeium_common_pb.ModelStatus", [
          {
            no: 0,
            name: "MODEL_STATUS_UNSPECIFIED",
          },
          {
            no: 1,
            name: "MODEL_STATUS_INFO",
          },
          {
            no: 2,
            name: "MODEL_STATUS_WARNING",
          },
        ]),
        ((eT = nx || (nx = {}))[(eT.UNSPECIFIED = 0)] = "UNSPECIFIED"),
        (eT[(eT.BASE = 1)] = "BASE"),
        (eT[(eT.CODEIUM = 2)] = "CODEIUM"),
        (eT[(eT.USER = 3)] = "USER"),
        (eT[(eT.USER_LARGE = 4)] = "USER_LARGE"),
        (eT[(eT.UNKNOWN = 5)] = "UNKNOWN"),
        n7.w.util.setEnumType(nx, "exa.codeium_common_pb.CodeSource", [
          {
            no: 0,
            name: "CODE_SOURCE_UNSPECIFIED",
          },
          {
            no: 1,
            name: "CODE_SOURCE_BASE",
          },
          {
            no: 2,
            name: "CODE_SOURCE_CODEIUM",
          },
          {
            no: 3,
            name: "CODE_SOURCE_USER",
          },
          {
            no: 4,
            name: "CODE_SOURCE_USER_LARGE",
          },
          {
            no: 5,
            name: "CODE_SOURCE_UNKNOWN",
          },
        ]),
        ((ed = nq || (nq = {}))[(ed.UNSPECIFIED = 0)] = "UNSPECIFIED"),
        (ed[(ed.SLACK_MESSAGE = 1)] = "SLACK_MESSAGE"),
        (ed[(ed.SLACK_CHANNEL = 2)] = "SLACK_CHANNEL"),
        (ed[(ed.GITHUB_ISSUE = 3)] = "GITHUB_ISSUE"),
        (ed[(ed.GITHUB_ISSUE_COMMENT = 4)] = "GITHUB_ISSUE_COMMENT"),
        (ed[(ed.GITHUB_REPO = 8)] = "GITHUB_REPO"),
        (ed[(ed.GOOGLE_DRIVE_FILE = 5)] = "GOOGLE_DRIVE_FILE"),
        (ed[(ed.GOOGLE_DRIVE_FOLDER = 6)] = "GOOGLE_DRIVE_FOLDER"),
        (ed[(ed.JIRA_ISSUE = 7)] = "JIRA_ISSUE"),
        (ed[(ed.CCI = 9)] = "CCI"),
        n7.w.util.setEnumType(nq, "exa.codeium_common_pb.DocumentType", [
          {
            no: 0,
            name: "DOCUMENT_TYPE_UNSPECIFIED",
          },
          {
            no: 1,
            name: "DOCUMENT_TYPE_SLACK_MESSAGE",
          },
          {
            no: 2,
            name: "DOCUMENT_TYPE_SLACK_CHANNEL",
          },
          {
            no: 3,
            name: "DOCUMENT_TYPE_GITHUB_ISSUE",
          },
          {
            no: 4,
            name: "DOCUMENT_TYPE_GITHUB_ISSUE_COMMENT",
          },
          {
            no: 8,
            name: "DOCUMENT_TYPE_GITHUB_REPO",
          },
          {
            no: 5,
            name: "DOCUMENT_TYPE_GOOGLE_DRIVE_FILE",
          },
          {
            no: 6,
            name: "DOCUMENT_TYPE_GOOGLE_DRIVE_FOLDER",
          },
          {
            no: 7,
            name: "DOCUMENT_TYPE_JIRA_ISSUE",
          },
          {
            no: 9,
            name: "DOCUMENT_TYPE_CCI",
          },
        ]),
        ((eS = nb || (nb = {}))[(eS.UNSPECIFIED = 0)] = "UNSPECIFIED"),
        (eS[(eS.FILE = 1)] = "FILE"),
        (eS[(eS.DIRECTORY = 2)] = "DIRECTORY"),
        (eS[(eS.REPOSITORY = 3)] = "REPOSITORY"),
        (eS[(eS.CODE_CONTEXT = 4)] = "CODE_CONTEXT"),
        (eS[(eS.CCI_WITH_SUBRANGE = 5)] = "CCI_WITH_SUBRANGE"),
        (eS[(eS.REPOSITORY_PATH = 6)] = "REPOSITORY_PATH"),
        (eS[(eS.SLACK = 7)] = "SLACK"),
        (eS[(eS.GITHUB = 8)] = "GITHUB"),
        (eS[(eS.FILE_LINE_RANGE = 9)] = "FILE_LINE_RANGE"),
        (eS[(eS.TEXT_BLOCK = 10)] = "TEXT_BLOCK"),
        (eS[(eS.JIRA = 11)] = "JIRA"),
        (eS[(eS.GOOGLE_DRIVE = 12)] = "GOOGLE_DRIVE"),
        (eS[(eS.CONSOLE_LOG = 13)] = "CONSOLE_LOG"),
        (eS[(eS.DOM_ELEMENT = 14)] = "DOM_ELEMENT"),
        (eS[(eS.RECIPE = 15)] = "RECIPE"),
        (eS[(eS.KNOWLEDGE = 16)] = "KNOWLEDGE"),
        (eS[(eS.RULE = 17)] = "RULE"),
        (eS[(eS.MCP_RESOURCE = 18)] = "MCP_RESOURCE"),
        (eS[(eS.BROWSER_PAGE = 19)] = "BROWSER_PAGE"),
        (eS[(eS.BROWSER_CODE_BLOCK = 20)] = "BROWSER_CODE_BLOCK"),
        (eS[(eS.BROWSER_TEXT = 21)] = "BROWSER_TEXT"),
        (eS[(eS.CONVERSATION = 22)] = "CONVERSATION"),
        (eS[(eS.USER_ACTIVITY = 23)] = "USER_ACTIVITY"),
        (eS[(eS.TERMINAL = 24)] = "TERMINAL"),
        (eS[(eS.GITHUB_PULL_REQUEST = 25)] = "GITHUB_PULL_REQUEST"),
        n7.w.util.setEnumType(nb, "exa.codeium_common_pb.ContextScopeType", [
          {
            no: 0,
            name: "CONTEXT_SCOPE_TYPE_UNSPECIFIED",
          },
          {
            no: 1,
            name: "CONTEXT_SCOPE_TYPE_FILE",
          },
          {
            no: 2,
            name: "CONTEXT_SCOPE_TYPE_DIRECTORY",
          },
          {
            no: 3,
            name: "CONTEXT_SCOPE_TYPE_REPOSITORY",
          },
          {
            no: 4,
            name: "CONTEXT_SCOPE_TYPE_CODE_CONTEXT",
          },
          {
            no: 5,
            name: "CONTEXT_SCOPE_TYPE_CCI_WITH_SUBRANGE",
          },
          {
            no: 6,
            name: "CONTEXT_SCOPE_TYPE_REPOSITORY_PATH",
          },
          {
            no: 7,
            name: "CONTEXT_SCOPE_TYPE_SLACK",
          },
          {
            no: 8,
            name: "CONTEXT_SCOPE_TYPE_GITHUB",
          },
          {
            no: 9,
            name: "CONTEXT_SCOPE_TYPE_FILE_LINE_RANGE",
          },
          {
            no: 10,
            name: "CONTEXT_SCOPE_TYPE_TEXT_BLOCK",
          },
          {
            no: 11,
            name: "CONTEXT_SCOPE_TYPE_JIRA",
          },
          {
            no: 12,
            name: "CONTEXT_SCOPE_TYPE_GOOGLE_DRIVE",
          },
          {
            no: 13,
            name: "CONTEXT_SCOPE_TYPE_CONSOLE_LOG",
          },
          {
            no: 14,
            name: "CONTEXT_SCOPE_TYPE_DOM_ELEMENT",
          },
          {
            no: 15,
            name: "CONTEXT_SCOPE_TYPE_RECIPE",
          },
          {
            no: 16,
            name: "CONTEXT_SCOPE_TYPE_KNOWLEDGE",
          },
          {
            no: 17,
            name: "CONTEXT_SCOPE_TYPE_RULE",
          },
          {
            no: 18,
            name: "CONTEXT_SCOPE_TYPE_MCP_RESOURCE",
          },
          {
            no: 19,
            name: "CONTEXT_SCOPE_TYPE_BROWSER_PAGE",
          },
          {
            no: 20,
            name: "CONTEXT_SCOPE_TYPE_BROWSER_CODE_BLOCK",
          },
          {
            no: 21,
            name: "CONTEXT_SCOPE_TYPE_BROWSER_TEXT",
          },
          {
            no: 22,
            name: "CONTEXT_SCOPE_TYPE_CONVERSATION",
          },
          {
            no: 23,
            name: "CONTEXT_SCOPE_TYPE_USER_ACTIVITY",
          },
          {
            no: 24,
            name: "CONTEXT_SCOPE_TYPE_TERMINAL",
          },
          {
            no: 25,
            name: "CONTEXT_SCOPE_TYPE_GITHUB_PULL_REQUEST",
          },
        ]),
        ((eA = nv || (nv = {}))[(eA.UNSPECIFIED = 0)] = "UNSPECIFIED"),
        (eA[(eA.DEFAULT = 1)] = "DEFAULT"),
        (eA[(eA.FUNCTION_CODE_LENS = 2)] = "FUNCTION_CODE_LENS"),
        (eA[(eA.CLASS_CODE_LENS = 3)] = "CLASS_CODE_LENS"),
        (eA[(eA.RIGHT_CLICK_REFACTOR = 4)] = "RIGHT_CLICK_REFACTOR"),
        (eA[(eA.SELECTION_HINT_CODE_LENS = 5)] = "SELECTION_HINT_CODE_LENS"),
        (eA[(eA.LINE_HINT_CODE_LENS = 6)] = "LINE_HINT_CODE_LENS"),
        (eA[(eA.PLAN = 7)] = "PLAN"),
        (eA[(eA.FOLLOWUP = 8)] = "FOLLOWUP"),
        (eA[(eA.PASTE_AND_TRANSLATE = 9)] = "PASTE_AND_TRANSLATE"),
        (eA[(eA.SUPERCOMPLETE = 10)] = "SUPERCOMPLETE"),
        (eA[(eA.FUNCTION_DOCSTRING = 11)] = "FUNCTION_DOCSTRING"),
        (eA[(eA.FAST_APPLY = 12)] = "FAST_APPLY"),
        (eA[(eA.TERMINAL = 13)] = "TERMINAL"),
        (eA[(eA.TAB_JUMP = 14)] = "TAB_JUMP"),
        (eA[(eA.TERMINAL_SUGGESTIONS = 15)] = "TERMINAL_SUGGESTIONS"),
        (eA[(eA.CASCADE_CHAT = 16)] = "CASCADE_CHAT"),
        n7.w.util.setEnumType(
          nv,
          "exa.codeium_common_pb.CommandRequestSource",
          [
            {
              no: 0,
              name: "COMMAND_REQUEST_SOURCE_UNSPECIFIED",
            },
            {
              no: 1,
              name: "COMMAND_REQUEST_SOURCE_DEFAULT",
            },
            {
              no: 2,
              name: "COMMAND_REQUEST_SOURCE_FUNCTION_CODE_LENS",
            },
            {
              no: 3,
              name: "COMMAND_REQUEST_SOURCE_CLASS_CODE_LENS",
            },
            {
              no: 4,
              name: "COMMAND_REQUEST_SOURCE_RIGHT_CLICK_REFACTOR",
            },
            {
              no: 5,
              name: "COMMAND_REQUEST_SOURCE_SELECTION_HINT_CODE_LENS",
            },
            {
              no: 6,
              name: "COMMAND_REQUEST_SOURCE_LINE_HINT_CODE_LENS",
            },
            {
              no: 7,
              name: "COMMAND_REQUEST_SOURCE_PLAN",
            },
            {
              no: 8,
              name: "COMMAND_REQUEST_SOURCE_FOLLOWUP",
            },
            {
              no: 9,
              name: "COMMAND_REQUEST_SOURCE_PASTE_AND_TRANSLATE",
            },
            {
              no: 10,
              name: "COMMAND_REQUEST_SOURCE_SUPERCOMPLETE",
            },
            {
              no: 11,
              name: "COMMAND_REQUEST_SOURCE_FUNCTION_DOCSTRING",
            },
            {
              no: 12,
              name: "COMMAND_REQUEST_SOURCE_FAST_APPLY",
            },
            {
              no: 13,
              name: "COMMAND_REQUEST_SOURCE_TERMINAL",
            },
            {
              no: 14,
              name: "COMMAND_REQUEST_SOURCE_TAB_JUMP",
            },
            {
              no: 15,
              name: "COMMAND_REQUEST_SOURCE_TERMINAL_SUGGESTIONS",
            },
            {
              no: 16,
              name: "COMMAND_REQUEST_SOURCE_CASCADE_CHAT",
            },
          ]
        ),
        ((eO = nH || (nH = {}))[(eO.UNSPECIFIED = 0)] = "UNSPECIFIED"),
        (eO[(eO.ERROR = 1)] = "ERROR"),
        (eO[(eO.WARNING = 2)] = "WARNING"),
        (eO[(eO.INFO = 3)] = "INFO"),
        (eO[(eO.DEBUG = 4)] = "DEBUG"),
        n7.w.util.setEnumType(nH, "exa.codeium_common_pb.StatusLevel", [
          {
            no: 0,
            name: "STATUS_LEVEL_UNSPECIFIED",
          },
          {
            no: 1,
            name: "STATUS_LEVEL_ERROR",
          },
          {
            no: 2,
            name: "STATUS_LEVEL_WARNING",
          },
          {
            no: 3,
            name: "STATUS_LEVEL_INFO",
          },
          {
            no: 4,
            name: "STATUS_LEVEL_DEBUG",
          },
        ]),
        ((eN = nV || (nV = {}))[(eN.UNSPECIFIED = 0)] = "UNSPECIFIED"),
        (eN[(eN.OVERALL = 1)] = "OVERALL"),
        (eN[(eN.ACTION_PREPARE = 2)] = "ACTION_PREPARE"),
        (eN[(eN.ACTION_APPLY = 3)] = "ACTION_APPLY"),
        n7.w.util.setEnumType(nV, "exa.codeium_common_pb.CortexErrorCategory", [
          {
            no: 0,
            name: "CORTEX_ERROR_CATEGORY_UNSPECIFIED",
          },
          {
            no: 1,
            name: "CORTEX_ERROR_CATEGORY_OVERALL",
          },
          {
            no: 2,
            name: "CORTEX_ERROR_CATEGORY_ACTION_PREPARE",
          },
          {
            no: 3,
            name: "CORTEX_ERROR_CATEGORY_ACTION_APPLY",
          },
        ]),
        ((eC = nW || (nW = {}))[(eC.UNSPECIFIED = 0)] = "UNSPECIFIED"),
        (eC[(eC.OVERALL = 1)] = "OVERALL"),
        (eC[(eC.LAST_AUTOCOMPLETE_USAGE_TIME = 2)] =
          "LAST_AUTOCOMPLETE_USAGE_TIME"),
        (eC[(eC.LAST_CHAT_USAGE_TIME = 3)] = "LAST_CHAT_USAGE_TIME"),
        (eC[(eC.LAST_COMMAND_USAGE_TIME = 4)] = "LAST_COMMAND_USAGE_TIME"),
        n7.w.util.setEnumType(nW, "exa.codeium_common_pb.LastUpdateType", [
          {
            no: 0,
            name: "LAST_UPDATE_TYPE_UNSPECIFIED",
          },
          {
            no: 1,
            name: "LAST_UPDATE_TYPE_OVERALL",
          },
          {
            no: 2,
            name: "LAST_UPDATE_TYPE_LAST_AUTOCOMPLETE_USAGE_TIME",
          },
          {
            no: 3,
            name: "LAST_UPDATE_TYPE_LAST_CHAT_USAGE_TIME",
          },
          {
            no: 4,
            name: "LAST_UPDATE_TYPE_LAST_COMMAND_USAGE_TIME",
          },
        ]),
        ((ef = nK || (nK = {}))[(ef.UNSPECIFIED = 0)] = "UNSPECIFIED"),
        (ef[(ef.AUTOCOMPLETE = 1)] = "AUTOCOMPLETE"),
        (ef[(ef.COMMAND = 2)] = "COMMAND"),
        (ef[(ef.CHAT = 3)] = "CHAT"),
        n7.w.util.setEnumType(
          nK,
          "exa.codeium_common_pb.OnboardingActionType",
          [
            {
              no: 0,
              name: "ONBOARDING_ACTION_TYPE_UNSPECIFIED",
            },
            {
              no: 1,
              name: "ONBOARDING_ACTION_TYPE_AUTOCOMPLETE",
            },
            {
              no: 2,
              name: "ONBOARDING_ACTION_TYPE_COMMAND",
            },
            {
              no: 3,
              name: "ONBOARDING_ACTION_TYPE_CHAT",
            },
          ]
        ),
        ((ew = nX || (nX = {}))[(ew.UNSPECIFIED = 0)] = "UNSPECIFIED"),
        (ew[(ew.AUTOCOMPLETE_ACCEPT = 1)] = "AUTOCOMPLETE_ACCEPT"),
        (ew[(ew.CURSOR_LINE_NAVIGATION = 2)] = "CURSOR_LINE_NAVIGATION"),
        (ew[(ew.TYPING = 3)] = "TYPING"),
        (ew[(ew.FORCED = 4)] = "FORCED"),
        (ew[(ew.TAB_JUMP_ACCEPT = 5)] = "TAB_JUMP_ACCEPT"),
        (ew[(ew.SUPERCOMPLETE_ACCEPT = 6)] = "SUPERCOMPLETE_ACCEPT"),
        (ew[(ew.TAB_JUMP_PREDICTIVE = 7)] = "TAB_JUMP_PREDICTIVE"),
        (ew[(ew.AUTOCOMPLETE_PREDICTIVE = 8)] = "AUTOCOMPLETE_PREDICTIVE"),
        (ew[(ew.SUPERCOMPLETE_PREDICTIVE = 9)] = "SUPERCOMPLETE_PREDICTIVE"),
        (ew[(ew.TAB_JUMP_EDIT = 10)] = "TAB_JUMP_EDIT"),
        n7.w.util.setEnumType(
          nX,
          "exa.codeium_common_pb.SupercompleteTriggerCondition",
          [
            {
              no: 0,
              name: "SUPERCOMPLETE_TRIGGER_CONDITION_UNSPECIFIED",
            },
            {
              no: 1,
              name: "SUPERCOMPLETE_TRIGGER_CONDITION_AUTOCOMPLETE_ACCEPT",
            },
            {
              no: 2,
              name: "SUPERCOMPLETE_TRIGGER_CONDITION_CURSOR_LINE_NAVIGATION",
            },
            {
              no: 3,
              name: "SUPERCOMPLETE_TRIGGER_CONDITION_TYPING",
            },
            {
              no: 4,
              name: "SUPERCOMPLETE_TRIGGER_CONDITION_FORCED",
            },
            {
              no: 5,
              name: "SUPERCOMPLETE_TRIGGER_CONDITION_TAB_JUMP_ACCEPT",
            },
            {
              no: 6,
              name: "SUPERCOMPLETE_TRIGGER_CONDITION_SUPERCOMPLETE_ACCEPT",
            },
            {
              no: 7,
              name: "SUPERCOMPLETE_TRIGGER_CONDITION_TAB_JUMP_PREDICTIVE",
            },
            {
              no: 8,
              name: "SUPERCOMPLETE_TRIGGER_CONDITION_AUTOCOMPLETE_PREDICTIVE",
            },
            {
              no: 9,
              name: "SUPERCOMPLETE_TRIGGER_CONDITION_SUPERCOMPLETE_PREDICTIVE",
            },
            {
              no: 10,
              name: "SUPERCOMPLETE_TRIGGER_CONDITION_TAB_JUMP_EDIT",
            },
          ]
        ),
        ((eI = nY || (nY = {}))[(eI.EVENT_UNSPECIFIED = 0)] =
          "EVENT_UNSPECIFIED"),
        (eI[(eI.WINDSURF_EDITOR_READY = 251)] = "WINDSURF_EDITOR_READY"),
        (eI[(eI.WINDSURF_EXTENSION_START = 253)] = "WINDSURF_EXTENSION_START"),
        (eI[(eI.WINDSURF_EXTENSION_ACTIVATED = 32)] =
          "WINDSURF_EXTENSION_ACTIVATED"),
        (eI[(eI.LS_DOWNLOAD_START = 1)] = "LS_DOWNLOAD_START"),
        (eI[(eI.LS_DOWNLOAD_COMPLETE = 2)] = "LS_DOWNLOAD_COMPLETE"),
        (eI[(eI.LS_DOWNLOAD_FAILURE = 5)] = "LS_DOWNLOAD_FAILURE"),
        (eI[(eI.LS_BINARY_STARTUP = 250)] = "LS_BINARY_STARTUP"),
        (eI[(eI.LS_STARTUP = 3)] = "LS_STARTUP"),
        (eI[(eI.LS_FAILURE = 4)] = "LS_FAILURE"),
        (eI[(eI.AUTOCOMPLETE_ACCEPTED = 6)] = "AUTOCOMPLETE_ACCEPTED"),
        (eI[(eI.AUTOCOMPLETE_ONE_WORD_ACCEPTED = 7)] =
          "AUTOCOMPLETE_ONE_WORD_ACCEPTED"),
        (eI[(eI.CHAT_MESSAGE_SENT = 8)] = "CHAT_MESSAGE_SENT"),
        (eI[(eI.CHAT_MENTION_INSERT = 13)] = "CHAT_MENTION_INSERT"),
        (eI[(eI.CHAT_MENTION_MENU_OPEN = 19)] = "CHAT_MENTION_MENU_OPEN"),
        (eI[(eI.CHAT_OPEN_SETTINGS = 14)] = "CHAT_OPEN_SETTINGS"),
        (eI[(eI.CHAT_OPEN_CONTEXT_SETTINGS = 15)] =
          "CHAT_OPEN_CONTEXT_SETTINGS"),
        (eI[(eI.CHAT_WITH_CODEBASE = 16)] = "CHAT_WITH_CODEBASE"),
        (eI[(eI.CHAT_NEW_CONVERSATION = 17)] = "CHAT_NEW_CONVERSATION"),
        (eI[(eI.CHAT_CHANGE_MODEL = 18)] = "CHAT_CHANGE_MODEL"),
        (eI[(eI.CHAT_TOGGLE_FOCUS_INSERT_TEXT = 34)] =
          "CHAT_TOGGLE_FOCUS_INSERT_TEXT"),
        (eI[(eI.FUNCTION_REFACTOR = 28)] = "FUNCTION_REFACTOR"),
        (eI[(eI.EXPLAIN_CODE_BLOCK = 29)] = "EXPLAIN_CODE_BLOCK"),
        (eI[(eI.FUNCTION_ADD_DOCSTRING = 30)] = "FUNCTION_ADD_DOCSTRING"),
        (eI[(eI.EXPLAIN_PROBLEM = 31)] = "EXPLAIN_PROBLEM"),
        (eI[(eI.COMMAND_BOX_OPENED = 9)] = "COMMAND_BOX_OPENED"),
        (eI[(eI.COMMAND_SUBMITTED = 10)] = "COMMAND_SUBMITTED"),
        (eI[(eI.COMMAND_ACCEPTED = 11)] = "COMMAND_ACCEPTED"),
        (eI[(eI.COMMAND_REJECTED = 12)] = "COMMAND_REJECTED"),
        (eI[(eI.WS_ONBOARDING_LANDING_PAGE_OPENED = 20)] =
          "WS_ONBOARDING_LANDING_PAGE_OPENED"),
        (eI[(eI.WS_ONBOARDING_SETUP_PAGE_OPENED = 21)] =
          "WS_ONBOARDING_SETUP_PAGE_OPENED"),
        (eI[(eI.WS_ONBOARDING_KEYBINDINGS_PAGE_OPENED = 22)] =
          "WS_ONBOARDING_KEYBINDINGS_PAGE_OPENED"),
        (eI[(eI.WS_ONBOARDING_MIGRATION_SCOPE_PAGE_OPENED = 23)] =
          "WS_ONBOARDING_MIGRATION_SCOPE_PAGE_OPENED"),
        (eI[(eI.WS_ONBOARDING_IMPORT_PAGE_OPENED = 24)] =
          "WS_ONBOARDING_IMPORT_PAGE_OPENED"),
        (eI[(eI.WS_ONBOARDING_AUTH_PAGE_OPENED = 25)] =
          "WS_ONBOARDING_AUTH_PAGE_OPENED"),
        (eI[(eI.WS_ONBOARDING_AUTH_MANUAL_PAGE_OPENED = 26)] =
          "WS_ONBOARDING_AUTH_MANUAL_PAGE_OPENED"),
        (eI[(eI.WS_ONBOARDING_CHOOSE_THEME_PAGE_OPENED = 35)] =
          "WS_ONBOARDING_CHOOSE_THEME_PAGE_OPENED"),
        (eI[(eI.WS_ONBOARDING_COMPLETED = 27)] = "WS_ONBOARDING_COMPLETED"),
        (eI[(eI.WS_SKIPPED_ONBOARDING = 69)] = "WS_SKIPPED_ONBOARDING"),
        (eI[(eI.WS_SETTINGS_PAGE_OPEN = 72)] = "WS_SETTINGS_PAGE_OPEN"),
        (eI[(eI.WS_SETTINGS_PAGE_OPEN_WITH_SETTING_FOCUS = 73)] =
          "WS_SETTINGS_PAGE_OPEN_WITH_SETTING_FOCUS"),
        (eI[(eI.EMPTY_WORKSPACE_PAGE_OPENED = 209)] =
          "EMPTY_WORKSPACE_PAGE_OPENED"),
        (eI[(eI.EMPTY_WORKSPACE_PAGE_RECENT_FOLDERS_CLICKED = 210)] =
          "EMPTY_WORKSPACE_PAGE_RECENT_FOLDERS_CLICKED"),
        (eI[(eI.EMPTY_WORKSPACE_PAGE_OPEN_FOLDER_CLICKED = 211)] =
          "EMPTY_WORKSPACE_PAGE_OPEN_FOLDER_CLICKED"),
        (eI[(eI.EMPTY_WORKSPACE_PAGE_GENERATE_PROJECT_CLICKED = 212)] =
          "EMPTY_WORKSPACE_PAGE_GENERATE_PROJECT_CLICKED"),
        (eI[(eI.PROVIDE_FEEDBACK = 33)] = "PROVIDE_FEEDBACK"),
        (eI[(eI.CASCADE_MESSAGE_SENT = 36)] = "CASCADE_MESSAGE_SENT"),
        (eI[(eI.WS_OPEN_CASCADE_MEMORIES_PANEL = 38)] =
          "WS_OPEN_CASCADE_MEMORIES_PANEL"),
        (eI[(eI.PROVIDE_MESSAGE_FEEDBACK = 41)] = "PROVIDE_MESSAGE_FEEDBACK"),
        (eI[(eI.CASCADE_MEMORY_DELETED = 42)] = "CASCADE_MEMORY_DELETED"),
        (eI[(eI.CASCADE_STEP_COMPLETED = 43)] = "CASCADE_STEP_COMPLETED"),
        (eI[(eI.ACKNOWLEDGE_CASCADE_CODE_EDIT = 44)] =
          "ACKNOWLEDGE_CASCADE_CODE_EDIT"),
        (eI[(eI.CASCADE_WEB_TOOLS_OPEN_READ_URL_MARKDOWN = 45)] =
          "CASCADE_WEB_TOOLS_OPEN_READ_URL_MARKDOWN"),
        (eI[(eI.CASCADE_WEB_TOOLS_OPEN_CHUNK_MARKDOWN = 46)] =
          "CASCADE_WEB_TOOLS_OPEN_CHUNK_MARKDOWN"),
        (eI[(eI.CASCADE_MCP_SERVER_INIT = 64)] = "CASCADE_MCP_SERVER_INIT"),
        (eI[(eI.CASCADE_KNOWLEDGE_BASE_ITEM_OPENED = 113)] =
          "CASCADE_KNOWLEDGE_BASE_ITEM_OPENED"),
        (eI[(eI.CASCADE_VIEW_LOADED = 119)] = "CASCADE_VIEW_LOADED"),
        (eI[(eI.CASCADE_CONTEXT_SCOPE_ITEM_ATTACHED = 173)] =
          "CASCADE_CONTEXT_SCOPE_ITEM_ATTACHED"),
        (eI[(eI.CASCADE_CLICK_EVENT = 65)] = "CASCADE_CLICK_EVENT"),
        (eI[(eI.CASCADE_IMPRESSION_EVENT = 67)] = "CASCADE_IMPRESSION_EVENT"),
        (eI[(eI.OPEN_CHANGELOG = 37)] = "OPEN_CHANGELOG"),
        (eI[(eI.CURSOR_DETECTED = 39)] = "CURSOR_DETECTED"),
        (eI[(eI.VSCODE_DETECTED = 40)] = "VSCODE_DETECTED"),
        (eI[(eI.JETBRAINS_DETECTED = 153)] = "JETBRAINS_DETECTED"),
        (eI[(eI.CROSS_SELL_EXTENSION_DOWNLOAD_WINDSURF_CLICK = 47)] =
          "CROSS_SELL_EXTENSION_DOWNLOAD_WINDSURF_CLICK"),
        (eI[(eI.CROSS_SELL_EXTENSION_DOWNLOAD_WINDSURF_NUDGE_IMPRESSION = 48)] =
          "CROSS_SELL_EXTENSION_DOWNLOAD_WINDSURF_NUDGE_IMPRESSION"),
        (eI[(eI.WS_PROBLEMS_TAB_SEND_ALL_TO_CASCADE = 49)] =
          "WS_PROBLEMS_TAB_SEND_ALL_TO_CASCADE"),
        (eI[(eI.WS_PROBLEMS_TAB_SEND_ALL_IN_FILE_TO_CASCADE = 50)] =
          "WS_PROBLEMS_TAB_SEND_ALL_IN_FILE_TO_CASCADE"),
        (eI[(eI.WS_CASCADE_BAR_FILE_NAV = 51)] = "WS_CASCADE_BAR_FILE_NAV"),
        (eI[(eI.WS_CASCADE_BAR_HUNK_NAV = 52)] = "WS_CASCADE_BAR_HUNK_NAV"),
        (eI[(eI.WS_CASCADE_BAR_ACCEPT_FILE = 53)] =
          "WS_CASCADE_BAR_ACCEPT_FILE"),
        (eI[(eI.WS_CASCADE_BAR_REJECT_FILE = 54)] =
          "WS_CASCADE_BAR_REJECT_FILE"),
        (eI[(eI.WS_CUSTOM_APP_ICON_MODAL_OPEN = 55)] =
          "WS_CUSTOM_APP_ICON_MODAL_OPEN"),
        (eI[(eI.WS_CUSTOM_APP_ICON_SELECT_CLASSIC = 56)] =
          "WS_CUSTOM_APP_ICON_SELECT_CLASSIC"),
        (eI[(eI.WS_CUSTOM_APP_ICON_SELECT_CLASSIC_LIGHT = 57)] =
          "WS_CUSTOM_APP_ICON_SELECT_CLASSIC_LIGHT"),
        (eI[(eI.WS_CUSTOM_APP_ICON_SELECT_RETRO = 58)] =
          "WS_CUSTOM_APP_ICON_SELECT_RETRO"),
        (eI[(eI.WS_CUSTOM_APP_ICON_SELECT_BLUEPRINT = 59)] =
          "WS_CUSTOM_APP_ICON_SELECT_BLUEPRINT"),
        (eI[(eI.WS_CUSTOM_APP_ICON_SELECT_HAND_DRAWN = 60)] =
          "WS_CUSTOM_APP_ICON_SELECT_HAND_DRAWN"),
        (eI[(eI.WS_CUSTOM_APP_ICON_SELECT_SUNSET = 61)] =
          "WS_CUSTOM_APP_ICON_SELECT_SUNSET"),
        (eI[(eI.WS_CUSTOM_APP_ICON_SELECT_VALENTINE = 66)] =
          "WS_CUSTOM_APP_ICON_SELECT_VALENTINE"),
        (eI[(eI.WS_CUSTOM_APP_ICON_SELECT_PIXEL_SURF = 82)] =
          "WS_CUSTOM_APP_ICON_SELECT_PIXEL_SURF"),
        (eI[(eI.ENTERED_MCP_TOOLBAR_TAB = 63)] = "ENTERED_MCP_TOOLBAR_TAB"),
        (eI[(eI.CLICKED_TO_CONFIGURE_MCP = 62)] = "CLICKED_TO_CONFIGURE_MCP"),
        (eI[(eI.WS_SETTINGS_UPDATED = 68)] = "WS_SETTINGS_UPDATED"),
        (eI[(eI.BROWSER_PREVIEW_DOM_ELEMENT = 70)] =
          "BROWSER_PREVIEW_DOM_ELEMENT"),
        (eI[(eI.BROWSER_PREVIEW_CONSOLE_OUTPUT = 71)] =
          "BROWSER_PREVIEW_CONSOLE_OUTPUT"),
        (eI[(eI.WS_SETTINGS_CHANGED_BY_USER = 74)] =
          "WS_SETTINGS_CHANGED_BY_USER"),
        (eI[(eI.WS_GENERATE_COMMIT_MESSAGE_CLICKED = 75)] =
          "WS_GENERATE_COMMIT_MESSAGE_CLICKED"),
        (eI[(eI.WS_GENERATE_COMMIT_MESSAGE_ERRORED = 76)] =
          "WS_GENERATE_COMMIT_MESSAGE_ERRORED"),
        (eI[(eI.WS_CLICKED_COMMIT_FROM_SCM_PANEL = 77)] =
          "WS_CLICKED_COMMIT_FROM_SCM_PANEL"),
        (eI[(eI.WS_CANCELED_GENERATE_COMMIT_MESSAGE = 79)] =
          "WS_CANCELED_GENERATE_COMMIT_MESSAGE"),
        (eI[(eI.USING_DEV_EXTENSION = 78)] = "USING_DEV_EXTENSION"),
        (eI[(eI.WS_APP_DEPLOYMENT_CREATE_PROJECT = 80)] =
          "WS_APP_DEPLOYMENT_CREATE_PROJECT"),
        (eI[(eI.WS_APP_DEPLOYMENT_DEPLOY_PROJECT = 81)] =
          "WS_APP_DEPLOYMENT_DEPLOY_PROJECT"),
        (eI[(eI.CASCADE_OPEN_ACTIVE_CONVERSATION_DROPDOWN = 114)] =
          "CASCADE_OPEN_ACTIVE_CONVERSATION_DROPDOWN"),
        (eI[(eI.CASCADE_SELECT_ACTIVE_CONVERSATION_ON_DROPDOWN = 115)] =
          "CASCADE_SELECT_ACTIVE_CONVERSATION_ON_DROPDOWN"),
        (eI[(eI.CASCADE_NAVIGATE_ACTIVE_CONVERSATION_ON_DROPDOWN = 122)] =
          "CASCADE_NAVIGATE_ACTIVE_CONVERSATION_ON_DROPDOWN"),
        (eI[(eI.CASCADE_SNOOZE_CONVERSATION_ON_DROPDOWN = 123)] =
          "CASCADE_SNOOZE_CONVERSATION_ON_DROPDOWN"),
        (eI[(eI.CASCADE_TOGGLE_NOTIFICATION_ON_DROPDOWN = 124)] =
          "CASCADE_TOGGLE_NOTIFICATION_ON_DROPDOWN"),
        (eI[(eI.CASCADE_SELECT_NOTIFICATION_ON_DROPDOWN = 125)] =
          "CASCADE_SELECT_NOTIFICATION_ON_DROPDOWN"),
        (eI[(eI.CASCADE_NAVIGATE_NOTIFICATION_ON_DROPDOWN = 126)] =
          "CASCADE_NAVIGATE_NOTIFICATION_ON_DROPDOWN"),
        (eI[(eI.CASCADE_DISMISS_NOTIFICATION_ON_DROPDOWN = 127)] =
          "CASCADE_DISMISS_NOTIFICATION_ON_DROPDOWN"),
        (eI[(eI.CASCADE_TRAJECTORY_SHARE_COPY_LINK = 137)] =
          "CASCADE_TRAJECTORY_SHARE_COPY_LINK"),
        (eI[(eI.CASCADE_TRAJECTORY_SHARE_CREATE_LINK = 138)] =
          "CASCADE_TRAJECTORY_SHARE_CREATE_LINK"),
        (eI[(eI.CASCADE_CUSTOMIZATIONS_TAB_CHANGE = 139)] =
          "CASCADE_CUSTOMIZATIONS_TAB_CHANGE"),
        (eI[(eI.CASCADE_WORKFLOW_OPEN = 140)] = "CASCADE_WORKFLOW_OPEN"),
        (eI[(eI.CASCADE_NEW_WORKFLOW_CLICKED = 141)] =
          "CASCADE_NEW_WORKFLOW_CLICKED"),
        (eI[(eI.CASCADE_NEW_GLOBAL_WORKFLOW_CLICKED = 184)] =
          "CASCADE_NEW_GLOBAL_WORKFLOW_CLICKED"),
        (eI[(eI.CASCADE_WORKFLOW_REFRESH_CLICKED = 142)] =
          "CASCADE_WORKFLOW_REFRESH_CLICKED"),
        (eI[(eI.CASCADE_RULE_OPEN = 143)] = "CASCADE_RULE_OPEN"),
        (eI[(eI.CASCADE_NEW_RULE_CLICKED = 144)] = "CASCADE_NEW_RULE_CLICKED"),
        (eI[(eI.CASCADE_NEW_GLOBAL_RULE_CLICKED = 145)] =
          "CASCADE_NEW_GLOBAL_RULE_CLICKED"),
        (eI[(eI.CASCADE_RULE_REFRESH_CLICKED = 146)] =
          "CASCADE_RULE_REFRESH_CLICKED"),
        (eI[(eI.CASCADE_IMPORT_RULES_FROM_CURSOR_CLICKED = 147)] =
          "CASCADE_IMPORT_RULES_FROM_CURSOR_CLICKED"),
        (eI[(eI.WS_IMPORT_CURSOR_RULES_COMMAND_PALETTE = 152)] =
          "WS_IMPORT_CURSOR_RULES_COMMAND_PALETTE"),
        (eI[(eI.CASCADE_CHANGES_ACCEPT_ALL = 83)] =
          "CASCADE_CHANGES_ACCEPT_ALL"),
        (eI[(eI.CASCADE_CHANGES_REJECT_ALL = 84)] =
          "CASCADE_CHANGES_REJECT_ALL"),
        (eI[(eI.CASCADE_MEMORIES_EDIT = 85)] = "CASCADE_MEMORIES_EDIT"),
        (eI[(eI.CASCADE_MEMORIES_VIEW = 86)] = "CASCADE_MEMORIES_VIEW"),
        (eI[(eI.KEYBOARD_SHORTCUT = 136)] = "KEYBOARD_SHORTCUT"),
        (eI[(eI.CASCADE_INSERT_AT_MENTION = 87)] = "CASCADE_INSERT_AT_MENTION"),
        (eI[(eI.CASCADE_ERROR_STEP = 120)] = "CASCADE_ERROR_STEP"),
        (eI[(eI.CASCADE_SUGGESTED_RESPONSES_SUGGESTION_CLICKED = 121)] =
          "CASCADE_SUGGESTED_RESPONSES_SUGGESTION_CLICKED"),
        (eI[(eI.CASCADE_PLUGIN_PANEL_OPENED = 128)] =
          "CASCADE_PLUGIN_PANEL_OPENED"),
        (eI[(eI.CASCADE_PLUGIN_PAGE_OPENED = 129)] =
          "CASCADE_PLUGIN_PAGE_OPENED"),
        (eI[(eI.CASCADE_PLUGIN_INSTALLED = 130)] = "CASCADE_PLUGIN_INSTALLED"),
        (eI[(eI.CASCADE_PLUGIN_DISABLED = 131)] = "CASCADE_PLUGIN_DISABLED"),
        (eI[(eI.CASCADE_PLUGIN_ENABLED = 132)] = "CASCADE_PLUGIN_ENABLED"),
        (eI[(eI.CASCADE_PLUGIN_INSTALLATION_ERROR = 133)] =
          "CASCADE_PLUGIN_INSTALLATION_ERROR"),
        (eI[(eI.CASCADE_PLUGIN_TOOL_ENABLED = 134)] =
          "CASCADE_PLUGIN_TOOL_ENABLED"),
        (eI[(eI.CASCADE_PLUGIN_TOOL_DISABLED = 135)] =
          "CASCADE_PLUGIN_TOOL_DISABLED"),
        (eI[(eI.WEBSITE_NOT_FOUND_PAGE = 88)] = "WEBSITE_NOT_FOUND_PAGE"),
        (eI[(eI.WEBSITE_AUTH_REDIRECT_LONG_WAIT = 89)] =
          "WEBSITE_AUTH_REDIRECT_LONG_WAIT"),
        (eI[(eI.WEBSITE_AUTH_REDIRECT_ERROR = 90)] =
          "WEBSITE_AUTH_REDIRECT_ERROR"),
        (eI[(eI.WEBSITE_AUTH_REDIRECT_SUCCESS = 112)] =
          "WEBSITE_AUTH_REDIRECT_SUCCESS"),
        (eI[(eI.WEBSITE_PAGE_VISIT = 175)] = "WEBSITE_PAGE_VISIT"),
        (eI[(eI.WEBSITE_SIGNUP_INFO = 176)] = "WEBSITE_SIGNUP_INFO"),
        (eI[(eI.WEBSITE_START_PLAN_CHECKOUT = 177)] =
          "WEBSITE_START_PLAN_CHECKOUT"),
        (eI[(eI.WEBSITE_START_UPDATE_PAYMENT = 202)] =
          "WEBSITE_START_UPDATE_PAYMENT"),
        (eI[(eI.WEBSITE_START_VIEW_INVOICES = 203)] =
          "WEBSITE_START_VIEW_INVOICES"),
        (eI[(eI.WEBSITE_UNIVERSITY_LECTURE_VIEW = 214)] =
          "WEBSITE_UNIVERSITY_LECTURE_VIEW"),
        (eI[(eI.WEBSITE_DISALLOW_ENTERPRISE_LOGIN = 224)] =
          "WEBSITE_DISALLOW_ENTERPRISE_LOGIN"),
        (eI[(eI.WEBSITE_SSO_LOGIN_REDIRECT = 225)] =
          "WEBSITE_SSO_LOGIN_REDIRECT"),
        (eI[(eI.WEBSITE_ATTEMPT_TO_LOGIN = 226)] = "WEBSITE_ATTEMPT_TO_LOGIN"),
        (eI[(eI.WEBSITE_SUCCESSFUL_LOGIN = 227)] = "WEBSITE_SUCCESSFUL_LOGIN"),
        (eI[(eI.WEBSITE_FAILED_LOGIN = 228)] = "WEBSITE_FAILED_LOGIN"),
        (eI[(eI.JB_OPEN_PLAN_INFO = 91)] = "JB_OPEN_PLAN_INFO"),
        (eI[(eI.JB_SNOOZE_PLUGIN = 92)] = "JB_SNOOZE_PLUGIN"),
        (eI[(eI.JB_TOGGLE_PLUGIN_STATUS = 93)] = "JB_TOGGLE_PLUGIN_STATUS"),
        (eI[(eI.JB_SWITCH_CHANNEL = 94)] = "JB_SWITCH_CHANNEL"),
        (eI[(eI.JB_OPEN_SETTINGS = 95)] = "JB_OPEN_SETTINGS"),
        (eI[(eI.JB_PLUGIN_LOG_IN = 96)] = "JB_PLUGIN_LOG_IN"),
        (eI[(eI.JB_PLUGIN_LOG_OUT = 97)] = "JB_PLUGIN_LOG_OUT"),
        (eI[(eI.JB_OPEN_QUICK_REFERENCE = 98)] = "JB_OPEN_QUICK_REFERENCE"),
        (eI[(eI.JB_EDIT_KEYBOARD_SHORTCUTS = 99)] =
          "JB_EDIT_KEYBOARD_SHORTCUTS"),
        (eI[(eI.JB_CASCADE_BAR_CASCADE_ICON = 100)] =
          "JB_CASCADE_BAR_CASCADE_ICON"),
        (eI[(eI.JB_CASCADE_BAR_FILE_NAV = 101)] = "JB_CASCADE_BAR_FILE_NAV"),
        (eI[(eI.JB_CASCADE_BAR_HUNK_NAV = 102)] = "JB_CASCADE_BAR_HUNK_NAV"),
        (eI[(eI.JB_CASCADE_BAR_ACCEPT_FILE = 103)] =
          "JB_CASCADE_BAR_ACCEPT_FILE"),
        (eI[(eI.JB_CASCADE_BAR_REJECT_FILE = 104)] =
          "JB_CASCADE_BAR_REJECT_FILE"),
        (eI[(eI.JB_INLAY_HUNK_ACCEPT = 105)] = "JB_INLAY_HUNK_ACCEPT"),
        (eI[(eI.JB_INLAY_HUNK_REJECT = 106)] = "JB_INLAY_HUNK_REJECT"),
        (eI[(eI.JB_DIFF_RE_RENDER = 107)] = "JB_DIFF_RE_RENDER"),
        (eI[(eI.JB_ONBOARDING_OPENED = 108)] = "JB_ONBOARDING_OPENED"),
        (eI[(eI.JB_ONBOARDING_COMPLETED = 109)] = "JB_ONBOARDING_COMPLETED"),
        (eI[(eI.JB_ONBOARDING_SKIPPED = 110)] = "JB_ONBOARDING_SKIPPED"),
        (eI[(eI.JB_ONBOARDING_LEARN_MORE = 111)] = "JB_ONBOARDING_LEARN_MORE"),
        (eI[(eI.JB_DIFF_RESOLUTION_ERRORED = 116)] =
          "JB_DIFF_RESOLUTION_ERRORED"),
        (eI[(eI.JB_ACKNOWLEDGE_CODE_EDIT_ERRORED = 117)] =
          "JB_ACKNOWLEDGE_CODE_EDIT_ERRORED"),
        (eI[(eI.JB_OPEN_SETTINGS_NOTIFICATION = 118)] =
          "JB_OPEN_SETTINGS_NOTIFICATION"),
        (eI[(eI.JB_MCP_ADD_SERVER = 148)] = "JB_MCP_ADD_SERVER"),
        (eI[(eI.JB_MCP_SAVE_CONFIG = 149)] = "JB_MCP_SAVE_CONFIG"),
        (eI[(eI.JB_MCP_EXPAND_TOOLS = 150)] = "JB_MCP_EXPAND_TOOLS"),
        (eI[(eI.JB_DISABLE_AUTOGEN_MEMORY = 151)] =
          "JB_DISABLE_AUTOGEN_MEMORY"),
        (eI[(eI.JB_TOGGLE_AUTOCOMPLETE = 154)] = "JB_TOGGLE_AUTOCOMPLETE"),
        (eI[(eI.JB_LOGIN_MANUAL_AUTH_TOKEN = 174)] =
          "JB_LOGIN_MANUAL_AUTH_TOKEN"),
        (eI[(eI.JB_AUTO_UPDATED = 179)] = "JB_AUTO_UPDATED"),
        (eI[(eI.JB_DRAG_DROP_FILE = 182)] = "JB_DRAG_DROP_FILE"),
        (eI[(eI.JB_AUTO_OPEN_CHAT_WINDOW = 183)] = "JB_AUTO_OPEN_CHAT_WINDOW"),
        (eI[(eI.WS_TERMINAL_INTEGRATION_FORCE_EXIT = 155)] =
          "WS_TERMINAL_INTEGRATION_FORCE_EXIT"),
        (eI[(eI.KNOWLEDGE_BASE_ITEM_CREATED = 156)] =
          "KNOWLEDGE_BASE_ITEM_CREATED"),
        (eI[(eI.KNOWLEDGE_BASE_ITEM_EDITED = 157)] =
          "KNOWLEDGE_BASE_ITEM_EDITED"),
        (eI[(eI.KNOWLEDGE_BASE_ITEM_DELETED = 158)] =
          "KNOWLEDGE_BASE_ITEM_DELETED"),
        (eI[(eI.KNOWLEDGE_BASE_ITEM_READ = 159)] = "KNOWLEDGE_BASE_ITEM_READ"),
        (eI[(eI.KNOWLEDGE_BASE_CONNECTION_CREATE = 160)] =
          "KNOWLEDGE_BASE_CONNECTION_CREATE"),
        (eI[(eI.KNOWLEDGE_BASE_CONNECTION_REMOVE = 161)] =
          "KNOWLEDGE_BASE_CONNECTION_REMOVE"),
        (eI[(eI.TEAM_CONFIG_TOGGLE_AUTO_RUN_COMMANDS = 162)] =
          "TEAM_CONFIG_TOGGLE_AUTO_RUN_COMMANDS"),
        (eI[(eI.TEAM_CONFIG_TOGGLE_MCP_SERVERS = 163)] =
          "TEAM_CONFIG_TOGGLE_MCP_SERVERS"),
        (eI[(eI.TEAM_CONFIG_TOGGLE_APP_DEPLOYMENTS = 164)] =
          "TEAM_CONFIG_TOGGLE_APP_DEPLOYMENTS"),
        (eI[(eI.TEAM_CONFIG_TOGGLE_SANDBOX_APP_DEPLOYMENTS = 165)] =
          "TEAM_CONFIG_TOGGLE_SANDBOX_APP_DEPLOYMENTS"),
        (eI[(eI.TEAM_CONFIG_TOGGLE_TEAMS_APP_DEPLOYMENTS = 166)] =
          "TEAM_CONFIG_TOGGLE_TEAMS_APP_DEPLOYMENTS"),
        (eI[(eI.TEAM_CONFIG_TOGGLE_GITHUB_REVIEWS = 167)] =
          "TEAM_CONFIG_TOGGLE_GITHUB_REVIEWS"),
        (eI[(eI.TEAM_CONFIG_TOGGLE_GITHUB_DESCRIPTION_EDITS = 168)] =
          "TEAM_CONFIG_TOGGLE_GITHUB_DESCRIPTION_EDITS"),
        (eI[(eI.TEAM_CONFIG_TOGGLE_PR_REVIEW_GUIDELINES = 169)] =
          "TEAM_CONFIG_TOGGLE_PR_REVIEW_GUIDELINES"),
        (eI[(eI.TEAM_CONFIG_TOGGLE_PR_DESCRIPTION_GUIDELINES = 170)] =
          "TEAM_CONFIG_TOGGLE_PR_DESCRIPTION_GUIDELINES"),
        (eI[(eI.TEAM_CONFIG_TOGGLE_INDIVIDUAL_LEVEL_ANALYTICS = 171)] =
          "TEAM_CONFIG_TOGGLE_INDIVIDUAL_LEVEL_ANALYTICS"),
        (eI[(eI.TEAM_CONFIG_TOGGLE_CONVERSATION_SHARING = 172)] =
          "TEAM_CONFIG_TOGGLE_CONVERSATION_SHARING"),
        (eI[(eI.TEAM_CONFIG_UPDATE_MCP_SERVERS = 178)] =
          "TEAM_CONFIG_UPDATE_MCP_SERVERS"),
        (eI[(eI.TEAM_CONFIG_TOGGLE_GITHUB_AUTO_REVIEWS = 207)] =
          "TEAM_CONFIG_TOGGLE_GITHUB_AUTO_REVIEWS"),
        (eI[(eI.TEAM_CONFIG_UPDATE_TOP_UP_SETTINGS = 213)] =
          "TEAM_CONFIG_UPDATE_TOP_UP_SETTINGS"),
        (eI[(eI.BROWSER_OPEN = 180)] = "BROWSER_OPEN"),
        (eI[(eI.CASCADE_WEB_TOOLS_OPEN_BROWSER_MARKDOWN = 181)] =
          "CASCADE_WEB_TOOLS_OPEN_BROWSER_MARKDOWN"),
        (eI[(eI.BROWSER_PAGE_LOAD_SUCCESS = 206)] =
          "BROWSER_PAGE_LOAD_SUCCESS"),
        (eI[(eI.BROWSER_TOOLBAR_INSERT_PAGE_MENTION = 208)] =
          "BROWSER_TOOLBAR_INSERT_PAGE_MENTION"),
        (eI[(eI.BROWSER_INSERT_TEXT_CONTENT = 215)] =
          "BROWSER_INSERT_TEXT_CONTENT"),
        (eI[(eI.BROWSER_INSERT_SCREENSHOT = 216)] =
          "BROWSER_INSERT_SCREENSHOT"),
        (eI[(eI.BROWSER_INSERT_CODE_BLOCK = 217)] =
          "BROWSER_INSERT_CODE_BLOCK"),
        (eI[(eI.BROWSER_INSERT_LOG_BLOCK = 218)] = "BROWSER_INSERT_LOG_BLOCK"),
        (eI[(eI.BROWSER_INSERT_CONSOLE_OUTPUT = 219)] =
          "BROWSER_INSERT_CONSOLE_OUTPUT"),
        (eI[(eI.BROWSER_INSERT_DOM_ELEMENT = 220)] =
          "BROWSER_INSERT_DOM_ELEMENT"),
        (eI[(eI.SUPERCOMPLETE_REQUEST_STARTED = 195)] =
          "SUPERCOMPLETE_REQUEST_STARTED"),
        (eI[(eI.SUPERCOMPLETE_CACHE_HIT = 196)] = "SUPERCOMPLETE_CACHE_HIT"),
        (eI[(eI.SUPERCOMPLETE_ERROR_GETTING_RESPONSE = 197)] =
          "SUPERCOMPLETE_ERROR_GETTING_RESPONSE"),
        (eI[(eI.SUPERCOMPLETE_NO_RESPONSE = 185)] =
          "SUPERCOMPLETE_NO_RESPONSE"),
        (eI[(eI.SUPERCOMPLETE_REQUEST_SUCCEEDED = 186)] =
          "SUPERCOMPLETE_REQUEST_SUCCEEDED"),
        (eI[(eI.SUPERCOMPLETE_FILTERED = 187)] = "SUPERCOMPLETE_FILTERED"),
        (eI[(eI.TAB_JUMP_REQUEST_STARTED = 188)] = "TAB_JUMP_REQUEST_STARTED"),
        (eI[(eI.TAB_JUMP_CACHE_HIT = 189)] = "TAB_JUMP_CACHE_HIT"),
        (eI[(eI.TAB_JUMP_ERROR_GETTING_RESPONSE = 190)] =
          "TAB_JUMP_ERROR_GETTING_RESPONSE"),
        (eI[(eI.TAB_JUMP_NO_RESPONSE = 191)] = "TAB_JUMP_NO_RESPONSE"),
        (eI[(eI.TAB_JUMP_PROCESSING_COMPLETE = 192)] =
          "TAB_JUMP_PROCESSING_COMPLETE"),
        (eI[(eI.TAB_JUMP_FILTERED = 193)] = "TAB_JUMP_FILTERED"),
        (eI[(eI.TAB_JUMP_ERROR_UI_RENDERED = 194)] =
          "TAB_JUMP_ERROR_UI_RENDERED"),
        (eI[(eI.AUTO_CASCADE_PR_TITLE_GENERATED = 198)] =
          "AUTO_CASCADE_PR_TITLE_GENERATED"),
        (eI[(eI.AUTO_CASCADE_PR_DESCRIPTION_GENERATED = 199)] =
          "AUTO_CASCADE_PR_DESCRIPTION_GENERATED"),
        (eI[(eI.AUTO_CASCADE_PR_REVIEW_REQUESTED = 200)] =
          "AUTO_CASCADE_PR_REVIEW_REQUESTED"),
        (eI[(eI.AUTO_CASCADE_PR_REVIEW_GENERATED = 201)] =
          "AUTO_CASCADE_PR_REVIEW_GENERATED"),
        (eI[(eI.AUTO_CASCADE_GITHUB_CONNECTION_ADDED = 204)] =
          "AUTO_CASCADE_GITHUB_CONNECTION_ADDED"),
        (eI[(eI.AUTO_CASCADE_GITHUB_CONNECTION_REMOVED = 205)] =
          "AUTO_CASCADE_GITHUB_CONNECTION_REMOVED"),
        (eI[(eI.AUTOCOMPLETE_CHAT_NO_RESPONSE = 221)] =
          "AUTOCOMPLETE_CHAT_NO_RESPONSE"),
        (eI[(eI.AUTOCOMPLETE_CHAT_ERROR_GETTING_RESPONSE = 222)] =
          "AUTOCOMPLETE_CHAT_ERROR_GETTING_RESPONSE"),
        (eI[(eI.AUTOCOMPLETE_CHAT_REQUEST_ACCEPTED = 223)] =
          "AUTOCOMPLETE_CHAT_REQUEST_ACCEPTED"),
        n7.w.util.setEnumType(nY, "exa.codeium_common_pb.ProductEventType", [
          {
            no: 0,
            name: "EVENT_UNSPECIFIED",
          },
          {
            no: 251,
            name: "WINDSURF_EDITOR_READY",
          },
          {
            no: 253,
            name: "WINDSURF_EXTENSION_START",
          },
          {
            no: 32,
            name: "WINDSURF_EXTENSION_ACTIVATED",
          },
          {
            no: 1,
            name: "LS_DOWNLOAD_START",
          },
          {
            no: 2,
            name: "LS_DOWNLOAD_COMPLETE",
          },
          {
            no: 5,
            name: "LS_DOWNLOAD_FAILURE",
          },
          {
            no: 250,
            name: "LS_BINARY_STARTUP",
          },
          {
            no: 3,
            name: "LS_STARTUP",
          },
          {
            no: 4,
            name: "LS_FAILURE",
          },
          {
            no: 6,
            name: "AUTOCOMPLETE_ACCEPTED",
          },
          {
            no: 7,
            name: "AUTOCOMPLETE_ONE_WORD_ACCEPTED",
          },
          {
            no: 8,
            name: "CHAT_MESSAGE_SENT",
          },
          {
            no: 13,
            name: "CHAT_MENTION_INSERT",
          },
          {
            no: 19,
            name: "CHAT_MENTION_MENU_OPEN",
          },
          {
            no: 14,
            name: "CHAT_OPEN_SETTINGS",
          },
          {
            no: 15,
            name: "CHAT_OPEN_CONTEXT_SETTINGS",
          },
          {
            no: 16,
            name: "CHAT_WITH_CODEBASE",
          },
          {
            no: 17,
            name: "CHAT_NEW_CONVERSATION",
          },
          {
            no: 18,
            name: "CHAT_CHANGE_MODEL",
          },
          {
            no: 34,
            name: "CHAT_TOGGLE_FOCUS_INSERT_TEXT",
          },
          {
            no: 28,
            name: "FUNCTION_REFACTOR",
          },
          {
            no: 29,
            name: "EXPLAIN_CODE_BLOCK",
          },
          {
            no: 30,
            name: "FUNCTION_ADD_DOCSTRING",
          },
          {
            no: 31,
            name: "EXPLAIN_PROBLEM",
          },
          {
            no: 9,
            name: "COMMAND_BOX_OPENED",
          },
          {
            no: 10,
            name: "COMMAND_SUBMITTED",
          },
          {
            no: 11,
            name: "COMMAND_ACCEPTED",
          },
          {
            no: 12,
            name: "COMMAND_REJECTED",
          },
          {
            no: 20,
            name: "WS_ONBOARDING_LANDING_PAGE_OPENED",
          },
          {
            no: 21,
            name: "WS_ONBOARDING_SETUP_PAGE_OPENED",
          },
          {
            no: 22,
            name: "WS_ONBOARDING_KEYBINDINGS_PAGE_OPENED",
          },
          {
            no: 23,
            name: "WS_ONBOARDING_MIGRATION_SCOPE_PAGE_OPENED",
          },
          {
            no: 24,
            name: "WS_ONBOARDING_IMPORT_PAGE_OPENED",
          },
          {
            no: 25,
            name: "WS_ONBOARDING_AUTH_PAGE_OPENED",
          },
          {
            no: 26,
            name: "WS_ONBOARDING_AUTH_MANUAL_PAGE_OPENED",
          },
          {
            no: 35,
            name: "WS_ONBOARDING_CHOOSE_THEME_PAGE_OPENED",
          },
          {
            no: 27,
            name: "WS_ONBOARDING_COMPLETED",
          },
          {
            no: 69,
            name: "WS_SKIPPED_ONBOARDING",
          },
          {
            no: 72,
            name: "WS_SETTINGS_PAGE_OPEN",
          },
          {
            no: 73,
            name: "WS_SETTINGS_PAGE_OPEN_WITH_SETTING_FOCUS",
          },
          {
            no: 209,
            name: "EMPTY_WORKSPACE_PAGE_OPENED",
          },
          {
            no: 210,
            name: "EMPTY_WORKSPACE_PAGE_RECENT_FOLDERS_CLICKED",
          },
          {
            no: 211,
            name: "EMPTY_WORKSPACE_PAGE_OPEN_FOLDER_CLICKED",
          },
          {
            no: 212,
            name: "EMPTY_WORKSPACE_PAGE_GENERATE_PROJECT_CLICKED",
          },
          {
            no: 33,
            name: "PROVIDE_FEEDBACK",
          },
          {
            no: 36,
            name: "CASCADE_MESSAGE_SENT",
          },
          {
            no: 38,
            name: "WS_OPEN_CASCADE_MEMORIES_PANEL",
          },
          {
            no: 41,
            name: "PROVIDE_MESSAGE_FEEDBACK",
          },
          {
            no: 42,
            name: "CASCADE_MEMORY_DELETED",
          },
          {
            no: 43,
            name: "CASCADE_STEP_COMPLETED",
          },
          {
            no: 44,
            name: "ACKNOWLEDGE_CASCADE_CODE_EDIT",
          },
          {
            no: 45,
            name: "CASCADE_WEB_TOOLS_OPEN_READ_URL_MARKDOWN",
          },
          {
            no: 46,
            name: "CASCADE_WEB_TOOLS_OPEN_CHUNK_MARKDOWN",
          },
          {
            no: 64,
            name: "CASCADE_MCP_SERVER_INIT",
          },
          {
            no: 113,
            name: "CASCADE_KNOWLEDGE_BASE_ITEM_OPENED",
          },
          {
            no: 119,
            name: "CASCADE_VIEW_LOADED",
          },
          {
            no: 173,
            name: "CASCADE_CONTEXT_SCOPE_ITEM_ATTACHED",
          },
          {
            no: 65,
            name: "CASCADE_CLICK_EVENT",
          },
          {
            no: 67,
            name: "CASCADE_IMPRESSION_EVENT",
          },
          {
            no: 37,
            name: "OPEN_CHANGELOG",
          },
          {
            no: 39,
            name: "CURSOR_DETECTED",
          },
          {
            no: 40,
            name: "VSCODE_DETECTED",
          },
          {
            no: 153,
            name: "JETBRAINS_DETECTED",
          },
          {
            no: 47,
            name: "CROSS_SELL_EXTENSION_DOWNLOAD_WINDSURF_CLICK",
          },
          {
            no: 48,
            name: "CROSS_SELL_EXTENSION_DOWNLOAD_WINDSURF_NUDGE_IMPRESSION",
          },
          {
            no: 49,
            name: "WS_PROBLEMS_TAB_SEND_ALL_TO_CASCADE",
          },
          {
            no: 50,
            name: "WS_PROBLEMS_TAB_SEND_ALL_IN_FILE_TO_CASCADE",
          },
          {
            no: 51,
            name: "WS_CASCADE_BAR_FILE_NAV",
          },
          {
            no: 52,
            name: "WS_CASCADE_BAR_HUNK_NAV",
          },
          {
            no: 53,
            name: "WS_CASCADE_BAR_ACCEPT_FILE",
          },
          {
            no: 54,
            name: "WS_CASCADE_BAR_REJECT_FILE",
          },
          {
            no: 55,
            name: "WS_CUSTOM_APP_ICON_MODAL_OPEN",
          },
          {
            no: 56,
            name: "WS_CUSTOM_APP_ICON_SELECT_CLASSIC",
          },
          {
            no: 57,
            name: "WS_CUSTOM_APP_ICON_SELECT_CLASSIC_LIGHT",
          },
          {
            no: 58,
            name: "WS_CUSTOM_APP_ICON_SELECT_RETRO",
          },
          {
            no: 59,
            name: "WS_CUSTOM_APP_ICON_SELECT_BLUEPRINT",
          },
          {
            no: 60,
            name: "WS_CUSTOM_APP_ICON_SELECT_HAND_DRAWN",
          },
          {
            no: 61,
            name: "WS_CUSTOM_APP_ICON_SELECT_SUNSET",
          },
          {
            no: 66,
            name: "WS_CUSTOM_APP_ICON_SELECT_VALENTINE",
          },
          {
            no: 82,
            name: "WS_CUSTOM_APP_ICON_SELECT_PIXEL_SURF",
          },
          {
            no: 63,
            name: "ENTERED_MCP_TOOLBAR_TAB",
          },
          {
            no: 62,
            name: "CLICKED_TO_CONFIGURE_MCP",
          },
          {
            no: 68,
            name: "WS_SETTINGS_UPDATED",
          },
          {
            no: 70,
            name: "BROWSER_PREVIEW_DOM_ELEMENT",
          },
          {
            no: 71,
            name: "BROWSER_PREVIEW_CONSOLE_OUTPUT",
          },
          {
            no: 74,
            name: "WS_SETTINGS_CHANGED_BY_USER",
          },
          {
            no: 75,
            name: "WS_GENERATE_COMMIT_MESSAGE_CLICKED",
          },
          {
            no: 76,
            name: "WS_GENERATE_COMMIT_MESSAGE_ERRORED",
          },
          {
            no: 77,
            name: "WS_CLICKED_COMMIT_FROM_SCM_PANEL",
          },
          {
            no: 79,
            name: "WS_CANCELED_GENERATE_COMMIT_MESSAGE",
          },
          {
            no: 78,
            name: "USING_DEV_EXTENSION",
          },
          {
            no: 80,
            name: "WS_APP_DEPLOYMENT_CREATE_PROJECT",
          },
          {
            no: 81,
            name: "WS_APP_DEPLOYMENT_DEPLOY_PROJECT",
          },
          {
            no: 114,
            name: "CASCADE_OPEN_ACTIVE_CONVERSATION_DROPDOWN",
          },
          {
            no: 115,
            name: "CASCADE_SELECT_ACTIVE_CONVERSATION_ON_DROPDOWN",
          },
          {
            no: 122,
            name: "CASCADE_NAVIGATE_ACTIVE_CONVERSATION_ON_DROPDOWN",
          },
          {
            no: 123,
            name: "CASCADE_SNOOZE_CONVERSATION_ON_DROPDOWN",
          },
          {
            no: 124,
            name: "CASCADE_TOGGLE_NOTIFICATION_ON_DROPDOWN",
          },
          {
            no: 125,
            name: "CASCADE_SELECT_NOTIFICATION_ON_DROPDOWN",
          },
          {
            no: 126,
            name: "CASCADE_NAVIGATE_NOTIFICATION_ON_DROPDOWN",
          },
          {
            no: 127,
            name: "CASCADE_DISMISS_NOTIFICATION_ON_DROPDOWN",
          },
          {
            no: 137,
            name: "CASCADE_TRAJECTORY_SHARE_COPY_LINK",
          },
          {
            no: 138,
            name: "CASCADE_TRAJECTORY_SHARE_CREATE_LINK",
          },
          {
            no: 139,
            name: "CASCADE_CUSTOMIZATIONS_TAB_CHANGE",
          },
          {
            no: 140,
            name: "CASCADE_WORKFLOW_OPEN",
          },
          {
            no: 141,
            name: "CASCADE_NEW_WORKFLOW_CLICKED",
          },
          {
            no: 184,
            name: "CASCADE_NEW_GLOBAL_WORKFLOW_CLICKED",
          },
          {
            no: 142,
            name: "CASCADE_WORKFLOW_REFRESH_CLICKED",
          },
          {
            no: 143,
            name: "CASCADE_RULE_OPEN",
          },
          {
            no: 144,
            name: "CASCADE_NEW_RULE_CLICKED",
          },
          {
            no: 145,
            name: "CASCADE_NEW_GLOBAL_RULE_CLICKED",
          },
          {
            no: 146,
            name: "CASCADE_RULE_REFRESH_CLICKED",
          },
          {
            no: 147,
            name: "CASCADE_IMPORT_RULES_FROM_CURSOR_CLICKED",
          },
          {
            no: 152,
            name: "WS_IMPORT_CURSOR_RULES_COMMAND_PALETTE",
          },
          {
            no: 83,
            name: "CASCADE_CHANGES_ACCEPT_ALL",
          },
          {
            no: 84,
            name: "CASCADE_CHANGES_REJECT_ALL",
          },
          {
            no: 85,
            name: "CASCADE_MEMORIES_EDIT",
          },
          {
            no: 86,
            name: "CASCADE_MEMORIES_VIEW",
          },
          {
            no: 136,
            name: "KEYBOARD_SHORTCUT",
          },
          {
            no: 87,
            name: "CASCADE_INSERT_AT_MENTION",
          },
          {
            no: 120,
            name: "CASCADE_ERROR_STEP",
          },
          {
            no: 121,
            name: "CASCADE_SUGGESTED_RESPONSES_SUGGESTION_CLICKED",
          },
          {
            no: 128,
            name: "CASCADE_PLUGIN_PANEL_OPENED",
          },
          {
            no: 129,
            name: "CASCADE_PLUGIN_PAGE_OPENED",
          },
          {
            no: 130,
            name: "CASCADE_PLUGIN_INSTALLED",
          },
          {
            no: 131,
            name: "CASCADE_PLUGIN_DISABLED",
          },
          {
            no: 132,
            name: "CASCADE_PLUGIN_ENABLED",
          },
          {
            no: 133,
            name: "CASCADE_PLUGIN_INSTALLATION_ERROR",
          },
          {
            no: 134,
            name: "CASCADE_PLUGIN_TOOL_ENABLED",
          },
          {
            no: 135,
            name: "CASCADE_PLUGIN_TOOL_DISABLED",
          },
          {
            no: 88,
            name: "WEBSITE_NOT_FOUND_PAGE",
          },
          {
            no: 89,
            name: "WEBSITE_AUTH_REDIRECT_LONG_WAIT",
          },
          {
            no: 90,
            name: "WEBSITE_AUTH_REDIRECT_ERROR",
          },
          {
            no: 112,
            name: "WEBSITE_AUTH_REDIRECT_SUCCESS",
          },
          {
            no: 175,
            name: "WEBSITE_PAGE_VISIT",
          },
          {
            no: 176,
            name: "WEBSITE_SIGNUP_INFO",
          },
          {
            no: 177,
            name: "WEBSITE_START_PLAN_CHECKOUT",
          },
          {
            no: 202,
            name: "WEBSITE_START_UPDATE_PAYMENT",
          },
          {
            no: 203,
            name: "WEBSITE_START_VIEW_INVOICES",
          },
          {
            no: 214,
            name: "WEBSITE_UNIVERSITY_LECTURE_VIEW",
          },
          {
            no: 224,
            name: "WEBSITE_DISALLOW_ENTERPRISE_LOGIN",
          },
          {
            no: 225,
            name: "WEBSITE_SSO_LOGIN_REDIRECT",
          },
          {
            no: 226,
            name: "WEBSITE_ATTEMPT_TO_LOGIN",
          },
          {
            no: 227,
            name: "WEBSITE_SUCCESSFUL_LOGIN",
          },
          {
            no: 228,
            name: "WEBSITE_FAILED_LOGIN",
          },
          {
            no: 91,
            name: "JB_OPEN_PLAN_INFO",
          },
          {
            no: 92,
            name: "JB_SNOOZE_PLUGIN",
          },
          {
            no: 93,
            name: "JB_TOGGLE_PLUGIN_STATUS",
          },
          {
            no: 94,
            name: "JB_SWITCH_CHANNEL",
          },
          {
            no: 95,
            name: "JB_OPEN_SETTINGS",
          },
          {
            no: 96,
            name: "JB_PLUGIN_LOG_IN",
          },
          {
            no: 97,
            name: "JB_PLUGIN_LOG_OUT",
          },
          {
            no: 98,
            name: "JB_OPEN_QUICK_REFERENCE",
          },
          {
            no: 99,
            name: "JB_EDIT_KEYBOARD_SHORTCUTS",
          },
          {
            no: 100,
            name: "JB_CASCADE_BAR_CASCADE_ICON",
          },
          {
            no: 101,
            name: "JB_CASCADE_BAR_FILE_NAV",
          },
          {
            no: 102,
            name: "JB_CASCADE_BAR_HUNK_NAV",
          },
          {
            no: 103,
            name: "JB_CASCADE_BAR_ACCEPT_FILE",
          },
          {
            no: 104,
            name: "JB_CASCADE_BAR_REJECT_FILE",
          },
          {
            no: 105,
            name: "JB_INLAY_HUNK_ACCEPT",
          },
          {
            no: 106,
            name: "JB_INLAY_HUNK_REJECT",
          },
          {
            no: 107,
            name: "JB_DIFF_RE_RENDER",
          },
          {
            no: 108,
            name: "JB_ONBOARDING_OPENED",
          },
          {
            no: 109,
            name: "JB_ONBOARDING_COMPLETED",
          },
          {
            no: 110,
            name: "JB_ONBOARDING_SKIPPED",
          },
          {
            no: 111,
            name: "JB_ONBOARDING_LEARN_MORE",
          },
          {
            no: 116,
            name: "JB_DIFF_RESOLUTION_ERRORED",
          },
          {
            no: 117,
            name: "JB_ACKNOWLEDGE_CODE_EDIT_ERRORED",
          },
          {
            no: 118,
            name: "JB_OPEN_SETTINGS_NOTIFICATION",
          },
          {
            no: 148,
            name: "JB_MCP_ADD_SERVER",
          },
          {
            no: 149,
            name: "JB_MCP_SAVE_CONFIG",
          },
          {
            no: 150,
            name: "JB_MCP_EXPAND_TOOLS",
          },
          {
            no: 151,
            name: "JB_DISABLE_AUTOGEN_MEMORY",
          },
          {
            no: 154,
            name: "JB_TOGGLE_AUTOCOMPLETE",
          },
          {
            no: 174,
            name: "JB_LOGIN_MANUAL_AUTH_TOKEN",
          },
          {
            no: 179,
            name: "JB_AUTO_UPDATED",
          },
          {
            no: 182,
            name: "JB_DRAG_DROP_FILE",
          },
          {
            no: 183,
            name: "JB_AUTO_OPEN_CHAT_WINDOW",
          },
          {
            no: 155,
            name: "WS_TERMINAL_INTEGRATION_FORCE_EXIT",
          },
          {
            no: 156,
            name: "KNOWLEDGE_BASE_ITEM_CREATED",
          },
          {
            no: 157,
            name: "KNOWLEDGE_BASE_ITEM_EDITED",
          },
          {
            no: 158,
            name: "KNOWLEDGE_BASE_ITEM_DELETED",
          },
          {
            no: 159,
            name: "KNOWLEDGE_BASE_ITEM_READ",
          },
          {
            no: 160,
            name: "KNOWLEDGE_BASE_CONNECTION_CREATE",
          },
          {
            no: 161,
            name: "KNOWLEDGE_BASE_CONNECTION_REMOVE",
          },
          {
            no: 162,
            name: "TEAM_CONFIG_TOGGLE_AUTO_RUN_COMMANDS",
          },
          {
            no: 163,
            name: "TEAM_CONFIG_TOGGLE_MCP_SERVERS",
          },
          {
            no: 164,
            name: "TEAM_CONFIG_TOGGLE_APP_DEPLOYMENTS",
          },
          {
            no: 165,
            name: "TEAM_CONFIG_TOGGLE_SANDBOX_APP_DEPLOYMENTS",
          },
          {
            no: 166,
            name: "TEAM_CONFIG_TOGGLE_TEAMS_APP_DEPLOYMENTS",
          },
          {
            no: 167,
            name: "TEAM_CONFIG_TOGGLE_GITHUB_REVIEWS",
          },
          {
            no: 168,
            name: "TEAM_CONFIG_TOGGLE_GITHUB_DESCRIPTION_EDITS",
          },
          {
            no: 169,
            name: "TEAM_CONFIG_TOGGLE_PR_REVIEW_GUIDELINES",
          },
          {
            no: 170,
            name: "TEAM_CONFIG_TOGGLE_PR_DESCRIPTION_GUIDELINES",
          },
          {
            no: 171,
            name: "TEAM_CONFIG_TOGGLE_INDIVIDUAL_LEVEL_ANALYTICS",
          },
          {
            no: 172,
            name: "TEAM_CONFIG_TOGGLE_CONVERSATION_SHARING",
          },
          {
            no: 178,
            name: "TEAM_CONFIG_UPDATE_MCP_SERVERS",
          },
          {
            no: 207,
            name: "TEAM_CONFIG_TOGGLE_GITHUB_AUTO_REVIEWS",
          },
          {
            no: 213,
            name: "TEAM_CONFIG_UPDATE_TOP_UP_SETTINGS",
          },
          {
            no: 180,
            name: "BROWSER_OPEN",
          },
          {
            no: 181,
            name: "CASCADE_WEB_TOOLS_OPEN_BROWSER_MARKDOWN",
          },
          {
            no: 206,
            name: "BROWSER_PAGE_LOAD_SUCCESS",
          },
          {
            no: 208,
            name: "BROWSER_TOOLBAR_INSERT_PAGE_MENTION",
          },
          {
            no: 215,
            name: "BROWSER_INSERT_TEXT_CONTENT",
          },
          {
            no: 216,
            name: "BROWSER_INSERT_SCREENSHOT",
          },
          {
            no: 217,
            name: "BROWSER_INSERT_CODE_BLOCK",
          },
          {
            no: 218,
            name: "BROWSER_INSERT_LOG_BLOCK",
          },
          {
            no: 219,
            name: "BROWSER_INSERT_CONSOLE_OUTPUT",
          },
          {
            no: 220,
            name: "BROWSER_INSERT_DOM_ELEMENT",
          },
          {
            no: 195,
            name: "SUPERCOMPLETE_REQUEST_STARTED",
          },
          {
            no: 196,
            name: "SUPERCOMPLETE_CACHE_HIT",
          },
          {
            no: 197,
            name: "SUPERCOMPLETE_ERROR_GETTING_RESPONSE",
          },
          {
            no: 185,
            name: "SUPERCOMPLETE_NO_RESPONSE",
          },
          {
            no: 186,
            name: "SUPERCOMPLETE_REQUEST_SUCCEEDED",
          },
          {
            no: 187,
            name: "SUPERCOMPLETE_FILTERED",
          },
          {
            no: 188,
            name: "TAB_JUMP_REQUEST_STARTED",
          },
          {
            no: 189,
            name: "TAB_JUMP_CACHE_HIT",
          },
          {
            no: 190,
            name: "TAB_JUMP_ERROR_GETTING_RESPONSE",
          },
          {
            no: 191,
            name: "TAB_JUMP_NO_RESPONSE",
          },
          {
            no: 192,
            name: "TAB_JUMP_PROCESSING_COMPLETE",
          },
          {
            no: 193,
            name: "TAB_JUMP_FILTERED",
          },
          {
            no: 194,
            name: "TAB_JUMP_ERROR_UI_RENDERED",
          },
          {
            no: 198,
            name: "AUTO_CASCADE_PR_TITLE_GENERATED",
          },
          {
            no: 199,
            name: "AUTO_CASCADE_PR_DESCRIPTION_GENERATED",
          },
          {
            no: 200,
            name: "AUTO_CASCADE_PR_REVIEW_REQUESTED",
          },
          {
            no: 201,
            name: "AUTO_CASCADE_PR_REVIEW_GENERATED",
          },
          {
            no: 204,
            name: "AUTO_CASCADE_GITHUB_CONNECTION_ADDED",
          },
          {
            no: 205,
            name: "AUTO_CASCADE_GITHUB_CONNECTION_REMOVED",
          },
          {
            no: 221,
            name: "AUTOCOMPLETE_CHAT_NO_RESPONSE",
          },
          {
            no: 222,
            name: "AUTOCOMPLETE_CHAT_ERROR_GETTING_RESPONSE",
          },
          {
            no: 223,
            name: "AUTOCOMPLETE_CHAT_REQUEST_ACCEPTED",
          },
        ]),
        ((eR = nQ || (nQ = {}))[(eR.UNSPECIFIED = 0)] = "UNSPECIFIED"),
        (eR[(eR.GITHUB_BASE = 1)] = "GITHUB_BASE"),
        (eR[(eR.SLACK_BASE = 2)] = "SLACK_BASE"),
        (eR[(eR.SLACK_AGGREGATE = 3)] = "SLACK_AGGREGATE"),
        (eR[(eR.GOOGLE_DRIVE_BASE = 4)] = "GOOGLE_DRIVE_BASE"),
        (eR[(eR.JIRA_BASE = 5)] = "JIRA_BASE"),
        (eR[(eR.SCM = 6)] = "SCM"),
        n7.w.util.setEnumType(nQ, "exa.codeium_common_pb.IndexChoice", [
          {
            no: 0,
            name: "INDEX_CHOICE_UNSPECIFIED",
          },
          {
            no: 1,
            name: "INDEX_CHOICE_GITHUB_BASE",
          },
          {
            no: 2,
            name: "INDEX_CHOICE_SLACK_BASE",
          },
          {
            no: 3,
            name: "INDEX_CHOICE_SLACK_AGGREGATE",
          },
          {
            no: 4,
            name: "INDEX_CHOICE_GOOGLE_DRIVE_BASE",
          },
          {
            no: 5,
            name: "INDEX_CHOICE_JIRA_BASE",
          },
          {
            no: 6,
            name: "INDEX_CHOICE_SCM",
          },
        ]),
        ((eL = nz || (nz = {}))[(eL.UNSPECIFIED = 0)] = "UNSPECIFIED"),
        (eL[(eL.HEADER_1 = 1)] = "HEADER_1"),
        (eL[(eL.HEADER_2 = 2)] = "HEADER_2"),
        (eL[(eL.HEADER_3 = 3)] = "HEADER_3"),
        (eL[(eL.HEADER_4 = 4)] = "HEADER_4"),
        (eL[(eL.HEADER_5 = 5)] = "HEADER_5"),
        (eL[(eL.HEADER_6 = 6)] = "HEADER_6"),
        n7.w.util.setEnumType(nz, "exa.codeium_common_pb.MarkdownNodeType", [
          {
            no: 0,
            name: "MARKDOWN_NODE_TYPE_UNSPECIFIED",
          },
          {
            no: 1,
            name: "MARKDOWN_NODE_TYPE_HEADER_1",
          },
          {
            no: 2,
            name: "MARKDOWN_NODE_TYPE_HEADER_2",
          },
          {
            no: 3,
            name: "MARKDOWN_NODE_TYPE_HEADER_3",
          },
          {
            no: 4,
            name: "MARKDOWN_NODE_TYPE_HEADER_4",
          },
          {
            no: 5,
            name: "MARKDOWN_NODE_TYPE_HEADER_5",
          },
          {
            no: 6,
            name: "MARKDOWN_NODE_TYPE_HEADER_6",
          },
        ]),
        ((ep = nj || (nj = {}))[(ep.UNSPECIFIED = 0)] = "UNSPECIFIED"),
        (ep[(ep.USER = 1)] = "USER"),
        (ep[(ep.CASCADE = 2)] = "CASCADE"),
        n7.w.util.setEnumType(
          nj,
          "exa.codeium_common_pb.TerminalShellCommandSource",
          [
            {
              no: 0,
              name: "TERMINAL_SHELL_COMMAND_SOURCE_UNSPECIFIED",
            },
            {
              no: 1,
              name: "TERMINAL_SHELL_COMMAND_SOURCE_USER",
            },
            {
              no: 2,
              name: "TERMINAL_SHELL_COMMAND_SOURCE_CASCADE",
            },
          ]
        ),
        ((eD = nZ || (nZ = {}))[(eD.UNSPECIFIED = 0)] = "UNSPECIFIED"),
        (eD[(eD.RUNNING = 1)] = "RUNNING"),
        (eD[(eD.COMPLETED = 2)] = "COMPLETED"),
        n7.w.util.setEnumType(
          nZ,
          "exa.codeium_common_pb.TerminalShellCommandStatus",
          [
            {
              no: 0,
              name: "TERMINAL_SHELL_COMMAND_STATUS_UNSPECIFIED",
            },
            {
              no: 1,
              name: "TERMINAL_SHELL_COMMAND_STATUS_RUNNING",
            },
            {
              no: 2,
              name: "TERMINAL_SHELL_COMMAND_STATUS_COMPLETED",
            },
          ]
        ),
        ((eP = n$ || (n$ = {}))[(eP.UNSPECIFIED = 0)] = "UNSPECIFIED"),
        (eP[(eP.QUEUED = 1)] = "QUEUED"),
        (eP[(eP.INITIALIZING = 2)] = "INITIALIZING"),
        (eP[(eP.BUILDING = 3)] = "BUILDING"),
        (eP[(eP.ERROR = 4)] = "ERROR"),
        (eP[(eP.READY = 5)] = "READY"),
        (eP[(eP.CANCELED = 6)] = "CANCELED"),
        n7.w.util.setEnumType(
          n$,
          "exa.codeium_common_pb.DeploymentBuildStatus",
          [
            {
              no: 0,
              name: "DEPLOYMENT_BUILD_STATUS_UNSPECIFIED",
            },
            {
              no: 1,
              name: "DEPLOYMENT_BUILD_STATUS_QUEUED",
            },
            {
              no: 2,
              name: "DEPLOYMENT_BUILD_STATUS_INITIALIZING",
            },
            {
              no: 3,
              name: "DEPLOYMENT_BUILD_STATUS_BUILDING",
            },
            {
              no: 4,
              name: "DEPLOYMENT_BUILD_STATUS_ERROR",
            },
            {
              no: 5,
              name: "DEPLOYMENT_BUILD_STATUS_READY",
            },
            {
              no: 6,
              name: "DEPLOYMENT_BUILD_STATUS_CANCELED",
            },
          ]
        ),
        ((eM = n1 || (n1 = {}))[(eM.UNSPECIFIED = 0)] = "UNSPECIFIED"),
        (eM[(eM.VERCEL = 1)] = "VERCEL"),
        (eM[(eM.NETLIFY = 2)] = "NETLIFY"),
        (eM[(eM.CLOUDFLARE = 3)] = "CLOUDFLARE"),
        n7.w.util.setEnumType(n1, "exa.codeium_common_pb.DeploymentProvider", [
          {
            no: 0,
            name: "DEPLOYMENT_PROVIDER_UNSPECIFIED",
          },
          {
            no: 1,
            name: "DEPLOYMENT_PROVIDER_VERCEL",
          },
          {
            no: 2,
            name: "DEPLOYMENT_PROVIDER_NETLIFY",
          },
          {
            no: 3,
            name: "DEPLOYMENT_PROVIDER_CLOUDFLARE",
          },
        ]),
        ((ey = n2 || (n2 = {}))[(ey.UNSPECIFIED = 0)] = "UNSPECIFIED"),
        (ey[(ey.AVAILABLE = 1)] = "AVAILABLE"),
        (ey[(ey.IN_USE = 2)] = "IN_USE"),
        (ey[(ey.TAKEN = 3)] = "TAKEN"),
        (ey[(ey.INVALID = 4)] = "INVALID"),
        n7.w.util.setEnumType(n2, "exa.codeium_common_pb.ValidationStatus", [
          {
            no: 0,
            name: "VALIDATION_STATUS_UNSPECIFIED",
          },
          {
            no: 1,
            name: "VALIDATION_STATUS_AVAILABLE",
          },
          {
            no: 2,
            name: "VALIDATION_STATUS_IN_USE",
          },
          {
            no: 3,
            name: "VALIDATION_STATUS_TAKEN",
          },
          {
            no: 4,
            name: "VALIDATION_STATUS_INVALID",
          },
        ]),
        ((eh = n0 || (n0 = {}))[(eh.UNSPECIFIED = 0)] = "UNSPECIFIED"),
        (eh[(eh.LLAMA_2 = 1)] = "LLAMA_2"),
        (eh[(eh.LLAMA_3 = 2)] = "LLAMA_3"),
        (eh[(eh.CHATML = 3)] = "CHATML"),
        (eh[(eh.CHAT_TRANSCRIPT = 4)] = "CHAT_TRANSCRIPT"),
        (eh[(eh.DEEPSEEK_V2 = 5)] = "DEEPSEEK_V2"),
        (eh[(eh.DEEPSEEK_V3 = 6)] = "DEEPSEEK_V3"),
        (eh[(eh.KIMI = 7)] = "KIMI"),
        n7.w.util.setEnumType(n0, "exa.codeium_common_pb.PromptTemplaterType", [
          {
            no: 0,
            name: "PROMPT_TEMPLATER_TYPE_UNSPECIFIED",
          },
          {
            no: 1,
            name: "PROMPT_TEMPLATER_TYPE_LLAMA_2",
          },
          {
            no: 2,
            name: "PROMPT_TEMPLATER_TYPE_LLAMA_3",
          },
          {
            no: 3,
            name: "PROMPT_TEMPLATER_TYPE_CHATML",
          },
          {
            no: 4,
            name: "PROMPT_TEMPLATER_TYPE_CHAT_TRANSCRIPT",
          },
          {
            no: 5,
            name: "PROMPT_TEMPLATER_TYPE_DEEPSEEK_V2",
          },
          {
            no: 6,
            name: "PROMPT_TEMPLATER_TYPE_DEEPSEEK_V3",
          },
          {
            no: 7,
            name: "PROMPT_TEMPLATER_TYPE_KIMI",
          },
        ]),
        ((eU = n9 || (n9 = {}))[(eU.UNSPECIFIED = 0)] = "UNSPECIFIED"),
        (eU[(eU.LLAMA_3 = 1)] = "LLAMA_3"),
        (eU[(eU.HERMES = 2)] = "HERMES"),
        (eU[(eU.XML = 3)] = "XML"),
        (eU[(eU.CHAT_TRANSCRIPT = 4)] = "CHAT_TRANSCRIPT"),
        (eU[(eU.KIMI = 5)] = "KIMI"),
        (eU[(eU.QWENCODER = 6)] = "QWENCODER"),
        n7.w.util.setEnumType(n9, "exa.codeium_common_pb.ToolFormatterType", [
          {
            no: 0,
            name: "TOOL_FORMATTER_TYPE_UNSPECIFIED",
          },
          {
            no: 1,
            name: "TOOL_FORMATTER_TYPE_LLAMA_3",
          },
          {
            no: 2,
            name: "TOOL_FORMATTER_TYPE_HERMES",
          },
          {
            no: 3,
            name: "TOOL_FORMATTER_TYPE_XML",
          },
          {
            no: 4,
            name: "TOOL_FORMATTER_TYPE_CHAT_TRANSCRIPT",
          },
          {
            no: 5,
            name: "TOOL_FORMATTER_TYPE_KIMI",
          },
          {
            no: 6,
            name: "TOOL_FORMATTER_TYPE_QWENCODER",
          },
        ]),
        ((eg = n3 || (n3 = {}))[(eg.UNSPECIFIED = 0)] = "UNSPECIFIED"),
        (eg[(eg.NOT_INSTALLED = 1)] = "NOT_INSTALLED"),
        (eg[(eg.IN_PROGRESS = 2)] = "IN_PROGRESS"),
        (eg[(eg.COMPLETE = 3)] = "COMPLETE"),
        (eg[(eg.ERROR = 4)] = "ERROR"),
        n7.w.util.setEnumType(
          n3,
          "exa.codeium_common_pb.BrowserInstallationStatus",
          [
            {
              no: 0,
              name: "BROWSER_INSTALLATION_STATUS_UNSPECIFIED",
            },
            {
              no: 1,
              name: "BROWSER_INSTALLATION_STATUS_NOT_INSTALLED",
            },
            {
              no: 2,
              name: "BROWSER_INSTALLATION_STATUS_IN_PROGRESS",
            },
            {
              no: 3,
              name: "BROWSER_INSTALLATION_STATUS_COMPLETE",
            },
            {
              no: 4,
              name: "BROWSER_INSTALLATION_STATUS_ERROR",
            },
          ]
        ),
        ((eJ = n4 || (n4 = {}))[(eJ.UNSPECIFIED = 0)] = "UNSPECIFIED"),
        (eJ[(eJ.CASCADE = 1)] = "CASCADE"),
        (eJ[(eJ.MAINLINE_TRAJECTORY = 2)] = "MAINLINE_TRAJECTORY"),
        n7.w.util.setEnumType(n4, "exa.codeium_common_pb.TrajectoryType", [
          {
            no: 0,
            name: "TRAJECTORY_TYPE_UNSPECIFIED",
          },
          {
            no: 1,
            name: "TRAJECTORY_TYPE_CASCADE",
          },
          {
            no: 2,
            name: "TRAJECTORY_TYPE_MAINLINE_TRAJECTORY",
          },
        ]),
        ((ek = n5 || (n5 = {}))[(ek.UNSPECIFIED = 0)] = "UNSPECIFIED"),
        (ek[(ek.RULE = 1)] = "RULE"),
        (ek[(ek.WORKFLOW = 2)] = "WORKFLOW"),
        n7.w.util.setEnumType(
          n5,
          "exa.codeium_common_pb.RefreshCustomizationType",
          [
            {
              no: 0,
              name: "REFRESH_CUSTOMIZATION_TYPE_UNSPECIFIED",
            },
            {
              no: 1,
              name: "REFRESH_CUSTOMIZATION_TYPE_RULE",
            },
            {
              no: 2,
              name: "REFRESH_CUSTOMIZATION_TYPE_WORKFLOW",
            },
          ]
        ),
        ((eB = n8 || (n8 = {}))[(eB.UNSPECIFIED = 0)] = "UNSPECIFIED"),
        (eB[(eB.OPENAI = 1)] = "OPENAI"),
        n7.w.util.setEnumType(
          n8,
          "exa.codeium_common_pb.ThirdPartyWebSearchProvider",
          [
            {
              no: 0,
              name: "THIRD_PARTY_WEB_SEARCH_PROVIDER_UNSPECIFIED",
            },
            {
              no: 1,
              name: "THIRD_PARTY_WEB_SEARCH_PROVIDER_OPENAI",
            },
          ]
        ),
        ((eG = n6 || (n6 = {}))[(eG.UNSPECIFIED = 0)] = "UNSPECIFIED"),
        (eG[(eG.O3 = 1)] = "O3"),
        (eG[(eG.GPT_4_1 = 2)] = "GPT_4_1"),
        (eG[(eG.O4_MINI = 3)] = "O4_MINI"),
        n7.w.util.setEnumType(
          n6,
          "exa.codeium_common_pb.ThirdPartyWebSearchModel",
          [
            {
              no: 0,
              name: "THIRD_PARTY_WEB_SEARCH_MODEL_UNSPECIFIED",
            },
            {
              no: 1,
              name: "THIRD_PARTY_WEB_SEARCH_MODEL_O3",
            },
            {
              no: 2,
              name: "THIRD_PARTY_WEB_SEARCH_MODEL_GPT_4_1",
            },
            {
              no: 3,
              name: "THIRD_PARTY_WEB_SEARCH_MODEL_O4_MINI",
            },
          ]
        );
      class tr extends te.v {
        static fromBinary(e, n) {
          return new tr().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new tr().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new tr().fromJsonString(e, n);
        }
        static equals(e, n) {
          return n7.w.util.equals(tr, e, n);
        }
        constructor(e) {
          super(),
            (this.prompt = ""),
            (this.contextPrompt = ""),
            (this.uid = ""),
            (this.promptElementRanges = []),
            (this.promptElementKindInfos = []),
            (this.promptLatencyMs = tn.q.zero),
            (this.promptStageLatencies = []),
            (this.numTokenizedBytes = tn.q.zero),
            (this.editorLanguage = ""),
            (this.language = 0),
            (this.absolutePathUriForTelemetry = ""),
            (this.relativePathForTelemetry = ""),
            (this.workspaceUriForTelemetry = ""),
            (this.experimentFeaturesJson = ""),
            (this.experimentVariantJson = ""),
            (this.model = 0),
            (this.hasLineSuffix = !1),
            (this.shouldInlineFim = !1),
            (this.modelTag = ""),
            (this.experimentTags = []),
            (this.evalSuffix = ""),
            (this.promptAnnotationRanges = []),
            (this.supportsPackedStreamingCompletionMaps = !1),
            n7.w.util.initPartial(e, this);
        }
      }
      (tr.runtime = n7.w),
        (tr.typeName = "exa.codeium_common_pb.CompletionsRequest"),
        (tr.fields = n7.w.util.newFieldList(() => [
          {
            no: 1,
            name: "configuration",
            kind: "message",
            T: ti,
          },
          {
            no: 2,
            name: "prompt",
            kind: "scalar",
            T: 9,
          },
          {
            no: 21,
            name: "context_prompt",
            kind: "scalar",
            T: 9,
          },
          {
            no: 25,
            name: "uid",
            kind: "scalar",
            T: 9,
          },
          {
            no: 8,
            name: "prompt_element_ranges",
            kind: "message",
            T: ts,
            repeated: !0,
          },
          {
            no: 9,
            name: "prompt_element_kind_infos",
            kind: "message",
            T: tN,
            repeated: !0,
          },
          {
            no: 11,
            name: "prompt_latency_ms",
            kind: "scalar",
            T: 4,
          },
          {
            no: 12,
            name: "prompt_stage_latencies",
            kind: "message",
            T: tf,
            repeated: !0,
          },
          {
            no: 20,
            name: "num_tokenized_bytes",
            kind: "scalar",
            T: 4,
          },
          {
            no: 3,
            name: "editor_language",
            kind: "scalar",
            T: 9,
          },
          {
            no: 4,
            name: "language",
            kind: "enum",
            T: n7.w.getEnumType(e4),
          },
          {
            no: 5,
            name: "absolute_path_uri_for_telemetry",
            kind: "scalar",
            T: 9,
          },
          {
            no: 6,
            name: "relative_path_for_telemetry",
            kind: "scalar",
            T: 9,
          },
          {
            no: 13,
            name: "workspace_uri_for_telemetry",
            kind: "scalar",
            T: 9,
          },
          {
            no: 7,
            name: "experiment_features_json",
            kind: "scalar",
            T: 9,
          },
          {
            no: 19,
            name: "experiment_variant_json",
            kind: "scalar",
            T: 9,
          },
          {
            no: 10,
            name: "model",
            kind: "enum",
            T: n7.w.getEnumType(eV),
          },
          {
            no: 14,
            name: "has_line_suffix",
            kind: "scalar",
            T: 8,
          },
          {
            no: 15,
            name: "should_inline_fim",
            kind: "scalar",
            T: 8,
          },
          {
            no: 16,
            name: "repository",
            kind: "message",
            T: ai,
          },
          {
            no: 17,
            name: "model_tag",
            kind: "scalar",
            T: 9,
          },
          {
            no: 18,
            name: "experiment_tags",
            kind: "scalar",
            T: 9,
            repeated: !0,
          },
          {
            no: 22,
            name: "eval_suffix",
            kind: "scalar",
            T: 9,
          },
          {
            no: 23,
            name: "prompt_annotation_ranges",
            kind: "message",
            T: t_,
            repeated: !0,
          },
          {
            no: 24,
            name: "supports_packed_streaming_completion_maps",
            kind: "scalar",
            T: 8,
          },
        ]));
      class ti extends te.v {
        static fromBinary(e, n) {
          return new ti().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new ti().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new ti().fromJsonString(e, n);
        }
        static equals(e, n) {
          return n7.w.util.equals(ti, e, n);
        }
        constructor(e) {
          super(),
            (this.numCompletions = tn.q.zero),
            (this.maxTokens = tn.q.zero),
            (this.maxNewlines = tn.q.zero),
            (this.minLogProbability = 0),
            (this.temperature = 0),
            (this.firstTemperature = 0),
            (this.topK = tn.q.zero),
            (this.topP = 0),
            (this.stopPatterns = []),
            (this.seed = tn.q.zero),
            (this.fimEotProbThreshold = 0),
            (this.useFimEotThreshold = !1),
            (this.doNotScoreStopTokens = !1),
            (this.sqrtLenNormalizedLogProbScore = !1),
            (this.lastMessageIsPartial = !1),
            (this.returnLogprob = !1),
            n7.w.util.initPartial(e, this);
        }
      }
      (ti.runtime = n7.w),
        (ti.typeName = "exa.codeium_common_pb.CompletionConfiguration"),
        (ti.fields = n7.w.util.newFieldList(() => [
          {
            no: 1,
            name: "num_completions",
            kind: "scalar",
            T: 4,
          },
          {
            no: 2,
            name: "max_tokens",
            kind: "scalar",
            T: 4,
          },
          {
            no: 3,
            name: "max_newlines",
            kind: "scalar",
            T: 4,
          },
          {
            no: 4,
            name: "min_log_probability",
            kind: "scalar",
            T: 1,
          },
          {
            no: 5,
            name: "temperature",
            kind: "scalar",
            T: 1,
          },
          {
            no: 6,
            name: "first_temperature",
            kind: "scalar",
            T: 1,
          },
          {
            no: 7,
            name: "top_k",
            kind: "scalar",
            T: 4,
          },
          {
            no: 8,
            name: "top_p",
            kind: "scalar",
            T: 1,
          },
          {
            no: 9,
            name: "stop_patterns",
            kind: "scalar",
            T: 9,
            repeated: !0,
          },
          {
            no: 10,
            name: "seed",
            kind: "scalar",
            T: 4,
          },
          {
            no: 11,
            name: "fim_eot_prob_threshold",
            kind: "scalar",
            T: 1,
          },
          {
            no: 12,
            name: "use_fim_eot_threshold",
            kind: "scalar",
            T: 8,
          },
          {
            no: 13,
            name: "do_not_score_stop_tokens",
            kind: "scalar",
            T: 8,
          },
          {
            no: 14,
            name: "sqrt_len_normalized_log_prob_score",
            kind: "scalar",
            T: 8,
          },
          {
            no: 15,
            name: "last_message_is_partial",
            kind: "scalar",
            T: 8,
          },
          {
            no: 16,
            name: "return_logprob",
            kind: "scalar",
            T: 8,
          },
        ]));
      class ts extends te.v {
        static fromBinary(e, n) {
          return new ts().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new ts().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new ts().fromJsonString(e, n);
        }
        static equals(e, n) {
          return n7.w.util.equals(ts, e, n);
        }
        constructor(e) {
          super(),
            (this.kind = 0),
            (this.byteOffsetStart = tn.q.zero),
            (this.byteOffsetEnd = tn.q.zero),
            (this.tokenOffsetStart = tn.q.zero),
            (this.tokenOffsetEnd = tn.q.zero),
            n7.w.util.initPartial(e, this);
        }
      }
      (ts.runtime = n7.w),
        (ts.typeName = "exa.codeium_common_pb.PromptElementRange"),
        (ts.fields = n7.w.util.newFieldList(() => [
          {
            no: 1,
            name: "kind",
            kind: "enum",
            T: n7.w.getEnumType(ex),
          },
          {
            no: 2,
            name: "byte_offset_start",
            kind: "scalar",
            T: 4,
          },
          {
            no: 3,
            name: "byte_offset_end",
            kind: "scalar",
            T: 4,
          },
          {
            no: 4,
            name: "token_offset_start",
            kind: "scalar",
            T: 4,
          },
          {
            no: 5,
            name: "token_offset_end",
            kind: "scalar",
            T: 4,
          },
        ]));
      class to extends te.v {
        static fromBinary(e, n) {
          return new to().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new to().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new to().fromJsonString(e, n);
        }
        static equals(e, n) {
          return n7.w.util.equals(to, e, n);
        }
        constructor(e) {
          super(),
            (this.cortexPlanId = ""),
            (this.codePlanId = ""),
            (this.actionIndex = 0),
            n7.w.util.initPartial(e, this);
        }
      }
      (to.runtime = n7.w),
        (to.typeName = "exa.codeium_common_pb.ActionPointer"),
        (to.fields = n7.w.util.newFieldList(() => [
          {
            no: 1,
            name: "cortex_plan_id",
            kind: "scalar",
            T: 9,
          },
          {
            no: 2,
            name: "code_plan_id",
            kind: "scalar",
            T: 9,
          },
          {
            no: 3,
            name: "action_index",
            kind: "scalar",
            T: 5,
          },
        ]));
      class t_ extends te.v {
        static fromBinary(e, n) {
          return new t_().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new t_().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new t_().fromJsonString(e, n);
        }
        static equals(e, n) {
          return n7.w.util.equals(t_, e, n);
        }
        constructor(e) {
          super(),
            (this.kind = 0),
            (this.byteOffsetStart = tn.q.zero),
            (this.byteOffsetEnd = tn.q.zero),
            (this.suffix = ""),
            n7.w.util.initPartial(e, this);
        }
      }
      (t_.runtime = n7.w),
        (t_.typeName = "exa.codeium_common_pb.PromptAnnotationRange"),
        (t_.fields = n7.w.util.newFieldList(() => [
          {
            no: 1,
            name: "kind",
            kind: "enum",
            T: n7.w.getEnumType(eq),
          },
          {
            no: 2,
            name: "byte_offset_start",
            kind: "scalar",
            T: 4,
          },
          {
            no: 3,
            name: "byte_offset_end",
            kind: "scalar",
            T: 4,
          },
          {
            no: 4,
            name: "suffix",
            kind: "scalar",
            T: 9,
          },
        ]));
      class tm extends te.v {
        static fromBinary(e, n) {
          return new tm().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new tm().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new tm().fromJsonString(e, n);
        }
        static equals(e, n) {
          return n7.w.util.equals(tm, e, n);
        }
        constructor(e) {
          super(),
            (this.key = 0),
            (this.keyString = ""),
            (this.disabled = !1),
            (this.payload = {
              case: void 0,
            }),
            (this.source = 0),
            n7.w.util.initPartial(e, this);
        }
      }
      (tm.runtime = n7.w),
        (tm.typeName = "exa.codeium_common_pb.ExperimentWithVariant"),
        (tm.fields = n7.w.util.newFieldList(() => [
          {
            no: 1,
            name: "key",
            kind: "enum",
            T: n7.w.getEnumType(eb),
          },
          {
            no: 5,
            name: "key_string",
            kind: "scalar",
            T: 9,
          },
          {
            no: 6,
            name: "disabled",
            kind: "scalar",
            T: 8,
          },
          {
            no: 2,
            name: "string",
            kind: "scalar",
            T: 9,
            oneof: "payload",
          },
          {
            no: 3,
            name: "json",
            kind: "scalar",
            T: 9,
            oneof: "payload",
          },
          {
            no: 4,
            name: "csv",
            kind: "scalar",
            T: 9,
            oneof: "payload",
          },
          {
            no: 7,
            name: "source",
            kind: "enum",
            T: n7.w.getEnumType(ev),
          },
        ]));
      class tE extends te.v {
        static fromBinary(e, n) {
          return new tE().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new tE().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new tE().fromJsonString(e, n);
        }
        static equals(e, n) {
          return n7.w.util.equals(tE, e, n);
        }
        constructor(e) {
          super(),
            (this.experiments = []),
            (this.forceEnableExperiments = []),
            (this.forceDisableExperiments = []),
            (this.forceEnableExperimentsWithVariants = []),
            (this.forceEnableExperimentStrings = []),
            (this.forceDisableExperimentStrings = []),
            (this.devMode = !1),
            n7.w.util.initPartial(e, this);
        }
      }
      (tE.runtime = n7.w),
        (tE.typeName = "exa.codeium_common_pb.ExperimentConfig"),
        (tE.fields = n7.w.util.newFieldList(() => [
          {
            no: 6,
            name: "experiments",
            kind: "message",
            T: tm,
            repeated: !0,
          },
          {
            no: 1,
            name: "force_enable_experiments",
            kind: "enum",
            T: n7.w.getEnumType(eb),
            repeated: !0,
          },
          {
            no: 2,
            name: "force_disable_experiments",
            kind: "enum",
            T: n7.w.getEnumType(eb),
            repeated: !0,
          },
          {
            no: 3,
            name: "force_enable_experiments_with_variants",
            kind: "message",
            T: tm,
            repeated: !0,
          },
          {
            no: 4,
            name: "force_enable_experiment_strings",
            kind: "scalar",
            T: 9,
            repeated: !0,
          },
          {
            no: 5,
            name: "force_disable_experiment_strings",
            kind: "scalar",
            T: 9,
            repeated: !0,
          },
          {
            no: 7,
            name: "dev_mode",
            kind: "scalar",
            T: 8,
          },
        ]));
      class tu extends te.v {
        static fromBinary(e, n) {
          return new tu().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new tu().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new tu().fromJsonString(e, n);
        }
        static equals(e, n) {
          return n7.w.util.equals(tu, e, n);
        }
        constructor(e) {
          super(),
            (this.sha = ""),
            (this.crc32cLinuxX64 = ""),
            (this.crc32cLinuxArm = ""),
            (this.crc32cMacosX64 = ""),
            (this.crc32cMacosArm = ""),
            (this.crc32cWindowsX64 = ""),
            n7.w.util.initPartial(e, this);
        }
      }
      (tu.runtime = n7.w),
        (tu.typeName =
          "exa.codeium_common_pb.ExperimentLanguageServerVersionPayload"),
        (tu.fields = n7.w.util.newFieldList(() => [
          {
            no: 1,
            name: "sha",
            kind: "scalar",
            T: 9,
          },
          {
            no: 2,
            name: "crc32c_linux_x64",
            kind: "scalar",
            T: 9,
          },
          {
            no: 3,
            name: "crc32c_linux_arm",
            kind: "scalar",
            T: 9,
          },
          {
            no: 4,
            name: "crc32c_macos_x64",
            kind: "scalar",
            T: 9,
          },
          {
            no: 5,
            name: "crc32c_macos_arm",
            kind: "scalar",
            T: 9,
          },
          {
            no: 6,
            name: "crc32c_windows_x64",
            kind: "scalar",
            T: 9,
          },
        ]));
      class tl extends te.v {
        static fromBinary(e, n) {
          return new tl().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new tl().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new tl().fromJsonString(e, n);
        }
        static equals(e, n) {
          return n7.w.util.equals(tl, e, n);
        }
        constructor(e) {
          super(),
            (this.modelName = ""),
            (this.contextCheckModelName = ""),
            n7.w.util.initPartial(e, this);
        }
      }
      (tl.runtime = n7.w),
        (tl.typeName = "exa.codeium_common_pb.ExperimentModelConfigPayload"),
        (tl.fields = n7.w.util.newFieldList(() => [
          {
            no: 1,
            name: "model_name",
            kind: "scalar",
            T: 9,
          },
          {
            no: 2,
            name: "context_check_model_name",
            kind: "scalar",
            T: 9,
          },
        ]));
      class tc extends te.v {
        static fromBinary(e, n) {
          return new tc().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new tc().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new tc().fromJsonString(e, n);
        }
        static equals(e, n) {
          return n7.w.util.equals(tc, e, n);
        }
        constructor(e) {
          super(), (this.modeToken = ""), n7.w.util.initPartial(e, this);
        }
      }
      (tc.runtime = n7.w),
        (tc.typeName =
          "exa.codeium_common_pb.ExperimentMiddleModeTokenPayload"),
        (tc.fields = n7.w.util.newFieldList(() => [
          {
            no: 1,
            name: "mode_token",
            kind: "scalar",
            T: 9,
          },
        ]));
      class tT extends te.v {
        static fromBinary(e, n) {
          return new tT().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new tT().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new tT().fromJsonString(e, n);
        }
        static equals(e, n) {
          return n7.w.util.equals(tT, e, n);
        }
        constructor(e) {
          super(), (this.threshold = 0), n7.w.util.initPartial(e, this);
        }
      }
      (tT.runtime = n7.w),
        (tT.typeName =
          "exa.codeium_common_pb.ExperimentMultilineModelThresholdPayload"),
        (tT.fields = n7.w.util.newFieldList(() => [
          {
            no: 1,
            name: "threshold",
            kind: "scalar",
            T: 2,
          },
        ]));
      class td extends te.v {
        static fromBinary(e, n) {
          return new td().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new td().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new td().fromJsonString(e, n);
        }
        static equals(e, n) {
          return n7.w.util.equals(td, e, n);
        }
        constructor(e) {
          super(),
            (this.sampleRate = 0),
            (this.procedureToSampleRate = {}),
            (this.errorMatchToSampleRate = {}),
            n7.w.util.initPartial(e, this);
        }
      }
      (td.runtime = n7.w),
        (td.typeName = "exa.codeium_common_pb.ExperimentSentryPayload"),
        (td.fields = n7.w.util.newFieldList(() => [
          {
            no: 2,
            name: "sample_rate",
            kind: "scalar",
            T: 1,
          },
          {
            no: 3,
            name: "procedure_to_sample_rate",
            kind: "map",
            K: 9,
            V: {
              kind: "scalar",
              T: 1,
            },
          },
          {
            no: 5,
            name: "error_match_to_sample_rate",
            kind: "map",
            K: 9,
            V: {
              kind: "scalar",
              T: 1,
            },
          },
        ]));
      class tS extends te.v {
        static fromBinary(e, n) {
          return new tS().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new tS().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new tS().fromJsonString(e, n);
        }
        static equals(e, n) {
          return n7.w.util.equals(tS, e, n);
        }
        constructor(e) {
          super(),
            (this.teamId = ""),
            (this.cascadeModelLabels = []),
            (this.commandModelLabels = []),
            (this.extensionModelLabels = []),
            n7.w.util.initPartial(e, this);
        }
      }
      (tS.runtime = n7.w),
        (tS.typeName = "exa.codeium_common_pb.TeamOrganizationalControls"),
        (tS.fields = n7.w.util.newFieldList(() => [
          {
            no: 1,
            name: "team_id",
            kind: "scalar",
            T: 9,
          },
          {
            no: 2,
            name: "cascade_model_labels",
            kind: "scalar",
            T: 9,
            repeated: !0,
          },
          {
            no: 3,
            name: "command_model_labels",
            kind: "scalar",
            T: 9,
            repeated: !0,
          },
          {
            no: 4,
            name: "created_at",
            kind: "message",
            T: tt.E,
          },
          {
            no: 5,
            name: "updated_at",
            kind: "message",
            T: tt.E,
          },
          {
            no: 6,
            name: "extension_model_labels",
            kind: "scalar",
            T: 9,
            repeated: !0,
          },
        ]));
      class tA extends te.v {
        static fromBinary(e, n) {
          return new tA().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new tA().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new tA().fromJsonString(e, n);
        }
        static equals(e, n) {
          return n7.w.util.equals(tA, e, n);
        }
        constructor(e) {
          super(),
            (this.memoryUsageToSampleRate = {}),
            n7.w.util.initPartial(e, this);
        }
      }
      (tA.runtime = n7.w),
        (tA.typeName =
          "exa.codeium_common_pb.ExperimentProfilingTelemetrySampleRatePayload"),
        (tA.fields = n7.w.util.newFieldList(() => [
          {
            no: 1,
            name: "memory_usage_to_sample_rate",
            kind: "map",
            K: 9,
            V: {
              kind: "scalar",
              T: 1,
            },
          },
        ]));
      class tO extends te.v {
        static fromBinary(e, n) {
          return new tO().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new tO().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new tO().fromJsonString(e, n);
        }
        static equals(e, n) {
          return n7.w.util.equals(tO, e, n);
        }
        constructor(e) {
          super(),
            (this.choice = {
              case: void 0,
            }),
            n7.w.util.initPartial(e, this);
        }
      }
      (tO.runtime = n7.w),
        (tO.typeName = "exa.codeium_common_pb.ModelOrAlias"),
        (tO.fields = n7.w.util.newFieldList(() => [
          {
            no: 1,
            name: "model",
            kind: "enum",
            T: n7.w.getEnumType(eV),
            oneof: "choice",
          },
          {
            no: 2,
            name: "alias",
            kind: "enum",
            T: n7.w.getEnumType(eH),
            oneof: "choice",
          },
        ]));
      class tN extends te.v {
        static fromBinary(e, n) {
          return new tN().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new tN().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new tN().fromJsonString(e, n);
        }
        static equals(e, n) {
          return n7.w.util.equals(tN, e, n);
        }
        constructor(e) {
          super(),
            (this.kind = 0),
            (this.experimentKey = 0),
            (this.enabled = !1),
            (this.numConsidered = tn.q.zero),
            (this.numIncluded = tn.q.zero),
            n7.w.util.initPartial(e, this);
        }
      }
      (tN.runtime = n7.w),
        (tN.typeName = "exa.codeium_common_pb.PromptElementKindInfo"),
        (tN.fields = n7.w.util.newFieldList(() => [
          {
            no: 1,
            name: "kind",
            kind: "enum",
            T: n7.w.getEnumType(ex),
          },
          {
            no: 2,
            name: "experiment_key",
            kind: "enum",
            T: n7.w.getEnumType(eb),
          },
          {
            no: 3,
            name: "enabled",
            kind: "scalar",
            T: 8,
          },
          {
            no: 4,
            name: "num_considered",
            kind: "scalar",
            T: 4,
          },
          {
            no: 5,
            name: "num_included",
            kind: "scalar",
            T: 4,
          },
        ]));
      class tC extends te.v {
        static fromBinary(e, n) {
          return new tC().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new tC().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new tC().fromJsonString(e, n);
        }
        static equals(e, n) {
          return n7.w.util.equals(tC, e, n);
        }
        constructor(e) {
          super(),
            (this.included = !1),
            (this.exclusionReason = 0),
            n7.w.util.initPartial(e, this);
        }
      }
      (tC.runtime = n7.w),
        (tC.typeName = "exa.codeium_common_pb.PromptElementInclusionMetadata"),
        (tC.fields = n7.w.util.newFieldList(() => [
          {
            no: 1,
            name: "included",
            kind: "scalar",
            T: 8,
          },
          {
            no: 2,
            name: "exclusion_reason",
            kind: "enum",
            T: n7.w.getEnumType(eK),
          },
        ]));
      class tf extends te.v {
        static fromBinary(e, n) {
          return new tf().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new tf().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new tf().fromJsonString(e, n);
        }
        static equals(e, n) {
          return n7.w.util.equals(tf, e, n);
        }
        constructor(e) {
          super(),
            (this.name = ""),
            (this.latencyMs = tn.q.zero),
            n7.w.util.initPartial(e, this);
        }
      }
      (tf.runtime = n7.w),
        (tf.typeName = "exa.codeium_common_pb.PromptStageLatency"),
        (tf.fields = n7.w.util.newFieldList(() => [
          {
            no: 1,
            name: "name",
            kind: "scalar",
            T: 9,
          },
          {
            no: 2,
            name: "latency_ms",
            kind: "scalar",
            T: 4,
          },
        ]));
      class tw extends te.v {
        static fromBinary(e, n) {
          return new tw().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new tw().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new tw().fromJsonString(e, n);
        }
        static equals(e, n) {
          return n7.w.util.equals(tw, e, n);
        }
        constructor(e) {
          super(),
            (this.completions = []),
            (this.maxTokens = tn.q.zero),
            (this.temperature = 0),
            (this.topK = tn.q.zero),
            (this.topP = 0),
            (this.stopPatterns = []),
            (this.promptLength = tn.q.zero),
            (this.promptId = ""),
            (this.modelTag = ""),
            n7.w.util.initPartial(e, this);
        }
      }
      (tw.runtime = n7.w),
        (tw.typeName = "exa.codeium_common_pb.CompletionResponse"),
        (tw.fields = n7.w.util.newFieldList(() => [
          {
            no: 1,
            name: "completions",
            kind: "message",
            T: tI,
            repeated: !0,
          },
          {
            no: 2,
            name: "max_tokens",
            kind: "scalar",
            T: 4,
          },
          {
            no: 3,
            name: "temperature",
            kind: "scalar",
            T: 1,
          },
          {
            no: 4,
            name: "top_k",
            kind: "scalar",
            T: 4,
          },
          {
            no: 5,
            name: "top_p",
            kind: "scalar",
            T: 1,
          },
          {
            no: 6,
            name: "stop_patterns",
            kind: "scalar",
            T: 9,
            repeated: !0,
          },
          {
            no: 7,
            name: "prompt_length",
            kind: "scalar",
            T: 4,
          },
          {
            no: 8,
            name: "prompt_id",
            kind: "scalar",
            T: 9,
          },
          {
            no: 10,
            name: "model_tag",
            kind: "scalar",
            T: 9,
          },
          {
            no: 11,
            name: "completion_profile",
            kind: "message",
            T: tp,
            opt: !0,
          },
        ]));
      class tI extends te.v {
        static fromBinary(e, n) {
          return new tI().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new tI().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new tI().fromJsonString(e, n);
        }
        static equals(e, n) {
          return n7.w.util.equals(tI, e, n);
        }
        constructor(e) {
          super(),
            (this.completionId = ""),
            (this.requestUid = ""),
            (this.text = ""),
            (this.stop = ""),
            (this.score = 0),
            (this.tokens = []),
            (this.decodedTokens = []),
            (this.probabilities = []),
            (this.adjustedProbabilities = []),
            (this.logprobs = []),
            (this.generatedLength = tn.q.zero),
            (this.stopReason = 0),
            (this.filterReasons = []),
            (this.originalText = ""),
            (this.toolCalls = []),
            n7.w.util.initPartial(e, this);
        }
      }
      (tI.runtime = n7.w),
        (tI.typeName = "exa.codeium_common_pb.Completion"),
        (tI.fields = n7.w.util.newFieldList(() => [
          {
            no: 1,
            name: "completion_id",
            kind: "scalar",
            T: 9,
          },
          {
            no: 17,
            name: "request_uid",
            kind: "scalar",
            T: 9,
          },
          {
            no: 2,
            name: "text",
            kind: "scalar",
            T: 9,
          },
          {
            no: 4,
            name: "stop",
            kind: "scalar",
            T: 9,
          },
          {
            no: 5,
            name: "score",
            kind: "scalar",
            T: 1,
          },
          {
            no: 6,
            name: "tokens",
            kind: "scalar",
            T: 4,
            repeated: !0,
          },
          {
            no: 7,
            name: "decoded_tokens",
            kind: "scalar",
            T: 9,
            repeated: !0,
          },
          {
            no: 8,
            name: "probabilities",
            kind: "scalar",
            T: 1,
            repeated: !0,
          },
          {
            no: 9,
            name: "adjusted_probabilities",
            kind: "scalar",
            T: 1,
            repeated: !0,
          },
          {
            no: 16,
            name: "logprobs",
            kind: "scalar",
            T: 1,
            repeated: !0,
          },
          {
            no: 10,
            name: "generated_length",
            kind: "scalar",
            T: 4,
          },
          {
            no: 12,
            name: "stop_reason",
            kind: "enum",
            T: n7.w.getEnumType(eX),
          },
          {
            no: 13,
            name: "filter_reasons",
            kind: "enum",
            T: n7.w.getEnumType(eY),
            repeated: !0,
          },
          {
            no: 14,
            name: "original_text",
            kind: "scalar",
            T: 9,
          },
          {
            no: 15,
            name: "tool_calls",
            kind: "message",
            T: ra,
            repeated: !0,
          },
        ]));
      class tR extends te.v {
        static fromBinary(e, n) {
          return new tR().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new tR().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new tR().fromJsonString(e, n);
        }
        static equals(e, n) {
          return n7.w.util.equals(tR, e, n);
        }
        constructor(e) {
          super(),
            (this.completionIds = []),
            (this.maxTokens = tn.q.zero),
            (this.temperature = 0),
            (this.topK = tn.q.zero),
            (this.topP = 0),
            (this.stopPatterns = []),
            (this.promptLength = tn.q.zero),
            (this.promptId = ""),
            (this.modelTag = ""),
            n7.w.util.initPartial(e, this);
        }
      }
      (tR.runtime = n7.w),
        (tR.typeName = "exa.codeium_common_pb.StreamingCompletionInfo"),
        (tR.fields = n7.w.util.newFieldList(() => [
          {
            no: 1,
            name: "completion_ids",
            kind: "scalar",
            T: 9,
            repeated: !0,
          },
          {
            no: 2,
            name: "max_tokens",
            kind: "scalar",
            T: 4,
          },
          {
            no: 3,
            name: "temperature",
            kind: "scalar",
            T: 1,
          },
          {
            no: 4,
            name: "top_k",
            kind: "scalar",
            T: 4,
          },
          {
            no: 5,
            name: "top_p",
            kind: "scalar",
            T: 1,
          },
          {
            no: 6,
            name: "stop_patterns",
            kind: "scalar",
            T: 9,
            repeated: !0,
          },
          {
            no: 7,
            name: "prompt_length",
            kind: "scalar",
            T: 4,
          },
          {
            no: 9,
            name: "prompt_id",
            kind: "scalar",
            T: 9,
          },
          {
            no: 8,
            name: "model_tag",
            kind: "scalar",
            T: 9,
          },
          {
            no: 10,
            name: "completions_request",
            kind: "message",
            T: tr,
          },
          {
            no: 11,
            name: "eval_suffix_info",
            kind: "message",
            T: ty,
          },
        ]));
      class tL extends te.v {
        static fromBinary(e, n) {
          return new tL().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new tL().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new tL().fromJsonString(e, n);
        }
        static equals(e, n) {
          return n7.w.util.equals(tL, e, n);
        }
        constructor(e) {
          super(),
            (this.totalPrefillPassTime = 0),
            (this.avgPrefillPassTime = 0),
            (this.numPrefillPasses = tn.q.zero),
            (this.totalSpecCopyPassTime = 0),
            (this.avgSpecCopyPassTime = 0),
            (this.numSpecCopyPasses = tn.q.zero),
            (this.totalGenerationPassTime = 0),
            (this.avgGenerationPassTime = 0),
            (this.numGenerationPasses = tn.q.zero),
            (this.totalModelTime = 0),
            n7.w.util.initPartial(e, this);
        }
      }
      (tL.runtime = n7.w),
        (tL.typeName = "exa.codeium_common_pb.SingleModelCompletionProfile"),
        (tL.fields = n7.w.util.newFieldList(() => [
          {
            no: 1,
            name: "total_prefill_pass_time",
            kind: "scalar",
            T: 1,
          },
          {
            no: 2,
            name: "avg_prefill_pass_time",
            kind: "scalar",
            T: 1,
          },
          {
            no: 3,
            name: "num_prefill_passes",
            kind: "scalar",
            T: 4,
          },
          {
            no: 7,
            name: "total_spec_copy_pass_time",
            kind: "scalar",
            T: 1,
          },
          {
            no: 8,
            name: "avg_spec_copy_pass_time",
            kind: "scalar",
            T: 1,
          },
          {
            no: 9,
            name: "num_spec_copy_passes",
            kind: "scalar",
            T: 4,
          },
          {
            no: 4,
            name: "total_generation_pass_time",
            kind: "scalar",
            T: 1,
          },
          {
            no: 5,
            name: "avg_generation_pass_time",
            kind: "scalar",
            T: 1,
          },
          {
            no: 6,
            name: "num_generation_passes",
            kind: "scalar",
            T: 4,
          },
          {
            no: 10,
            name: "total_model_time",
            kind: "scalar",
            T: 1,
          },
        ]));
      class tp extends te.v {
        static fromBinary(e, n) {
          return new tp().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new tp().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new tp().fromJsonString(e, n);
        }
        static equals(e, n) {
          return n7.w.util.equals(tp, e, n);
        }
        constructor(e) {
          super(),
            (this.timeToFirstPrefillPass = 0),
            (this.timeToFirstToken = 0),
            (this.totalCompletionTime = 0),
            n7.w.util.initPartial(e, this);
        }
      }
      (tp.runtime = n7.w),
        (tp.typeName = "exa.codeium_common_pb.CompletionProfile"),
        (tp.fields = n7.w.util.newFieldList(() => [
          {
            no: 1,
            name: "model_profile",
            kind: "message",
            T: tL,
          },
          {
            no: 2,
            name: "draft_model_profile",
            kind: "message",
            T: tL,
            opt: !0,
          },
          {
            no: 3,
            name: "time_to_first_prefill_pass",
            kind: "scalar",
            T: 1,
          },
          {
            no: 4,
            name: "time_to_first_token",
            kind: "scalar",
            T: 1,
          },
          {
            no: 5,
            name: "total_completion_time",
            kind: "scalar",
            T: 1,
          },
          {
            no: 6,
            name: "model_usage",
            kind: "message",
            T: rI,
            opt: !0,
          },
        ]));
      class tD extends te.v {
        static fromBinary(e, n) {
          return new tD().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new tD().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new tD().fromJsonString(e, n);
        }
        static equals(e, n) {
          return n7.w.util.equals(tD, e, n);
        }
        constructor(e) {
          super(),
            (this.decodedToken = new Uint8Array(0)),
            (this.token = tn.q.zero),
            (this.probability = 0),
            (this.adjustedProbability = 0),
            (this.logprob = 0),
            (this.completionFinished = !1),
            (this.stop = ""),
            (this.stopReason = 0),
            (this.attributionStatuses = {}),
            n7.w.util.initPartial(e, this);
        }
      }
      (tD.runtime = n7.w),
        (tD.typeName = "exa.codeium_common_pb.StreamingCompletion"),
        (tD.fields = n7.w.util.newFieldList(() => [
          {
            no: 1,
            name: "decoded_token",
            kind: "scalar",
            T: 12,
          },
          {
            no: 2,
            name: "token",
            kind: "scalar",
            T: 4,
          },
          {
            no: 3,
            name: "probability",
            kind: "scalar",
            T: 1,
          },
          {
            no: 4,
            name: "adjusted_probability",
            kind: "scalar",
            T: 1,
          },
          {
            no: 9,
            name: "logprob",
            kind: "scalar",
            T: 1,
          },
          {
            no: 5,
            name: "completion_finished",
            kind: "scalar",
            T: 8,
          },
          {
            no: 6,
            name: "stop",
            kind: "scalar",
            T: 9,
          },
          {
            no: 7,
            name: "stop_reason",
            kind: "enum",
            T: n7.w.getEnumType(eX),
          },
          {
            no: 8,
            name: "attribution_statuses",
            kind: "map",
            K: 13,
            V: {
              kind: "enum",
              T: n7.w.getEnumType(eQ),
            },
          },
        ]));
      class tP extends te.v {
        static fromBinary(e, n) {
          return new tP().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new tP().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new tP().fromJsonString(e, n);
        }
        static equals(e, n) {
          return n7.w.util.equals(tP, e, n);
        }
        constructor(e) {
          super(), (this.completions = {}), n7.w.util.initPartial(e, this);
        }
      }
      (tP.runtime = n7.w),
        (tP.typeName = "exa.codeium_common_pb.StreamingCompletionMap"),
        (tP.fields = n7.w.util.newFieldList(() => [
          {
            no: 1,
            name: "completions",
            kind: "map",
            K: 5,
            V: {
              kind: "message",
              T: tD,
            },
          },
        ]));
      class tM extends te.v {
        static fromBinary(e, n) {
          return new tM().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new tM().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new tM().fromJsonString(e, n);
        }
        static equals(e, n) {
          return n7.w.util.equals(tM, e, n);
        }
        constructor(e) {
          super(), (this.completionMaps = []), n7.w.util.initPartial(e, this);
        }
      }
      (tM.runtime = n7.w),
        (tM.typeName = "exa.codeium_common_pb.PackedStreamingCompletionMaps"),
        (tM.fields = n7.w.util.newFieldList(() => [
          {
            no: 1,
            name: "completion_maps",
            kind: "message",
            T: tP,
            repeated: !0,
          },
        ]));
      class ty extends te.v {
        static fromBinary(e, n) {
          return new ty().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new ty().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new ty().fromJsonString(e, n);
        }
        static equals(e, n) {
          return n7.w.util.equals(ty, e, n);
        }
        constructor(e) {
          super(),
            (this.perTokenLogLikelihoods = []),
            (this.isGreedy = !1),
            n7.w.util.initPartial(e, this);
        }
      }
      (ty.runtime = n7.w),
        (ty.typeName = "exa.codeium_common_pb.StreamingEvalSuffixInfo"),
        (ty.fields = n7.w.util.newFieldList(() => [
          {
            no: 1,
            name: "per_token_log_likelihoods",
            kind: "scalar",
            T: 2,
            repeated: !0,
          },
          {
            no: 2,
            name: "is_greedy",
            kind: "scalar",
            T: 8,
          },
        ]));
      class th extends te.v {
        static fromBinary(e, n) {
          return new th().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new th().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new th().fromJsonString(e, n);
        }
        static equals(e, n) {
          return n7.w.util.equals(th, e, n);
        }
        constructor(e) {
          super(),
            (this.payload = {
              case: void 0,
            }),
            n7.w.util.initPartial(e, this);
        }
      }
      (th.runtime = n7.w),
        (th.typeName = "exa.codeium_common_pb.StreamingCompletionResponse"),
        (th.fields = n7.w.util.newFieldList(() => [
          {
            no: 1,
            name: "completion_info",
            kind: "message",
            T: tR,
            oneof: "payload",
          },
          {
            no: 2,
            name: "completion_map",
            kind: "message",
            T: tP,
            oneof: "payload",
          },
          {
            no: 4,
            name: "packed_completion_maps",
            kind: "message",
            T: tM,
            oneof: "payload",
          },
          {
            no: 5,
            name: "completion_profile",
            kind: "message",
            T: tp,
            opt: !0,
          },
        ]));
      class tU extends te.v {
        static fromBinary(e, n) {
          return new tU().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new tU().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new tU().fromJsonString(e, n);
        }
        static equals(e, n) {
          return n7.w.util.equals(tU, e, n);
        }
        constructor(e) {
          super(),
            (this.apiServerLatencyMs = tn.q.zero),
            (this.languageServerLatencyMs = tn.q.zero),
            (this.networkLatencyMs = tn.q.zero),
            (this.apiServerFirstByteLatencyMs = tn.q.zero),
            (this.languageServerFirstByteLatencyMs = tn.q.zero),
            (this.networkFirstByteLatencyMs = tn.q.zero),
            (this.apiServerFirstLineLatencyMs = tn.q.zero),
            (this.languageServerFirstLineLatencyMs = tn.q.zero),
            (this.networkFirstLineLatencyMs = tn.q.zero),
            n7.w.util.initPartial(e, this);
        }
      }
      (tU.runtime = n7.w),
        (tU.typeName = "exa.codeium_common_pb.CompletionLatencyInfo"),
        (tU.fields = n7.w.util.newFieldList(() => [
          {
            no: 1,
            name: "api_server_latency_ms",
            kind: "scalar",
            T: 4,
          },
          {
            no: 2,
            name: "language_server_latency_ms",
            kind: "scalar",
            T: 4,
          },
          {
            no: 3,
            name: "network_latency_ms",
            kind: "scalar",
            T: 4,
          },
          {
            no: 4,
            name: "api_server_first_byte_latency_ms",
            kind: "scalar",
            T: 4,
          },
          {
            no: 5,
            name: "language_server_first_byte_latency_ms",
            kind: "scalar",
            T: 4,
          },
          {
            no: 6,
            name: "network_first_byte_latency_ms",
            kind: "scalar",
            T: 4,
          },
          {
            no: 7,
            name: "api_server_first_line_latency_ms",
            kind: "scalar",
            T: 4,
          },
          {
            no: 8,
            name: "language_server_first_line_latency_ms",
            kind: "scalar",
            T: 4,
          },
          {
            no: 9,
            name: "network_first_line_latency_ms",
            kind: "scalar",
            T: 4,
          },
        ]));
      class tg extends te.v {
        static fromBinary(e, n) {
          return new tg().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new tg().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new tg().fromJsonString(e, n);
        }
        static equals(e, n) {
          return n7.w.util.equals(tg, e, n);
        }
        constructor(e) {
          super(), n7.w.util.initPartial(e, this);
        }
      }
      (tg.runtime = n7.w),
        (tg.typeName = "exa.codeium_common_pb.CompletionWithLatencyInfo"),
        (tg.fields = n7.w.util.newFieldList(() => [
          {
            no: 1,
            name: "completion",
            kind: "message",
            T: tI,
          },
          {
            no: 2,
            name: "latency_info",
            kind: "message",
            T: tU,
          },
        ]));
      class tJ extends te.v {
        static fromBinary(e, n) {
          return new tJ().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new tJ().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new tJ().fromJsonString(e, n);
        }
        static equals(e, n) {
          return n7.w.util.equals(tJ, e, n);
        }
        constructor(e) {
          super(),
            (this.prompts = []),
            (this.priority = 0),
            (this.prefix = 0),
            (this.model = 0),
            n7.w.util.initPartial(e, this);
        }
      }
      (tJ.runtime = n7.w),
        (tJ.typeName = "exa.codeium_common_pb.EmbeddingsRequest"),
        (tJ.fields = n7.w.util.newFieldList(() => [
          {
            no: 1,
            name: "prompts",
            kind: "scalar",
            T: 9,
            repeated: !0,
          },
          {
            no: 2,
            name: "priority",
            kind: "enum",
            T: n7.w.getEnumType(ez),
          },
          {
            no: 3,
            name: "prefix",
            kind: "enum",
            T: n7.w.getEnumType(ej),
          },
          {
            no: 4,
            name: "model",
            kind: "enum",
            T: n7.w.getEnumType(eV),
          },
        ]));
      class tk extends te.v {
        static fromBinary(e, n) {
          return new tk().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new tk().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new tk().fromJsonString(e, n);
        }
        static equals(e, n) {
          return n7.w.util.equals(tk, e, n);
        }
        constructor(e) {
          super(), (this.values = []), n7.w.util.initPartial(e, this);
        }
      }
      (tk.runtime = n7.w),
        (tk.typeName = "exa.codeium_common_pb.Embedding"),
        (tk.fields = n7.w.util.newFieldList(() => [
          {
            no: 1,
            name: "values",
            kind: "scalar",
            T: 2,
            repeated: !0,
          },
        ]));
      class tB extends te.v {
        static fromBinary(e, n) {
          return new tB().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new tB().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new tB().fromJsonString(e, n);
        }
        static equals(e, n) {
          return n7.w.util.equals(tB, e, n);
        }
        constructor(e) {
          super(),
            (this.embeddings = []),
            (this.promptsExceededContextLength = !1),
            n7.w.util.initPartial(e, this);
        }
      }
      (tB.runtime = n7.w),
        (tB.typeName = "exa.codeium_common_pb.EmbeddingResponse"),
        (tB.fields = n7.w.util.newFieldList(() => [
          {
            no: 1,
            name: "embeddings",
            kind: "message",
            T: tk,
            repeated: !0,
          },
          {
            no: 2,
            name: "prompts_exceeded_context_length",
            kind: "scalar",
            T: 8,
          },
        ]));
      class tG extends te.v {
        static fromBinary(e, n) {
          return new tG().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new tG().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new tG().fromJsonString(e, n);
        }
        static equals(e, n) {
          return n7.w.util.equals(tG, e, n);
        }
        constructor(e) {
          super(),
            (this.prefix = ""),
            (this.items = []),
            (this.hasInstructTokens = !1),
            n7.w.util.initPartial(e, this);
        }
      }
      (tG.runtime = n7.w),
        (tG.typeName = "exa.codeium_common_pb.RewardsRequest"),
        (tG.fields = n7.w.util.newFieldList(() => [
          {
            no: 2,
            name: "prefix",
            kind: "scalar",
            T: 9,
          },
          {
            no: 3,
            name: "items",
            kind: "scalar",
            T: 9,
            repeated: !0,
          },
          {
            no: 4,
            name: "has_instruct_tokens",
            kind: "scalar",
            T: 8,
          },
        ]));
      class tF extends te.v {
        static fromBinary(e, n) {
          return new tF().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new tF().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new tF().fromJsonString(e, n);
        }
        static equals(e, n) {
          return n7.w.util.equals(tF, e, n);
        }
        constructor(e) {
          super(),
            (this.values = []),
            (this.promptsExceededContextLength = !1),
            n7.w.util.initPartial(e, this);
        }
      }
      (tF.runtime = n7.w),
        (tF.typeName = "exa.codeium_common_pb.RewardsResponse"),
        (tF.fields = n7.w.util.newFieldList(() => [
          {
            no: 1,
            name: "values",
            kind: "scalar",
            T: 2,
            repeated: !0,
          },
          {
            no: 2,
            name: "prompts_exceeded_context_length",
            kind: "scalar",
            T: 8,
          },
        ]));
      class tx extends te.v {
        static fromBinary(e, n) {
          return new tx().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new tx().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new tx().fromJsonString(e, n);
        }
        static equals(e, n) {
          return n7.w.util.equals(tx, e, n);
        }
        constructor(e) {
          super(),
            (this.ideName = ""),
            (this.ideVersion = ""),
            (this.ideType = ""),
            (this.extensionName = ""),
            (this.extensionVersion = ""),
            (this.apiKey = ""),
            (this.locale = ""),
            (this.os = ""),
            (this.hardware = ""),
            (this.disableTelemetry = !1),
            (this.sessionId = ""),
            (this.requestId = tn.q.zero),
            (this.sourceAddress = ""),
            (this.userAgent = ""),
            (this.url = ""),
            (this.authSource = 0),
            (this.extensionPath = ""),
            (this.userId = ""),
            (this.userJwt = ""),
            (this.forceTeamId = ""),
            (this.deviceFingerprint = ""),
            (this.triggerId = ""),
            (this.planName = ""),
            (this.id = ""),
            n7.w.util.initPartial(e, this);
        }
      }
      (tx.runtime = n7.w),
        (tx.typeName = "exa.codeium_common_pb.Metadata"),
        (tx.fields = n7.w.util.newFieldList(() => [
          {
            no: 1,
            name: "ide_name",
            kind: "scalar",
            T: 9,
          },
          {
            no: 7,
            name: "ide_version",
            kind: "scalar",
            T: 9,
          },
          {
            no: 28,
            name: "ide_type",
            kind: "scalar",
            T: 9,
          },
          {
            no: 12,
            name: "extension_name",
            kind: "scalar",
            T: 9,
          },
          {
            no: 2,
            name: "extension_version",
            kind: "scalar",
            T: 9,
          },
          {
            no: 3,
            name: "api_key",
            kind: "scalar",
            T: 9,
          },
          {
            no: 4,
            name: "locale",
            kind: "scalar",
            T: 9,
          },
          {
            no: 5,
            name: "os",
            kind: "scalar",
            T: 9,
          },
          {
            no: 8,
            name: "hardware",
            kind: "scalar",
            T: 9,
          },
          {
            no: 6,
            name: "disable_telemetry",
            kind: "scalar",
            T: 8,
          },
          {
            no: 10,
            name: "session_id",
            kind: "scalar",
            T: 9,
          },
          {
            no: 16,
            name: "ls_timestamp",
            kind: "message",
            T: tt.E,
          },
          {
            no: 9,
            name: "request_id",
            kind: "scalar",
            T: 4,
          },
          {
            no: 11,
            name: "source_address",
            kind: "scalar",
            T: 9,
          },
          {
            no: 13,
            name: "user_agent",
            kind: "scalar",
            T: 9,
          },
          {
            no: 14,
            name: "url",
            kind: "scalar",
            T: 9,
          },
          {
            no: 15,
            name: "auth_source",
            kind: "enum",
            T: n7.w.getEnumType(e$),
          },
          {
            no: 17,
            name: "extension_path",
            kind: "scalar",
            T: 9,
          },
          {
            no: 20,
            name: "user_id",
            kind: "scalar",
            T: 9,
          },
          {
            no: 21,
            name: "user_jwt",
            kind: "scalar",
            T: 9,
          },
          {
            no: 22,
            name: "force_team_id",
            kind: "scalar",
            T: 9,
          },
          {
            no: 24,
            name: "device_fingerprint",
            kind: "scalar",
            T: 9,
          },
          {
            no: 25,
            name: "trigger_id",
            kind: "scalar",
            T: 9,
          },
          {
            no: 26,
            name: "plan_name",
            kind: "scalar",
            T: 9,
          },
          {
            no: 27,
            name: "id",
            kind: "scalar",
            T: 9,
          },
        ]));
      class tq extends te.v {
        static fromBinary(e, n) {
          return new tq().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new tq().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new tq().fromJsonString(e, n);
        }
        static equals(e, n) {
          return n7.w.util.equals(tq, e, n);
        }
        constructor(e) {
          super(),
            (this.tabSize = tn.q.zero),
            (this.insertSpaces = !1),
            (this.disableAutocompleteInComments = !1),
            n7.w.util.initPartial(e, this);
        }
      }
      (tq.runtime = n7.w),
        (tq.typeName = "exa.codeium_common_pb.EditorOptions"),
        (tq.fields = n7.w.util.newFieldList(() => [
          {
            no: 1,
            name: "tab_size",
            kind: "scalar",
            T: 4,
          },
          {
            no: 2,
            name: "insert_spaces",
            kind: "scalar",
            T: 8,
          },
          {
            no: 3,
            name: "disable_autocomplete_in_comments",
            kind: "scalar",
            T: 8,
          },
        ]));
      class tb extends te.v {
        static fromBinary(e, n) {
          return new tb().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new tb().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new tb().fromJsonString(e, n);
        }
        static equals(e, n) {
          return n7.w.util.equals(tb, e, n);
        }
        constructor(e) {
          super(),
            (this.errorId = ""),
            (this.timestampUnixMs = tn.q.zero),
            (this.stacktrace = ""),
            (this.recovered = !1),
            n7.w.util.initPartial(e, this);
        }
      }
      (tb.runtime = n7.w),
        (tb.typeName = "exa.codeium_common_pb.ErrorTrace"),
        (tb.fields = n7.w.util.newFieldList(() => [
          {
            no: 1,
            name: "error_id",
            kind: "scalar",
            T: 9,
          },
          {
            no: 2,
            name: "timestamp_unix_ms",
            kind: "scalar",
            T: 3,
          },
          {
            no: 3,
            name: "stacktrace",
            kind: "scalar",
            T: 9,
          },
          {
            no: 4,
            name: "recovered",
            kind: "scalar",
            T: 8,
          },
        ]));
      class tv extends te.v {
        static fromBinary(e, n) {
          return new tv().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new tv().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new tv().fromJsonString(e, n);
        }
        static equals(e, n) {
          return n7.w.util.equals(tv, e, n);
        }
        constructor(e) {
          super(),
            (this.eventType = 0),
            (this.eventJson = ""),
            (this.timestampUnixMs = tn.q.zero),
            n7.w.util.initPartial(e, this);
        }
      }
      (tv.runtime = n7.w),
        (tv.typeName = "exa.codeium_common_pb.Event"),
        (tv.fields = n7.w.util.newFieldList(() => [
          {
            no: 1,
            name: "event_type",
            kind: "enum",
            T: n7.w.getEnumType(e1),
          },
          {
            no: 2,
            name: "event_json",
            kind: "scalar",
            T: 9,
          },
          {
            no: 3,
            name: "timestamp_unix_ms",
            kind: "scalar",
            T: 3,
          },
        ]));
      class tH extends te.v {
        static fromBinary(e, n) {
          return new tH().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new tH().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new tH().fromJsonString(e, n);
        }
        static equals(e, n) {
          return n7.w.util.equals(tH, e, n);
        }
        constructor(e) {
          super(),
            (this.searchId = ""),
            (this.resultId = ""),
            (this.absolutePath = ""),
            (this.workspacePaths = []),
            (this.text = ""),
            (this.similarityScore = 0),
            (this.numResultsInCluster = tn.q.zero),
            (this.representativePath = ""),
            (this.meanSimilarityScore = 0),
            (this.searchResultType = 0),
            n7.w.util.initPartial(e, this);
        }
      }
      (tH.runtime = n7.w),
        (tH.typeName = "exa.codeium_common_pb.SearchResultRecord"),
        (tH.fields = n7.w.util.newFieldList(() => [
          {
            no: 1,
            name: "search_id",
            kind: "scalar",
            T: 9,
          },
          {
            no: 2,
            name: "result_id",
            kind: "scalar",
            T: 9,
          },
          {
            no: 3,
            name: "absolute_path",
            kind: "scalar",
            T: 9,
          },
          {
            no: 4,
            name: "workspace_paths",
            kind: "message",
            T: tV,
            repeated: !0,
          },
          {
            no: 5,
            name: "text",
            kind: "scalar",
            T: 9,
          },
          {
            no: 6,
            name: "embedding_metadata",
            kind: "message",
            T: tW,
          },
          {
            no: 7,
            name: "similarity_score",
            kind: "scalar",
            T: 2,
          },
          {
            no: 8,
            name: "num_results_in_cluster",
            kind: "scalar",
            T: 3,
          },
          {
            no: 9,
            name: "representative_path",
            kind: "scalar",
            T: 9,
          },
          {
            no: 10,
            name: "mean_similarity_score",
            kind: "scalar",
            T: 2,
          },
          {
            no: 11,
            name: "search_result_type",
            kind: "enum",
            T: n7.w.getEnumType(e2),
          },
        ]));
      class tV extends te.v {
        static fromBinary(e, n) {
          return new tV().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new tV().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new tV().fromJsonString(e, n);
        }
        static equals(e, n) {
          return n7.w.util.equals(tV, e, n);
        }
        constructor(e) {
          super(),
            (this.workspaceMigrateMeToUri = ""),
            (this.workspaceUri = ""),
            (this.relativePath = ""),
            n7.w.util.initPartial(e, this);
        }
      }
      (tV.runtime = n7.w),
        (tV.typeName = "exa.codeium_common_pb.WorkspacePath"),
        (tV.fields = n7.w.util.newFieldList(() => [
          {
            no: 1,
            name: "workspace_migrate_me_to_uri",
            kind: "scalar",
            T: 9,
          },
          {
            no: 3,
            name: "workspace_uri",
            kind: "scalar",
            T: 9,
          },
          {
            no: 2,
            name: "relative_path",
            kind: "scalar",
            T: 9,
          },
        ]));
      class tW extends te.v {
        static fromBinary(e, n) {
          return new tW().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new tW().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new tW().fromJsonString(e, n);
        }
        static equals(e, n) {
          return n7.w.util.equals(tW, e, n);
        }
        constructor(e) {
          super(),
            (this.nodeName = ""),
            (this.startLine = 0),
            (this.endLine = 0),
            (this.embedType = 0),
            n7.w.util.initPartial(e, this);
        }
      }
      (tW.runtime = n7.w),
        (tW.typeName = "exa.codeium_common_pb.EmbeddingMetadata"),
        (tW.fields = n7.w.util.newFieldList(() => [
          {
            no: 1,
            name: "node_name",
            kind: "scalar",
            T: 9,
          },
          {
            no: 2,
            name: "start_line",
            kind: "scalar",
            T: 13,
          },
          {
            no: 3,
            name: "end_line",
            kind: "scalar",
            T: 13,
          },
          {
            no: 4,
            name: "embed_type",
            kind: "enum",
            T: n7.w.getEnumType(e0),
          },
        ]));
      class tK extends te.v {
        static fromBinary(e, n) {
          return new tK().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new tK().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new tK().fromJsonString(e, n);
        }
        static equals(e, n) {
          return n7.w.util.equals(tK, e, n);
        }
        constructor(e) {
          super(), (this.completions = []), n7.w.util.initPartial(e, this);
        }
      }
      (tK.runtime = n7.w),
        (tK.typeName = "exa.codeium_common_pb.MockResponseData"),
        (tK.fields = n7.w.util.newFieldList(() => [
          {
            no: 1,
            name: "completions",
            kind: "message",
            T: tI,
            repeated: !0,
          },
        ]));
      class tX extends te.v {
        static fromBinary(e, n) {
          return new tX().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new tX().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new tX().fromJsonString(e, n);
        }
        static equals(e, n) {
          return n7.w.util.equals(tX, e, n);
        }
        constructor(e) {
          super(),
            (this.workspaceUriForTelemetry = ""),
            (this.numFilesTotal = tn.q.zero),
            (this.numFilesToEmbed = tn.q.zero),
            (this.numNodesTotal = tn.q.zero),
            (this.numNodesToEmbed = tn.q.zero),
            (this.numTokens = tn.q.zero),
            (this.numHighPriorityNodesToEmbed = tn.q.zero),
            (this.error = ""),
            n7.w.util.initPartial(e, this);
        }
      }
      (tX.runtime = n7.w),
        (tX.typeName = "exa.codeium_common_pb.WorkspaceIndexData"),
        (tX.fields = n7.w.util.newFieldList(() => [
          {
            no: 1,
            name: "workspace_uri_for_telemetry",
            kind: "scalar",
            T: 9,
          },
          {
            no: 2,
            name: "indexing_start",
            kind: "message",
            T: tt.E,
          },
          {
            no: 3,
            name: "indexing_end",
            kind: "message",
            T: tt.E,
          },
          {
            no: 4,
            name: "embedding_duration",
            kind: "message",
            T: ta.n,
          },
          {
            no: 5,
            name: "num_files_total",
            kind: "scalar",
            T: 3,
          },
          {
            no: 6,
            name: "num_files_to_embed",
            kind: "scalar",
            T: 3,
          },
          {
            no: 7,
            name: "num_nodes_total",
            kind: "scalar",
            T: 3,
          },
          {
            no: 8,
            name: "num_nodes_to_embed",
            kind: "scalar",
            T: 3,
          },
          {
            no: 9,
            name: "num_tokens",
            kind: "scalar",
            T: 3,
          },
          {
            no: 10,
            name: "num_high_priority_nodes_to_embed",
            kind: "scalar",
            T: 3,
          },
          {
            no: 11,
            name: "error",
            kind: "scalar",
            T: 9,
          },
        ]));
      class tY extends te.v {
        static fromBinary(e, n) {
          return new tY().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new tY().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new tY().fromJsonString(e, n);
        }
        static equals(e, n) {
          return n7.w.util.equals(tY, e, n);
        }
        constructor(e) {
          super(),
            (this.workspace = ""),
            (this.numFiles = {}),
            (this.numBytes = {}),
            (this.initialScanCompleted = !1),
            n7.w.util.initPartial(e, this);
        }
      }
      (tY.runtime = n7.w),
        (tY.typeName = "exa.codeium_common_pb.WorkspaceStats"),
        (tY.fields = n7.w.util.newFieldList(() => [
          {
            no: 3,
            name: "workspace",
            kind: "scalar",
            T: 9,
          },
          {
            no: 1,
            name: "num_files",
            kind: "map",
            K: 5,
            V: {
              kind: "scalar",
              T: 3,
            },
          },
          {
            no: 2,
            name: "num_bytes",
            kind: "map",
            K: 5,
            V: {
              kind: "scalar",
              T: 3,
            },
          },
          {
            no: 4,
            name: "initial_scan_completed",
            kind: "scalar",
            T: 8,
          },
        ]));
      class tQ extends te.v {
        static fromBinary(e, n) {
          return new tQ().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new tQ().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new tQ().fromJsonString(e, n);
        }
        static equals(e, n) {
          return n7.w.util.equals(tQ, e, n);
        }
        constructor(e) {
          super(),
            (this.numTotalFiles = 0),
            (this.numIndexedFiles = 0),
            n7.w.util.initPartial(e, this);
        }
      }
      (tQ.runtime = n7.w),
        (tQ.typeName = "exa.codeium_common_pb.PartialIndexMetadata"),
        (tQ.fields = n7.w.util.newFieldList(() => [
          {
            no: 1,
            name: "num_total_files",
            kind: "scalar",
            T: 13,
          },
          {
            no: 2,
            name: "num_indexed_files",
            kind: "scalar",
            T: 13,
          },
          {
            no: 3,
            name: "cutoff_timestamp",
            kind: "message",
            T: tt.E,
          },
        ]));
      class tz extends te.v {
        static fromBinary(e, n) {
          return new tz().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new tz().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new tz().fromJsonString(e, n);
        }
        static equals(e, n) {
          return n7.w.util.equals(tz, e, n);
        }
        constructor(e) {
          super(),
            (this.rawSource = ""),
            (this.cleanFunction = ""),
            (this.docstring = ""),
            (this.nodeName = ""),
            (this.params = ""),
            (this.definitionLine = 0),
            (this.startLine = 0),
            (this.endLine = 0),
            (this.startCol = 0),
            (this.endCol = 0),
            (this.leadingWhitespace = ""),
            (this.language = 0),
            (this.bodyStartLine = 0),
            (this.bodyStartCol = 0),
            n7.w.util.initPartial(e, this);
        }
      }
      (tz.runtime = n7.w),
        (tz.typeName = "exa.codeium_common_pb.FunctionInfo"),
        (tz.fields = n7.w.util.newFieldList(() => [
          {
            no: 1,
            name: "raw_source",
            kind: "scalar",
            T: 9,
          },
          {
            no: 2,
            name: "clean_function",
            kind: "scalar",
            T: 9,
          },
          {
            no: 3,
            name: "docstring",
            kind: "scalar",
            T: 9,
          },
          {
            no: 4,
            name: "node_name",
            kind: "scalar",
            T: 9,
          },
          {
            no: 5,
            name: "params",
            kind: "scalar",
            T: 9,
          },
          {
            no: 6,
            name: "definition_line",
            kind: "scalar",
            T: 5,
          },
          {
            no: 7,
            name: "start_line",
            kind: "scalar",
            T: 5,
          },
          {
            no: 8,
            name: "end_line",
            kind: "scalar",
            T: 5,
          },
          {
            no: 9,
            name: "start_col",
            kind: "scalar",
            T: 5,
          },
          {
            no: 10,
            name: "end_col",
            kind: "scalar",
            T: 5,
          },
          {
            no: 11,
            name: "leading_whitespace",
            kind: "scalar",
            T: 9,
          },
          {
            no: 12,
            name: "language",
            kind: "enum",
            T: n7.w.getEnumType(e4),
          },
          {
            no: 13,
            name: "body_start_line",
            kind: "scalar",
            T: 5,
          },
          {
            no: 14,
            name: "body_start_col",
            kind: "scalar",
            T: 5,
          },
        ]));
      class tj extends te.v {
        static fromBinary(e, n) {
          return new tj().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new tj().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new tj().fromJsonString(e, n);
        }
        static equals(e, n) {
          return n7.w.util.equals(tj, e, n);
        }
        constructor(e) {
          super(),
            (this.rawSource = ""),
            (this.startLine = 0),
            (this.endLine = 0),
            (this.startCol = 0),
            (this.endCol = 0),
            (this.leadingWhitespace = ""),
            (this.fieldsAndConstructors = []),
            (this.docstring = ""),
            (this.nodeName = ""),
            (this.methods = []),
            (this.nodeLineage = []),
            (this.isExported = !1),
            (this.language = 0),
            (this.definitionLine = 0),
            n7.w.util.initPartial(e, this);
        }
      }
      (tj.runtime = n7.w),
        (tj.typeName = "exa.codeium_common_pb.ClassInfo"),
        (tj.fields = n7.w.util.newFieldList(() => [
          {
            no: 1,
            name: "raw_source",
            kind: "scalar",
            T: 9,
          },
          {
            no: 2,
            name: "start_line",
            kind: "scalar",
            T: 5,
          },
          {
            no: 3,
            name: "end_line",
            kind: "scalar",
            T: 5,
          },
          {
            no: 4,
            name: "start_col",
            kind: "scalar",
            T: 5,
          },
          {
            no: 5,
            name: "end_col",
            kind: "scalar",
            T: 5,
          },
          {
            no: 6,
            name: "leading_whitespace",
            kind: "scalar",
            T: 9,
          },
          {
            no: 7,
            name: "fields_and_constructors",
            kind: "scalar",
            T: 9,
            repeated: !0,
          },
          {
            no: 8,
            name: "docstring",
            kind: "scalar",
            T: 9,
          },
          {
            no: 9,
            name: "node_name",
            kind: "scalar",
            T: 9,
          },
          {
            no: 10,
            name: "methods",
            kind: "message",
            T: tz,
            repeated: !0,
          },
          {
            no: 11,
            name: "node_lineage",
            kind: "scalar",
            T: 9,
            repeated: !0,
          },
          {
            no: 12,
            name: "is_exported",
            kind: "scalar",
            T: 8,
          },
          {
            no: 13,
            name: "language",
            kind: "enum",
            T: n7.w.getEnumType(e4),
          },
          {
            no: 14,
            name: "definition_line",
            kind: "scalar",
            T: 5,
          },
        ]));
      class tZ extends te.v {
        static fromBinary(e, n) {
          return new tZ().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new tZ().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new tZ().fromJsonString(e, n);
        }
        static equals(e, n) {
          return n7.w.util.equals(tZ, e, n);
        }
        constructor(e) {
          super(),
            (this.isActive = !1),
            (this.stripeSubscriptionId = ""),
            (this.hasAccess = !1),
            n7.w.util.initPartial(e, this);
        }
      }
      (tZ.runtime = n7.w),
        (tZ.typeName = "exa.codeium_common_pb.TeamsFeaturesMetadata"),
        (tZ.fields = n7.w.util.newFieldList(() => [
          {
            no: 1,
            name: "is_active",
            kind: "scalar",
            T: 8,
          },
          {
            no: 2,
            name: "stripe_subscription_id",
            kind: "scalar",
            T: 9,
          },
          {
            no: 3,
            name: "has_access",
            kind: "scalar",
            T: 8,
          },
        ]));
      class t$ extends te.v {
        static fromBinary(e, n) {
          return new t$().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new t$().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new t$().fromJsonString(e, n);
        }
        static equals(e, n) {
          return n7.w.util.equals(t$, e, n);
        }
        constructor(e) {
          super(),
            (this.label = ""),
            (this.creditMultiplier = 0),
            (this.pricingType = 0),
            (this.disabled = !1),
            (this.supportsImages = !1),
            (this.supportsLegacy = !1),
            (this.isPremium = !1),
            (this.betaWarningMessage = ""),
            (this.isBeta = !1),
            (this.provider = 0),
            (this.isRecommended = !1),
            (this.allowedTiers = []),
            (this.apiProvider = 0),
            (this.isNew = !1),
            n7.w.util.initPartial(e, this);
        }
      }
      (t$.runtime = n7.w),
        (t$.typeName = "exa.codeium_common_pb.ClientModelConfig"),
        (t$.fields = n7.w.util.newFieldList(() => [
          {
            no: 1,
            name: "label",
            kind: "scalar",
            T: 9,
          },
          {
            no: 2,
            name: "model_or_alias",
            kind: "message",
            T: tO,
          },
          {
            no: 3,
            name: "credit_multiplier",
            kind: "scalar",
            T: 2,
          },
          {
            no: 13,
            name: "pricing_type",
            kind: "enum",
            T: n7.w.getEnumType(na),
          },
          {
            no: 4,
            name: "disabled",
            kind: "scalar",
            T: 8,
          },
          {
            no: 5,
            name: "supports_images",
            kind: "scalar",
            T: 8,
          },
          {
            no: 6,
            name: "supports_legacy",
            kind: "scalar",
            T: 8,
          },
          {
            no: 7,
            name: "is_premium",
            kind: "scalar",
            T: 8,
          },
          {
            no: 8,
            name: "beta_warning_message",
            kind: "scalar",
            T: 9,
          },
          {
            no: 9,
            name: "is_beta",
            kind: "scalar",
            T: 8,
          },
          {
            no: 10,
            name: "provider",
            kind: "enum",
            T: n7.w.getEnumType(nt),
          },
          {
            no: 11,
            name: "is_recommended",
            kind: "scalar",
            T: 8,
          },
          {
            no: 12,
            name: "allowed_tiers",
            kind: "enum",
            T: n7.w.getEnumType(nn),
            repeated: !0,
          },
          {
            no: 14,
            name: "api_provider",
            kind: "enum",
            T: n7.w.getEnumType(nG),
          },
          {
            no: 15,
            name: "is_new",
            kind: "scalar",
            T: 8,
          },
        ]));
      class t1 extends te.v {
        static fromBinary(e, n) {
          return new t1().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new t1().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new t1().fromJsonString(e, n);
        }
        static equals(e, n) {
          return n7.w.util.equals(t1, e, n);
        }
        constructor(e) {
          super(), (this.versionId = ""), n7.w.util.initPartial(e, this);
        }
      }
      (t1.runtime = n7.w),
        (t1.typeName = "exa.codeium_common_pb.DefaultOverrideModelConfig"),
        (t1.fields = n7.w.util.newFieldList(() => [
          {
            no: 1,
            name: "model_or_alias",
            kind: "message",
            T: tO,
          },
          {
            no: 2,
            name: "version_id",
            kind: "scalar",
            T: 9,
          },
        ]));
      class t2 extends te.v {
        static fromBinary(e, n) {
          return new t2().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new t2().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new t2().fromJsonString(e, n);
        }
        static equals(e, n) {
          return n7.w.util.equals(t2, e, n);
        }
        constructor(e) {
          super(),
            (this.name = ""),
            (this.groups = []),
            n7.w.util.initPartial(e, this);
        }
      }
      (t2.runtime = n7.w),
        (t2.typeName = "exa.codeium_common_pb.ClientModelSort"),
        (t2.fields = n7.w.util.newFieldList(() => [
          {
            no: 1,
            name: "name",
            kind: "scalar",
            T: 9,
          },
          {
            no: 2,
            name: "groups",
            kind: "message",
            T: t0,
            repeated: !0,
          },
        ]));
      class t0 extends te.v {
        static fromBinary(e, n) {
          return new t0().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new t0().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new t0().fromJsonString(e, n);
        }
        static equals(e, n) {
          return n7.w.util.equals(t0, e, n);
        }
        constructor(e) {
          super(),
            (this.groupName = ""),
            (this.modelLabels = []),
            n7.w.util.initPartial(e, this);
        }
      }
      (t0.runtime = n7.w),
        (t0.typeName = "exa.codeium_common_pb.ClientModelGroup"),
        (t0.fields = n7.w.util.newFieldList(() => [
          {
            no: 1,
            name: "group_name",
            kind: "scalar",
            T: 9,
          },
          {
            no: 2,
            name: "model_labels",
            kind: "scalar",
            T: 9,
            repeated: !0,
          },
        ]));
      class t9 extends te.v {
        static fromBinary(e, n) {
          return new t9().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new t9().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new t9().fromJsonString(e, n);
        }
        static equals(e, n) {
          return n7.w.util.equals(t9, e, n);
        }
        constructor(e) {
          super(),
            (this.clientModelConfigs = []),
            (this.clientModelSorts = []),
            n7.w.util.initPartial(e, this);
        }
      }
      (t9.runtime = n7.w),
        (t9.typeName = "exa.codeium_common_pb.CascadeModelConfigData"),
        (t9.fields = n7.w.util.newFieldList(() => [
          {
            no: 1,
            name: "client_model_configs",
            kind: "message",
            T: t$,
            repeated: !0,
          },
          {
            no: 2,
            name: "client_model_sorts",
            kind: "message",
            T: t2,
            repeated: !0,
          },
          {
            no: 3,
            name: "default_override_model_config",
            kind: "message",
            T: t1,
            opt: !0,
          },
        ]));
      class t3 extends te.v {
        static fromBinary(e, n) {
          return new t3().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new t3().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new t3().fromJsonString(e, n);
        }
        static equals(e, n) {
          return n7.w.util.equals(t3, e, n);
        }
        constructor(e) {
          super(), (this.creditMultiplier = 0), n7.w.util.initPartial(e, this);
        }
      }
      (t3.runtime = n7.w),
        (t3.typeName = "exa.codeium_common_pb.AllowedModelConfig"),
        (t3.fields = n7.w.util.newFieldList(() => [
          {
            no: 1,
            name: "model_or_alias",
            kind: "message",
            T: tO,
          },
          {
            no: 2,
            name: "credit_multiplier",
            kind: "scalar",
            T: 2,
          },
        ]));
      class t4 extends te.v {
        static fromBinary(e, n) {
          return new t4().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new t4().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new t4().fromJsonString(e, n);
        }
        static equals(e, n) {
          return n7.w.util.equals(t4, e, n);
        }
        constructor(e) {
          super(),
            (this.teamsTier = 0),
            (this.planName = ""),
            (this.hasAutocompleteFastMode = !1),
            (this.allowStickyPremiumModels = !1),
            (this.hasForgeAccess = !1),
            (this.disableCodeSnippetTelemetry = !1),
            (this.allowPremiumCommandModels = !1),
            (this.hasTabToJump = !1),
            (this.maxNumPremiumChatMessages = tn.q.zero),
            (this.maxNumChatInputTokens = tn.q.zero),
            (this.maxCustomChatInstructionCharacters = tn.q.zero),
            (this.maxNumPinnedContextItems = tn.q.zero),
            (this.maxLocalIndexSize = tn.q.zero),
            (this.maxUnclaimedSites = 0),
            (this.monthlyPromptCredits = 0),
            (this.monthlyFlowCredits = 0),
            (this.monthlyFlexCreditPurchaseAmount = 0),
            (this.isTeams = !1),
            (this.isEnterprise = !1),
            (this.canBuyMoreCredits = !1),
            (this.cascadeWebSearchEnabled = !1),
            (this.canCustomizeAppIcon = !1),
            (this.cascadeCanAutoRunCommands = !1),
            (this.canGenerateCommitMessages = !1),
            (this.knowledgeBaseEnabled = !1),
            (this.cascadeAllowedModelsConfig = []),
            (this.canShareConversations = !1),
            (this.canAllowCascadeInBackground = !1),
            (this.defaultTeamFeatures = {}),
            (this.browserEnabled = !1),
            n7.w.util.initPartial(e, this);
        }
      }
      (t4.runtime = n7.w),
        (t4.typeName = "exa.codeium_common_pb.PlanInfo"),
        (t4.fields = n7.w.util.newFieldList(() => [
          {
            no: 1,
            name: "teams_tier",
            kind: "enum",
            T: n7.w.getEnumType(nn),
          },
          {
            no: 2,
            name: "plan_name",
            kind: "scalar",
            T: 9,
          },
          {
            no: 3,
            name: "has_autocomplete_fast_mode",
            kind: "scalar",
            T: 8,
          },
          {
            no: 4,
            name: "allow_sticky_premium_models",
            kind: "scalar",
            T: 8,
          },
          {
            no: 5,
            name: "has_forge_access",
            kind: "scalar",
            T: 8,
          },
          {
            no: 11,
            name: "disable_code_snippet_telemetry",
            kind: "scalar",
            T: 8,
          },
          {
            no: 15,
            name: "allow_premium_command_models",
            kind: "scalar",
            T: 8,
          },
          {
            no: 23,
            name: "has_tab_to_jump",
            kind: "scalar",
            T: 8,
          },
          {
            no: 6,
            name: "max_num_premium_chat_messages",
            kind: "scalar",
            T: 3,
          },
          {
            no: 7,
            name: "max_num_chat_input_tokens",
            kind: "scalar",
            T: 3,
          },
          {
            no: 8,
            name: "max_custom_chat_instruction_characters",
            kind: "scalar",
            T: 3,
          },
          {
            no: 9,
            name: "max_num_pinned_context_items",
            kind: "scalar",
            T: 3,
          },
          {
            no: 10,
            name: "max_local_index_size",
            kind: "scalar",
            T: 3,
          },
          {
            no: 26,
            name: "max_unclaimed_sites",
            kind: "scalar",
            T: 5,
          },
          {
            no: 12,
            name: "monthly_prompt_credits",
            kind: "scalar",
            T: 5,
          },
          {
            no: 13,
            name: "monthly_flow_credits",
            kind: "scalar",
            T: 5,
          },
          {
            no: 14,
            name: "monthly_flex_credit_purchase_amount",
            kind: "scalar",
            T: 5,
          },
          {
            no: 17,
            name: "is_teams",
            kind: "scalar",
            T: 8,
          },
          {
            no: 16,
            name: "is_enterprise",
            kind: "scalar",
            T: 8,
          },
          {
            no: 18,
            name: "can_buy_more_credits",
            kind: "scalar",
            T: 8,
          },
          {
            no: 19,
            name: "cascade_web_search_enabled",
            kind: "scalar",
            T: 8,
          },
          {
            no: 20,
            name: "can_customize_app_icon",
            kind: "scalar",
            T: 8,
          },
          {
            no: 22,
            name: "cascade_can_auto_run_commands",
            kind: "scalar",
            T: 8,
          },
          {
            no: 25,
            name: "can_generate_commit_messages",
            kind: "scalar",
            T: 8,
          },
          {
            no: 27,
            name: "knowledge_base_enabled",
            kind: "scalar",
            T: 8,
          },
          {
            no: 21,
            name: "cascade_allowed_models_config",
            kind: "message",
            T: t3,
            repeated: !0,
          },
          {
            no: 24,
            name: "default_team_config",
            kind: "message",
            T: r$,
          },
          {
            no: 28,
            name: "can_share_conversations",
            kind: "scalar",
            T: 8,
          },
          {
            no: 29,
            name: "can_allow_cascade_in_background",
            kind: "scalar",
            T: 8,
          },
          {
            no: 30,
            name: "default_team_features",
            kind: "map",
            K: 5,
            V: {
              kind: "message",
              T: tZ,
            },
          },
          {
            no: 31,
            name: "browser_enabled",
            kind: "scalar",
            T: 8,
          },
        ]));
      class t5 extends te.v {
        static fromBinary(e, n) {
          return new t5().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new t5().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new t5().fromJsonString(e, n);
        }
        static equals(e, n) {
          return n7.w.util.equals(t5, e, n);
        }
        constructor(e) {
          super(),
            (this.topUpTransactionStatus = 0),
            (this.topUpEnabled = !1),
            (this.monthlyTopUpAmount = 0),
            (this.topUpSpent = 0),
            (this.topUpIncrement = 0),
            (this.topUpCriteriaMet = !1),
            n7.w.util.initPartial(e, this);
        }
      }
      (t5.runtime = n7.w),
        (t5.typeName = "exa.codeium_common_pb.TopUpStatus"),
        (t5.fields = n7.w.util.newFieldList(() => [
          {
            no: 1,
            name: "top_up_transaction_status",
            kind: "enum",
            T: n7.w.getEnumType(nr),
          },
          {
            no: 2,
            name: "top_up_enabled",
            kind: "scalar",
            T: 8,
          },
          {
            no: 3,
            name: "monthly_top_up_amount",
            kind: "scalar",
            T: 5,
          },
          {
            no: 4,
            name: "top_up_spent",
            kind: "scalar",
            T: 5,
          },
          {
            no: 5,
            name: "top_up_increment",
            kind: "scalar",
            T: 5,
          },
          {
            no: 6,
            name: "top_up_criteria_met",
            kind: "scalar",
            T: 8,
          },
        ]));
      class t8 extends te.v {
        static fromBinary(e, n) {
          return new t8().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new t8().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new t8().fromJsonString(e, n);
        }
        static equals(e, n) {
          return n7.w.util.equals(t8, e, n);
        }
        constructor(e) {
          super(),
            (this.availablePromptCredits = 0),
            (this.availableFlowCredits = 0),
            (this.availableFlexCredits = 0),
            (this.usedFlexCredits = 0),
            (this.usedFlowCredits = 0),
            (this.usedPromptCredits = 0),
            n7.w.util.initPartial(e, this);
        }
      }
      (t8.runtime = n7.w),
        (t8.typeName = "exa.codeium_common_pb.PlanStatus"),
        (t8.fields = n7.w.util.newFieldList(() => [
          {
            no: 1,
            name: "plan_info",
            kind: "message",
            T: t4,
          },
          {
            no: 2,
            name: "plan_start",
            kind: "message",
            T: tt.E,
          },
          {
            no: 3,
            name: "plan_end",
            kind: "message",
            T: tt.E,
          },
          {
            no: 8,
            name: "available_prompt_credits",
            kind: "scalar",
            T: 5,
          },
          {
            no: 9,
            name: "available_flow_credits",
            kind: "scalar",
            T: 5,
          },
          {
            no: 4,
            name: "available_flex_credits",
            kind: "scalar",
            T: 5,
          },
          {
            no: 7,
            name: "used_flex_credits",
            kind: "scalar",
            T: 5,
          },
          {
            no: 5,
            name: "used_flow_credits",
            kind: "scalar",
            T: 5,
          },
          {
            no: 6,
            name: "used_prompt_credits",
            kind: "scalar",
            T: 5,
          },
          {
            no: 10,
            name: "top_up_status",
            kind: "message",
            T: t5,
          },
        ]));
      class t6 extends te.v {
        static fromBinary(e, n) {
          return new t6().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new t6().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new t6().fromJsonString(e, n);
        }
        static equals(e, n) {
          return n7.w.util.equals(t6, e, n);
        }
        constructor(e) {
          super(),
            (this.pro = !1),
            (this.disableTelemetry = !1),
            (this.name = ""),
            (this.ignoreChatTelemetrySetting = !1),
            (this.teamId = ""),
            (this.teamStatus = 0),
            (this.email = ""),
            (this.userFeatures = []),
            (this.teamsFeatures = []),
            (this.permissions = []),
            (this.hasUsedWindsurf = !1),
            (this.userUsedPromptCredits = tn.q.zero),
            (this.userUsedFlowCredits = tn.q.zero),
            (this.hasFingerprintSet = !1),
            n7.w.util.initPartial(e, this);
        }
      }
      (t6.runtime = n7.w),
        (t6.typeName = "exa.codeium_common_pb.UserStatus"),
        (t6.fields = n7.w.util.newFieldList(() => [
          {
            no: 1,
            name: "pro",
            kind: "scalar",
            T: 8,
          },
          {
            no: 2,
            name: "disable_telemetry",
            kind: "scalar",
            T: 8,
          },
          {
            no: 3,
            name: "name",
            kind: "scalar",
            T: 9,
          },
          {
            no: 4,
            name: "ignore_chat_telemetry_setting",
            kind: "scalar",
            T: 8,
          },
          {
            no: 5,
            name: "team_id",
            kind: "scalar",
            T: 9,
          },
          {
            no: 6,
            name: "team_status",
            kind: "enum",
            T: n7.w.getEnumType(e8),
          },
          {
            no: 7,
            name: "email",
            kind: "scalar",
            T: 9,
          },
          {
            no: 9,
            name: "user_features",
            kind: "enum",
            T: n7.w.getEnumType(e7),
            repeated: !0,
          },
          {
            no: 8,
            name: "teams_features",
            kind: "enum",
            T: n7.w.getEnumType(e6),
            repeated: !0,
          },
          {
            no: 11,
            name: "permissions",
            kind: "enum",
            T: n7.w.getEnumType(ne),
            repeated: !0,
          },
          {
            no: 12,
            name: "plan_info",
            kind: "message",
            T: t4,
          },
          {
            no: 13,
            name: "plan_status",
            kind: "message",
            T: t8,
          },
          {
            no: 31,
            name: "has_used_windsurf",
            kind: "scalar",
            T: 8,
          },
          {
            no: 28,
            name: "user_used_prompt_credits",
            kind: "scalar",
            T: 3,
          },
          {
            no: 29,
            name: "user_used_flow_credits",
            kind: "scalar",
            T: 3,
          },
          {
            no: 30,
            name: "has_fingerprint_set",
            kind: "scalar",
            T: 8,
          },
          {
            no: 32,
            name: "team_config",
            kind: "message",
            T: r$,
          },
          {
            no: 33,
            name: "cascade_model_config_data",
            kind: "message",
            T: t9,
          },
        ]));
      class t7 extends te.v {
        static fromBinary(e, n) {
          return new t7().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new t7().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new t7().fromJsonString(e, n);
        }
        static equals(e, n) {
          return n7.w.util.equals(t7, e, n);
        }
        constructor(e) {
          super(),
            (this.info = {
              case: void 0,
            }),
            n7.w.util.initPartial(e, this);
        }
      }
      (t7.runtime = n7.w),
        (t7.typeName = "exa.codeium_common_pb.ScmWorkspaceInfo"),
        (t7.fields = n7.w.util.newFieldList(() => [
          {
            no: 1,
            name: "perforce_info",
            kind: "message",
            T: ae,
            oneof: "info",
          },
          {
            no: 2,
            name: "git_info",
            kind: "message",
            T: an,
            oneof: "info",
          },
        ]));
      class ae extends te.v {
        static fromBinary(e, n) {
          return new ae().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new ae().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new ae().fromJsonString(e, n);
        }
        static equals(e, n) {
          return n7.w.util.equals(ae, e, n);
        }
        constructor(e) {
          super(),
            (this.depotName = ""),
            (this.versionAlias = ""),
            (this.baseP4dUrl = ""),
            n7.w.util.initPartial(e, this);
        }
      }
      (ae.runtime = n7.w),
        (ae.typeName = "exa.codeium_common_pb.PerforceDepotInfo"),
        (ae.fields = n7.w.util.newFieldList(() => [
          {
            no: 1,
            name: "depot_name",
            kind: "scalar",
            T: 9,
          },
          {
            no: 2,
            name: "version_alias",
            kind: "scalar",
            T: 9,
          },
          {
            no: 3,
            name: "base_p4d_url",
            kind: "scalar",
            T: 9,
          },
        ]));
      class an extends te.v {
        static fromBinary(e, n) {
          return new an().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new an().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new an().fromJsonString(e, n);
        }
        static equals(e, n) {
          return n7.w.util.equals(an, e, n);
        }
        constructor(e) {
          super(),
            (this.name = ""),
            (this.owner = ""),
            (this.repoName = ""),
            (this.commit = ""),
            (this.versionAlias = ""),
            (this.scmProvider = 0),
            (this.baseGitUrl = ""),
            n7.w.util.initPartial(e, this);
        }
      }
      (an.runtime = n7.w),
        (an.typeName = "exa.codeium_common_pb.GitRepoInfo"),
        (an.fields = n7.w.util.newFieldList(() => [
          {
            no: 1,
            name: "name",
            kind: "scalar",
            T: 9,
          },
          {
            no: 2,
            name: "owner",
            kind: "scalar",
            T: 9,
          },
          {
            no: 5,
            name: "repo_name",
            kind: "scalar",
            T: 9,
          },
          {
            no: 3,
            name: "commit",
            kind: "scalar",
            T: 9,
          },
          {
            no: 4,
            name: "version_alias",
            kind: "scalar",
            T: 9,
          },
          {
            no: 6,
            name: "scm_provider",
            kind: "enum",
            T: n7.w.getEnumType(ni),
          },
          {
            no: 7,
            name: "base_git_url",
            kind: "scalar",
            T: 9,
          },
        ]));
      class at extends te.v {
        static fromBinary(e, n) {
          return new at().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new at().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new at().fromJsonString(e, n);
        }
        static equals(e, n) {
          return n7.w.util.equals(at, e, n);
        }
        constructor(e) {
          super(),
            (this.absolutePathMigrateMeToUri = ""),
            (this.absoluteUri = ""),
            (this.workspacePaths = []),
            (this.nodeName = ""),
            (this.nodeLineage = []),
            (this.startLine = 0),
            (this.startCol = 0),
            (this.endLine = 0),
            (this.endCol = 0),
            (this.contextType = 0),
            (this.language = 0),
            (this.snippetByType = {}),
            (this.fileContentHash = new Uint8Array(0)),
            n7.w.util.initPartial(e, this);
        }
      }
      (at.runtime = n7.w),
        (at.typeName = "exa.codeium_common_pb.CodeContextItem"),
        (at.fields = n7.w.util.newFieldList(() => [
          {
            no: 1,
            name: "absolute_path_migrate_me_to_uri",
            kind: "scalar",
            T: 9,
          },
          {
            no: 16,
            name: "absolute_uri",
            kind: "scalar",
            T: 9,
          },
          {
            no: 2,
            name: "workspace_paths",
            kind: "message",
            T: tV,
            repeated: !0,
          },
          {
            no: 3,
            name: "node_name",
            kind: "scalar",
            T: 9,
          },
          {
            no: 4,
            name: "node_lineage",
            kind: "scalar",
            T: 9,
            repeated: !0,
          },
          {
            no: 5,
            name: "start_line",
            kind: "scalar",
            T: 13,
          },
          {
            no: 12,
            name: "start_col",
            kind: "scalar",
            T: 13,
          },
          {
            no: 6,
            name: "end_line",
            kind: "scalar",
            T: 13,
          },
          {
            no: 13,
            name: "end_col",
            kind: "scalar",
            T: 13,
          },
          {
            no: 7,
            name: "context_type",
            kind: "enum",
            T: n7.w.getEnumType(no),
          },
          {
            no: 10,
            name: "language",
            kind: "enum",
            T: n7.w.getEnumType(e4),
          },
          {
            no: 11,
            name: "snippet_by_type",
            kind: "map",
            K: 9,
            V: {
              kind: "message",
              T: aa,
            },
          },
          {
            no: 14,
            name: "repo_info",
            kind: "message",
            T: an,
          },
          {
            no: 15,
            name: "file_content_hash",
            kind: "scalar",
            T: 12,
          },
        ]));
      class aa extends te.v {
        static fromBinary(e, n) {
          return new aa().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new aa().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new aa().fromJsonString(e, n);
        }
        static equals(e, n) {
          return n7.w.util.equals(aa, e, n);
        }
        constructor(e) {
          super(),
            (this.snippet = ""),
            (this.wordCountBySplitter = {}),
            n7.w.util.initPartial(e, this);
        }
      }
      (aa.runtime = n7.w),
        (aa.typeName = "exa.codeium_common_pb.SnippetWithWordCount"),
        (aa.fields = n7.w.util.newFieldList(() => [
          {
            no: 1,
            name: "snippet",
            kind: "scalar",
            T: 9,
          },
          {
            no: 2,
            name: "word_count_by_splitter",
            kind: "map",
            K: 9,
            V: {
              kind: "message",
              T: ar,
            },
          },
        ]));
      class ar extends te.v {
        static fromBinary(e, n) {
          return new ar().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new ar().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new ar().fromJsonString(e, n);
        }
        static equals(e, n) {
          return n7.w.util.equals(ar, e, n);
        }
        constructor(e) {
          super(), (this.wordCountMap = {}), n7.w.util.initPartial(e, this);
        }
      }
      (ar.runtime = n7.w),
        (ar.typeName = "exa.codeium_common_pb.WordCount"),
        (ar.fields = n7.w.util.newFieldList(() => [
          {
            no: 1,
            name: "word_count_map",
            kind: "map",
            K: 9,
            V: {
              kind: "scalar",
              T: 3,
            },
          },
        ]));
      class ai extends te.v {
        static fromBinary(e, n) {
          return new ai().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new ai().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new ai().fromJsonString(e, n);
        }
        static equals(e, n) {
          return n7.w.util.equals(ai, e, n);
        }
        constructor(e) {
          super(),
            (this.computedName = ""),
            (this.gitOriginUrl = ""),
            (this.gitUpstreamUrl = ""),
            (this.reportedName = ""),
            (this.modelName = ""),
            (this.submoduleUrl = ""),
            (this.submodulePath = ""),
            n7.w.util.initPartial(e, this);
        }
      }
      (ai.runtime = n7.w),
        (ai.typeName = "exa.codeium_common_pb.Repository"),
        (ai.fields = n7.w.util.newFieldList(() => [
          {
            no: 1,
            name: "computed_name",
            kind: "scalar",
            T: 9,
          },
          {
            no: 2,
            name: "git_origin_url",
            kind: "scalar",
            T: 9,
          },
          {
            no: 3,
            name: "git_upstream_url",
            kind: "scalar",
            T: 9,
          },
          {
            no: 4,
            name: "reported_name",
            kind: "scalar",
            T: 9,
          },
          {
            no: 5,
            name: "model_name",
            kind: "scalar",
            T: 9,
          },
          {
            no: 6,
            name: "submodule_url",
            kind: "scalar",
            T: 9,
          },
          {
            no: 7,
            name: "submodule_path",
            kind: "scalar",
            T: 9,
          },
        ]));
      class as extends te.v {
        static fromBinary(e, n) {
          return new as().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new as().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new as().fromJsonString(e, n);
        }
        static equals(e, n) {
          return n7.w.util.equals(as, e, n);
        }
        constructor(e) {
          super(),
            (this.promptId = ""),
            (this.filePath = ""),
            (this.originalFileContent = ""),
            (this.completionText = ""),
            (this.startOffset = tn.q.zero),
            (this.endOffset = tn.q.zero),
            (this.cursorLine = tn.q.zero),
            (this.cursorColumn = tn.q.zero),
            n7.w.util.initPartial(e, this);
        }
      }
      (as.runtime = n7.w),
        (as.typeName = "exa.codeium_common_pb.CaptureFileRequestData"),
        (as.fields = n7.w.util.newFieldList(() => [
          {
            no: 1,
            name: "metadata",
            kind: "message",
            T: tx,
          },
          {
            no: 2,
            name: "prompt_id",
            kind: "scalar",
            T: 9,
          },
          {
            no: 3,
            name: "file_path",
            kind: "scalar",
            T: 9,
          },
          {
            no: 4,
            name: "original_file_content",
            kind: "scalar",
            T: 9,
          },
          {
            no: 5,
            name: "completion_text",
            kind: "scalar",
            T: 9,
          },
          {
            no: 6,
            name: "start_offset",
            kind: "scalar",
            T: 4,
          },
          {
            no: 7,
            name: "end_offset",
            kind: "scalar",
            T: 4,
          },
          {
            no: 8,
            name: "cursor_line",
            kind: "scalar",
            T: 4,
          },
          {
            no: 9,
            name: "cursor_column",
            kind: "scalar",
            T: 4,
          },
        ]));
      class ao extends te.v {
        static fromBinary(e, n) {
          return new ao().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new ao().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new ao().fromJsonString(e, n);
        }
        static equals(e, n) {
          return n7.w.util.equals(ao, e, n);
        }
        constructor(e) {
          super(),
            (this.numAcceptances = 0),
            (this.numRejections = 0),
            (this.numLinesAccepted = 0),
            (this.numBytesAccepted = 0),
            (this.numUsers = 0),
            (this.activeDeveloperDays = 0),
            (this.activeDeveloperHours = 0),
            n7.w.util.initPartial(e, this);
        }
      }
      (ao.runtime = n7.w),
        (ao.typeName = "exa.codeium_common_pb.CompletionStatistics"),
        (ao.fields = n7.w.util.newFieldList(() => [
          {
            no: 1,
            name: "num_acceptances",
            kind: "scalar",
            T: 13,
          },
          {
            no: 2,
            name: "num_rejections",
            kind: "scalar",
            T: 13,
          },
          {
            no: 3,
            name: "num_lines_accepted",
            kind: "scalar",
            T: 13,
          },
          {
            no: 4,
            name: "num_bytes_accepted",
            kind: "scalar",
            T: 13,
          },
          {
            no: 5,
            name: "num_users",
            kind: "scalar",
            T: 13,
          },
          {
            no: 6,
            name: "active_developer_days",
            kind: "scalar",
            T: 13,
          },
          {
            no: 7,
            name: "active_developer_hours",
            kind: "scalar",
            T: 13,
          },
        ]));
      class a_ extends te.v {
        static fromBinary(e, n) {
          return new a_().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new a_().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new a_().fromJsonString(e, n);
        }
        static equals(e, n) {
          return n7.w.util.equals(a_, e, n);
        }
        constructor(e) {
          super(), n7.w.util.initPartial(e, this);
        }
      }
      (a_.runtime = n7.w),
        (a_.typeName = "exa.codeium_common_pb.CompletionByDateEntry"),
        (a_.fields = n7.w.util.newFieldList(() => [
          {
            no: 1,
            name: "timestamp",
            kind: "message",
            T: tt.E,
          },
          {
            no: 2,
            name: "completion_statistics",
            kind: "message",
            T: ao,
          },
        ]));
      class am extends te.v {
        static fromBinary(e, n) {
          return new am().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new am().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new am().fromJsonString(e, n);
        }
        static equals(e, n) {
          return n7.w.util.equals(am, e, n);
        }
        constructor(e) {
          super(), (this.language = 0), n7.w.util.initPartial(e, this);
        }
      }
      (am.runtime = n7.w),
        (am.typeName = "exa.codeium_common_pb.CompletionByLanguageEntry"),
        (am.fields = n7.w.util.newFieldList(() => [
          {
            no: 1,
            name: "language",
            kind: "enum",
            T: n7.w.getEnumType(e4),
          },
          {
            no: 2,
            name: "completion_statistics",
            kind: "message",
            T: ao,
          },
        ]));
      class aE extends te.v {
        static fromBinary(e, n) {
          return new aE().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new aE().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new aE().fromJsonString(e, n);
        }
        static equals(e, n) {
          return n7.w.util.equals(aE, e, n);
        }
        constructor(e) {
          super(),
            (this.chatsSent = tn.q.zero),
            (this.chatsReceived = tn.q.zero),
            (this.chatsAccepted = tn.q.zero),
            (this.chatsInsertedAtCursor = tn.q.zero),
            (this.chatsApplied = tn.q.zero),
            (this.chatLocUsed = tn.q.zero),
            (this.chatCodeBlocksUsed = tn.q.zero),
            (this.functionExplainCount = tn.q.zero),
            (this.functionDocstringCount = tn.q.zero),
            (this.functionRefactorCount = tn.q.zero),
            (this.codeBlockExplainCount = tn.q.zero),
            (this.codeBlockRefactorCount = tn.q.zero),
            (this.problemExplainCount = tn.q.zero),
            (this.functionUnitTestsCount = tn.q.zero),
            (this.activeDeveloperDays = 0),
            n7.w.util.initPartial(e, this);
        }
      }
      (aE.runtime = n7.w),
        (aE.typeName = "exa.codeium_common_pb.ChatStats"),
        (aE.fields = n7.w.util.newFieldList(() => [
          {
            no: 1,
            name: "chats_sent",
            kind: "scalar",
            T: 4,
          },
          {
            no: 2,
            name: "chats_received",
            kind: "scalar",
            T: 4,
          },
          {
            no: 3,
            name: "chats_accepted",
            kind: "scalar",
            T: 4,
          },
          {
            no: 4,
            name: "chats_inserted_at_cursor",
            kind: "scalar",
            T: 4,
          },
          {
            no: 5,
            name: "chats_applied",
            kind: "scalar",
            T: 4,
          },
          {
            no: 6,
            name: "chat_loc_used",
            kind: "scalar",
            T: 4,
          },
          {
            no: 7,
            name: "chat_code_blocks_used",
            kind: "scalar",
            T: 4,
          },
          {
            no: 8,
            name: "function_explain_count",
            kind: "scalar",
            T: 4,
          },
          {
            no: 9,
            name: "function_docstring_count",
            kind: "scalar",
            T: 4,
          },
          {
            no: 10,
            name: "function_refactor_count",
            kind: "scalar",
            T: 4,
          },
          {
            no: 11,
            name: "code_block_explain_count",
            kind: "scalar",
            T: 4,
          },
          {
            no: 12,
            name: "code_block_refactor_count",
            kind: "scalar",
            T: 4,
          },
          {
            no: 13,
            name: "problem_explain_count",
            kind: "scalar",
            T: 4,
          },
          {
            no: 14,
            name: "function_unit_tests_count",
            kind: "scalar",
            T: 4,
          },
          {
            no: 15,
            name: "active_developer_days",
            kind: "scalar",
            T: 13,
          },
        ]));
      class au extends te.v {
        static fromBinary(e, n) {
          return new au().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new au().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new au().fromJsonString(e, n);
        }
        static equals(e, n) {
          return n7.w.util.equals(au, e, n);
        }
        constructor(e) {
          super(), n7.w.util.initPartial(e, this);
        }
      }
      (au.runtime = n7.w),
        (au.typeName = "exa.codeium_common_pb.ChatStatsByDateEntry"),
        (au.fields = n7.w.util.newFieldList(() => [
          {
            no: 1,
            name: "timestamp",
            kind: "message",
            T: tt.E,
          },
          {
            no: 2,
            name: "chat_stats",
            kind: "message",
            T: aE,
          },
        ]));
      class al extends te.v {
        static fromBinary(e, n) {
          return new al().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new al().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new al().fromJsonString(e, n);
        }
        static equals(e, n) {
          return n7.w.util.equals(al, e, n);
        }
        constructor(e) {
          super(), (this.modelId = 0), n7.w.util.initPartial(e, this);
        }
      }
      (al.runtime = n7.w),
        (al.typeName = "exa.codeium_common_pb.ChatStatsByModelEntry"),
        (al.fields = n7.w.util.newFieldList(() => [
          {
            no: 1,
            name: "model_id",
            kind: "enum",
            T: n7.w.getEnumType(eV),
          },
          {
            no: 2,
            name: "chat_stats",
            kind: "message",
            T: aE,
          },
        ]));
      class ac extends te.v {
        static fromBinary(e, n) {
          return new ac().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new ac().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new ac().fromJsonString(e, n);
        }
        static equals(e, n) {
          return n7.w.util.equals(ac, e, n);
        }
        constructor(e) {
          super(),
            (this.numCommands = tn.q.zero),
            (this.numCommandsAccepted = tn.q.zero),
            (this.numCommandsRejected = tn.q.zero),
            (this.numEdits = tn.q.zero),
            (this.numGenerations = tn.q.zero),
            (this.locAdded = tn.q.zero),
            (this.locRemoved = tn.q.zero),
            (this.bytesAdded = tn.q.zero),
            (this.bytesRemoved = tn.q.zero),
            (this.locSelected = tn.q.zero),
            (this.bytesSelected = tn.q.zero),
            (this.numCommandsBySource = {}),
            n7.w.util.initPartial(e, this);
        }
      }
      (ac.runtime = n7.w),
        (ac.typeName = "exa.codeium_common_pb.CommandStats"),
        (ac.fields = n7.w.util.newFieldList(() => [
          {
            no: 1,
            name: "num_commands",
            kind: "scalar",
            T: 4,
          },
          {
            no: 2,
            name: "num_commands_accepted",
            kind: "scalar",
            T: 4,
          },
          {
            no: 3,
            name: "num_commands_rejected",
            kind: "scalar",
            T: 4,
          },
          {
            no: 4,
            name: "num_edits",
            kind: "scalar",
            T: 4,
          },
          {
            no: 5,
            name: "num_generations",
            kind: "scalar",
            T: 4,
          },
          {
            no: 6,
            name: "loc_added",
            kind: "scalar",
            T: 4,
          },
          {
            no: 7,
            name: "loc_removed",
            kind: "scalar",
            T: 4,
          },
          {
            no: 8,
            name: "bytes_added",
            kind: "scalar",
            T: 4,
          },
          {
            no: 9,
            name: "bytes_removed",
            kind: "scalar",
            T: 4,
          },
          {
            no: 10,
            name: "loc_selected",
            kind: "scalar",
            T: 4,
          },
          {
            no: 11,
            name: "bytes_selected",
            kind: "scalar",
            T: 4,
          },
          {
            no: 12,
            name: "num_commands_by_source",
            kind: "map",
            K: 9,
            V: {
              kind: "scalar",
              T: 4,
            },
          },
        ]));
      class aT extends te.v {
        static fromBinary(e, n) {
          return new aT().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new aT().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new aT().fromJsonString(e, n);
        }
        static equals(e, n) {
          return n7.w.util.equals(aT, e, n);
        }
        constructor(e) {
          super(), n7.w.util.initPartial(e, this);
        }
      }
      (aT.runtime = n7.w),
        (aT.typeName = "exa.codeium_common_pb.CommandStatsByDateEntry"),
        (aT.fields = n7.w.util.newFieldList(() => [
          {
            no: 1,
            name: "timestamp",
            kind: "message",
            T: tt.E,
          },
          {
            no: 2,
            name: "command_stats",
            kind: "message",
            T: ac,
          },
        ]));
      class ad extends te.v {
        static fromBinary(e, n) {
          return new ad().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new ad().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new ad().fromJsonString(e, n);
        }
        static equals(e, n) {
          return n7.w.util.equals(ad, e, n);
        }
        constructor(e) {
          super(),
            (this.name = ""),
            (this.email = ""),
            (this.apiKey = ""),
            (this.disableCodeium = !1),
            (this.activeDays = 0),
            (this.role = ""),
            (this.promptCreditsUsed = tn.q.zero),
            n7.w.util.initPartial(e, this);
        }
      }
      (ad.runtime = n7.w),
        (ad.typeName = "exa.codeium_common_pb.UserTableStats"),
        (ad.fields = n7.w.util.newFieldList(() => [
          {
            no: 1,
            name: "name",
            kind: "scalar",
            T: 9,
          },
          {
            no: 2,
            name: "email",
            kind: "scalar",
            T: 9,
          },
          {
            no: 3,
            name: "last_update_time",
            kind: "message",
            T: tt.E,
          },
          {
            no: 4,
            name: "api_key",
            kind: "scalar",
            T: 9,
          },
          {
            no: 5,
            name: "disable_codeium",
            kind: "scalar",
            T: 8,
          },
          {
            no: 6,
            name: "active_days",
            kind: "scalar",
            T: 13,
          },
          {
            no: 7,
            name: "role",
            kind: "scalar",
            T: 9,
          },
          {
            no: 8,
            name: "signup_time",
            kind: "message",
            T: tt.E,
          },
          {
            no: 9,
            name: "last_autocomplete_usage_time",
            kind: "message",
            T: tt.E,
          },
          {
            no: 10,
            name: "last_chat_usage_time",
            kind: "message",
            T: tt.E,
          },
          {
            no: 11,
            name: "last_command_usage_time",
            kind: "message",
            T: tt.E,
          },
          {
            no: 12,
            name: "prompt_credits_used",
            kind: "scalar",
            T: 3,
          },
        ]));
      class aS extends te.v {
        static fromBinary(e, n) {
          return new aS().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new aS().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new aS().fromJsonString(e, n);
        }
        static equals(e, n) {
          return n7.w.util.equals(aS, e, n);
        }
        constructor(e) {
          super(), (this.event = 0), n7.w.util.initPartial(e, this);
        }
      }
      (aS.runtime = n7.w),
        (aS.typeName = "exa.codeium_common_pb.CascadeNUXState"),
        (aS.fields = n7.w.util.newFieldList(() => [
          {
            no: 1,
            name: "event",
            kind: "enum",
            T: n7.w.getEnumType(nN),
          },
          {
            no: 2,
            name: "timestamp",
            kind: "message",
            T: tt.E,
          },
        ]));
      class aA extends te.v {
        static fromBinary(e, n) {
          return new aA().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new aA().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new aA().fromJsonString(e, n);
        }
        static equals(e, n) {
          return n7.w.util.equals(aA, e, n);
        }
        constructor(e) {
          super(), (this.event = 0), n7.w.util.initPartial(e, this);
        }
      }
      (aA.runtime = n7.w),
        (aA.typeName = "exa.codeium_common_pb.UserNUXState"),
        (aA.fields = n7.w.util.newFieldList(() => [
          {
            no: 1,
            name: "event",
            kind: "enum",
            T: n7.w.getEnumType(nC),
          },
          {
            no: 2,
            name: "timestamp",
            kind: "message",
            T: tt.E,
          },
        ]));
      class aO extends te.v {
        static fromBinary(e, n) {
          return new aO().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new aO().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new aO().fromJsonString(e, n);
        }
        static equals(e, n) {
          return n7.w.util.equals(aO, e, n);
        }
        constructor(e) {
          super(), (this.planMode = 0), n7.w.util.initPartial(e, this);
        }
      }
      (aO.runtime = n7.w),
        (aO.typeName = "exa.codeium_common_pb.ConversationBrainConfig"),
        (aO.fields = n7.w.util.newFieldList(() => [
          {
            no: 1,
            name: "plan_mode",
            kind: "enum",
            T: n7.w.getEnumType(nM),
          },
        ]));
      class aN extends te.v {
        static fromBinary(e, n) {
          return new aN().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new aN().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new aN().fromJsonString(e, n);
        }
        static equals(e, n) {
          return n7.w.util.equals(aN, e, n);
        }
        constructor(e) {
          super(), (this.hasUsed = !1), n7.w.util.initPartial(e, this);
        }
      }
      (aN.runtime = n7.w),
        (aN.typeName = "exa.codeium_common_pb.FeatureUsageData"),
        (aN.fields = n7.w.util.newFieldList(() => [
          {
            no: 1,
            name: "has_used",
            kind: "scalar",
            T: 8,
          },
        ]));
      class aC extends te.v {
        static fromBinary(e, n) {
          return new aC().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new aC().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new aC().fromJsonString(e, n);
        }
        static equals(e, n) {
          return n7.w.util.equals(aC, e, n);
        }
        constructor(e) {
          super(),
            (this.uid = 0),
            (this.location = 0),
            (this.trigger = 0),
            (this.analyticsEventName = ""),
            (this.mainText = ""),
            (this.onHoverExplanation = ""),
            (this.learnMoreUrl = ""),
            (this.priority = 0),
            (this.oldNuxEvent = 0),
            (this.icon = 0),
            (this.requiresIdleCascade = !1),
            n7.w.util.initPartial(e, this);
        }
      }
      (aC.runtime = n7.w),
        (aC.typeName = "exa.codeium_common_pb.CascadeNUXConfig"),
        (aC.fields = n7.w.util.newFieldList(() => [
          {
            no: 1,
            name: "uid",
            kind: "scalar",
            T: 13,
          },
          {
            no: 2,
            name: "location",
            kind: "enum",
            T: n7.w.getEnumType(nh),
          },
          {
            no: 3,
            name: "trigger",
            kind: "enum",
            T: n7.w.getEnumType(ng),
          },
          {
            no: 4,
            name: "analytics_event_name",
            kind: "scalar",
            T: 9,
          },
          {
            no: 5,
            name: "main_text",
            kind: "scalar",
            T: 9,
          },
          {
            no: 6,
            name: "on_hover_explanation",
            kind: "scalar",
            T: 9,
          },
          {
            no: 7,
            name: "learn_more_url",
            kind: "scalar",
            T: 9,
          },
          {
            no: 8,
            name: "priority",
            kind: "scalar",
            T: 5,
          },
          {
            no: 9,
            name: "old_nux_event",
            kind: "enum",
            T: n7.w.getEnumType(nN),
          },
          {
            no: 10,
            name: "icon",
            kind: "enum",
            T: n7.w.getEnumType(nU),
          },
          {
            no: 11,
            name: "requires_idle_cascade",
            kind: "scalar",
            T: 8,
          },
        ]));
      class af extends te.v {
        static fromBinary(e, n) {
          return new af().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new af().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new af().fromJsonString(e, n);
        }
        static equals(e, n) {
          return n7.w.util.equals(af, e, n);
        }
        constructor(e) {
          super(),
            (this.openMostRecentChatConversation = !1),
            (this.lastSelectedModel = 0),
            (this.themePreference = 0),
            (this.extensionPanelTab = 0),
            (this.fontSize = 0),
            (this.rememberLastModelSelection = 0),
            (this.autocompleteSpeed = 0),
            (this.lastSelectedModelName = ""),
            (this.cascadeNuxStates = []),
            (this.seenNuxUids = {}),
            (this.cascadeAllowedCommands = []),
            (this.cascadeDeniedCommands = []),
            (this.userNuxStates = []),
            (this.cascadeWebSearchDisabled = !1),
            (this.disableAutocomplete = !1),
            (this.disableSupercomplete = !1),
            (this.disableSelectionPopup = !1),
            (this.disableExplainProblemInlayHint = !1),
            (this.disableInlayHintShortcuts = !1),
            (this.disableOpenCascadeOnReload = !1),
            (this.disableAutoOpenEditedFiles = !1),
            (this.disableTabToJump = !1),
            (this.cascadeAutoExecutionPolicy = 0),
            (this.explainAndFixInCurrentConversation = !1),
            (this.allowCascadeAccessGitignoreFiles = !1),
            (this.disableCascadeAutoFixLints = !1),
            (this.disableCascadeBrowserPreviews = !1),
            (this.detectProxy = !1),
            (this.disableTabToImport = !1),
            (this.useClipboardForCompletions = !1),
            (this.disableHighlightAfterAccept = !1),
            (this.lastSelectedNewConvoTab = ""),
            (this.disableAutoGenerateMemories = !1),
            (this.enableSoundsForSpecialEvents = !1),
            (this.enableTabSounds = !1),
            (this.allowCascadeInBackground = !1),
            (this.tabToJump = 0),
            (this.cascadeWebSearch = 0),
            (this.enableTerminalCompletion = !1),
            (this.isSnoozed = !1),
            (this.enableCommandCascadeMode = !1),
            (this.featureUsageData = {}),
            (this.disableCascadeInBackground = !1),
            (this.customWorkspace = []),
            (this.conversationBrainConfigs = {}),
            (this.globalPlanModePreference = 0),
            (this.cachedCascadeModelConfigs = []),
            (this.cachedCascadeModelSorts = []),
            (this.cascadeRunExtensionCode = 0),
            (this.cascadeRunExtensionCodeAutoRun = 0),
            (this.cascadeInputAutocomplete = 0),
            (this.autoContinueOnMaxGeneratorInvocations = 0),
            (this.recentlyUsedCascadeModels = []),
            (this.cascadeDismissedSuggestionWorkspaces = []),
            (this.annotationsConfig = 0),
            (this.enableAutomaticScreenshot = !1),
            (this.browserExperimentalFeaturesConfig = 0),
            (this.commandPopupAutocomplete = 0),
            (this.claudeCodeCliPath = ""),
            (this.claudeCodeAppendSystemPrompt = !1),
            (this.claudeCodeSystemPrompt = ""),
            (this.claudeCodeMaxTurns = 0),
            (this.claudeCodeMcpConfig = ""),
            n7.w.util.initPartial(e, this);
        }
      }
      (af.runtime = n7.w),
        (af.typeName = "exa.codeium_common_pb.UserSettings"),
        (af.fields = n7.w.util.newFieldList(() => [
          {
            no: 1,
            name: "open_most_recent_chat_conversation",
            kind: "scalar",
            T: 8,
          },
          {
            no: 2,
            name: "last_selected_model",
            kind: "enum",
            T: n7.w.getEnumType(eV),
          },
          {
            no: 3,
            name: "theme_preference",
            kind: "enum",
            T: n7.w.getEnumType(nc),
          },
          {
            no: 4,
            name: "extension_panel_tab",
            kind: "enum",
            T: n7.w.getEnumType(nA),
          },
          {
            no: 5,
            name: "font_size",
            kind: "enum",
            T: n7.w.getEnumType(nT),
          },
          {
            no: 7,
            name: "remember_last_model_selection",
            kind: "enum",
            T: n7.w.getEnumType(nO),
          },
          {
            no: 6,
            name: "autocomplete_speed",
            kind: "enum",
            T: n7.w.getEnumType(nd),
          },
          {
            no: 8,
            name: "last_selected_model_name",
            kind: "scalar",
            T: 9,
          },
          {
            no: 11,
            name: "cascade_nux_states",
            kind: "message",
            T: aS,
            repeated: !0,
          },
          {
            no: 60,
            name: "seen_nux_uids",
            kind: "map",
            K: 13,
            V: {
              kind: "scalar",
              T: 8,
            },
          },
          {
            no: 9,
            name: "last_selected_cascade_model",
            kind: "enum",
            T: n7.w.getEnumType(eV),
            opt: !0,
          },
          {
            no: 30,
            name: "last_selected_cascade_model_or_alias",
            kind: "message",
            T: tO,
            opt: !0,
          },
          {
            no: 13,
            name: "cascade_planner_mode",
            kind: "enum",
            T: n7.w.getEnumType(nf),
            opt: !0,
          },
          {
            no: 46,
            name: "last_model_override",
            kind: "enum",
            T: n7.w.getEnumType(eV),
            opt: !0,
          },
          {
            no: 58,
            name: "last_model_default_override_version_id",
            kind: "scalar",
            T: 9,
            opt: !0,
          },
          {
            no: 14,
            name: "cascade_allowed_commands",
            kind: "scalar",
            T: 9,
            repeated: !0,
          },
          {
            no: 15,
            name: "cascade_denied_commands",
            kind: "scalar",
            T: 9,
            repeated: !0,
          },
          {
            no: 17,
            name: "user_nux_states",
            kind: "message",
            T: aA,
            repeated: !0,
          },
          {
            no: 18,
            name: "cascade_web_search_disabled",
            kind: "scalar",
            T: 8,
          },
          {
            no: 19,
            name: "disable_autocomplete",
            kind: "scalar",
            T: 8,
          },
          {
            no: 20,
            name: "disable_supercomplete",
            kind: "scalar",
            T: 8,
          },
          {
            no: 21,
            name: "disable_selection_popup",
            kind: "scalar",
            T: 8,
          },
          {
            no: 22,
            name: "disable_explain_problem_inlay_hint",
            kind: "scalar",
            T: 8,
          },
          {
            no: 23,
            name: "disable_inlay_hint_shortcuts",
            kind: "scalar",
            T: 8,
          },
          {
            no: 24,
            name: "disable_open_cascade_on_reload",
            kind: "scalar",
            T: 8,
          },
          {
            no: 25,
            name: "disable_auto_open_edited_files",
            kind: "scalar",
            T: 8,
          },
          {
            no: 26,
            name: "disable_tab_to_jump",
            kind: "scalar",
            T: 8,
          },
          {
            no: 27,
            name: "cascade_auto_execution_policy",
            kind: "enum",
            T: n7.w.getEnumType(nS),
          },
          {
            no: 28,
            name: "last_selected_cascade_id",
            kind: "scalar",
            T: 9,
            opt: !0,
          },
          {
            no: 29,
            name: "explain_and_fix_in_current_conversation",
            kind: "scalar",
            T: 8,
          },
          {
            no: 31,
            name: "allow_cascade_access_gitignore_files",
            kind: "scalar",
            T: 8,
          },
          {
            no: 32,
            name: "disable_cascade_auto_fix_lints",
            kind: "scalar",
            T: 8,
          },
          {
            no: 33,
            name: "disable_cascade_browser_previews",
            kind: "scalar",
            T: 8,
          },
          {
            no: 34,
            name: "detect_proxy",
            kind: "scalar",
            T: 8,
          },
          {
            no: 35,
            name: "disable_tab_to_import",
            kind: "scalar",
            T: 8,
          },
          {
            no: 36,
            name: "use_clipboard_for_completions",
            kind: "scalar",
            T: 8,
          },
          {
            no: 37,
            name: "disable_highlight_after_accept",
            kind: "scalar",
            T: 8,
          },
          {
            no: 38,
            name: "last_selected_new_convo_tab",
            kind: "scalar",
            T: 9,
          },
          {
            no: 39,
            name: "disable_auto_generate_memories",
            kind: "scalar",
            T: 8,
          },
          {
            no: 40,
            name: "enable_sounds_for_special_events",
            kind: "scalar",
            T: 8,
          },
          {
            no: 41,
            name: "enable_tab_sounds",
            kind: "scalar",
            T: 8,
          },
          {
            no: 42,
            name: "allow_cascade_in_background",
            kind: "scalar",
            T: 8,
          },
          {
            no: 43,
            name: "tab_to_jump",
            kind: "enum",
            T: n7.w.getEnumType(nw),
          },
          {
            no: 44,
            name: "cascade_web_search",
            kind: "enum",
            T: n7.w.getEnumType(nI),
          },
          {
            no: 45,
            name: "enable_terminal_completion",
            kind: "scalar",
            T: 8,
          },
          {
            no: 55,
            name: "is_snoozed",
            kind: "scalar",
            T: 8,
          },
          {
            no: 49,
            name: "enable_command_cascade_mode",
            kind: "scalar",
            T: 8,
          },
          {
            no: 47,
            name: "feature_usage_data",
            kind: "map",
            K: 9,
            V: {
              kind: "message",
              T: aN,
            },
          },
          {
            no: 48,
            name: "disable_cascade_in_background",
            kind: "scalar",
            T: 8,
          },
          {
            no: 50,
            name: "custom_workspace",
            kind: "scalar",
            T: 9,
            repeated: !0,
          },
          {
            no: 51,
            name: "conversation_brain_configs",
            kind: "map",
            K: 9,
            V: {
              kind: "message",
              T: aO,
            },
          },
          {
            no: 54,
            name: "global_plan_mode_preference",
            kind: "enum",
            T: n7.w.getEnumType(nM),
          },
          {
            no: 52,
            name: "cached_cascade_model_configs",
            kind: "message",
            T: t$,
            repeated: !0,
          },
          {
            no: 53,
            name: "cached_cascade_model_sorts",
            kind: "message",
            T: t2,
            repeated: !0,
          },
          {
            no: 56,
            name: "cascade_run_extension_code",
            kind: "enum",
            T: n7.w.getEnumType(nR),
          },
          {
            no: 57,
            name: "cascade_run_extension_code_auto_run",
            kind: "enum",
            T: n7.w.getEnumType(nD),
          },
          {
            no: 65,
            name: "cascade_input_autocomplete",
            kind: "enum",
            T: n7.w.getEnumType(nL),
          },
          {
            no: 59,
            name: "auto_continue_on_max_generator_invocations",
            kind: "enum",
            T: n7.w.getEnumType(ny),
          },
          {
            no: 61,
            name: "recently_used_cascade_models",
            kind: "scalar",
            T: 9,
            repeated: !0,
          },
          {
            no: 62,
            name: "cascade_dismissed_suggestion_workspaces",
            kind: "scalar",
            T: 9,
            repeated: !0,
          },
          {
            no: 63,
            name: "annotations_config",
            kind: "enum",
            T: n7.w.getEnumType(nJ),
          },
          {
            no: 64,
            name: "enable_automatic_screenshot",
            kind: "scalar",
            T: 8,
          },
          {
            no: 66,
            name: "browser_experimental_features_config",
            kind: "enum",
            T: n7.w.getEnumType(nk),
          },
          {
            no: 67,
            name: "command_popup_autocomplete",
            kind: "enum",
            T: n7.w.getEnumType(np),
          },
          {
            no: 68,
            name: "claude_code_cli_path",
            kind: "scalar",
            T: 9,
          },
          {
            no: 69,
            name: "claude_code_append_system_prompt",
            kind: "scalar",
            T: 8,
          },
          {
            no: 70,
            name: "claude_code_system_prompt",
            kind: "scalar",
            T: 9,
          },
          {
            no: 71,
            name: "claude_code_max_turns",
            kind: "scalar",
            T: 13,
          },
          {
            no: 72,
            name: "claude_code_mcp_config",
            kind: "scalar",
            T: 9,
          },
        ]));
      class aw extends te.v {
        static fromBinary(e, n) {
          return new aw().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new aw().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new aw().fromJsonString(e, n);
        }
        static equals(e, n) {
          return n7.w.util.equals(aw, e, n);
        }
        constructor(e) {
          super(),
            (this.supportsContextTokens = !1),
            (this.requiresInstructTags = !1),
            (this.requiresFimContext = !1),
            (this.requiresContextSnippetPrefix = !1),
            (this.requiresContextRelevanceTags = !1),
            (this.requiresLlama3Tokens = !1),
            (this.zeroShotCapable = !1),
            (this.requiresAutocompleteAsCommand = !1),
            (this.supportsCursorAwareSupercomplete = !1),
            (this.supportsImages = !1),
            (this.supportsImageCaptions = !1),
            (this.supportsToolCalls = !1),
            (this.supportsParallelToolCalls = !1),
            (this.supportsCumulativeContext = !1),
            (this.tabJumpPrintLineRange = !1),
            (this.supportsThinking = !1),
            (this.supportsEstimateTokenCounter = !1),
            (this.addCursorToFindReplaceTarget = !1),
            (this.supportsTabJumpUseWholeDocument = !1),
            n7.w.util.initPartial(e, this);
        }
      }
      (aw.runtime = n7.w),
        (aw.typeName = "exa.codeium_common_pb.ModelFeatures"),
        (aw.fields = n7.w.util.newFieldList(() => [
          {
            no: 2,
            name: "supports_context_tokens",
            kind: "scalar",
            T: 8,
          },
          {
            no: 3,
            name: "requires_instruct_tags",
            kind: "scalar",
            T: 8,
          },
          {
            no: 4,
            name: "requires_fim_context",
            kind: "scalar",
            T: 8,
          },
          {
            no: 5,
            name: "requires_context_snippet_prefix",
            kind: "scalar",
            T: 8,
          },
          {
            no: 6,
            name: "requires_context_relevance_tags",
            kind: "scalar",
            T: 8,
          },
          {
            no: 7,
            name: "requires_llama3_tokens",
            kind: "scalar",
            T: 8,
          },
          {
            no: 8,
            name: "zero_shot_capable",
            kind: "scalar",
            T: 8,
          },
          {
            no: 9,
            name: "requires_autocomplete_as_command",
            kind: "scalar",
            T: 8,
          },
          {
            no: 10,
            name: "supports_cursor_aware_supercomplete",
            kind: "scalar",
            T: 8,
          },
          {
            no: 11,
            name: "supports_images",
            kind: "scalar",
            T: 8,
          },
          {
            no: 20,
            name: "supports_image_captions",
            kind: "scalar",
            T: 8,
          },
          {
            no: 12,
            name: "supports_tool_calls",
            kind: "scalar",
            T: 8,
          },
          {
            no: 21,
            name: "supports_parallel_tool_calls",
            kind: "scalar",
            T: 8,
          },
          {
            no: 13,
            name: "supports_cumulative_context",
            kind: "scalar",
            T: 8,
          },
          {
            no: 14,
            name: "tab_jump_print_line_range",
            kind: "scalar",
            T: 8,
          },
          {
            no: 15,
            name: "supports_thinking",
            kind: "scalar",
            T: 8,
          },
          {
            no: 17,
            name: "supports_estimate_token_counter",
            kind: "scalar",
            T: 8,
          },
          {
            no: 18,
            name: "add_cursor_to_find_replace_target",
            kind: "scalar",
            T: 8,
          },
          {
            no: 19,
            name: "supports_tab_jump_use_whole_document",
            kind: "scalar",
            T: 8,
          },
        ]));
      class aI extends te.v {
        static fromBinary(e, n) {
          return new aI().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new aI().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new aI().fromJsonString(e, n);
        }
        static equals(e, n) {
          return n7.w.util.equals(aI, e, n);
        }
        constructor(e) {
          super(),
            (this.isInternal = !1),
            (this.modelId = 0),
            (this.modelName = ""),
            (this.baseUrl = ""),
            (this.apiKey = ""),
            (this.accessKey = ""),
            (this.secretAccessKey = ""),
            (this.region = ""),
            (this.projectId = ""),
            (this.id = 0),
            (this.maxCompletionTokens = 0),
            (this.maxInputTokens = 0),
            n7.w.util.initPartial(e, this);
        }
      }
      (aI.runtime = n7.w),
        (aI.typeName = "exa.codeium_common_pb.ExternalModel"),
        (aI.fields = n7.w.util.newFieldList(() => [
          {
            no: 1,
            name: "is_internal",
            kind: "scalar",
            T: 8,
          },
          {
            no: 2,
            name: "model_id",
            kind: "enum",
            T: n7.w.getEnumType(eV),
          },
          {
            no: 3,
            name: "model_name",
            kind: "scalar",
            T: 9,
          },
          {
            no: 4,
            name: "base_url",
            kind: "scalar",
            T: 9,
          },
          {
            no: 5,
            name: "api_key",
            kind: "scalar",
            T: 9,
          },
          {
            no: 6,
            name: "access_key",
            kind: "scalar",
            T: 9,
          },
          {
            no: 7,
            name: "secret_access_key",
            kind: "scalar",
            T: 9,
          },
          {
            no: 8,
            name: "region",
            kind: "scalar",
            T: 9,
          },
          {
            no: 9,
            name: "project_id",
            kind: "scalar",
            T: 9,
          },
          {
            no: 10,
            name: "id",
            kind: "scalar",
            T: 13,
          },
          {
            no: 11,
            name: "max_completion_tokens",
            kind: "scalar",
            T: 5,
          },
          {
            no: 12,
            name: "max_input_tokens",
            kind: "scalar",
            T: 5,
          },
        ]));
      class aR extends te.v {
        static fromBinary(e, n) {
          return new aR().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new aR().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new aR().fromJsonString(e, n);
        }
        static equals(e, n) {
          return n7.w.util.equals(aR, e, n);
        }
        constructor(e) {
          super(),
            (this.modelId = 0),
            (this.isInternal = !1),
            (this.modelType = 0),
            (this.maxTokens = 0),
            (this.tokenizerType = ""),
            (this.apiProvider = 0),
            (this.modelName = ""),
            (this.supportsContext = !1),
            (this.embedDim = 0),
            (this.baseUrl = ""),
            (this.chatModelName = ""),
            (this.maxOutputTokens = 0),
            (this.promptTemplaterType = 0),
            (this.toolFormatterType = 0),
            n7.w.util.initPartial(e, this);
        }
      }
      (aR.runtime = n7.w),
        (aR.typeName = "exa.codeium_common_pb.ModelInfo"),
        (aR.fields = n7.w.util.newFieldList(() => [
          {
            no: 1,
            name: "model_id",
            kind: "enum",
            T: n7.w.getEnumType(eV),
          },
          {
            no: 2,
            name: "is_internal",
            kind: "scalar",
            T: 8,
          },
          {
            no: 3,
            name: "model_type",
            kind: "enum",
            T: n7.w.getEnumType(nB),
          },
          {
            no: 4,
            name: "max_tokens",
            kind: "scalar",
            T: 5,
          },
          {
            no: 5,
            name: "tokenizer_type",
            kind: "scalar",
            T: 9,
          },
          {
            no: 6,
            name: "model_features",
            kind: "message",
            T: aw,
          },
          {
            no: 7,
            name: "api_provider",
            kind: "enum",
            T: n7.w.getEnumType(nG),
          },
          {
            no: 8,
            name: "model_name",
            kind: "scalar",
            T: 9,
          },
          {
            no: 9,
            name: "supports_context",
            kind: "scalar",
            T: 8,
          },
          {
            no: 10,
            name: "embed_dim",
            kind: "scalar",
            T: 5,
          },
          {
            no: 11,
            name: "base_url",
            kind: "scalar",
            T: 9,
          },
          {
            no: 12,
            name: "chat_model_name",
            kind: "scalar",
            T: 9,
          },
          {
            no: 13,
            name: "max_output_tokens",
            kind: "scalar",
            T: 5,
          },
          {
            no: 14,
            name: "prompt_templater_type",
            kind: "enum",
            T: n7.w.getEnumType(n0),
          },
          {
            no: 15,
            name: "tool_formatter_type",
            kind: "enum",
            T: n7.w.getEnumType(n9),
          },
        ]));
      class aL extends te.v {
        static fromBinary(e, n) {
          return new aL().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new aL().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new aL().fromJsonString(e, n);
        }
        static equals(e, n) {
          return n7.w.util.equals(aL, e, n);
        }
        constructor(e) {
          super(), (this.modelMap = {}), n7.w.util.initPartial(e, this);
        }
      }
      (aL.runtime = n7.w),
        (aL.typeName = "exa.codeium_common_pb.ApiProviderRoutingConfig"),
        (aL.fields = n7.w.util.newFieldList(() => [
          {
            no: 1,
            name: "model_map",
            kind: "map",
            K: 9,
            V: {
              kind: "message",
              T: ap,
            },
          },
        ]));
      class ap extends te.v {
        static fromBinary(e, n) {
          return new ap().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new ap().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new ap().fromJsonString(e, n);
        }
        static equals(e, n) {
          return n7.w.util.equals(ap, e, n);
        }
        constructor(e) {
          super(), (this.providerMap = {}), n7.w.util.initPartial(e, this);
        }
      }
      (ap.runtime = n7.w),
        (ap.typeName = "exa.codeium_common_pb.ApiProviderConfigMap"),
        (ap.fields = n7.w.util.newFieldList(() => [
          {
            no: 1,
            name: "provider_map",
            kind: "map",
            K: 9,
            V: {
              kind: "message",
              T: aD,
            },
          },
        ]));
      class aD extends te.v {
        static fromBinary(e, n) {
          return new aD().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new aD().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new aD().fromJsonString(e, n);
        }
        static equals(e, n) {
          return n7.w.util.equals(aD, e, n);
        }
        constructor(e) {
          super(),
            (this.weight = 0),
            (this.cacheTtlMinutes = 0),
            n7.w.util.initPartial(e, this);
        }
      }
      (aD.runtime = n7.w),
        (aD.typeName = "exa.codeium_common_pb.ApiProviderConfig"),
        (aD.fields = n7.w.util.newFieldList(() => [
          {
            no: 1,
            name: "weight",
            kind: "scalar",
            T: 13,
          },
          {
            no: 2,
            name: "cache_ttl_minutes",
            kind: "scalar",
            T: 13,
          },
        ]));
      class aP extends te.v {
        static fromBinary(e, n) {
          return new aP().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new aP().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new aP().fromJsonString(e, n);
        }
        static equals(e, n) {
          return n7.w.util.equals(aP, e, n);
        }
        constructor(e) {
          super(), n7.w.util.initPartial(e, this);
        }
      }
      (aP.runtime = n7.w),
        (aP.typeName = "exa.codeium_common_pb.ModelConfig"),
        (aP.fields = n7.w.util.newFieldList(() => [
          {
            no: 1,
            name: "generation_model",
            kind: "message",
            T: aR,
          },
          {
            no: 2,
            name: "context_check_model",
            kind: "message",
            T: aR,
          },
        ]));
      class aM extends te.v {
        static fromBinary(e, n) {
          return new aM().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new aM().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new aM().fromJsonString(e, n);
        }
        static equals(e, n) {
          return n7.w.util.equals(aM, e, n);
        }
        constructor(e) {
          super(),
            (this.model = 0),
            (this.message = ""),
            (this.status = 0),
            n7.w.util.initPartial(e, this);
        }
      }
      (aM.runtime = n7.w),
        (aM.typeName = "exa.codeium_common_pb.ModelStatusInfo"),
        (aM.fields = n7.w.util.newFieldList(() => [
          {
            no: 1,
            name: "model",
            kind: "enum",
            T: n7.w.getEnumType(eV),
          },
          {
            no: 2,
            name: "message",
            kind: "scalar",
            T: 9,
          },
          {
            no: 3,
            name: "status",
            kind: "enum",
            T: n7.w.getEnumType(nF),
          },
        ]));
      class ay extends te.v {
        static fromBinary(e, n) {
          return new ay().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new ay().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new ay().fromJsonString(e, n);
        }
        static equals(e, n) {
          return n7.w.util.equals(ay, e, n);
        }
        constructor(e) {
          super(),
            (this.uid = ""),
            (this.completionId = ""),
            (this.filePath = ""),
            (this.shortPrefix = ""),
            (this.completionText = ""),
            (this.shortSuffix = ""),
            n7.w.util.initPartial(e, this);
        }
      }
      (ay.runtime = n7.w),
        (ay.typeName = "exa.codeium_common_pb.CompletionExample"),
        (ay.fields = n7.w.util.newFieldList(() => [
          {
            no: 1,
            name: "uid",
            kind: "scalar",
            T: 9,
          },
          {
            no: 2,
            name: "completion_id",
            kind: "scalar",
            T: 9,
          },
          {
            no: 3,
            name: "file_path",
            kind: "scalar",
            T: 9,
          },
          {
            no: 4,
            name: "short_prefix",
            kind: "scalar",
            T: 9,
          },
          {
            no: 5,
            name: "completion_text",
            kind: "scalar",
            T: 9,
          },
          {
            no: 6,
            name: "short_suffix",
            kind: "scalar",
            T: 9,
          },
        ]));
      class ah extends te.v {
        static fromBinary(e, n) {
          return new ah().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new ah().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new ah().fromJsonString(e, n);
        }
        static equals(e, n) {
          return n7.w.util.equals(ah, e, n);
        }
        constructor(e) {
          super(), (this.name = ""), n7.w.util.initPartial(e, this);
        }
      }
      (ah.runtime = n7.w),
        (ah.typeName = "exa.codeium_common_pb.CompletionExampleWithMetadata"),
        (ah.fields = n7.w.util.newFieldList(() => [
          {
            no: 1,
            name: "example",
            kind: "message",
            T: ay,
          },
          {
            no: 2,
            name: "name",
            kind: "scalar",
            T: 9,
          },
          {
            no: 4,
            name: "time",
            kind: "message",
            T: tt.E,
          },
        ]));
      class aU extends te.v {
        static fromBinary(e, n) {
          return new aU().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new aU().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new aU().fromJsonString(e, n);
        }
        static equals(e, n) {
          return n7.w.util.equals(aU, e, n);
        }
        constructor(e) {
          super(), n7.w.util.initPartial(e, this);
        }
      }
      (aU.runtime = n7.w),
        (aU.typeName = "exa.codeium_common_pb.CciWithSubrange"),
        (aU.fields = n7.w.util.newFieldList(() => [
          {
            no: 1,
            name: "cci",
            kind: "message",
            T: at,
          },
          {
            no: 2,
            name: "subrange",
            kind: "message",
            T: ag,
          },
        ]));
      class ag extends te.v {
        static fromBinary(e, n) {
          return new ag().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new ag().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new ag().fromJsonString(e, n);
        }
        static equals(e, n) {
          return n7.w.util.equals(ag, e, n);
        }
        constructor(e) {
          super(),
            (this.snippetType = 0),
            (this.startOffset = tn.q.zero),
            (this.endOffset = tn.q.zero),
            n7.w.util.initPartial(e, this);
        }
      }
      (ag.runtime = n7.w),
        (ag.typeName = "exa.codeium_common_pb.ContextSubrange"),
        (ag.fields = n7.w.util.newFieldList(() => [
          {
            no: 1,
            name: "snippet_type",
            kind: "enum",
            T: n7.w.getEnumType(nm),
          },
          {
            no: 2,
            name: "start_offset",
            kind: "scalar",
            T: 3,
          },
          {
            no: 3,
            name: "end_offset",
            kind: "scalar",
            T: 3,
          },
        ]));
      class aJ extends te.v {
        static fromBinary(e, n) {
          return new aJ().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new aJ().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new aJ().fromJsonString(e, n);
        }
        static equals(e, n) {
          return n7.w.util.equals(aJ, e, n);
        }
        constructor(e) {
          super(),
            (this.absolutePathMigrateMeToUri = ""),
            (this.absoluteUri = ""),
            (this.workspaceRelativePathsMigrateMeToWorkspaceUris = {}),
            (this.workspaceUrisToRelativePaths = {}),
            (this.numFiles = 0),
            (this.numBytes = tn.q.zero),
            n7.w.util.initPartial(e, this);
        }
      }
      (aJ.runtime = n7.w),
        (aJ.typeName = "exa.codeium_common_pb.PathScopeItem"),
        (aJ.fields = n7.w.util.newFieldList(() => [
          {
            no: 1,
            name: "absolute_path_migrate_me_to_uri",
            kind: "scalar",
            T: 9,
          },
          {
            no: 5,
            name: "absolute_uri",
            kind: "scalar",
            T: 9,
          },
          {
            no: 2,
            name: "workspace_relative_paths_migrate_me_to_workspace_uris",
            kind: "map",
            K: 9,
            V: {
              kind: "scalar",
              T: 9,
            },
          },
          {
            no: 6,
            name: "workspace_uris_to_relative_paths",
            kind: "map",
            K: 9,
            V: {
              kind: "scalar",
              T: 9,
            },
          },
          {
            no: 3,
            name: "num_files",
            kind: "scalar",
            T: 13,
          },
          {
            no: 4,
            name: "num_bytes",
            kind: "scalar",
            T: 4,
          },
        ]));
      class ak extends te.v {
        static fromBinary(e, n) {
          return new ak().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new ak().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new ak().fromJsonString(e, n);
        }
        static equals(e, n) {
          return n7.w.util.equals(ak, e, n);
        }
        constructor(e) {
          super(),
            (this.absoluteUri = ""),
            (this.startLine = 0),
            (this.endLine = 0),
            n7.w.util.initPartial(e, this);
        }
      }
      (ak.runtime = n7.w),
        (ak.typeName = "exa.codeium_common_pb.FileLineRange"),
        (ak.fields = n7.w.util.newFieldList(() => [
          {
            no: 1,
            name: "absolute_uri",
            kind: "scalar",
            T: 9,
          },
          {
            no: 2,
            name: "start_line",
            kind: "scalar",
            T: 13,
          },
          {
            no: 3,
            name: "end_line",
            kind: "scalar",
            T: 13,
          },
        ]));
      class aB extends te.v {
        static fromBinary(e, n) {
          return new aB().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new aB().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new aB().fromJsonString(e, n);
        }
        static equals(e, n) {
          return n7.w.util.equals(aB, e, n);
        }
        constructor(e) {
          super(),
            (this.content = ""),
            (this.identifier = {
              case: void 0,
            }),
            n7.w.util.initPartial(e, this);
        }
      }
      (aB.runtime = n7.w),
        (aB.typeName = "exa.codeium_common_pb.TextBlock"),
        (aB.fields = n7.w.util.newFieldList(() => [
          {
            no: 1,
            name: "content",
            kind: "scalar",
            T: 9,
          },
          {
            no: 2,
            name: "file_line_range",
            kind: "message",
            T: ak,
            oneof: "identifier",
          },
          {
            no: 3,
            name: "label",
            kind: "scalar",
            T: 9,
            oneof: "identifier",
          },
        ]));
      class aG extends te.v {
        static fromBinary(e, n) {
          return new aG().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new aG().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new aG().fromJsonString(e, n);
        }
        static equals(e, n) {
          return n7.w.util.equals(aG, e, n);
        }
        constructor(e) {
          super(), n7.w.util.initPartial(e, this);
        }
      }
      (aG.runtime = n7.w),
        (aG.typeName = "exa.codeium_common_pb.RepositoryScopeItem"),
        (aG.fields = n7.w.util.newFieldList(() => [
          {
            no: 1,
            name: "repo_info",
            kind: "message",
            T: an,
          },
        ]));
      class aF extends te.v {
        static fromBinary(e, n) {
          return new aF().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new aF().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new aF().fromJsonString(e, n);
        }
        static equals(e, n) {
          return n7.w.util.equals(aF, e, n);
        }
        constructor(e) {
          super(),
            (this.relativePath = ""),
            (this.isDir = !1),
            n7.w.util.initPartial(e, this);
        }
      }
      (aF.runtime = n7.w),
        (aF.typeName = "exa.codeium_common_pb.RepositoryPathScopeItem"),
        (aF.fields = n7.w.util.newFieldList(() => [
          {
            no: 1,
            name: "repo_info",
            kind: "message",
            T: an,
          },
          {
            no: 2,
            name: "relative_path",
            kind: "scalar",
            T: 9,
          },
          {
            no: 3,
            name: "is_dir",
            kind: "scalar",
            T: 8,
          },
        ]));
      class ax extends te.v {
        static fromBinary(e, n) {
          return new ax().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new ax().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new ax().fromJsonString(e, n);
        }
        static equals(e, n) {
          return n7.w.util.equals(ax, e, n);
        }
        constructor(e) {
          super(),
            (this.documentId = ""),
            (this.index = 0),
            (this.documentType = 0),
            (this.displayName = ""),
            (this.description = ""),
            (this.displaySource = ""),
            (this.url = ""),
            n7.w.util.initPartial(e, this);
        }
      }
      (ax.runtime = n7.w),
        (ax.typeName = "exa.codeium_common_pb.KnowledgeBaseScopeItem"),
        (ax.fields = n7.w.util.newFieldList(() => [
          {
            no: 1,
            name: "document_id",
            kind: "scalar",
            T: 9,
          },
          {
            no: 7,
            name: "index",
            kind: "enum",
            T: n7.w.getEnumType(nQ),
          },
          {
            no: 8,
            name: "document_type",
            kind: "enum",
            T: n7.w.getEnumType(nq),
          },
          {
            no: 3,
            name: "display_name",
            kind: "scalar",
            T: 9,
          },
          {
            no: 4,
            name: "description",
            kind: "scalar",
            T: 9,
          },
          {
            no: 5,
            name: "display_source",
            kind: "scalar",
            T: 9,
          },
          {
            no: 6,
            name: "url",
            kind: "scalar",
            T: 9,
          },
        ]));
      class aq extends te.v {
        static fromBinary(e, n) {
          return new aq().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new aq().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new aq().fromJsonString(e, n);
        }
        static equals(e, n) {
          return n7.w.util.equals(aq, e, n);
        }
        constructor(e) {
          super(),
            (this.timestampStr = ""),
            (this.type = ""),
            (this.output = ""),
            (this.consoleMessageLocation = ""),
            n7.w.util.initPartial(e, this);
        }
      }
      (aq.runtime = n7.w),
        (aq.typeName = "exa.codeium_common_pb.ConsoleLogLine"),
        (aq.fields = n7.w.util.newFieldList(() => [
          {
            no: 1,
            name: "timestamp_str",
            kind: "scalar",
            T: 9,
          },
          {
            no: 2,
            name: "type",
            kind: "scalar",
            T: 9,
          },
          {
            no: 3,
            name: "output",
            kind: "scalar",
            T: 9,
          },
          {
            no: 4,
            name: "console_message_location",
            kind: "scalar",
            T: 9,
          },
        ]));
      class ab extends te.v {
        static fromBinary(e, n) {
          return new ab().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new ab().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new ab().fromJsonString(e, n);
        }
        static equals(e, n) {
          return n7.w.util.equals(ab, e, n);
        }
        constructor(e) {
          super(),
            (this.lines = []),
            (this.serverAddress = ""),
            n7.w.util.initPartial(e, this);
        }
      }
      (ab.runtime = n7.w),
        (ab.typeName = "exa.codeium_common_pb.ConsoleLogScopeItem"),
        (ab.fields = n7.w.util.newFieldList(() => [
          {
            no: 1,
            name: "lines",
            kind: "message",
            T: aq,
            repeated: !0,
          },
          {
            no: 2,
            name: "server_address",
            kind: "scalar",
            T: 9,
          },
        ]));
      class av extends te.v {
        static fromBinary(e, n) {
          return new av().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new av().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new av().fromJsonString(e, n);
        }
        static equals(e, n) {
          return n7.w.util.equals(av, e, n);
        }
        constructor(e) {
          super(),
            (this.tagName = ""),
            (this.outerHtml = ""),
            (this.id = ""),
            (this.reactComponentName = ""),
            n7.w.util.initPartial(e, this);
        }
      }
      (av.runtime = n7.w),
        (av.typeName = "exa.codeium_common_pb.DOMElementScopeItem"),
        (av.fields = n7.w.util.newFieldList(() => [
          {
            no: 1,
            name: "tag_name",
            kind: "scalar",
            T: 9,
          },
          {
            no: 2,
            name: "outer_html",
            kind: "scalar",
            T: 9,
          },
          {
            no: 3,
            name: "id",
            kind: "scalar",
            T: 9,
          },
          {
            no: 4,
            name: "react_component_name",
            kind: "scalar",
            T: 9,
          },
          {
            no: 5,
            name: "file_line_range",
            kind: "message",
            T: ak,
          },
        ]));
      class aH extends te.v {
        static fromBinary(e, n) {
          return new aH().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new aH().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new aH().fromJsonString(e, n);
        }
        static equals(e, n) {
          return n7.w.util.equals(aH, e, n);
        }
        constructor(e) {
          super(), (this.numNodes = 0), n7.w.util.initPartial(e, this);
        }
      }
      (aH.runtime = n7.w),
        (aH.typeName = "exa.codeium_common_pb.DOMTree"),
        (aH.fields = n7.w.util.newFieldList(() => [
          {
            no: 1,
            name: "root",
            kind: "message",
            T: aW,
          },
          {
            no: 2,
            name: "num_nodes",
            kind: "scalar",
            T: 13,
          },
        ]));
      class aV extends te.v {
        static fromBinary(e, n) {
          return new aV().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new aV().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new aV().fromJsonString(e, n);
        }
        static equals(e, n) {
          return n7.w.util.equals(aV, e, n);
        }
        constructor(e) {
          super(),
            (this.x = 0),
            (this.y = 0),
            (this.width = 0),
            (this.height = 0),
            n7.w.util.initPartial(e, this);
        }
      }
      (aV.runtime = n7.w),
        (aV.typeName = "exa.codeium_common_pb.DOMTree.BoundingBox"),
        (aV.fields = n7.w.util.newFieldList(() => [
          {
            no: 1,
            name: "x",
            kind: "scalar",
            T: 2,
          },
          {
            no: 2,
            name: "y",
            kind: "scalar",
            T: 2,
          },
          {
            no: 3,
            name: "width",
            kind: "scalar",
            T: 2,
          },
          {
            no: 4,
            name: "height",
            kind: "scalar",
            T: 2,
          },
        ]));
      class aW extends te.v {
        static fromBinary(e, n) {
          return new aW().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new aW().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new aW().fromJsonString(e, n);
        }
        static equals(e, n) {
          return n7.w.util.equals(aW, e, n);
        }
        constructor(e) {
          super(),
            (this.children = []),
            (this.tagName = ""),
            (this.id = ""),
            (this.classNames = []),
            (this.textContent = ""),
            (this.ariaLabel = ""),
            (this.title = ""),
            (this.alt = ""),
            (this.placeholder = ""),
            (this.href = ""),
            n7.w.util.initPartial(e, this);
        }
      }
      (aW.runtime = n7.w),
        (aW.typeName = "exa.codeium_common_pb.DOMTree.DOMNode"),
        (aW.fields = n7.w.util.newFieldList(() => [
          {
            no: 1,
            name: "children",
            kind: "message",
            T: aW,
            repeated: !0,
          },
          {
            no: 2,
            name: "tag_name",
            kind: "scalar",
            T: 9,
          },
          {
            no: 3,
            name: "id",
            kind: "scalar",
            T: 9,
          },
          {
            no: 4,
            name: "class_names",
            kind: "scalar",
            T: 9,
            repeated: !0,
          },
          {
            no: 5,
            name: "text_content",
            kind: "scalar",
            T: 9,
          },
          {
            no: 6,
            name: "bbox",
            kind: "message",
            T: aV,
          },
          {
            no: 7,
            name: "aria_label",
            kind: "scalar",
            T: 9,
          },
          {
            no: 8,
            name: "title",
            kind: "scalar",
            T: 9,
          },
          {
            no: 9,
            name: "alt",
            kind: "scalar",
            T: 9,
          },
          {
            no: 10,
            name: "placeholder",
            kind: "scalar",
            T: 9,
          },
          {
            no: 11,
            name: "href",
            kind: "scalar",
            T: 9,
          },
        ]));
      class aK extends te.v {
        static fromBinary(e, n) {
          return new aK().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new aK().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new aK().fromJsonString(e, n);
        }
        static equals(e, n) {
          return n7.w.util.equals(aK, e, n);
        }
        constructor(e) {
          super(),
            (this.recipeId = ""),
            (this.title = ""),
            (this.description = ""),
            (this.systemPrompt = ""),
            n7.w.util.initPartial(e, this);
        }
      }
      (aK.runtime = n7.w),
        (aK.typeName = "exa.codeium_common_pb.RecipeScopeItem"),
        (aK.fields = n7.w.util.newFieldList(() => [
          {
            no: 1,
            name: "recipe_id",
            kind: "scalar",
            T: 9,
          },
          {
            no: 2,
            name: "title",
            kind: "scalar",
            T: 9,
          },
          {
            no: 3,
            name: "description",
            kind: "scalar",
            T: 9,
          },
          {
            no: 4,
            name: "system_prompt",
            kind: "scalar",
            T: 9,
          },
          {
            no: 5,
            name: "uri",
            kind: "scalar",
            T: 9,
            opt: !0,
          },
          {
            no: 6,
            name: "execution_mode",
            kind: "enum",
            T: n7.w.getEnumType(nS),
            opt: !0,
          },
        ]));
      class aX extends te.v {
        static fromBinary(e, n) {
          return new aX().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new aX().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new aX().fromJsonString(e, n);
        }
        static equals(e, n) {
          return n7.w.util.equals(aX, e, n);
        }
        constructor(e) {
          super(),
            (this.rulePath = ""),
            (this.ruleName = ""),
            (this.description = ""),
            n7.w.util.initPartial(e, this);
        }
      }
      (aX.runtime = n7.w),
        (aX.typeName = "exa.codeium_common_pb.RuleScopeItem"),
        (aX.fields = n7.w.util.newFieldList(() => [
          {
            no: 1,
            name: "rule_path",
            kind: "scalar",
            T: 9,
          },
          {
            no: 2,
            name: "rule_name",
            kind: "scalar",
            T: 9,
          },
          {
            no: 3,
            name: "description",
            kind: "scalar",
            T: 9,
          },
        ]));
      class aY extends te.v {
        static fromBinary(e, n) {
          return new aY().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new aY().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new aY().fromJsonString(e, n);
        }
        static equals(e, n) {
          return n7.w.util.equals(aY, e, n);
        }
        constructor(e) {
          super(),
            (this.uri = ""),
            (this.name = ""),
            (this.serverName = ""),
            n7.w.util.initPartial(e, this);
        }
      }
      (aY.runtime = n7.w),
        (aY.typeName = "exa.codeium_common_pb.McpResourceItem"),
        (aY.fields = n7.w.util.newFieldList(() => [
          {
            no: 1,
            name: "uri",
            kind: "scalar",
            T: 9,
          },
          {
            no: 2,
            name: "name",
            kind: "scalar",
            T: 9,
          },
          {
            no: 3,
            name: "description",
            kind: "scalar",
            T: 9,
            opt: !0,
          },
          {
            no: 4,
            name: "mime_type",
            kind: "scalar",
            T: 9,
            opt: !0,
          },
          {
            no: 5,
            name: "server_name",
            kind: "scalar",
            T: 9,
          },
        ]));
      class aQ extends te.v {
        static fromBinary(e, n) {
          return new aQ().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new aQ().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new aQ().fromJsonString(e, n);
        }
        static equals(e, n) {
          return n7.w.util.equals(aQ, e, n);
        }
        constructor(e) {
          super(),
            (this.url = ""),
            (this.title = ""),
            (this.visibleTextContent = ""),
            (this.pageId = ""),
            n7.w.util.initPartial(e, this);
        }
      }
      (aQ.runtime = n7.w),
        (aQ.typeName = "exa.codeium_common_pb.BrowserPageScopeItem"),
        (aQ.fields = n7.w.util.newFieldList(() => [
          {
            no: 1,
            name: "url",
            kind: "scalar",
            T: 9,
          },
          {
            no: 2,
            name: "title",
            kind: "scalar",
            T: 9,
          },
          {
            no: 3,
            name: "visible_text_content",
            kind: "scalar",
            T: 9,
          },
          {
            no: 4,
            name: "page_id",
            kind: "scalar",
            T: 9,
          },
        ]));
      class az extends te.v {
        static fromBinary(e, n) {
          return new az().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new az().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new az().fromJsonString(e, n);
        }
        static equals(e, n) {
          return n7.w.util.equals(az, e, n);
        }
        constructor(e) {
          super(),
            (this.url = ""),
            (this.title = ""),
            (this.codeContent = ""),
            (this.language = 0),
            (this.pageId = ""),
            n7.w.util.initPartial(e, this);
        }
      }
      (az.runtime = n7.w),
        (az.typeName = "exa.codeium_common_pb.BrowserCodeBlockScopeItem"),
        (az.fields = n7.w.util.newFieldList(() => [
          {
            no: 1,
            name: "url",
            kind: "scalar",
            T: 9,
          },
          {
            no: 2,
            name: "title",
            kind: "scalar",
            T: 9,
          },
          {
            no: 3,
            name: "code_content",
            kind: "scalar",
            T: 9,
          },
          {
            no: 4,
            name: "language",
            kind: "enum",
            T: n7.w.getEnumType(e4),
          },
          {
            no: 5,
            name: "context_text",
            kind: "scalar",
            T: 9,
            opt: !0,
          },
          {
            no: 6,
            name: "page_id",
            kind: "scalar",
            T: 9,
          },
        ]));
      class aj extends te.v {
        static fromBinary(e, n) {
          return new aj().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new aj().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new aj().fromJsonString(e, n);
        }
        static equals(e, n) {
          return n7.w.util.equals(aj, e, n);
        }
        constructor(e) {
          super(),
            (this.url = ""),
            (this.visibleText = ""),
            (this.pageId = ""),
            n7.w.util.initPartial(e, this);
        }
      }
      (aj.runtime = n7.w),
        (aj.typeName = "exa.codeium_common_pb.BrowserTextScopeItem"),
        (aj.fields = n7.w.util.newFieldList(() => [
          {
            no: 1,
            name: "url",
            kind: "scalar",
            T: 9,
          },
          {
            no: 2,
            name: "visible_text",
            kind: "scalar",
            T: 9,
          },
          {
            no: 3,
            name: "page_id",
            kind: "scalar",
            T: 9,
          },
        ]));
      class aZ extends te.v {
        static fromBinary(e, n) {
          return new aZ().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new aZ().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new aZ().fromJsonString(e, n);
        }
        static equals(e, n) {
          return n7.w.util.equals(aZ, e, n);
        }
        constructor(e) {
          super(),
            (this.id = ""),
            (this.title = ""),
            n7.w.util.initPartial(e, this);
        }
      }
      (aZ.runtime = n7.w),
        (aZ.typeName = "exa.codeium_common_pb.ConversationScopeItem"),
        (aZ.fields = n7.w.util.newFieldList(() => [
          {
            no: 1,
            name: "id",
            kind: "scalar",
            T: 9,
          },
          {
            no: 2,
            name: "title",
            kind: "scalar",
            T: 9,
          },
          {
            no: 3,
            name: "last_modified_time",
            kind: "message",
            T: tt.E,
          },
        ]));
      class a$ extends te.v {
        static fromBinary(e, n) {
          return new a$().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new a$().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new a$().fromJsonString(e, n);
        }
        static equals(e, n) {
          return n7.w.util.equals(a$, e, n);
        }
        constructor(e) {
          super(),
            (this.id = ""),
            (this.branch = ""),
            (this.current = !1),
            n7.w.util.initPartial(e, this);
        }
      }
      (a$.runtime = n7.w),
        (a$.typeName = "exa.codeium_common_pb.UserActivityScopeItem"),
        (a$.fields = n7.w.util.newFieldList(() => [
          {
            no: 1,
            name: "id",
            kind: "scalar",
            T: 9,
          },
          {
            no: 2,
            name: "branch",
            kind: "scalar",
            T: 9,
          },
          {
            no: 3,
            name: "current",
            kind: "scalar",
            T: 8,
          },
        ]));
      class a1 extends te.v {
        static fromBinary(e, n) {
          return new a1().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new a1().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new a1().fromJsonString(e, n);
        }
        static equals(e, n) {
          return n7.w.util.equals(a1, e, n);
        }
        constructor(e) {
          super(),
            (this.processId = ""),
            (this.name = ""),
            (this.lastCommand = ""),
            (this.content = ""),
            n7.w.util.initPartial(e, this);
        }
      }
      (a1.runtime = n7.w),
        (a1.typeName = "exa.codeium_common_pb.TerminalScopeItem"),
        (a1.fields = n7.w.util.newFieldList(() => [
          {
            no: 1,
            name: "process_id",
            kind: "scalar",
            T: 9,
          },
          {
            no: 2,
            name: "name",
            kind: "scalar",
            T: 9,
          },
          {
            no: 3,
            name: "last_command",
            kind: "scalar",
            T: 9,
          },
          {
            no: 4,
            name: "content",
            kind: "scalar",
            T: 9,
          },
        ]));
      class a2 extends te.v {
        static fromBinary(e, n) {
          return new a2().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new a2().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new a2().fromJsonString(e, n);
        }
        static equals(e, n) {
          return n7.w.util.equals(a2, e, n);
        }
        constructor(e) {
          super(),
            (this.url = ""),
            (this.title = ""),
            (this.owner = ""),
            (this.number = ""),
            n7.w.util.initPartial(e, this);
        }
      }
      (a2.runtime = n7.w),
        (a2.typeName = "exa.codeium_common_pb.GithubPullRequestItem"),
        (a2.fields = n7.w.util.newFieldList(() => [
          {
            no: 1,
            name: "url",
            kind: "scalar",
            T: 9,
          },
          {
            no: 2,
            name: "title",
            kind: "scalar",
            T: 9,
          },
          {
            no: 3,
            name: "owner",
            kind: "scalar",
            T: 9,
          },
          {
            no: 4,
            name: "number",
            kind: "scalar",
            T: 9,
          },
        ]));
      class a0 extends te.v {
        static fromBinary(e, n) {
          return new a0().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new a0().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new a0().fromJsonString(e, n);
        }
        static equals(e, n) {
          return n7.w.util.equals(a0, e, n);
        }
        constructor(e) {
          super(),
            (this.scopeItem = {
              case: void 0,
            }),
            n7.w.util.initPartial(e, this);
        }
      }
      (a0.runtime = n7.w),
        (a0.typeName = "exa.codeium_common_pb.ContextScopeItem"),
        (a0.fields = n7.w.util.newFieldList(() => [
          {
            no: 1,
            name: "file",
            kind: "message",
            T: aJ,
            oneof: "scope_item",
          },
          {
            no: 2,
            name: "directory",
            kind: "message",
            T: aJ,
            oneof: "scope_item",
          },
          {
            no: 3,
            name: "repository",
            kind: "message",
            T: aG,
            oneof: "scope_item",
          },
          {
            no: 4,
            name: "code_context",
            kind: "message",
            T: at,
            oneof: "scope_item",
          },
          {
            no: 6,
            name: "cci_with_subrange",
            kind: "message",
            T: aU,
            oneof: "scope_item",
          },
          {
            no: 7,
            name: "repository_path",
            kind: "message",
            T: aF,
            oneof: "scope_item",
          },
          {
            no: 8,
            name: "slack",
            kind: "message",
            T: ax,
            oneof: "scope_item",
          },
          {
            no: 9,
            name: "github",
            kind: "message",
            T: ax,
            oneof: "scope_item",
          },
          {
            no: 10,
            name: "file_line_range",
            kind: "message",
            T: ak,
            oneof: "scope_item",
          },
          {
            no: 11,
            name: "text_block",
            kind: "message",
            T: aB,
            oneof: "scope_item",
          },
          {
            no: 12,
            name: "jira",
            kind: "message",
            T: ax,
            oneof: "scope_item",
          },
          {
            no: 13,
            name: "google_drive",
            kind: "message",
            T: ax,
            oneof: "scope_item",
          },
          {
            no: 14,
            name: "console_log",
            kind: "message",
            T: ab,
            oneof: "scope_item",
          },
          {
            no: 15,
            name: "dom_element",
            kind: "message",
            T: av,
            oneof: "scope_item",
          },
          {
            no: 16,
            name: "recipe",
            kind: "message",
            T: aK,
            oneof: "scope_item",
          },
          {
            no: 17,
            name: "knowledge",
            kind: "message",
            T: ax,
            oneof: "scope_item",
          },
          {
            no: 18,
            name: "rule",
            kind: "message",
            T: aX,
            oneof: "scope_item",
          },
          {
            no: 19,
            name: "mcp_resource",
            kind: "message",
            T: aY,
            oneof: "scope_item",
          },
          {
            no: 20,
            name: "browser_page",
            kind: "message",
            T: aQ,
            oneof: "scope_item",
          },
          {
            no: 21,
            name: "browser_code_block",
            kind: "message",
            T: az,
            oneof: "scope_item",
          },
          {
            no: 22,
            name: "browser_text",
            kind: "message",
            T: aj,
            oneof: "scope_item",
          },
          {
            no: 23,
            name: "conversation",
            kind: "message",
            T: aZ,
            oneof: "scope_item",
          },
          {
            no: 24,
            name: "user_activity",
            kind: "message",
            T: a$,
            oneof: "scope_item",
          },
          {
            no: 25,
            name: "terminal",
            kind: "message",
            T: a1,
            oneof: "scope_item",
          },
          {
            no: 26,
            name: "github_pull_request",
            kind: "message",
            T: a2,
            oneof: "scope_item",
          },
        ]));
      class a9 extends te.v {
        static fromBinary(e, n) {
          return new a9().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new a9().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new a9().fromJsonString(e, n);
        }
        static equals(e, n) {
          return n7.w.util.equals(a9, e, n);
        }
        constructor(e) {
          super(), (this.items = []), n7.w.util.initPartial(e, this);
        }
      }
      (a9.runtime = n7.w),
        (a9.typeName = "exa.codeium_common_pb.ContextScope"),
        (a9.fields = n7.w.util.newFieldList(() => [
          {
            no: 1,
            name: "items",
            kind: "message",
            T: a0,
            repeated: !0,
          },
        ]));
      class a3 extends te.v {
        static fromBinary(e, n) {
          return new a3().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new a3().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new a3().fromJsonString(e, n);
        }
        static equals(e, n) {
          return n7.w.util.equals(a3, e, n);
        }
        constructor(e) {
          super(),
            (this.nodeName = ""),
            (this.graphStateJson = new Uint8Array(0)),
            (this.graphStateJsonNumBytes = tn.q.zero),
            n7.w.util.initPartial(e, this);
        }
      }
      (a3.runtime = n7.w),
        (a3.typeName = "exa.codeium_common_pb.NodeExecutionRecord"),
        (a3.fields = n7.w.util.newFieldList(() => [
          {
            no: 1,
            name: "node_name",
            kind: "scalar",
            T: 9,
          },
          {
            no: 2,
            name: "start_time",
            kind: "message",
            T: tt.E,
          },
          {
            no: 3,
            name: "end_time",
            kind: "message",
            T: tt.E,
          },
          {
            no: 5,
            name: "graph_state_json",
            kind: "scalar",
            T: 12,
          },
          {
            no: 6,
            name: "graph_state_json_num_bytes",
            kind: "scalar",
            T: 4,
          },
          {
            no: 4,
            name: "subgraph_execution",
            kind: "message",
            T: a4,
          },
        ]));
      class a4 extends te.v {
        static fromBinary(e, n) {
          return new a4().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new a4().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new a4().fromJsonString(e, n);
        }
        static equals(e, n) {
          return n7.w.util.equals(a4, e, n);
        }
        constructor(e) {
          super(), (this.history = []), n7.w.util.initPartial(e, this);
        }
      }
      (a4.runtime = n7.w),
        (a4.typeName = "exa.codeium_common_pb.GraphExecutionState"),
        (a4.fields = n7.w.util.newFieldList(() => [
          {
            no: 1,
            name: "current",
            kind: "message",
            T: a3,
          },
          {
            no: 2,
            name: "history",
            kind: "message",
            T: a3,
            repeated: !0,
          },
        ]));
      class a5 extends te.v {
        static fromBinary(e, n) {
          return new a5().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new a5().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new a5().fromJsonString(e, n);
        }
        static equals(e, n) {
          return n7.w.util.equals(a5, e, n);
        }
        constructor(e) {
          super(), (this.items = []), n7.w.util.initPartial(e, this);
        }
      }
      (a5.runtime = n7.w),
        (a5.typeName = "exa.codeium_common_pb.Guideline"),
        (a5.fields = n7.w.util.newFieldList(() => [
          {
            no: 1,
            name: "items",
            kind: "message",
            T: a8,
            repeated: !0,
          },
        ]));
      class a8 extends te.v {
        static fromBinary(e, n) {
          return new a8().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new a8().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new a8().fromJsonString(e, n);
        }
        static equals(e, n) {
          return n7.w.util.equals(a8, e, n);
        }
        constructor(e) {
          super(), (this.guideline = ""), n7.w.util.initPartial(e, this);
        }
      }
      (a8.runtime = n7.w),
        (a8.typeName = "exa.codeium_common_pb.GuidelineItem"),
        (a8.fields = n7.w.util.newFieldList(() => [
          {
            no: 1,
            name: "guideline",
            kind: "scalar",
            T: 9,
          },
        ]));
      class a6 extends te.v {
        static fromBinary(e, n) {
          return new a6().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new a6().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new a6().fromJsonString(e, n);
        }
        static equals(e, n) {
          return n7.w.util.equals(a6, e, n);
        }
        constructor(e) {
          super(),
            (this.model = 0),
            (this.maxInputTokens = 0),
            (this.temperature = 0),
            (this.maxOutputTokens = 0),
            (this.orderSnippetsByFile = !1),
            n7.w.util.initPartial(e, this);
        }
      }
      (a6.runtime = n7.w),
        (a6.typeName = "exa.codeium_common_pb.ChatNodeConfig"),
        (a6.fields = n7.w.util.newFieldList(() => [
          {
            no: 1,
            name: "model",
            kind: "enum",
            T: n7.w.getEnumType(eV),
          },
          {
            no: 2,
            name: "max_input_tokens",
            kind: "scalar",
            T: 13,
          },
          {
            no: 3,
            name: "temperature",
            kind: "scalar",
            T: 2,
          },
          {
            no: 4,
            name: "max_output_tokens",
            kind: "scalar",
            T: 13,
          },
          {
            no: 5,
            name: "order_snippets_by_file",
            kind: "scalar",
            T: 8,
          },
        ]));
      class a7 extends te.v {
        static fromBinary(e, n) {
          return new a7().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new a7().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new a7().fromJsonString(e, n);
        }
        static equals(e, n) {
          return n7.w.util.equals(a7, e, n);
        }
        constructor(e) {
          super(),
            (this.shouldBatchCcis = !1),
            (this.maxTokensPerSubrange = tn.q.zero),
            (this.numParserWorkers = tn.q.zero),
            (this.numWorkersPerDistributedScorer = tn.q.zero),
            (this.verbose = !1),
            (this.ignoreExtensions = []),
            (this.ignoreDirectoryStubs = []),
            (this.minTokenSpaceForContext = 0),
            (this.maxTargetFiles = 0),
            (this.topCciCount = 0),
            n7.w.util.initPartial(e, this);
        }
      }
      (a7.runtime = n7.w),
        (a7.typeName = "exa.codeium_common_pb.MQueryConfig"),
        (a7.fields = n7.w.util.newFieldList(() => [
          {
            no: 1,
            name: "should_batch_ccis",
            kind: "scalar",
            T: 8,
          },
          {
            no: 2,
            name: "max_tokens_per_subrange",
            kind: "scalar",
            T: 3,
          },
          {
            no: 3,
            name: "num_parser_workers",
            kind: "scalar",
            T: 3,
          },
          {
            no: 4,
            name: "num_workers_per_distributed_scorer",
            kind: "scalar",
            T: 3,
          },
          {
            no: 5,
            name: "verbose",
            kind: "scalar",
            T: 8,
          },
          {
            no: 6,
            name: "ignore_extensions",
            kind: "scalar",
            T: 9,
            repeated: !0,
          },
          {
            no: 7,
            name: "ignore_directory_stubs",
            kind: "scalar",
            T: 9,
            repeated: !0,
          },
          {
            no: 8,
            name: "min_token_space_for_context",
            kind: "scalar",
            T: 13,
          },
          {
            no: 9,
            name: "max_target_files",
            kind: "scalar",
            T: 13,
          },
          {
            no: 10,
            name: "top_cci_count",
            kind: "scalar",
            T: 13,
          },
        ]));
      class re extends te.v {
        static fromBinary(e, n) {
          return new re().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new re().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new re().fromJsonString(e, n);
        }
        static equals(e, n) {
          return n7.w.util.equals(re, e, n);
        }
        constructor(e) {
          super(),
            (this.deltaText = ""),
            (this.deltaTokens = 0),
            (this.stopReason = 0),
            (this.deltaToolCalls = []),
            (this.deltaThinking = ""),
            (this.deltaSignature = ""),
            (this.thinkingRedacted = !1),
            (this.outputId = ""),
            (this.thinkingId = ""),
            n7.w.util.initPartial(e, this);
        }
      }
      (re.runtime = n7.w),
        (re.typeName = "exa.codeium_common_pb.CompletionDelta"),
        (re.fields = n7.w.util.newFieldList(() => [
          {
            no: 1,
            name: "delta_text",
            kind: "scalar",
            T: 9,
          },
          {
            no: 2,
            name: "delta_tokens",
            kind: "scalar",
            T: 13,
          },
          {
            no: 3,
            name: "stop_reason",
            kind: "enum",
            T: n7.w.getEnumType(eX),
          },
          {
            no: 4,
            name: "usage",
            kind: "message",
            T: rI,
          },
          {
            no: 5,
            name: "delta_tool_calls",
            kind: "message",
            T: ra,
            repeated: !0,
          },
          {
            no: 6,
            name: "delta_thinking",
            kind: "scalar",
            T: 9,
          },
          {
            no: 7,
            name: "delta_signature",
            kind: "scalar",
            T: 9,
          },
          {
            no: 8,
            name: "thinking_redacted",
            kind: "scalar",
            T: 8,
          },
          {
            no: 9,
            name: "output_id",
            kind: "scalar",
            T: 9,
          },
          {
            no: 10,
            name: "thinking_id",
            kind: "scalar",
            T: 9,
          },
        ]));
      class rn extends te.v {
        static fromBinary(e, n) {
          return new rn().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new rn().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new rn().fromJsonString(e, n);
        }
        static equals(e, n) {
          return n7.w.util.equals(rn, e, n);
        }
        constructor(e) {
          super(),
            (this.deltas = {}),
            (this.prompt = ""),
            n7.w.util.initPartial(e, this);
        }
      }
      (rn.runtime = n7.w),
        (rn.typeName = "exa.codeium_common_pb.CompletionDeltaMap"),
        (rn.fields = n7.w.util.newFieldList(() => [
          {
            no: 1,
            name: "deltas",
            kind: "map",
            K: 5,
            V: {
              kind: "message",
              T: re,
            },
          },
          {
            no: 2,
            name: "prompt",
            kind: "scalar",
            T: 9,
          },
          {
            no: 3,
            name: "completion_profile",
            kind: "message",
            T: tp,
          },
        ]));
      class rt extends te.v {
        static fromBinary(e, n) {
          return new rt().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new rt().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new rt().fromJsonString(e, n);
        }
        static equals(e, n) {
          return n7.w.util.equals(rt, e, n);
        }
        constructor(e) {
          super(),
            (this.prompt = ""),
            (this.inferenceAddress = ""),
            n7.w.util.initPartial(e, this);
        }
      }
      (rt.runtime = n7.w),
        (rt.typeName = "exa.codeium_common_pb.ChatCompletionInfo"),
        (rt.fields = n7.w.util.newFieldList(() => [
          {
            no: 1,
            name: "prompt",
            kind: "scalar",
            T: 9,
          },
          {
            no: 2,
            name: "inference_address",
            kind: "scalar",
            T: 9,
          },
        ]));
      class ra extends te.v {
        static fromBinary(e, n) {
          return new ra().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new ra().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new ra().fromJsonString(e, n);
        }
        static equals(e, n) {
          return n7.w.util.equals(ra, e, n);
        }
        constructor(e) {
          super(),
            (this.id = ""),
            (this.name = ""),
            (this.argumentsJson = ""),
            (this.invalidJsonStr = ""),
            (this.invalidJsonErr = ""),
            n7.w.util.initPartial(e, this);
        }
      }
      (ra.runtime = n7.w),
        (ra.typeName = "exa.codeium_common_pb.ChatToolCall"),
        (ra.fields = n7.w.util.newFieldList(() => [
          {
            no: 1,
            name: "id",
            kind: "scalar",
            T: 9,
          },
          {
            no: 2,
            name: "name",
            kind: "scalar",
            T: 9,
          },
          {
            no: 3,
            name: "arguments_json",
            kind: "scalar",
            T: 9,
          },
          {
            no: 4,
            name: "invalid_json_str",
            kind: "scalar",
            T: 9,
          },
          {
            no: 5,
            name: "invalid_json_err",
            kind: "scalar",
            T: 9,
          },
        ]));
      class rr extends te.v {
        static fromBinary(e, n) {
          return new rr().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new rr().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new rr().fromJsonString(e, n);
        }
        static equals(e, n) {
          return n7.w.util.equals(rr, e, n);
        }
        constructor(e) {
          super(),
            (this.level = 0),
            (this.message = ""),
            n7.w.util.initPartial(e, this);
        }
      }
      (rr.runtime = n7.w),
        (rr.typeName = "exa.codeium_common_pb.Status"),
        (rr.fields = n7.w.util.newFieldList(() => [
          {
            no: 1,
            name: "level",
            kind: "enum",
            T: n7.w.getEnumType(nH),
          },
          {
            no: 2,
            name: "message",
            kind: "scalar",
            T: 9,
          },
        ]));
      class ri extends te.v {
        static fromBinary(e, n) {
          return new ri().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new ri().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new ri().fromJsonString(e, n);
        }
        static equals(e, n) {
          return n7.w.util.equals(ri, e, n);
        }
        constructor(e) {
          super(),
            (this.row = tn.q.zero),
            (this.col = tn.q.zero),
            n7.w.util.initPartial(e, this);
        }
      }
      (ri.runtime = n7.w),
        (ri.typeName = "exa.codeium_common_pb.DocumentPosition"),
        (ri.fields = n7.w.util.newFieldList(() => [
          {
            no: 1,
            name: "row",
            kind: "scalar",
            T: 4,
          },
          {
            no: 2,
            name: "col",
            kind: "scalar",
            T: 4,
          },
        ]));
      class rs extends te.v {
        static fromBinary(e, n) {
          return new rs().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new rs().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new rs().fromJsonString(e, n);
        }
        static equals(e, n) {
          return n7.w.util.equals(rs, e, n);
        }
        constructor(e) {
          super(),
            (this.startOffset = tn.q.zero),
            (this.endOffset = tn.q.zero),
            n7.w.util.initPartial(e, this);
        }
      }
      (rs.runtime = n7.w),
        (rs.typeName = "exa.codeium_common_pb.Range"),
        (rs.fields = n7.w.util.newFieldList(() => [
          {
            no: 1,
            name: "start_offset",
            kind: "scalar",
            T: 4,
          },
          {
            no: 2,
            name: "end_offset",
            kind: "scalar",
            T: 4,
          },
          {
            no: 3,
            name: "start_position",
            kind: "message",
            T: ri,
          },
          {
            no: 4,
            name: "end_position",
            kind: "message",
            T: ri,
          },
        ]));
      class ro extends te.v {
        static fromBinary(e, n) {
          return new ro().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new ro().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new ro().fromJsonString(e, n);
        }
        static equals(e, n) {
          return n7.w.util.equals(ro, e, n);
        }
        constructor(e) {
          super(),
            (this.absolutePathMigrateMeToUri = ""),
            (this.absoluteUri = ""),
            (this.relativePathMigrateMeToWorkspaceUri = ""),
            (this.workspaceUri = ""),
            (this.text = ""),
            (this.editorLanguage = ""),
            (this.language = 0),
            (this.cursorOffset = tn.q.zero),
            (this.lineEnding = ""),
            (this.isCutoffStart = !1),
            (this.isCutoffEnd = !1),
            (this.linesCutoffStart = 0),
            (this.linesCutoffEnd = 0),
            (this.isDirty = !1),
            (this.isSynthetic = !1),
            n7.w.util.initPartial(e, this);
        }
      }
      (ro.runtime = n7.w),
        (ro.typeName = "exa.codeium_common_pb.Document"),
        (ro.fields = n7.w.util.newFieldList(() => [
          {
            no: 1,
            name: "absolute_path_migrate_me_to_uri",
            kind: "scalar",
            T: 9,
          },
          {
            no: 12,
            name: "absolute_uri",
            kind: "scalar",
            T: 9,
          },
          {
            no: 2,
            name: "relative_path_migrate_me_to_workspace_uri",
            kind: "scalar",
            T: 9,
          },
          {
            no: 13,
            name: "workspace_uri",
            kind: "scalar",
            T: 9,
          },
          {
            no: 3,
            name: "text",
            kind: "scalar",
            T: 9,
          },
          {
            no: 4,
            name: "editor_language",
            kind: "scalar",
            T: 9,
          },
          {
            no: 5,
            name: "language",
            kind: "enum",
            T: n7.w.getEnumType(e4),
          },
          {
            no: 6,
            name: "cursor_offset",
            kind: "scalar",
            T: 4,
          },
          {
            no: 8,
            name: "cursor_position",
            kind: "message",
            T: ri,
          },
          {
            no: 7,
            name: "line_ending",
            kind: "scalar",
            T: 9,
          },
          {
            no: 9,
            name: "visible_range",
            kind: "message",
            T: rs,
          },
          {
            no: 10,
            name: "is_cutoff_start",
            kind: "scalar",
            T: 8,
          },
          {
            no: 11,
            name: "is_cutoff_end",
            kind: "scalar",
            T: 8,
          },
          {
            no: 14,
            name: "lines_cutoff_start",
            kind: "scalar",
            T: 5,
          },
          {
            no: 15,
            name: "lines_cutoff_end",
            kind: "scalar",
            T: 5,
          },
          {
            no: 16,
            name: "timestamp",
            kind: "message",
            T: tt.E,
          },
          {
            no: 17,
            name: "is_dirty",
            kind: "scalar",
            T: 8,
          },
          {
            no: 18,
            name: "is_synthetic",
            kind: "scalar",
            T: 8,
          },
        ]));
      class r_ extends te.v {
        static fromBinary(e, n) {
          return new r_().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new r_().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new r_().fromJsonString(e, n);
        }
        static equals(e, n) {
          return n7.w.util.equals(r_, e, n);
        }
        constructor(e) {
          super(),
            (this.otherDocuments = []),
            (this.codeContextItems = []),
            n7.w.util.initPartial(e, this);
        }
      }
      (r_.runtime = n7.w),
        (r_.typeName = "exa.codeium_common_pb.PromptComponents"),
        (r_.fields = n7.w.util.newFieldList(() => [
          {
            no: 1,
            name: "document",
            kind: "message",
            T: ro,
          },
          {
            no: 2,
            name: "other_documents",
            kind: "message",
            T: ro,
            repeated: !0,
          },
          {
            no: 3,
            name: "code_context_items",
            kind: "message",
            T: at,
            repeated: !0,
          },
        ]));
      class rm extends te.v {
        static fromBinary(e, n) {
          return new rm().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new rm().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new rm().fromJsonString(e, n);
        }
        static equals(e, n) {
          return n7.w.util.equals(rm, e, n);
        }
        constructor(e) {
          super(),
            (this.chunk = {
              case: void 0,
            }),
            n7.w.util.initPartial(e, this);
        }
      }
      (rm.runtime = n7.w),
        (rm.typeName = "exa.codeium_common_pb.TextOrScopeItem"),
        (rm.fields = n7.w.util.newFieldList(() => [
          {
            no: 1,
            name: "text",
            kind: "scalar",
            T: 9,
            oneof: "chunk",
          },
          {
            no: 2,
            name: "item",
            kind: "message",
            T: a0,
            oneof: "chunk",
          },
        ]));
      class rE extends te.v {
        static fromBinary(e, n) {
          return new rE().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new rE().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new rE().fromJsonString(e, n);
        }
        static equals(e, n) {
          return n7.w.util.equals(rE, e, n);
        }
        constructor(e) {
          super(),
            (this.matchRepoName = ""),
            (this.matchPath = ""),
            (this.pinnedContexts = []),
            n7.w.util.initPartial(e, this);
        }
      }
      (rE.runtime = n7.w),
        (rE.typeName = "exa.codeium_common_pb.PinnedContextConfig"),
        (rE.fields = n7.w.util.newFieldList(() => [
          {
            no: 1,
            name: "match_repo_name",
            kind: "scalar",
            T: 9,
          },
          {
            no: 2,
            name: "match_path",
            kind: "scalar",
            T: 9,
          },
          {
            no: 3,
            name: "pinned_contexts",
            kind: "message",
            T: ru,
            repeated: !0,
          },
        ]));
      class ru extends te.v {
        static fromBinary(e, n) {
          return new ru().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new ru().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new ru().fromJsonString(e, n);
        }
        static equals(e, n) {
          return n7.w.util.equals(ru, e, n);
        }
        constructor(e) {
          super(),
            (this.contextItem = {
              case: void 0,
            }),
            n7.w.util.initPartial(e, this);
        }
      }
      (ru.runtime = n7.w),
        (ru.typeName = "exa.codeium_common_pb.PinnedContext"),
        (ru.fields = n7.w.util.newFieldList(() => [
          {
            no: 1,
            name: "repository_path",
            kind: "message",
            T: rl,
            oneof: "context_item",
          },
        ]));
      class rl extends te.v {
        static fromBinary(e, n) {
          return new rl().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new rl().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new rl().fromJsonString(e, n);
        }
        static equals(e, n) {
          return n7.w.util.equals(rl, e, n);
        }
        constructor(e) {
          super(),
            (this.remoteRepoName = ""),
            (this.version = ""),
            (this.relativePath = ""),
            n7.w.util.initPartial(e, this);
        }
      }
      (rl.runtime = n7.w),
        (rl.typeName = "exa.codeium_common_pb.RepositoryPath"),
        (rl.fields = n7.w.util.newFieldList(() => [
          {
            no: 1,
            name: "remote_repo_name",
            kind: "scalar",
            T: 9,
          },
          {
            no: 2,
            name: "version",
            kind: "scalar",
            T: 9,
          },
          {
            no: 3,
            name: "relative_path",
            kind: "scalar",
            T: 9,
          },
        ]));
      class rc extends te.v {
        static fromBinary(e, n) {
          return new rc().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new rc().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new rc().fromJsonString(e, n);
        }
        static equals(e, n) {
          return n7.w.util.equals(rc, e, n);
        }
        constructor(e) {
          super(),
            (this.pinnedContextConfigs = []),
            n7.w.util.initPartial(e, this);
        }
      }
      (rc.runtime = n7.w),
        (rc.typeName = "exa.codeium_common_pb.DefaultPinnedContextConfig"),
        (rc.fields = n7.w.util.newFieldList(() => [
          {
            no: 1,
            name: "pinned_context_configs",
            kind: "message",
            T: rE,
            repeated: !0,
          },
        ]));
      class rT extends te.v {
        static fromBinary(e, n) {
          return new rT().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new rT().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new rT().fromJsonString(e, n);
        }
        static equals(e, n) {
          return n7.w.util.equals(rT, e, n);
        }
        constructor(e) {
          super(),
            (this.id = ""),
            (this.prompt = ""),
            n7.w.util.initPartial(e, this);
        }
      }
      (rT.runtime = n7.w),
        (rT.typeName = "exa.codeium_common_pb.Rule"),
        (rT.fields = n7.w.util.newFieldList(() => [
          {
            no: 1,
            name: "id",
            kind: "scalar",
            T: 9,
          },
          {
            no: 2,
            name: "prompt",
            kind: "scalar",
            T: 9,
          },
        ]));
      class rd extends te.v {
        static fromBinary(e, n) {
          return new rd().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new rd().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new rd().fromJsonString(e, n);
        }
        static equals(e, n) {
          return n7.w.util.equals(rd, e, n);
        }
        constructor(e) {
          super(),
            (this.id = ""),
            (this.startLine = 0),
            (this.endLine = 0),
            n7.w.util.initPartial(e, this);
        }
      }
      (rd.runtime = n7.w),
        (rd.typeName = "exa.codeium_common_pb.RuleViolation"),
        (rd.fields = n7.w.util.newFieldList(() => [
          {
            no: 1,
            name: "id",
            kind: "scalar",
            T: 9,
          },
          {
            no: 2,
            name: "rule",
            kind: "message",
            T: rT,
          },
          {
            no: 3,
            name: "start_line",
            kind: "scalar",
            T: 5,
          },
          {
            no: 4,
            name: "end_line",
            kind: "scalar",
            T: 5,
          },
        ]));
      class rS extends te.v {
        static fromBinary(e, n) {
          return new rS().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new rS().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new rS().fromJsonString(e, n);
        }
        static equals(e, n) {
          return n7.w.util.equals(rS, e, n);
        }
        constructor(e) {
          super(), (this.logs = []), n7.w.util.initPartial(e, this);
        }
      }
      (rS.runtime = n7.w),
        (rS.typeName = "exa.codeium_common_pb.LanguageServerDiagnostics"),
        (rS.fields = n7.w.util.newFieldList(() => [
          {
            no: 1,
            name: "logs",
            kind: "scalar",
            T: 9,
            repeated: !0,
          },
        ]));
      class rA extends te.v {
        static fromBinary(e, n) {
          return new rA().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new rA().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new rA().fromJsonString(e, n);
        }
        static equals(e, n) {
          return n7.w.util.equals(rA, e, n);
        }
        constructor(e) {
          super(), n7.w.util.initPartial(e, this);
        }
      }
      (rA.runtime = n7.w),
        (rA.typeName = "exa.codeium_common_pb.IndexerStats"),
        (rA.fields = n7.w.util.newFieldList(() => [
          {
            no: 1,
            name: "database",
            kind: "message",
            T: rO,
          },
        ]));
      class rO extends te.v {
        static fromBinary(e, n) {
          return new rO().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new rO().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new rO().fromJsonString(e, n);
        }
        static equals(e, n) {
          return n7.w.util.equals(rO, e, n);
        }
        constructor(e) {
          super(),
            (this.backend = {
              case: void 0,
            }),
            n7.w.util.initPartial(e, this);
        }
      }
      (rO.runtime = n7.w),
        (rO.typeName = "exa.codeium_common_pb.IndexerDbStats"),
        (rO.fields = n7.w.util.newFieldList(() => [
          {
            no: 1,
            name: "local_sqlite_faiss",
            kind: "message",
            T: rN,
            oneof: "backend",
          },
          {
            no: 2,
            name: "postgres",
            kind: "message",
            T: rf,
            oneof: "backend",
          },
        ]));
      class rN extends te.v {
        static fromBinary(e, n) {
          return new rN().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new rN().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new rN().fromJsonString(e, n);
        }
        static equals(e, n) {
          return n7.w.util.equals(rN, e, n);
        }
        constructor(e) {
          super(),
            (this.faissStateStats = []),
            (this.totalItemCount = tn.q.zero),
            (this.quantized = !1),
            n7.w.util.initPartial(e, this);
        }
      }
      (rN.runtime = n7.w),
        (rN.typeName = "exa.codeium_common_pb.LocalSqliteFaissDbStats"),
        (rN.fields = n7.w.util.newFieldList(() => [
          {
            no: 1,
            name: "faiss_state_stats",
            kind: "message",
            T: rC,
            repeated: !0,
          },
          {
            no: 2,
            name: "total_item_count",
            kind: "scalar",
            T: 3,
          },
          {
            no: 3,
            name: "quantized",
            kind: "scalar",
            T: 8,
          },
        ]));
      class rC extends te.v {
        static fromBinary(e, n) {
          return new rC().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new rC().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new rC().fromJsonString(e, n);
        }
        static equals(e, n) {
          return n7.w.util.equals(rC, e, n);
        }
        constructor(e) {
          super(),
            (this.embeddingSource = 0),
            (this.workspace = ""),
            (this.itemCount = tn.q.zero),
            n7.w.util.initPartial(e, this);
        }
      }
      (rC.runtime = n7.w),
        (rC.typeName = "exa.codeium_common_pb.FaissStateStats"),
        (rC.fields = n7.w.util.newFieldList(() => [
          {
            no: 1,
            name: "embedding_source",
            kind: "enum",
            T: n7.w.getEnumType(eZ),
          },
          {
            no: 2,
            name: "workspace",
            kind: "scalar",
            T: 9,
          },
          {
            no: 3,
            name: "item_count",
            kind: "scalar",
            T: 3,
          },
        ]));
      class rf extends te.v {
        static fromBinary(e, n) {
          return new rf().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new rf().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new rf().fromJsonString(e, n);
        }
        static equals(e, n) {
          return n7.w.util.equals(rf, e, n);
        }
        constructor(e) {
          super(), n7.w.util.initPartial(e, this);
        }
      }
      (rf.runtime = n7.w),
        (rf.typeName = "exa.codeium_common_pb.PostgresDbStats"),
        (rf.fields = n7.w.util.newFieldList(() => []));
      class rw extends te.v {
        static fromBinary(e, n) {
          return new rw().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new rw().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new rw().fromJsonString(e, n);
        }
        static equals(e, n) {
          return n7.w.util.equals(rw, e, n);
        }
        constructor(e) {
          super(), (this.type = 0), n7.w.util.initPartial(e, this);
        }
      }
      (rw.runtime = n7.w),
        (rw.typeName = "exa.codeium_common_pb.LastUpdateRecord"),
        (rw.fields = n7.w.util.newFieldList(() => [
          {
            no: 1,
            name: "time",
            kind: "message",
            T: tt.E,
          },
          {
            no: 2,
            name: "type",
            kind: "enum",
            T: n7.w.getEnumType(nW),
          },
        ]));
      class rI extends te.v {
        static fromBinary(e, n) {
          return new rI().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new rI().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new rI().fromJsonString(e, n);
        }
        static equals(e, n) {
          return n7.w.util.equals(rI, e, n);
        }
        constructor(e) {
          super(),
            (this.model = 0),
            (this.inputTokens = tn.q.zero),
            (this.outputTokens = tn.q.zero),
            (this.cacheWriteTokens = tn.q.zero),
            (this.cacheReadTokens = tn.q.zero),
            (this.apiProvider = 0),
            (this.messageId = ""),
            (this.responseHeader = {}),
            n7.w.util.initPartial(e, this);
        }
      }
      (rI.runtime = n7.w),
        (rI.typeName = "exa.codeium_common_pb.ModelUsageStats"),
        (rI.fields = n7.w.util.newFieldList(() => [
          {
            no: 1,
            name: "model",
            kind: "enum",
            T: n7.w.getEnumType(eV),
          },
          {
            no: 2,
            name: "input_tokens",
            kind: "scalar",
            T: 4,
          },
          {
            no: 3,
            name: "output_tokens",
            kind: "scalar",
            T: 4,
          },
          {
            no: 4,
            name: "cache_write_tokens",
            kind: "scalar",
            T: 4,
          },
          {
            no: 5,
            name: "cache_read_tokens",
            kind: "scalar",
            T: 4,
          },
          {
            no: 6,
            name: "api_provider",
            kind: "enum",
            T: n7.w.getEnumType(nG),
          },
          {
            no: 7,
            name: "message_id",
            kind: "scalar",
            T: 9,
          },
          {
            no: 8,
            name: "response_header",
            kind: "map",
            K: 9,
            V: {
              kind: "scalar",
              T: 9,
            },
          },
        ]));
      class rR extends te.v {
        static fromBinary(e, n) {
          return new rR().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new rR().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new rR().fromJsonString(e, n);
        }
        static equals(e, n) {
          return n7.w.util.equals(rR, e, n);
        }
        constructor(e) {
          super(), (this.reason = ""), n7.w.util.initPartial(e, this);
        }
      }
      (rR.runtime = n7.w),
        (rR.typeName = "exa.codeium_common_pb.SuperCompleteFilterReason"),
        (rR.fields = n7.w.util.newFieldList(() => [
          {
            no: 1,
            name: "reason",
            kind: "scalar",
            T: 9,
          },
        ]));
      class rL extends te.v {
        static fromBinary(e, n) {
          return new rL().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new rL().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new rL().fromJsonString(e, n);
        }
        static equals(e, n) {
          return n7.w.util.equals(rL, e, n);
        }
        constructor(e) {
          super(),
            (this.message = ""),
            (this.severity = ""),
            (this.source = ""),
            (this.uri = ""),
            (this.language = 0),
            (this.score = tn.q.zero),
            n7.w.util.initPartial(e, this);
        }
      }
      (rL.runtime = n7.w),
        (rL.typeName = "exa.codeium_common_pb.CodeDiagnostic"),
        (rL.fields = n7.w.util.newFieldList(() => [
          {
            no: 1,
            name: "range",
            kind: "message",
            T: rs,
          },
          {
            no: 2,
            name: "message",
            kind: "scalar",
            T: 9,
          },
          {
            no: 3,
            name: "severity",
            kind: "scalar",
            T: 9,
          },
          {
            no: 4,
            name: "source",
            kind: "scalar",
            T: 9,
          },
          {
            no: 5,
            name: "uri",
            kind: "scalar",
            T: 9,
          },
          {
            no: 6,
            name: "id",
            kind: "scalar",
            T: 9,
            opt: !0,
          },
          {
            no: 7,
            name: "language",
            kind: "enum",
            T: n7.w.getEnumType(e4),
          },
          {
            no: 8,
            name: "score",
            kind: "scalar",
            T: 3,
          },
        ]));
      class rp extends te.v {
        static fromBinary(e, n) {
          return new rp().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new rp().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new rp().fromJsonString(e, n);
        }
        static equals(e, n) {
          return n7.w.util.equals(rp, e, n);
        }
        constructor(e) {
          super(),
            (this.text = ""),
            (this.label = ""),
            (this.labelDetail = ""),
            (this.description = ""),
            (this.detail = ""),
            (this.documentation = ""),
            (this.kind = ""),
            (this.selected = !1),
            n7.w.util.initPartial(e, this);
        }
      }
      (rp.runtime = n7.w),
        (rp.typeName = "exa.codeium_common_pb.IntellisenseSuggestion"),
        (rp.fields = n7.w.util.newFieldList(() => [
          {
            no: 1,
            name: "range",
            kind: "message",
            T: rs,
          },
          {
            no: 2,
            name: "text",
            kind: "scalar",
            T: 9,
          },
          {
            no: 3,
            name: "label",
            kind: "scalar",
            T: 9,
          },
          {
            no: 4,
            name: "label_detail",
            kind: "scalar",
            T: 9,
          },
          {
            no: 5,
            name: "description",
            kind: "scalar",
            T: 9,
          },
          {
            no: 6,
            name: "detail",
            kind: "scalar",
            T: 9,
          },
          {
            no: 7,
            name: "documentation",
            kind: "scalar",
            T: 9,
          },
          {
            no: 8,
            name: "kind",
            kind: "scalar",
            T: 9,
          },
          {
            no: 9,
            name: "selected",
            kind: "scalar",
            T: 8,
          },
        ]));
      class rD extends te.v {
        static fromBinary(e, n) {
          return new rD().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new rD().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new rD().fromJsonString(e, n);
        }
        static equals(e, n) {
          return n7.w.util.equals(rD, e, n);
        }
        constructor(e) {
          super(),
            (this.overlappedCodeContextItems = []),
            (this.firstElementSuffixOverlap = 0),
            (this.lastElementPrefixOverlap = 0),
            n7.w.util.initPartial(e, this);
        }
      }
      (rD.runtime = n7.w),
        (rD.typeName = "exa.codeium_common_pb.DocumentLinesElement"),
        (rD.fields = n7.w.util.newFieldList(() => [
          {
            no: 1,
            name: "document_query",
            kind: "message",
            T: rP,
          },
          {
            no: 2,
            name: "overlapped_code_context_items",
            kind: "message",
            T: at,
            repeated: !0,
          },
          {
            no: 3,
            name: "first_element_suffix_overlap",
            kind: "scalar",
            T: 13,
          },
          {
            no: 4,
            name: "last_element_prefix_overlap",
            kind: "scalar",
            T: 13,
          },
        ]));
      class rP extends te.v {
        static fromBinary(e, n) {
          return new rP().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new rP().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new rP().fromJsonString(e, n);
        }
        static equals(e, n) {
          return n7.w.util.equals(rP, e, n);
        }
        constructor(e) {
          super(),
            (this.text = ""),
            (this.cursorOffset = 0),
            (this.startLine = 0),
            (this.endLine = 0),
            (this.useCharacterPosition = !1),
            n7.w.util.initPartial(e, this);
        }
      }
      (rP.runtime = n7.w),
        (rP.typeName = "exa.codeium_common_pb.DocumentQuery"),
        (rP.fields = n7.w.util.newFieldList(() => [
          {
            no: 1,
            name: "text",
            kind: "scalar",
            T: 9,
          },
          {
            no: 2,
            name: "cursor_offset",
            kind: "scalar",
            T: 5,
          },
          {
            no: 3,
            name: "start_line",
            kind: "scalar",
            T: 13,
          },
          {
            no: 4,
            name: "end_line",
            kind: "scalar",
            T: 13,
          },
          {
            no: 5,
            name: "use_character_position",
            kind: "scalar",
            T: 8,
          },
        ]));
      class rM extends te.v {
        static fromBinary(e, n) {
          return new rM().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new rM().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new rM().fromJsonString(e, n);
        }
        static equals(e, n) {
          return n7.w.util.equals(rM, e, n);
        }
        constructor(e) {
          super(),
            (this.element = {
              case: void 0,
            }),
            n7.w.util.initPartial(e, this);
        }
      }
      (rM.runtime = n7.w),
        (rM.typeName = "exa.codeium_common_pb.DocumentOutlineElement"),
        (rM.fields = n7.w.util.newFieldList(() => [
          {
            no: 1,
            name: "code_context_item",
            kind: "message",
            T: at,
            oneof: "element",
          },
          {
            no: 2,
            name: "document_lines_element",
            kind: "message",
            T: rD,
            oneof: "element",
          },
          {
            no: 3,
            name: "text",
            kind: "scalar",
            T: 9,
            oneof: "element",
          },
        ]));
      class ry extends te.v {
        static fromBinary(e, n) {
          return new ry().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new ry().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new ry().fromJsonString(e, n);
        }
        static equals(e, n) {
          return n7.w.util.equals(ry, e, n);
        }
        constructor(e) {
          super(),
            (this.elements = []),
            (this.startIndex = tn.q.zero),
            n7.w.util.initPartial(e, this);
        }
      }
      (ry.runtime = n7.w),
        (ry.typeName = "exa.codeium_common_pb.DocumentOutline"),
        (ry.fields = n7.w.util.newFieldList(() => [
          {
            no: 1,
            name: "elements",
            kind: "message",
            T: rM,
            repeated: !0,
          },
          {
            no: 2,
            name: "start_index",
            kind: "scalar",
            T: 3,
          },
        ]));
      class rh extends te.v {
        static fromBinary(e, n) {
          return new rh().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new rh().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new rh().fromJsonString(e, n);
        }
        static equals(e, n) {
          return n7.w.util.equals(rh, e, n);
        }
        constructor(e) {
          super(),
            (this.eventName = ""),
            (this.apiKey = ""),
            (this.installationId = ""),
            (this.ideName = ""),
            (this.os = ""),
            (this.codeiumVersion = ""),
            (this.ideVersion = ""),
            (this.durationMs = tn.q.zero),
            (this.extra = {}),
            n7.w.util.initPartial(e, this);
        }
      }
      (rh.runtime = n7.w),
        (rh.typeName = "exa.codeium_common_pb.ProductEvent"),
        (rh.fields = n7.w.util.newFieldList(() => [
          {
            no: 1,
            name: "event_name",
            kind: "scalar",
            T: 9,
          },
          {
            no: 2,
            name: "api_key",
            kind: "scalar",
            T: 9,
          },
          {
            no: 3,
            name: "installation_id",
            kind: "scalar",
            T: 9,
          },
          {
            no: 4,
            name: "ide_name",
            kind: "scalar",
            T: 9,
          },
          {
            no: 5,
            name: "os",
            kind: "scalar",
            T: 9,
          },
          {
            no: 6,
            name: "codeium_version",
            kind: "scalar",
            T: 9,
          },
          {
            no: 7,
            name: "ide_version",
            kind: "scalar",
            T: 9,
          },
          {
            no: 8,
            name: "duration_ms",
            kind: "scalar",
            T: 4,
          },
          {
            no: 9,
            name: "extra",
            kind: "map",
            K: 9,
            V: {
              kind: "scalar",
              T: 9,
            },
          },
        ]));
      class rU extends te.v {
        static fromBinary(e, n) {
          return new rU().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new rU().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new rU().fromJsonString(e, n);
        }
        static equals(e, n) {
          return n7.w.util.equals(rU, e, n);
        }
        constructor(e) {
          super(),
            (this.id = ""),
            (this.name = ""),
            (this.description = ""),
            (this.codebaseRootUri = ""),
            (this.fileNames = []),
            (this.commitMessages = []),
            (this.commitSha = []),
            (this.commitDescriptions = []),
            (this.fileDescriptions = []),
            (this.intent = ""),
            n7.w.util.initPartial(e, this);
        }
      }
      (rU.runtime = n7.w),
        (rU.typeName = "exa.codeium_common_pb.CodebaseCluster"),
        (rU.fields = n7.w.util.newFieldList(() => [
          {
            no: 5,
            name: "id",
            kind: "scalar",
            T: 9,
          },
          {
            no: 1,
            name: "name",
            kind: "scalar",
            T: 9,
          },
          {
            no: 2,
            name: "description",
            kind: "scalar",
            T: 9,
          },
          {
            no: 6,
            name: "codebase_root_uri",
            kind: "scalar",
            T: 9,
          },
          {
            no: 3,
            name: "file_names",
            kind: "scalar",
            T: 9,
            repeated: !0,
          },
          {
            no: 4,
            name: "commit_messages",
            kind: "scalar",
            T: 9,
            repeated: !0,
          },
          {
            no: 7,
            name: "commit_sha",
            kind: "scalar",
            T: 9,
            repeated: !0,
          },
          {
            no: 8,
            name: "commit_descriptions",
            kind: "scalar",
            T: 9,
            repeated: !0,
          },
          {
            no: 9,
            name: "file_descriptions",
            kind: "scalar",
            T: 9,
            repeated: !0,
          },
          {
            no: 10,
            name: "intent",
            kind: "scalar",
            T: 9,
          },
        ]));
      class rg extends te.v {
        static fromBinary(e, n) {
          return new rg().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new rg().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new rg().fromJsonString(e, n);
        }
        static equals(e, n) {
          return n7.w.util.equals(rg, e, n);
        }
        constructor(e) {
          super(), (this.clusters = []), n7.w.util.initPartial(e, this);
        }
      }
      (rg.runtime = n7.w),
        (rg.typeName = "exa.codeium_common_pb.CodebaseClusterList"),
        (rg.fields = n7.w.util.newFieldList(() => [
          {
            no: 1,
            name: "clusters",
            kind: "message",
            T: rU,
            repeated: !0,
          },
        ]));
      class rJ extends te.v {
        static fromBinary(e, n) {
          return new rJ().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new rJ().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new rJ().fromJsonString(e, n);
        }
        static equals(e, n) {
          return n7.w.util.equals(rJ, e, n);
        }
        constructor(e) {
          super(),
            (this.chunkType = {
              case: void 0,
            }),
            (this.position = 0),
            n7.w.util.initPartial(e, this);
        }
      }
      (rJ.runtime = n7.w),
        (rJ.typeName = "exa.codeium_common_pb.KnowledgeBaseChunk"),
        (rJ.fields = n7.w.util.newFieldList(() => [
          {
            no: 1,
            name: "text",
            kind: "scalar",
            T: 9,
            oneof: "chunk_type",
          },
          {
            no: 3,
            name: "markdown_chunk",
            kind: "message",
            T: rq,
            oneof: "chunk_type",
          },
          {
            no: 2,
            name: "position",
            kind: "scalar",
            T: 5,
          },
        ]));
      class rk extends te.v {
        static fromBinary(e, n) {
          return new rk().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new rk().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new rk().fromJsonString(e, n);
        }
        static equals(e, n) {
          return n7.w.util.equals(rk, e, n);
        }
        constructor(e) {
          super(),
            (this.documentId = ""),
            (this.url = ""),
            (this.title = ""),
            (this.chunks = []),
            (this.summary = ""),
            (this.text = ""),
            n7.w.util.initPartial(e, this);
        }
      }
      (rk.runtime = n7.w),
        (rk.typeName = "exa.codeium_common_pb.KnowledgeBaseItem"),
        (rk.fields = n7.w.util.newFieldList(() => [
          {
            no: 1,
            name: "document_id",
            kind: "scalar",
            T: 9,
          },
          {
            no: 3,
            name: "url",
            kind: "scalar",
            T: 9,
          },
          {
            no: 4,
            name: "title",
            kind: "scalar",
            T: 9,
          },
          {
            no: 5,
            name: "timestamp",
            kind: "message",
            T: tt.E,
          },
          {
            no: 6,
            name: "chunks",
            kind: "message",
            T: rJ,
            repeated: !0,
          },
          {
            no: 7,
            name: "summary",
            kind: "scalar",
            T: 9,
          },
          {
            no: 8,
            name: "image",
            kind: "message",
            T: rF,
          },
          {
            no: 9,
            name: "dom_tree",
            kind: "message",
            T: aH,
          },
          {
            no: 2,
            name: "text",
            kind: "scalar",
            T: 9,
          },
        ]));
      class rB extends te.v {
        static fromBinary(e, n) {
          return new rB().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new rB().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new rB().fromJsonString(e, n);
        }
        static equals(e, n) {
          return n7.w.util.equals(rB, e, n);
        }
        constructor(e) {
          super(),
            (this.score = 0),
            (this.indexName = ""),
            (this.documentSourceName = ""),
            n7.w.util.initPartial(e, this);
        }
      }
      (rB.runtime = n7.w),
        (rB.typeName = "exa.codeium_common_pb.KnowledgeBaseItemWithMetadata"),
        (rB.fields = n7.w.util.newFieldList(() => [
          {
            no: 1,
            name: "knowledge_base_item",
            kind: "message",
            T: rk,
          },
          {
            no: 2,
            name: "score",
            kind: "scalar",
            T: 2,
          },
          {
            no: 3,
            name: "index_name",
            kind: "scalar",
            T: 9,
          },
          {
            no: 4,
            name: "document_source_name",
            kind: "scalar",
            T: 9,
          },
        ]));
      class rG extends te.v {
        static fromBinary(e, n) {
          return new rG().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new rG().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new rG().fromJsonString(e, n);
        }
        static equals(e, n) {
          return n7.w.util.equals(rG, e, n);
        }
        constructor(e) {
          super(),
            (this.description = ""),
            (this.children = []),
            n7.w.util.initPartial(e, this);
        }
      }
      (rG.runtime = n7.w),
        (rG.typeName = "exa.codeium_common_pb.KnowledgeBaseGroup"),
        (rG.fields = n7.w.util.newFieldList(() => [
          {
            no: 1,
            name: "description",
            kind: "scalar",
            T: 9,
          },
          {
            no: 2,
            name: "item",
            kind: "message",
            T: rB,
          },
          {
            no: 3,
            name: "children",
            kind: "message",
            T: rG,
            repeated: !0,
          },
        ]));
      class rF extends te.v {
        static fromBinary(e, n) {
          return new rF().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new rF().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new rF().fromJsonString(e, n);
        }
        static equals(e, n) {
          return n7.w.util.equals(rF, e, n);
        }
        constructor(e) {
          super(),
            (this.base64Data = ""),
            (this.mimeType = ""),
            (this.caption = ""),
            n7.w.util.initPartial(e, this);
        }
      }
      (rF.runtime = n7.w),
        (rF.typeName = "exa.codeium_common_pb.ImageData"),
        (rF.fields = n7.w.util.newFieldList(() => [
          {
            no: 1,
            name: "base64_data",
            kind: "scalar",
            T: 9,
          },
          {
            no: 2,
            name: "mime_type",
            kind: "scalar",
            T: 9,
          },
          {
            no: 3,
            name: "caption",
            kind: "scalar",
            T: 9,
          },
        ]));
      class rx extends te.v {
        static fromBinary(e, n) {
          return new rx().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new rx().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new rx().fromJsonString(e, n);
        }
        static equals(e, n) {
          return n7.w.util.equals(rx, e, n);
        }
        constructor(e) {
          super(),
            (this.text = ""),
            (this.mimeType = ""),
            n7.w.util.initPartial(e, this);
        }
      }
      (rx.runtime = n7.w),
        (rx.typeName = "exa.codeium_common_pb.TextData"),
        (rx.fields = n7.w.util.newFieldList(() => [
          {
            no: 1,
            name: "text",
            kind: "scalar",
            T: 9,
          },
          {
            no: 2,
            name: "mime_type",
            kind: "scalar",
            T: 9,
          },
        ]));
      class rq extends te.v {
        static fromBinary(e, n) {
          return new rq().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new rq().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new rq().fromJsonString(e, n);
        }
        static equals(e, n) {
          return n7.w.util.equals(rq, e, n);
        }
        constructor(e) {
          super(),
            (this.headers = []),
            (this.text = ""),
            n7.w.util.initPartial(e, this);
        }
      }
      (rq.runtime = n7.w),
        (rq.typeName = "exa.codeium_common_pb.MarkdownChunk"),
        (rq.fields = n7.w.util.newFieldList(() => [
          {
            no: 1,
            name: "headers",
            kind: "message",
            T: rb,
            repeated: !0,
          },
          {
            no: 2,
            name: "text",
            kind: "scalar",
            T: 9,
          },
        ]));
      class rb extends te.v {
        static fromBinary(e, n) {
          return new rb().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new rb().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new rb().fromJsonString(e, n);
        }
        static equals(e, n) {
          return n7.w.util.equals(rb, e, n);
        }
        constructor(e) {
          super(),
            (this.type = 0),
            (this.text = ""),
            n7.w.util.initPartial(e, this);
        }
      }
      (rb.runtime = n7.w),
        (rb.typeName = "exa.codeium_common_pb.MarkdownChunk.MarkdownHeader"),
        (rb.fields = n7.w.util.newFieldList(() => [
          {
            no: 1,
            name: "type",
            kind: "enum",
            T: n7.w.getEnumType(nz),
          },
          {
            no: 2,
            name: "text",
            kind: "scalar",
            T: 9,
          },
        ]));
      class rv extends te.v {
        static fromBinary(e, n) {
          return new rv().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new rv().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new rv().fromJsonString(e, n);
        }
        static equals(e, n) {
          return n7.w.util.equals(rv, e, n);
        }
        constructor(e) {
          super(),
            (this.terminalId = ""),
            (this.shellPid = 0),
            (this.commandLine = ""),
            (this.cwd = ""),
            (this.source = 0),
            n7.w.util.initPartial(e, this);
        }
      }
      (rv.runtime = n7.w),
        (rv.typeName = "exa.codeium_common_pb.TerminalShellCommandHeader"),
        (rv.fields = n7.w.util.newFieldList(() => [
          {
            no: 7,
            name: "metadata",
            kind: "message",
            T: tx,
          },
          {
            no: 1,
            name: "terminal_id",
            kind: "scalar",
            T: 9,
          },
          {
            no: 2,
            name: "shell_pid",
            kind: "scalar",
            T: 13,
          },
          {
            no: 3,
            name: "command_line",
            kind: "scalar",
            T: 9,
          },
          {
            no: 4,
            name: "cwd",
            kind: "scalar",
            T: 9,
          },
          {
            no: 5,
            name: "start_time",
            kind: "message",
            T: tt.E,
          },
          {
            no: 6,
            name: "source",
            kind: "enum",
            T: n7.w.getEnumType(nj),
          },
        ]));
      class rH extends te.v {
        static fromBinary(e, n) {
          return new rH().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new rH().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new rH().fromJsonString(e, n);
        }
        static equals(e, n) {
          return n7.w.util.equals(rH, e, n);
        }
        constructor(e) {
          super(),
            (this.rawData = new Uint8Array(0)),
            n7.w.util.initPartial(e, this);
        }
      }
      (rH.runtime = n7.w),
        (rH.typeName = "exa.codeium_common_pb.TerminalShellCommandData"),
        (rH.fields = n7.w.util.newFieldList(() => [
          {
            no: 1,
            name: "raw_data",
            kind: "scalar",
            T: 12,
          },
        ]));
      class rV extends te.v {
        static fromBinary(e, n) {
          return new rV().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new rV().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new rV().fromJsonString(e, n);
        }
        static equals(e, n) {
          return n7.w.util.equals(rV, e, n);
        }
        constructor(e) {
          super(), n7.w.util.initPartial(e, this);
        }
      }
      (rV.runtime = n7.w),
        (rV.typeName = "exa.codeium_common_pb.TerminalShellCommandTrailer"),
        (rV.fields = n7.w.util.newFieldList(() => [
          {
            no: 1,
            name: "exit_code",
            kind: "scalar",
            T: 5,
            opt: !0,
          },
          {
            no: 2,
            name: "end_time",
            kind: "message",
            T: tt.E,
          },
        ]));
      class rW extends te.v {
        static fromBinary(e, n) {
          return new rW().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new rW().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new rW().fromJsonString(e, n);
        }
        static equals(e, n) {
          return n7.w.util.equals(rW, e, n);
        }
        constructor(e) {
          super(),
            (this.value = {
              case: void 0,
            }),
            n7.w.util.initPartial(e, this);
        }
      }
      (rW.runtime = n7.w),
        (rW.typeName = "exa.codeium_common_pb.TerminalShellCommandStreamChunk"),
        (rW.fields = n7.w.util.newFieldList(() => [
          {
            no: 1,
            name: "header",
            kind: "message",
            T: rv,
            oneof: "value",
          },
          {
            no: 2,
            name: "data",
            kind: "message",
            T: rH,
            oneof: "value",
          },
          {
            no: 3,
            name: "trailer",
            kind: "message",
            T: rV,
            oneof: "value",
          },
        ]));
      class rK extends te.v {
        static fromBinary(e, n) {
          return new rK().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new rK().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new rK().fromJsonString(e, n);
        }
        static equals(e, n) {
          return n7.w.util.equals(rK, e, n);
        }
        constructor(e) {
          super(),
            (this.id = ""),
            (this.shellPid = 0),
            (this.commandLine = ""),
            (this.cwd = ""),
            (this.output = new Uint8Array(0)),
            (this.status = 0),
            (this.source = 0),
            n7.w.util.initPartial(e, this);
        }
      }
      (rK.runtime = n7.w),
        (rK.typeName = "exa.codeium_common_pb.TerminalShellCommand"),
        (rK.fields = n7.w.util.newFieldList(() => [
          {
            no: 10,
            name: "id",
            kind: "scalar",
            T: 9,
          },
          {
            no: 1,
            name: "shell_pid",
            kind: "scalar",
            T: 13,
          },
          {
            no: 2,
            name: "command_line",
            kind: "scalar",
            T: 9,
          },
          {
            no: 3,
            name: "cwd",
            kind: "scalar",
            T: 9,
          },
          {
            no: 4,
            name: "output",
            kind: "scalar",
            T: 12,
          },
          {
            no: 5,
            name: "exit_code",
            kind: "scalar",
            T: 5,
            opt: !0,
          },
          {
            no: 6,
            name: "start_time",
            kind: "message",
            T: tt.E,
          },
          {
            no: 7,
            name: "end_time",
            kind: "message",
            T: tt.E,
          },
          {
            no: 11,
            name: "last_updated_time",
            kind: "message",
            T: tt.E,
          },
          {
            no: 8,
            name: "status",
            kind: "enum",
            T: n7.w.getEnumType(nZ),
          },
          {
            no: 9,
            name: "source",
            kind: "enum",
            T: n7.w.getEnumType(nj),
          },
        ]));
      class rX extends te.v {
        static fromBinary(e, n) {
          return new rX().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new rX().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new rX().fromJsonString(e, n);
        }
        static equals(e, n) {
          return n7.w.util.equals(rX, e, n);
        }
        constructor(e) {
          super(),
            (this.terminalId = ""),
            (this.platform = ""),
            (this.cwd = ""),
            (this.shellName = ""),
            n7.w.util.initPartial(e, this);
        }
      }
      (rX.runtime = n7.w),
        (rX.typeName = "exa.codeium_common_pb.TerminalCommandData"),
        (rX.fields = n7.w.util.newFieldList(() => [
          {
            no: 1,
            name: "terminal_id",
            kind: "scalar",
            T: 9,
          },
          {
            no: 2,
            name: "platform",
            kind: "scalar",
            T: 9,
          },
          {
            no: 3,
            name: "cwd",
            kind: "scalar",
            T: 9,
          },
          {
            no: 4,
            name: "shell_name",
            kind: "scalar",
            T: 9,
          },
        ]));
      class rY extends te.v {
        static fromBinary(e, n) {
          return new rY().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new rY().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new rY().fromJsonString(e, n);
        }
        static equals(e, n) {
          return n7.w.util.equals(rY, e, n);
        }
        constructor(e) {
          super(),
            (this.windsurfProjectId = ""),
            (this.authUid = ""),
            (this.deploymentProvider = 0),
            (this.providerProjectId = ""),
            (this.projectName = ""),
            (this.domain = ""),
            (this.subdomainName = ""),
            (this.providerTeamId = ""),
            (this.projectUrl = ""),
            n7.w.util.initPartial(e, this);
        }
      }
      (rY.runtime = n7.w),
        (rY.typeName = "exa.codeium_common_pb.WindsurfProject"),
        (rY.fields = n7.w.util.newFieldList(() => [
          {
            no: 1,
            name: "windsurf_project_id",
            kind: "scalar",
            T: 9,
          },
          {
            no: 2,
            name: "auth_uid",
            kind: "scalar",
            T: 9,
          },
          {
            no: 3,
            name: "deployment_provider",
            kind: "enum",
            T: n7.w.getEnumType(n1),
          },
          {
            no: 4,
            name: "provider_project_id",
            kind: "scalar",
            T: 9,
          },
          {
            no: 5,
            name: "project_name",
            kind: "scalar",
            T: 9,
          },
          {
            no: 6,
            name: "created_at",
            kind: "message",
            T: tt.E,
          },
          {
            no: 7,
            name: "updated_at",
            kind: "message",
            T: tt.E,
          },
          {
            no: 8,
            name: "domain",
            kind: "scalar",
            T: 9,
          },
          {
            no: 9,
            name: "subdomain_name",
            kind: "scalar",
            T: 9,
          },
          {
            no: 10,
            name: "expires_at",
            kind: "message",
            T: tt.E,
          },
          {
            no: 11,
            name: "claimed_at",
            kind: "message",
            T: tt.E,
          },
          {
            no: 12,
            name: "deprovisioned_at",
            kind: "message",
            T: tt.E,
          },
          {
            no: 14,
            name: "provider_team_id",
            kind: "scalar",
            T: 9,
          },
          {
            no: 13,
            name: "project_url",
            kind: "scalar",
            T: 9,
          },
        ]));
      class rQ extends te.v {
        static fromBinary(e, n) {
          return new rQ().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new rQ().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new rQ().fromJsonString(e, n);
        }
        static equals(e, n) {
          return n7.w.util.equals(rQ, e, n);
        }
        constructor(e) {
          super(),
            (this.windsurfDeploymentId = ""),
            (this.authUid = ""),
            (this.deploymentProvider = 0),
            (this.providerDeploymentId = ""),
            (this.windsurfProjectId = ""),
            (this.projectId = ""),
            (this.projectName = ""),
            (this.workspacePath = ""),
            (this.domain = ""),
            (this.subdomainName = ""),
            (this.providerTeamId = ""),
            (this.deploymentUrl = ""),
            (this.buildStatusUrl = ""),
            (this.projectUrl = ""),
            n7.w.util.initPartial(e, this);
        }
      }
      (rQ.runtime = n7.w),
        (rQ.typeName = "exa.codeium_common_pb.WindsurfDeployment"),
        (rQ.fields = n7.w.util.newFieldList(() => [
          {
            no: 1,
            name: "windsurf_deployment_id",
            kind: "scalar",
            T: 9,
          },
          {
            no: 2,
            name: "auth_uid",
            kind: "scalar",
            T: 9,
          },
          {
            no: 3,
            name: "deployment_provider",
            kind: "enum",
            T: n7.w.getEnumType(n1),
          },
          {
            no: 14,
            name: "provider_deployment_id",
            kind: "scalar",
            T: 9,
          },
          {
            no: 19,
            name: "windsurf_project_id",
            kind: "scalar",
            T: 9,
          },
          {
            no: 4,
            name: "project_id",
            kind: "scalar",
            T: 9,
          },
          {
            no: 5,
            name: "project_name",
            kind: "scalar",
            T: 9,
          },
          {
            no: 6,
            name: "workspace_path",
            kind: "scalar",
            T: 9,
          },
          {
            no: 7,
            name: "created_at",
            kind: "message",
            T: tt.E,
          },
          {
            no: 8,
            name: "updated_at",
            kind: "message",
            T: tt.E,
          },
          {
            no: 16,
            name: "domain",
            kind: "scalar",
            T: 9,
          },
          {
            no: 17,
            name: "subdomain_name",
            kind: "scalar",
            T: 9,
          },
          {
            no: 20,
            name: "provider_team_id",
            kind: "scalar",
            T: 9,
          },
          {
            no: 11,
            name: "expires_at",
            kind: "message",
            T: tt.E,
          },
          {
            no: 12,
            name: "deployment_url",
            kind: "scalar",
            T: 9,
          },
          {
            no: 15,
            name: "claimed_at",
            kind: "message",
            T: tt.E,
          },
          {
            no: 13,
            name: "deprovisioned_at",
            kind: "message",
            T: tt.E,
          },
          {
            no: 9,
            name: "build_status_url",
            kind: "scalar",
            T: 9,
          },
          {
            no: 10,
            name: "project_url",
            kind: "scalar",
            T: 9,
          },
        ]));
      class rz extends te.v {
        static fromBinary(e, n) {
          return new rz().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new rz().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new rz().fromJsonString(e, n);
        }
        static equals(e, n) {
          return n7.w.util.equals(rz, e, n);
        }
        constructor(e) {
          super(),
            (this.deploymentProvider = 0),
            (this.isSandbox = !1),
            (this.providerTeamId = ""),
            (this.providerTeamSlug = ""),
            (this.domain = ""),
            n7.w.util.initPartial(e, this);
        }
      }
      (rz.runtime = n7.w),
        (rz.typeName = "exa.codeium_common_pb.DeployTarget"),
        (rz.fields = n7.w.util.newFieldList(() => [
          {
            no: 1,
            name: "deployment_provider",
            kind: "enum",
            T: n7.w.getEnumType(n1),
          },
          {
            no: 2,
            name: "is_sandbox",
            kind: "scalar",
            T: 8,
          },
          {
            no: 3,
            name: "provider_team_id",
            kind: "scalar",
            T: 9,
          },
          {
            no: 4,
            name: "provider_team_slug",
            kind: "scalar",
            T: 9,
          },
          {
            no: 5,
            name: "domain",
            kind: "scalar",
            T: 9,
          },
        ]));
      class rj extends te.v {
        static fromBinary(e, n) {
          return new rj().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new rj().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new rj().fromJsonString(e, n);
        }
        static equals(e, n) {
          return n7.w.util.equals(rj, e, n);
        }
        constructor(e) {
          super(),
            (this.label = ""),
            (this.value = {
              case: void 0,
            }),
            (this.synonyms = []),
            (this.isFeatured = !1),
            n7.w.util.initPartial(e, this);
        }
      }
      (rj.runtime = n7.w),
        (rj.typeName = "exa.codeium_common_pb.WebDocsOption"),
        (rj.fields = n7.w.util.newFieldList(() => [
          {
            no: 1,
            name: "label",
            kind: "scalar",
            T: 9,
          },
          {
            no: 2,
            name: "docs_url",
            kind: "scalar",
            T: 9,
            oneof: "value",
          },
          {
            no: 3,
            name: "docs_search_domain",
            kind: "scalar",
            T: 9,
            oneof: "value",
          },
          {
            no: 4,
            name: "synonyms",
            kind: "scalar",
            T: 9,
            repeated: !0,
          },
          {
            no: 5,
            name: "is_featured",
            kind: "scalar",
            T: 8,
          },
        ]));
      class rZ extends te.v {
        static fromBinary(e, n) {
          return new rZ().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new rZ().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new rZ().fromJsonString(e, n);
        }
        static equals(e, n) {
          return n7.w.util.equals(rZ, e, n);
        }
        constructor(e) {
          super(),
            (this.customApiServerEndpoint = ""),
            (this.cascadeModelConfigs = []),
            (this.commandModelConfigs = []),
            (this.fallbackModel = 0),
            n7.w.util.initPartial(e, this);
        }
      }
      (rZ.runtime = n7.w),
        (rZ.typeName = "exa.codeium_common_pb.CustomProviderSettings"),
        (rZ.fields = n7.w.util.newFieldList(() => [
          {
            no: 1,
            name: "custom_api_server_endpoint",
            kind: "scalar",
            T: 9,
          },
          {
            no: 2,
            name: "cascade_model_configs",
            kind: "message",
            T: t$,
            repeated: !0,
          },
          {
            no: 3,
            name: "command_model_configs",
            kind: "message",
            T: t$,
            repeated: !0,
          },
          {
            no: 4,
            name: "fallback_model",
            kind: "enum",
            T: n7.w.getEnumType(eV),
          },
        ]));
      class r$ extends te.v {
        static fromBinary(e, n) {
          return new r$().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new r$().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new r$().fromJsonString(e, n);
        }
        static equals(e, n) {
          return n7.w.util.equals(r$, e, n);
        }
        constructor(e) {
          super(),
            (this.teamId = ""),
            (this.userPromptCreditCap = 0),
            (this.userFlowCreditCap = 0),
            (this.autoProvisionCascadeSeat = !1),
            (this.allowMcpServers = !1),
            (this.allowAutoRunCommands = !1),
            (this.allowCustomRecipes = !1),
            (this.maxUnclaimedSites = 0),
            (this.allowAppDeployments = !1),
            (this.allowSandboxAppDeployments = !1),
            (this.allowTeamsAppDeployments = !1),
            (this.maxNewSitesPerDay = 0),
            (this.allowGithubReviews = !1),
            (this.allowGithubDescriptionEdits = !1),
            (this.pullRequestReviewGuidelines = ""),
            (this.pullRequestDescriptionGuidelines = ""),
            (this.disableToolCalls = !1),
            (this.allowIndividualLevelAnalytics = !1),
            (this.allowAttribution = !1),
            (this.allowedMcpServers = []),
            (this.allowGithubAutoReviews = !1),
            (this.allowBrowserExperimentalFeatures = !1),
            (this.disableToolCallExecutionOutsideWorkspace = !1),
            (this.allowVibeAndReplace = !1),
            (this.disableDeepwiki = !1),
            n7.w.util.initPartial(e, this);
        }
      }
      (r$.runtime = n7.w),
        (r$.typeName = "exa.codeium_common_pb.TeamConfig"),
        (r$.fields = n7.w.util.newFieldList(() => [
          {
            no: 1,
            name: "team_id",
            kind: "scalar",
            T: 9,
          },
          {
            no: 2,
            name: "user_prompt_credit_cap",
            kind: "scalar",
            T: 5,
          },
          {
            no: 3,
            name: "user_flow_credit_cap",
            kind: "scalar",
            T: 5,
          },
          {
            no: 4,
            name: "auto_provision_cascade_seat",
            kind: "scalar",
            T: 8,
          },
          {
            no: 5,
            name: "allow_mcp_servers",
            kind: "scalar",
            T: 8,
          },
          {
            no: 7,
            name: "allow_auto_run_commands",
            kind: "scalar",
            T: 8,
          },
          {
            no: 8,
            name: "allow_custom_recipes",
            kind: "scalar",
            T: 8,
          },
          {
            no: 9,
            name: "max_unclaimed_sites",
            kind: "scalar",
            T: 5,
          },
          {
            no: 10,
            name: "allow_app_deployments",
            kind: "scalar",
            T: 8,
          },
          {
            no: 19,
            name: "allow_sandbox_app_deployments",
            kind: "scalar",
            T: 8,
          },
          {
            no: 20,
            name: "allow_teams_app_deployments",
            kind: "scalar",
            T: 8,
          },
          {
            no: 11,
            name: "max_new_sites_per_day",
            kind: "scalar",
            T: 5,
          },
          {
            no: 12,
            name: "allow_github_reviews",
            kind: "scalar",
            T: 8,
          },
          {
            no: 13,
            name: "allow_github_description_edits",
            kind: "scalar",
            T: 8,
          },
          {
            no: 14,
            name: "pull_request_review_guidelines",
            kind: "scalar",
            T: 9,
          },
          {
            no: 16,
            name: "pull_request_description_guidelines",
            kind: "scalar",
            T: 9,
          },
          {
            no: 15,
            name: "disable_tool_calls",
            kind: "scalar",
            T: 8,
          },
          {
            no: 17,
            name: "allow_individual_level_analytics",
            kind: "scalar",
            T: 8,
          },
          {
            no: 18,
            name: "allow_conversation_sharing",
            kind: "scalar",
            T: 8,
            opt: !0,
          },
          {
            no: 21,
            name: "pull_request_review_rate_limit",
            kind: "scalar",
            T: 5,
            opt: !0,
          },
          {
            no: 22,
            name: "allow_attribution",
            kind: "scalar",
            T: 8,
          },
          {
            no: 23,
            name: "allowed_mcp_servers",
            kind: "message",
            T: r4,
            repeated: !0,
          },
          {
            no: 24,
            name: "allow_github_auto_reviews",
            kind: "scalar",
            T: 8,
          },
          {
            no: 25,
            name: "allow_browser_experimental_features",
            kind: "scalar",
            T: 8,
          },
          {
            no: 26,
            name: "disable_tool_call_execution_outside_workspace",
            kind: "scalar",
            T: 8,
          },
          {
            no: 27,
            name: "allow_vibe_and_replace",
            kind: "scalar",
            T: 8,
          },
          {
            no: 28,
            name: "disable_deepwiki",
            kind: "scalar",
            T: 8,
          },
          {
            no: 29,
            name: "custom_provider_settings",
            kind: "message",
            T: rZ,
          },
        ]));
      class r1 extends te.v {
        static fromBinary(e, n) {
          return new r1().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new r1().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new r1().fromJsonString(e, n);
        }
        static equals(e, n) {
          return n7.w.util.equals(r1, e, n);
        }
        constructor(e) {
          super(),
            (this.projectId = ""),
            (this.framework = ""),
            n7.w.util.initPartial(e, this);
        }
      }
      (r1.runtime = n7.w),
        (r1.typeName = "exa.codeium_common_pb.WebAppDeploymentConfig"),
        (r1.fields = n7.w.util.newFieldList(() => [
          {
            no: 1,
            name: "project_id",
            kind: "scalar",
            T: 9,
          },
          {
            no: 2,
            name: "framework",
            kind: "scalar",
            T: 9,
          },
        ]));
      class r2 extends te.v {
        static fromBinary(e, n) {
          return new r2().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new r2().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new r2().fromJsonString(e, n);
        }
        static equals(e, n) {
          return n7.w.util.equals(r2, e, n);
        }
        constructor(e) {
          super(),
            (this.title = ""),
            (this.id = ""),
            (this.link = ""),
            (this.description = ""),
            (this.commands = {}),
            n7.w.util.initPartial(e, this);
        }
      }
      (r2.runtime = n7.w),
        (r2.typeName = "exa.codeium_common_pb.McpServerTemplate"),
        (r2.fields = n7.w.util.newFieldList(() => [
          {
            no: 1,
            name: "title",
            kind: "scalar",
            T: 9,
          },
          {
            no: 2,
            name: "id",
            kind: "scalar",
            T: 9,
          },
          {
            no: 3,
            name: "link",
            kind: "scalar",
            T: 9,
          },
          {
            no: 4,
            name: "description",
            kind: "scalar",
            T: 9,
          },
          {
            no: 5,
            name: "commands",
            kind: "map",
            K: 9,
            V: {
              kind: "message",
              T: r0,
            },
          },
        ]));
      class r0 extends te.v {
        static fromBinary(e, n) {
          return new r0().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new r0().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new r0().fromJsonString(e, n);
        }
        static equals(e, n) {
          return n7.w.util.equals(r0, e, n);
        }
        constructor(e) {
          super(), (this.variables = []), n7.w.util.initPartial(e, this);
        }
      }
      (r0.runtime = n7.w),
        (r0.typeName = "exa.codeium_common_pb.McpServerCommand"),
        (r0.fields = n7.w.util.newFieldList(() => [
          {
            no: 1,
            name: "template",
            kind: "message",
            T: r9,
          },
          {
            no: 2,
            name: "variables",
            kind: "message",
            T: r3,
            repeated: !0,
          },
        ]));
      class r9 extends te.v {
        static fromBinary(e, n) {
          return new r9().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new r9().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new r9().fromJsonString(e, n);
        }
        static equals(e, n) {
          return n7.w.util.equals(r9, e, n);
        }
        constructor(e) {
          super(),
            (this.command = ""),
            (this.args = []),
            (this.env = {}),
            n7.w.util.initPartial(e, this);
        }
      }
      (r9.runtime = n7.w),
        (r9.typeName = "exa.codeium_common_pb.McpCommandTemplate"),
        (r9.fields = n7.w.util.newFieldList(() => [
          {
            no: 1,
            name: "command",
            kind: "scalar",
            T: 9,
          },
          {
            no: 2,
            name: "args",
            kind: "scalar",
            T: 9,
            repeated: !0,
          },
          {
            no: 3,
            name: "env",
            kind: "map",
            K: 9,
            V: {
              kind: "scalar",
              T: 9,
            },
          },
        ]));
      class r3 extends te.v {
        static fromBinary(e, n) {
          return new r3().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new r3().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new r3().fromJsonString(e, n);
        }
        static equals(e, n) {
          return n7.w.util.equals(r3, e, n);
        }
        constructor(e) {
          super(),
            (this.name = ""),
            (this.title = ""),
            (this.description = ""),
            (this.link = ""),
            n7.w.util.initPartial(e, this);
        }
      }
      (r3.runtime = n7.w),
        (r3.typeName = "exa.codeium_common_pb.McpCommandVariable"),
        (r3.fields = n7.w.util.newFieldList(() => [
          {
            no: 1,
            name: "name",
            kind: "scalar",
            T: 9,
          },
          {
            no: 2,
            name: "title",
            kind: "scalar",
            T: 9,
          },
          {
            no: 3,
            name: "description",
            kind: "scalar",
            T: 9,
          },
          {
            no: 4,
            name: "link",
            kind: "scalar",
            T: 9,
          },
        ]));
      class r4 extends te.v {
        static fromBinary(e, n) {
          return new r4().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new r4().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new r4().fromJsonString(e, n);
        }
        static equals(e, n) {
          return n7.w.util.equals(r4, e, n);
        }
        constructor(e) {
          super(),
            (this.serverId = ""),
            (this.configuration = {
              case: void 0,
            }),
            n7.w.util.initPartial(e, this);
        }
      }
      (r4.runtime = n7.w),
        (r4.typeName = "exa.codeium_common_pb.McpServerConfig"),
        (r4.fields = n7.w.util.newFieldList(() => [
          {
            no: 1,
            name: "server_id",
            kind: "scalar",
            T: 9,
          },
          {
            no: 2,
            name: "local",
            kind: "message",
            T: r5,
            oneof: "configuration",
          },
          {
            no: 3,
            name: "remote",
            kind: "message",
            T: r8,
            oneof: "configuration",
          },
        ]));
      class r5 extends te.v {
        static fromBinary(e, n) {
          return new r5().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new r5().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new r5().fromJsonString(e, n);
        }
        static equals(e, n) {
          return n7.w.util.equals(r5, e, n);
        }
        constructor(e) {
          super(),
            (this.command = ""),
            (this.args = []),
            (this.env = {}),
            n7.w.util.initPartial(e, this);
        }
      }
      (r5.runtime = n7.w),
        (r5.typeName = "exa.codeium_common_pb.McpLocalServer"),
        (r5.fields = n7.w.util.newFieldList(() => [
          {
            no: 1,
            name: "command",
            kind: "scalar",
            T: 9,
          },
          {
            no: 2,
            name: "args",
            kind: "scalar",
            T: 9,
            repeated: !0,
          },
          {
            no: 3,
            name: "env",
            kind: "map",
            K: 9,
            V: {
              kind: "scalar",
              T: 9,
            },
          },
        ]));
      class r8 extends te.v {
        static fromBinary(e, n) {
          return new r8().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new r8().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new r8().fromJsonString(e, n);
        }
        static equals(e, n) {
          return n7.w.util.equals(r8, e, n);
        }
        constructor(e) {
          super(),
            (this.type = ""),
            (this.url = ""),
            (this.headers = {}),
            n7.w.util.initPartial(e, this);
        }
      }
      (r8.runtime = n7.w),
        (r8.typeName = "exa.codeium_common_pb.McpRemoteServer"),
        (r8.fields = n7.w.util.newFieldList(() => [
          {
            no: 1,
            name: "type",
            kind: "scalar",
            T: 9,
          },
          {
            no: 2,
            name: "url",
            kind: "scalar",
            T: 9,
          },
          {
            no: 3,
            name: "headers",
            kind: "map",
            K: 9,
            V: {
              kind: "scalar",
              T: 9,
            },
          },
        ]));
      class r6 extends te.v {
        static fromBinary(e, n) {
          return new r6().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new r6().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new r6().fromJsonString(e, n);
        }
        static equals(e, n) {
          return n7.w.util.equals(r6, e, n);
        }
        constructor(e) {
          super(),
            (this.userId = ""),
            (this.sessionId = ""),
            (this.properties = {}),
            n7.w.util.initPartial(e, this);
        }
      }
      (r6.runtime = n7.w),
        (r6.typeName = "exa.codeium_common_pb.UnleashContext"),
        (r6.fields = n7.w.util.newFieldList(() => [
          {
            no: 1,
            name: "user_id",
            kind: "scalar",
            T: 9,
          },
          {
            no: 2,
            name: "session_id",
            kind: "scalar",
            T: 9,
          },
          {
            no: 3,
            name: "properties",
            kind: "map",
            K: 9,
            V: {
              kind: "scalar",
              T: 9,
            },
          },
        ]));
      class r7 extends te.v {
        static fromBinary(e, n) {
          return new r7().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new r7().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new r7().fromJsonString(e, n);
        }
        static equals(e, n) {
          return n7.w.util.equals(r7, e, n);
        }
        constructor(e) {
          super(),
            (this.url = ""),
            (this.pageId = ""),
            (this.pageTitle = ""),
            (this.viewportWidth = 0),
            (this.viewportHeight = 0),
            (this.faviconUrl = ""),
            n7.w.util.initPartial(e, this);
        }
      }
      (r7.runtime = n7.w),
        (r7.typeName = "exa.codeium_common_pb.BrowserPageMetadata"),
        (r7.fields = n7.w.util.newFieldList(() => [
          {
            no: 1,
            name: "url",
            kind: "scalar",
            T: 9,
          },
          {
            no: 2,
            name: "page_id",
            kind: "scalar",
            T: 9,
          },
          {
            no: 3,
            name: "page_title",
            kind: "scalar",
            T: 9,
          },
          {
            no: 4,
            name: "viewport_width",
            kind: "scalar",
            T: 13,
          },
          {
            no: 5,
            name: "viewport_height",
            kind: "scalar",
            T: 13,
          },
          {
            no: 6,
            name: "favicon_url",
            kind: "scalar",
            T: 9,
          },
          {
            no: 7,
            name: "last_visited_time",
            kind: "message",
            T: tt.E,
          },
        ]));
      class ie extends te.v {
        static fromBinary(e, n) {
          return new ie().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new ie().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new ie().fromJsonString(e, n);
        }
        static equals(e, n) {
          return n7.w.util.equals(ie, e, n);
        }
        constructor(e) {
          super(),
            (this.viewportScrollX = 0),
            (this.viewportScrollY = 0),
            (this.clickX = 0),
            (this.clickY = 0),
            (this.targetElementTagName = ""),
            (this.targetElementXPath = ""),
            n7.w.util.initPartial(e, this);
        }
      }
      (ie.runtime = n7.w),
        (ie.typeName = "exa.codeium_common_pb.BrowserClickInteraction"),
        (ie.fields = n7.w.util.newFieldList(() => [
          {
            no: 1,
            name: "viewport_scroll_x",
            kind: "scalar",
            T: 13,
          },
          {
            no: 2,
            name: "viewport_scroll_y",
            kind: "scalar",
            T: 13,
          },
          {
            no: 3,
            name: "click_x",
            kind: "scalar",
            T: 13,
          },
          {
            no: 4,
            name: "click_y",
            kind: "scalar",
            T: 13,
          },
          {
            no: 5,
            name: "target_element_tag_name",
            kind: "scalar",
            T: 9,
          },
          {
            no: 6,
            name: "target_element_x_path",
            kind: "scalar",
            T: 9,
          },
        ]));
      class it extends te.v {
        static fromBinary(e, n) {
          return new it().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new it().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new it().fromJsonString(e, n);
        }
        static equals(e, n) {
          return n7.w.util.equals(it, e, n);
        }
        constructor(e) {
          super(),
            (this.viewportScrollX = 0),
            (this.viewportScrollY = 0),
            n7.w.util.initPartial(e, this);
        }
      }
      (it.runtime = n7.w),
        (it.typeName = "exa.codeium_common_pb.BrowserScrollInteraction"),
        (it.fields = n7.w.util.newFieldList(() => [
          {
            no: 1,
            name: "viewport_scroll_x",
            kind: "scalar",
            T: 13,
          },
          {
            no: 2,
            name: "viewport_scroll_y",
            kind: "scalar",
            T: 13,
          },
        ]));
      class ia extends te.v {
        static fromBinary(e, n) {
          return new ia().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new ia().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new ia().fromJsonString(e, n);
        }
        static equals(e, n) {
          return n7.w.util.equals(ia, e, n);
        }
        constructor(e) {
          super(),
            (this.interaction = {
              case: void 0,
            }),
            n7.w.util.initPartial(e, this);
        }
      }
      (ia.runtime = n7.w),
        (ia.typeName = "exa.codeium_common_pb.BrowserInteraction"),
        (ia.fields = n7.w.util.newFieldList(() => [
          {
            no: 1,
            name: "timestamp",
            kind: "message",
            T: tt.E,
          },
          {
            no: 2,
            name: "page_metadata",
            kind: "message",
            T: r7,
          },
          {
            no: 3,
            name: "click",
            kind: "message",
            T: ie,
            oneof: "interaction",
          },
          {
            no: 4,
            name: "scroll",
            kind: "message",
            T: it,
            oneof: "interaction",
          },
        ]));
      class ir extends te.v {
        static fromBinary(e, n) {
          return new ir().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new ir().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new ir().fromJsonString(e, n);
        }
        static equals(e, n) {
          return n7.w.util.equals(ir, e, n);
        }
        constructor(e) {
          super(),
            (this.name = ""),
            (this.value = 0),
            (this.details = {}),
            (this.lowerBetter = !1),
            (this.isBool = !1),
            (this.error = ""),
            (this.trajectoryId = ""),
            n7.w.util.initPartial(e, this);
        }
      }
      (ir.runtime = n7.w),
        (ir.typeName = "exa.codeium_common_pb.MetricsRecord"),
        (ir.fields = n7.w.util.newFieldList(() => [
          {
            no: 1,
            name: "name",
            kind: "scalar",
            T: 9,
          },
          {
            no: 2,
            name: "value",
            kind: "scalar",
            T: 2,
          },
          {
            no: 3,
            name: "details",
            kind: "map",
            K: 9,
            V: {
              kind: "scalar",
              T: 9,
            },
          },
          {
            no: 4,
            name: "lower_better",
            kind: "scalar",
            T: 8,
          },
          {
            no: 5,
            name: "is_bool",
            kind: "scalar",
            T: 8,
          },
          {
            no: 6,
            name: "error",
            kind: "scalar",
            T: 9,
          },
          {
            no: 7,
            name: "trajectory_id",
            kind: "scalar",
            T: 9,
          },
        ]));
      class ii extends te.v {
        static fromBinary(e, n) {
          return new ii().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new ii().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new ii().fromJsonString(e, n);
        }
        static equals(e, n) {
          return n7.w.util.equals(ii, e, n);
        }
        constructor(e) {
          super(),
            (this.model = 0),
            (this.message = ""),
            n7.w.util.initPartial(e, this);
        }
      }
      (ii.runtime = n7.w),
        (ii.typeName = "exa.codeium_common_pb.ModelNotification"),
        (ii.fields = n7.w.util.newFieldList(() => [
          {
            no: 1,
            name: "model",
            kind: "enum",
            T: n7.w.getEnumType(eV),
          },
          {
            no: 2,
            name: "message",
            kind: "scalar",
            T: 9,
          },
        ]));
      class is extends te.v {
        static fromBinary(e, n) {
          return new is().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new is().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new is().fromJsonString(e, n);
        }
        static equals(e, n) {
          return n7.w.util.equals(is, e, n);
        }
        constructor(e) {
          super(),
            (this.modelNotifications = []),
            n7.w.util.initPartial(e, this);
        }
      }
      (is.runtime = n7.w),
        (is.typeName =
          "exa.codeium_common_pb.ModelNotificationExperimentPayload"),
        (is.fields = n7.w.util.newFieldList(() => [
          {
            no: 1,
            name: "model_notifications",
            kind: "message",
            T: ii,
            repeated: !0,
          },
        ]));
      class io extends te.v {
        static fromBinary(e, n) {
          return new io().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new io().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new io().fromJsonString(e, n);
        }
        static equals(e, n) {
          return n7.w.util.equals(io, e, n);
        }
        constructor(e) {
          super(), (this.uri = ""), n7.w.util.initPartial(e, this);
        }
      }
      (io.runtime = n7.w),
        (io.typeName = "exa.codeium_common_pb.LspReference"),
        (io.fields = n7.w.util.newFieldList(() => [
          {
            no: 1,
            name: "uri",
            kind: "scalar",
            T: 9,
          },
          {
            no: 2,
            name: "range",
            kind: "message",
            T: rs,
          },
          {
            no: 3,
            name: "snippet",
            kind: "scalar",
            T: 9,
            opt: !0,
          },
        ]));
      class i_ extends te.v {
        static fromBinary(e, n) {
          return new i_().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new i_().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new i_().fromJsonString(e, n);
        }
        static equals(e, n) {
          return n7.w.util.equals(i_, e, n);
        }
        constructor(e) {
          super(),
            (this.text = ""),
            (this.tooltipText = ""),
            n7.w.util.initPartial(e, this);
        }
      }
      (i_.runtime = n7.w),
        (i_.typeName =
          "exa.codeium_common_pb.CascadeModelHeaderWarningExperimentPayload"),
        (i_.fields = n7.w.util.newFieldList(() => [
          {
            no: 1,
            name: "text",
            kind: "scalar",
            T: 9,
          },
          {
            no: 2,
            name: "tooltip_text",
            kind: "scalar",
            T: 9,
          },
        ]));
      class im extends te.v {
        static fromBinary(e, n) {
          return new im().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new im().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new im().fromJsonString(e, n);
        }
        static equals(e, n) {
          return n7.w.util.equals(im, e, n);
        }
        constructor(e) {
          super(),
            (this.id = ""),
            (this.uri = ""),
            (this.line = 0),
            (this.content = ""),
            n7.w.util.initPartial(e, this);
        }
      }
      (im.runtime = n7.w),
        (im.typeName = "exa.codeium_common_pb.CodeAnnotation"),
        (im.fields = n7.w.util.newFieldList(() => [
          {
            no: 1,
            name: "id",
            kind: "scalar",
            T: 9,
          },
          {
            no: 2,
            name: "uri",
            kind: "scalar",
            T: 9,
          },
          {
            no: 3,
            name: "line",
            kind: "scalar",
            T: 13,
          },
          {
            no: 4,
            name: "content",
            kind: "scalar",
            T: 9,
          },
          {
            no: 5,
            name: "created_at",
            kind: "message",
            T: tt.E,
          },
        ]));
      class iE extends te.v {
        static fromBinary(e, n) {
          return new iE().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new iE().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new iE().fromJsonString(e, n);
        }
        static equals(e, n) {
          return n7.w.util.equals(iE, e, n);
        }
        constructor(e) {
          super(), (this.annotations = []), n7.w.util.initPartial(e, this);
        }
      }
      (iE.runtime = n7.w),
        (iE.typeName = "exa.codeium_common_pb.CodeAnnotationsState"),
        (iE.fields = n7.w.util.newFieldList(() => [
          {
            no: 1,
            name: "annotations",
            kind: "message",
            T: im,
            repeated: !0,
          },
        ]));
      class iu extends te.v {
        static fromBinary(e, n) {
          return new iu().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new iu().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new iu().fromJsonString(e, n);
        }
        static equals(e, n) {
          return n7.w.util.equals(iu, e, n);
        }
        constructor(e) {
          super(),
            (this.description = {
              case: void 0,
            }),
            n7.w.util.initPartial(e, this);
        }
      }
      (iu.runtime = n7.w),
        (iu.typeName = "exa.codeium_common_pb.TrajectoryDescription"),
        (iu.fields = n7.w.util.newFieldList(() => [
          {
            no: 1,
            name: "cascade_conversation_title",
            kind: "scalar",
            T: 9,
            oneof: "description",
          },
          {
            no: 2,
            name: "mainline_branch_name",
            kind: "scalar",
            T: 9,
            oneof: "description",
          },
        ]));
      class il extends te.v {
        static fromBinary(e, n) {
          return new il().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new il().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new il().fromJsonString(e, n);
        }
        static equals(e, n) {
          return n7.w.util.equals(il, e, n);
        }
        constructor(e) {
          super(),
            (this.provider = 0),
            (this.model = 0),
            n7.w.util.initPartial(e, this);
        }
      }
      (il.runtime = n7.w),
        (il.typeName = "exa.codeium_common_pb.ThirdPartyWebSearchConfig"),
        (il.fields = n7.w.util.newFieldList(() => [
          {
            no: 1,
            name: "provider",
            kind: "enum",
            T: n7.w.getEnumType(n8),
          },
          {
            no: 2,
            name: "model",
            kind: "enum",
            T: n7.w.getEnumType(n6),
          },
        ]));
      class ic extends te.v {
        static fromBinary(e, n) {
          return new ic().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new ic().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new ic().fromJsonString(e, n);
        }
        static equals(e, n) {
          return n7.w.util.equals(ic, e, n);
        }
        constructor(e) {
          super(),
            (this.code = 0),
            (this.message = ""),
            n7.w.util.initPartial(e, this);
        }
      }
      (ic.runtime = n7.w),
        (ic.typeName = "exa.codeium_common_pb.GRPCStatus"),
        (ic.fields = n7.w.util.newFieldList(() => [
          {
            no: 1,
            name: "code",
            kind: "scalar",
            T: 5,
          },
          {
            no: 2,
            name: "message",
            kind: "scalar",
            T: 9,
          },
        ]));
      class iT extends te.v {
        static fromBinary(e, n) {
          return new iT().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new iT().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new iT().fromJsonString(e, n);
        }
        static equals(e, n) {
          return n7.w.util.equals(iT, e, n);
        }
        constructor(e) {
          super(), (this.ideVersion = ""), n7.w.util.initPartial(e, this);
        }
      }
      (iT.runtime = n7.w),
        (iT.typeName = "exa.codeium_common_pb.CascadeDataMetadata"),
        (iT.fields = n7.w.util.newFieldList(() => [
          {
            no: 1,
            name: "ide_version",
            kind: "scalar",
            T: 9,
          },
        ]));
    },
    2750: function (e, n, t) {
      t.d(n, {
        T: function () {
          return s;
        },
        e: function () {
          return o;
        },
      });
      var a = t(5462),
        r = t(18698),
        i = t(26847);
      class s extends a.v {
        static fromBinary(e, n) {
          return new s().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new s().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new s().fromJsonString(e, n);
        }
        static equals(e, n) {
          return r.w.util.equals(s, e, n);
        }
        constructor(e) {
          super(),
            (this.eventName = ""),
            (this.apiKey = ""),
            (this.installationId = ""),
            (this.ideName = ""),
            (this.os = ""),
            (this.codeiumVersion = ""),
            (this.ideVersion = ""),
            (this.durationMs = i.q.zero),
            (this.extra = {}),
            (this.experiments = {}),
            (this.planTier = ""),
            (this.deviceFingerprint = ""),
            (this.ideType = ""),
            r.w.util.initPartial(e, this);
        }
      }
      (s.runtime = r.w),
        (s.typeName = "exa.product_analytics_pb.RecordAnalyticsEventRequest"),
        (s.fields = r.w.util.newFieldList(() => [
          {
            no: 1,
            name: "event_name",
            kind: "scalar",
            T: 9,
          },
          {
            no: 2,
            name: "api_key",
            kind: "scalar",
            T: 9,
          },
          {
            no: 3,
            name: "installation_id",
            kind: "scalar",
            T: 9,
          },
          {
            no: 4,
            name: "ide_name",
            kind: "scalar",
            T: 9,
          },
          {
            no: 5,
            name: "os",
            kind: "scalar",
            T: 9,
          },
          {
            no: 6,
            name: "codeium_version",
            kind: "scalar",
            T: 9,
          },
          {
            no: 7,
            name: "ide_version",
            kind: "scalar",
            T: 9,
          },
          {
            no: 8,
            name: "duration_ms",
            kind: "scalar",
            T: 4,
          },
          {
            no: 9,
            name: "extra",
            kind: "map",
            K: 9,
            V: {
              kind: "scalar",
              T: 9,
            },
          },
          {
            no: 10,
            name: "experiments",
            kind: "map",
            K: 9,
            V: {
              kind: "scalar",
              T: 8,
            },
          },
          {
            no: 11,
            name: "plan_tier",
            kind: "scalar",
            T: 9,
          },
          {
            no: 12,
            name: "device_fingerprint",
            kind: "scalar",
            T: 9,
          },
          {
            no: 13,
            name: "ide_type",
            kind: "scalar",
            T: 9,
          },
        ]));
      class o extends a.v {
        static fromBinary(e, n) {
          return new o().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new o().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new o().fromJsonString(e, n);
        }
        static equals(e, n) {
          return r.w.util.equals(o, e, n);
        }
        constructor(e) {
          super(), r.w.util.initPartial(e, this);
        }
      }
      (o.runtime = r.w),
        (o.typeName = "exa.product_analytics_pb.RecordAnalyticsEventResponse"),
        (o.fields = r.w.util.newFieldList(() => []));
    },
    46238: function (e, n, t) {
      t.d(n, {
        $3N: function () {
          return np;
        },
        $FU: function () {
          return g;
        },
        $K$: function () {
          return ti;
        },
        $s9: function () {
          return n$;
        },
        AQf: function () {
          return ts;
        },
        AUE: function () {
          return e8;
        },
        BDv: function () {
          return e6;
        },
        BG2: function () {
          return e0;
        },
        BY2: function () {
          return tF;
        },
        BZK: function () {
          return tr;
        },
        BbO: function () {
          return ec;
        },
        BrS: function () {
          return aQ;
        },
        C9M: function () {
          return nJ;
        },
        CE_: function () {
          return K;
        },
        C_j: function () {
          return nN;
        },
        Caj: function () {
          return J;
        },
        Cg6: function () {
          return nR;
        },
        ChZ: function () {
          return t8;
        },
        ClD: function () {
          return te;
        },
        CnX: function () {
          return nA;
        },
        D4H: function () {
          return tO;
        },
        DKE: function () {
          return t6;
        },
        Ddo: function () {
          return et;
        },
        DeJ: function () {
          return eo;
        },
        Diz: function () {
          return a6;
        },
        DjX: function () {
          return eL;
        },
        DpX: function () {
          return G;
        },
        Dse: function () {
          return eC;
        },
        EOh: function () {
          return n4;
        },
        EV4: function () {
          return ac;
        },
        Enx: function () {
          return nh;
        },
        Es0: function () {
          return af;
        },
        F08: function () {
          return c;
        },
        FPA: function () {
          return k;
        },
        G$$: function () {
          return ni;
        },
        G5w: function () {
          return eV;
        },
        GTn: function () {
          return ez;
        },
        GXn: function () {
          return ek;
        },
        GcC: function () {
          return tp;
        },
        Gfs: function () {
          return n3;
        },
        Ggr: function () {
          return nb;
        },
        GiM: function () {
          return tc;
        },
        HM4: function () {
          return nw;
        },
        HOm: function () {
          return eJ;
        },
        HXo: function () {
          return Y;
        },
        HsU: function () {
          return aU;
        },
        I6l: function () {
          return em;
        },
        IJC: function () {
          return t4;
        },
        ITr: function () {
          return aL;
        },
        IVz: function () {
          return av;
        },
        If1: function () {
          return tM;
        },
        IiL: function () {
          return aa;
        },
        IkW: function () {
          return tB;
        },
        IqD: function () {
          return e7;
        },
        JEQ: function () {
          return H;
        },
        JO6: function () {
          return aZ;
        },
        JSK: function () {
          return tf;
        },
        KG0: function () {
          return ew;
        },
        KJl: function () {
          return e4;
        },
        KVp: function () {
          return aO;
        },
        KpI: function () {
          return aC;
        },
        Kph: function () {
          return ao;
        },
        Kz3: function () {
          return nl;
        },
        LGb: function () {
          return eA;
        },
        LMS: function () {
          return nY;
        },
        LYc: function () {
          return eD;
        },
        Lbp: function () {
          return nf;
        },
        MDk: function () {
          return ng;
        },
        MKK: function () {
          return na;
        },
        MNf: function () {
          return eP;
        },
        MY2: function () {
          return tN;
        },
        MZL: function () {
          return a4;
        },
        MZg: function () {
          return nQ;
        },
        MnS: function () {
          return tg;
        },
        MyF: function () {
          return az;
        },
        NdG: function () {
          return a$;
        },
        NvG: function () {
          return aR;
        },
        OHA: function () {
          return aK;
        },
        OWg: function () {
          return ea;
        },
        OXg: function () {
          return ag;
        },
        OZE: function () {
          return nO;
        },
        PIF: function () {
          return nC;
        },
        PPY: function () {
          return to;
        },
        QJM: function () {
          return nE;
        },
        Qp: function () {
          return nr;
        },
        R9k: function () {
          return u;
        },
        Rdk: function () {
          return nB;
        },
        RpW: function () {
          return t9;
        },
        S1K: function () {
          return tn;
        },
        SK1: function () {
          return at;
        },
        SVe: function () {
          return tX;
        },
        SYL: function () {
          return tS;
        },
        SZ7: function () {
          return L;
        },
        Ske: function () {
          return ns;
        },
        Szm: function () {
          return n_;
        },
        TGI: function () {
          return aF;
        },
        TGv: function () {
          return a9;
        },
        TPo: function () {
          return a7;
        },
        TaJ: function () {
          return n0;
        },
        Tcy: function () {
          return aJ;
        },
        TdQ: function () {
          return z;
        },
        TdV: function () {
          return tz;
        },
        TgZ: function () {
          return nz;
        },
        Thn: function () {
          return no;
        },
        TlL: function () {
          return ta;
        },
        TqG: function () {
          return aX;
        },
        U5e: function () {
          return tH;
        },
        UIP: function () {
          return tu;
        },
        UKI: function () {
          return aN;
        },
        UVR: function () {
          return aG;
        },
        UdK: function () {
          return tT;
        },
        Uiz: function () {
          return eu;
        },
        Uj_: function () {
          return x;
        },
        V$m: function () {
          return eh;
        },
        V5F: function () {
          return y;
        },
        VEV: function () {
          return ny;
        },
        VHu: function () {
          return V;
        },
        VQX: function () {
          return t2;
        },
        VU: function () {
          return nn;
        },
        VZW: function () {
          return X;
        },
        W0G: function () {
          return tI;
        },
        WTb: function () {
          return M;
        },
        WV$: function () {
          return er;
        },
        Wcn: function () {
          return ar;
        },
        X6f: function () {
          return t_;
        },
        XSA: function () {
          return n8;
        },
        XYx: function () {
          return tb;
        },
        XpZ: function () {
          return e9;
        },
        XtI: function () {
          return nU;
        },
        YHo: function () {
          return e$;
        },
        Z4i: function () {
          return tU;
        },
        ZSk: function () {
          return an;
        },
        Zrc: function () {
          return eZ;
        },
        _Zr: function () {
          return t7;
        },
        a0X: function () {
          return ee;
        },
        aLi: function () {
          return ex;
        },
        aU0: function () {
          return tL;
        },
        aV9: function () {
          return ej;
        },
        aao: function () {
          return eS;
        },
        b40: function () {
          return ei;
        },
        bWF: function () {
          return eq;
        },
        blg: function () {
          return nF;
        },
        boX: function () {
          return n1;
        },
        byZ: function () {
          return n2;
        },
        cVD: function () {
          return tq;
        },
        cdH: function () {
          return ey;
        },
        cjJ: function () {
          return aP;
        },
        cno: function () {
          return n7;
        },
        cqx: function () {
          return F;
        },
        d68: function () {
          return th;
        },
        dP7: function () {
          return ev;
        },
        dSA: function () {
          return tD;
        },
        dT3: function () {
          return aS;
        },
        dW: function () {
          return eK;
        },
        dgb: function () {
          return nt;
        },
        djG: function () {
          return ae;
        },
        dt5: function () {
          return eF;
        },
        dtQ: function () {
          return nH;
        },
        eDU: function () {
          return eH;
        },
        eEF: function () {
          return ap;
        },
        eJS: function () {
          return aI;
        },
        eQx: function () {
          return b;
        },
        eXV: function () {
          return e2;
        },
        ebJ: function () {
          return tA;
        },
        ebx: function () {
          return ne;
        },
        ed9: function () {
          return nq;
        },
        en8: function () {
          return eI;
        },
        eo9: function () {
          return ak;
        },
        eu3: function () {
          return nm;
        },
        foQ: function () {
          return nX;
        },
        gOG: function () {
          return aB;
        },
        gS5: function () {
          return nI;
        },
        gXJ: function () {
          return l;
        },
        gg: function () {
          return eB;
        },
        gi$: function () {
          return tR;
        },
        hIr: function () {
          return ep;
        },
        hKR: function () {
          return Z;
        },
        hWw: function () {
          return aM;
        },
        hyd: function () {
          return tE;
        },
        i44: function () {
          return P;
        },
        i4g: function () {
          return a2;
        },
        i9I: function () {
          return eb;
        },
        iY3: function () {
          return tV;
        },
        im0: function () {
          return eN;
        },
        ize: function () {
          return nV;
        },
        j$x: function () {
          return tQ;
        },
        j6O: function () {
          return nS;
        },
        j8h: function () {
          return nj;
        },
        jBw: function () {
          return a0;
        },
        jQy: function () {
          return ef;
        },
        jX6: function () {
          return aH;
        },
        jl5: function () {
          return eg;
        },
        jsJ: function () {
          return nM;
        },
        jxY: function () {
          return tP;
        },
        kDP: function () {
          return W;
        },
        kNQ: function () {
          return a3;
        },
        kTs: function () {
          return nK;
        },
        kaI: function () {
          return tW;
        },
        ko0: function () {
          return nc;
        },
        l1Y: function () {
          return aE;
        },
        l4G: function () {
          return eE;
        },
        lAU: function () {
          return j;
        },
        lVX: function () {
          return ax;
        },
        lYr: function () {
          return $;
        },
        lxr: function () {
          return aD;
        },
        m$i: function () {
          return a5;
        },
        n5m: function () {
          return R;
        },
        nF7: function () {
          return aT;
        },
        nQR: function () {
          return ai;
        },
        nfr: function () {
          return aw;
        },
        oKH: function () {
          return tG;
        },
        oSA: function () {
          return al;
        },
        p1F: function () {
          return eG;
        },
        p_l: function () {
          return aj;
        },
        q0m: function () {
          return ad;
        },
        qL6: function () {
          return eO;
        },
        qMW: function () {
          return ab;
        },
        qpc: function () {
          return ah;
        },
        rB2: function () {
          return nT;
        },
        rHd: function () {
          return v;
        },
        rS6: function () {
          return aA;
        },
        rTu: function () {
          return q;
        },
        rjy: function () {
          return aq;
        },
        rl5: function () {
          return e_;
        },
        s1A: function () {
          return nP;
        },
        s55: function () {
          return p;
        },
        sP_: function () {
          return tl;
        },
        snd: function () {
          return nd;
        },
        sqs: function () {
          return au;
        },
        t8O: function () {
          return Q;
        },
        tJm: function () {
          return a8;
        },
        tjf: function () {
          return re;
        },
        tkp: function () {
          return el;
        },
        tkx: function () {
          return t3;
        },
        ttm: function () {
          return en;
        },
        tx7: function () {
          return aW;
        },
        uTV: function () {
          return eM;
        },
        uaF: function () {
          return t0;
        },
        umC: function () {
          return tJ;
        },
        urf: function () {
          return n5;
        },
        uzM: function () {
          return A;
        },
        vNJ: function () {
          return nG;
        },
        vsN: function () {
          return nv;
        },
        wDg: function () {
          return n6;
        },
        wGc: function () {
          return nu;
        },
        wcK: function () {
          return nZ;
        },
        wm4: function () {
          return e3;
        },
        wr7: function () {
          return B;
        },
        x9E: function () {
          return es;
        },
        xDj: function () {
          return nx;
        },
        xSv: function () {
          return ty;
        },
        y11: function () {
          return tw;
        },
        yS6: function () {
          return eT;
        },
        yXf: function () {
          return am;
        },
        yZK: function () {
          return tC;
        },
        yc$: function () {
          return h;
        },
        ymo: function () {
          return a1;
        },
        ytp: function () {
          return nD;
        },
        z02: function () {
          return as;
        },
        z7v: function () {
          return nW;
        },
        zId: function () {
          return tk;
        },
        zRM: function () {
          return eW;
        },
        zSk: function () {
          return t5;
        },
        zhx: function () {
          return e5;
        },
        zqL: function () {
          return tK;
        },
        zz8: function () {
          return eU;
        },
      });
      var a,
        r,
        i,
        s,
        o,
        _,
        m,
        E,
        u,
        l,
        c,
        T,
        d,
        S,
        A,
        O,
        N = t(18698),
        C = t(5462),
        f = t(26847),
        w = t(21552),
        I = t(35165);
      ((a = u || (u = {}))[(a.UNSPECIFIED = 0)] = "UNSPECIFIED"),
        (a[(a.MONTH = 1)] = "MONTH"),
        (a[(a.YEAR = 2)] = "YEAR"),
        N.w.util.setEnumType(u, "exa.seat_management_pb.PaymentPeriod", [
          {
            no: 0,
            name: "PAYMENT_PERIOD_UNSPECIFIED",
          },
          {
            no: 1,
            name: "PAYMENT_PERIOD_MONTH",
          },
          {
            no: 2,
            name: "PAYMENT_PERIOD_YEAR",
          },
        ]),
        ((r = l || (l = {}))[(r.UNSPECIFIED = 0)] = "UNSPECIFIED"),
        (r[(r.MONTH = 1)] = "MONTH"),
        (r[(r.YEAR = 2)] = "YEAR"),
        N.w.util.setEnumType(l, "exa.seat_management_pb.SubInterval", [
          {
            no: 0,
            name: "SUB_INTERVAL_UNSPECIFIED",
          },
          {
            no: 1,
            name: "SUB_INTERVAL_MONTH",
          },
          {
            no: 2,
            name: "SUB_INTERVAL_YEAR",
          },
        ]),
        ((i = c || (c = {}))[(i.UNSPECIFIED = 0)] = "UNSPECIFIED"),
        (i[(i.TEAMS_MONTHLY = 1)] = "TEAMS_MONTHLY"),
        (i[(i.TEAMS_YEARLY = 2)] = "TEAMS_YEARLY"),
        N.w.util.setEnumType(c, "exa.seat_management_pb.StripePrice", [
          {
            no: 0,
            name: "STRIPE_PRICE_UNSPECIFIED",
          },
          {
            no: 1,
            name: "STRIPE_PRICE_TEAMS_MONTHLY",
          },
          {
            no: 2,
            name: "STRIPE_PRICE_TEAMS_YEARLY",
          },
        ]),
        ((s = T || (T = {}))[(s.UNSPECIFIED = 0)] = "UNSPECIFIED"),
        (s[(s.ENTRY = 1)] = "ENTRY"),
        (s[(s.STANDARD = 2)] = "STANDARD"),
        N.w.util.setEnumType(T, "exa.seat_management_pb.CascadeSeatType", [
          {
            no: 0,
            name: "CASCADE_SEAT_TYPE_UNSPECIFIED",
          },
          {
            no: 1,
            name: "CASCADE_SEAT_TYPE_ENTRY",
          },
          {
            no: 2,
            name: "CASCADE_SEAT_TYPE_STANDARD",
          },
        ]),
        ((o = d || (d = {}))[(o.UNSPECIFIED = 0)] = "UNSPECIFIED"),
        (o[(o.CASCADE_SEAT = 1)] = "CASCADE_SEAT"),
        N.w.util.setEnumType(d, "exa.seat_management_pb.UserTeamDetailsType", [
          {
            no: 0,
            name: "USER_TEAM_DETAILS_TYPE_UNSPECIFIED",
          },
          {
            no: 1,
            name: "USER_TEAM_DETAILS_TYPE_CASCADE_SEAT",
          },
        ]),
        ((_ = S || (S = {}))[(_.UNSPECIFIED = 0)] = "UNSPECIFIED"),
        (_[(_.TOP_UP = 1)] = "TOP_UP"),
        N.w.util.setEnumType(
          S,
          "exa.seat_management_pb.PendingTransactionType",
          [
            {
              no: 0,
              name: "PENDING_TRANSACTION_TYPE_UNSPECIFIED",
            },
            {
              no: 1,
              name: "PENDING_TRANSACTION_TYPE_TOP_UP",
            },
          ]
        ),
        ((m = A || (A = {}))[(m.UNSPECIFIED = 0)] = "UNSPECIFIED"),
        (m[(m.PURCHASE = 1)] = "PURCHASE"),
        (m[(m.REFERRER = 2)] = "REFERRER"),
        (m[(m.AVERY = 3)] = "AVERY"),
        (m[(m.TOP_UP = 4)] = "TOP_UP"),
        (m[(m.SUPPORT = 5)] = "SUPPORT"),
        (m[(m.GTM = 6)] = "GTM"),
        N.w.util.setEnumType(
          A,
          "exa.seat_management_pb.FlexCreditChronicleType",
          [
            {
              no: 0,
              name: "FLEX_CREDIT_CHRONICLE_TYPE_UNSPECIFIED",
            },
            {
              no: 1,
              name: "FLEX_CREDIT_CHRONICLE_TYPE_PURCHASE",
            },
            {
              no: 2,
              name: "FLEX_CREDIT_CHRONICLE_TYPE_REFERRER",
            },
            {
              no: 3,
              name: "FLEX_CREDIT_CHRONICLE_TYPE_AVERY",
            },
            {
              no: 4,
              name: "FLEX_CREDIT_CHRONICLE_TYPE_TOP_UP",
            },
            {
              no: 5,
              name: "FLEX_CREDIT_CHRONICLE_TYPE_SUPPORT",
            },
            {
              no: 6,
              name: "FLEX_CREDIT_CHRONICLE_TYPE_GTM",
            },
          ]
        ),
        ((E = O || (O = {}))[(E.UNSPECIFIED = 0)] = "UNSPECIFIED"),
        (E[(E.MANUAL = 1)] = "MANUAL"),
        (E[(E.TOP_UP = 2)] = "TOP_UP"),
        N.w.util.setEnumType(O, "exa.seat_management_pb.PurchaseReasonType", [
          {
            no: 0,
            name: "PURCHASE_REASON_TYPE_UNSPECIFIED",
          },
          {
            no: 1,
            name: "PURCHASE_REASON_TYPE_MANUAL",
          },
          {
            no: 2,
            name: "PURCHASE_REASON_TYPE_TOP_UP",
          },
        ]);
      class R extends C.v {
        static fromBinary(e, n) {
          return new R().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new R().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new R().fromJsonString(e, n);
        }
        static equals(e, n) {
          return N.w.util.equals(R, e, n);
        }
        constructor(e) {
          super(),
            (this.apiKey = ""),
            (this.name = ""),
            (this.email = ""),
            (this.id = ""),
            (this.teamId = ""),
            (this.teamStatus = I.ngL.UNSPECIFIED),
            (this.username = ""),
            (this.preferredTimeZone = ""),
            (this.publicProfileEnabled = !1),
            (this.bio = ""),
            (this.pro = !1),
            (this.profilePictureUri = ""),
            (this.disableCodeium = !1),
            (this.profilePicturePresignedUrl = ""),
            (this.occupationCompany = ""),
            (this.occupationRole = ""),
            (this.yearsOfExperienceMin = 0),
            (this.yearsOfExperienceMax = 0),
            (this.newsletter = !1),
            (this.disabledTelemetry = !1),
            (this.inboundSource = ""),
            (this.signupStage = ""),
            (this.usedTrial = !1),
            (this.usedPromptCredits = f.q.zero),
            (this.usedFlowCredits = f.q.zero),
            (this.referralCode = ""),
            N.w.util.initPartial(e, this);
        }
      }
      (R.runtime = N.w),
        (R.typeName = "exa.seat_management_pb.User"),
        (R.fields = N.w.util.newFieldList(() => [
          {
            no: 1,
            name: "api_key",
            kind: "scalar",
            T: 9,
          },
          {
            no: 2,
            name: "name",
            kind: "scalar",
            T: 9,
          },
          {
            no: 3,
            name: "email",
            kind: "scalar",
            T: 9,
          },
          {
            no: 4,
            name: "signup_time",
            kind: "message",
            T: w.E,
          },
          {
            no: 5,
            name: "last_update_time",
            kind: "message",
            T: w.E,
          },
          {
            no: 6,
            name: "id",
            kind: "scalar",
            T: 9,
          },
          {
            no: 7,
            name: "team_id",
            kind: "scalar",
            T: 9,
          },
          {
            no: 8,
            name: "team_status",
            kind: "enum",
            T: N.w.getEnumType(I.ngL),
          },
          {
            no: 9,
            name: "username",
            kind: "scalar",
            T: 9,
          },
          {
            no: 10,
            name: "preferred_time_zone",
            kind: "scalar",
            T: 9,
          },
          {
            no: 11,
            name: "public_profile_enabled",
            kind: "scalar",
            T: 8,
          },
          {
            no: 12,
            name: "bio",
            kind: "scalar",
            T: 9,
          },
          {
            no: 13,
            name: "pro",
            kind: "scalar",
            T: 8,
          },
          {
            no: 14,
            name: "profile_picture_uri",
            kind: "scalar",
            T: 9,
          },
          {
            no: 16,
            name: "disable_codeium",
            kind: "scalar",
            T: 8,
          },
          {
            no: 15,
            name: "profile_picture_presigned_url",
            kind: "scalar",
            T: 9,
          },
          {
            no: 17,
            name: "occupation_company",
            kind: "scalar",
            T: 9,
          },
          {
            no: 18,
            name: "occupation_role",
            kind: "scalar",
            T: 9,
          },
          {
            no: 23,
            name: "years_of_experience_min",
            kind: "scalar",
            T: 13,
          },
          {
            no: 24,
            name: "years_of_experience_max",
            kind: "scalar",
            T: 13,
          },
          {
            no: 19,
            name: "newsletter",
            kind: "scalar",
            T: 8,
          },
          {
            no: 20,
            name: "disabled_telemetry",
            kind: "scalar",
            T: 8,
          },
          {
            no: 21,
            name: "inbound_source",
            kind: "scalar",
            T: 9,
          },
          {
            no: 22,
            name: "signup_stage",
            kind: "scalar",
            T: 9,
          },
          {
            no: 25,
            name: "used_trial",
            kind: "scalar",
            T: 8,
          },
          {
            no: 26,
            name: "first_windsurf_use_time",
            kind: "message",
            T: w.E,
          },
          {
            no: 27,
            name: "windsurf_pro_trial_end_time",
            kind: "message",
            T: w.E,
          },
          {
            no: 28,
            name: "used_prompt_credits",
            kind: "scalar",
            T: 3,
          },
          {
            no: 29,
            name: "used_flow_credits",
            kind: "scalar",
            T: 3,
          },
          {
            no: 30,
            name: "referral_code",
            kind: "scalar",
            T: 9,
          },
        ]));
      class L extends C.v {
        static fromBinary(e, n) {
          return new L().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new L().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new L().fromJsonString(e, n);
        }
        static equals(e, n) {
          return N.w.util.equals(L, e, n);
        }
        constructor(e) {
          super(),
            (this.id = ""),
            (this.name = ""),
            (this.inviteId = ""),
            (this.usedTrial = !1),
            (this.stripeSubscriptionId = ""),
            (this.subscriptionActive = !1),
            (this.stripeCustomerId = ""),
            (this.numSeatsCurrentBillingPeriod = f.q.zero),
            (this.attributionEnabled = !1),
            (this.ssoProviderId = ""),
            (this.offersEnabled = !1),
            (this.teamsTier = I.wuw.UNSPECIFIED),
            (this.flexCreditQuota = f.q.zero),
            (this.usedFlowCredits = f.q.zero),
            (this.usedPromptCredits = f.q.zero),
            (this.numCascadeSeats = f.q.zero),
            (this.cascadeSeatType = 0),
            (this.topUpEnabled = !1),
            (this.monthlyTopUpAmount = f.q.zero),
            (this.topUpSpent = f.q.zero),
            (this.topUpIncrement = f.q.zero),
            (this.usedFlexCredits = f.q.zero),
            N.w.util.initPartial(e, this);
        }
      }
      (L.runtime = N.w),
        (L.typeName = "exa.seat_management_pb.Team"),
        (L.fields = N.w.util.newFieldList(() => [
          {
            no: 1,
            name: "id",
            kind: "scalar",
            T: 9,
          },
          {
            no: 2,
            name: "name",
            kind: "scalar",
            T: 9,
          },
          {
            no: 3,
            name: "signup_time",
            kind: "message",
            T: w.E,
          },
          {
            no: 4,
            name: "invite_id",
            kind: "scalar",
            T: 9,
          },
          {
            no: 5,
            name: "used_trial",
            kind: "scalar",
            T: 8,
          },
          {
            no: 6,
            name: "stripe_subscription_id",
            kind: "scalar",
            T: 9,
          },
          {
            no: 7,
            name: "subscription_active",
            kind: "scalar",
            T: 8,
          },
          {
            no: 8,
            name: "stripe_customer_id",
            kind: "scalar",
            T: 9,
          },
          {
            no: 9,
            name: "current_billing_period_start",
            kind: "message",
            T: w.E,
          },
          {
            no: 18,
            name: "current_billing_period_end",
            kind: "message",
            T: w.E,
          },
          {
            no: 10,
            name: "num_seats_current_billing_period",
            kind: "scalar",
            T: 3,
          },
          {
            no: 11,
            name: "attribution_enabled",
            kind: "scalar",
            T: 8,
          },
          {
            no: 12,
            name: "sso_provider_id",
            kind: "scalar",
            T: 9,
          },
          {
            no: 13,
            name: "offers_enabled",
            kind: "scalar",
            T: 8,
          },
          {
            no: 14,
            name: "teams_tier",
            kind: "enum",
            T: N.w.getEnumType(I.wuw),
          },
          {
            no: 15,
            name: "flex_credit_quota",
            kind: "scalar",
            T: 3,
          },
          {
            no: 16,
            name: "used_flow_credits",
            kind: "scalar",
            T: 3,
          },
          {
            no: 17,
            name: "used_prompt_credits",
            kind: "scalar",
            T: 3,
          },
          {
            no: 19,
            name: "num_cascade_seats",
            kind: "scalar",
            T: 3,
          },
          {
            no: 20,
            name: "cascade_usage_month_start",
            kind: "message",
            T: w.E,
          },
          {
            no: 21,
            name: "cascade_usage_month_end",
            kind: "message",
            T: w.E,
          },
          {
            no: 22,
            name: "cascade_seat_type",
            kind: "enum",
            T: N.w.getEnumType(T),
          },
          {
            no: 23,
            name: "top_up_enabled",
            kind: "scalar",
            T: 8,
          },
          {
            no: 24,
            name: "monthly_top_up_amount",
            kind: "scalar",
            T: 3,
          },
          {
            no: 25,
            name: "top_up_spent",
            kind: "scalar",
            T: 3,
          },
          {
            no: 26,
            name: "top_up_increment",
            kind: "scalar",
            T: 3,
          },
          {
            no: 27,
            name: "used_flex_credits",
            kind: "scalar",
            T: 3,
          },
        ]));
      class p extends C.v {
        static fromBinary(e, n) {
          return new p().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new p().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new p().fromJsonString(e, n);
        }
        static equals(e, n) {
          return N.w.util.equals(p, e, n);
        }
        constructor(e) {
          super(),
            (this.id = ""),
            (this.name = ""),
            (this.email = ""),
            (this.teamId = ""),
            (this.issuedByApiKey = ""),
            N.w.util.initPartial(e, this);
        }
      }
      (p.runtime = N.w),
        (p.typeName = "exa.seat_management_pb.PreapprovedUser"),
        (p.fields = N.w.util.newFieldList(() => [
          {
            no: 1,
            name: "id",
            kind: "scalar",
            T: 9,
          },
          {
            no: 2,
            name: "name",
            kind: "scalar",
            T: 9,
          },
          {
            no: 3,
            name: "email",
            kind: "scalar",
            T: 9,
          },
          {
            no: 4,
            name: "team_id",
            kind: "scalar",
            T: 9,
          },
          {
            no: 5,
            name: "issued_by_api_key",
            kind: "scalar",
            T: 9,
          },
          {
            no: 6,
            name: "created_at",
            kind: "message",
            T: w.E,
          },
          {
            no: 7,
            name: "updated_at",
            kind: "message",
            T: w.E,
          },
        ]));
      class D extends C.v {
        static fromBinary(e, n) {
          return new D().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new D().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new D().fromJsonString(e, n);
        }
        static equals(e, n) {
          return N.w.util.equals(D, e, n);
        }
        constructor(e) {
          super(),
            (this.exists = !1),
            (this.newsletter = !1),
            (this.disabledTelemetry = !1),
            (this.inboundSource = ""),
            (this.signupStage = ""),
            N.w.util.initPartial(e, this);
        }
      }
      (D.runtime = N.w),
        (D.typeName = "exa.seat_management_pb.UserSettings"),
        (D.fields = N.w.util.newFieldList(() => [
          {
            no: 1,
            name: "exists",
            kind: "scalar",
            T: 8,
          },
          {
            no: 2,
            name: "newsletter",
            kind: "scalar",
            T: 8,
          },
          {
            no: 3,
            name: "disabled_telemetry",
            kind: "scalar",
            T: 8,
          },
          {
            no: 4,
            name: "inbound_source",
            kind: "scalar",
            T: 9,
          },
          {
            no: 5,
            name: "signup_stage",
            kind: "scalar",
            T: 9,
          },
        ]));
      class P extends C.v {
        static fromBinary(e, n) {
          return new P().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new P().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new P().fromJsonString(e, n);
        }
        static equals(e, n) {
          return N.w.util.equals(P, e, n);
        }
        constructor(e) {
          super(),
            (this.apiKey = ""),
            (this.roles = []),
            (this.roleId = ""),
            (this.roleName = ""),
            N.w.util.initPartial(e, this);
        }
      }
      (P.runtime = N.w),
        (P.typeName = "exa.seat_management_pb.UserRole"),
        (P.fields = N.w.util.newFieldList(() => [
          {
            no: 1,
            name: "api_key",
            kind: "scalar",
            T: 9,
          },
          {
            no: 2,
            name: "roles",
            kind: "scalar",
            T: 9,
            repeated: !0,
          },
          {
            no: 3,
            name: "role_id",
            kind: "scalar",
            T: 9,
          },
          {
            no: 4,
            name: "role_name",
            kind: "scalar",
            T: 9,
          },
        ]));
      class M extends C.v {
        static fromBinary(e, n) {
          return new M().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new M().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new M().fromJsonString(e, n);
        }
        static equals(e, n) {
          return N.w.util.equals(M, e, n);
        }
        constructor(e) {
          super(), N.w.util.initPartial(e, this);
        }
      }
      (M.runtime = N.w),
        (M.typeName = "exa.seat_management_pb.GetUserStatusRequest"),
        (M.fields = N.w.util.newFieldList(() => [
          {
            no: 1,
            name: "metadata",
            kind: "message",
            T: I.SFo,
          },
        ]));
      class y extends C.v {
        static fromBinary(e, n) {
          return new y().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new y().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new y().fromJsonString(e, n);
        }
        static equals(e, n) {
          return N.w.util.equals(y, e, n);
        }
        constructor(e) {
          super(), N.w.util.initPartial(e, this);
        }
      }
      (y.runtime = N.w),
        (y.typeName = "exa.seat_management_pb.GetUserStatusResponse"),
        (y.fields = N.w.util.newFieldList(() => [
          {
            no: 1,
            name: "user_status",
            kind: "message",
            T: I.J0j,
          },
          {
            no: 2,
            name: "plan_info",
            kind: "message",
            T: I.mEC,
          },
        ]));
      class h extends C.v {
        static fromBinary(e, n) {
          return new h().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new h().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new h().fromJsonString(e, n);
        }
        static equals(e, n) {
          return N.w.util.equals(h, e, n);
        }
        constructor(e) {
          super(),
            (this.authToken = ""),
            (this.generateProfilePictureUrl = !1),
            (this.createIfNotExist = !1),
            (this.includeSubscription = !1),
            (this.ssoToken = ""),
            (this.samlProviderId = ""),
            N.w.util.initPartial(e, this);
        }
      }
      (h.runtime = N.w),
        (h.typeName = "exa.seat_management_pb.GetCurrentUserRequest"),
        (h.fields = N.w.util.newFieldList(() => [
          {
            no: 1,
            name: "auth_token",
            kind: "scalar",
            T: 9,
          },
          {
            no: 2,
            name: "generate_profile_picture_url",
            kind: "scalar",
            T: 8,
          },
          {
            no: 3,
            name: "create_if_not_exist",
            kind: "scalar",
            T: 8,
          },
          {
            no: 4,
            name: "include_subscription",
            kind: "scalar",
            T: 8,
          },
          {
            no: 5,
            name: "sso_token",
            kind: "scalar",
            T: 9,
          },
          {
            no: 6,
            name: "saml_provider_id",
            kind: "scalar",
            T: 9,
          },
        ]));
      class U extends C.v {
        static fromBinary(e, n) {
          return new U().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new U().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new U().fromJsonString(e, n);
        }
        static equals(e, n) {
          return N.w.util.equals(U, e, n);
        }
        constructor(e) {
          super(),
            (this.referrerName = ""),
            (this.referrerEmail = ""),
            N.w.util.initPartial(e, this);
        }
      }
      (U.runtime = N.w),
        (U.typeName = "exa.seat_management_pb.ReferralInfo"),
        (U.fields = N.w.util.newFieldList(() => [
          {
            no: 1,
            name: "referrer_name",
            kind: "scalar",
            T: 9,
          },
          {
            no: 2,
            name: "referrer_email",
            kind: "scalar",
            T: 9,
          },
          {
            no: 3,
            name: "referral_accepted_time",
            kind: "message",
            T: w.E,
          },
          {
            no: 4,
            name: "granted_time",
            kind: "message",
            T: w.E,
          },
        ]));
      class g extends C.v {
        static fromBinary(e, n) {
          return new g().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new g().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new g().fromJsonString(e, n);
        }
        static equals(e, n) {
          return N.w.util.equals(g, e, n);
        }
        constructor(e) {
          super(),
            (this.roles = []),
            (this.permissions = []),
            (this.teamFeatures = {}),
            (this.groupIds = []),
            N.w.util.initPartial(e, this);
        }
      }
      (g.runtime = N.w),
        (g.typeName = "exa.seat_management_pb.GetCurrentUserResponse"),
        (g.fields = N.w.util.newFieldList(() => [
          {
            no: 1,
            name: "user",
            kind: "message",
            T: R,
          },
          {
            no: 2,
            name: "roles",
            kind: "scalar",
            T: 9,
            repeated: !0,
          },
          {
            no: 4,
            name: "team",
            kind: "message",
            T: L,
          },
          {
            no: 5,
            name: "subscription",
            kind: "message",
            T: D,
          },
          {
            no: 8,
            name: "permissions",
            kind: "enum",
            T: N.w.getEnumType(I.y3$),
            repeated: !0,
          },
          {
            no: 7,
            name: "role",
            kind: "message",
            T: P,
          },
          {
            no: 6,
            name: "plan_info",
            kind: "message",
            T: I.mEC,
          },
          {
            no: 9,
            name: "user_team_details",
            kind: "message",
            T: n9,
          },
          {
            no: 10,
            name: "referral",
            kind: "message",
            T: U,
          },
          {
            no: 11,
            name: "team_features",
            kind: "map",
            K: 5,
            V: {
              kind: "message",
              T: I.loO,
            },
          },
          {
            no: 12,
            name: "group_ids",
            kind: "scalar",
            T: 9,
            repeated: !0,
          },
        ]));
      class J extends C.v {
        static fromBinary(e, n) {
          return new J().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new J().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new J().fromJsonString(e, n);
        }
        static equals(e, n) {
          return N.w.util.equals(J, e, n);
        }
        constructor(e) {
          super(),
            (this.authToken = ""),
            (this.groupId = ""),
            N.w.util.initPartial(e, this);
        }
      }
      (J.runtime = N.w),
        (J.typeName = "exa.seat_management_pb.GetUsersRequest"),
        (J.fields = N.w.util.newFieldList(() => [
          {
            no: 1,
            name: "auth_token",
            kind: "scalar",
            T: 9,
          },
          {
            no: 2,
            name: "group_id",
            kind: "scalar",
            T: 9,
          },
        ]));
      class k extends C.v {
        static fromBinary(e, n) {
          return new k().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new k().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new k().fromJsonString(e, n);
        }
        static equals(e, n) {
          return N.w.util.equals(k, e, n);
        }
        constructor(e) {
          super(),
            (this.users = []),
            (this.userRoles = []),
            (this.userTeamDetails = []),
            (this.userCascadeDetails = []),
            N.w.util.initPartial(e, this);
        }
      }
      (k.runtime = N.w),
        (k.typeName = "exa.seat_management_pb.GetUsersResponse"),
        (k.fields = N.w.util.newFieldList(() => [
          {
            no: 1,
            name: "users",
            kind: "message",
            T: R,
            repeated: !0,
          },
          {
            no: 2,
            name: "user_roles",
            kind: "message",
            T: P,
            repeated: !0,
          },
          {
            no: 3,
            name: "user_team_details",
            kind: "message",
            T: n9,
            repeated: !0,
          },
          {
            no: 4,
            name: "user_cascade_details",
            kind: "message",
            T: ay,
            repeated: !0,
          },
        ]));
      class B extends C.v {
        static fromBinary(e, n) {
          return new B().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new B().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new B().fromJsonString(e, n);
        }
        static equals(e, n) {
          return N.w.util.equals(B, e, n);
        }
        constructor(e) {
          super(),
            (this.authToken = ""),
            (this.apiKey = ""),
            N.w.util.initPartial(e, this);
        }
      }
      (B.runtime = N.w),
        (B.typeName = "exa.seat_management_pb.GetRolesForUserRequest"),
        (B.fields = N.w.util.newFieldList(() => [
          {
            no: 1,
            name: "auth_token",
            kind: "scalar",
            T: 9,
          },
          {
            no: 2,
            name: "api_key",
            kind: "scalar",
            T: 9,
          },
        ]));
      class G extends C.v {
        static fromBinary(e, n) {
          return new G().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new G().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new G().fromJsonString(e, n);
        }
        static equals(e, n) {
          return N.w.util.equals(G, e, n);
        }
        constructor(e) {
          super(), (this.roles = []), N.w.util.initPartial(e, this);
        }
      }
      (G.runtime = N.w),
        (G.typeName = "exa.seat_management_pb.GetRolesForUserResponse"),
        (G.fields = N.w.util.newFieldList(() => [
          {
            no: 1,
            name: "roles",
            kind: "scalar",
            T: 9,
            repeated: !0,
          },
        ]));
      class F extends C.v {
        static fromBinary(e, n) {
          return new F().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new F().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new F().fromJsonString(e, n);
        }
        static equals(e, n) {
          return N.w.util.equals(F, e, n);
        }
        constructor(e) {
          super(), (this.sessionToken = ""), N.w.util.initPartial(e, this);
        }
      }
      (F.runtime = N.w),
        (F.typeName =
          "exa.seat_management_pb.GetPrimaryApiKeyForDevsOnlyRequest"),
        (F.fields = N.w.util.newFieldList(() => [
          {
            no: 1,
            name: "session_token",
            kind: "scalar",
            T: 9,
          },
        ]));
      class x extends C.v {
        static fromBinary(e, n) {
          return new x().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new x().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new x().fromJsonString(e, n);
        }
        static equals(e, n) {
          return N.w.util.equals(x, e, n);
        }
        constructor(e) {
          super(), (this.apiKey = ""), N.w.util.initPartial(e, this);
        }
      }
      (x.runtime = N.w),
        (x.typeName =
          "exa.seat_management_pb.GetPrimaryApiKeyForDevsOnlyResponse"),
        (x.fields = N.w.util.newFieldList(() => [
          {
            no: 1,
            name: "api_key",
            kind: "scalar",
            T: 9,
          },
        ]));
      class q extends C.v {
        static fromBinary(e, n) {
          return new q().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new q().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new q().fromJsonString(e, n);
        }
        static equals(e, n) {
          return N.w.util.equals(q, e, n);
        }
        constructor(e) {
          super(),
            (this.authToken = ""),
            (this.apiKey = ""),
            (this.role = ""),
            (this.groupId = ""),
            (this.serviceKey = ""),
            N.w.util.initPartial(e, this);
        }
      }
      (q.runtime = N.w),
        (q.typeName = "exa.seat_management_pb.AddUserRoleRequest"),
        (q.fields = N.w.util.newFieldList(() => [
          {
            no: 1,
            name: "auth_token",
            kind: "scalar",
            T: 9,
          },
          {
            no: 2,
            name: "api_key",
            kind: "scalar",
            T: 9,
          },
          {
            no: 3,
            name: "role",
            kind: "scalar",
            T: 9,
          },
          {
            no: 4,
            name: "group_id",
            kind: "scalar",
            T: 9,
          },
          {
            no: 5,
            name: "service_key",
            kind: "scalar",
            T: 9,
          },
        ]));
      class b extends C.v {
        static fromBinary(e, n) {
          return new b().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new b().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new b().fromJsonString(e, n);
        }
        static equals(e, n) {
          return N.w.util.equals(b, e, n);
        }
        constructor(e) {
          super(), N.w.util.initPartial(e, this);
        }
      }
      (b.runtime = N.w),
        (b.typeName = "exa.seat_management_pb.AddUserRoleResponse"),
        (b.fields = N.w.util.newFieldList(() => []));
      class v extends C.v {
        static fromBinary(e, n) {
          return new v().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new v().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new v().fromJsonString(e, n);
        }
        static equals(e, n) {
          return N.w.util.equals(v, e, n);
        }
        constructor(e) {
          super(),
            (this.authToken = ""),
            (this.apiKey = ""),
            (this.role = ""),
            (this.groupId = ""),
            N.w.util.initPartial(e, this);
        }
      }
      (v.runtime = N.w),
        (v.typeName = "exa.seat_management_pb.RemoveUserRoleRequest"),
        (v.fields = N.w.util.newFieldList(() => [
          {
            no: 1,
            name: "auth_token",
            kind: "scalar",
            T: 9,
          },
          {
            no: 2,
            name: "api_key",
            kind: "scalar",
            T: 9,
          },
          {
            no: 3,
            name: "role",
            kind: "scalar",
            T: 9,
          },
          {
            no: 4,
            name: "group_id",
            kind: "scalar",
            T: 9,
          },
        ]));
      class H extends C.v {
        static fromBinary(e, n) {
          return new H().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new H().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new H().fromJsonString(e, n);
        }
        static equals(e, n) {
          return N.w.util.equals(H, e, n);
        }
        constructor(e) {
          super(), N.w.util.initPartial(e, this);
        }
      }
      (H.runtime = N.w),
        (H.typeName = "exa.seat_management_pb.RemoveUserRoleResponse"),
        (H.fields = N.w.util.newFieldList(() => []));
      class V extends C.v {
        static fromBinary(e, n) {
          return new V().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new V().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new V().fromJsonString(e, n);
        }
        static equals(e, n) {
          return N.w.util.equals(V, e, n);
        }
        constructor(e) {
          super(), (this.firebaseIdToken = ""), N.w.util.initPartial(e, this);
        }
      }
      (V.runtime = N.w),
        (V.typeName = "exa.seat_management_pb.RegisterUserRequest"),
        (V.fields = N.w.util.newFieldList(() => [
          {
            no: 1,
            name: "firebase_id_token",
            jsonName: "firebase_id_token",
            kind: "scalar",
            T: 9,
          },
        ]));
      class W extends C.v {
        static fromBinary(e, n) {
          return new W().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new W().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new W().fromJsonString(e, n);
        }
        static equals(e, n) {
          return N.w.util.equals(W, e, n);
        }
        constructor(e) {
          super(),
            (this.apiKey = ""),
            (this.name = ""),
            (this.apiServerUrl = ""),
            N.w.util.initPartial(e, this);
        }
      }
      (W.runtime = N.w),
        (W.typeName = "exa.seat_management_pb.RegisterUserResponse"),
        (W.fields = N.w.util.newFieldList(() => [
          {
            no: 1,
            name: "api_key",
            jsonName: "api_key",
            kind: "scalar",
            T: 9,
          },
          {
            no: 2,
            name: "name",
            kind: "scalar",
            T: 9,
          },
          {
            no: 3,
            name: "api_server_url",
            jsonName: "api_server_url",
            kind: "scalar",
            T: 9,
          },
        ]));
      class K extends C.v {
        static fromBinary(e, n) {
          return new K().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new K().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new K().fromJsonString(e, n);
        }
        static equals(e, n) {
          return N.w.util.equals(K, e, n);
        }
        constructor(e) {
          super(), (this.apiKey = ""), N.w.util.initPartial(e, this);
        }
      }
      (K.runtime = N.w),
        (K.typeName = "exa.seat_management_pb.MigrateApiKeyRequest"),
        (K.fields = N.w.util.newFieldList(() => [
          {
            no: 1,
            name: "api_key",
            jsonName: "api_key",
            kind: "scalar",
            T: 9,
          },
        ]));
      class X extends C.v {
        static fromBinary(e, n) {
          return new X().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new X().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new X().fromJsonString(e, n);
        }
        static equals(e, n) {
          return N.w.util.equals(X, e, n);
        }
        constructor(e) {
          super(), (this.sessionToken = ""), N.w.util.initPartial(e, this);
        }
      }
      (X.runtime = N.w),
        (X.typeName = "exa.seat_management_pb.MigrateApiKeyResponse"),
        (X.fields = N.w.util.newFieldList(() => [
          {
            no: 1,
            name: "session_token",
            jsonName: "session_token",
            kind: "scalar",
            T: 9,
          },
        ]));
      class Y extends C.v {
        static fromBinary(e, n) {
          return new Y().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new Y().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new Y().fromJsonString(e, n);
        }
        static equals(e, n) {
          return N.w.util.equals(Y, e, n);
        }
        constructor(e) {
          super(),
            (this.email = ""),
            (this.password = ""),
            (this.turnstileToken = ""),
            (this.phoneNumber = ""),
            (this.otpCode = ""),
            (this.firstName = ""),
            (this.lastName = ""),
            N.w.util.initPartial(e, this);
        }
      }
      (Y.runtime = N.w),
        (Y.typeName = "exa.seat_management_pb.CreateFbUserRequest"),
        (Y.fields = N.w.util.newFieldList(() => [
          {
            no: 1,
            name: "email",
            kind: "scalar",
            T: 9,
          },
          {
            no: 2,
            name: "password",
            kind: "scalar",
            T: 9,
          },
          {
            no: 3,
            name: "turnstile_token",
            kind: "scalar",
            T: 9,
          },
          {
            no: 4,
            name: "phone_number",
            kind: "scalar",
            T: 9,
          },
          {
            no: 5,
            name: "otp_code",
            kind: "scalar",
            T: 9,
          },
          {
            no: 6,
            name: "first_name",
            kind: "scalar",
            T: 9,
          },
          {
            no: 7,
            name: "last_name",
            kind: "scalar",
            T: 9,
          },
        ]));
      class Q extends C.v {
        static fromBinary(e, n) {
          return new Q().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new Q().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new Q().fromJsonString(e, n);
        }
        static equals(e, n) {
          return N.w.util.equals(Q, e, n);
        }
        constructor(e) {
          super(), (this.uid = ""), N.w.util.initPartial(e, this);
        }
      }
      (Q.runtime = N.w),
        (Q.typeName = "exa.seat_management_pb.CreateFbUserResponse"),
        (Q.fields = N.w.util.newFieldList(() => [
          {
            no: 1,
            name: "uid",
            kind: "scalar",
            T: 9,
          },
        ]));
      class z extends C.v {
        static fromBinary(e, n) {
          return new z().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new z().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new z().fromJsonString(e, n);
        }
        static equals(e, n) {
          return N.w.util.equals(z, e, n);
        }
        constructor(e) {
          super(),
            (this.authToken = ""),
            (this.fullName = ""),
            N.w.util.initPartial(e, this);
        }
      }
      (z.runtime = N.w),
        (z.typeName = "exa.seat_management_pb.UpdateNameRequest"),
        (z.fields = N.w.util.newFieldList(() => [
          {
            no: 1,
            name: "auth_token",
            kind: "scalar",
            T: 9,
          },
          {
            no: 2,
            name: "full_name",
            kind: "scalar",
            T: 9,
          },
        ]));
      class j extends C.v {
        static fromBinary(e, n) {
          return new j().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new j().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new j().fromJsonString(e, n);
        }
        static equals(e, n) {
          return N.w.util.equals(j, e, n);
        }
        constructor(e) {
          super(), N.w.util.initPartial(e, this);
        }
      }
      (j.runtime = N.w),
        (j.typeName = "exa.seat_management_pb.UpdateNameResponse"),
        (j.fields = N.w.util.newFieldList(() => []));
      class Z extends C.v {
        static fromBinary(e, n) {
          return new Z().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new Z().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new Z().fromJsonString(e, n);
        }
        static equals(e, n) {
          return N.w.util.equals(Z, e, n);
        }
        constructor(e) {
          super(), (this.authToken = ""), N.w.util.initPartial(e, this);
        }
      }
      (Z.runtime = N.w),
        (Z.typeName =
          "exa.seat_management_pb.GetProfilePicturePresignedUploadUrlRequest"),
        (Z.fields = N.w.util.newFieldList(() => [
          {
            no: 1,
            name: "auth_token",
            kind: "scalar",
            T: 9,
          },
        ]));
      class $ extends C.v {
        static fromBinary(e, n) {
          return new $().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new $().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new $().fromJsonString(e, n);
        }
        static equals(e, n) {
          return N.w.util.equals($, e, n);
        }
        constructor(e) {
          super(), (this.url = ""), N.w.util.initPartial(e, this);
        }
      }
      ($.runtime = N.w),
        ($.typeName =
          "exa.seat_management_pb.GetProfilePicturePresignedUploadUrlResponse"),
        ($.fields = N.w.util.newFieldList(() => [
          {
            no: 1,
            name: "url",
            kind: "scalar",
            T: 9,
          },
        ]));
      class ee extends C.v {
        static fromBinary(e, n) {
          return new ee().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new ee().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new ee().fromJsonString(e, n);
        }
        static equals(e, n) {
          return N.w.util.equals(ee, e, n);
        }
        constructor(e) {
          super(), (this.authToken = ""), N.w.util.initPartial(e, this);
        }
      }
      (ee.runtime = N.w),
        (ee.typeName =
          "exa.seat_management_pb.ProfilePictureUploadCompleteRequest"),
        (ee.fields = N.w.util.newFieldList(() => [
          {
            no: 1,
            name: "auth_token",
            kind: "scalar",
            T: 9,
          },
        ]));
      class en extends C.v {
        static fromBinary(e, n) {
          return new en().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new en().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new en().fromJsonString(e, n);
        }
        static equals(e, n) {
          return N.w.util.equals(en, e, n);
        }
        constructor(e) {
          super(), N.w.util.initPartial(e, this);
        }
      }
      (en.runtime = N.w),
        (en.typeName =
          "exa.seat_management_pb.ProfilePictureUploadCompleteResponse"),
        (en.fields = N.w.util.newFieldList(() => []));
      class et extends C.v {
        static fromBinary(e, n) {
          return new et().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new et().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new et().fromJsonString(e, n);
        }
        static equals(e, n) {
          return N.w.util.equals(et, e, n);
        }
        constructor(e) {
          super(), (this.apiKey = ""), N.w.util.initPartial(e, this);
        }
      }
      (et.runtime = N.w),
        (et.typeName = "exa.seat_management_pb.GetProfileDataRequest"),
        (et.fields = N.w.util.newFieldList(() => [
          {
            no: 1,
            name: "api_key",
            kind: "scalar",
            T: 9,
          },
        ]));
      class ea extends C.v {
        static fromBinary(e, n) {
          return new ea().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new ea().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new ea().fromJsonString(e, n);
        }
        static equals(e, n) {
          return N.w.util.equals(ea, e, n);
        }
        constructor(e) {
          super(), (this.profilePictureUrl = ""), N.w.util.initPartial(e, this);
        }
      }
      (ea.runtime = N.w),
        (ea.typeName = "exa.seat_management_pb.GetProfileDataResponse"),
        (ea.fields = N.w.util.newFieldList(() => [
          {
            no: 1,
            name: "profile_picture_url",
            kind: "scalar",
            T: 9,
          },
        ]));
      class er extends C.v {
        static fromBinary(e, n) {
          return new er().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new er().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new er().fromJsonString(e, n);
        }
        static equals(e, n) {
          return N.w.util.equals(er, e, n);
        }
        constructor(e) {
          super(), (this.authToken = ""), N.w.util.initPartial(e, this);
        }
      }
      (er.runtime = N.w),
        (er.typeName = "exa.seat_management_pb.DeleteProfilePictureRequest"),
        (er.fields = N.w.util.newFieldList(() => [
          {
            no: 1,
            name: "auth_token",
            kind: "scalar",
            T: 9,
          },
        ]));
      class ei extends C.v {
        static fromBinary(e, n) {
          return new ei().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new ei().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new ei().fromJsonString(e, n);
        }
        static equals(e, n) {
          return N.w.util.equals(ei, e, n);
        }
        constructor(e) {
          super(), N.w.util.initPartial(e, this);
        }
      }
      (ei.runtime = N.w),
        (ei.typeName = "exa.seat_management_pb.DeleteProfilePictureResponse"),
        (ei.fields = N.w.util.newFieldList(() => []));
      class es extends C.v {
        static fromBinary(e, n) {
          return new es().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new es().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new es().fromJsonString(e, n);
        }
        static equals(e, n) {
          return N.w.util.equals(es, e, n);
        }
        constructor(e) {
          super(),
            (this.authToken = ""),
            (this.inboundSource = ""),
            N.w.util.initPartial(e, this);
        }
      }
      (es.runtime = N.w),
        (es.typeName = "exa.seat_management_pb.UpdateInboundSourceRequest"),
        (es.fields = N.w.util.newFieldList(() => [
          {
            no: 1,
            name: "auth_token",
            kind: "scalar",
            T: 9,
          },
          {
            no: 2,
            name: "inbound_source",
            kind: "scalar",
            T: 9,
          },
        ]));
      class eo extends C.v {
        static fromBinary(e, n) {
          return new eo().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new eo().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new eo().fromJsonString(e, n);
        }
        static equals(e, n) {
          return N.w.util.equals(eo, e, n);
        }
        constructor(e) {
          super(), N.w.util.initPartial(e, this);
        }
      }
      (eo.runtime = N.w),
        (eo.typeName = "exa.seat_management_pb.UpdateInboundSourceResponse"),
        (eo.fields = N.w.util.newFieldList(() => []));
      class e_ extends C.v {
        static fromBinary(e, n) {
          return new e_().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new e_().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new e_().fromJsonString(e, n);
        }
        static equals(e, n) {
          return N.w.util.equals(e_, e, n);
        }
        constructor(e) {
          super(),
            (this.authToken = ""),
            (this.apiKey = ""),
            N.w.util.initPartial(e, this);
        }
      }
      (e_.runtime = N.w),
        (e_.typeName = "exa.seat_management_pb.DeleteUserRequest"),
        (e_.fields = N.w.util.newFieldList(() => [
          {
            no: 1,
            name: "auth_token",
            kind: "scalar",
            T: 9,
          },
          {
            no: 3,
            name: "api_key",
            kind: "scalar",
            T: 9,
          },
        ]));
      class em extends C.v {
        static fromBinary(e, n) {
          return new em().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new em().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new em().fromJsonString(e, n);
        }
        static equals(e, n) {
          return N.w.util.equals(em, e, n);
        }
        constructor(e) {
          super(), N.w.util.initPartial(e, this);
        }
      }
      (em.runtime = N.w),
        (em.typeName = "exa.seat_management_pb.DeleteUserResponse"),
        (em.fields = N.w.util.newFieldList(() => []));
      class eE extends C.v {
        static fromBinary(e, n) {
          return new eE().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new eE().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new eE().fromJsonString(e, n);
        }
        static equals(e, n) {
          return N.w.util.equals(eE, e, n);
        }
        constructor(e) {
          super(), N.w.util.initPartial(e, this);
        }
      }
      (eE.runtime = N.w),
        (eE.typeName = "exa.seat_management_pb.GetLicenseRequest"),
        (eE.fields = N.w.util.newFieldList(() => []));
      class eu extends C.v {
        static fromBinary(e, n) {
          return new eu().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new eu().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new eu().fromJsonString(e, n);
        }
        static equals(e, n) {
          return N.w.util.equals(eu, e, n);
        }
        constructor(e) {
          super(), N.w.util.initPartial(e, this);
        }
      }
      (eu.runtime = N.w),
        (eu.typeName = "exa.seat_management_pb.GetLicenseResponse"),
        (eu.fields = N.w.util.newFieldList(() => [
          {
            no: 1,
            name: "license",
            kind: "message",
            T: nk,
          },
        ]));
      class el extends C.v {
        static fromBinary(e, n) {
          return new el().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new el().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new el().fromJsonString(e, n);
        }
        static equals(e, n) {
          return N.w.util.equals(el, e, n);
        }
        constructor(e) {
          super(),
            (this.apiKey = ""),
            (this.inviteId = ""),
            N.w.util.initPartial(e, this);
        }
      }
      (el.runtime = N.w),
        (el.typeName = "exa.seat_management_pb.RequestTeamAccessRequest"),
        (el.fields = N.w.util.newFieldList(() => [
          {
            no: 1,
            name: "api_key",
            kind: "scalar",
            T: 9,
          },
          {
            no: 2,
            name: "invite_id",
            kind: "scalar",
            T: 9,
          },
        ]));
      class ec extends C.v {
        static fromBinary(e, n) {
          return new ec().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new ec().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new ec().fromJsonString(e, n);
        }
        static equals(e, n) {
          return N.w.util.equals(ec, e, n);
        }
        constructor(e) {
          super(), N.w.util.initPartial(e, this);
        }
      }
      (ec.runtime = N.w),
        (ec.typeName = "exa.seat_management_pb.RequestTeamAccessResponse"),
        (ec.fields = N.w.util.newFieldList(() => []));
      class eT extends C.v {
        static fromBinary(e, n) {
          return new eT().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new eT().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new eT().fromJsonString(e, n);
        }
        static equals(e, n) {
          return N.w.util.equals(eT, e, n);
        }
        constructor(e) {
          super(),
            (this.authToken = ""),
            (this.updates = []),
            N.w.util.initPartial(e, this);
        }
      }
      (eT.runtime = N.w),
        (eT.typeName = "exa.seat_management_pb.UpdateUserTeamStatusRequest"),
        (eT.fields = N.w.util.newFieldList(() => [
          {
            no: 1,
            name: "auth_token",
            kind: "scalar",
            T: 9,
          },
          {
            no: 2,
            name: "updates",
            kind: "message",
            T: ed,
            repeated: !0,
          },
        ]));
      class ed extends C.v {
        static fromBinary(e, n) {
          return new ed().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new ed().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new ed().fromJsonString(e, n);
        }
        static equals(e, n) {
          return N.w.util.equals(ed, e, n);
        }
        constructor(e) {
          super(),
            (this.apiKey = ""),
            (this.status = I.ngL.UNSPECIFIED),
            N.w.util.initPartial(e, this);
        }
      }
      (ed.runtime = N.w),
        (ed.typeName =
          "exa.seat_management_pb.UpdateUserTeamStatusRequest.UserTeamStatusUpdateItem"),
        (ed.fields = N.w.util.newFieldList(() => [
          {
            no: 1,
            name: "api_key",
            kind: "scalar",
            T: 9,
          },
          {
            no: 2,
            name: "status",
            kind: "enum",
            T: N.w.getEnumType(I.ngL),
          },
        ]));
      class eS extends C.v {
        static fromBinary(e, n) {
          return new eS().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new eS().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new eS().fromJsonString(e, n);
        }
        static equals(e, n) {
          return N.w.util.equals(eS, e, n);
        }
        constructor(e) {
          super(), (this.users = []), N.w.util.initPartial(e, this);
        }
      }
      (eS.runtime = N.w),
        (eS.typeName = "exa.seat_management_pb.UpdateUserTeamStatusResponse"),
        (eS.fields = N.w.util.newFieldList(() => [
          {
            no: 1,
            name: "users",
            kind: "message",
            T: R,
            repeated: !0,
          },
        ]));
      class eA extends C.v {
        static fromBinary(e, n) {
          return new eA().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new eA().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new eA().fromJsonString(e, n);
        }
        static equals(e, n) {
          return N.w.util.equals(eA, e, n);
        }
        constructor(e) {
          super(), (this.inviteId = ""), N.w.util.initPartial(e, this);
        }
      }
      (eA.runtime = N.w),
        (eA.typeName = "exa.seat_management_pb.GetTeamMetadataRequest"),
        (eA.fields = N.w.util.newFieldList(() => [
          {
            no: 1,
            name: "invite_id",
            kind: "scalar",
            T: 9,
          },
        ]));
      class eO extends C.v {
        static fromBinary(e, n) {
          return new eO().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new eO().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new eO().fromJsonString(e, n);
        }
        static equals(e, n) {
          return N.w.util.equals(eO, e, n);
        }
        constructor(e) {
          super(), N.w.util.initPartial(e, this);
        }
      }
      (eO.runtime = N.w),
        (eO.typeName = "exa.seat_management_pb.GetTeamMetadataResponse"),
        (eO.fields = N.w.util.newFieldList(() => [
          {
            no: 1,
            name: "team",
            kind: "message",
            T: L,
          },
        ]));
      class eN extends C.v {
        static fromBinary(e, n) {
          return new eN().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new eN().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new eN().fromJsonString(e, n);
        }
        static equals(e, n) {
          return N.w.util.equals(eN, e, n);
        }
        constructor(e) {
          super(),
            (this.authToken = ""),
            (this.apiKey = ""),
            N.w.util.initPartial(e, this);
        }
      }
      (eN.runtime = N.w),
        (eN.typeName = "exa.seat_management_pb.RemoveUserFromTeamRequest"),
        (eN.fields = N.w.util.newFieldList(() => [
          {
            no: 1,
            name: "auth_token",
            kind: "scalar",
            T: 9,
          },
          {
            no: 2,
            name: "api_key",
            kind: "scalar",
            T: 9,
          },
        ]));
      class eC extends C.v {
        static fromBinary(e, n) {
          return new eC().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new eC().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new eC().fromJsonString(e, n);
        }
        static equals(e, n) {
          return N.w.util.equals(eC, e, n);
        }
        constructor(e) {
          super(), N.w.util.initPartial(e, this);
        }
      }
      (eC.runtime = N.w),
        (eC.typeName = "exa.seat_management_pb.RemoveUserFromTeamResponse"),
        (eC.fields = N.w.util.newFieldList(() => []));
      class ef extends C.v {
        static fromBinary(e, n) {
          return new ef().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new ef().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new ef().fromJsonString(e, n);
        }
        static equals(e, n) {
          return N.w.util.equals(ef, e, n);
        }
        constructor(e) {
          super(), (this.authToken = ""), N.w.util.initPartial(e, this);
        }
      }
      (ef.runtime = N.w),
        (ef.typeName = "exa.seat_management_pb.RefreshTeamInviteIdRequest"),
        (ef.fields = N.w.util.newFieldList(() => [
          {
            no: 1,
            name: "auth_token",
            kind: "scalar",
            T: 9,
          },
        ]));
      class ew extends C.v {
        static fromBinary(e, n) {
          return new ew().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new ew().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new ew().fromJsonString(e, n);
        }
        static equals(e, n) {
          return N.w.util.equals(ew, e, n);
        }
        constructor(e) {
          super(), N.w.util.initPartial(e, this);
        }
      }
      (ew.runtime = N.w),
        (ew.typeName = "exa.seat_management_pb.RefreshTeamInviteIdResponse"),
        (ew.fields = N.w.util.newFieldList(() => [
          {
            no: 1,
            name: "team",
            kind: "message",
            T: L,
          },
        ]));
      class eI extends C.v {
        static fromBinary(e, n) {
          return new eI().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new eI().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new eI().fromJsonString(e, n);
        }
        static equals(e, n) {
          return N.w.util.equals(eI, e, n);
        }
        constructor(e) {
          super(),
            (this.authToken = ""),
            (this.preapprovals = []),
            N.w.util.initPartial(e, this);
        }
      }
      (eI.runtime = N.w),
        (eI.typeName = "exa.seat_management_pb.GrantPreapprovalRequest"),
        (eI.fields = N.w.util.newFieldList(() => [
          {
            no: 1,
            name: "auth_token",
            kind: "scalar",
            T: 9,
          },
          {
            no: 2,
            name: "preapprovals",
            kind: "message",
            T: eR,
            repeated: !0,
          },
        ]));
      class eR extends C.v {
        static fromBinary(e, n) {
          return new eR().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new eR().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new eR().fromJsonString(e, n);
        }
        static equals(e, n) {
          return N.w.util.equals(eR, e, n);
        }
        constructor(e) {
          super(),
            (this.name = ""),
            (this.email = ""),
            N.w.util.initPartial(e, this);
        }
      }
      (eR.runtime = N.w),
        (eR.typeName =
          "exa.seat_management_pb.GrantPreapprovalRequest.PreapprovalUserItem"),
        (eR.fields = N.w.util.newFieldList(() => [
          {
            no: 1,
            name: "name",
            kind: "scalar",
            T: 9,
          },
          {
            no: 2,
            name: "email",
            kind: "scalar",
            T: 9,
          },
        ]));
      class eL extends C.v {
        static fromBinary(e, n) {
          return new eL().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new eL().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new eL().fromJsonString(e, n);
        }
        static equals(e, n) {
          return N.w.util.equals(eL, e, n);
        }
        constructor(e) {
          super(), (this.preapprovals = []), N.w.util.initPartial(e, this);
        }
      }
      (eL.runtime = N.w),
        (eL.typeName = "exa.seat_management_pb.GrantPreapprovalResponse"),
        (eL.fields = N.w.util.newFieldList(() => [
          {
            no: 1,
            name: "preapprovals",
            kind: "message",
            T: p,
            repeated: !0,
          },
        ]));
      class ep extends C.v {
        static fromBinary(e, n) {
          return new ep().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new ep().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new ep().fromJsonString(e, n);
        }
        static equals(e, n) {
          return N.w.util.equals(ep, e, n);
        }
        constructor(e) {
          super(), (this.authToken = ""), N.w.util.initPartial(e, this);
        }
      }
      (ep.runtime = N.w),
        (ep.typeName = "exa.seat_management_pb.GetPreapprovalsRequest"),
        (ep.fields = N.w.util.newFieldList(() => [
          {
            no: 1,
            name: "auth_token",
            kind: "scalar",
            T: 9,
          },
        ]));
      class eD extends C.v {
        static fromBinary(e, n) {
          return new eD().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new eD().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new eD().fromJsonString(e, n);
        }
        static equals(e, n) {
          return N.w.util.equals(eD, e, n);
        }
        constructor(e) {
          super(), (this.preapprovals = []), N.w.util.initPartial(e, this);
        }
      }
      (eD.runtime = N.w),
        (eD.typeName = "exa.seat_management_pb.GetPreapprovalsResponse"),
        (eD.fields = N.w.util.newFieldList(() => [
          {
            no: 1,
            name: "preapprovals",
            kind: "message",
            T: p,
            repeated: !0,
          },
        ]));
      class eP extends C.v {
        static fromBinary(e, n) {
          return new eP().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new eP().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new eP().fromJsonString(e, n);
        }
        static equals(e, n) {
          return N.w.util.equals(eP, e, n);
        }
        constructor(e) {
          super(), (this.approvalId = ""), N.w.util.initPartial(e, this);
        }
      }
      (eP.runtime = N.w),
        (eP.typeName = "exa.seat_management_pb.GetPreapprovalMetadataRequest"),
        (eP.fields = N.w.util.newFieldList(() => [
          {
            no: 1,
            name: "approval_id",
            kind: "scalar",
            T: 9,
          },
        ]));
      class eM extends C.v {
        static fromBinary(e, n) {
          return new eM().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new eM().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new eM().fromJsonString(e, n);
        }
        static equals(e, n) {
          return N.w.util.equals(eM, e, n);
        }
        constructor(e) {
          super(),
            (this.name = ""),
            (this.email = ""),
            (this.teamName = ""),
            N.w.util.initPartial(e, this);
        }
      }
      (eM.runtime = N.w),
        (eM.typeName = "exa.seat_management_pb.GetPreapprovalMetadataResponse"),
        (eM.fields = N.w.util.newFieldList(() => [
          {
            no: 1,
            name: "name",
            kind: "scalar",
            T: 9,
          },
          {
            no: 2,
            name: "email",
            kind: "scalar",
            T: 9,
          },
          {
            no: 3,
            name: "team_name",
            kind: "scalar",
            T: 9,
          },
        ]));
      class ey extends C.v {
        static fromBinary(e, n) {
          return new ey().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new ey().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new ey().fromJsonString(e, n);
        }
        static equals(e, n) {
          return N.w.util.equals(ey, e, n);
        }
        constructor(e) {
          super(),
            (this.authToken = ""),
            (this.approvalId = ""),
            N.w.util.initPartial(e, this);
        }
      }
      (ey.runtime = N.w),
        (ey.typeName = "exa.seat_management_pb.AcceptPreapprovalRequest"),
        (ey.fields = N.w.util.newFieldList(() => [
          {
            no: 1,
            name: "auth_token",
            kind: "scalar",
            T: 9,
          },
          {
            no: 2,
            name: "approval_id",
            kind: "scalar",
            T: 9,
          },
        ]));
      class eh extends C.v {
        static fromBinary(e, n) {
          return new eh().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new eh().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new eh().fromJsonString(e, n);
        }
        static equals(e, n) {
          return N.w.util.equals(eh, e, n);
        }
        constructor(e) {
          super(), N.w.util.initPartial(e, this);
        }
      }
      (eh.runtime = N.w),
        (eh.typeName = "exa.seat_management_pb.AcceptPreapprovalResponse"),
        (eh.fields = N.w.util.newFieldList(() => []));
      class eU extends C.v {
        static fromBinary(e, n) {
          return new eU().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new eU().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new eU().fromJsonString(e, n);
        }
        static equals(e, n) {
          return N.w.util.equals(eU, e, n);
        }
        constructor(e) {
          super(),
            (this.authToken = ""),
            (this.approvalId = ""),
            N.w.util.initPartial(e, this);
        }
      }
      (eU.runtime = N.w),
        (eU.typeName = "exa.seat_management_pb.RejectPreapprovalRequest"),
        (eU.fields = N.w.util.newFieldList(() => [
          {
            no: 1,
            name: "auth_token",
            kind: "scalar",
            T: 9,
          },
          {
            no: 2,
            name: "approval_id",
            kind: "scalar",
            T: 9,
          },
        ]));
      class eg extends C.v {
        static fromBinary(e, n) {
          return new eg().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new eg().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new eg().fromJsonString(e, n);
        }
        static equals(e, n) {
          return N.w.util.equals(eg, e, n);
        }
        constructor(e) {
          super(), N.w.util.initPartial(e, this);
        }
      }
      (eg.runtime = N.w),
        (eg.typeName = "exa.seat_management_pb.RejectPreapprovalResponse"),
        (eg.fields = N.w.util.newFieldList(() => []));
      class eJ extends C.v {
        static fromBinary(e, n) {
          return new eJ().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new eJ().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new eJ().fromJsonString(e, n);
        }
        static equals(e, n) {
          return N.w.util.equals(eJ, e, n);
        }
        constructor(e) {
          super(), (this.authToken = ""), N.w.util.initPartial(e, this);
        }
      }
      (eJ.runtime = N.w),
        (eJ.typeName = "exa.seat_management_pb.GetPreapprovalForUserRequest"),
        (eJ.fields = N.w.util.newFieldList(() => [
          {
            no: 1,
            name: "auth_token",
            kind: "scalar",
            T: 9,
          },
        ]));
      class ek extends C.v {
        static fromBinary(e, n) {
          return new ek().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new ek().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new ek().fromJsonString(e, n);
        }
        static equals(e, n) {
          return N.w.util.equals(ek, e, n);
        }
        constructor(e) {
          super(),
            (this.adminName = ""),
            (this.teamName = ""),
            N.w.util.initPartial(e, this);
        }
      }
      (ek.runtime = N.w),
        (ek.typeName = "exa.seat_management_pb.GetPreapprovalForUserResponse"),
        (ek.fields = N.w.util.newFieldList(() => [
          {
            no: 1,
            name: "preapproval",
            kind: "message",
            T: p,
          },
          {
            no: 2,
            name: "admin_name",
            kind: "scalar",
            T: 9,
          },
          {
            no: 3,
            name: "team_name",
            kind: "scalar",
            T: 9,
          },
        ]));
      class eB extends C.v {
        static fromBinary(e, n) {
          return new eB().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new eB().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new eB().fromJsonString(e, n);
        }
        static equals(e, n) {
          return N.w.util.equals(eB, e, n);
        }
        constructor(e) {
          super(),
            (this.authToken = ""),
            (this.approvalId = ""),
            N.w.util.initPartial(e, this);
        }
      }
      (eB.runtime = N.w),
        (eB.typeName = "exa.seat_management_pb.RevokePreapprovalRequest"),
        (eB.fields = N.w.util.newFieldList(() => [
          {
            no: 1,
            name: "auth_token",
            kind: "scalar",
            T: 9,
          },
          {
            no: 2,
            name: "approval_id",
            kind: "scalar",
            T: 9,
          },
        ]));
      class eG extends C.v {
        static fromBinary(e, n) {
          return new eG().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new eG().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new eG().fromJsonString(e, n);
        }
        static equals(e, n) {
          return N.w.util.equals(eG, e, n);
        }
        constructor(e) {
          super(), N.w.util.initPartial(e, this);
        }
      }
      (eG.runtime = N.w),
        (eG.typeName = "exa.seat_management_pb.RevokePreapprovalResponse"),
        (eG.fields = N.w.util.newFieldList(() => []));
      class eF extends C.v {
        static fromBinary(e, n) {
          return new eF().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new eF().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new eF().fromJsonString(e, n);
        }
        static equals(e, n) {
          return N.w.util.equals(eF, e, n);
        }
        constructor(e) {
          super(),
            (this.authToken = ""),
            (this.stripePriceId = ""),
            (this.startTrial = !1),
            (this.successUrl = ""),
            (this.cancelUrl = ""),
            (this.teamsTier = I.wuw.UNSPECIFIED),
            (this.paymentPeriod = 0),
            (this.teamName = ""),
            (this.seats = f.q.zero),
            N.w.util.initPartial(e, this);
        }
      }
      (eF.runtime = N.w),
        (eF.typeName = "exa.seat_management_pb.SubscribeToPlanRequest"),
        (eF.fields = N.w.util.newFieldList(() => [
          {
            no: 1,
            name: "auth_token",
            kind: "scalar",
            T: 9,
          },
          {
            no: 2,
            name: "stripe_price_id",
            kind: "scalar",
            T: 9,
          },
          {
            no: 3,
            name: "start_trial",
            kind: "scalar",
            T: 8,
          },
          {
            no: 4,
            name: "success_url",
            kind: "scalar",
            T: 9,
          },
          {
            no: 5,
            name: "cancel_url",
            kind: "scalar",
            T: 9,
          },
          {
            no: 8,
            name: "teams_tier",
            kind: "enum",
            T: N.w.getEnumType(I.wuw),
          },
          {
            no: 9,
            name: "payment_period",
            kind: "enum",
            T: N.w.getEnumType(u),
          },
          {
            no: 7,
            name: "team_name",
            kind: "scalar",
            T: 9,
          },
          {
            no: 6,
            name: "seats",
            kind: "scalar",
            T: 3,
          },
        ]));
      class ex extends C.v {
        static fromBinary(e, n) {
          return new ex().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new ex().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new ex().fromJsonString(e, n);
        }
        static equals(e, n) {
          return N.w.util.equals(ex, e, n);
        }
        constructor(e) {
          super(), (this.checkoutUrl = ""), N.w.util.initPartial(e, this);
        }
      }
      (ex.runtime = N.w),
        (ex.typeName = "exa.seat_management_pb.SubscribeToPlanResponse"),
        (ex.fields = N.w.util.newFieldList(() => [
          {
            no: 1,
            name: "checkout_url",
            kind: "scalar",
            T: 9,
          },
        ]));
      class eq extends C.v {
        static fromBinary(e, n) {
          return new eq().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new eq().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new eq().fromJsonString(e, n);
        }
        static equals(e, n) {
          return N.w.util.equals(eq, e, n);
        }
        constructor(e) {
          super(),
            (this.authToken = ""),
            (this.successUrl = ""),
            (this.cancelUrl = ""),
            N.w.util.initPartial(e, this);
        }
      }
      (eq.runtime = N.w),
        (eq.typeName = "exa.seat_management_pb.PurchaseCascadeCreditsRequest"),
        (eq.fields = N.w.util.newFieldList(() => [
          {
            no: 1,
            name: "auth_token",
            kind: "scalar",
            T: 9,
          },
          {
            no: 4,
            name: "success_url",
            kind: "scalar",
            T: 9,
          },
          {
            no: 5,
            name: "cancel_url",
            kind: "scalar",
            T: 9,
          },
        ]));
      class eb extends C.v {
        static fromBinary(e, n) {
          return new eb().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new eb().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new eb().fromJsonString(e, n);
        }
        static equals(e, n) {
          return N.w.util.equals(eb, e, n);
        }
        constructor(e) {
          super(), (this.checkoutUrl = ""), N.w.util.initPartial(e, this);
        }
      }
      (eb.runtime = N.w),
        (eb.typeName = "exa.seat_management_pb.PurchaseCascadeCreditsResponse"),
        (eb.fields = N.w.util.newFieldList(() => [
          {
            no: 1,
            name: "checkout_url",
            kind: "scalar",
            T: 9,
          },
        ]));
      class ev extends C.v {
        static fromBinary(e, n) {
          return new ev().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new ev().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new ev().fromJsonString(e, n);
        }
        static equals(e, n) {
          return N.w.util.equals(ev, e, n);
        }
        constructor(e) {
          super(),
            (this.authToken = ""),
            (this.enabled = !1),
            (this.monthlyTopUpAmount = 0),
            (this.topUpIncrement = 0),
            N.w.util.initPartial(e, this);
        }
      }
      (ev.runtime = N.w),
        (ev.typeName =
          "exa.seat_management_pb.UpdateCreditTopUpSettingsRequest"),
        (ev.fields = N.w.util.newFieldList(() => [
          {
            no: 1,
            name: "auth_token",
            kind: "scalar",
            T: 9,
          },
          {
            no: 2,
            name: "enabled",
            kind: "scalar",
            T: 8,
          },
          {
            no: 3,
            name: "monthly_top_up_amount",
            kind: "scalar",
            T: 5,
          },
          {
            no: 4,
            name: "top_up_increment",
            kind: "scalar",
            T: 5,
          },
        ]));
      class eH extends C.v {
        static fromBinary(e, n) {
          return new eH().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new eH().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new eH().fromJsonString(e, n);
        }
        static equals(e, n) {
          return N.w.util.equals(eH, e, n);
        }
        constructor(e) {
          super(), N.w.util.initPartial(e, this);
        }
      }
      (eH.runtime = N.w),
        (eH.typeName =
          "exa.seat_management_pb.UpdateCreditTopUpSettingsResponse"),
        (eH.fields = N.w.util.newFieldList(() => []));
      class eV extends C.v {
        static fromBinary(e, n) {
          return new eV().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new eV().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new eV().fromJsonString(e, n);
        }
        static equals(e, n) {
          return N.w.util.equals(eV, e, n);
        }
        constructor(e) {
          super(), (this.authToken = ""), N.w.util.initPartial(e, this);
        }
      }
      (eV.runtime = N.w),
        (eV.typeName = "exa.seat_management_pb.GetTeamBillingRequest"),
        (eV.fields = N.w.util.newFieldList(() => [
          {
            no: 1,
            name: "auth_token",
            kind: "scalar",
            T: 9,
          },
        ]));
      class eW extends C.v {
        static fromBinary(e, n) {
          return new eW().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new eW().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new eW().fromJsonString(e, n);
        }
        static equals(e, n) {
          return N.w.util.equals(eW, e, n);
        }
        constructor(e) {
          super(),
            (this.subscriptionActive = !1),
            (this.onTrial = !1),
            (this.numSeats = f.q.zero),
            (this.planUnitAmount = 0),
            (this.subInterval = 0),
            (this.cancelAtPeriodEnd = !1),
            (this.invoices = []),
            (this.trialOnly = !1),
            (this.numUsers = f.q.zero),
            (this.numSeatsCurrentBillingPeriod = f.q.zero),
            (this.numCascadeUsers = f.q.zero),
            (this.numCascadeSeats = f.q.zero),
            (this.numCoreUsers = f.q.zero),
            (this.numCoreSeats = f.q.zero),
            (this.topUpErrorString = ""),
            (this.teamTopUpCriteriaReached = !1),
            N.w.util.initPartial(e, this);
        }
      }
      (eW.runtime = N.w),
        (eW.typeName = "exa.seat_management_pb.GetTeamBillingResponse"),
        (eW.fields = N.w.util.newFieldList(() => [
          {
            no: 1,
            name: "subscription_active",
            kind: "scalar",
            T: 8,
          },
          {
            no: 2,
            name: "on_trial",
            kind: "scalar",
            T: 8,
          },
          {
            no: 3,
            name: "subscription_renewal_time",
            kind: "message",
            T: w.E,
          },
          {
            no: 5,
            name: "num_seats",
            kind: "scalar",
            T: 3,
          },
          {
            no: 6,
            name: "plan_unit_amount",
            kind: "scalar",
            T: 2,
          },
          {
            no: 7,
            name: "sub_interval",
            kind: "enum",
            T: N.w.getEnumType(l),
          },
          {
            no: 8,
            name: "cancel_at_period_end",
            kind: "scalar",
            T: 8,
          },
          {
            no: 9,
            name: "invoices",
            kind: "message",
            T: eK,
            repeated: !0,
          },
          {
            no: 10,
            name: "payment_method",
            kind: "message",
            T: eX,
          },
          {
            no: 11,
            name: "trial_only",
            kind: "scalar",
            T: 8,
          },
          {
            no: 12,
            name: "plan_status",
            kind: "message",
            T: I.b5v,
          },
          {
            no: 14,
            name: "num_users",
            kind: "scalar",
            T: 3,
          },
          {
            no: 15,
            name: "num_seats_current_billing_period",
            kind: "scalar",
            T: 3,
          },
          {
            no: 16,
            name: "num_cascade_users",
            kind: "scalar",
            T: 3,
          },
          {
            no: 17,
            name: "num_cascade_seats",
            kind: "scalar",
            T: 3,
          },
          {
            no: 18,
            name: "num_core_users",
            kind: "scalar",
            T: 3,
          },
          {
            no: 19,
            name: "num_core_seats",
            kind: "scalar",
            T: 3,
          },
          {
            no: 20,
            name: "failed_subscription_payment",
            kind: "message",
            T: eQ,
          },
          {
            no: 21,
            name: "top_up_error_string",
            kind: "scalar",
            T: 9,
          },
          {
            no: 22,
            name: "team_top_up_criteria_reached",
            kind: "scalar",
            T: 8,
          },
        ]));
      class eK extends C.v {
        static fromBinary(e, n) {
          return new eK().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new eK().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new eK().fromJsonString(e, n);
        }
        static equals(e, n) {
          return N.w.util.equals(eK, e, n);
        }
        constructor(e) {
          super(),
            (this.amount = 0),
            (this.currency = ""),
            (this.paid = !1),
            (this.invoicePdfUrl = ""),
            N.w.util.initPartial(e, this);
        }
      }
      (eK.runtime = N.w),
        (eK.typeName = "exa.seat_management_pb.GetTeamBillingResponse.Invoice"),
        (eK.fields = N.w.util.newFieldList(() => [
          {
            no: 1,
            name: "amount",
            kind: "scalar",
            T: 2,
          },
          {
            no: 2,
            name: "currency",
            kind: "scalar",
            T: 9,
          },
          {
            no: 3,
            name: "paid",
            kind: "scalar",
            T: 8,
          },
          {
            no: 4,
            name: "created",
            kind: "message",
            T: w.E,
          },
          {
            no: 5,
            name: "invoice_pdf_url",
            kind: "scalar",
            T: 9,
          },
        ]));
      class eX extends C.v {
        static fromBinary(e, n) {
          return new eX().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new eX().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new eX().fromJsonString(e, n);
        }
        static equals(e, n) {
          return N.w.util.equals(eX, e, n);
        }
        constructor(e) {
          super(),
            (this.type = ""),
            (this.paymentType = {
              case: void 0,
            }),
            N.w.util.initPartial(e, this);
        }
      }
      (eX.runtime = N.w),
        (eX.typeName =
          "exa.seat_management_pb.GetTeamBillingResponse.PaymentMethod"),
        (eX.fields = N.w.util.newFieldList(() => [
          {
            no: 1,
            name: "type",
            kind: "scalar",
            T: 9,
          },
          {
            no: 2,
            name: "card",
            kind: "message",
            T: eY,
            oneof: "payment_type",
          },
        ]));
      class eY extends C.v {
        static fromBinary(e, n) {
          return new eY().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new eY().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new eY().fromJsonString(e, n);
        }
        static equals(e, n) {
          return N.w.util.equals(eY, e, n);
        }
        constructor(e) {
          super(),
            (this.brand = ""),
            (this.expMonth = f.q.zero),
            (this.expYear = f.q.zero),
            (this.last4 = ""),
            N.w.util.initPartial(e, this);
        }
      }
      (eY.runtime = N.w),
        (eY.typeName =
          "exa.seat_management_pb.GetTeamBillingResponse.PaymentMethod.CardType"),
        (eY.fields = N.w.util.newFieldList(() => [
          {
            no: 1,
            name: "brand",
            kind: "scalar",
            T: 9,
          },
          {
            no: 2,
            name: "exp_month",
            kind: "scalar",
            T: 3,
          },
          {
            no: 3,
            name: "exp_year",
            kind: "scalar",
            T: 3,
          },
          {
            no: 4,
            name: "last4",
            kind: "scalar",
            T: 9,
          },
        ]));
      class eQ extends C.v {
        static fromBinary(e, n) {
          return new eQ().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new eQ().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new eQ().fromJsonString(e, n);
        }
        static equals(e, n) {
          return N.w.util.equals(eQ, e, n);
        }
        constructor(e) {
          super(),
            (this.invoiceLink = ""),
            (this.declineCode = ""),
            N.w.util.initPartial(e, this);
        }
      }
      (eQ.runtime = N.w),
        (eQ.typeName =
          "exa.seat_management_pb.GetTeamBillingResponse.FailedSubscriptionPayment"),
        (eQ.fields = N.w.util.newFieldList(() => [
          {
            no: 1,
            name: "invoice_link",
            kind: "scalar",
            T: 9,
          },
          {
            no: 2,
            name: "decline_code",
            kind: "scalar",
            T: 9,
          },
          {
            no: 3,
            name: "pay_by_date",
            kind: "message",
            T: w.E,
          },
        ]));
      class ez extends C.v {
        static fromBinary(e, n) {
          return new ez().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new ez().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new ez().fromJsonString(e, n);
        }
        static equals(e, n) {
          return N.w.util.equals(ez, e, n);
        }
        constructor(e) {
          super(),
            (this.authToken = ""),
            (this.numSeats = f.q.zero),
            (this.preview = !1),
            N.w.util.initPartial(e, this);
        }
      }
      (ez.runtime = N.w),
        (ez.typeName = "exa.seat_management_pb.UpdateSeatsRequest"),
        (ez.fields = N.w.util.newFieldList(() => [
          {
            no: 1,
            name: "auth_token",
            kind: "scalar",
            T: 9,
          },
          {
            no: 2,
            name: "num_seats",
            kind: "scalar",
            T: 3,
          },
          {
            no: 3,
            name: "preview",
            kind: "scalar",
            T: 8,
          },
        ]));
      class ej extends C.v {
        static fromBinary(e, n) {
          return new ej().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new ej().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new ej().fromJsonString(e, n);
        }
        static equals(e, n) {
          return N.w.util.equals(ej, e, n);
        }
        constructor(e) {
          super(), N.w.util.initPartial(e, this);
        }
      }
      (ej.runtime = N.w),
        (ej.typeName = "exa.seat_management_pb.UpdateSeatsResponse"),
        (ej.fields = N.w.util.newFieldList(() => [
          {
            no: 1,
            name: "billing_update",
            kind: "message",
            T: e1,
          },
        ]));
      class eZ extends C.v {
        static fromBinary(e, n) {
          return new eZ().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new eZ().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new eZ().fromJsonString(e, n);
        }
        static equals(e, n) {
          return N.w.util.equals(eZ, e, n);
        }
        constructor(e) {
          super(),
            (this.authToken = ""),
            (this.price = 0),
            (this.preview = !1),
            (this.paymentPeriod = 0),
            (this.teamsTier = I.wuw.UNSPECIFIED),
            N.w.util.initPartial(e, this);
        }
      }
      (eZ.runtime = N.w),
        (eZ.typeName = "exa.seat_management_pb.UpdatePlanRequest"),
        (eZ.fields = N.w.util.newFieldList(() => [
          {
            no: 1,
            name: "auth_token",
            kind: "scalar",
            T: 9,
          },
          {
            no: 2,
            name: "price",
            kind: "enum",
            T: N.w.getEnumType(c),
          },
          {
            no: 3,
            name: "preview",
            kind: "scalar",
            T: 8,
          },
          {
            no: 4,
            name: "payment_period",
            kind: "enum",
            T: N.w.getEnumType(u),
          },
          {
            no: 5,
            name: "teams_tier",
            kind: "enum",
            T: N.w.getEnumType(I.wuw),
          },
        ]));
      class e$ extends C.v {
        static fromBinary(e, n) {
          return new e$().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new e$().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new e$().fromJsonString(e, n);
        }
        static equals(e, n) {
          return N.w.util.equals(e$, e, n);
        }
        constructor(e) {
          super(),
            (this.appliedChanges = !1),
            (this.nextActionClientSecret = ""),
            (this.paymentFailureReason = ""),
            (this.requiresPasswordReset = !1),
            N.w.util.initPartial(e, this);
        }
      }
      (e$.runtime = N.w),
        (e$.typeName = "exa.seat_management_pb.UpdatePlanResponse"),
        (e$.fields = N.w.util.newFieldList(() => [
          {
            no: 1,
            name: "billing_update",
            kind: "message",
            T: e1,
          },
          {
            no: 2,
            name: "applied_changes",
            kind: "scalar",
            T: 8,
          },
          {
            no: 3,
            name: "next_action_client_secret",
            kind: "scalar",
            T: 9,
          },
          {
            no: 4,
            name: "payment_failure_reason",
            kind: "scalar",
            T: 9,
          },
          {
            no: 5,
            name: "requires_password_reset",
            kind: "scalar",
            T: 8,
          },
        ]));
      class e1 extends C.v {
        static fromBinary(e, n) {
          return new e1().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new e1().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new e1().fromJsonString(e, n);
        }
        static equals(e, n) {
          return N.w.util.equals(e1, e, n);
        }
        constructor(e) {
          super(),
            (this.amountDueImmediately = 0),
            (this.pricePerSeat = 0),
            (this.numSeats = f.q.zero),
            (this.subInterval = 0),
            (this.amountPerInterval = 0),
            (this.unusedPlanRefunded = !1),
            (this.hasSsoAddOn = !1),
            N.w.util.initPartial(e, this);
        }
      }
      (e1.runtime = N.w),
        (e1.typeName = "exa.seat_management_pb.BillingUpdate"),
        (e1.fields = N.w.util.newFieldList(() => [
          {
            no: 1,
            name: "amount_due_immediately",
            kind: "scalar",
            T: 2,
          },
          {
            no: 3,
            name: "price_per_seat",
            kind: "scalar",
            T: 2,
          },
          {
            no: 4,
            name: "num_seats",
            kind: "scalar",
            T: 3,
          },
          {
            no: 5,
            name: "sub_interval",
            kind: "enum",
            T: N.w.getEnumType(l),
          },
          {
            no: 6,
            name: "amount_per_interval",
            kind: "scalar",
            T: 2,
          },
          {
            no: 7,
            name: "billing_start",
            kind: "message",
            T: w.E,
          },
          {
            no: 8,
            name: "billing_end",
            kind: "message",
            T: w.E,
          },
          {
            no: 9,
            name: "unused_plan_refunded",
            kind: "scalar",
            T: 8,
          },
          {
            no: 10,
            name: "has_sso_add_on",
            kind: "scalar",
            T: 8,
          },
        ]));
      class e2 extends C.v {
        static fromBinary(e, n) {
          return new e2().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new e2().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new e2().fromJsonString(e, n);
        }
        static equals(e, n) {
          return N.w.util.equals(e2, e, n);
        }
        constructor(e) {
          super(),
            (this.authToken = ""),
            (this.cancelPlan = !1),
            (this.resumePlan = !1),
            (this.cancelComment = ""),
            (this.cancelReason = ""),
            N.w.util.initPartial(e, this);
        }
      }
      (e2.runtime = N.w),
        (e2.typeName = "exa.seat_management_pb.CancelPlanRequest"),
        (e2.fields = N.w.util.newFieldList(() => [
          {
            no: 1,
            name: "auth_token",
            kind: "scalar",
            T: 9,
          },
          {
            no: 2,
            name: "cancel_plan",
            kind: "scalar",
            T: 8,
          },
          {
            no: 3,
            name: "resume_plan",
            kind: "scalar",
            T: 8,
          },
          {
            no: 4,
            name: "cancel_comment",
            kind: "scalar",
            T: 9,
          },
          {
            no: 5,
            name: "cancel_reason",
            kind: "scalar",
            T: 9,
          },
        ]));
      class e0 extends C.v {
        static fromBinary(e, n) {
          return new e0().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new e0().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new e0().fromJsonString(e, n);
        }
        static equals(e, n) {
          return N.w.util.equals(e0, e, n);
        }
        constructor(e) {
          super(), N.w.util.initPartial(e, this);
        }
      }
      (e0.runtime = N.w),
        (e0.typeName = "exa.seat_management_pb.CancelPlanResponse"),
        (e0.fields = N.w.util.newFieldList(() => []));
      class e9 extends C.v {
        static fromBinary(e, n) {
          return new e9().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new e9().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new e9().fromJsonString(e, n);
        }
        static equals(e, n) {
          return N.w.util.equals(e9, e, n);
        }
        constructor(e) {
          super(),
            (this.authToken = ""),
            (this.successUrl = ""),
            (this.cancelUrl = ""),
            N.w.util.initPartial(e, this);
        }
      }
      (e9.runtime = N.w),
        (e9.typeName = "exa.seat_management_pb.UpdateBillingRequest"),
        (e9.fields = N.w.util.newFieldList(() => [
          {
            no: 1,
            name: "auth_token",
            kind: "scalar",
            T: 9,
          },
          {
            no: 2,
            name: "success_url",
            kind: "scalar",
            T: 9,
          },
          {
            no: 3,
            name: "cancel_url",
            kind: "scalar",
            T: 9,
          },
        ]));
      class e3 extends C.v {
        static fromBinary(e, n) {
          return new e3().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new e3().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new e3().fromJsonString(e, n);
        }
        static equals(e, n) {
          return N.w.util.equals(e3, e, n);
        }
        constructor(e) {
          super(), (this.checkoutUrl = ""), N.w.util.initPartial(e, this);
        }
      }
      (e3.runtime = N.w),
        (e3.typeName = "exa.seat_management_pb.UpdateBillingResponse"),
        (e3.fields = N.w.util.newFieldList(() => [
          {
            no: 1,
            name: "checkout_url",
            kind: "scalar",
            T: 9,
          },
        ]));
      class e4 extends C.v {
        static fromBinary(e, n) {
          return new e4().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new e4().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new e4().fromJsonString(e, n);
        }
        static equals(e, n) {
          return N.w.util.equals(e4, e, n);
        }
        constructor(e) {
          super(),
            (this.authToken = ""),
            (this.returnUrl = ""),
            N.w.util.initPartial(e, this);
        }
      }
      (e4.runtime = N.w),
        (e4.typeName = "exa.seat_management_pb.GetCustomerPortalRequest"),
        (e4.fields = N.w.util.newFieldList(() => [
          {
            no: 1,
            name: "auth_token",
            kind: "scalar",
            T: 9,
          },
          {
            no: 2,
            name: "return_url",
            kind: "scalar",
            T: 9,
          },
        ]));
      class e5 extends C.v {
        static fromBinary(e, n) {
          return new e5().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new e5().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new e5().fromJsonString(e, n);
        }
        static equals(e, n) {
          return N.w.util.equals(e5, e, n);
        }
        constructor(e) {
          super(), (this.portalUrl = ""), N.w.util.initPartial(e, this);
        }
      }
      (e5.runtime = N.w),
        (e5.typeName = "exa.seat_management_pb.GetCustomerPortalResponse"),
        (e5.fields = N.w.util.newFieldList(() => [
          {
            no: 1,
            name: "portal_url",
            kind: "scalar",
            T: 9,
          },
        ]));
      class e8 extends C.v {
        static fromBinary(e, n) {
          return new e8().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new e8().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new e8().fromJsonString(e, n);
        }
        static equals(e, n) {
          return N.w.util.equals(e8, e, n);
        }
        constructor(e) {
          super(),
            (this.authToken = ""),
            (this.featureType = I.Y7c.UNSPECIFIED),
            (this.preview = !1),
            N.w.util.initPartial(e, this);
        }
      }
      (e8.runtime = N.w),
        (e8.typeName = "exa.seat_management_pb.AddTeamAddOnFeatureRequest"),
        (e8.fields = N.w.util.newFieldList(() => [
          {
            no: 1,
            name: "auth_token",
            kind: "scalar",
            T: 9,
          },
          {
            no: 2,
            name: "feature_type",
            kind: "enum",
            T: N.w.getEnumType(I.Y7c),
          },
          {
            no: 3,
            name: "preview",
            kind: "scalar",
            T: 8,
          },
        ]));
      class e6 extends C.v {
        static fromBinary(e, n) {
          return new e6().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new e6().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new e6().fromJsonString(e, n);
        }
        static equals(e, n) {
          return N.w.util.equals(e6, e, n);
        }
        constructor(e) {
          super(),
            (this.appliedChanges = !1),
            (this.nextActionClientSecret = ""),
            (this.paymentFailureReason = ""),
            N.w.util.initPartial(e, this);
        }
      }
      (e6.runtime = N.w),
        (e6.typeName = "exa.seat_management_pb.AddTeamAddOnFeatureResponse"),
        (e6.fields = N.w.util.newFieldList(() => [
          {
            no: 1,
            name: "billing_update",
            kind: "message",
            T: e1,
          },
          {
            no: 2,
            name: "applied_changes",
            kind: "scalar",
            T: 8,
          },
          {
            no: 3,
            name: "next_action_client_secret",
            kind: "scalar",
            T: 9,
          },
          {
            no: 4,
            name: "payment_failure_reason",
            kind: "scalar",
            T: 9,
          },
        ]));
      class e7 extends C.v {
        static fromBinary(e, n) {
          return new e7().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new e7().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new e7().fromJsonString(e, n);
        }
        static equals(e, n) {
          return N.w.util.equals(e7, e, n);
        }
        constructor(e) {
          super(), (this.authToken = ""), N.w.util.initPartial(e, this);
        }
      }
      (e7.runtime = N.w),
        (e7.typeName = "exa.seat_management_pb.GetUserSubscriptionRequest"),
        (e7.fields = N.w.util.newFieldList(() => [
          {
            no: 1,
            name: "auth_token",
            kind: "scalar",
            T: 9,
          },
        ]));
      class ne extends C.v {
        static fromBinary(e, n) {
          return new ne().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new ne().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new ne().fromJsonString(e, n);
        }
        static equals(e, n) {
          return N.w.util.equals(ne, e, n);
        }
        constructor(e) {
          super(),
            (this.exists = !1),
            (this.newsletter = !1),
            (this.disabledTelemetry = !1),
            (this.inboundSource = ""),
            (this.signupStage = ""),
            N.w.util.initPartial(e, this);
        }
      }
      (ne.runtime = N.w),
        (ne.typeName = "exa.seat_management_pb.GetUserSubscriptionResponse"),
        (ne.fields = N.w.util.newFieldList(() => [
          {
            no: 1,
            name: "exists",
            kind: "scalar",
            T: 8,
          },
          {
            no: 2,
            name: "newsletter",
            kind: "scalar",
            T: 8,
          },
          {
            no: 3,
            name: "disabled_telemetry",
            kind: "scalar",
            T: 8,
          },
          {
            no: 4,
            name: "inbound_source",
            kind: "scalar",
            T: 9,
          },
          {
            no: 5,
            name: "signup_stage",
            kind: "scalar",
            T: 9,
          },
          {
            no: 6,
            name: "subscription",
            kind: "message",
            T: D,
          },
        ]));
      class nn extends C.v {
        static fromBinary(e, n) {
          return new nn().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new nn().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new nn().fromJsonString(e, n);
        }
        static equals(e, n) {
          return N.w.util.equals(nn, e, n);
        }
        constructor(e) {
          super(),
            (this.authToken = ""),
            (this.username = ""),
            N.w.util.initPartial(e, this);
        }
      }
      (nn.runtime = N.w),
        (nn.typeName = "exa.seat_management_pb.IsUsernameAvailableRequest"),
        (nn.fields = N.w.util.newFieldList(() => [
          {
            no: 1,
            name: "auth_token",
            kind: "scalar",
            T: 9,
          },
          {
            no: 2,
            name: "username",
            kind: "scalar",
            T: 9,
          },
        ]));
      class nt extends C.v {
        static fromBinary(e, n) {
          return new nt().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new nt().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new nt().fromJsonString(e, n);
        }
        static equals(e, n) {
          return N.w.util.equals(nt, e, n);
        }
        constructor(e) {
          super(), (this.available = !1), N.w.util.initPartial(e, this);
        }
      }
      (nt.runtime = N.w),
        (nt.typeName = "exa.seat_management_pb.IsUsernameAvailableResponse"),
        (nt.fields = N.w.util.newFieldList(() => [
          {
            no: 1,
            name: "available",
            kind: "scalar",
            T: 8,
          },
        ]));
      class na extends C.v {
        static fromBinary(e, n) {
          return new na().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new na().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new na().fromJsonString(e, n);
        }
        static equals(e, n) {
          return N.w.util.equals(na, e, n);
        }
        constructor(e) {
          super(),
            (this.authToken = ""),
            (this.username = ""),
            N.w.util.initPartial(e, this);
        }
      }
      (na.runtime = N.w),
        (na.typeName = "exa.seat_management_pb.UpdateUsernameRequest"),
        (na.fields = N.w.util.newFieldList(() => [
          {
            no: 1,
            name: "auth_token",
            kind: "scalar",
            T: 9,
          },
          {
            no: 2,
            name: "username",
            kind: "scalar",
            T: 9,
          },
        ]));
      class nr extends C.v {
        static fromBinary(e, n) {
          return new nr().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new nr().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new nr().fromJsonString(e, n);
        }
        static equals(e, n) {
          return N.w.util.equals(nr, e, n);
        }
        constructor(e) {
          super(), N.w.util.initPartial(e, this);
        }
      }
      (nr.runtime = N.w),
        (nr.typeName = "exa.seat_management_pb.UpdateUsernameResponse"),
        (nr.fields = N.w.util.newFieldList(() => []));
      class ni extends C.v {
        static fromBinary(e, n) {
          return new ni().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new ni().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new ni().fromJsonString(e, n);
        }
        static equals(e, n) {
          return N.w.util.equals(ni, e, n);
        }
        constructor(e) {
          super(),
            (this.secret = ""),
            (this.adminEmail = ""),
            (this.teamName = ""),
            (this.numSeats = f.q.zero),
            (this.teamsTier = I.wuw.UNSPECIFIED),
            N.w.util.initPartial(e, this);
        }
      }
      (ni.runtime = N.w),
        (ni.typeName = "exa.seat_management_pb.ProvisionTeamRequest"),
        (ni.fields = N.w.util.newFieldList(() => [
          {
            no: 1,
            name: "secret",
            kind: "scalar",
            T: 9,
          },
          {
            no: 2,
            name: "admin_email",
            kind: "scalar",
            T: 9,
          },
          {
            no: 3,
            name: "team_name",
            kind: "scalar",
            T: 9,
          },
          {
            no: 4,
            name: "num_seats",
            kind: "scalar",
            T: 3,
          },
          {
            no: 5,
            name: "teams_tier",
            kind: "enum",
            T: N.w.getEnumType(I.wuw),
          },
        ]));
      class ns extends C.v {
        static fromBinary(e, n) {
          return new ns().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new ns().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new ns().fromJsonString(e, n);
        }
        static equals(e, n) {
          return N.w.util.equals(ns, e, n);
        }
        constructor(e) {
          super(),
            (this.teamId = ""),
            (this.inviteId = ""),
            N.w.util.initPartial(e, this);
        }
      }
      (ns.runtime = N.w),
        (ns.typeName = "exa.seat_management_pb.ProvisionTeamResponse"),
        (ns.fields = N.w.util.newFieldList(() => [
          {
            no: 1,
            name: "team_id",
            kind: "scalar",
            T: 9,
          },
          {
            no: 2,
            name: "invite_id",
            kind: "scalar",
            T: 9,
          },
        ]));
      class no extends C.v {
        static fromBinary(e, n) {
          return new no().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new no().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new no().fromJsonString(e, n);
        }
        static equals(e, n) {
          return N.w.util.equals(no, e, n);
        }
        constructor(e) {
          super(),
            (this.secret = ""),
            (this.teamName = ""),
            (this.numSeats = f.q.zero),
            N.w.util.initPartial(e, this);
        }
      }
      (no.runtime = N.w),
        (no.typeName = "exa.seat_management_pb.ProvisionCascadeSeatsRequest"),
        (no.fields = N.w.util.newFieldList(() => [
          {
            no: 1,
            name: "secret",
            kind: "scalar",
            T: 9,
          },
          {
            no: 2,
            name: "team_name",
            kind: "scalar",
            T: 9,
          },
          {
            no: 3,
            name: "num_seats",
            kind: "scalar",
            T: 3,
          },
        ]));
      class n_ extends C.v {
        static fromBinary(e, n) {
          return new n_().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new n_().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new n_().fromJsonString(e, n);
        }
        static equals(e, n) {
          return N.w.util.equals(n_, e, n);
        }
        constructor(e) {
          super(), N.w.util.initPartial(e, this);
        }
      }
      (n_.runtime = N.w),
        (n_.typeName = "exa.seat_management_pb.ProvisionCascadeSeatsResponse"),
        (n_.fields = N.w.util.newFieldList(() => []));
      class nm extends C.v {
        static fromBinary(e, n) {
          return new nm().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new nm().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new nm().fromJsonString(e, n);
        }
        static equals(e, n) {
          return N.w.util.equals(nm, e, n);
        }
        constructor(e) {
          super(),
            (this.authToken = ""),
            (this.occupationCompany = ""),
            (this.occupationRole = ""),
            (this.yearsOfExperienceMin = 0),
            (this.yearsOfExperienceMax = 0),
            N.w.util.initPartial(e, this);
        }
      }
      (nm.runtime = N.w),
        (nm.typeName = "exa.seat_management_pb.UpdateOccupationRequest"),
        (nm.fields = N.w.util.newFieldList(() => [
          {
            no: 1,
            name: "auth_token",
            kind: "scalar",
            T: 9,
          },
          {
            no: 2,
            name: "occupation_company",
            kind: "scalar",
            T: 9,
          },
          {
            no: 3,
            name: "occupation_role",
            kind: "scalar",
            T: 9,
          },
          {
            no: 4,
            name: "years_of_experience_min",
            kind: "scalar",
            T: 13,
          },
          {
            no: 5,
            name: "years_of_experience_max",
            kind: "scalar",
            T: 13,
          },
        ]));
      class nE extends C.v {
        static fromBinary(e, n) {
          return new nE().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new nE().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new nE().fromJsonString(e, n);
        }
        static equals(e, n) {
          return N.w.util.equals(nE, e, n);
        }
        constructor(e) {
          super(), N.w.util.initPartial(e, this);
        }
      }
      (nE.runtime = N.w),
        (nE.typeName = "exa.seat_management_pb.UpdateOccupationResponse"),
        (nE.fields = N.w.util.newFieldList(() => []));
      class nu extends C.v {
        static fromBinary(e, n) {
          return new nu().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new nu().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new nu().fromJsonString(e, n);
        }
        static equals(e, n) {
          return N.w.util.equals(nu, e, n);
        }
        constructor(e) {
          super(),
            (this.authToken = ""),
            (this.newName = ""),
            (this.newEmail = ""),
            (this.newBio = ""),
            (this.otpCode = ""),
            N.w.util.initPartial(e, this);
        }
      }
      (nu.runtime = N.w),
        (nu.typeName = "exa.seat_management_pb.UpdateProfileRequest"),
        (nu.fields = N.w.util.newFieldList(() => [
          {
            no: 1,
            name: "auth_token",
            kind: "scalar",
            T: 9,
          },
          {
            no: 2,
            name: "new_name",
            kind: "scalar",
            T: 9,
          },
          {
            no: 3,
            name: "new_email",
            kind: "scalar",
            T: 9,
          },
          {
            no: 4,
            name: "new_bio",
            kind: "scalar",
            T: 9,
          },
          {
            no: 5,
            name: "otp_code",
            kind: "scalar",
            T: 9,
          },
        ]));
      class nl extends C.v {
        static fromBinary(e, n) {
          return new nl().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new nl().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new nl().fromJsonString(e, n);
        }
        static equals(e, n) {
          return N.w.util.equals(nl, e, n);
        }
        constructor(e) {
          super(), N.w.util.initPartial(e, this);
        }
      }
      (nl.runtime = N.w),
        (nl.typeName = "exa.seat_management_pb.UpdateProfileResponse"),
        (nl.fields = N.w.util.newFieldList(() => []));
      class nc extends C.v {
        static fromBinary(e, n) {
          return new nc().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new nc().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new nc().fromJsonString(e, n);
        }
        static equals(e, n) {
          return N.w.util.equals(nc, e, n);
        }
        constructor(e) {
          super(),
            (this.authToken = ""),
            (this.publicProfileEnabled = !1),
            N.w.util.initPartial(e, this);
        }
      }
      (nc.runtime = N.w),
        (nc.typeName = "exa.seat_management_pb.UpdateProfileVisibilityRequest"),
        (nc.fields = N.w.util.newFieldList(() => [
          {
            no: 1,
            name: "auth_token",
            kind: "scalar",
            T: 9,
          },
          {
            no: 2,
            name: "public_profile_enabled",
            kind: "scalar",
            T: 8,
          },
        ]));
      class nT extends C.v {
        static fromBinary(e, n) {
          return new nT().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new nT().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new nT().fromJsonString(e, n);
        }
        static equals(e, n) {
          return N.w.util.equals(nT, e, n);
        }
        constructor(e) {
          super(), N.w.util.initPartial(e, this);
        }
      }
      (nT.runtime = N.w),
        (nT.typeName =
          "exa.seat_management_pb.UpdateProfileVisibilityResponse"),
        (nT.fields = N.w.util.newFieldList(() => []));
      class nd extends C.v {
        static fromBinary(e, n) {
          return new nd().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new nd().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new nd().fromJsonString(e, n);
        }
        static equals(e, n) {
          return N.w.util.equals(nd, e, n);
        }
        constructor(e) {
          super(),
            (this.secret = ""),
            (this.teamId = ""),
            (this.emails = []),
            (this.createIfNotExists = !1),
            (this.sendEmail = !1),
            N.w.util.initPartial(e, this);
        }
      }
      (nd.runtime = N.w),
        (nd.typeName = "exa.seat_management_pb.AddUsersToTeamRequest"),
        (nd.fields = N.w.util.newFieldList(() => [
          {
            no: 1,
            name: "secret",
            kind: "scalar",
            T: 9,
          },
          {
            no: 2,
            name: "team_id",
            kind: "scalar",
            T: 9,
          },
          {
            no: 3,
            name: "emails",
            kind: "scalar",
            T: 9,
            repeated: !0,
          },
          {
            no: 4,
            name: "create_if_not_exists",
            kind: "scalar",
            T: 8,
          },
          {
            no: 5,
            name: "send_email",
            kind: "scalar",
            T: 8,
          },
        ]));
      class nS extends C.v {
        static fromBinary(e, n) {
          return new nS().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new nS().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new nS().fromJsonString(e, n);
        }
        static equals(e, n) {
          return N.w.util.equals(nS, e, n);
        }
        constructor(e) {
          super(), N.w.util.initPartial(e, this);
        }
      }
      (nS.runtime = N.w),
        (nS.typeName = "exa.seat_management_pb.AddUsersToTeamResponse"),
        (nS.fields = N.w.util.newFieldList(() => []));
      class nA extends C.v {
        static fromBinary(e, n) {
          return new nA().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new nA().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new nA().fromJsonString(e, n);
        }
        static equals(e, n) {
          return N.w.util.equals(nA, e, n);
        }
        constructor(e) {
          super(), (this.username = ""), N.w.util.initPartial(e, this);
        }
      }
      (nA.runtime = N.w),
        (nA.typeName = "exa.seat_management_pb.GetPublicProfileRequest"),
        (nA.fields = N.w.util.newFieldList(() => [
          {
            no: 1,
            name: "username",
            kind: "scalar",
            T: 9,
          },
        ]));
      class nO extends C.v {
        static fromBinary(e, n) {
          return new nO().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new nO().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new nO().fromJsonString(e, n);
        }
        static equals(e, n) {
          return N.w.util.equals(nO, e, n);
        }
        constructor(e) {
          super(),
            (this.name = ""),
            (this.username = ""),
            (this.preferredTimeZone = ""),
            (this.bio = ""),
            (this.profilePicturePresignedUrl = ""),
            N.w.util.initPartial(e, this);
        }
      }
      (nO.runtime = N.w),
        (nO.typeName = "exa.seat_management_pb.GetPublicProfileResponse"),
        (nO.fields = N.w.util.newFieldList(() => [
          {
            no: 1,
            name: "name",
            kind: "scalar",
            T: 9,
          },
          {
            no: 2,
            name: "username",
            kind: "scalar",
            T: 9,
          },
          {
            no: 3,
            name: "preferred_time_zone",
            kind: "scalar",
            T: 9,
          },
          {
            no: 4,
            name: "signup_time",
            kind: "message",
            T: w.E,
          },
          {
            no: 5,
            name: "bio",
            kind: "scalar",
            T: 9,
          },
          {
            no: 6,
            name: "profile_picture_presigned_url",
            kind: "scalar",
            T: 9,
          },
        ]));
      class nN extends C.v {
        static fromBinary(e, n) {
          return new nN().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new nN().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new nN().fromJsonString(e, n);
        }
        static equals(e, n) {
          return N.w.util.equals(nN, e, n);
        }
        constructor(e) {
          super(),
            (this.secret = ""),
            (this.email = ""),
            (this.roles = []),
            N.w.util.initPartial(e, this);
        }
      }
      (nN.runtime = N.w),
        (nN.typeName = "exa.seat_management_pb.UpdateUserRolesRequest"),
        (nN.fields = N.w.util.newFieldList(() => [
          {
            no: 1,
            name: "secret",
            kind: "scalar",
            T: 9,
          },
          {
            no: 2,
            name: "email",
            kind: "scalar",
            T: 9,
          },
          {
            no: 3,
            name: "roles",
            kind: "scalar",
            T: 9,
            repeated: !0,
          },
        ]));
      class nC extends C.v {
        static fromBinary(e, n) {
          return new nC().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new nC().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new nC().fromJsonString(e, n);
        }
        static equals(e, n) {
          return N.w.util.equals(nC, e, n);
        }
        constructor(e) {
          super(), N.w.util.initPartial(e, this);
        }
      }
      (nC.runtime = N.w),
        (nC.typeName = "exa.seat_management_pb.UpdateUserRolesResponse"),
        (nC.fields = N.w.util.newFieldList(() => []));
      class nf extends C.v {
        static fromBinary(e, n) {
          return new nf().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new nf().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new nf().fromJsonString(e, n);
        }
        static equals(e, n) {
          return N.w.util.equals(nf, e, n);
        }
        constructor(e) {
          super(),
            (this.serviceKey = ""),
            (this.emails = []),
            (this.role = ""),
            (this.groupName = ""),
            N.w.util.initPartial(e, this);
        }
      }
      (nf.runtime = N.w),
        (nf.typeName = "exa.seat_management_pb.BulkUpdateUserRolesRequest"),
        (nf.fields = N.w.util.newFieldList(() => [
          {
            no: 1,
            name: "service_key",
            kind: "scalar",
            T: 9,
          },
          {
            no: 2,
            name: "emails",
            kind: "scalar",
            T: 9,
            repeated: !0,
          },
          {
            no: 3,
            name: "role",
            kind: "scalar",
            T: 9,
          },
          {
            no: 4,
            name: "group_name",
            kind: "scalar",
            T: 9,
          },
        ]));
      class nw extends C.v {
        static fromBinary(e, n) {
          return new nw().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new nw().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new nw().fromJsonString(e, n);
        }
        static equals(e, n) {
          return N.w.util.equals(nw, e, n);
        }
        constructor(e) {
          super(),
            (this.successfulEmails = []),
            (this.failedEmails = []),
            N.w.util.initPartial(e, this);
        }
      }
      (nw.runtime = N.w),
        (nw.typeName = "exa.seat_management_pb.BulkUpdateUserRolesResponse"),
        (nw.fields = N.w.util.newFieldList(() => [
          {
            no: 1,
            name: "successful_emails",
            kind: "scalar",
            T: 9,
            repeated: !0,
          },
          {
            no: 2,
            name: "failed_emails",
            kind: "scalar",
            T: 9,
            repeated: !0,
          },
        ]));
      class nI extends C.v {
        static fromBinary(e, n) {
          return new nI().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new nI().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new nI().fromJsonString(e, n);
        }
        static equals(e, n) {
          return N.w.util.equals(nI, e, n);
        }
        constructor(e) {
          super(), (this.apiKey = ""), N.w.util.initPartial(e, this);
        }
      }
      (nI.runtime = N.w),
        (nI.typeName = "exa.seat_management_pb.GetTeamActivityRequest"),
        (nI.fields = N.w.util.newFieldList(() => [
          {
            no: 1,
            name: "api_key",
            kind: "scalar",
            T: 9,
          },
          {
            no: 2,
            name: "start_timestamp",
            kind: "message",
            T: w.E,
          },
          {
            no: 3,
            name: "end_timestamp",
            kind: "message",
            T: w.E,
          },
        ]));
      class nR extends C.v {
        static fromBinary(e, n) {
          return new nR().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new nR().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new nR().fromJsonString(e, n);
        }
        static equals(e, n) {
          return N.w.util.equals(nR, e, n);
        }
        constructor(e) {
          super(), (this.userActivity = []), N.w.util.initPartial(e, this);
        }
      }
      (nR.runtime = N.w),
        (nR.typeName = "exa.seat_management_pb.GetTeamActivityResponse"),
        (nR.fields = N.w.util.newFieldList(() => [
          {
            no: 1,
            name: "user_activity",
            kind: "message",
            T: nL,
            repeated: !0,
          },
        ]));
      class nL extends C.v {
        static fromBinary(e, n) {
          return new nL().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new nL().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new nL().fromJsonString(e, n);
        }
        static equals(e, n) {
          return N.w.util.equals(nL, e, n);
        }
        constructor(e) {
          super(), N.w.util.initPartial(e, this);
        }
      }
      (nL.runtime = N.w),
        (nL.typeName =
          "exa.seat_management_pb.GetTeamActivityResponse.UserActivity"),
        (nL.fields = N.w.util.newFieldList(() => [
          {
            no: 1,
            name: "user",
            kind: "message",
            T: R,
          },
          {
            no: 2,
            name: "completion_statistics",
            kind: "message",
            T: I.yRI,
          },
        ]));
      class np extends C.v {
        static fromBinary(e, n) {
          return new np().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new np().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new np().fromJsonString(e, n);
        }
        static equals(e, n) {
          return N.w.util.equals(np, e, n);
        }
        constructor(e) {
          super(), (this.authToken = ""), N.w.util.initPartial(e, this);
        }
      }
      (np.runtime = N.w),
        (np.typeName = "exa.seat_management_pb.GetSSOProviderRequest"),
        (np.fields = N.w.util.newFieldList(() => [
          {
            no: 1,
            name: "auth_token",
            kind: "scalar",
            T: 9,
          },
        ]));
      class nD extends C.v {
        static fromBinary(e, n) {
          return new nD().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new nD().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new nD().fromJsonString(e, n);
        }
        static equals(e, n) {
          return N.w.util.equals(nD, e, n);
        }
        constructor(e) {
          super(), N.w.util.initPartial(e, this);
        }
      }
      (nD.runtime = N.w),
        (nD.typeName = "exa.seat_management_pb.GetSSOProviderResponse"),
        (nD.fields = N.w.util.newFieldList(() => [
          {
            no: 1,
            name: "saml_auth_provider",
            kind: "message",
            T: ny,
          },
        ]));
      class nP extends C.v {
        static fromBinary(e, n) {
          return new nP().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new nP().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new nP().fromJsonString(e, n);
        }
        static equals(e, n) {
          return N.w.util.equals(nP, e, n);
        }
        constructor(e) {
          super(),
            (this.authToken = ""),
            (this.isTest = !1),
            N.w.util.initPartial(e, this);
        }
      }
      (nP.runtime = N.w),
        (nP.typeName = "exa.seat_management_pb.SaveSSOProviderRequest"),
        (nP.fields = N.w.util.newFieldList(() => [
          {
            no: 1,
            name: "auth_token",
            kind: "scalar",
            T: 9,
          },
          {
            no: 2,
            name: "saml_auth_provider",
            kind: "message",
            T: ny,
          },
          {
            no: 3,
            name: "is_test",
            kind: "scalar",
            T: 8,
          },
        ]));
      class nM extends C.v {
        static fromBinary(e, n) {
          return new nM().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new nM().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new nM().fromJsonString(e, n);
        }
        static equals(e, n) {
          return N.w.util.equals(nM, e, n);
        }
        constructor(e) {
          super(), N.w.util.initPartial(e, this);
        }
      }
      (nM.runtime = N.w),
        (nM.typeName = "exa.seat_management_pb.SaveSSOProviderResponse"),
        (nM.fields = N.w.util.newFieldList(() => []));
      class ny extends C.v {
        static fromBinary(e, n) {
          return new ny().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new ny().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new ny().fromJsonString(e, n);
        }
        static equals(e, n) {
          return N.w.util.equals(ny, e, n);
        }
        constructor(e) {
          super(),
            (this.ssoProviderId = ""),
            (this.idpEntityId = ""),
            (this.ssoUrl = ""),
            (this.x509Certificate = ""),
            (this.enabled = !1),
            N.w.util.initPartial(e, this);
        }
      }
      (ny.runtime = N.w),
        (ny.typeName = "exa.seat_management_pb.SAMLAuthProvider"),
        (ny.fields = N.w.util.newFieldList(() => [
          {
            no: 1,
            name: "sso_provider_id",
            kind: "scalar",
            T: 9,
          },
          {
            no: 2,
            name: "idp_entity_id",
            kind: "scalar",
            T: 9,
          },
          {
            no: 3,
            name: "sso_url",
            kind: "scalar",
            T: 9,
          },
          {
            no: 4,
            name: "x509_certificate",
            kind: "scalar",
            T: 9,
          },
          {
            no: 5,
            name: "enabled",
            kind: "scalar",
            T: 8,
          },
        ]));
      class nh extends C.v {
        static fromBinary(e, n) {
          return new nh().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new nh().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new nh().fromJsonString(e, n);
        }
        static equals(e, n) {
          return N.w.util.equals(nh, e, n);
        }
        constructor(e) {
          super(),
            (this.authToken = ""),
            (this.samlProviderId = ""),
            (this.samlAuthToken = ""),
            N.w.util.initPartial(e, this);
        }
      }
      (nh.runtime = N.w),
        (nh.typeName = "exa.seat_management_pb.JoinTeamWithSSOLoginRequest"),
        (nh.fields = N.w.util.newFieldList(() => [
          {
            no: 1,
            name: "auth_token",
            kind: "scalar",
            T: 9,
          },
          {
            no: 2,
            name: "saml_provider_id",
            kind: "scalar",
            T: 9,
          },
          {
            no: 3,
            name: "saml_auth_token",
            kind: "scalar",
            T: 9,
          },
        ]));
      class nU extends C.v {
        static fromBinary(e, n) {
          return new nU().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new nU().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new nU().fromJsonString(e, n);
        }
        static equals(e, n) {
          return N.w.util.equals(nU, e, n);
        }
        constructor(e) {
          super(), N.w.util.initPartial(e, this);
        }
      }
      (nU.runtime = N.w),
        (nU.typeName = "exa.seat_management_pb.JoinTeamWithSSOLoginResponse"),
        (nU.fields = N.w.util.newFieldList(() => []));
      class ng extends C.v {
        static fromBinary(e, n) {
          return new ng().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new ng().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new ng().fromJsonString(e, n);
        }
        static equals(e, n) {
          return N.w.util.equals(ng, e, n);
        }
        constructor(e) {
          super(), (this.email = ""), N.w.util.initPartial(e, this);
        }
      }
      (ng.runtime = N.w),
        (ng.typeName = "exa.seat_management_pb.UserSSOLoginRedirectRequest"),
        (ng.fields = N.w.util.newFieldList(() => [
          {
            no: 1,
            name: "email",
            kind: "scalar",
            T: 9,
          },
        ]));
      class nJ extends C.v {
        static fromBinary(e, n) {
          return new nJ().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new nJ().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new nJ().fromJsonString(e, n);
        }
        static equals(e, n) {
          return N.w.util.equals(nJ, e, n);
        }
        constructor(e) {
          super(),
            (this.shouldRedirect = !1),
            (this.ssoProviderId = ""),
            (this.disallowEnterpriseUserLogin = !1),
            (this.redirectUrl = ""),
            N.w.util.initPartial(e, this);
        }
      }
      (nJ.runtime = N.w),
        (nJ.typeName = "exa.seat_management_pb.UserSSOLoginRedirectResponse"),
        (nJ.fields = N.w.util.newFieldList(() => [
          {
            no: 1,
            name: "should_redirect",
            kind: "scalar",
            T: 8,
          },
          {
            no: 2,
            name: "sso_provider_id",
            kind: "scalar",
            T: 9,
          },
          {
            no: 3,
            name: "disallow_enterprise_user_login",
            kind: "scalar",
            T: 8,
          },
          {
            no: 4,
            name: "redirect_url",
            kind: "scalar",
            T: 9,
          },
        ]));
      class nk extends C.v {
        static fromBinary(e, n) {
          return new nk().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new nk().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new nk().fromJsonString(e, n);
        }
        static equals(e, n) {
          return N.w.util.equals(nk, e, n);
        }
        constructor(e) {
          super(),
            (this.seatLimit = 0),
            (this.attributionEnabled = !1),
            (this.auditLogsEnabled = !1),
            (this.mucsTotal = 0),
            (this.mucsEnabled = !1),
            (this.licenseLengthMonths = 0),
            (this.enableIndividualUserAnalytics = !1),
            N.w.util.initPartial(e, this);
        }
      }
      (nk.runtime = N.w),
        (nk.typeName = "exa.seat_management_pb.EnterpriseLicenseConfig"),
        (nk.fields = N.w.util.newFieldList(() => [
          {
            no: 1,
            name: "expiration_timestamp",
            kind: "message",
            T: w.E,
          },
          {
            no: 2,
            name: "seat_limit",
            kind: "scalar",
            T: 13,
          },
          {
            no: 3,
            name: "attribution_enabled",
            kind: "scalar",
            T: 8,
          },
          {
            no: 4,
            name: "audit_logs_enabled",
            kind: "scalar",
            T: 8,
          },
          {
            no: 5,
            name: "start_timestamp",
            kind: "message",
            T: w.E,
          },
          {
            no: 6,
            name: "mucs_total",
            kind: "scalar",
            T: 13,
          },
          {
            no: 7,
            name: "mucs_enabled",
            kind: "scalar",
            T: 8,
          },
          {
            no: 8,
            name: "license_length_months",
            kind: "scalar",
            T: 13,
          },
          {
            no: 9,
            name: "enable_individual_user_analytics",
            kind: "scalar",
            T: 8,
          },
        ]));
      class nB extends C.v {
        static fromBinary(e, n) {
          return new nB().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new nB().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new nB().fromJsonString(e, n);
        }
        static equals(e, n) {
          return N.w.util.equals(nB, e, n);
        }
        constructor(e) {
          super(), (this.authToken = ""), N.w.util.initPartial(e, this);
        }
      }
      (nB.runtime = N.w),
        (nB.typeName = "exa.seat_management_pb.DeleteTeamRequest"),
        (nB.fields = N.w.util.newFieldList(() => [
          {
            no: 1,
            name: "auth_token",
            kind: "scalar",
            T: 9,
          },
        ]));
      class nG extends C.v {
        static fromBinary(e, n) {
          return new nG().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new nG().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new nG().fromJsonString(e, n);
        }
        static equals(e, n) {
          return N.w.util.equals(nG, e, n);
        }
        constructor(e) {
          super(), N.w.util.initPartial(e, this);
        }
      }
      (nG.runtime = N.w),
        (nG.typeName = "exa.seat_management_pb.DeleteTeamResponse"),
        (nG.fields = N.w.util.newFieldList(() => []));
      class nF extends C.v {
        static fromBinary(e, n) {
          return new nF().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new nF().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new nF().fromJsonString(e, n);
        }
        static equals(e, n) {
          return N.w.util.equals(nF, e, n);
        }
        constructor(e) {
          super(),
            (this.authToken = ""),
            (this.code = ""),
            N.w.util.initPartial(e, this);
        }
      }
      (nF.runtime = N.w),
        (nF.typeName = "exa.seat_management_pb.ProvisionFreeProTierRequest"),
        (nF.fields = N.w.util.newFieldList(() => [
          {
            no: 1,
            name: "auth_token",
            kind: "scalar",
            T: 9,
          },
          {
            no: 2,
            name: "code",
            kind: "scalar",
            T: 9,
          },
        ]));
      class nx extends C.v {
        static fromBinary(e, n) {
          return new nx().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new nx().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new nx().fromJsonString(e, n);
        }
        static equals(e, n) {
          return N.w.util.equals(nx, e, n);
        }
        constructor(e) {
          super(), N.w.util.initPartial(e, this);
        }
      }
      (nx.runtime = N.w),
        (nx.typeName = "exa.seat_management_pb.ProvisionFreeProTierResponse"),
        (nx.fields = N.w.util.newFieldList(() => [
          {
            no: 1,
            name: "expiration_date",
            kind: "message",
            T: w.E,
          },
        ]));
      class nq extends C.v {
        static fromBinary(e, n) {
          return new nq().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new nq().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new nq().fromJsonString(e, n);
        }
        static equals(e, n) {
          return N.w.util.equals(nq, e, n);
        }
        constructor(e) {
          super(), (this.authToken = ""), N.w.util.initPartial(e, this);
        }
      }
      (nq.runtime = N.w),
        (nq.typeName = "exa.seat_management_pb.GetTeamsFeaturesRequest"),
        (nq.fields = N.w.util.newFieldList(() => [
          {
            no: 1,
            name: "auth_token",
            kind: "scalar",
            T: 9,
          },
        ]));
      class nb extends C.v {
        static fromBinary(e, n) {
          return new nb().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new nb().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new nb().fromJsonString(e, n);
        }
        static equals(e, n) {
          return N.w.util.equals(nb, e, n);
        }
        constructor(e) {
          super(), (this.features = []), N.w.util.initPartial(e, this);
        }
      }
      (nb.runtime = N.w),
        (nb.typeName = "exa.seat_management_pb.GetTeamsFeaturesResponse"),
        (nb.fields = N.w.util.newFieldList(() => [
          {
            no: 1,
            name: "features",
            kind: "enum",
            T: N.w.getEnumType(I.Y7c),
            repeated: !0,
          },
        ]));
      class nv extends C.v {
        static fromBinary(e, n) {
          return new nv().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new nv().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new nv().fromJsonString(e, n);
        }
        static equals(e, n) {
          return N.w.util.equals(nv, e, n);
        }
        constructor(e) {
          super(),
            (this.authToken = ""),
            (this.userEmail = ""),
            N.w.util.initPartial(e, this);
        }
      }
      (nv.runtime = N.w),
        (nv.typeName = "exa.seat_management_pb.GrantSuperAdminAccessRequest"),
        (nv.fields = N.w.util.newFieldList(() => [
          {
            no: 1,
            name: "auth_token",
            kind: "scalar",
            T: 9,
          },
          {
            no: 2,
            name: "user_email",
            kind: "scalar",
            T: 9,
          },
        ]));
      class nH extends C.v {
        static fromBinary(e, n) {
          return new nH().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new nH().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new nH().fromJsonString(e, n);
        }
        static equals(e, n) {
          return N.w.util.equals(nH, e, n);
        }
        constructor(e) {
          super(), N.w.util.initPartial(e, this);
        }
      }
      (nH.runtime = N.w),
        (nH.typeName = "exa.seat_management_pb.GrantSuperAdminAccessResponse"),
        (nH.fields = N.w.util.newFieldList(() => [
          {
            no: 1,
            name: "user",
            kind: "message",
            T: R,
          },
        ]));
      class nV extends C.v {
        static fromBinary(e, n) {
          return new nV().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new nV().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new nV().fromJsonString(e, n);
        }
        static equals(e, n) {
          return N.w.util.equals(nV, e, n);
        }
        constructor(e) {
          super(),
            (this.authToken = ""),
            (this.userEmail = ""),
            N.w.util.initPartial(e, this);
        }
      }
      (nV.runtime = N.w),
        (nV.typeName = "exa.seat_management_pb.GrantTeamAdminAccessRequest"),
        (nV.fields = N.w.util.newFieldList(() => [
          {
            no: 1,
            name: "auth_token",
            kind: "scalar",
            T: 9,
          },
          {
            no: 2,
            name: "user_email",
            kind: "scalar",
            T: 9,
          },
        ]));
      class nW extends C.v {
        static fromBinary(e, n) {
          return new nW().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new nW().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new nW().fromJsonString(e, n);
        }
        static equals(e, n) {
          return N.w.util.equals(nW, e, n);
        }
        constructor(e) {
          super(), N.w.util.initPartial(e, this);
        }
      }
      (nW.runtime = N.w),
        (nW.typeName = "exa.seat_management_pb.GrantTeamAdminAccessResponse"),
        (nW.fields = N.w.util.newFieldList(() => [
          {
            no: 1,
            name: "user",
            kind: "message",
            T: R,
          },
        ]));
      class nK extends C.v {
        static fromBinary(e, n) {
          return new nK().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new nK().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new nK().fromJsonString(e, n);
        }
        static equals(e, n) {
          return N.w.util.equals(nK, e, n);
        }
        constructor(e) {
          super(),
            (this.authToken = ""),
            (this.teamId = ""),
            (this.flexCreditsToAdd = f.q.zero),
            N.w.util.initPartial(e, this);
        }
      }
      (nK.runtime = N.w),
        (nK.typeName =
          "exa.seat_management_pb.AddFlexCreditsToMultiTenantTeamRequest"),
        (nK.fields = N.w.util.newFieldList(() => [
          {
            no: 1,
            name: "auth_token",
            kind: "scalar",
            T: 9,
          },
          {
            no: 2,
            name: "team_id",
            kind: "scalar",
            T: 9,
          },
          {
            no: 3,
            name: "flex_credits_to_add",
            kind: "scalar",
            T: 3,
          },
        ]));
      class nX extends C.v {
        static fromBinary(e, n) {
          return new nX().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new nX().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new nX().fromJsonString(e, n);
        }
        static equals(e, n) {
          return N.w.util.equals(nX, e, n);
        }
        constructor(e) {
          super(), N.w.util.initPartial(e, this);
        }
      }
      (nX.runtime = N.w),
        (nX.typeName =
          "exa.seat_management_pb.AddFlexCreditsToMultiTenantTeamResponse"),
        (nX.fields = N.w.util.newFieldList(() => [
          {
            no: 1,
            name: "team",
            kind: "message",
            T: L,
          },
        ]));
      class nY extends C.v {
        static fromBinary(e, n) {
          return new nY().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new nY().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new nY().fromJsonString(e, n);
        }
        static equals(e, n) {
          return N.w.util.equals(nY, e, n);
        }
        constructor(e) {
          super(),
            (this.secret = ""),
            (this.teamId = ""),
            N.w.util.initPartial(e, this);
        }
      }
      (nY.runtime = N.w),
        (nY.typeName =
          "exa.seat_management_pb.GetTeamsFeaturesInternalRequest"),
        (nY.fields = N.w.util.newFieldList(() => [
          {
            no: 1,
            name: "secret",
            kind: "scalar",
            T: 9,
          },
          {
            no: 2,
            name: "team_id",
            kind: "scalar",
            T: 9,
          },
        ]));
      class nQ extends C.v {
        static fromBinary(e, n) {
          return new nQ().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new nQ().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new nQ().fromJsonString(e, n);
        }
        static equals(e, n) {
          return N.w.util.equals(nQ, e, n);
        }
        constructor(e) {
          super(), (this.features = []), N.w.util.initPartial(e, this);
        }
      }
      (nQ.runtime = N.w),
        (nQ.typeName =
          "exa.seat_management_pb.GetTeamsFeaturesInternalResponse"),
        (nQ.fields = N.w.util.newFieldList(() => [
          {
            no: 1,
            name: "features",
            kind: "enum",
            T: N.w.getEnumType(I.Y7c),
            repeated: !0,
          },
        ]));
      class nz extends C.v {
        static fromBinary(e, n) {
          return new nz().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new nz().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new nz().fromJsonString(e, n);
        }
        static equals(e, n) {
          return N.w.util.equals(nz, e, n);
        }
        constructor(e) {
          super(),
            (this.secret = ""),
            (this.teamId = ""),
            (this.addFeatures = []),
            (this.removeFeatures = []),
            N.w.util.initPartial(e, this);
        }
      }
      (nz.runtime = N.w),
        (nz.typeName =
          "exa.seat_management_pb.UpdateTeamsFeaturesInternalRequest"),
        (nz.fields = N.w.util.newFieldList(() => [
          {
            no: 1,
            name: "secret",
            kind: "scalar",
            T: 9,
          },
          {
            no: 2,
            name: "team_id",
            kind: "scalar",
            T: 9,
          },
          {
            no: 3,
            name: "add_features",
            kind: "enum",
            T: N.w.getEnumType(I.Y7c),
            repeated: !0,
          },
          {
            no: 4,
            name: "remove_features",
            kind: "enum",
            T: N.w.getEnumType(I.Y7c),
            repeated: !0,
          },
        ]));
      class nj extends C.v {
        static fromBinary(e, n) {
          return new nj().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new nj().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new nj().fromJsonString(e, n);
        }
        static equals(e, n) {
          return N.w.util.equals(nj, e, n);
        }
        constructor(e) {
          super(),
            (this.secret = ""),
            (this.teamId = ""),
            (this.features = []),
            N.w.util.initPartial(e, this);
        }
      }
      (nj.runtime = N.w),
        (nj.typeName = "exa.seat_management_pb.SetTeamsFeaturesRequest"),
        (nj.fields = N.w.util.newFieldList(() => [
          {
            no: 1,
            name: "secret",
            kind: "scalar",
            T: 9,
          },
          {
            no: 2,
            name: "team_id",
            kind: "scalar",
            T: 9,
          },
          {
            no: 3,
            name: "features",
            kind: "enum",
            T: N.w.getEnumType(I.Y7c),
            repeated: !0,
          },
        ]));
      class nZ extends C.v {
        static fromBinary(e, n) {
          return new nZ().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new nZ().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new nZ().fromJsonString(e, n);
        }
        static equals(e, n) {
          return N.w.util.equals(nZ, e, n);
        }
        constructor(e) {
          super(), N.w.util.initPartial(e, this);
        }
      }
      (nZ.runtime = N.w),
        (nZ.typeName =
          "exa.seat_management_pb.UpdateTeamsFeaturesInternalResponse"),
        (nZ.fields = N.w.util.newFieldList(() => []));
      class n$ extends C.v {
        static fromBinary(e, n) {
          return new n$().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new n$().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new n$().fromJsonString(e, n);
        }
        static equals(e, n) {
          return N.w.util.equals(n$, e, n);
        }
        constructor(e) {
          super(), N.w.util.initPartial(e, this);
        }
      }
      (n$.runtime = N.w),
        (n$.typeName = "exa.seat_management_pb.SetTeamsFeaturesResponse"),
        (n$.fields = N.w.util.newFieldList(() => []));
      class n1 extends C.v {
        static fromBinary(e, n) {
          return new n1().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new n1().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new n1().fromJsonString(e, n);
        }
        static equals(e, n) {
          return N.w.util.equals(n1, e, n);
        }
        constructor(e) {
          super(),
            (this.secret = ""),
            (this.apiKeys = []),
            (this.features = []),
            N.w.util.initPartial(e, this);
        }
      }
      (n1.runtime = N.w),
        (n1.typeName =
          "exa.seat_management_pb.UpdateUserFeaturesInternalRequest"),
        (n1.fields = N.w.util.newFieldList(() => [
          {
            no: 1,
            name: "secret",
            kind: "scalar",
            T: 9,
          },
          {
            no: 2,
            name: "api_keys",
            kind: "scalar",
            T: 9,
            repeated: !0,
          },
          {
            no: 3,
            name: "features",
            kind: "enum",
            T: N.w.getEnumType(I.aYQ),
            repeated: !0,
          },
        ]));
      class n2 extends C.v {
        static fromBinary(e, n) {
          return new n2().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new n2().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new n2().fromJsonString(e, n);
        }
        static equals(e, n) {
          return N.w.util.equals(n2, e, n);
        }
        constructor(e) {
          super(), N.w.util.initPartial(e, this);
        }
      }
      (n2.runtime = N.w),
        (n2.typeName =
          "exa.seat_management_pb.UpdateUserFeaturesInternalResponse"),
        (n2.fields = N.w.util.newFieldList(() => []));
      class n0 extends C.v {
        static fromBinary(e, n) {
          return new n0().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new n0().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new n0().fromJsonString(e, n);
        }
        static equals(e, n) {
          return N.w.util.equals(n0, e, n);
        }
        constructor(e) {
          super(),
            (this.authToken = ""),
            (this.emails = []),
            (this.approvalType = 0),
            (this.approve = !1),
            N.w.util.initPartial(e, this);
        }
      }
      (n0.runtime = N.w),
        (n0.typeName = "exa.seat_management_pb.BulkEditUserApprovalsRequest"),
        (n0.fields = N.w.util.newFieldList(() => [
          {
            no: 1,
            name: "auth_token",
            kind: "scalar",
            T: 9,
          },
          {
            no: 2,
            name: "emails",
            kind: "scalar",
            T: 9,
            repeated: !0,
          },
          {
            no: 3,
            name: "approval_type",
            kind: "enum",
            T: N.w.getEnumType(d),
          },
          {
            no: 4,
            name: "approve",
            kind: "scalar",
            T: 8,
          },
        ]));
      class n9 extends C.v {
        static fromBinary(e, n) {
          return new n9().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new n9().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new n9().fromJsonString(e, n);
        }
        static equals(e, n) {
          return N.w.util.equals(n9, e, n);
        }
        constructor(e) {
          super(),
            (this.authUid = ""),
            (this.teamId = ""),
            (this.hasCascadeSeat = !1),
            N.w.util.initPartial(e, this);
        }
      }
      (n9.runtime = N.w),
        (n9.typeName = "exa.seat_management_pb.UserTeamDetails"),
        (n9.fields = N.w.util.newFieldList(() => [
          {
            no: 1,
            name: "auth_uid",
            kind: "scalar",
            T: 9,
          },
          {
            no: 2,
            name: "team_id",
            kind: "scalar",
            T: 9,
          },
          {
            no: 3,
            name: "has_cascade_seat",
            kind: "scalar",
            T: 8,
          },
        ]));
      class n3 extends C.v {
        static fromBinary(e, n) {
          return new n3().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new n3().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new n3().fromJsonString(e, n);
        }
        static equals(e, n) {
          return N.w.util.equals(n3, e, n);
        }
        constructor(e) {
          super(), N.w.util.initPartial(e, this);
        }
      }
      (n3.runtime = N.w),
        (n3.typeName = "exa.seat_management_pb.BulkEditUserApprovalsResponse"),
        (n3.fields = N.w.util.newFieldList(() => []));
      class n4 extends C.v {
        static fromBinary(e, n) {
          return new n4().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new n4().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new n4().fromJsonString(e, n);
        }
        static equals(e, n) {
          return N.w.util.equals(n4, e, n);
        }
        constructor(e) {
          super(),
            (this.secret = ""),
            (this.teamName = ""),
            (this.emails = []),
            (this.approvalType = 0),
            (this.approve = !1),
            N.w.util.initPartial(e, this);
        }
      }
      (n4.runtime = N.w),
        (n4.typeName =
          "exa.seat_management_pb.BulkEditUserApprovalsInternalRequest"),
        (n4.fields = N.w.util.newFieldList(() => [
          {
            no: 1,
            name: "secret",
            kind: "scalar",
            T: 9,
          },
          {
            no: 2,
            name: "team_name",
            kind: "scalar",
            T: 9,
          },
          {
            no: 3,
            name: "emails",
            kind: "scalar",
            T: 9,
            repeated: !0,
          },
          {
            no: 4,
            name: "approval_type",
            kind: "enum",
            T: N.w.getEnumType(d),
          },
          {
            no: 5,
            name: "approve",
            kind: "scalar",
            T: 8,
          },
        ]));
      class n5 extends C.v {
        static fromBinary(e, n) {
          return new n5().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new n5().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new n5().fromJsonString(e, n);
        }
        static equals(e, n) {
          return N.w.util.equals(n5, e, n);
        }
        constructor(e) {
          super(), N.w.util.initPartial(e, this);
        }
      }
      (n5.runtime = N.w),
        (n5.typeName =
          "exa.seat_management_pb.BulkEditUserApprovalsInternalResponse"),
        (n5.fields = N.w.util.newFieldList(() => []));
      class n8 extends C.v {
        static fromBinary(e, n) {
          return new n8().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new n8().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new n8().fromJsonString(e, n);
        }
        static equals(e, n) {
          return N.w.util.equals(n8, e, n);
        }
        constructor(e) {
          super(), (this.authToken = ""), N.w.util.initPartial(e, this);
        }
      }
      (n8.runtime = N.w),
        (n8.typeName = "exa.seat_management_pb.GetTeamSettingsRequest"),
        (n8.fields = N.w.util.newFieldList(() => [
          {
            no: 1,
            name: "auth_token",
            kind: "scalar",
            T: 9,
          },
        ]));
      class n6 extends C.v {
        static fromBinary(e, n) {
          return new n6().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new n6().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new n6().fromJsonString(e, n);
        }
        static equals(e, n) {
          return N.w.util.equals(n6, e, n);
        }
        constructor(e) {
          super(),
            (this.cascadeWebSearchEnabled = !1),
            (this.canUpdateCascadeWebSearchEnabled = !1),
            N.w.util.initPartial(e, this);
        }
      }
      (n6.runtime = N.w),
        (n6.typeName = "exa.seat_management_pb.GetTeamSettingsResponse"),
        (n6.fields = N.w.util.newFieldList(() => [
          {
            no: 1,
            name: "cascade_web_search_enabled",
            kind: "scalar",
            T: 8,
          },
          {
            no: 2,
            name: "can_update_cascade_web_search_enabled",
            kind: "scalar",
            T: 8,
          },
        ]));
      class n7 extends C.v {
        static fromBinary(e, n) {
          return new n7().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new n7().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new n7().fromJsonString(e, n);
        }
        static equals(e, n) {
          return N.w.util.equals(n7, e, n);
        }
        constructor(e) {
          super(),
            (this.authToken = ""),
            (this.cascadeWebSearchEnabled = !1),
            N.w.util.initPartial(e, this);
        }
      }
      (n7.runtime = N.w),
        (n7.typeName =
          "exa.seat_management_pb.UpdateCascadeWebSearchEnabledRequest"),
        (n7.fields = N.w.util.newFieldList(() => [
          {
            no: 1,
            name: "auth_token",
            kind: "scalar",
            T: 9,
          },
          {
            no: 2,
            name: "cascade_web_search_enabled",
            kind: "scalar",
            T: 8,
          },
        ]));
      class te extends C.v {
        static fromBinary(e, n) {
          return new te().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new te().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new te().fromJsonString(e, n);
        }
        static equals(e, n) {
          return N.w.util.equals(te, e, n);
        }
        constructor(e) {
          super(), N.w.util.initPartial(e, this);
        }
      }
      (te.runtime = N.w),
        (te.typeName =
          "exa.seat_management_pb.UpdateCascadeWebSearchEnabledResponse"),
        (te.fields = N.w.util.newFieldList(() => []));
      class tn extends C.v {
        static fromBinary(e, n) {
          return new tn().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new tn().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new tn().fromJsonString(e, n);
        }
        static equals(e, n) {
          return N.w.util.equals(tn, e, n);
        }
        constructor(e) {
          super(),
            (this.authToken = ""),
            (this.permission = I.y3$.UNSPECIFIED),
            N.w.util.initPartial(e, this);
        }
      }
      (tn.runtime = N.w),
        (tn.typeName = "exa.seat_management_pb.GetGroupsRequest"),
        (tn.fields = N.w.util.newFieldList(() => [
          {
            no: 1,
            name: "auth_token",
            kind: "scalar",
            T: 9,
          },
          {
            no: 2,
            name: "permission",
            kind: "enum",
            T: N.w.getEnumType(I.y3$),
          },
        ]));
      class tt extends C.v {
        static fromBinary(e, n) {
          return new tt().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new tt().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new tt().fromJsonString(e, n);
        }
        static equals(e, n) {
          return N.w.util.equals(tt, e, n);
        }
        constructor(e) {
          super(),
            (this.id = ""),
            (this.name = ""),
            N.w.util.initPartial(e, this);
        }
      }
      (tt.runtime = N.w),
        (tt.typeName = "exa.seat_management_pb.Group"),
        (tt.fields = N.w.util.newFieldList(() => [
          {
            no: 1,
            name: "id",
            kind: "scalar",
            T: 9,
          },
          {
            no: 2,
            name: "name",
            kind: "scalar",
            T: 9,
          },
        ]));
      class ta extends C.v {
        static fromBinary(e, n) {
          return new ta().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new ta().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new ta().fromJsonString(e, n);
        }
        static equals(e, n) {
          return N.w.util.equals(ta, e, n);
        }
        constructor(e) {
          super(), (this.groups = []), N.w.util.initPartial(e, this);
        }
      }
      (ta.runtime = N.w),
        (ta.typeName = "exa.seat_management_pb.GetGroupsResponse"),
        (ta.fields = N.w.util.newFieldList(() => [
          {
            no: 1,
            name: "groups",
            kind: "message",
            T: tt,
            repeated: !0,
          },
        ]));
      class tr extends C.v {
        static fromBinary(e, n) {
          return new tr().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new tr().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new tr().fromJsonString(e, n);
        }
        static equals(e, n) {
          return N.w.util.equals(tr, e, n);
        }
        constructor(e) {
          super(),
            (this.authToken = ""),
            (this.name = ""),
            (this.role = ""),
            (this.groupId = ""),
            N.w.util.initPartial(e, this);
        }
      }
      (tr.runtime = N.w),
        (tr.typeName = "exa.seat_management_pb.CreateTeamApiSecretRequest"),
        (tr.fields = N.w.util.newFieldList(() => [
          {
            no: 1,
            name: "auth_token",
            kind: "scalar",
            T: 9,
          },
          {
            no: 2,
            name: "name",
            kind: "scalar",
            T: 9,
          },
          {
            no: 3,
            name: "role",
            kind: "scalar",
            T: 9,
          },
          {
            no: 4,
            name: "group_id",
            kind: "scalar",
            T: 9,
          },
        ]));
      class ti extends C.v {
        static fromBinary(e, n) {
          return new ti().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new ti().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new ti().fromJsonString(e, n);
        }
        static equals(e, n) {
          return N.w.util.equals(ti, e, n);
        }
        constructor(e) {
          super(), (this.secret = ""), N.w.util.initPartial(e, this);
        }
      }
      (ti.runtime = N.w),
        (ti.typeName = "exa.seat_management_pb.CreateTeamApiSecretResponse"),
        (ti.fields = N.w.util.newFieldList(() => [
          {
            no: 1,
            name: "secret",
            kind: "scalar",
            T: 9,
          },
        ]));
      class ts extends C.v {
        static fromBinary(e, n) {
          return new ts().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new ts().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new ts().fromJsonString(e, n);
        }
        static equals(e, n) {
          return N.w.util.equals(ts, e, n);
        }
        constructor(e) {
          super(),
            (this.authToken = ""),
            (this.serviceKeyId = ""),
            (this.name = ""),
            (this.role = ""),
            (this.groupId = ""),
            N.w.util.initPartial(e, this);
        }
      }
      (ts.runtime = N.w),
        (ts.typeName = "exa.seat_management_pb.UpdateTeamApiSecretRequest"),
        (ts.fields = N.w.util.newFieldList(() => [
          {
            no: 1,
            name: "auth_token",
            kind: "scalar",
            T: 9,
          },
          {
            no: 2,
            name: "service_key_id",
            kind: "scalar",
            T: 9,
          },
          {
            no: 3,
            name: "name",
            kind: "scalar",
            T: 9,
          },
          {
            no: 4,
            name: "role",
            kind: "scalar",
            T: 9,
          },
          {
            no: 5,
            name: "group_id",
            kind: "scalar",
            T: 9,
          },
        ]));
      class to extends C.v {
        static fromBinary(e, n) {
          return new to().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new to().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new to().fromJsonString(e, n);
        }
        static equals(e, n) {
          return N.w.util.equals(to, e, n);
        }
        constructor(e) {
          super(), N.w.util.initPartial(e, this);
        }
      }
      (to.runtime = N.w),
        (to.typeName = "exa.seat_management_pb.UpdateTeamApiSecretResponse"),
        (to.fields = N.w.util.newFieldList(() => []));
      class t_ extends C.v {
        static fromBinary(e, n) {
          return new t_().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new t_().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new t_().fromJsonString(e, n);
        }
        static equals(e, n) {
          return N.w.util.equals(t_, e, n);
        }
        constructor(e) {
          super(), (this.authToken = ""), N.w.util.initPartial(e, this);
        }
      }
      (t_.runtime = N.w),
        (t_.typeName = "exa.seat_management_pb.GetAllTeamApiSecretsRequest"),
        (t_.fields = N.w.util.newFieldList(() => [
          {
            no: 1,
            name: "auth_token",
            kind: "scalar",
            T: 9,
          },
        ]));
      class tm extends C.v {
        static fromBinary(e, n) {
          return new tm().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new tm().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new tm().fromJsonString(e, n);
        }
        static equals(e, n) {
          return N.w.util.equals(tm, e, n);
        }
        constructor(e) {
          super(),
            (this.id = ""),
            (this.name = ""),
            (this.roleId = ""),
            (this.groupId = ""),
            N.w.util.initPartial(e, this);
        }
      }
      (tm.runtime = N.w),
        (tm.typeName = "exa.seat_management_pb.TeamApiSecret"),
        (tm.fields = N.w.util.newFieldList(() => [
          {
            no: 1,
            name: "id",
            kind: "scalar",
            T: 9,
          },
          {
            no: 2,
            name: "name",
            kind: "scalar",
            T: 9,
          },
          {
            no: 3,
            name: "created_at",
            kind: "message",
            T: w.E,
          },
          {
            no: 4,
            name: "role_id",
            kind: "scalar",
            T: 9,
          },
          {
            no: 5,
            name: "group_id",
            kind: "scalar",
            T: 9,
          },
        ]));
      class tE extends C.v {
        static fromBinary(e, n) {
          return new tE().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new tE().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new tE().fromJsonString(e, n);
        }
        static equals(e, n) {
          return N.w.util.equals(tE, e, n);
        }
        constructor(e) {
          super(), (this.secrets = []), N.w.util.initPartial(e, this);
        }
      }
      (tE.runtime = N.w),
        (tE.typeName = "exa.seat_management_pb.GetAllTeamApiSecretsResponse"),
        (tE.fields = N.w.util.newFieldList(() => [
          {
            no: 1,
            name: "secrets",
            kind: "message",
            T: tm,
            repeated: !0,
          },
        ]));
      class tu extends C.v {
        static fromBinary(e, n) {
          return new tu().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new tu().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new tu().fromJsonString(e, n);
        }
        static equals(e, n) {
          return N.w.util.equals(tu, e, n);
        }
        constructor(e) {
          super(),
            (this.authToken = ""),
            (this.secretId = ""),
            N.w.util.initPartial(e, this);
        }
      }
      (tu.runtime = N.w),
        (tu.typeName = "exa.seat_management_pb.DeleteTeamApiSecretRequest"),
        (tu.fields = N.w.util.newFieldList(() => [
          {
            no: 1,
            name: "auth_token",
            kind: "scalar",
            T: 9,
          },
          {
            no: 2,
            name: "secret_id",
            kind: "scalar",
            T: 9,
          },
        ]));
      class tl extends C.v {
        static fromBinary(e, n) {
          return new tl().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new tl().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new tl().fromJsonString(e, n);
        }
        static equals(e, n) {
          return N.w.util.equals(tl, e, n);
        }
        constructor(e) {
          super(), N.w.util.initPartial(e, this);
        }
      }
      (tl.runtime = N.w),
        (tl.typeName = "exa.seat_management_pb.DeleteTeamApiSecretResponse"),
        (tl.fields = N.w.util.newFieldList(() => []));
      class tc extends C.v {
        static fromBinary(e, n) {
          return new tc().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new tc().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new tc().fromJsonString(e, n);
        }
        static equals(e, n) {
          return N.w.util.equals(tc, e, n);
        }
        constructor(e) {
          super(), (this.apiKey = ""), N.w.util.initPartial(e, this);
        }
      }
      (tc.runtime = N.w),
        (tc.typeName = "exa.seat_management_pb.GetUserNotificationsRequest"),
        (tc.fields = N.w.util.newFieldList(() => [
          {
            no: 1,
            name: "api_key",
            kind: "scalar",
            T: 9,
          },
        ]));
      class tT extends C.v {
        static fromBinary(e, n) {
          return new tT().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new tT().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new tT().fromJsonString(e, n);
        }
        static equals(e, n) {
          return N.w.util.equals(tT, e, n);
        }
        constructor(e) {
          super(), N.w.util.initPartial(e, this);
        }
      }
      (tT.runtime = N.w),
        (tT.typeName = "exa.seat_management_pb.GetUserNotificationsResponse"),
        (tT.fields = N.w.util.newFieldList(() => [
          {
            no: 1,
            name: "team_preapproval_metadata",
            kind: "message",
            T: td,
          },
        ]));
      class td extends C.v {
        static fromBinary(e, n) {
          return new td().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new td().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new td().fromJsonString(e, n);
        }
        static equals(e, n) {
          return N.w.util.equals(td, e, n);
        }
        constructor(e) {
          super(),
            (this.adminName = ""),
            (this.teamName = ""),
            N.w.util.initPartial(e, this);
        }
      }
      (td.runtime = N.w),
        (td.typeName =
          "exa.seat_management_pb.GetUserNotificationsResponse.TeamPreapprovalMetadata"),
        (td.fields = N.w.util.newFieldList(() => [
          {
            no: 1,
            name: "admin_name",
            kind: "scalar",
            T: 9,
          },
          {
            no: 2,
            name: "team_name",
            kind: "scalar",
            T: 9,
          },
          {
            no: 3,
            name: "created_at",
            kind: "message",
            T: w.E,
          },
        ]));
      class tS extends C.v {
        static fromBinary(e, n) {
          return new tS().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new tS().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new tS().fromJsonString(e, n);
        }
        static equals(e, n) {
          return N.w.util.equals(tS, e, n);
        }
        constructor(e) {
          super(),
            (this.authToken = ""),
            (this.githubRefreshToken = ""),
            N.w.util.initPartial(e, this);
        }
      }
      (tS.runtime = N.w),
        (tS.typeName = "exa.seat_management_pb.ConnectGithubAccountRequest"),
        (tS.fields = N.w.util.newFieldList(() => [
          {
            no: 1,
            name: "auth_token",
            kind: "scalar",
            T: 9,
          },
          {
            no: 2,
            name: "github_refresh_token",
            kind: "scalar",
            T: 9,
          },
          {
            no: 3,
            name: "github_refresh_token_expires_at",
            kind: "message",
            T: w.E,
          },
        ]));
      class tA extends C.v {
        static fromBinary(e, n) {
          return new tA().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new tA().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new tA().fromJsonString(e, n);
        }
        static equals(e, n) {
          return N.w.util.equals(tA, e, n);
        }
        constructor(e) {
          super(), (this.githubAccessToken = ""), N.w.util.initPartial(e, this);
        }
      }
      (tA.runtime = N.w),
        (tA.typeName = "exa.seat_management_pb.ConnectGithubAccountResponse"),
        (tA.fields = N.w.util.newFieldList(() => [
          {
            no: 1,
            name: "github_access_token",
            kind: "scalar",
            T: 9,
          },
          {
            no: 2,
            name: "github_access_token_expires_at",
            kind: "message",
            T: w.E,
          },
        ]));
      class tO extends C.v {
        static fromBinary(e, n) {
          return new tO().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new tO().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new tO().fromJsonString(e, n);
        }
        static equals(e, n) {
          return N.w.util.equals(tO, e, n);
        }
        constructor(e) {
          super(), (this.authToken = ""), N.w.util.initPartial(e, this);
        }
      }
      (tO.runtime = N.w),
        (tO.typeName = "exa.seat_management_pb.DisconnectGithubAccountRequest"),
        (tO.fields = N.w.util.newFieldList(() => [
          {
            no: 1,
            name: "auth_token",
            kind: "scalar",
            T: 9,
          },
        ]));
      class tN extends C.v {
        static fromBinary(e, n) {
          return new tN().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new tN().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new tN().fromJsonString(e, n);
        }
        static equals(e, n) {
          return N.w.util.equals(tN, e, n);
        }
        constructor(e) {
          super(), N.w.util.initPartial(e, this);
        }
      }
      (tN.runtime = N.w),
        (tN.typeName =
          "exa.seat_management_pb.DisconnectGithubAccountResponse"),
        (tN.fields = N.w.util.newFieldList(() => []));
      class tC extends C.v {
        static fromBinary(e, n) {
          return new tC().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new tC().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new tC().fromJsonString(e, n);
        }
        static equals(e, n) {
          return N.w.util.equals(tC, e, n);
        }
        constructor(e) {
          super(), (this.authToken = ""), N.w.util.initPartial(e, this);
        }
      }
      (tC.runtime = N.w),
        (tC.typeName = "exa.seat_management_pb.GetGitHubAccountStatusRequest"),
        (tC.fields = N.w.util.newFieldList(() => [
          {
            no: 1,
            name: "auth_token",
            kind: "scalar",
            T: 9,
          },
        ]));
      class tf extends C.v {
        static fromBinary(e, n) {
          return new tf().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new tf().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new tf().fromJsonString(e, n);
        }
        static equals(e, n) {
          return N.w.util.equals(tf, e, n);
        }
        constructor(e) {
          super(),
            (this.connected = !1),
            (this.username = ""),
            N.w.util.initPartial(e, this);
        }
      }
      (tf.runtime = N.w),
        (tf.typeName = "exa.seat_management_pb.GetGitHubAccountStatusResponse"),
        (tf.fields = N.w.util.newFieldList(() => [
          {
            no: 1,
            name: "connected",
            kind: "scalar",
            T: 8,
          },
          {
            no: 2,
            name: "username",
            kind: "scalar",
            T: 9,
          },
          {
            no: 3,
            name: "expires_at",
            kind: "message",
            T: w.E,
          },
        ]));
      class tw extends C.v {
        static fromBinary(e, n) {
          return new tw().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new tw().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new tw().fromJsonString(e, n);
        }
        static equals(e, n) {
          return N.w.util.equals(tw, e, n);
        }
        constructor(e) {
          super(), (this.authToken = ""), N.w.util.initPartial(e, this);
        }
      }
      (tw.runtime = N.w),
        (tw.typeName = "exa.seat_management_pb.GetGitHubAccessTokenRequest"),
        (tw.fields = N.w.util.newFieldList(() => [
          {
            no: 1,
            name: "auth_token",
            kind: "scalar",
            T: 9,
          },
        ]));
      class tI extends C.v {
        static fromBinary(e, n) {
          return new tI().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new tI().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new tI().fromJsonString(e, n);
        }
        static equals(e, n) {
          return N.w.util.equals(tI, e, n);
        }
        constructor(e) {
          super(), (this.accessToken = ""), N.w.util.initPartial(e, this);
        }
      }
      (tI.runtime = N.w),
        (tI.typeName = "exa.seat_management_pb.GetGitHubAccessTokenResponse"),
        (tI.fields = N.w.util.newFieldList(() => [
          {
            no: 1,
            name: "access_token",
            kind: "scalar",
            T: 9,
          },
          {
            no: 2,
            name: "expires_at",
            kind: "message",
            T: w.E,
          },
        ]));
      class tR extends C.v {
        static fromBinary(e, n) {
          return new tR().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new tR().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new tR().fromJsonString(e, n);
        }
        static equals(e, n) {
          return N.w.util.equals(tR, e, n);
        }
        constructor(e) {
          super(),
            (this.authToken = ""),
            (this.netlifyAccessToken = ""),
            (this.netlifyUserId = ""),
            N.w.util.initPartial(e, this);
        }
      }
      (tR.runtime = N.w),
        (tR.typeName = "exa.seat_management_pb.ConnectNetlifyAccountRequest"),
        (tR.fields = N.w.util.newFieldList(() => [
          {
            no: 1,
            name: "auth_token",
            kind: "scalar",
            T: 9,
          },
          {
            no: 2,
            name: "netlify_access_token",
            kind: "scalar",
            T: 9,
          },
          {
            no: 3,
            name: "expires_at",
            kind: "message",
            T: w.E,
          },
          {
            no: 4,
            name: "netlify_user_id",
            kind: "scalar",
            T: 9,
          },
        ]));
      class tL extends C.v {
        static fromBinary(e, n) {
          return new tL().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new tL().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new tL().fromJsonString(e, n);
        }
        static equals(e, n) {
          return N.w.util.equals(tL, e, n);
        }
        constructor(e) {
          super(), N.w.util.initPartial(e, this);
        }
      }
      (tL.runtime = N.w),
        (tL.typeName = "exa.seat_management_pb.ConnectNetlifyAccountResponse"),
        (tL.fields = N.w.util.newFieldList(() => []));
      class tp extends C.v {
        static fromBinary(e, n) {
          return new tp().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new tp().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new tp().fromJsonString(e, n);
        }
        static equals(e, n) {
          return N.w.util.equals(tp, e, n);
        }
        constructor(e) {
          super(), (this.authToken = ""), N.w.util.initPartial(e, this);
        }
      }
      (tp.runtime = N.w),
        (tp.typeName =
          "exa.seat_management_pb.DisconnectNetlifyAccountRequest"),
        (tp.fields = N.w.util.newFieldList(() => [
          {
            no: 1,
            name: "auth_token",
            kind: "scalar",
            T: 9,
          },
        ]));
      class tD extends C.v {
        static fromBinary(e, n) {
          return new tD().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new tD().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new tD().fromJsonString(e, n);
        }
        static equals(e, n) {
          return N.w.util.equals(tD, e, n);
        }
        constructor(e) {
          super(), N.w.util.initPartial(e, this);
        }
      }
      (tD.runtime = N.w),
        (tD.typeName =
          "exa.seat_management_pb.DisconnectNetlifyAccountResponse"),
        (tD.fields = N.w.util.newFieldList(() => []));
      class tP extends C.v {
        static fromBinary(e, n) {
          return new tP().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new tP().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new tP().fromJsonString(e, n);
        }
        static equals(e, n) {
          return N.w.util.equals(tP, e, n);
        }
        constructor(e) {
          super(), (this.authToken = ""), N.w.util.initPartial(e, this);
        }
      }
      (tP.runtime = N.w),
        (tP.typeName = "exa.seat_management_pb.GetNetlifyAccountStatusRequest"),
        (tP.fields = N.w.util.newFieldList(() => [
          {
            no: 1,
            name: "auth_token",
            kind: "scalar",
            T: 9,
          },
        ]));
      class tM extends C.v {
        static fromBinary(e, n) {
          return new tM().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new tM().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new tM().fromJsonString(e, n);
        }
        static equals(e, n) {
          return N.w.util.equals(tM, e, n);
        }
        constructor(e) {
          super(),
            (this.connected = !1),
            (this.netlifyUserId = ""),
            N.w.util.initPartial(e, this);
        }
      }
      (tM.runtime = N.w),
        (tM.typeName =
          "exa.seat_management_pb.GetNetlifyAccountStatusResponse"),
        (tM.fields = N.w.util.newFieldList(() => [
          {
            no: 1,
            name: "connected",
            kind: "scalar",
            T: 8,
          },
          {
            no: 2,
            name: "netlify_user_id",
            kind: "scalar",
            T: 9,
          },
          {
            no: 3,
            name: "expires_at",
            kind: "message",
            T: w.E,
          },
        ]));
      class ty extends C.v {
        static fromBinary(e, n) {
          return new ty().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new ty().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new ty().fromJsonString(e, n);
        }
        static equals(e, n) {
          return N.w.util.equals(ty, e, n);
        }
        constructor(e) {
          super(),
            (this.authToken = ""),
            (this.apiKey = ""),
            (this.disableCodeiumAccess = !1),
            N.w.util.initPartial(e, this);
        }
      }
      (ty.runtime = N.w),
        (ty.typeName = "exa.seat_management_pb.UpdateCodeiumAccessRequest"),
        (ty.fields = N.w.util.newFieldList(() => [
          {
            no: 1,
            name: "auth_token",
            kind: "scalar",
            T: 9,
          },
          {
            no: 2,
            name: "api_key",
            kind: "scalar",
            T: 9,
          },
          {
            no: 3,
            name: "disable_codeium_access",
            kind: "scalar",
            T: 8,
          },
        ]));
      class th extends C.v {
        static fromBinary(e, n) {
          return new th().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new th().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new th().fromJsonString(e, n);
        }
        static equals(e, n) {
          return N.w.util.equals(th, e, n);
        }
        constructor(e) {
          super(), N.w.util.initPartial(e, this);
        }
      }
      (th.runtime = N.w),
        (th.typeName = "exa.seat_management_pb.UpdateCodeiumAccessResponse"),
        (th.fields = N.w.util.newFieldList(() => []));
      class tU extends C.v {
        static fromBinary(e, n) {
          return new tU().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new tU().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new tU().fromJsonString(e, n);
        }
        static equals(e, n) {
          return N.w.util.equals(tU, e, n);
        }
        constructor(e) {
          super(),
            (this.authToken = ""),
            (this.name = ""),
            (this.permissions = []),
            N.w.util.initPartial(e, this);
        }
      }
      (tU.runtime = N.w),
        (tU.typeName = "exa.seat_management_pb.CreateRoleRequest"),
        (tU.fields = N.w.util.newFieldList(() => [
          {
            no: 1,
            name: "auth_token",
            kind: "scalar",
            T: 9,
          },
          {
            no: 2,
            name: "name",
            kind: "scalar",
            T: 9,
          },
          {
            no: 3,
            name: "permissions",
            kind: "enum",
            T: N.w.getEnumType(I.y3$),
            repeated: !0,
          },
        ]));
      class tg extends C.v {
        static fromBinary(e, n) {
          return new tg().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new tg().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new tg().fromJsonString(e, n);
        }
        static equals(e, n) {
          return N.w.util.equals(tg, e, n);
        }
        constructor(e) {
          super(), N.w.util.initPartial(e, this);
        }
      }
      (tg.runtime = N.w),
        (tg.typeName = "exa.seat_management_pb.CreateRoleResponse"),
        (tg.fields = N.w.util.newFieldList(() => []));
      class tJ extends C.v {
        static fromBinary(e, n) {
          return new tJ().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new tJ().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new tJ().fromJsonString(e, n);
        }
        static equals(e, n) {
          return N.w.util.equals(tJ, e, n);
        }
        constructor(e) {
          super(),
            (this.authToken = ""),
            (this.roleId = ""),
            N.w.util.initPartial(e, this);
        }
      }
      (tJ.runtime = N.w),
        (tJ.typeName = "exa.seat_management_pb.DeleteRoleRequest"),
        (tJ.fields = N.w.util.newFieldList(() => [
          {
            no: 1,
            name: "auth_token",
            kind: "scalar",
            T: 9,
          },
          {
            no: 2,
            name: "role_id",
            kind: "scalar",
            T: 9,
          },
        ]));
      class tk extends C.v {
        static fromBinary(e, n) {
          return new tk().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new tk().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new tk().fromJsonString(e, n);
        }
        static equals(e, n) {
          return N.w.util.equals(tk, e, n);
        }
        constructor(e) {
          super(), N.w.util.initPartial(e, this);
        }
      }
      (tk.runtime = N.w),
        (tk.typeName = "exa.seat_management_pb.DeleteRoleResponse"),
        (tk.fields = N.w.util.newFieldList(() => []));
      class tB extends C.v {
        static fromBinary(e, n) {
          return new tB().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new tB().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new tB().fromJsonString(e, n);
        }
        static equals(e, n) {
          return N.w.util.equals(tB, e, n);
        }
        constructor(e) {
          super(),
            (this.authToken = ""),
            (this.roleId = ""),
            (this.permissions = []),
            N.w.util.initPartial(e, this);
        }
      }
      (tB.runtime = N.w),
        (tB.typeName = "exa.seat_management_pb.UpdateRoleRequest"),
        (tB.fields = N.w.util.newFieldList(() => [
          {
            no: 1,
            name: "auth_token",
            kind: "scalar",
            T: 9,
          },
          {
            no: 2,
            name: "role_id",
            kind: "scalar",
            T: 9,
          },
          {
            no: 3,
            name: "permissions",
            kind: "enum",
            T: N.w.getEnumType(I.y3$),
            repeated: !0,
          },
        ]));
      class tG extends C.v {
        static fromBinary(e, n) {
          return new tG().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new tG().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new tG().fromJsonString(e, n);
        }
        static equals(e, n) {
          return N.w.util.equals(tG, e, n);
        }
        constructor(e) {
          super(), N.w.util.initPartial(e, this);
        }
      }
      (tG.runtime = N.w),
        (tG.typeName = "exa.seat_management_pb.UpdateRoleResponse"),
        (tG.fields = N.w.util.newFieldList(() => []));
      class tF extends C.v {
        static fromBinary(e, n) {
          return new tF().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new tF().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new tF().fromJsonString(e, n);
        }
        static equals(e, n) {
          return N.w.util.equals(tF, e, n);
        }
        constructor(e) {
          super(), (this.authToken = ""), N.w.util.initPartial(e, this);
        }
      }
      (tF.runtime = N.w),
        (tF.typeName = "exa.seat_management_pb.GetRolesRequest"),
        (tF.fields = N.w.util.newFieldList(() => [
          {
            no: 1,
            name: "auth_token",
            kind: "scalar",
            T: 9,
          },
        ]));
      class tx extends C.v {
        static fromBinary(e, n) {
          return new tx().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new tx().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new tx().fromJsonString(e, n);
        }
        static equals(e, n) {
          return N.w.util.equals(tx, e, n);
        }
        constructor(e) {
          super(),
            (this.roleId = ""),
            (this.name = ""),
            (this.permissions = []),
            (this.mutable = !1),
            N.w.util.initPartial(e, this);
        }
      }
      (tx.runtime = N.w),
        (tx.typeName = "exa.seat_management_pb.Role"),
        (tx.fields = N.w.util.newFieldList(() => [
          {
            no: 1,
            name: "role_id",
            kind: "scalar",
            T: 9,
          },
          {
            no: 2,
            name: "name",
            kind: "scalar",
            T: 9,
          },
          {
            no: 3,
            name: "permissions",
            kind: "enum",
            T: N.w.getEnumType(I.y3$),
            repeated: !0,
          },
          {
            no: 4,
            name: "mutable",
            kind: "scalar",
            T: 8,
          },
        ]));
      class tq extends C.v {
        static fromBinary(e, n) {
          return new tq().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new tq().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new tq().fromJsonString(e, n);
        }
        static equals(e, n) {
          return N.w.util.equals(tq, e, n);
        }
        constructor(e) {
          super(), (this.roles = []), N.w.util.initPartial(e, this);
        }
      }
      (tq.runtime = N.w),
        (tq.typeName = "exa.seat_management_pb.GetRolesResponse"),
        (tq.fields = N.w.util.newFieldList(() => [
          {
            no: 1,
            name: "roles",
            kind: "message",
            T: tx,
            repeated: !0,
          },
        ]));
      class tb extends C.v {
        static fromBinary(e, n) {
          return new tb().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new tb().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new tb().fromJsonString(e, n);
        }
        static equals(e, n) {
          return N.w.util.equals(tb, e, n);
        }
        constructor(e) {
          super(), N.w.util.initPartial(e, this);
        }
      }
      (tb.runtime = N.w),
        (tb.typeName = "exa.seat_management_pb.GetMucsInfoRequest"),
        (tb.fields = N.w.util.newFieldList(() => []));
      class tv extends C.v {
        static fromBinary(e, n) {
          return new tv().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new tv().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new tv().fromJsonString(e, n);
        }
        static equals(e, n) {
          return N.w.util.equals(tv, e, n);
        }
        constructor(e) {
          super(),
            (this.billingMonths = 0),
            (this.billingYears = 0),
            (this.mucsCharged = 0),
            (this.mucsDeducted = 0),
            N.w.util.initPartial(e, this);
        }
      }
      (tv.runtime = N.w),
        (tv.typeName = "exa.seat_management_pb.MonthlyMucsMessage"),
        (tv.fields = N.w.util.newFieldList(() => [
          {
            no: 1,
            name: "billing_months",
            kind: "scalar",
            T: 5,
          },
          {
            no: 2,
            name: "billing_years",
            kind: "scalar",
            T: 5,
          },
          {
            no: 3,
            name: "mucs_charged",
            kind: "scalar",
            T: 5,
          },
          {
            no: 4,
            name: "mucs_deducted",
            kind: "scalar",
            T: 5,
          },
        ]));
      class tH extends C.v {
        static fromBinary(e, n) {
          return new tH().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new tH().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new tH().fromJsonString(e, n);
        }
        static equals(e, n) {
          return N.w.util.equals(tH, e, n);
        }
        constructor(e) {
          super(),
            (this.mucsLeft = 0),
            (this.mucsUsed = 0),
            (this.isMucsEnabled = !1),
            (this.currentRegisteredUsers = 0),
            (this.currentHighWatermark = 0),
            (this.mucsTable = []),
            N.w.util.initPartial(e, this);
        }
      }
      (tH.runtime = N.w),
        (tH.typeName = "exa.seat_management_pb.GetMucsInfoResponse"),
        (tH.fields = N.w.util.newFieldList(() => [
          {
            no: 1,
            name: "mucs_left",
            kind: "scalar",
            T: 5,
          },
          {
            no: 2,
            name: "mucs_used",
            kind: "scalar",
            T: 5,
          },
          {
            no: 3,
            name: "is_mucs_enabled",
            kind: "scalar",
            T: 8,
          },
          {
            no: 4,
            name: "start_date",
            kind: "message",
            T: w.E,
          },
          {
            no: 5,
            name: "current_registered_users",
            kind: "scalar",
            T: 5,
          },
          {
            no: 6,
            name: "current_high_watermark",
            kind: "scalar",
            T: 5,
          },
          {
            no: 7,
            name: "mucs_table",
            kind: "message",
            T: tv,
            repeated: !0,
          },
        ]));
      class tV extends C.v {
        static fromBinary(e, n) {
          return new tV().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new tV().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new tV().fromJsonString(e, n);
        }
        static equals(e, n) {
          return N.w.util.equals(tV, e, n);
        }
        constructor(e) {
          super(), (this.authToken = ""), N.w.util.initPartial(e, this);
        }
      }
      (tV.runtime = N.w),
        (tV.typeName = "exa.seat_management_pb.GetCascadeAnalyticsRequest"),
        (tV.fields = N.w.util.newFieldList(() => [
          {
            no: 1,
            name: "auth_token",
            kind: "scalar",
            T: 9,
          },
          {
            no: 2,
            name: "start_timestamp",
            kind: "message",
            T: w.E,
          },
          {
            no: 3,
            name: "end_timestamp",
            kind: "message",
            T: w.E,
          },
        ]));
      class tW extends C.v {
        static fromBinary(e, n) {
          return new tW().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new tW().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new tW().fromJsonString(e, n);
        }
        static equals(e, n) {
          return N.w.util.equals(tW, e, n);
        }
        constructor(e) {
          super(),
            (this.usedPromptCredits = 0),
            (this.usedFlowCredits = 0),
            (this.estimatedMonthlyPrompts = 0),
            (this.estimatedMonthlyFlows = 0),
            (this.purchasedCredits = f.q.zero),
            N.w.util.initPartial(e, this);
        }
      }
      (tW.runtime = N.w),
        (tW.typeName = "exa.seat_management_pb.GetCascadeAnalyticsResponse"),
        (tW.fields = N.w.util.newFieldList(() => [
          {
            no: 1,
            name: "used_prompt_credits",
            kind: "scalar",
            T: 5,
          },
          {
            no: 2,
            name: "used_flow_credits",
            kind: "scalar",
            T: 5,
          },
          {
            no: 3,
            name: "estimated_monthly_prompts",
            kind: "scalar",
            T: 5,
          },
          {
            no: 4,
            name: "estimated_monthly_flows",
            kind: "scalar",
            T: 5,
          },
          {
            no: 5,
            name: "purchased_credits",
            kind: "scalar",
            T: 3,
          },
        ]));
      class tK extends C.v {
        static fromBinary(e, n) {
          return new tK().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new tK().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new tK().fromJsonString(e, n);
        }
        static equals(e, n) {
          return N.w.util.equals(tK, e, n);
        }
        constructor(e) {
          super(), (this.authToken = ""), N.w.util.initPartial(e, this);
        }
      }
      (tK.runtime = N.w),
        (tK.typeName = "exa.seat_management_pb.GetPlanStatusRequest"),
        (tK.fields = N.w.util.newFieldList(() => [
          {
            no: 1,
            name: "auth_token",
            kind: "scalar",
            T: 9,
          },
        ]));
      class tX extends C.v {
        static fromBinary(e, n) {
          return new tX().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new tX().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new tX().fromJsonString(e, n);
        }
        static equals(e, n) {
          return N.w.util.equals(tX, e, n);
        }
        constructor(e) {
          super(), N.w.util.initPartial(e, this);
        }
      }
      (tX.runtime = N.w),
        (tX.typeName = "exa.seat_management_pb.GetPlanStatusResponse"),
        (tX.fields = N.w.util.newFieldList(() => [
          {
            no: 1,
            name: "plan_status",
            kind: "message",
            T: I.b5v,
          },
        ]));
      class tY extends C.v {
        static fromBinary(e, n) {
          return new tY().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new tY().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new tY().fromJsonString(e, n);
        }
        static equals(e, n) {
          return N.w.util.equals(tY, e, n);
        }
        constructor(e) {
          super(),
            (this.apiKey = ""),
            (this.email = ""),
            (this.name = ""),
            (this.totalMinutesCoded = 0),
            (this.codingPercentile = 0),
            (this.minutesCodingBiggestDay = 0),
            (this.autocompletesAccepted = 0),
            (this.cascadeMessagesSent = 0),
            (this.cascadeLinesWritten = 0),
            (this.longestStreak = 0),
            (this.mostProductiveDay = 0),
            N.w.util.initPartial(e, this);
        }
      }
      (tY.runtime = N.w),
        (tY.typeName = "exa.seat_management_pb.Wrapped2024"),
        (tY.fields = N.w.util.newFieldList(() => [
          {
            no: 1,
            name: "api_key",
            kind: "scalar",
            T: 9,
          },
          {
            no: 2,
            name: "email",
            kind: "scalar",
            T: 9,
          },
          {
            no: 3,
            name: "name",
            kind: "scalar",
            T: 9,
          },
          {
            no: 4,
            name: "total_minutes_coded",
            kind: "scalar",
            T: 5,
          },
          {
            no: 5,
            name: "coding_percentile",
            kind: "scalar",
            T: 1,
          },
          {
            no: 6,
            name: "biggest_coding_day",
            kind: "message",
            T: w.E,
          },
          {
            no: 7,
            name: "minutes_coding_biggest_day",
            kind: "scalar",
            T: 5,
          },
          {
            no: 8,
            name: "autocompletes_accepted",
            kind: "scalar",
            T: 5,
          },
          {
            no: 9,
            name: "cascade_messages_sent",
            kind: "scalar",
            T: 5,
          },
          {
            no: 10,
            name: "cascade_lines_written",
            kind: "scalar",
            T: 5,
          },
          {
            no: 11,
            name: "longest_streak",
            kind: "scalar",
            T: 5,
          },
          {
            no: 12,
            name: "most_productive_day",
            kind: "scalar",
            T: 5,
          },
        ]));
      class tQ extends C.v {
        static fromBinary(e, n) {
          return new tQ().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new tQ().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new tQ().fromJsonString(e, n);
        }
        static equals(e, n) {
          return N.w.util.equals(tQ, e, n);
        }
        constructor(e) {
          super(), (this.authToken = ""), N.w.util.initPartial(e, this);
        }
      }
      (tQ.runtime = N.w),
        (tQ.typeName = "exa.seat_management_pb.GetWrapped2024Request"),
        (tQ.fields = N.w.util.newFieldList(() => [
          {
            no: 1,
            name: "auth_token",
            kind: "scalar",
            T: 9,
          },
        ]));
      class tz extends C.v {
        static fromBinary(e, n) {
          return new tz().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new tz().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new tz().fromJsonString(e, n);
        }
        static equals(e, n) {
          return N.w.util.equals(tz, e, n);
        }
        constructor(e) {
          super(), N.w.util.initPartial(e, this);
        }
      }
      (tz.runtime = N.w),
        (tz.typeName = "exa.seat_management_pb.GetWrapped2024Response"),
        (tz.fields = N.w.util.newFieldList(() => [
          {
            no: 1,
            name: "wrapped_data",
            kind: "message",
            T: tY,
          },
        ]));
      class tj extends C.v {
        static fromBinary(e, n) {
          return new tj().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new tj().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new tj().fromJsonString(e, n);
        }
        static equals(e, n) {
          return N.w.util.equals(tj, e, n);
        }
        constructor(e) {
          super(),
            (this.teamId = ""),
            (this.numCredits = 0),
            (this.type = 0),
            (this.referralId = 0),
            (this.invoiceId = ""),
            (this.reason = {
              case: void 0,
            }),
            N.w.util.initPartial(e, this);
        }
      }
      (tj.runtime = N.w),
        (tj.typeName = "exa.seat_management_pb.FlexCreditChronicleEntry"),
        (tj.fields = N.w.util.newFieldList(() => [
          {
            no: 1,
            name: "team_id",
            kind: "scalar",
            T: 9,
          },
          {
            no: 2,
            name: "grant_date",
            kind: "message",
            T: w.E,
          },
          {
            no: 3,
            name: "num_credits",
            kind: "scalar",
            T: 5,
          },
          {
            no: 4,
            name: "type",
            kind: "enum",
            T: N.w.getEnumType(A),
          },
          {
            no: 5,
            name: "referral_id",
            kind: "scalar",
            T: 13,
          },
          {
            no: 6,
            name: "invoice_id",
            kind: "scalar",
            T: 9,
          },
          {
            no: 7,
            name: "referrer",
            kind: "message",
            T: tZ,
            oneof: "reason",
          },
          {
            no: 8,
            name: "avery",
            kind: "message",
            T: t$,
            oneof: "reason",
          },
          {
            no: 9,
            name: "purchase",
            kind: "message",
            T: t1,
            oneof: "reason",
          },
        ]));
      class tZ extends C.v {
        static fromBinary(e, n) {
          return new tZ().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new tZ().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new tZ().fromJsonString(e, n);
        }
        static equals(e, n) {
          return N.w.util.equals(tZ, e, n);
        }
        constructor(e) {
          super(),
            (this.userEmail = ""),
            (this.averyEmail = ""),
            N.w.util.initPartial(e, this);
        }
      }
      (tZ.runtime = N.w),
        (tZ.typeName = "exa.seat_management_pb.ReferrerReason"),
        (tZ.fields = N.w.util.newFieldList(() => [
          {
            no: 1,
            name: "user_email",
            kind: "scalar",
            T: 9,
          },
          {
            no: 2,
            name: "avery_email",
            kind: "scalar",
            T: 9,
          },
        ]));
      class t$ extends C.v {
        static fromBinary(e, n) {
          return new t$().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new t$().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new t$().fromJsonString(e, n);
        }
        static equals(e, n) {
          return N.w.util.equals(t$, e, n);
        }
        constructor(e) {
          super(),
            (this.userEmail = ""),
            (this.referrerEmail = ""),
            N.w.util.initPartial(e, this);
        }
      }
      (t$.runtime = N.w),
        (t$.typeName = "exa.seat_management_pb.AveryReason"),
        (t$.fields = N.w.util.newFieldList(() => [
          {
            no: 1,
            name: "user_email",
            kind: "scalar",
            T: 9,
          },
          {
            no: 2,
            name: "referrer_email",
            kind: "scalar",
            T: 9,
          },
        ]));
      class t1 extends C.v {
        static fromBinary(e, n) {
          return new t1().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new t1().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new t1().fromJsonString(e, n);
        }
        static equals(e, n) {
          return N.w.util.equals(t1, e, n);
        }
        constructor(e) {
          super(), (this.type = 0), N.w.util.initPartial(e, this);
        }
      }
      (t1.runtime = N.w),
        (t1.typeName = "exa.seat_management_pb.PurchaseReason"),
        (t1.fields = N.w.util.newFieldList(() => [
          {
            no: 1,
            name: "type",
            kind: "enum",
            T: N.w.getEnumType(O),
          },
        ]));
      class t2 extends C.v {
        static fromBinary(e, n) {
          return new t2().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new t2().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new t2().fromJsonString(e, n);
        }
        static equals(e, n) {
          return N.w.util.equals(t2, e, n);
        }
        constructor(e) {
          super(), (this.authToken = ""), N.w.util.initPartial(e, this);
        }
      }
      (t2.runtime = N.w),
        (t2.typeName = "exa.seat_management_pb.GetTeamCreditEntriesRequest"),
        (t2.fields = N.w.util.newFieldList(() => [
          {
            no: 1,
            name: "auth_token",
            kind: "scalar",
            T: 9,
          },
        ]));
      class t0 extends C.v {
        static fromBinary(e, n) {
          return new t0().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new t0().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new t0().fromJsonString(e, n);
        }
        static equals(e, n) {
          return N.w.util.equals(t0, e, n);
        }
        constructor(e) {
          super(), (this.entries = []), N.w.util.initPartial(e, this);
        }
      }
      (t0.runtime = N.w),
        (t0.typeName = "exa.seat_management_pb.GetTeamCreditEntriesResponse"),
        (t0.fields = N.w.util.newFieldList(() => [
          {
            no: 1,
            name: "entries",
            kind: "message",
            T: tj,
            repeated: !0,
          },
        ]));
      class t9 extends C.v {
        static fromBinary(e, n) {
          return new t9().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new t9().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new t9().fromJsonString(e, n);
        }
        static equals(e, n) {
          return N.w.util.equals(t9, e, n);
        }
        constructor(e) {
          super(),
            (this.phoneNumber = ""),
            (this.turnstileToken = ""),
            N.w.util.initPartial(e, this);
        }
      }
      (t9.runtime = N.w),
        (t9.typeName = "exa.seat_management_pb.SendPhoneVerificationRequest"),
        (t9.fields = N.w.util.newFieldList(() => [
          {
            no: 1,
            name: "phone_number",
            kind: "scalar",
            T: 9,
          },
          {
            no: 2,
            name: "turnstile_token",
            kind: "scalar",
            T: 9,
          },
        ]));
      class t3 extends C.v {
        static fromBinary(e, n) {
          return new t3().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new t3().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new t3().fromJsonString(e, n);
        }
        static equals(e, n) {
          return N.w.util.equals(t3, e, n);
        }
        constructor(e) {
          super(), N.w.util.initPartial(e, this);
        }
      }
      (t3.runtime = N.w),
        (t3.typeName = "exa.seat_management_pb.SendPhoneVerificationResponse"),
        (t3.fields = N.w.util.newFieldList(() => []));
      class t4 extends C.v {
        static fromBinary(e, n) {
          return new t4().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new t4().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new t4().fromJsonString(e, n);
        }
        static equals(e, n) {
          return N.w.util.equals(t4, e, n);
        }
        constructor(e) {
          super(),
            (this.firstName = ""),
            (this.email = ""),
            (this.turnstileToken = ""),
            N.w.util.initPartial(e, this);
        }
      }
      (t4.runtime = N.w),
        (t4.typeName = "exa.seat_management_pb.SendEmailVerificationRequest"),
        (t4.fields = N.w.util.newFieldList(() => [
          {
            no: 1,
            name: "first_name",
            kind: "scalar",
            T: 9,
          },
          {
            no: 2,
            name: "email",
            kind: "scalar",
            T: 9,
          },
          {
            no: 3,
            name: "turnstile_token",
            kind: "scalar",
            T: 9,
          },
        ]));
      class t5 extends C.v {
        static fromBinary(e, n) {
          return new t5().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new t5().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new t5().fromJsonString(e, n);
        }
        static equals(e, n) {
          return N.w.util.equals(t5, e, n);
        }
        constructor(e) {
          super(), N.w.util.initPartial(e, this);
        }
      }
      (t5.runtime = N.w),
        (t5.typeName = "exa.seat_management_pb.SendEmailVerificationResponse"),
        (t5.fields = N.w.util.newFieldList(() => []));
      class t8 extends C.v {
        static fromBinary(e, n) {
          return new t8().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new t8().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new t8().fromJsonString(e, n);
        }
        static equals(e, n) {
          return N.w.util.equals(t8, e, n);
        }
        constructor(e) {
          super(),
            (this.secret = ""),
            (this.teamName = ""),
            (this.adminEmail = ""),
            (this.tags = []),
            (this.organization = ""),
            (this.source = ""),
            (this.creationReason = ""),
            (this.trial = !1),
            (this.hybrid = !1),
            (this.flowSeats = 0),
            (this.coreSeats = 0),
            (this.usersToAdd = []),
            (this.createdBy = ""),
            (this.paidOutOfBand = !1),
            (this.enableAutoCascadeSeatProvisioning = !1),
            (this.userPromptCreditCap = 0),
            (this.userFlowCreditCap = 0),
            (this.sendEmail = !1),
            N.w.util.initPartial(e, this);
        }
      }
      (t8.runtime = N.w),
        (t8.typeName = "exa.seat_management_pb.CreateEnterpriseRequest"),
        (t8.fields = N.w.util.newFieldList(() => [
          {
            no: 1,
            name: "secret",
            kind: "scalar",
            T: 9,
          },
          {
            no: 2,
            name: "team_name",
            kind: "scalar",
            T: 9,
          },
          {
            no: 3,
            name: "admin_email",
            kind: "scalar",
            T: 9,
          },
          {
            no: 4,
            name: "tags",
            kind: "scalar",
            T: 9,
            repeated: !0,
          },
          {
            no: 5,
            name: "organization",
            kind: "scalar",
            T: 9,
          },
          {
            no: 6,
            name: "source",
            kind: "scalar",
            T: 9,
          },
          {
            no: 7,
            name: "creation_reason",
            kind: "scalar",
            T: 9,
          },
          {
            no: 8,
            name: "trial",
            kind: "scalar",
            T: 8,
          },
          {
            no: 9,
            name: "end_date",
            kind: "message",
            T: w.E,
          },
          {
            no: 10,
            name: "hybrid",
            kind: "scalar",
            T: 8,
          },
          {
            no: 11,
            name: "flow_seats",
            kind: "scalar",
            T: 5,
          },
          {
            no: 12,
            name: "core_seats",
            kind: "scalar",
            T: 5,
          },
          {
            no: 13,
            name: "users_to_add",
            kind: "scalar",
            T: 9,
            repeated: !0,
          },
          {
            no: 14,
            name: "created_by",
            kind: "scalar",
            T: 9,
          },
          {
            no: 15,
            name: "paid_out_of_band",
            kind: "scalar",
            T: 8,
          },
          {
            no: 16,
            name: "enable_auto_cascade_seat_provisioning",
            kind: "scalar",
            T: 8,
          },
          {
            no: 17,
            name: "user_prompt_credit_cap",
            kind: "scalar",
            T: 5,
          },
          {
            no: 18,
            name: "user_flow_credit_cap",
            kind: "scalar",
            T: 5,
          },
          {
            no: 19,
            name: "send_email",
            kind: "scalar",
            T: 8,
          },
        ]));
      class t6 extends C.v {
        static fromBinary(e, n) {
          return new t6().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new t6().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new t6().fromJsonString(e, n);
        }
        static equals(e, n) {
          return N.w.util.equals(t6, e, n);
        }
        constructor(e) {
          super(), N.w.util.initPartial(e, this);
        }
      }
      (t6.runtime = N.w),
        (t6.typeName = "exa.seat_management_pb.CreateEnterpriseResponse"),
        (t6.fields = N.w.util.newFieldList(() => []));
      class t7 extends C.v {
        static fromBinary(e, n) {
          return new t7().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new t7().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new t7().fromJsonString(e, n);
        }
        static equals(e, n) {
          return N.w.util.equals(t7, e, n);
        }
        constructor(e) {
          super(),
            (this.secret = ""),
            (this.teamName = ""),
            (this.teamId = ""),
            (this.tags = []),
            (this.organization = ""),
            (this.source = ""),
            (this.creationReason = ""),
            (this.trial = !1),
            (this.hybrid = !1),
            (this.flowSeats = 0),
            (this.coreSeats = 0),
            (this.usersToAdd = []),
            (this.createdBy = ""),
            (this.paidOutOfBand = !1),
            (this.enableAutoCascadeSeatProvisioning = !1),
            (this.userPromptCreditCap = 0),
            (this.userFlowCreditCap = 0),
            N.w.util.initPartial(e, this);
        }
      }
      (t7.runtime = N.w),
        (t7.typeName = "exa.seat_management_pb.UpdateEnterpriseRequest"),
        (t7.fields = N.w.util.newFieldList(() => [
          {
            no: 1,
            name: "secret",
            kind: "scalar",
            T: 9,
          },
          {
            no: 2,
            name: "team_name",
            kind: "scalar",
            T: 9,
          },
          {
            no: 3,
            name: "team_id",
            kind: "scalar",
            T: 9,
          },
          {
            no: 4,
            name: "tags",
            kind: "scalar",
            T: 9,
            repeated: !0,
          },
          {
            no: 5,
            name: "organization",
            kind: "scalar",
            T: 9,
          },
          {
            no: 6,
            name: "source",
            kind: "scalar",
            T: 9,
          },
          {
            no: 7,
            name: "creation_reason",
            kind: "scalar",
            T: 9,
          },
          {
            no: 8,
            name: "trial",
            kind: "scalar",
            T: 8,
          },
          {
            no: 9,
            name: "end_date",
            kind: "message",
            T: w.E,
          },
          {
            no: 10,
            name: "hybrid",
            kind: "scalar",
            T: 8,
          },
          {
            no: 11,
            name: "flow_seats",
            kind: "scalar",
            T: 5,
          },
          {
            no: 12,
            name: "core_seats",
            kind: "scalar",
            T: 5,
          },
          {
            no: 13,
            name: "users_to_add",
            kind: "scalar",
            T: 9,
            repeated: !0,
          },
          {
            no: 14,
            name: "created_by",
            kind: "scalar",
            T: 9,
          },
          {
            no: 15,
            name: "paid_out_of_band",
            kind: "scalar",
            T: 8,
          },
          {
            no: 16,
            name: "enable_auto_cascade_seat_provisioning",
            kind: "scalar",
            T: 8,
          },
          {
            no: 17,
            name: "user_prompt_credit_cap",
            kind: "scalar",
            T: 5,
          },
          {
            no: 18,
            name: "user_flow_credit_cap",
            kind: "scalar",
            T: 5,
          },
        ]));
      class ae extends C.v {
        static fromBinary(e, n) {
          return new ae().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new ae().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new ae().fromJsonString(e, n);
        }
        static equals(e, n) {
          return N.w.util.equals(ae, e, n);
        }
        constructor(e) {
          super(), N.w.util.initPartial(e, this);
        }
      }
      (ae.runtime = N.w),
        (ae.typeName = "exa.seat_management_pb.UpdateEnterpriseResponse"),
        (ae.fields = N.w.util.newFieldList(() => []));
      class an extends C.v {
        static fromBinary(e, n) {
          return new an().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new an().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new an().fromJsonString(e, n);
        }
        static equals(e, n) {
          return N.w.util.equals(an, e, n);
        }
        constructor(e) {
          super(),
            (this.secret = ""),
            (this.teamName = ""),
            (this.userPromptCreditCap = 0),
            (this.userFlowCreditCap = 0),
            (this.disablePromptLimit = !1),
            (this.disableFlowLimit = !1),
            N.w.util.initPartial(e, this);
        }
      }
      (an.runtime = N.w),
        (an.typeName = "exa.seat_management_pb.UpdateTeamConfigRequest"),
        (an.fields = N.w.util.newFieldList(() => [
          {
            no: 1,
            name: "secret",
            kind: "scalar",
            T: 9,
          },
          {
            no: 2,
            name: "team_name",
            kind: "scalar",
            T: 9,
          },
          {
            no: 3,
            name: "user_prompt_credit_cap",
            kind: "scalar",
            T: 5,
          },
          {
            no: 4,
            name: "user_flow_credit_cap",
            kind: "scalar",
            T: 5,
          },
          {
            no: 5,
            name: "disable_prompt_limit",
            kind: "scalar",
            T: 8,
          },
          {
            no: 6,
            name: "disable_flow_limit",
            kind: "scalar",
            T: 8,
          },
        ]));
      class at extends C.v {
        static fromBinary(e, n) {
          return new at().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new at().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new at().fromJsonString(e, n);
        }
        static equals(e, n) {
          return N.w.util.equals(at, e, n);
        }
        constructor(e) {
          super(), N.w.util.initPartial(e, this);
        }
      }
      (at.runtime = N.w),
        (at.typeName = "exa.seat_management_pb.UpdateTeamConfigResponse"),
        (at.fields = N.w.util.newFieldList(() => []));
      class aa extends C.v {
        static fromBinary(e, n) {
          return new aa().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new aa().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new aa().fromJsonString(e, n);
        }
        static equals(e, n) {
          return N.w.util.equals(aa, e, n);
        }
        constructor(e) {
          super(), (this.authToken = ""), N.w.util.initPartial(e, this);
        }
      }
      (aa.runtime = N.w),
        (aa.typeName =
          "exa.seat_management_pb.UpdateTeamConfigExternalRequest"),
        (aa.fields = N.w.util.newFieldList(() => [
          {
            no: 1,
            name: "auth_token",
            kind: "scalar",
            T: 9,
          },
          {
            no: 2,
            name: "allow_auto_run_commands",
            kind: "scalar",
            T: 8,
            opt: !0,
          },
          {
            no: 3,
            name: "allow_mcp_servers",
            kind: "scalar",
            T: 8,
            opt: !0,
          },
          {
            no: 4,
            name: "allow_app_deployments",
            kind: "scalar",
            T: 8,
            opt: !0,
          },
          {
            no: 5,
            name: "allow_github_reviews",
            kind: "scalar",
            T: 8,
            opt: !0,
          },
          {
            no: 6,
            name: "allow_github_description_edits",
            kind: "scalar",
            T: 8,
            opt: !0,
          },
          {
            no: 7,
            name: "pull_request_review_guidelines",
            kind: "scalar",
            T: 9,
            opt: !0,
          },
          {
            no: 8,
            name: "pull_request_description_guidelines",
            kind: "scalar",
            T: 9,
            opt: !0,
          },
          {
            no: 9,
            name: "allow_individual_level_analytics",
            kind: "scalar",
            T: 8,
            opt: !0,
          },
          {
            no: 10,
            name: "allow_conversation_sharing",
            kind: "scalar",
            T: 8,
            opt: !0,
          },
          {
            no: 11,
            name: "allow_sandbox_app_deployments",
            kind: "scalar",
            T: 8,
            opt: !0,
          },
          {
            no: 12,
            name: "allow_teams_app_deployments",
            kind: "scalar",
            T: 8,
            opt: !0,
          },
          {
            no: 13,
            name: "allow_attribution",
            kind: "scalar",
            T: 8,
            opt: !0,
          },
          {
            no: 14,
            name: "allowed_mcp_servers",
            kind: "scalar",
            T: 9,
            opt: !0,
          },
          {
            no: 15,
            name: "allow_github_auto_reviews",
            kind: "scalar",
            T: 8,
            opt: !0,
          },
          {
            no: 16,
            name: "allow_browser_experimental_features",
            kind: "scalar",
            T: 8,
            opt: !0,
          },
          {
            no: 17,
            name: "allow_vibe_and_replace",
            kind: "scalar",
            T: 8,
            opt: !0,
          },
          {
            no: 18,
            name: "disable_deepwiki",
            kind: "scalar",
            T: 8,
            opt: !0,
          },
        ]));
      class ar extends C.v {
        static fromBinary(e, n) {
          return new ar().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new ar().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new ar().fromJsonString(e, n);
        }
        static equals(e, n) {
          return N.w.util.equals(ar, e, n);
        }
        constructor(e) {
          super(), N.w.util.initPartial(e, this);
        }
      }
      (ar.runtime = N.w),
        (ar.typeName =
          "exa.seat_management_pb.UpdateTeamConfigExternalResponse"),
        (ar.fields = N.w.util.newFieldList(() => []));
      class ai extends C.v {
        static fromBinary(e, n) {
          return new ai().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new ai().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new ai().fromJsonString(e, n);
        }
        static equals(e, n) {
          return N.w.util.equals(ai, e, n);
        }
        constructor(e) {
          super(), (this.authToken = ""), N.w.util.initPartial(e, this);
        }
      }
      (ai.runtime = N.w),
        (ai.typeName = "exa.seat_management_pb.GetTeamConfigRecordRequest"),
        (ai.fields = N.w.util.newFieldList(() => [
          {
            no: 1,
            name: "auth_token",
            kind: "scalar",
            T: 9,
          },
        ]));
      class as extends C.v {
        static fromBinary(e, n) {
          return new as().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new as().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new as().fromJsonString(e, n);
        }
        static equals(e, n) {
          return N.w.util.equals(as, e, n);
        }
        constructor(e) {
          super(), N.w.util.initPartial(e, this);
        }
      }
      (as.runtime = N.w),
        (as.typeName = "exa.seat_management_pb.GetTeamConfigRecordResponse"),
        (as.fields = N.w.util.newFieldList(() => [
          {
            no: 1,
            name: "team_config",
            kind: "message",
            T: I.TlR,
          },
        ]));
      class ao extends C.v {
        static fromBinary(e, n) {
          return new ao().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new ao().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new ao().fromJsonString(e, n);
        }
        static equals(e, n) {
          return N.w.util.equals(ao, e, n);
        }
        constructor(e) {
          super(),
            (this.secret = ""),
            (this.teamName = ""),
            N.w.util.initPartial(e, this);
        }
      }
      (ao.runtime = N.w),
        (ao.typeName = "exa.seat_management_pb.GetTeamInfoRequest"),
        (ao.fields = N.w.util.newFieldList(() => [
          {
            no: 1,
            name: "secret",
            kind: "scalar",
            T: 9,
          },
          {
            no: 2,
            name: "team_name",
            kind: "scalar",
            T: 9,
          },
        ]));
      class a_ extends C.v {
        static fromBinary(e, n) {
          return new a_().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new a_().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new a_().fromJsonString(e, n);
        }
        static equals(e, n) {
          return N.w.util.equals(a_, e, n);
        }
        constructor(e) {
          super(),
            (this.apiKey = ""),
            (this.name = ""),
            (this.email = ""),
            (this.flowsUsed = 0),
            (this.promptsUsed = 0),
            (this.numAcceptances = 0),
            (this.numLinesAccepted = 0),
            (this.teamStatus = I.ngL.UNSPECIFIED),
            (this.hasCascadeSeat = !1),
            N.w.util.initPartial(e, this);
        }
      }
      (a_.runtime = N.w),
        (a_.typeName = "exa.seat_management_pb.UserInfo"),
        (a_.fields = N.w.util.newFieldList(() => [
          {
            no: 1,
            name: "api_key",
            kind: "scalar",
            T: 9,
          },
          {
            no: 2,
            name: "name",
            kind: "scalar",
            T: 9,
          },
          {
            no: 3,
            name: "email",
            kind: "scalar",
            T: 9,
          },
          {
            no: 4,
            name: "signup_time",
            kind: "message",
            T: w.E,
          },
          {
            no: 5,
            name: "flows_used",
            kind: "scalar",
            T: 5,
          },
          {
            no: 6,
            name: "prompts_used",
            kind: "scalar",
            T: 5,
          },
          {
            no: 7,
            name: "num_acceptances",
            kind: "scalar",
            T: 5,
          },
          {
            no: 8,
            name: "num_lines_accepted",
            kind: "scalar",
            T: 5,
          },
          {
            no: 9,
            name: "last_update_time",
            kind: "message",
            T: w.E,
          },
          {
            no: 10,
            name: "first_windsurf_use_time",
            kind: "message",
            T: w.E,
          },
          {
            no: 11,
            name: "team_status",
            kind: "enum",
            T: N.w.getEnumType(I.ngL),
          },
          {
            no: 12,
            name: "has_cascade_seat",
            kind: "scalar",
            T: 8,
          },
        ]));
      class am extends C.v {
        static fromBinary(e, n) {
          return new am().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new am().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new am().fromJsonString(e, n);
        }
        static equals(e, n) {
          return N.w.util.equals(am, e, n);
        }
        constructor(e) {
          super(),
            (this.usersWithCascade = []),
            (this.usersOnTeam = []),
            (this.userInfos = []),
            N.w.util.initPartial(e, this);
        }
      }
      (am.runtime = N.w),
        (am.typeName = "exa.seat_management_pb.GetTeamInfoResponse"),
        (am.fields = N.w.util.newFieldList(() => [
          {
            no: 1,
            name: "team",
            kind: "message",
            T: L,
          },
          {
            no: 2,
            name: "users_with_cascade",
            kind: "scalar",
            T: 9,
            repeated: !0,
          },
          {
            no: 3,
            name: "users_on_team",
            kind: "scalar",
            T: 9,
            repeated: !0,
          },
          {
            no: 4,
            name: "user_infos",
            kind: "message",
            T: a_,
            repeated: !0,
          },
          {
            no: 5,
            name: "team_config",
            kind: "message",
            T: I.TlR,
          },
        ]));
      class aE extends C.v {
        static fromBinary(e, n) {
          return new aE().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new aE().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new aE().fromJsonString(e, n);
        }
        static equals(e, n) {
          return N.w.util.equals(aE, e, n);
        }
        constructor(e) {
          super(), (this.referralCode = ""), N.w.util.initPartial(e, this);
        }
      }
      (aE.runtime = N.w),
        (aE.typeName = "exa.seat_management_pb.IsValidReferralCodeRequest"),
        (aE.fields = N.w.util.newFieldList(() => [
          {
            no: 1,
            name: "referral_code",
            kind: "scalar",
            T: 9,
          },
        ]));
      class au extends C.v {
        static fromBinary(e, n) {
          return new au().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new au().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new au().fromJsonString(e, n);
        }
        static equals(e, n) {
          return N.w.util.equals(au, e, n);
        }
        constructor(e) {
          super(), (this.referrerName = ""), N.w.util.initPartial(e, this);
        }
      }
      (au.runtime = N.w),
        (au.typeName = "exa.seat_management_pb.IsValidReferralCodeResponse"),
        (au.fields = N.w.util.newFieldList(() => [
          {
            no: 1,
            name: "referrer_name",
            kind: "scalar",
            T: 9,
          },
        ]));
      class al extends C.v {
        static fromBinary(e, n) {
          return new al().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new al().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new al().fromJsonString(e, n);
        }
        static equals(e, n) {
          return N.w.util.equals(al, e, n);
        }
        constructor(e) {
          super(),
            (this.authToken = ""),
            (this.referralCode = ""),
            N.w.util.initPartial(e, this);
        }
      }
      (al.runtime = N.w),
        (al.typeName = "exa.seat_management_pb.ProcessReferralCodeRequest"),
        (al.fields = N.w.util.newFieldList(() => [
          {
            no: 1,
            name: "auth_token",
            kind: "scalar",
            T: 9,
          },
          {
            no: 2,
            name: "referral_code",
            kind: "scalar",
            T: 9,
          },
        ]));
      class ac extends C.v {
        static fromBinary(e, n) {
          return new ac().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new ac().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new ac().fromJsonString(e, n);
        }
        static equals(e, n) {
          return N.w.util.equals(ac, e, n);
        }
        constructor(e) {
          super(), N.w.util.initPartial(e, this);
        }
      }
      (ac.runtime = N.w),
        (ac.typeName = "exa.seat_management_pb.ProcessReferralCodeResponse"),
        (ac.fields = N.w.util.newFieldList(() => []));
      class aT extends C.v {
        static fromBinary(e, n) {
          return new aT().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new aT().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new aT().fromJsonString(e, n);
        }
        static equals(e, n) {
          return N.w.util.equals(aT, e, n);
        }
        constructor(e) {
          super(),
            (this.authToken = ""),
            (this.name = ""),
            (this.orgId = ""),
            N.w.util.initPartial(e, this);
        }
      }
      (aT.runtime = N.w),
        (aT.typeName = "exa.seat_management_pb.CreateMultiTenantTeamRequest"),
        (aT.fields = N.w.util.newFieldList(() => [
          {
            no: 1,
            name: "auth_token",
            kind: "scalar",
            T: 9,
          },
          {
            no: 2,
            name: "name",
            kind: "scalar",
            T: 9,
          },
          {
            no: 3,
            name: "org_id",
            kind: "scalar",
            T: 9,
          },
        ]));
      class ad extends C.v {
        static fromBinary(e, n) {
          return new ad().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new ad().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new ad().fromJsonString(e, n);
        }
        static equals(e, n) {
          return N.w.util.equals(ad, e, n);
        }
        constructor(e) {
          super(), N.w.util.initPartial(e, this);
        }
      }
      (ad.runtime = N.w),
        (ad.typeName = "exa.seat_management_pb.CreateMultiTenantTeamResponse"),
        (ad.fields = N.w.util.newFieldList(() => [
          {
            no: 1,
            name: "team",
            kind: "message",
            T: L,
          },
        ]));
      class aS extends C.v {
        static fromBinary(e, n) {
          return new aS().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new aS().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new aS().fromJsonString(e, n);
        }
        static equals(e, n) {
          return N.w.util.equals(aS, e, n);
        }
        constructor(e) {
          super(), (this.authToken = ""), N.w.util.initPartial(e, this);
        }
      }
      (aS.runtime = N.w),
        (aS.typeName = "exa.seat_management_pb.GetMultiTenantTeamsRequest"),
        (aS.fields = N.w.util.newFieldList(() => [
          {
            no: 1,
            name: "auth_token",
            kind: "scalar",
            T: 9,
          },
        ]));
      class aA extends C.v {
        static fromBinary(e, n) {
          return new aA().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new aA().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new aA().fromJsonString(e, n);
        }
        static equals(e, n) {
          return N.w.util.equals(aA, e, n);
        }
        constructor(e) {
          super(), (this.teams = []), N.w.util.initPartial(e, this);
        }
      }
      (aA.runtime = N.w),
        (aA.typeName = "exa.seat_management_pb.GetMultiTenantTeamsResponse"),
        (aA.fields = N.w.util.newFieldList(() => [
          {
            no: 1,
            name: "teams",
            kind: "message",
            T: L,
            repeated: !0,
          },
        ]));
      class aO extends C.v {
        static fromBinary(e, n) {
          return new aO().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new aO().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new aO().fromJsonString(e, n);
        }
        static equals(e, n) {
          return N.w.util.equals(aO, e, n);
        }
        constructor(e) {
          super(),
            (this.authToken = ""),
            (this.teamId = ""),
            N.w.util.initPartial(e, this);
        }
      }
      (aO.runtime = N.w),
        (aO.typeName = "exa.seat_management_pb.GetTeamOrgIdRequest"),
        (aO.fields = N.w.util.newFieldList(() => [
          {
            no: 1,
            name: "auth_token",
            kind: "scalar",
            T: 9,
          },
          {
            no: 2,
            name: "team_id",
            kind: "scalar",
            T: 9,
          },
        ]));
      class aN extends C.v {
        static fromBinary(e, n) {
          return new aN().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new aN().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new aN().fromJsonString(e, n);
        }
        static equals(e, n) {
          return N.w.util.equals(aN, e, n);
        }
        constructor(e) {
          super(), (this.orgId = ""), N.w.util.initPartial(e, this);
        }
      }
      (aN.runtime = N.w),
        (aN.typeName = "exa.seat_management_pb.GetTeamOrgIdResponse"),
        (aN.fields = N.w.util.newFieldList(() => [
          {
            no: 1,
            name: "org_id",
            kind: "scalar",
            T: 9,
          },
        ]));
      class aC extends C.v {
        static fromBinary(e, n) {
          return new aC().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new aC().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new aC().fromJsonString(e, n);
        }
        static equals(e, n) {
          return N.w.util.equals(aC, e, n);
        }
        constructor(e) {
          super(),
            (this.authToken = ""),
            (this.teamName = ""),
            (this.softDelete = !1),
            N.w.util.initPartial(e, this);
        }
      }
      (aC.runtime = N.w),
        (aC.typeName = "exa.seat_management_pb.DeleteMultiTenantTeamRequest"),
        (aC.fields = N.w.util.newFieldList(() => [
          {
            no: 1,
            name: "auth_token",
            kind: "scalar",
            T: 9,
          },
          {
            no: 2,
            name: "team_name",
            kind: "scalar",
            T: 9,
          },
          {
            no: 3,
            name: "soft_delete",
            kind: "scalar",
            T: 8,
          },
        ]));
      class af extends C.v {
        static fromBinary(e, n) {
          return new af().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new af().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new af().fromJsonString(e, n);
        }
        static equals(e, n) {
          return N.w.util.equals(af, e, n);
        }
        constructor(e) {
          super(), N.w.util.initPartial(e, this);
        }
      }
      (af.runtime = N.w),
        (af.typeName = "exa.seat_management_pb.DeleteMultiTenantTeamResponse"),
        (af.fields = N.w.util.newFieldList(() => []));
      class aw extends C.v {
        static fromBinary(e, n) {
          return new aw().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new aw().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new aw().fromJsonString(e, n);
        }
        static equals(e, n) {
          return N.w.util.equals(aw, e, n);
        }
        constructor(e) {
          super(),
            (this.authToken = ""),
            (this.teamName = ""),
            (this.numSeats = f.q.zero),
            N.w.util.initPartial(e, this);
        }
      }
      (aw.runtime = N.w),
        (aw.typeName = "exa.seat_management_pb.SetTeamLicenseRequest"),
        (aw.fields = N.w.util.newFieldList(() => [
          {
            no: 1,
            name: "auth_token",
            kind: "scalar",
            T: 9,
          },
          {
            no: 2,
            name: "team_name",
            kind: "scalar",
            T: 9,
          },
          {
            no: 3,
            name: "billing_start_date",
            kind: "message",
            T: w.E,
          },
          {
            no: 4,
            name: "billing_end_date",
            kind: "message",
            T: w.E,
          },
          {
            no: 5,
            name: "num_seats",
            kind: "scalar",
            T: 3,
          },
        ]));
      class aI extends C.v {
        static fromBinary(e, n) {
          return new aI().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new aI().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new aI().fromJsonString(e, n);
        }
        static equals(e, n) {
          return N.w.util.equals(aI, e, n);
        }
        constructor(e) {
          super(), N.w.util.initPartial(e, this);
        }
      }
      (aI.runtime = N.w),
        (aI.typeName = "exa.seat_management_pb.SetTeamLicenseResponse"),
        (aI.fields = N.w.util.newFieldList(() => [
          {
            no: 1,
            name: "team",
            kind: "message",
            T: L,
          },
        ]));
      class aR extends C.v {
        static fromBinary(e, n) {
          return new aR().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new aR().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new aR().fromJsonString(e, n);
        }
        static equals(e, n) {
          return N.w.util.equals(aR, e, n);
        }
        constructor(e) {
          super(),
            (this.secret = ""),
            (this.email = ""),
            (this.teamsTier = I.wuw.UNSPECIFIED),
            (this.numFlexCredits = f.q.zero),
            (this.usedFlexCredits = f.q.zero),
            (this.usedFlowCredits = f.q.zero),
            (this.usedPromptCredits = f.q.zero),
            (this.numTeamsSeats = f.q.zero),
            (this.userUsedPromptCredits = f.q.zero),
            (this.userUsedFlowCredits = f.q.zero),
            (this.forCreditUpdate = !1),
            N.w.util.initPartial(e, this);
        }
      }
      (aR.runtime = N.w),
        (aR.typeName =
          "exa.seat_management_pb.UpdatePlanDetailsInternalRequest"),
        (aR.fields = N.w.util.newFieldList(() => [
          {
            no: 1,
            name: "secret",
            kind: "scalar",
            T: 9,
          },
          {
            no: 2,
            name: "email",
            kind: "scalar",
            T: 9,
          },
          {
            no: 3,
            name: "teams_tier",
            kind: "enum",
            T: N.w.getEnumType(I.wuw),
          },
          {
            no: 4,
            name: "num_flex_credits",
            kind: "scalar",
            T: 3,
          },
          {
            no: 5,
            name: "used_flex_credits",
            kind: "scalar",
            T: 3,
          },
          {
            no: 6,
            name: "used_flow_credits",
            kind: "scalar",
            T: 3,
          },
          {
            no: 7,
            name: "used_prompt_credits",
            kind: "scalar",
            T: 3,
          },
          {
            no: 8,
            name: "num_teams_seats",
            kind: "scalar",
            T: 3,
          },
          {
            no: 9,
            name: "user_used_prompt_credits",
            kind: "scalar",
            T: 3,
          },
          {
            no: 10,
            name: "user_used_flow_credits",
            kind: "scalar",
            T: 3,
          },
          {
            no: 11,
            name: "for_credit_update",
            kind: "scalar",
            T: 8,
          },
        ]));
      class aL extends C.v {
        static fromBinary(e, n) {
          return new aL().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new aL().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new aL().fromJsonString(e, n);
        }
        static equals(e, n) {
          return N.w.util.equals(aL, e, n);
        }
        constructor(e) {
          super(), N.w.util.initPartial(e, this);
        }
      }
      (aL.runtime = N.w),
        (aL.typeName =
          "exa.seat_management_pb.UpdatePlanDetailsInternalResponse"),
        (aL.fields = N.w.util.newFieldList(() => []));
      class ap extends C.v {
        static fromBinary(e, n) {
          return new ap().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new ap().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new ap().fromJsonString(e, n);
        }
        static equals(e, n) {
          return N.w.util.equals(ap, e, n);
        }
        constructor(e) {
          super(),
            (this.secret = ""),
            (this.emails = []),
            (this.overrideSubscriptionActiveCheck = !1),
            N.w.util.initPartial(e, this);
        }
      }
      (ap.runtime = N.w),
        (ap.typeName =
          "exa.seat_management_pb.RemoveUsersFromTeamInternalRequest"),
        (ap.fields = N.w.util.newFieldList(() => [
          {
            no: 1,
            name: "secret",
            kind: "scalar",
            T: 9,
          },
          {
            no: 2,
            name: "emails",
            kind: "scalar",
            T: 9,
            repeated: !0,
          },
          {
            no: 3,
            name: "override_subscription_active_check",
            kind: "scalar",
            T: 8,
          },
        ]));
      class aD extends C.v {
        static fromBinary(e, n) {
          return new aD().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new aD().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new aD().fromJsonString(e, n);
        }
        static equals(e, n) {
          return N.w.util.equals(aD, e, n);
        }
        constructor(e) {
          super(), N.w.util.initPartial(e, this);
        }
      }
      (aD.runtime = N.w),
        (aD.typeName =
          "exa.seat_management_pb.RemoveUsersFromTeamInternalResponse"),
        (aD.fields = N.w.util.newFieldList(() => []));
      class aP extends C.v {
        static fromBinary(e, n) {
          return new aP().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new aP().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new aP().fromJsonString(e, n);
        }
        static equals(e, n) {
          return N.w.util.equals(aP, e, n);
        }
        constructor(e) {
          super(), (this.authToken = ""), N.w.util.initPartial(e, this);
        }
      }
      (aP.runtime = N.w),
        (aP.typeName = "exa.seat_management_pb.InitiateTopUpRequest"),
        (aP.fields = N.w.util.newFieldList(() => [
          {
            no: 1,
            name: "auth_token",
            kind: "scalar",
            T: 9,
          },
        ]));
      class aM extends C.v {
        static fromBinary(e, n) {
          return new aM().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new aM().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new aM().fromJsonString(e, n);
        }
        static equals(e, n) {
          return N.w.util.equals(aM, e, n);
        }
        constructor(e) {
          super(),
            (this.status = I.LND.UNSPECIFIED),
            N.w.util.initPartial(e, this);
        }
      }
      (aM.runtime = N.w),
        (aM.typeName = "exa.seat_management_pb.InitiateTopUpResponse"),
        (aM.fields = N.w.util.newFieldList(() => [
          {
            no: 1,
            name: "status",
            kind: "enum",
            T: N.w.getEnumType(I.LND),
          },
        ]));
      class ay extends C.v {
        static fromBinary(e, n) {
          return new ay().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new ay().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new ay().fromJsonString(e, n);
        }
        static equals(e, n) {
          return N.w.util.equals(ay, e, n);
        }
        constructor(e) {
          super(),
            (this.authUid = ""),
            (this.usedPromptCredits = f.q.zero),
            (this.usedFlowCredits = f.q.zero),
            N.w.util.initPartial(e, this);
        }
      }
      (ay.runtime = N.w),
        (ay.typeName = "exa.seat_management_pb.UserCascadeDetails"),
        (ay.fields = N.w.util.newFieldList(() => [
          {
            no: 1,
            name: "auth_uid",
            kind: "scalar",
            T: 9,
          },
          {
            no: 2,
            name: "used_prompt_credits",
            kind: "scalar",
            T: 3,
          },
          {
            no: 3,
            name: "used_flow_credits",
            kind: "scalar",
            T: 3,
          },
          {
            no: 4,
            name: "free_cascade_usage_month_start",
            kind: "message",
            T: w.E,
          },
        ]));
      class ah extends C.v {
        static fromBinary(e, n) {
          return new ah().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new ah().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new ah().fromJsonString(e, n);
        }
        static equals(e, n) {
          return N.w.util.equals(ah, e, n);
        }
        constructor(e) {
          super(),
            (this.secret = ""),
            (this.teamId = ""),
            (this.amount = f.q.zero),
            (this.type = 0),
            (this.email = ""),
            N.w.util.initPartial(e, this);
        }
      }
      (ah.runtime = N.w),
        (ah.typeName =
          "exa.seat_management_pb.AddExtraFlexCreditsInternalRequest"),
        (ah.fields = N.w.util.newFieldList(() => [
          {
            no: 1,
            name: "secret",
            kind: "scalar",
            T: 9,
          },
          {
            no: 2,
            name: "team_id",
            kind: "scalar",
            T: 9,
          },
          {
            no: 3,
            name: "amount",
            kind: "scalar",
            T: 3,
          },
          {
            no: 4,
            name: "type",
            kind: "enum",
            T: N.w.getEnumType(A),
          },
          {
            no: 5,
            name: "email",
            kind: "scalar",
            T: 9,
          },
        ]));
      class aU extends C.v {
        static fromBinary(e, n) {
          return new aU().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new aU().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new aU().fromJsonString(e, n);
        }
        static equals(e, n) {
          return N.w.util.equals(aU, e, n);
        }
        constructor(e) {
          super(),
            (this.previousFlexCredits = f.q.zero),
            (this.newFlexCredits = f.q.zero),
            N.w.util.initPartial(e, this);
        }
      }
      (aU.runtime = N.w),
        (aU.typeName =
          "exa.seat_management_pb.AddExtraFlexCreditsInternalResponse"),
        (aU.fields = N.w.util.newFieldList(() => [
          {
            no: 1,
            name: "previous_flex_credits",
            kind: "scalar",
            T: 3,
          },
          {
            no: 2,
            name: "new_flex_credits",
            kind: "scalar",
            T: 3,
          },
        ]));
      class ag extends C.v {
        static fromBinary(e, n) {
          return new ag().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new ag().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new ag().fromJsonString(e, n);
        }
        static equals(e, n) {
          return N.w.util.equals(ag, e, n);
        }
        constructor(e) {
          super(), (this.firebaseIdToken = ""), N.w.util.initPartial(e, this);
        }
      }
      (ag.runtime = N.w),
        (ag.typeName = "exa.seat_management_pb.GetOneTimeAuthTokenRequest"),
        (ag.fields = N.w.util.newFieldList(() => [
          {
            no: 1,
            name: "firebase_id_token",
            kind: "scalar",
            T: 9,
          },
        ]));
      class aJ extends C.v {
        static fromBinary(e, n) {
          return new aJ().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new aJ().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new aJ().fromJsonString(e, n);
        }
        static equals(e, n) {
          return N.w.util.equals(aJ, e, n);
        }
        constructor(e) {
          super(), (this.authToken = ""), N.w.util.initPartial(e, this);
        }
      }
      (aJ.runtime = N.w),
        (aJ.typeName = "exa.seat_management_pb.GetOneTimeAuthTokenResponse"),
        (aJ.fields = N.w.util.newFieldList(() => [
          {
            no: 1,
            name: "auth_token",
            kind: "scalar",
            T: 9,
          },
        ]));
      class ak extends C.v {
        static fromBinary(e, n) {
          return new ak().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new ak().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new ak().fromJsonString(e, n);
        }
        static equals(e, n) {
          return N.w.util.equals(ak, e, n);
        }
        constructor(e) {
          super(), (this.authToken = ""), N.w.util.initPartial(e, this);
        }
      }
      (ak.runtime = N.w),
        (ak.typeName =
          "exa.seat_management_pb.GetSetUserApiProviderKeysRequest"),
        (ak.fields = N.w.util.newFieldList(() => [
          {
            no: 1,
            name: "auth_token",
            kind: "scalar",
            T: 9,
          },
        ]));
      class aB extends C.v {
        static fromBinary(e, n) {
          return new aB().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new aB().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new aB().fromJsonString(e, n);
        }
        static equals(e, n) {
          return N.w.util.equals(aB, e, n);
        }
        constructor(e) {
          super(), (this.providers = []), N.w.util.initPartial(e, this);
        }
      }
      (aB.runtime = N.w),
        (aB.typeName =
          "exa.seat_management_pb.GetSetUserApiProviderKeysResponse"),
        (aB.fields = N.w.util.newFieldList(() => [
          {
            no: 1,
            name: "providers",
            kind: "enum",
            T: N.w.getEnumType(I.unC),
            repeated: !0,
          },
        ]));
      class aG extends C.v {
        static fromBinary(e, n) {
          return new aG().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new aG().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new aG().fromJsonString(e, n);
        }
        static equals(e, n) {
          return N.w.util.equals(aG, e, n);
        }
        constructor(e) {
          super(),
            (this.authToken = ""),
            (this.provider = I.unC.API_PROVIDER_UNSPECIFIED),
            (this.providerApiKey = ""),
            N.w.util.initPartial(e, this);
        }
      }
      (aG.runtime = N.w),
        (aG.typeName = "exa.seat_management_pb.SetUserApiProviderKeyRequest"),
        (aG.fields = N.w.util.newFieldList(() => [
          {
            no: 1,
            name: "auth_token",
            kind: "scalar",
            T: 9,
          },
          {
            no: 2,
            name: "provider",
            kind: "enum",
            T: N.w.getEnumType(I.unC),
          },
          {
            no: 3,
            name: "provider_api_key",
            kind: "scalar",
            T: 9,
          },
        ]));
      class aF extends C.v {
        static fromBinary(e, n) {
          return new aF().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new aF().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new aF().fromJsonString(e, n);
        }
        static equals(e, n) {
          return N.w.util.equals(aF, e, n);
        }
        constructor(e) {
          super(), N.w.util.initPartial(e, this);
        }
      }
      (aF.runtime = N.w),
        (aF.typeName = "exa.seat_management_pb.SetUserApiProviderKeyResponse"),
        (aF.fields = N.w.util.newFieldList(() => []));
      class ax extends C.v {
        static fromBinary(e, n) {
          return new ax().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new ax().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new ax().fromJsonString(e, n);
        }
        static equals(e, n) {
          return N.w.util.equals(ax, e, n);
        }
        constructor(e) {
          super(),
            (this.authToken = ""),
            (this.provider = I.unC.API_PROVIDER_UNSPECIFIED),
            N.w.util.initPartial(e, this);
        }
      }
      (ax.runtime = N.w),
        (ax.typeName =
          "exa.seat_management_pb.DeleteUserApiProviderKeyRequest"),
        (ax.fields = N.w.util.newFieldList(() => [
          {
            no: 1,
            name: "auth_token",
            kind: "scalar",
            T: 9,
          },
          {
            no: 2,
            name: "provider",
            kind: "enum",
            T: N.w.getEnumType(I.unC),
          },
        ]));
      class aq extends C.v {
        static fromBinary(e, n) {
          return new aq().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new aq().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new aq().fromJsonString(e, n);
        }
        static equals(e, n) {
          return N.w.util.equals(aq, e, n);
        }
        constructor(e) {
          super(), N.w.util.initPartial(e, this);
        }
      }
      (aq.runtime = N.w),
        (aq.typeName =
          "exa.seat_management_pb.DeleteUserApiProviderKeyResponse"),
        (aq.fields = N.w.util.newFieldList(() => []));
      class ab extends C.v {
        static fromBinary(e, n) {
          return new ab().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new ab().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new ab().fromJsonString(e, n);
        }
        static equals(e, n) {
          return N.w.util.equals(ab, e, n);
        }
        constructor(e) {
          super(),
            (this.authToken = ""),
            (this.keyId = ""),
            N.w.util.initPartial(e, this);
        }
      }
      (ab.runtime = N.w),
        (ab.typeName = "exa.seat_management_pb.DeleteApiKeyRequest"),
        (ab.fields = N.w.util.newFieldList(() => [
          {
            no: 1,
            name: "auth_token",
            kind: "scalar",
            T: 9,
          },
          {
            no: 2,
            name: "key_id",
            kind: "scalar",
            T: 9,
          },
        ]));
      class av extends C.v {
        static fromBinary(e, n) {
          return new av().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new av().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new av().fromJsonString(e, n);
        }
        static equals(e, n) {
          return N.w.util.equals(av, e, n);
        }
        constructor(e) {
          super(), N.w.util.initPartial(e, this);
        }
      }
      (av.runtime = N.w),
        (av.typeName = "exa.seat_management_pb.DeleteApiKeyResponse"),
        (av.fields = N.w.util.newFieldList(() => []));
      class aH extends C.v {
        static fromBinary(e, n) {
          return new aH().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new aH().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new aH().fromJsonString(e, n);
        }
        static equals(e, n) {
          return N.w.util.equals(aH, e, n);
        }
        constructor(e) {
          super(), (this.authToken = ""), N.w.util.initPartial(e, this);
        }
      }
      (aH.runtime = N.w),
        (aH.typeName = "exa.seat_management_pb.GetApiKeySummaryRequest"),
        (aH.fields = N.w.util.newFieldList(() => [
          {
            no: 1,
            name: "auth_token",
            kind: "scalar",
            T: 9,
          },
        ]));
      class aV extends C.v {
        static fromBinary(e, n) {
          return new aV().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new aV().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new aV().fromJsonString(e, n);
        }
        static equals(e, n) {
          return N.w.util.equals(aV, e, n);
        }
        constructor(e) {
          super(),
            (this.keyId = ""),
            (this.keyForDisplay = ""),
            N.w.util.initPartial(e, this);
        }
      }
      (aV.runtime = N.w),
        (aV.typeName = "exa.seat_management_pb.ApiKeyForDisplay"),
        (aV.fields = N.w.util.newFieldList(() => [
          {
            no: 1,
            name: "key_id",
            kind: "scalar",
            T: 9,
          },
          {
            no: 2,
            name: "key_for_display",
            kind: "scalar",
            T: 9,
          },
          {
            no: 3,
            name: "created_at",
            kind: "message",
            T: w.E,
          },
          {
            no: 4,
            name: "last_used_at",
            kind: "message",
            T: w.E,
          },
        ]));
      class aW extends C.v {
        static fromBinary(e, n) {
          return new aW().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new aW().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new aW().fromJsonString(e, n);
        }
        static equals(e, n) {
          return N.w.util.equals(aW, e, n);
        }
        constructor(e) {
          super(), (this.apiKeys = []), N.w.util.initPartial(e, this);
        }
      }
      (aW.runtime = N.w),
        (aW.typeName = "exa.seat_management_pb.GetApiKeySummaryResponse"),
        (aW.fields = N.w.util.newFieldList(() => [
          {
            no: 1,
            name: "api_keys",
            kind: "message",
            T: aV,
            repeated: !0,
          },
        ]));
      class aK extends C.v {
        static fromBinary(e, n) {
          return new aK().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new aK().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new aK().fromJsonString(e, n);
        }
        static equals(e, n) {
          return N.w.util.equals(aK, e, n);
        }
        constructor(e) {
          super(), (this.uid = ""), N.w.util.initPartial(e, this);
        }
      }
      (aK.runtime = N.w),
        (aK.typeName = "exa.seat_management_pb.LogOutUserRequest"),
        (aK.fields = N.w.util.newFieldList(() => [
          {
            no: 1,
            name: "uid",
            kind: "scalar",
            T: 9,
          },
        ]));
      class aX extends C.v {
        static fromBinary(e, n) {
          return new aX().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new aX().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new aX().fromJsonString(e, n);
        }
        static equals(e, n) {
          return N.w.util.equals(aX, e, n);
        }
        constructor(e) {
          super(), N.w.util.initPartial(e, this);
        }
      }
      (aX.runtime = N.w),
        (aX.typeName = "exa.seat_management_pb.LogOutUserResponse"),
        (aX.fields = N.w.util.newFieldList(() => []));
      class aY extends C.v {
        static fromBinary(e, n) {
          return new aY().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new aY().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new aY().fromJsonString(e, n);
        }
        static equals(e, n) {
          return N.w.util.equals(aY, e, n);
        }
        constructor(e) {
          super(),
            (this.domain = ""),
            (this.verified = !1),
            N.w.util.initPartial(e, this);
        }
      }
      (aY.runtime = N.w),
        (aY.typeName = "exa.seat_management_pb.TeamDomain"),
        (aY.fields = N.w.util.newFieldList(() => [
          {
            no: 1,
            name: "domain",
            kind: "scalar",
            T: 9,
          },
          {
            no: 2,
            name: "verified",
            kind: "scalar",
            T: 8,
          },
        ]));
      class aQ extends C.v {
        static fromBinary(e, n) {
          return new aQ().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new aQ().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new aQ().fromJsonString(e, n);
        }
        static equals(e, n) {
          return N.w.util.equals(aQ, e, n);
        }
        constructor(e) {
          super(),
            (this.authToken = ""),
            (this.domain = ""),
            N.w.util.initPartial(e, this);
        }
      }
      (aQ.runtime = N.w),
        (aQ.typeName = "exa.seat_management_pb.AddTeamDomainRequest"),
        (aQ.fields = N.w.util.newFieldList(() => [
          {
            no: 1,
            name: "auth_token",
            kind: "scalar",
            T: 9,
          },
          {
            no: 2,
            name: "domain",
            kind: "scalar",
            T: 9,
          },
        ]));
      class az extends C.v {
        static fromBinary(e, n) {
          return new az().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new az().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new az().fromJsonString(e, n);
        }
        static equals(e, n) {
          return N.w.util.equals(az, e, n);
        }
        constructor(e) {
          super(), (this.verificationToken = ""), N.w.util.initPartial(e, this);
        }
      }
      (az.runtime = N.w),
        (az.typeName = "exa.seat_management_pb.AddTeamDomainResponse"),
        (az.fields = N.w.util.newFieldList(() => [
          {
            no: 1,
            name: "verification_token",
            kind: "scalar",
            T: 9,
          },
        ]));
      class aj extends C.v {
        static fromBinary(e, n) {
          return new aj().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new aj().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new aj().fromJsonString(e, n);
        }
        static equals(e, n) {
          return N.w.util.equals(aj, e, n);
        }
        constructor(e) {
          super(), (this.authToken = ""), N.w.util.initPartial(e, this);
        }
      }
      (aj.runtime = N.w),
        (aj.typeName = "exa.seat_management_pb.ListTeamDomainsRequest"),
        (aj.fields = N.w.util.newFieldList(() => [
          {
            no: 1,
            name: "auth_token",
            kind: "scalar",
            T: 9,
          },
        ]));
      class aZ extends C.v {
        static fromBinary(e, n) {
          return new aZ().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new aZ().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new aZ().fromJsonString(e, n);
        }
        static equals(e, n) {
          return N.w.util.equals(aZ, e, n);
        }
        constructor(e) {
          super(), (this.teamDomains = []), N.w.util.initPartial(e, this);
        }
      }
      (aZ.runtime = N.w),
        (aZ.typeName = "exa.seat_management_pb.ListTeamDomainsResponse"),
        (aZ.fields = N.w.util.newFieldList(() => [
          {
            no: 1,
            name: "team_domains",
            kind: "message",
            T: aY,
            repeated: !0,
          },
        ]));
      class a$ extends C.v {
        static fromBinary(e, n) {
          return new a$().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new a$().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new a$().fromJsonString(e, n);
        }
        static equals(e, n) {
          return N.w.util.equals(a$, e, n);
        }
        constructor(e) {
          super(),
            (this.authToken = ""),
            (this.domain = ""),
            N.w.util.initPartial(e, this);
        }
      }
      (a$.runtime = N.w),
        (a$.typeName = "exa.seat_management_pb.VerifyTeamDomainRequest"),
        (a$.fields = N.w.util.newFieldList(() => [
          {
            no: 1,
            name: "auth_token",
            kind: "scalar",
            T: 9,
          },
          {
            no: 2,
            name: "domain",
            kind: "scalar",
            T: 9,
          },
        ]));
      class a1 extends C.v {
        static fromBinary(e, n) {
          return new a1().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new a1().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new a1().fromJsonString(e, n);
        }
        static equals(e, n) {
          return N.w.util.equals(a1, e, n);
        }
        constructor(e) {
          super(), N.w.util.initPartial(e, this);
        }
      }
      (a1.runtime = N.w),
        (a1.typeName = "exa.seat_management_pb.VerifyTeamDomainResponse"),
        (a1.fields = N.w.util.newFieldList(() => []));
      class a2 extends C.v {
        static fromBinary(e, n) {
          return new a2().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new a2().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new a2().fromJsonString(e, n);
        }
        static equals(e, n) {
          return N.w.util.equals(a2, e, n);
        }
        constructor(e) {
          super(),
            (this.authToken = ""),
            (this.domain = ""),
            N.w.util.initPartial(e, this);
        }
      }
      (a2.runtime = N.w),
        (a2.typeName = "exa.seat_management_pb.DeleteTeamDomainRequest"),
        (a2.fields = N.w.util.newFieldList(() => [
          {
            no: 1,
            name: "auth_token",
            kind: "scalar",
            T: 9,
          },
          {
            no: 2,
            name: "domain",
            kind: "scalar",
            T: 9,
          },
        ]));
      class a0 extends C.v {
        static fromBinary(e, n) {
          return new a0().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new a0().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new a0().fromJsonString(e, n);
        }
        static equals(e, n) {
          return N.w.util.equals(a0, e, n);
        }
        constructor(e) {
          super(), N.w.util.initPartial(e, this);
        }
      }
      (a0.runtime = N.w),
        (a0.typeName = "exa.seat_management_pb.DeleteTeamDomainResponse"),
        (a0.fields = N.w.util.newFieldList(() => []));
      class a9 extends C.v {
        static fromBinary(e, n) {
          return new a9().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new a9().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new a9().fromJsonString(e, n);
        }
        static equals(e, n) {
          return N.w.util.equals(a9, e, n);
        }
        constructor(e) {
          super(),
            (this.secret = ""),
            (this.teamId = ""),
            (this.domain = ""),
            N.w.util.initPartial(e, this);
        }
      }
      (a9.runtime = N.w),
        (a9.typeName = "exa.seat_management_pb.AddTeamDomainInternalRequest"),
        (a9.fields = N.w.util.newFieldList(() => [
          {
            no: 1,
            name: "secret",
            kind: "scalar",
            T: 9,
          },
          {
            no: 2,
            name: "team_id",
            kind: "scalar",
            T: 9,
          },
          {
            no: 3,
            name: "domain",
            kind: "scalar",
            T: 9,
          },
        ]));
      class a3 extends C.v {
        static fromBinary(e, n) {
          return new a3().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new a3().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new a3().fromJsonString(e, n);
        }
        static equals(e, n) {
          return N.w.util.equals(a3, e, n);
        }
        constructor(e) {
          super(), N.w.util.initPartial(e, this);
        }
      }
      (a3.runtime = N.w),
        (a3.typeName = "exa.seat_management_pb.AddTeamDomainInternalResponse"),
        (a3.fields = N.w.util.newFieldList(() => []));
      class a4 extends C.v {
        static fromBinary(e, n) {
          return new a4().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new a4().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new a4().fromJsonString(e, n);
        }
        static equals(e, n) {
          return N.w.util.equals(a4, e, n);
        }
        constructor(e) {
          super(),
            (this.secret = ""),
            (this.teamId = ""),
            (this.domain = ""),
            N.w.util.initPartial(e, this);
        }
      }
      (a4.runtime = N.w),
        (a4.typeName =
          "exa.seat_management_pb.DeleteTeamDomainInternalRequest"),
        (a4.fields = N.w.util.newFieldList(() => [
          {
            no: 1,
            name: "secret",
            kind: "scalar",
            T: 9,
          },
          {
            no: 2,
            name: "team_id",
            kind: "scalar",
            T: 9,
          },
          {
            no: 3,
            name: "domain",
            kind: "scalar",
            T: 9,
          },
        ]));
      class a5 extends C.v {
        static fromBinary(e, n) {
          return new a5().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new a5().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new a5().fromJsonString(e, n);
        }
        static equals(e, n) {
          return N.w.util.equals(a5, e, n);
        }
        constructor(e) {
          super(), N.w.util.initPartial(e, this);
        }
      }
      (a5.runtime = N.w),
        (a5.typeName =
          "exa.seat_management_pb.DeleteTeamDomainInternalResponse"),
        (a5.fields = N.w.util.newFieldList(() => []));
      class a8 extends C.v {
        static fromBinary(e, n) {
          return new a8().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new a8().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new a8().fromJsonString(e, n);
        }
        static equals(e, n) {
          return N.w.util.equals(a8, e, n);
        }
        constructor(e) {
          super(),
            (this.secret = ""),
            (this.teamId = ""),
            N.w.util.initPartial(e, this);
        }
      }
      (a8.runtime = N.w),
        (a8.typeName = "exa.seat_management_pb.ListTeamDomainsInternalRequest"),
        (a8.fields = N.w.util.newFieldList(() => [
          {
            no: 1,
            name: "secret",
            kind: "scalar",
            T: 9,
          },
          {
            no: 2,
            name: "team_id",
            kind: "scalar",
            T: 9,
          },
        ]));
      class a6 extends C.v {
        static fromBinary(e, n) {
          return new a6().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new a6().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new a6().fromJsonString(e, n);
        }
        static equals(e, n) {
          return N.w.util.equals(a6, e, n);
        }
        constructor(e) {
          super(), (this.teamDomains = []), N.w.util.initPartial(e, this);
        }
      }
      (a6.runtime = N.w),
        (a6.typeName =
          "exa.seat_management_pb.ListTeamDomainsInternalResponse"),
        (a6.fields = N.w.util.newFieldList(() => [
          {
            no: 1,
            name: "team_domains",
            kind: "message",
            T: aY,
            repeated: !0,
          },
        ]));
      class a7 extends C.v {
        static fromBinary(e, n) {
          return new a7().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new a7().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new a7().fromJsonString(e, n);
        }
        static equals(e, n) {
          return N.w.util.equals(a7, e, n);
        }
        constructor(e) {
          super(),
            (this.secret = ""),
            (this.teamId = ""),
            (this.newName = ""),
            N.w.util.initPartial(e, this);
        }
      }
      (a7.runtime = N.w),
        (a7.typeName = "exa.seat_management_pb.UpdateTeamNameInternalRequest"),
        (a7.fields = N.w.util.newFieldList(() => [
          {
            no: 1,
            name: "secret",
            kind: "scalar",
            T: 9,
          },
          {
            no: 2,
            name: "team_id",
            kind: "scalar",
            T: 9,
          },
          {
            no: 3,
            name: "new_name",
            kind: "scalar",
            T: 9,
          },
        ]));
      class re extends C.v {
        static fromBinary(e, n) {
          return new re().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new re().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new re().fromJsonString(e, n);
        }
        static equals(e, n) {
          return N.w.util.equals(re, e, n);
        }
        constructor(e) {
          super(), N.w.util.initPartial(e, this);
        }
      }
      (re.runtime = N.w),
        (re.typeName = "exa.seat_management_pb.UpdateTeamNameInternalResponse"),
        (re.fields = N.w.util.newFieldList(() => []));
    },
    4577: function (e, n, t) {
      t.d(n, {
        $1: function () {
          return L;
        },
        AT: function () {
          return P;
        },
        Cw: function () {
          return em;
        },
        D4: function () {
          return h;
        },
        Db: function () {
          return es;
        },
        ER: function () {
          return G;
        },
        HH: function () {
          return R;
        },
        I6: function () {
          return ey;
        },
        IE: function () {
          return U;
        },
        Lk: function () {
          return x;
        },
        ML: function () {
          return b;
        },
        MT: function () {
          return eC;
        },
        Ro: function () {
          return ef;
        },
        Up: function () {
          return y;
        },
        Uu: function () {
          return E;
        },
        Vd: function () {
          return ei;
        },
        dF: function () {
          return H;
        },
        n6: function () {
          return D;
        },
        pS: function () {
          return M;
        },
        th: function () {
          return I;
        },
        x9: function () {
          return p;
        },
      });
      var a,
        r,
        i,
        s,
        o,
        _,
        m,
        E,
        u = t(18698),
        l = t(5462),
        c = t(21552),
        T = t(26847),
        d = t(35165);
      ((a = o || (o = {}))[(a.UNSPECIFIED = 0)] = "UNSPECIFIED"),
        (a[(a.USER_DATA = 1)] = "USER_DATA"),
        (a[(a.CHAT_DATA = 2)] = "CHAT_DATA"),
        (a[(a.COMMAND_DATA = 3)] = "COMMAND_DATA"),
        (a[(a.CASCADE_DATA = 4)] = "CASCADE_DATA"),
        (a[(a.PCW_DATA = 5)] = "PCW_DATA"),
        u.w.util.setEnumType(o, "exa.user_analytics_pb.QueryDataSource", [
          {
            no: 0,
            name: "QUERY_DATA_SOURCE_UNSPECIFIED",
          },
          {
            no: 1,
            name: "QUERY_DATA_SOURCE_USER_DATA",
          },
          {
            no: 2,
            name: "QUERY_DATA_SOURCE_CHAT_DATA",
          },
          {
            no: 3,
            name: "QUERY_DATA_SOURCE_COMMAND_DATA",
          },
          {
            no: 4,
            name: "QUERY_DATA_SOURCE_CASCADE_DATA",
          },
          {
            no: 5,
            name: "QUERY_DATA_SOURCE_PCW_DATA",
          },
        ]),
        ((r = _ || (_ = {}))[(r.UNSPECIFIED = 0)] = "UNSPECIFIED"),
        (r[(r.COUNT = 1)] = "COUNT"),
        (r[(r.SUM = 2)] = "SUM"),
        (r[(r.AVG = 3)] = "AVG"),
        (r[(r.MAX = 4)] = "MAX"),
        (r[(r.MIN = 5)] = "MIN"),
        u.w.util.setEnumType(_, "exa.user_analytics_pb.QueryAggregation", [
          {
            no: 0,
            name: "QUERY_AGGREGATION_UNSPECIFIED",
          },
          {
            no: 1,
            name: "QUERY_AGGREGATION_COUNT",
          },
          {
            no: 2,
            name: "QUERY_AGGREGATION_SUM",
          },
          {
            no: 3,
            name: "QUERY_AGGREGATION_AVG",
          },
          {
            no: 4,
            name: "QUERY_AGGREGATION_MAX",
          },
          {
            no: 5,
            name: "QUERY_AGGREGATION_MIN",
          },
        ]),
        ((i = m || (m = {}))[(i.UNSPECIFIED = 0)] = "UNSPECIFIED"),
        (i[(i.EQUAL = 1)] = "EQUAL"),
        (i[(i.NOT_EQUAL = 2)] = "NOT_EQUAL"),
        (i[(i.GREATER_THAN = 3)] = "GREATER_THAN"),
        (i[(i.LESS_THAN = 4)] = "LESS_THAN"),
        (i[(i.GE = 5)] = "GE"),
        (i[(i.LE = 6)] = "LE"),
        u.w.util.setEnumType(m, "exa.user_analytics_pb.QueryFilter", [
          {
            no: 0,
            name: "QUERY_FILTER_UNSPECIFIED",
          },
          {
            no: 1,
            name: "QUERY_FILTER_EQUAL",
          },
          {
            no: 2,
            name: "QUERY_FILTER_NOT_EQUAL",
          },
          {
            no: 3,
            name: "QUERY_FILTER_GREATER_THAN",
          },
          {
            no: 4,
            name: "QUERY_FILTER_LESS_THAN",
          },
          {
            no: 5,
            name: "QUERY_FILTER_GE",
          },
          {
            no: 6,
            name: "QUERY_FILTER_LE",
          },
        ]),
        ((s = E || (E = {}))[(s.IDE_TYPE_UNSPECIFIED = 0)] =
          "IDE_TYPE_UNSPECIFIED"),
        (s[(s.IDE_TYPE_WINDSURF = 1)] = "IDE_TYPE_WINDSURF"),
        (s[(s.IDE_TYPE_JETBRAINS = 2)] = "IDE_TYPE_JETBRAINS"),
        (s[(s.IDE_TYPE_PLUGINS = 3)] = "IDE_TYPE_PLUGINS"),
        u.w.util.setEnumType(E, "exa.user_analytics_pb.IDEType", [
          {
            no: 0,
            name: "IDE_TYPE_UNSPECIFIED",
          },
          {
            no: 1,
            name: "IDE_TYPE_WINDSURF",
          },
          {
            no: 2,
            name: "IDE_TYPE_JETBRAINS",
          },
          {
            no: 3,
            name: "IDE_TYPE_PLUGINS",
          },
        ]);
      class S extends l.v {
        static fromBinary(e, n) {
          return new S().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new S().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new S().fromJsonString(e, n);
        }
        static equals(e, n) {
          return u.w.util.equals(S, e, n);
        }
        constructor(e) {
          super(),
            (this.aggregationFunction = 0),
            (this.field = ""),
            (this.name = ""),
            u.w.util.initPartial(e, this);
        }
      }
      (S.runtime = u.w),
        (S.typeName = "exa.user_analytics_pb.QuerySelectionField"),
        (S.fields = u.w.util.newFieldList(() => [
          {
            no: 1,
            name: "aggregation_function",
            kind: "enum",
            T: u.w.getEnumType(_),
          },
          {
            no: 2,
            name: "field",
            kind: "scalar",
            T: 9,
          },
          {
            no: 3,
            name: "name",
            kind: "scalar",
            T: 9,
          },
        ]));
      class A extends l.v {
        static fromBinary(e, n) {
          return new A().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new A().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new A().fromJsonString(e, n);
        }
        static equals(e, n) {
          return u.w.util.equals(A, e, n);
        }
        constructor(e) {
          super(),
            (this.filter = 0),
            (this.name = ""),
            (this.value = ""),
            u.w.util.initPartial(e, this);
        }
      }
      (A.runtime = u.w),
        (A.typeName = "exa.user_analytics_pb.QueryFilterField"),
        (A.fields = u.w.util.newFieldList(() => [
          {
            no: 1,
            name: "filter",
            kind: "enum",
            T: u.w.getEnumType(m),
          },
          {
            no: 2,
            name: "name",
            kind: "scalar",
            T: 9,
          },
          {
            no: 3,
            name: "value",
            kind: "scalar",
            T: 9,
          },
        ]));
      class O extends l.v {
        static fromBinary(e, n) {
          return new O().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new O().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new O().fromJsonString(e, n);
        }
        static equals(e, n) {
          return u.w.util.equals(O, e, n);
        }
        constructor(e) {
          super(),
            (this.field = ""),
            (this.name = ""),
            u.w.util.initPartial(e, this);
        }
      }
      (O.runtime = u.w),
        (O.typeName = "exa.user_analytics_pb.QueryAggregationField"),
        (O.fields = u.w.util.newFieldList(() => [
          {
            no: 1,
            name: "field",
            kind: "scalar",
            T: 9,
          },
          {
            no: 2,
            name: "name",
            kind: "scalar",
            T: 9,
          },
        ]));
      class N extends l.v {
        static fromBinary(e, n) {
          return new N().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new N().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new N().fromJsonString(e, n);
        }
        static equals(e, n) {
          return u.w.util.equals(N, e, n);
        }
        constructor(e) {
          super(),
            (this.ascending = !1),
            (this.name = ""),
            u.w.util.initPartial(e, this);
        }
      }
      (N.runtime = u.w),
        (N.typeName = "exa.user_analytics_pb.QueryOrderField"),
        (N.fields = u.w.util.newFieldList(() => [
          {
            no: 1,
            name: "ascending",
            kind: "scalar",
            T: 8,
          },
          {
            no: 2,
            name: "name",
            kind: "scalar",
            T: 9,
          },
        ]));
      class C extends l.v {
        static fromBinary(e, n) {
          return new C().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new C().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new C().fromJsonString(e, n);
        }
        static equals(e, n) {
          return u.w.util.equals(C, e, n);
        }
        constructor(e) {
          super(),
            (this.dataSource = 0),
            (this.selections = []),
            (this.filters = []),
            (this.aggregations = []),
            (this.orderings = []),
            (this.useRealApiKey = !1),
            u.w.util.initPartial(e, this);
        }
      }
      (C.runtime = u.w),
        (C.typeName = "exa.user_analytics_pb.CustomQueryRequest"),
        (C.fields = u.w.util.newFieldList(() => [
          {
            no: 1,
            name: "data_source",
            kind: "enum",
            T: u.w.getEnumType(o),
          },
          {
            no: 2,
            name: "selections",
            kind: "message",
            T: S,
            repeated: !0,
          },
          {
            no: 3,
            name: "filters",
            kind: "message",
            T: A,
            repeated: !0,
          },
          {
            no: 5,
            name: "aggregations",
            kind: "message",
            T: O,
            repeated: !0,
          },
          {
            no: 4,
            name: "orderings",
            kind: "message",
            T: N,
            repeated: !0,
          },
          {
            no: 6,
            name: "use_real_api_key",
            kind: "scalar",
            T: 8,
          },
        ]));
      class f extends l.v {
        static fromBinary(e, n) {
          return new f().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new f().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new f().fromJsonString(e, n);
        }
        static equals(e, n) {
          return u.w.util.equals(f, e, n);
        }
        constructor(e) {
          super(), (this.item = {}), u.w.util.initPartial(e, this);
        }
      }
      (f.runtime = u.w),
        (f.typeName = "exa.user_analytics_pb.QueryResponseItem"),
        (f.fields = u.w.util.newFieldList(() => [
          {
            no: 1,
            name: "item",
            kind: "map",
            K: 9,
            V: {
              kind: "scalar",
              T: 9,
            },
          },
        ]));
      class w extends l.v {
        static fromBinary(e, n) {
          return new w().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new w().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new w().fromJsonString(e, n);
        }
        static equals(e, n) {
          return u.w.util.equals(w, e, n);
        }
        constructor(e) {
          super(), (this.responseItems = []), u.w.util.initPartial(e, this);
        }
      }
      (w.runtime = u.w),
        (w.typeName = "exa.user_analytics_pb.CustomQueryResponse"),
        (w.fields = u.w.util.newFieldList(() => [
          {
            no: 1,
            name: "response_items",
            kind: "message",
            T: f,
            repeated: !0,
          },
        ]));
      class I extends l.v {
        static fromBinary(e, n) {
          return new I().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new I().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new I().fromJsonString(e, n);
        }
        static equals(e, n) {
          return u.w.util.equals(I, e, n);
        }
        constructor(e) {
          super(),
            (this.queryRequests = []),
            (this.apiKey = ""),
            (this.groupId = ""),
            (this.apiKeys = []),
            (this.groupIds = []),
            (this.ideTypes = []),
            u.w.util.initPartial(e, this);
        }
      }
      (I.runtime = u.w),
        (I.typeName = "exa.user_analytics_pb.GetAnalyticsRequest"),
        (I.fields = u.w.util.newFieldList(() => [
          {
            no: 2,
            name: "query_requests",
            kind: "message",
            T: h,
            repeated: !0,
          },
          {
            no: 3,
            name: "start_timestamp",
            kind: "message",
            T: c.E,
          },
          {
            no: 4,
            name: "end_timestamp",
            kind: "message",
            T: c.E,
          },
          {
            no: 5,
            name: "api_key",
            kind: "scalar",
            T: 9,
          },
          {
            no: 6,
            name: "group_id",
            kind: "scalar",
            T: 9,
          },
          {
            no: 7,
            name: "api_keys",
            kind: "scalar",
            T: 9,
            repeated: !0,
          },
          {
            no: 8,
            name: "group_ids",
            kind: "scalar",
            T: 9,
            repeated: !0,
          },
          {
            no: 9,
            name: "ide_types",
            kind: "enum",
            T: u.w.getEnumType(E),
            repeated: !0,
          },
        ]));
      class R extends l.v {
        static fromBinary(e, n) {
          return new R().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new R().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new R().fromJsonString(e, n);
        }
        static equals(e, n) {
          return u.w.util.equals(R, e, n);
        }
        constructor(e) {
          super(),
            (this.serviceKey = ""),
            (this.groupName = ""),
            (this.emails = []),
            (this.ideTypes = []),
            (this.queryRequests = []),
            u.w.util.initPartial(e, this);
        }
      }
      (R.runtime = u.w),
        (R.typeName = "exa.user_analytics_pb.CascadeAnalyticsRequest"),
        (R.fields = u.w.util.newFieldList(() => [
          {
            no: 1,
            name: "service_key",
            kind: "scalar",
            T: 9,
          },
          {
            no: 2,
            name: "group_name",
            kind: "scalar",
            T: 9,
          },
          {
            no: 3,
            name: "emails",
            kind: "scalar",
            T: 9,
            repeated: !0,
          },
          {
            no: 4,
            name: "ide_types",
            kind: "scalar",
            T: 9,
            repeated: !0,
          },
          {
            no: 5,
            name: "start_timestamp",
            kind: "message",
            T: c.E,
          },
          {
            no: 6,
            name: "end_timestamp",
            kind: "message",
            T: c.E,
          },
          {
            no: 7,
            name: "query_requests",
            kind: "message",
            T: h,
            repeated: !0,
          },
        ]));
      class L extends l.v {
        static fromBinary(e, n) {
          return new L().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new L().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new L().fromJsonString(e, n);
        }
        static equals(e, n) {
          return u.w.util.equals(L, e, n);
        }
        constructor(e) {
          super(), (this.queryResults = []), u.w.util.initPartial(e, this);
        }
      }
      (L.runtime = u.w),
        (L.typeName = "exa.user_analytics_pb.CascadeAnalyticsResponse"),
        (L.fields = u.w.util.newFieldList(() => [
          {
            no: 1,
            name: "query_results",
            kind: "message",
            T: U,
            repeated: !0,
          },
        ]));
      class p extends l.v {
        static fromBinary(e, n) {
          return new p().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new p().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new p().fromJsonString(e, n);
        }
        static equals(e, n) {
          return u.w.util.equals(p, e, n);
        }
        constructor(e) {
          super(), (this.queryResults = []), u.w.util.initPartial(e, this);
        }
      }
      (p.runtime = u.w),
        (p.typeName = "exa.user_analytics_pb.GetAnalyticsResponse"),
        (p.fields = u.w.util.newFieldList(() => [
          {
            no: 1,
            name: "query_results",
            kind: "message",
            T: U,
            repeated: !0,
          },
        ]));
      class D extends l.v {
        static fromBinary(e, n) {
          return new D().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new D().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new D().fromJsonString(e, n);
        }
        static equals(e, n) {
          return u.w.util.equals(D, e, n);
        }
        constructor(e) {
          super(),
            (this.queryRequests = []),
            (this.serviceKey = ""),
            (this.groupName = ""),
            u.w.util.initPartial(e, this);
        }
      }
      (D.runtime = u.w),
        (D.typeName = "exa.user_analytics_pb.AnalyticsRequest"),
        (D.fields = u.w.util.newFieldList(() => [
          {
            no: 1,
            name: "query_requests",
            kind: "message",
            T: C,
            repeated: !0,
          },
          {
            no: 2,
            name: "service_key",
            kind: "scalar",
            T: 9,
          },
          {
            no: 3,
            name: "group_name",
            kind: "scalar",
            T: 9,
          },
          {
            no: 4,
            name: "start_timestamp",
            kind: "message",
            T: c.E,
          },
          {
            no: 5,
            name: "end_timestamp",
            kind: "message",
            T: c.E,
          },
        ]));
      class P extends l.v {
        static fromBinary(e, n) {
          return new P().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new P().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new P().fromJsonString(e, n);
        }
        static equals(e, n) {
          return u.w.util.equals(P, e, n);
        }
        constructor(e) {
          super(), (this.queryResults = []), u.w.util.initPartial(e, this);
        }
      }
      (P.runtime = u.w),
        (P.typeName = "exa.user_analytics_pb.AnalyticsResponse"),
        (P.fields = u.w.util.newFieldList(() => [
          {
            no: 1,
            name: "query_results",
            kind: "message",
            T: w,
            repeated: !0,
          },
        ]));
      class M extends l.v {
        static fromBinary(e, n) {
          return new M().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new M().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new M().fromJsonString(e, n);
        }
        static equals(e, n) {
          return u.w.util.equals(M, e, n);
        }
        constructor(e) {
          super(),
            (this.serviceKey = ""),
            (this.groupName = ""),
            u.w.util.initPartial(e, this);
        }
      }
      (M.runtime = u.w),
        (M.typeName = "exa.user_analytics_pb.UserPageAnalyticsRequest"),
        (M.fields = u.w.util.newFieldList(() => [
          {
            no: 1,
            name: "service_key",
            kind: "scalar",
            T: 9,
          },
          {
            no: 2,
            name: "group_name",
            kind: "scalar",
            T: 9,
          },
          {
            no: 3,
            name: "start_timestamp",
            kind: "message",
            T: c.E,
          },
          {
            no: 4,
            name: "end_timestamp",
            kind: "message",
            T: c.E,
          },
        ]));
      class y extends l.v {
        static fromBinary(e, n) {
          return new y().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new y().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new y().fromJsonString(e, n);
        }
        static equals(e, n) {
          return u.w.util.equals(y, e, n);
        }
        constructor(e) {
          super(), (this.userTableStats = []), u.w.util.initPartial(e, this);
        }
      }
      (y.runtime = u.w),
        (y.typeName = "exa.user_analytics_pb.UserPageAnalyticsResponse"),
        (y.fields = u.w.util.newFieldList(() => [
          {
            no: 1,
            name: "user_table_stats",
            kind: "message",
            T: d.jCT,
            repeated: !0,
          },
        ]));
      class h extends l.v {
        static fromBinary(e, n) {
          return new h().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new h().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new h().fromJsonString(e, n);
        }
        static equals(e, n) {
          return u.w.util.equals(h, e, n);
        }
        constructor(e) {
          super(),
            (this.requestType = {
              case: void 0,
            }),
            u.w.util.initPartial(e, this);
        }
      }
      (h.runtime = u.w),
        (h.typeName = "exa.user_analytics_pb.QueryRequest"),
        (h.fields = u.w.util.newFieldList(() => [
          {
            no: 1,
            name: "completion_stats",
            kind: "message",
            T: B,
            oneof: "request_type",
          },
          {
            no: 2,
            name: "completions_by_day",
            kind: "message",
            T: F,
            oneof: "request_type",
          },
          {
            no: 3,
            name: "completions_by_language",
            kind: "message",
            T: q,
            oneof: "request_type",
          },
          {
            no: 4,
            name: "all_users_completion_stats",
            kind: "message",
            T: ea,
            oneof: "request_type",
          },
          {
            no: 5,
            name: "all_users_completions_by_day",
            kind: "message",
            T: en,
            oneof: "request_type",
          },
          {
            no: 6,
            name: "all_users_completions_by_language",
            kind: "message",
            T: et,
            oneof: "request_type",
          },
          {
            no: 7,
            name: "completions_by_ide",
            kind: "message",
            T: v,
            oneof: "request_type",
          },
          {
            no: 8,
            name: "all_users_completions_by_ide",
            kind: "message",
            T: v,
            oneof: "request_type",
          },
          {
            no: 9,
            name: "completions_by_api_key",
            kind: "message",
            T: er,
            oneof: "request_type",
          },
          {
            no: 19,
            name: "completions_by_repository",
            kind: "message",
            T: V,
            oneof: "request_type",
          },
          {
            no: 10,
            name: "chats_by_day",
            kind: "message",
            T: K,
            oneof: "request_type",
          },
          {
            no: 11,
            name: "all_users_chats_by_day",
            kind: "message",
            T: Y,
            oneof: "request_type",
          },
          {
            no: 12,
            name: "chats_by_model",
            kind: "message",
            T: Z,
            oneof: "request_type",
          },
          {
            no: 13,
            name: "all_users_chats_by_model",
            kind: "message",
            T: $,
            oneof: "request_type",
          },
          {
            no: 14,
            name: "active_user_count",
            kind: "message",
            T: Q,
            oneof: "request_type",
          },
          {
            no: 15,
            name: "percent_code_written",
            kind: "message",
            T: e_,
            oneof: "request_type",
          },
          {
            no: 16,
            name: "chars_per_opportunity",
            kind: "message",
            T: eE,
            oneof: "request_type",
          },
          {
            no: 17,
            name: "chat_stats",
            kind: "message",
            T: el,
            oneof: "request_type",
          },
          {
            no: 18,
            name: "active_days_by_api_key",
            kind: "message",
            T: eA,
            oneof: "request_type",
          },
          {
            no: 20,
            name: "command_stats",
            kind: "message",
            T: eT,
            oneof: "request_type",
          },
          {
            no: 21,
            name: "custom_query",
            kind: "message",
            T: C,
            oneof: "request_type",
          },
          {
            no: 22,
            name: "user_page_analytics",
            kind: "message",
            T: M,
            oneof: "request_type",
          },
          {
            no: 23,
            name: "cascade_lines",
            kind: "message",
            T: ew,
            oneof: "request_type",
          },
          {
            no: 24,
            name: "cascade_tool_usage",
            kind: "message",
            T: eL,
            oneof: "request_type",
          },
          {
            no: 25,
            name: "cascade_runs",
            kind: "message",
            T: eP,
            oneof: "request_type",
          },
          {
            no: 26,
            name: "all_users_cascade_lines",
            kind: "message",
            T: eg,
            oneof: "request_type",
          },
          {
            no: 27,
            name: "all_users_cascade_tool_usage",
            kind: "message",
            T: eU,
            oneof: "request_type",
          },
          {
            no: 28,
            name: "all_users_cascade_runs",
            kind: "message",
            T: eh,
            oneof: "request_type",
          },
          {
            no: 29,
            name: "all_users_daily_active_user_counts",
            kind: "message",
            T: k,
            oneof: "request_type",
          },
          {
            no: 30,
            name: "all_users_command_stats",
            kind: "message",
            T: ed,
            oneof: "request_type",
          },
          {
            no: 31,
            name: "individual_percent_code_written",
            kind: "message",
            T: eo,
            oneof: "request_type",
          },
        ]));
      class U extends l.v {
        static fromBinary(e, n) {
          return new U().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new U().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new U().fromJsonString(e, n);
        }
        static equals(e, n) {
          return u.w.util.equals(U, e, n);
        }
        constructor(e) {
          super(),
            (this.resultType = {
              case: void 0,
            }),
            u.w.util.initPartial(e, this);
        }
      }
      (U.runtime = u.w),
        (U.typeName = "exa.user_analytics_pb.QueryResult"),
        (U.fields = u.w.util.newFieldList(() => [
          {
            no: 1,
            name: "completion_stats",
            kind: "message",
            T: G,
            oneof: "result_type",
          },
          {
            no: 2,
            name: "completions_by_day",
            kind: "message",
            T: x,
            oneof: "result_type",
          },
          {
            no: 3,
            name: "completions_by_language",
            kind: "message",
            T: b,
            oneof: "result_type",
          },
          {
            no: 4,
            name: "completions_by_ide",
            kind: "message",
            T: H,
            oneof: "result_type",
          },
          {
            no: 5,
            name: "completions_by_api_key",
            kind: "message",
            T: ei,
            oneof: "result_type",
          },
          {
            no: 13,
            name: "completions_by_repository",
            kind: "message",
            T: W,
            oneof: "result_type",
          },
          {
            no: 6,
            name: "chats_by_day",
            kind: "message",
            T: X,
            oneof: "result_type",
          },
          {
            no: 7,
            name: "chats_by_model",
            kind: "message",
            T: ee,
            oneof: "result_type",
          },
          {
            no: 8,
            name: "active_user_count",
            kind: "message",
            T: es,
            oneof: "result_type",
          },
          {
            no: 9,
            name: "percent_code_written",
            kind: "message",
            T: em,
            oneof: "result_type",
          },
          {
            no: 10,
            name: "chars_per_opportunity",
            kind: "message",
            T: eu,
            oneof: "result_type",
          },
          {
            no: 11,
            name: "chat_stats",
            kind: "message",
            T: ec,
            oneof: "result_type",
          },
          {
            no: 12,
            name: "active_days_by_api_key",
            kind: "message",
            T: eO,
            oneof: "result_type",
          },
          {
            no: 14,
            name: "error",
            kind: "message",
            T: eN,
            oneof: "result_type",
          },
          {
            no: 15,
            name: "command_stats",
            kind: "message",
            T: eS,
            oneof: "result_type",
          },
          {
            no: 16,
            name: "custom_stats",
            kind: "message",
            T: w,
            oneof: "result_type",
          },
          {
            no: 17,
            name: "user_page_analytics",
            kind: "message",
            T: y,
            oneof: "result_type",
          },
          {
            no: 18,
            name: "cascade_lines",
            kind: "message",
            T: eR,
            oneof: "result_type",
          },
          {
            no: 19,
            name: "cascade_tool_usage",
            kind: "message",
            T: eD,
            oneof: "result_type",
          },
          {
            no: 20,
            name: "cascade_runs",
            kind: "message",
            T: ey,
            oneof: "result_type",
          },
          {
            no: 21,
            name: "daily_active_user_counts",
            kind: "message",
            T: J,
            oneof: "result_type",
          },
        ]));
      class g extends l.v {
        static fromBinary(e, n) {
          return new g().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new g().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new g().fromJsonString(e, n);
        }
        static equals(e, n) {
          return u.w.util.equals(g, e, n);
        }
        constructor(e) {
          super(),
            (this.activeUserCount = T.q.zero),
            u.w.util.initPartial(e, this);
        }
      }
      (g.runtime = u.w),
        (g.typeName = "exa.user_analytics_pb.DailyActiveUserCount"),
        (g.fields = u.w.util.newFieldList(() => [
          {
            no: 1,
            name: "day",
            kind: "message",
            T: c.E,
          },
          {
            no: 2,
            name: "active_user_count",
            kind: "scalar",
            T: 3,
          },
        ]));
      class J extends l.v {
        static fromBinary(e, n) {
          return new J().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new J().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new J().fromJsonString(e, n);
        }
        static equals(e, n) {
          return u.w.util.equals(J, e, n);
        }
        constructor(e) {
          super(),
            (this.dailyActiveUserCounts = []),
            u.w.util.initPartial(e, this);
        }
      }
      (J.runtime = u.w),
        (J.typeName = "exa.user_analytics_pb.QueryResultDailyActiveUserCounts"),
        (J.fields = u.w.util.newFieldList(() => [
          {
            no: 1,
            name: "daily_active_user_counts",
            kind: "message",
            T: g,
            repeated: !0,
          },
        ]));
      class k extends l.v {
        static fromBinary(e, n) {
          return new k().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new k().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new k().fromJsonString(e, n);
        }
        static equals(e, n) {
          return u.w.util.equals(k, e, n);
        }
        constructor(e) {
          super(), u.w.util.initPartial(e, this);
        }
      }
      (k.runtime = u.w),
        (k.typeName =
          "exa.user_analytics_pb.QueryRequestAllUsersDailyActiveUserCounts"),
        (k.fields = u.w.util.newFieldList(() => []));
      class B extends l.v {
        static fromBinary(e, n) {
          return new B().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new B().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new B().fromJsonString(e, n);
        }
        static equals(e, n) {
          return u.w.util.equals(B, e, n);
        }
        constructor(e) {
          super(), u.w.util.initPartial(e, this);
        }
      }
      (B.runtime = u.w),
        (B.typeName = "exa.user_analytics_pb.QueryRequestCompletionStats"),
        (B.fields = u.w.util.newFieldList(() => []));
      class G extends l.v {
        static fromBinary(e, n) {
          return new G().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new G().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new G().fromJsonString(e, n);
        }
        static equals(e, n) {
          return u.w.util.equals(G, e, n);
        }
        constructor(e) {
          super(), u.w.util.initPartial(e, this);
        }
      }
      (G.runtime = u.w),
        (G.typeName = "exa.user_analytics_pb.QueryResultCompletionStats"),
        (G.fields = u.w.util.newFieldList(() => [
          {
            no: 1,
            name: "completion_statistics",
            kind: "message",
            T: d.yRI,
          },
        ]));
      class F extends l.v {
        static fromBinary(e, n) {
          return new F().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new F().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new F().fromJsonString(e, n);
        }
        static equals(e, n) {
          return u.w.util.equals(F, e, n);
        }
        constructor(e) {
          super(), (this.timeZone = ""), u.w.util.initPartial(e, this);
        }
      }
      (F.runtime = u.w),
        (F.typeName = "exa.user_analytics_pb.QueryRequestCompletionsByDay"),
        (F.fields = u.w.util.newFieldList(() => [
          {
            no: 1,
            name: "time_zone",
            kind: "scalar",
            T: 9,
          },
        ]));
      class x extends l.v {
        static fromBinary(e, n) {
          return new x().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new x().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new x().fromJsonString(e, n);
        }
        static equals(e, n) {
          return u.w.util.equals(x, e, n);
        }
        constructor(e) {
          super(), (this.completionsByDay = []), u.w.util.initPartial(e, this);
        }
      }
      (x.runtime = u.w),
        (x.typeName = "exa.user_analytics_pb.QueryResultCompletionsByDay"),
        (x.fields = u.w.util.newFieldList(() => [
          {
            no: 1,
            name: "completions_by_day",
            kind: "message",
            T: d.kCJ,
            repeated: !0,
          },
        ]));
      class q extends l.v {
        static fromBinary(e, n) {
          return new q().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new q().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new q().fromJsonString(e, n);
        }
        static equals(e, n) {
          return u.w.util.equals(q, e, n);
        }
        constructor(e) {
          super(), u.w.util.initPartial(e, this);
        }
      }
      (q.runtime = u.w),
        (q.typeName =
          "exa.user_analytics_pb.QueryRequestCompletionsByLanguage"),
        (q.fields = u.w.util.newFieldList(() => []));
      class b extends l.v {
        static fromBinary(e, n) {
          return new b().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new b().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new b().fromJsonString(e, n);
        }
        static equals(e, n) {
          return u.w.util.equals(b, e, n);
        }
        constructor(e) {
          super(),
            (this.completionsByLanguage = []),
            u.w.util.initPartial(e, this);
        }
      }
      (b.runtime = u.w),
        (b.typeName = "exa.user_analytics_pb.QueryResultCompletionsByLanguage"),
        (b.fields = u.w.util.newFieldList(() => [
          {
            no: 1,
            name: "completions_by_language",
            kind: "message",
            T: d.qBR,
            repeated: !0,
          },
        ]));
      class v extends l.v {
        static fromBinary(e, n) {
          return new v().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new v().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new v().fromJsonString(e, n);
        }
        static equals(e, n) {
          return u.w.util.equals(v, e, n);
        }
        constructor(e) {
          super(), u.w.util.initPartial(e, this);
        }
      }
      (v.runtime = u.w),
        (v.typeName = "exa.user_analytics_pb.QueryRequestCompletionsByIde"),
        (v.fields = u.w.util.newFieldList(() => []));
      class H extends l.v {
        static fromBinary(e, n) {
          return new H().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new H().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new H().fromJsonString(e, n);
        }
        static equals(e, n) {
          return u.w.util.equals(H, e, n);
        }
        constructor(e) {
          super(), (this.completionsByIde = {}), u.w.util.initPartial(e, this);
        }
      }
      (H.runtime = u.w),
        (H.typeName = "exa.user_analytics_pb.QueryResultCompletionsByIde"),
        (H.fields = u.w.util.newFieldList(() => [
          {
            no: 1,
            name: "completions_by_ide",
            kind: "map",
            K: 9,
            V: {
              kind: "message",
              T: d.yRI,
            },
          },
        ]));
      class V extends l.v {
        static fromBinary(e, n) {
          return new V().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new V().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new V().fromJsonString(e, n);
        }
        static equals(e, n) {
          return u.w.util.equals(V, e, n);
        }
        constructor(e) {
          super(), u.w.util.initPartial(e, this);
        }
      }
      (V.runtime = u.w),
        (V.typeName =
          "exa.user_analytics_pb.QueryRequestCompletionsByRepository"),
        (V.fields = u.w.util.newFieldList(() => []));
      class W extends l.v {
        static fromBinary(e, n) {
          return new W().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new W().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new W().fromJsonString(e, n);
        }
        static equals(e, n) {
          return u.w.util.equals(W, e, n);
        }
        constructor(e) {
          super(),
            (this.completionsByRepository = {}),
            u.w.util.initPartial(e, this);
        }
      }
      (W.runtime = u.w),
        (W.typeName =
          "exa.user_analytics_pb.QueryResultCompletionsByRepository"),
        (W.fields = u.w.util.newFieldList(() => [
          {
            no: 1,
            name: "completions_by_repository",
            kind: "map",
            K: 9,
            V: {
              kind: "message",
              T: d.yRI,
            },
          },
        ]));
      class K extends l.v {
        static fromBinary(e, n) {
          return new K().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new K().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new K().fromJsonString(e, n);
        }
        static equals(e, n) {
          return u.w.util.equals(K, e, n);
        }
        constructor(e) {
          super(), (this.timeZone = ""), u.w.util.initPartial(e, this);
        }
      }
      (K.runtime = u.w),
        (K.typeName = "exa.user_analytics_pb.QueryRequestChatsByDay"),
        (K.fields = u.w.util.newFieldList(() => [
          {
            no: 1,
            name: "time_zone",
            kind: "scalar",
            T: 9,
          },
        ]));
      class X extends l.v {
        static fromBinary(e, n) {
          return new X().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new X().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new X().fromJsonString(e, n);
        }
        static equals(e, n) {
          return u.w.util.equals(X, e, n);
        }
        constructor(e) {
          super(), (this.chatsByDay = []), u.w.util.initPartial(e, this);
        }
      }
      (X.runtime = u.w),
        (X.typeName = "exa.user_analytics_pb.QueryResultChatsByDay"),
        (X.fields = u.w.util.newFieldList(() => [
          {
            no: 1,
            name: "chats_by_day",
            kind: "message",
            T: d.yUQ,
            repeated: !0,
          },
        ]));
      class Y extends l.v {
        static fromBinary(e, n) {
          return new Y().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new Y().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new Y().fromJsonString(e, n);
        }
        static equals(e, n) {
          return u.w.util.equals(Y, e, n);
        }
        constructor(e) {
          super(), (this.timeZone = ""), u.w.util.initPartial(e, this);
        }
      }
      (Y.runtime = u.w),
        (Y.typeName = "exa.user_analytics_pb.QueryRequestAllChatsByDay"),
        (Y.fields = u.w.util.newFieldList(() => [
          {
            no: 1,
            name: "time_zone",
            kind: "scalar",
            T: 9,
          },
        ]));
      class Q extends l.v {
        static fromBinary(e, n) {
          return new Q().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new Q().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new Q().fromJsonString(e, n);
        }
        static equals(e, n) {
          return u.w.util.equals(Q, e, n);
        }
        constructor(e) {
          super(), (this.timeZone = ""), u.w.util.initPartial(e, this);
        }
      }
      (Q.runtime = u.w),
        (Q.typeName = "exa.user_analytics_pb.QueryRequestActiveUserCount"),
        (Q.fields = u.w.util.newFieldList(() => [
          {
            no: 1,
            name: "time_zone",
            kind: "scalar",
            T: 9,
          },
          {
            no: 2,
            name: "start_timestamp",
            kind: "message",
            T: c.E,
          },
          {
            no: 3,
            name: "end_timestamp",
            kind: "message",
            T: c.E,
          },
        ]));
      class z extends l.v {
        static fromBinary(e, n) {
          return new z().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new z().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new z().fromJsonString(e, n);
        }
        static equals(e, n) {
          return u.w.util.equals(z, e, n);
        }
        constructor(e) {
          super(), (this.timeZone = ""), u.w.util.initPartial(e, this);
        }
      }
      (z.runtime = u.w),
        (z.typeName =
          "exa.user_analytics_pb.QueryRequestActiveUserCountByUsers"),
        (z.fields = u.w.util.newFieldList(() => [
          {
            no: 1,
            name: "time_zone",
            kind: "scalar",
            T: 9,
          },
        ]));
      class j extends l.v {
        static fromBinary(e, n) {
          return new j().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new j().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new j().fromJsonString(e, n);
        }
        static equals(e, n) {
          return u.w.util.equals(j, e, n);
        }
        constructor(e) {
          super(), u.w.util.initPartial(e, this);
        }
      }
      (j.runtime = u.w),
        (j.typeName =
          "exa.user_analytics_pb.QueryRequestDailyActiveUserCounts"),
        (j.fields = u.w.util.newFieldList(() => []));
      class Z extends l.v {
        static fromBinary(e, n) {
          return new Z().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new Z().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new Z().fromJsonString(e, n);
        }
        static equals(e, n) {
          return u.w.util.equals(Z, e, n);
        }
        constructor(e) {
          super(), u.w.util.initPartial(e, this);
        }
      }
      (Z.runtime = u.w),
        (Z.typeName = "exa.user_analytics_pb.QueryRequestChatStatsByModel"),
        (Z.fields = u.w.util.newFieldList(() => []));
      class $ extends l.v {
        static fromBinary(e, n) {
          return new $().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new $().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new $().fromJsonString(e, n);
        }
        static equals(e, n) {
          return u.w.util.equals($, e, n);
        }
        constructor(e) {
          super(), u.w.util.initPartial(e, this);
        }
      }
      ($.runtime = u.w),
        ($.typeName = "exa.user_analytics_pb.QueryRequestAllChatStatsByModel"),
        ($.fields = u.w.util.newFieldList(() => []));
      class ee extends l.v {
        static fromBinary(e, n) {
          return new ee().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new ee().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new ee().fromJsonString(e, n);
        }
        static equals(e, n) {
          return u.w.util.equals(ee, e, n);
        }
        constructor(e) {
          super(), (this.chatsByModel = []), u.w.util.initPartial(e, this);
        }
      }
      (ee.runtime = u.w),
        (ee.typeName = "exa.user_analytics_pb.QueryResultChatStatsByModel"),
        (ee.fields = u.w.util.newFieldList(() => [
          {
            no: 1,
            name: "chats_by_model",
            kind: "message",
            T: d.nZ9,
            repeated: !0,
          },
        ]));
      class en extends l.v {
        static fromBinary(e, n) {
          return new en().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new en().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new en().fromJsonString(e, n);
        }
        static equals(e, n) {
          return u.w.util.equals(en, e, n);
        }
        constructor(e) {
          super(), (this.timeZone = ""), u.w.util.initPartial(e, this);
        }
      }
      (en.runtime = u.w),
        (en.typeName =
          "exa.user_analytics_pb.QueryRequestAllUsersCompletionsByDay"),
        (en.fields = u.w.util.newFieldList(() => [
          {
            no: 1,
            name: "time_zone",
            kind: "scalar",
            T: 9,
          },
        ]));
      class et extends l.v {
        static fromBinary(e, n) {
          return new et().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new et().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new et().fromJsonString(e, n);
        }
        static equals(e, n) {
          return u.w.util.equals(et, e, n);
        }
        constructor(e) {
          super(), u.w.util.initPartial(e, this);
        }
      }
      (et.runtime = u.w),
        (et.typeName =
          "exa.user_analytics_pb.QueryRequestAllUsersCompletionsByLanguage"),
        (et.fields = u.w.util.newFieldList(() => []));
      class ea extends l.v {
        static fromBinary(e, n) {
          return new ea().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new ea().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new ea().fromJsonString(e, n);
        }
        static equals(e, n) {
          return u.w.util.equals(ea, e, n);
        }
        constructor(e) {
          super(), u.w.util.initPartial(e, this);
        }
      }
      (ea.runtime = u.w),
        (ea.typeName =
          "exa.user_analytics_pb.QueryRequestAllUsersCompletionStats"),
        (ea.fields = u.w.util.newFieldList(() => []));
      class er extends l.v {
        static fromBinary(e, n) {
          return new er().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new er().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new er().fromJsonString(e, n);
        }
        static equals(e, n) {
          return u.w.util.equals(er, e, n);
        }
        constructor(e) {
          super(), u.w.util.initPartial(e, this);
        }
      }
      (er.runtime = u.w),
        (er.typeName = "exa.user_analytics_pb.QueryRequestCompletionsByApiKey"),
        (er.fields = u.w.util.newFieldList(() => []));
      class ei extends l.v {
        static fromBinary(e, n) {
          return new ei().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new ei().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new ei().fromJsonString(e, n);
        }
        static equals(e, n) {
          return u.w.util.equals(ei, e, n);
        }
        constructor(e) {
          super(),
            (this.completionsByApiKey = {}),
            u.w.util.initPartial(e, this);
        }
      }
      (ei.runtime = u.w),
        (ei.typeName = "exa.user_analytics_pb.QueryResultCompletionsByApiKey"),
        (ei.fields = u.w.util.newFieldList(() => [
          {
            no: 1,
            name: "completions_by_api_key",
            kind: "map",
            K: 9,
            V: {
              kind: "message",
              T: d.yRI,
            },
          },
        ]));
      class es extends l.v {
        static fromBinary(e, n) {
          return new es().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new es().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new es().fromJsonString(e, n);
        }
        static equals(e, n) {
          return u.w.util.equals(es, e, n);
        }
        constructor(e) {
          super(),
            (this.activeUserCount = T.q.zero),
            u.w.util.initPartial(e, this);
        }
      }
      (es.runtime = u.w),
        (es.typeName = "exa.user_analytics_pb.QueryResultActiveUserCount"),
        (es.fields = u.w.util.newFieldList(() => [
          {
            no: 1,
            name: "active_user_count",
            kind: "scalar",
            T: 3,
          },
        ]));
      class eo extends l.v {
        static fromBinary(e, n) {
          return new eo().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new eo().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new eo().fromJsonString(e, n);
        }
        static equals(e, n) {
          return u.w.util.equals(eo, e, n);
        }
        constructor(e) {
          super(), u.w.util.initPartial(e, this);
        }
      }
      (eo.runtime = u.w),
        (eo.typeName =
          "exa.user_analytics_pb.QueryRequestIndividualPercentCodeWritten"),
        (eo.fields = u.w.util.newFieldList(() => []));
      class e_ extends l.v {
        static fromBinary(e, n) {
          return new e_().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new e_().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new e_().fromJsonString(e, n);
        }
        static equals(e, n) {
          return u.w.util.equals(e_, e, n);
        }
        constructor(e) {
          super(), u.w.util.initPartial(e, this);
        }
      }
      (e_.runtime = u.w),
        (e_.typeName = "exa.user_analytics_pb.QueryRequestPercentCodeWritten"),
        (e_.fields = u.w.util.newFieldList(() => []));
      class em extends l.v {
        static fromBinary(e, n) {
          return new em().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new em().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new em().fromJsonString(e, n);
        }
        static equals(e, n) {
          return u.w.util.equals(em, e, n);
        }
        constructor(e) {
          super(),
            (this.percentCodeWritten = 0),
            (this.codeiumBytesByAutocomplete = T.q.zero),
            (this.codeiumBytesByCommand = T.q.zero),
            (this.codeiumBytesBySupercomplete = T.q.zero),
            (this.codeiumBytesByCascade = T.q.zero),
            (this.userBytes = T.q.zero),
            (this.codeiumBytes = T.q.zero),
            (this.totalBytes = T.q.zero),
            u.w.util.initPartial(e, this);
        }
      }
      (em.runtime = u.w),
        (em.typeName = "exa.user_analytics_pb.QueryResultPercentCodeWritten"),
        (em.fields = u.w.util.newFieldList(() => [
          {
            no: 1,
            name: "percent_code_written",
            kind: "scalar",
            T: 1,
          },
          {
            no: 2,
            name: "codeium_bytes_by_autocomplete",
            kind: "scalar",
            T: 3,
          },
          {
            no: 3,
            name: "codeium_bytes_by_command",
            kind: "scalar",
            T: 3,
          },
          {
            no: 7,
            name: "codeium_bytes_by_supercomplete",
            kind: "scalar",
            T: 3,
          },
          {
            no: 8,
            name: "codeium_bytes_by_cascade",
            kind: "scalar",
            T: 3,
          },
          {
            no: 4,
            name: "user_bytes",
            kind: "scalar",
            T: 3,
          },
          {
            no: 5,
            name: "codeium_bytes",
            kind: "scalar",
            T: 3,
          },
          {
            no: 6,
            name: "total_bytes",
            kind: "scalar",
            T: 3,
          },
        ]));
      class eE extends l.v {
        static fromBinary(e, n) {
          return new eE().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new eE().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new eE().fromJsonString(e, n);
        }
        static equals(e, n) {
          return u.w.util.equals(eE, e, n);
        }
        constructor(e) {
          super(), u.w.util.initPartial(e, this);
        }
      }
      (eE.runtime = u.w),
        (eE.typeName = "exa.user_analytics_pb.QueryRequestCharsPerOpportunity"),
        (eE.fields = u.w.util.newFieldList(() => []));
      class eu extends l.v {
        static fromBinary(e, n) {
          return new eu().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new eu().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new eu().fromJsonString(e, n);
        }
        static equals(e, n) {
          return u.w.util.equals(eu, e, n);
        }
        constructor(e) {
          super(),
            (this.charsPerOpportunity = 0),
            (this.numBytesAccepted = T.q.zero),
            (this.numCompletionAttempts = T.q.zero),
            u.w.util.initPartial(e, this);
        }
      }
      (eu.runtime = u.w),
        (eu.typeName = "exa.user_analytics_pb.QueryResultCharsPerOpportunity"),
        (eu.fields = u.w.util.newFieldList(() => [
          {
            no: 1,
            name: "chars_per_opportunity",
            kind: "scalar",
            T: 1,
          },
          {
            no: 2,
            name: "num_bytes_accepted",
            kind: "scalar",
            T: 4,
          },
          {
            no: 3,
            name: "num_completion_attempts",
            kind: "scalar",
            T: 4,
          },
        ]));
      class el extends l.v {
        static fromBinary(e, n) {
          return new el().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new el().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new el().fromJsonString(e, n);
        }
        static equals(e, n) {
          return u.w.util.equals(el, e, n);
        }
        constructor(e) {
          super(), u.w.util.initPartial(e, this);
        }
      }
      (el.runtime = u.w),
        (el.typeName = "exa.user_analytics_pb.QueryRequestChatStats"),
        (el.fields = u.w.util.newFieldList(() => []));
      class ec extends l.v {
        static fromBinary(e, n) {
          return new ec().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new ec().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new ec().fromJsonString(e, n);
        }
        static equals(e, n) {
          return u.w.util.equals(ec, e, n);
        }
        constructor(e) {
          super(), u.w.util.initPartial(e, this);
        }
      }
      (ec.runtime = u.w),
        (ec.typeName = "exa.user_analytics_pb.QueryResultChatStats"),
        (ec.fields = u.w.util.newFieldList(() => [
          {
            no: 1,
            name: "chat_stats",
            kind: "message",
            T: d.Dj3,
          },
        ]));
      class eT extends l.v {
        static fromBinary(e, n) {
          return new eT().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new eT().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new eT().fromJsonString(e, n);
        }
        static equals(e, n) {
          return u.w.util.equals(eT, e, n);
        }
        constructor(e) {
          super(), u.w.util.initPartial(e, this);
        }
      }
      (eT.runtime = u.w),
        (eT.typeName = "exa.user_analytics_pb.QueryRequestCommandStats"),
        (eT.fields = u.w.util.newFieldList(() => []));
      class ed extends l.v {
        static fromBinary(e, n) {
          return new ed().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new ed().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new ed().fromJsonString(e, n);
        }
        static equals(e, n) {
          return u.w.util.equals(ed, e, n);
        }
        constructor(e) {
          super(), u.w.util.initPartial(e, this);
        }
      }
      (ed.runtime = u.w),
        (ed.typeName =
          "exa.user_analytics_pb.QueryRequestAllUsersCommandStats"),
        (ed.fields = u.w.util.newFieldList(() => []));
      class eS extends l.v {
        static fromBinary(e, n) {
          return new eS().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new eS().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new eS().fromJsonString(e, n);
        }
        static equals(e, n) {
          return u.w.util.equals(eS, e, n);
        }
        constructor(e) {
          super(), u.w.util.initPartial(e, this);
        }
      }
      (eS.runtime = u.w),
        (eS.typeName = "exa.user_analytics_pb.QueryResultCommandStats"),
        (eS.fields = u.w.util.newFieldList(() => [
          {
            no: 1,
            name: "command_stats",
            kind: "message",
            T: d.xdI,
          },
        ]));
      class eA extends l.v {
        static fromBinary(e, n) {
          return new eA().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new eA().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new eA().fromJsonString(e, n);
        }
        static equals(e, n) {
          return u.w.util.equals(eA, e, n);
        }
        constructor(e) {
          super(), u.w.util.initPartial(e, this);
        }
      }
      (eA.runtime = u.w),
        (eA.typeName = "exa.user_analytics_pb.QueryRequestActiveDaysByApiKey"),
        (eA.fields = u.w.util.newFieldList(() => []));
      class eO extends l.v {
        static fromBinary(e, n) {
          return new eO().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new eO().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new eO().fromJsonString(e, n);
        }
        static equals(e, n) {
          return u.w.util.equals(eO, e, n);
        }
        constructor(e) {
          super(),
            (this.activeDaysByApiKey = {}),
            u.w.util.initPartial(e, this);
        }
      }
      (eO.runtime = u.w),
        (eO.typeName = "exa.user_analytics_pb.QueryResultActiveDaysByApiKey"),
        (eO.fields = u.w.util.newFieldList(() => [
          {
            no: 1,
            name: "active_days_by_api_key",
            kind: "map",
            K: 9,
            V: {
              kind: "scalar",
              T: 13,
            },
          },
        ]));
      class eN extends l.v {
        static fromBinary(e, n) {
          return new eN().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new eN().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new eN().fromJsonString(e, n);
        }
        static equals(e, n) {
          return u.w.util.equals(eN, e, n);
        }
        constructor(e) {
          super(), (this.error = ""), u.w.util.initPartial(e, this);
        }
      }
      (eN.runtime = u.w),
        (eN.typeName = "exa.user_analytics_pb.QueryResultError"),
        (eN.fields = u.w.util.newFieldList(() => [
          {
            no: 1,
            name: "error",
            kind: "scalar",
            T: 9,
          },
        ]));
      class eC extends l.v {
        static fromBinary(e, n) {
          return new eC().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new eC().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new eC().fromJsonString(e, n);
        }
        static equals(e, n) {
          return u.w.util.equals(eC, e, n);
        }
        constructor(e) {
          super(), (this.apiKey = ""), u.w.util.initPartial(e, this);
        }
      }
      (eC.runtime = u.w),
        (eC.typeName = "exa.user_analytics_pb.GetPreferredTimeZoneRequest"),
        (eC.fields = u.w.util.newFieldList(() => [
          {
            no: 1,
            name: "api_key",
            kind: "scalar",
            T: 9,
          },
        ]));
      class ef extends l.v {
        static fromBinary(e, n) {
          return new ef().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new ef().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new ef().fromJsonString(e, n);
        }
        static equals(e, n) {
          return u.w.util.equals(ef, e, n);
        }
        constructor(e) {
          super(), (this.preferredTimeZone = ""), u.w.util.initPartial(e, this);
        }
      }
      (ef.runtime = u.w),
        (ef.typeName = "exa.user_analytics_pb.GetPreferredTimeZoneResponse"),
        (ef.fields = u.w.util.newFieldList(() => [
          {
            no: 1,
            name: "preferred_time_zone",
            kind: "scalar",
            T: 9,
          },
        ]));
      class ew extends l.v {
        static fromBinary(e, n) {
          return new ew().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new ew().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new ew().fromJsonString(e, n);
        }
        static equals(e, n) {
          return u.w.util.equals(ew, e, n);
        }
        constructor(e) {
          super(), u.w.util.initPartial(e, this);
        }
      }
      (ew.runtime = u.w),
        (ew.typeName = "exa.user_analytics_pb.QueryRequestCascadeLines"),
        (ew.fields = u.w.util.newFieldList(() => []));
      class eI extends l.v {
        static fromBinary(e, n) {
          return new eI().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new eI().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new eI().fromJsonString(e, n);
        }
        static equals(e, n) {
          return u.w.util.equals(eI, e, n);
        }
        constructor(e) {
          super(),
            (this.linesSuggested = T.q.zero),
            (this.linesAccepted = T.q.zero),
            u.w.util.initPartial(e, this);
        }
      }
      (eI.runtime = u.w),
        (eI.typeName = "exa.user_analytics_pb.CascadeLineQueryEntry"),
        (eI.fields = u.w.util.newFieldList(() => [
          {
            no: 1,
            name: "day",
            kind: "message",
            T: c.E,
          },
          {
            no: 2,
            name: "lines_suggested",
            kind: "scalar",
            T: 3,
          },
          {
            no: 3,
            name: "lines_accepted",
            kind: "scalar",
            T: 3,
          },
        ]));
      class eR extends l.v {
        static fromBinary(e, n) {
          return new eR().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new eR().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new eR().fromJsonString(e, n);
        }
        static equals(e, n) {
          return u.w.util.equals(eR, e, n);
        }
        constructor(e) {
          super(), (this.cascadeLines = []), u.w.util.initPartial(e, this);
        }
      }
      (eR.runtime = u.w),
        (eR.typeName = "exa.user_analytics_pb.QueryResultCascadeLines"),
        (eR.fields = u.w.util.newFieldList(() => [
          {
            no: 1,
            name: "cascade_lines",
            kind: "message",
            T: eI,
            repeated: !0,
          },
        ]));
      class eL extends l.v {
        static fromBinary(e, n) {
          return new eL().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new eL().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new eL().fromJsonString(e, n);
        }
        static equals(e, n) {
          return u.w.util.equals(eL, e, n);
        }
        constructor(e) {
          super(), u.w.util.initPartial(e, this);
        }
      }
      (eL.runtime = u.w),
        (eL.typeName = "exa.user_analytics_pb.QueryRequestCascadeToolUsage"),
        (eL.fields = u.w.util.newFieldList(() => []));
      class ep extends l.v {
        static fromBinary(e, n) {
          return new ep().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new ep().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new ep().fromJsonString(e, n);
        }
        static equals(e, n) {
          return u.w.util.equals(ep, e, n);
        }
        constructor(e) {
          super(),
            (this.tool = ""),
            (this.count = T.q.zero),
            u.w.util.initPartial(e, this);
        }
      }
      (ep.runtime = u.w),
        (ep.typeName = "exa.user_analytics_pb.CascadeToolUsageQueryEntry"),
        (ep.fields = u.w.util.newFieldList(() => [
          {
            no: 1,
            name: "day",
            kind: "message",
            T: c.E,
          },
          {
            no: 2,
            name: "tool",
            kind: "scalar",
            T: 9,
          },
          {
            no: 3,
            name: "count",
            kind: "scalar",
            T: 3,
          },
        ]));
      class eD extends l.v {
        static fromBinary(e, n) {
          return new eD().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new eD().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new eD().fromJsonString(e, n);
        }
        static equals(e, n) {
          return u.w.util.equals(eD, e, n);
        }
        constructor(e) {
          super(), (this.cascadeToolUsage = []), u.w.util.initPartial(e, this);
        }
      }
      (eD.runtime = u.w),
        (eD.typeName = "exa.user_analytics_pb.QueryResultCascadeToolUsage"),
        (eD.fields = u.w.util.newFieldList(() => [
          {
            no: 1,
            name: "cascade_tool_usage",
            kind: "message",
            T: ep,
            repeated: !0,
          },
        ]));
      class eP extends l.v {
        static fromBinary(e, n) {
          return new eP().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new eP().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new eP().fromJsonString(e, n);
        }
        static equals(e, n) {
          return u.w.util.equals(eP, e, n);
        }
        constructor(e) {
          super(), u.w.util.initPartial(e, this);
        }
      }
      (eP.runtime = u.w),
        (eP.typeName = "exa.user_analytics_pb.QueryRequestCascadeRuns"),
        (eP.fields = u.w.util.newFieldList(() => []));
      class eM extends l.v {
        static fromBinary(e, n) {
          return new eM().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new eM().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new eM().fromJsonString(e, n);
        }
        static equals(e, n) {
          return u.w.util.equals(eM, e, n);
        }
        constructor(e) {
          super(),
            (this.model = ""),
            (this.mode = ""),
            (this.messagesSent = T.q.zero),
            (this.promptsUsed = T.q.zero),
            (this.cascadeId = ""),
            u.w.util.initPartial(e, this);
        }
      }
      (eM.runtime = u.w),
        (eM.typeName = "exa.user_analytics_pb.CascadeRunsQueryEntry"),
        (eM.fields = u.w.util.newFieldList(() => [
          {
            no: 1,
            name: "day",
            kind: "message",
            T: c.E,
          },
          {
            no: 2,
            name: "model",
            kind: "scalar",
            T: 9,
          },
          {
            no: 3,
            name: "mode",
            kind: "scalar",
            T: 9,
          },
          {
            no: 4,
            name: "messages_sent",
            kind: "scalar",
            T: 3,
          },
          {
            no: 5,
            name: "prompts_used",
            kind: "scalar",
            T: 3,
          },
          {
            no: 6,
            name: "cascade_id",
            kind: "scalar",
            T: 9,
          },
        ]));
      class ey extends l.v {
        static fromBinary(e, n) {
          return new ey().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new ey().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new ey().fromJsonString(e, n);
        }
        static equals(e, n) {
          return u.w.util.equals(ey, e, n);
        }
        constructor(e) {
          super(), (this.cascadeRuns = []), u.w.util.initPartial(e, this);
        }
      }
      (ey.runtime = u.w),
        (ey.typeName = "exa.user_analytics_pb.QueryResultCascadeRuns"),
        (ey.fields = u.w.util.newFieldList(() => [
          {
            no: 1,
            name: "cascade_runs",
            kind: "message",
            T: eM,
            repeated: !0,
          },
        ]));
      class eh extends l.v {
        static fromBinary(e, n) {
          return new eh().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new eh().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new eh().fromJsonString(e, n);
        }
        static equals(e, n) {
          return u.w.util.equals(eh, e, n);
        }
        constructor(e) {
          super(), u.w.util.initPartial(e, this);
        }
      }
      (eh.runtime = u.w),
        (eh.typeName = "exa.user_analytics_pb.QueryRequestAllUsersCascadeRuns"),
        (eh.fields = u.w.util.newFieldList(() => []));
      class eU extends l.v {
        static fromBinary(e, n) {
          return new eU().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new eU().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new eU().fromJsonString(e, n);
        }
        static equals(e, n) {
          return u.w.util.equals(eU, e, n);
        }
        constructor(e) {
          super(), u.w.util.initPartial(e, this);
        }
      }
      (eU.runtime = u.w),
        (eU.typeName =
          "exa.user_analytics_pb.QueryRequestAllUsersCascadeToolUsage"),
        (eU.fields = u.w.util.newFieldList(() => []));
      class eg extends l.v {
        static fromBinary(e, n) {
          return new eg().fromBinary(e, n);
        }
        static fromJson(e, n) {
          return new eg().fromJson(e, n);
        }
        static fromJsonString(e, n) {
          return new eg().fromJsonString(e, n);
        }
        static equals(e, n) {
          return u.w.util.equals(eg, e, n);
        }
        constructor(e) {
          super(), u.w.util.initPartial(e, this);
        }
      }
      (eg.runtime = u.w),
        (eg.typeName =
          "exa.user_analytics_pb.QueryRequestAllUsersCascadeLines"),
        (eg.fields = u.w.util.newFieldList(() => []));
    },
    74307: function (e, n) {
      Object.defineProperty(n, "__esModule", {
        value: !0,
      }),
        (n.valToEnum = n.stringToEnum = n.enumToString = void 0),
        (n.enumToString = function (e, n) {
          return Object.keys(n).find((t) => n[t] === e);
        }),
        (n.stringToEnum = function (e, n) {
          for (let t of Object.keys(n)) if (e === t) return n[t];
        }),
        (n.valToEnum = function (e, n) {
          for (let [t, a] of Object.entries(n)) if (e === a) return n[t];
        });
    },
    78161: function (e, n) {
      Object.defineProperty(n, "__esModule", {
        value: !0,
      }),
        (n.getLocalStorageValue = n.setLocalStorageValue = void 0),
        (n.setLocalStorageValue = function (e, n) {
          localStorage.setItem(e, JSON.stringify(n));
        }),
        (n.getLocalStorageValue = function (e) {
          let n = localStorage.getItem(e);
          if (null !== n)
            try {
              return JSON.parse(n);
            } catch (n) {
              console.error(
                "Error parsing local storage value for key "
                  .concat(e, ": ")
                  .concat(n)
              );
            }
          return null;
        });
    },
  },
]);
