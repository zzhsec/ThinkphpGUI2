(function(e) {
    function a(a) {
        for (var t, n, r = a[0], i = a[1], A = a[2], s = 0, u = []; s < r.length; s++)
            n = r[s],
            Object.prototype.hasOwnProperty.call(c, n) && c[n] && u.push(c[n][0]),
            c[n] = 0;
        for (t in i)
            Object.prototype.hasOwnProperty.call(i, t) && (e[t] = i[t]);
        o && o(a);
        while (u.length)
            u.shift()();
        return _.push.apply(_, A || []),
        E()
    }
    function E() {
        for (var e, a = 0; a < _.length; a++) {
            for (var E = _[a], t = !0, n = 1; n < E.length; n++) {
                var r = E[n];
                0 !== c[r] && (t = !1)
            }
            t && (_.splice(a--, 1),
            e = i(i.s = E[0]))
        }
        return e
    }
    var t = {}
      , n = {
        app: 0
    }
      , c = {
        app: 0
    }
      , _ = [];
    function r(e) {
        return i.p + "js/" + ({
            fail: "fail",
            "lang-en-US": "lang-en-US",
            "lang-en-US-account": "lang-en-US-account",
            "lang-en-US-account-settings": "lang-en-US-account-settings",
            "lang-en-US-dashboard": "lang-en-US-dashboard",
            "lang-en-US-dashboard-analysis": "lang-en-US-dashboard-analysis",
            "lang-en-US-form": "lang-en-US-form",
            "lang-en-US-form-basicForm": "lang-en-US-form-basicForm",
            "lang-en-US-global": "lang-en-US-global",
            "lang-en-US-menu": "lang-en-US-menu",
            "lang-en-US-result": "lang-en-US-result",
            "lang-en-US-result-fail": "lang-en-US-result-fail",
            "lang-en-US-result-success": "lang-en-US-result-success",
            "lang-en-US-setting": "lang-en-US-setting",
            "lang-en-US-user": "lang-en-US-user",
            user: "user"
        }[e] || e) + "." + {
            "chunk-027aaf4f": "9d3ca1f3",
            "chunk-ab2f70c2": "0e8a7cd2",
            "chunk-fcbe9164": "d4177814",
            "chunk-089a36e9": "6954a6ef",
            "chunk-1c19aed0": "b74639c8",
            "chunk-21bf2f49": "730c2fc5",
            "chunk-1cf9beb8": "983b497d",
            "chunk-3853ce79": "07ce8524",
            "chunk-227c188f": "b23895e0",
            "chunk-234c0f34": "da9fcef7",
            "chunk-265ffcca": "02e47404",
            "chunk-2d0afe3c": "32b92c6e",
            "chunk-2d0b39ad": "de567695",
            "chunk-2d0b6904": "32984d7c",
            "chunk-2d0b6e5f": "cf94e501",
            "chunk-2d0b996a": "e5a70291",
            "chunk-2d0b9db4": "103192ae",
            "chunk-2d0be18a": "9ca0a238",
            "chunk-2d0c553a": "1e76f554",
            "chunk-2d0c7b3e": "2adb43b9",
            "chunk-2d0c7c8a": "9922c878",
            "chunk-2d0ced26": "e5b7cf71",
            "chunk-2d0d6794": "b243a060",
            "chunk-2d0dacf8": "e207b9ba",
            "chunk-3f4c1290": "a31b94e7",
            "chunk-8074d8e8": "be548269",
            "chunk-c1fd3524": "098a6c02",
            "chunk-c6b51fe6": "d363d0d6",
            "chunk-2d0ddb97": "3fe5e965",
            "chunk-2d0de5ae": "598bc650",
            "chunk-2d0e22a4": "1071705f",
            "chunk-2d0f0411": "ce95120d",
            "chunk-2d212c04": "ca9ec3f6",
            "chunk-2d2131d3": "a7b68659",
            "chunk-2d213a4e": "ba620c49",
            "chunk-2d217509": "3540f78e",
            "chunk-2d217ac4": "a6762988",
            "chunk-2d21a455": "c492564c",
            "chunk-2d21d428": "651e7c54",
            "chunk-2d21dbf5": "d3ad30f4",
            "chunk-2d2227b4": "0032aea6",
            "chunk-2d22291a": "a8b4f945",
            "chunk-2d224fed": "782e2794",
            "chunk-2d22585f": "41144e0a",
            "chunk-2d225e03": "b9ffe66a",
            "chunk-2d225fd8": "4246bab7",
            "chunk-2d22cff5": "6cf4ce06",
            "chunk-2d238274": "e4e439f1",
            "chunk-3b49ae28": "d9e76273",
            "chunk-3ddd0db4": "4e8fbbcf",
            "chunk-0b1f4dde": "93fd9752",
            "chunk-1625056f": "c8b70961",
            "chunk-41496ab2": "f1445882",
            "chunk-75d41716": "22621ad5",
            "chunk-c3c159b0": "9572ee4f",
            "chunk-0ba6371c": "2eba9e93",
            "chunk-0e18b572": "1e66e543",
            "chunk-12b5e844": "1eaaefa5",
            "chunk-1969e2a0": "332bb62a",
            "chunk-199278de": "f75ae556",
            "chunk-1c6667a8": "77d42289",
            "chunk-246b9992": "75256bd4",
            "chunk-28b6d784": "6d764690",
            "chunk-165647e7": "7b44926c",
            "chunk-10e479f4": "7d8a64da",
            "chunk-da448bb0": "dd5045c7",
            "chunk-34841ae6": "de17c57e",
            "chunk-356d7d56": "6776f272",
            "chunk-36c1f648": "deb9e0c8",
            "chunk-b56d1b1e": "c92f82b6",
            "chunk-77dd7c1d": "1a885000",
            "chunk-3965d699": "69a36303",
            "chunk-3acb5635": "e5b6e8c7",
            "chunk-3b0b8977": "933cca72",
            "chunk-16379284": "35b48ffa",
            "chunk-bdf84bfa": "b5771e99",
            "chunk-3ddd07ee": "67b3e888",
            "chunk-6cc3dfd6": "47002954",
            "chunk-499414fb": "6b498849",
            "chunk-4a580f96": "1198d33f",
            "chunk-54fd167e": "34e73a2b",
            "chunk-5792386c": "9b518274",
            "chunk-5ae1834d": "f2ecc481",
            "chunk-45f71785": "22eb79a6",
            "chunk-5e90a3ce": "de091332",
            "chunk-6cf81a97": "b8bcabff",
            "chunk-22ecc564": "9c7babee",
            "chunk-ab64783e": "7afed208",
            "chunk-1c326700": "a29dde39",
            "chunk-634f5ed4": "a7d53681",
            "chunk-6eeb5510": "2e5a5d36",
            "chunk-70242626": "22881e95",
            "chunk-70c7a28c": "bd20ecb0",
            "chunk-14a59e0c": "eb62dd74",
            "chunk-7a269a80": "9a3b09f5",
            "chunk-7debbbae": "6f25a227",
            "chunk-ca901ba6": "6993d4de",
            "chunk-71c04d69": "7cbc023e",
            "chunk-727a6779": "2f8ccf2e",
            "chunk-727cb217": "0b157a94",
            "chunk-74678edd": "18c98e29",
            "chunk-1bc5b1ea": "86876d8c",
            "chunk-5fcd58ec": "46279d49",
            "chunk-77fe41dc": "ea053a29",
            "chunk-7b0afb11": "a9c05253",
            "chunk-85f64c24": "64faeb21",
            "chunk-9f30523e": "2a0ccab6",
            "chunk-ade09026": "5de8713d",
            "chunk-b06a3124": "a755ff09",
            "chunk-d7edabae": "9d36656f",
            "chunk-d83c9f22": "e3214fc8",
            "chunk-dc3f79c2": "7b8b588e",
            "chunk-5639a763": "b2863716",
            "chunk-8ba4fc7a": "471cebbd",
            "chunk-def0c684": "0f5ed39c",
            "chunk-06dd07aa": "276d2662",
            "chunk-e9316206": "28ce0fb6",
            "chunk-fe18aaee": "7695816a",
            "chunk-ff9380dc": "17969176",
            "chunk-51f1bff2": "526eeba7",
            "chunk-c632a812": "2e5f5442",
            "chunk-fb47b0a0": "d4c1bd9f",
            "chunk-418b56ee": "38727201",
            "chunk-43714590": "beb745dd",
            "chunk-4fe7f1ac": "7b75da62",
            "chunk-56d29dda": "788b0ac5",
            "chunk-611c3abb": "0bd2c80a",
            "chunk-67257826": "1fc74e5b",
            "chunk-6827bde4": "91afebcc",
            "chunk-6a88a22c": "448f63a0",
            "chunk-056fe338": "f91d952f",
            "chunk-6a23b328": "1a242e3e",
            "chunk-1813b780": "e35e4b7f",
            "chunk-33c1e548": "a9a9cf7f",
            "chunk-2d0abdcc": "e90c7bca",
            "chunk-2d0d0281": "02f03025",
            "chunk-2d0e62d4": "203643f5",
            "chunk-011de43d": "9d4591ce",
            "chunk-171dce51": "e6cacec9",
            "chunk-1b956961": "823377a2",
            "chunk-590135bc": "ad52b541",
            "chunk-8b144886": "6830842b",
            "chunk-3b9c38a6": "9f109199",
            "chunk-2bd4eb74": "e9a190f6",
            "chunk-4473923a": "32b9daf1",
            "chunk-4d88cb19": "852747cb",
            "chunk-4da584f4": "b39f8a1b",
            "chunk-50af70e4": "8cf2effd",
            "chunk-53d7f1f3": "9a0be859",
            "chunk-59f246b8": "ea3a1a87",
            "chunk-6b9afced": "8a56565d",
            "chunk-71119059": "cf89a9c4",
            "chunk-78c68993": "c6dc63d6",
            "chunk-968bce2e": "5048557e",
            "chunk-a167b016": "7f6fa56e",
            "chunk-d55dfed2": "50289f3e",
            "chunk-6e211f14": "c89889d5",
            "chunk-2d0a4b05": "cf3df2e0",
            "chunk-2d0b6c4b": "d5ec22b4",
            "chunk-4ed395bb": "4c60e46f",
            "chunk-294e0b34": "eb295216",
            "chunk-a1a10102": "62aea2ba",
            "chunk-7288f83d": "385b6555",
            "chunk-760fc0a9": "bdfd840f",
            "chunk-871cf974": "fd7c35fb",
            "chunk-793bee52": "3ab45192",
            "chunk-7e9455f2": "2a28347f",
            "chunk-8922c7a8": "43b34947",
            "chunk-9699d590": "62b49f13",
            "chunk-a0f3cc40": "7c49b430",
            "chunk-be3357de": "15f6de3e",
            "chunk-c2e9e1ae": "7d38096c",
            "chunk-c5607280": "b45fc766",
            "chunk-459badaa": "693bd834",
            "chunk-ebdad4ce": "7fd51d81",
            fail: "6395f238",
            "lang-en-US": "9f3af582",
            "lang-en-US-account": "f1ca9e5b",
            "lang-en-US-account-settings": "0998412b",
            "lang-en-US-dashboard": "c0dab92e",
            "lang-en-US-dashboard-analysis": "bae9e1aa",
            "lang-en-US-form": "0a04a39f",
            "lang-en-US-form-basicForm": "958425e7",
            "lang-en-US-global": "d45bd57f",
            "lang-en-US-menu": "b8126151",
            "lang-en-US-result": "10992575",
            "lang-en-US-result-fail": "2e16af88",
            "lang-en-US-result-success": "c078f1f9",
            "lang-en-US-setting": "6d2cde1b",
            "lang-en-US-user": "3a2685fe",
            user: "f2443fb2"
        }[e] + ".js"
    }
    function i(a) {
        if (t[a])
            return t[a].exports;
        var E = t[a] = {
            i: a,
            l: !1,
            exports: {}
        };
        return e[a].call(E.exports, E, E.exports, i),
        E.l = !0,
        E.exports
    }
    i.e = function(e) {
        var a = []
          , E = {
            "chunk-fcbe9164": 1,
            "chunk-1c19aed0": 1,
            "chunk-1cf9beb8": 1,
            "chunk-234c0f34": 1,
            "chunk-3f4c1290": 1,
            "chunk-c1fd3524": 1,
            "chunk-c6b51fe6": 1,
            "chunk-3b49ae28": 1,
            "chunk-1625056f": 1,
            "chunk-41496ab2": 1,
            "chunk-75d41716": 1,
            "chunk-c3c159b0": 1,
            "chunk-0ba6371c": 1,
            "chunk-0e18b572": 1,
            "chunk-1969e2a0": 1,
            "chunk-1c6667a8": 1,
            "chunk-165647e7": 1,
            "chunk-10e479f4": 1,
            "chunk-da448bb0": 1,
            "chunk-34841ae6": 1,
            "chunk-356d7d56": 1,
            "chunk-b56d1b1e": 1,
            "chunk-77dd7c1d": 1,
            "chunk-3965d699": 1,
            "chunk-3acb5635": 1,
            "chunk-bdf84bfa": 1,
            "chunk-6cc3dfd6": 1,
            "chunk-499414fb": 1,
            "chunk-4a580f96": 1,
            "chunk-54fd167e": 1,
            "chunk-5792386c": 1,
            "chunk-45f71785": 1,
            "chunk-5e90a3ce": 1,
            "chunk-22ecc564": 1,
            "chunk-ab64783e": 1,
            "chunk-1c326700": 1,
            "chunk-634f5ed4": 1,
            "chunk-70c7a28c": 1,
            "chunk-7a269a80": 1,
            "chunk-7debbbae": 1,
            "chunk-ca901ba6": 1,
            "chunk-71c04d69": 1,
            "chunk-727cb217": 1,
            "chunk-74678edd": 1,
            "chunk-77fe41dc": 1,
            "chunk-ade09026": 1,
            "chunk-b06a3124": 1,
            "chunk-d7edabae": 1,
            "chunk-5639a763": 1,
            "chunk-e9316206": 1,
            "chunk-c632a812": 1,
            "chunk-fb47b0a0": 1,
            "chunk-418b56ee": 1,
            "chunk-56d29dda": 1,
            "chunk-6827bde4": 1,
            "chunk-6a88a22c": 1,
            "chunk-6a23b328": 1,
            "chunk-1813b780": 1,
            "chunk-33c1e548": 1,
            "chunk-011de43d": 1,
            "chunk-171dce51": 1,
            "chunk-1b956961": 1,
            "chunk-590135bc": 1,
            "chunk-8b144886": 1,
            "chunk-4473923a": 1,
            "chunk-53d7f1f3": 1,
            "chunk-71119059": 1,
            "chunk-a167b016": 1,
            "chunk-d55dfed2": 1,
            "chunk-6e211f14": 1,
            "chunk-294e0b34": 1,
            "chunk-a1a10102": 1,
            "chunk-7e9455f2": 1,
            "chunk-8922c7a8": 1,
            "chunk-9699d590": 1,
            "chunk-be3357de": 1,
            "chunk-c2e9e1ae": 1,
            "chunk-c5607280": 1,
            "chunk-459badaa": 1,
            "chunk-ebdad4ce": 1,
            user: 1
        };
        n[e] ? a.push(n[e]) : 0 !== n[e] && E[e] && a.push(n[e] = new Promise((function(a, E) {
            for (var t = "css/" + ({
                fail: "fail",
                "lang-en-US": "lang-en-US",
                "lang-en-US-account": "lang-en-US-account",
                "lang-en-US-account-settings": "lang-en-US-account-settings",
                "lang-en-US-dashboard": "lang-en-US-dashboard",
                "lang-en-US-dashboard-analysis": "lang-en-US-dashboard-analysis",
                "lang-en-US-form": "lang-en-US-form",
                "lang-en-US-form-basicForm": "lang-en-US-form-basicForm",
                "lang-en-US-global": "lang-en-US-global",
                "lang-en-US-menu": "lang-en-US-menu",
                "lang-en-US-result": "lang-en-US-result",
                "lang-en-US-result-fail": "lang-en-US-result-fail",
                "lang-en-US-result-success": "lang-en-US-result-success",
                "lang-en-US-setting": "lang-en-US-setting",
                "lang-en-US-user": "lang-en-US-user",
                user: "user"
            }[e] || e) + "." + {
                "chunk-027aaf4f": "31d6cfe0",
                "chunk-ab2f70c2": "31d6cfe0",
                "chunk-fcbe9164": "0fb261ff",
                "chunk-089a36e9": "31d6cfe0",
                "chunk-1c19aed0": "74182419",
                "chunk-21bf2f49": "31d6cfe0",
                "chunk-1cf9beb8": "ef3b5732",
                "chunk-3853ce79": "31d6cfe0",
                "chunk-227c188f": "31d6cfe0",
                "chunk-234c0f34": "894d5abc",
                "chunk-265ffcca": "31d6cfe0",
                "chunk-2d0afe3c": "31d6cfe0",
                "chunk-2d0b39ad": "31d6cfe0",
                "chunk-2d0b6904": "31d6cfe0",
                "chunk-2d0b6e5f": "31d6cfe0",
                "chunk-2d0b996a": "31d6cfe0",
                "chunk-2d0b9db4": "31d6cfe0",
                "chunk-2d0be18a": "31d6cfe0",
                "chunk-2d0c553a": "31d6cfe0",
                "chunk-2d0c7b3e": "31d6cfe0",
                "chunk-2d0c7c8a": "31d6cfe0",
                "chunk-2d0ced26": "31d6cfe0",
                "chunk-2d0d6794": "31d6cfe0",
                "chunk-2d0dacf8": "31d6cfe0",
                "chunk-3f4c1290": "9d19a097",
                "chunk-8074d8e8": "31d6cfe0",
                "chunk-c1fd3524": "a51fddd2",
                "chunk-c6b51fe6": "72eae46b",
                "chunk-2d0ddb97": "31d6cfe0",
                "chunk-2d0de5ae": "31d6cfe0",
                "chunk-2d0e22a4": "31d6cfe0",
                "chunk-2d0f0411": "31d6cfe0",
                "chunk-2d212c04": "31d6cfe0",
                "chunk-2d2131d3": "31d6cfe0",
                "chunk-2d213a4e": "31d6cfe0",
                "chunk-2d217509": "31d6cfe0",
                "chunk-2d217ac4": "31d6cfe0",
                "chunk-2d21a455": "31d6cfe0",
                "chunk-2d21d428": "31d6cfe0",
                "chunk-2d21dbf5": "31d6cfe0",
                "chunk-2d2227b4": "31d6cfe0",
                "chunk-2d22291a": "31d6cfe0",
                "chunk-2d224fed": "31d6cfe0",
                "chunk-2d22585f": "31d6cfe0",
                "chunk-2d225e03": "31d6cfe0",
                "chunk-2d225fd8": "31d6cfe0",
                "chunk-2d22cff5": "31d6cfe0",
                "chunk-2d238274": "31d6cfe0",
                "chunk-3b49ae28": "7695eaf2",
                "chunk-3ddd0db4": "31d6cfe0",
                "chunk-0b1f4dde": "31d6cfe0",
                "chunk-1625056f": "4fa549e1",
                "chunk-41496ab2": "8297a4f8",
                "chunk-75d41716": "2166cd5d",
                "chunk-c3c159b0": "6999b3b3",
                "chunk-0ba6371c": "5de50e75",
                "chunk-0e18b572": "0b2f798f",
                "chunk-12b5e844": "31d6cfe0",
                "chunk-1969e2a0": "282ce7a4",
                "chunk-199278de": "31d6cfe0",
                "chunk-1c6667a8": "59e57d78",
                "chunk-246b9992": "31d6cfe0",
                "chunk-28b6d784": "31d6cfe0",
                "chunk-165647e7": "dfc6691a",
                "chunk-10e479f4": "57133463",
                "chunk-da448bb0": "837fde08",
                "chunk-34841ae6": "6adf7dc6",
                "chunk-356d7d56": "f09c2d9d",
                "chunk-36c1f648": "31d6cfe0",
                "chunk-b56d1b1e": "839280a5",
                "chunk-77dd7c1d": "7bc762b4",
                "chunk-3965d699": "b322e6aa",
                "chunk-3acb5635": "bd169c66",
                "chunk-3b0b8977": "31d6cfe0",
                "chunk-16379284": "31d6cfe0",
                "chunk-bdf84bfa": "b1a578b8",
                "chunk-3ddd07ee": "31d6cfe0",
                "chunk-6cc3dfd6": "c6267f05",
                "chunk-499414fb": "c248caef",
                "chunk-4a580f96": "d8475828",
                "chunk-54fd167e": "78611500",
                "chunk-5792386c": "7a2037c9",
                "chunk-5ae1834d": "31d6cfe0",
                "chunk-45f71785": "e1ba33fe",
                "chunk-5e90a3ce": "9436e59e",
                "chunk-6cf81a97": "31d6cfe0",
                "chunk-22ecc564": "e7d5919b",
                "chunk-ab64783e": "3d604f2a",
                "chunk-1c326700": "3320acf4",
                "chunk-634f5ed4": "441dd13e",
                "chunk-6eeb5510": "31d6cfe0",
                "chunk-70242626": "31d6cfe0",
                "chunk-70c7a28c": "60cbb5d6",
                "chunk-14a59e0c": "31d6cfe0",
                "chunk-7a269a80": "4ee1c974",
                "chunk-7debbbae": "6dbfc72d",
                "chunk-ca901ba6": "23fdff4b",
                "chunk-71c04d69": "4db4ce6d",
                "chunk-727a6779": "31d6cfe0",
                "chunk-727cb217": "287ff583",
                "chunk-74678edd": "03161bb4",
                "chunk-1bc5b1ea": "31d6cfe0",
                "chunk-5fcd58ec": "31d6cfe0",
                "chunk-77fe41dc": "a57de66d",
                "chunk-7b0afb11": "31d6cfe0",
                "chunk-85f64c24": "31d6cfe0",
                "chunk-9f30523e": "31d6cfe0",
                "chunk-ade09026": "1ede81c4",
                "chunk-b06a3124": "baa967b5",
                "chunk-d7edabae": "e4ccc89c",
                "chunk-d83c9f22": "31d6cfe0",
                "chunk-dc3f79c2": "31d6cfe0",
                "chunk-5639a763": "16c11b1c",
                "chunk-8ba4fc7a": "31d6cfe0",
                "chunk-def0c684": "31d6cfe0",
                "chunk-06dd07aa": "31d6cfe0",
                "chunk-e9316206": "1e5a000a",
                "chunk-fe18aaee": "31d6cfe0",
                "chunk-ff9380dc": "31d6cfe0",
                "chunk-51f1bff2": "31d6cfe0",
                "chunk-c632a812": "484ef6c9",
                "chunk-fb47b0a0": "a85cbe36",
                "chunk-418b56ee": "f66267be",
                "chunk-43714590": "31d6cfe0",
                "chunk-4fe7f1ac": "31d6cfe0",
                "chunk-56d29dda": "be3d808a",
                "chunk-611c3abb": "31d6cfe0",
                "chunk-67257826": "31d6cfe0",
                "chunk-6827bde4": "ae84bcc9",
                "chunk-6a88a22c": "cb5b9920",
                "chunk-056fe338": "31d6cfe0",
                "chunk-6a23b328": "ee47cfb1",
                "chunk-1813b780": "5ba0a10c",
                "chunk-33c1e548": "9b0e96d8",
                "chunk-2d0abdcc": "31d6cfe0",
                "chunk-2d0d0281": "31d6cfe0",
                "chunk-2d0e62d4": "31d6cfe0",
                "chunk-011de43d": "d1e9c7f6",
                "chunk-171dce51": "d1e9c7f6",
                "chunk-1b956961": "d1e9c7f6",
                "chunk-590135bc": "d1e9c7f6",
                "chunk-8b144886": "d1e9c7f6",
                "chunk-3b9c38a6": "31d6cfe0",
                "chunk-2bd4eb74": "31d6cfe0",
                "chunk-4473923a": "35c854a9",
                "chunk-4d88cb19": "31d6cfe0",
                "chunk-4da584f4": "31d6cfe0",
                "chunk-50af70e4": "31d6cfe0",
                "chunk-53d7f1f3": "120c0712",
                "chunk-59f246b8": "31d6cfe0",
                "chunk-6b9afced": "31d6cfe0",
                "chunk-71119059": "d96c9eb7",
                "chunk-78c68993": "31d6cfe0",
                "chunk-968bce2e": "31d6cfe0",
                "chunk-a167b016": "7a11c5c2",
                "chunk-d55dfed2": "ceb842a4",
                "chunk-6e211f14": "48472233",
                "chunk-2d0a4b05": "31d6cfe0",
                "chunk-2d0b6c4b": "31d6cfe0",
                "chunk-4ed395bb": "31d6cfe0",
                "chunk-294e0b34": "582d3879",
                "chunk-a1a10102": "55bc4a63",
                "chunk-7288f83d": "31d6cfe0",
                "chunk-760fc0a9": "31d6cfe0",
                "chunk-871cf974": "31d6cfe0",
                "chunk-793bee52": "31d6cfe0",
                "chunk-7e9455f2": "97064dce",
                "chunk-8922c7a8": "83c08d83",
                "chunk-9699d590": "6ad9778d",
                "chunk-a0f3cc40": "31d6cfe0",
                "chunk-be3357de": "6cc7bb29",
                "chunk-c2e9e1ae": "4981477f",
                "chunk-c5607280": "2f7a82fe",
                "chunk-459badaa": "11f6cb4f",
                "chunk-ebdad4ce": "77f601a2",
                fail: "31d6cfe0",
                "lang-en-US": "31d6cfe0",
                "lang-en-US-account": "31d6cfe0",
                "lang-en-US-account-settings": "31d6cfe0",
                "lang-en-US-dashboard": "31d6cfe0",
                "lang-en-US-dashboard-analysis": "31d6cfe0",
                "lang-en-US-form": "31d6cfe0",
                "lang-en-US-form-basicForm": "31d6cfe0",
                "lang-en-US-global": "31d6cfe0",
                "lang-en-US-menu": "31d6cfe0",
                "lang-en-US-result": "31d6cfe0",
                "lang-en-US-result-fail": "31d6cfe0",
                "lang-en-US-result-success": "31d6cfe0",
                "lang-en-US-setting": "31d6cfe0",
                "lang-en-US-user": "31d6cfe0",
                user: "3426ad49"
            }[e] + ".css", c = i.p + t, _ = document.getElementsByTagName("link"), r = 0; r < _.length; r++) {
                var A = _[r]
                  , s = A.getAttribute("data-href") || A.getAttribute("href");
                if ("stylesheet" === A.rel && (s === t || s === c))
                    return a()
            }
            var u = document.getElementsByTagName("style");
            for (r = 0; r < u.length; r++) {
                A = u[r],
                s = A.getAttribute("data-href");
                if (s === t || s === c)
                    return a()
            }
            var o = document.createElement("link");
            o.rel = "stylesheet",
            o.type = "text/css",
            o.onload = a,
            o.onerror = function(a) {
                var t = a && a.target && a.target.src || c
                  , _ = new Error("Loading CSS chunk " + e + " failed.\n(" + t + ")");
                _.code = "CSS_CHUNK_LOAD_FAILED",
                _.request = t,
                delete n[e],
                o.parentNode.removeChild(o),
                E(_)
            }
            ,
            o.href = c;
            var R = document.getElementsByTagName("head")[0];
            R.appendChild(o)
        }
        )).then((function() {
            n[e] = 0
        }
        )));
        var t = c[e];
        if (0 !== t)
            if (t)
                a.push(t[2]);
            else {
                var _ = new Promise((function(a, E) {
                    t = c[e] = [a, E]
                }
                ));
                a.push(t[2] = _);
                var A, s = document.createElement("script");
                s.charset = "utf-8",
                s.timeout = 120,
                i.nc && s.setAttribute("nonce", i.nc),
                s.src = r(e);
                var u = new Error;
                A = function(a) {
                    s.onerror = s.onload = null,
                    clearTimeout(o);
                    var E = c[e];
                    if (0 !== E) {
                        if (E) {
                            var t = a && ("load" === a.type ? "missing" : a.type)
                              , n = a && a.target && a.target.src;
                            u.message = "Loading chunk " + e + " failed.\n(" + t + ": " + n + ")",
                            u.name = "ChunkLoadError",
                            u.type = t,
                            u.request = n,
                            E[1](u)
                        }
                        c[e] = void 0
                    }
                }
                ;
                var o = setTimeout((function() {
                    A({
                        type: "timeout",
                        target: s
                    })
                }
                ), 12e4);
                s.onerror = s.onload = A,
                document.head.appendChild(s)
            }
        return Promise.all(a)
    }
    ,
    i.m = e,
    i.c = t,
    i.d = function(e, a, E) {
        i.o(e, a) || Object.defineProperty(e, a, {
            enumerable: !0,
            get: E
        })
    }
    ,
    i.r = function(e) {
        "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }),
        Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }
    ,
    i.t = function(e, a) {
        if (1 & a && (e = i(e)),
        8 & a)
            return e;
        if (4 & a && "object" === typeof e && e && e.__esModule)
            return e;
        var E = Object.create(null);
        if (i.r(E),
        Object.defineProperty(E, "default", {
            enumerable: !0,
            value: e
        }),
        2 & a && "string" != typeof e)
            for (var t in e)
                i.d(E, t, function(a) {
                    return e[a]
                }
                .bind(null, t));
        return E
    }
    ,
    i.n = function(e) {
        var a = e && e.__esModule ? function() {
            return e["default"]
        }
        : function() {
            return e
        }
        ;
        return i.d(a, "a", a),
        a
    }
    ,
    i.o = function(e, a) {
        return Object.prototype.hasOwnProperty.call(e, a)
    }
    ,
    i.p = "/service_console/",
    i.oe = function(e) {
        throw console.error(e),
        e
    }
    ;
    var A = window["webpackJsonp"] = window["webpackJsonp"] || []
      , s = A.push.bind(A);
    A.push = a,
    A = A.slice();
    for (var u = 0; u < A.length; u++)
        a(A[u]);
    var o = s;
    _.push([0, "chunk-vendors"]),
    E()
}
)({
    0: function(e, a, E) {
        e.exports = E("56d7")
    },
    "0e6b": function(e, a, E) {
        "use strict";
        E.r(a),
        a["default"] = {
            "account.settings.menuMap.basic": "基本设置",
            "account.settings.menuMap.security": "安全设置",
            "account.settings.menuMap.custom": "个性化",
            "account.settings.menuMap.binding": "账号绑定",
            "account.settings.menuMap.notification": "新消息通知",
            "account.settings.basic.avatar": "头像",
            "account.settings.basic.change-avatar": "更换头像",
            "account.settings.basic.email": "邮箱",
            "account.settings.basic.email-message": "请输入您的邮箱!",
            "account.settings.basic.nickname": "昵称",
            "account.settings.basic.nickname-message": "请输入您的昵称!",
            "account.settings.basic.profile": "个人简介",
            "account.settings.basic.profile-message": "请输入个人简介!",
            "account.settings.basic.profile-placeholder": "个人简介",
            "account.settings.basic.country": "国家/地区",
            "account.settings.basic.country-message": "请输入您的国家或地区!",
            "account.settings.basic.geographic": "所在省市",
            "account.settings.basic.geographic-message": "请输入您的所在省市!",
            "account.settings.basic.address": "街道地址",
            "account.settings.basic.address-message": "请输入您的街道地址!",
            "account.settings.basic.phone": "联系电话",
            "account.settings.basic.phone-message": "请输入您的联系电话!",
            "account.settings.basic.update": "更新基本信息",
            "account.settings.basic.update.success": "更新基本信息成功",
            "account.settings.security.strong": "强",
            "account.settings.security.medium": "中",
            "account.settings.security.weak": "弱",
            "account.settings.security.password": "账户密码",
            "account.settings.security.password-description": "当前密码强度：",
            "account.settings.security.phone": "密保手机",
            "account.settings.security.phone-description": "已绑定手机：",
            "account.settings.security.question": "密保问题",
            "account.settings.security.question-description": "未设置密保问题，密保问题可有效保护账户安全",
            "account.settings.security.email": "备用邮箱",
            "account.settings.security.email-description": "已绑定邮箱：",
            "account.settings.security.mfa": "MFA 设备",
            "account.settings.security.mfa-description": "未绑定 MFA 设备，绑定后，可以进行二次确认",
            "account.settings.security.modify": "修改",
            "account.settings.security.set": "设置",
            "account.settings.security.bind": "绑定",
            "account.settings.binding.taobao": "绑定淘宝",
            "account.settings.binding.taobao-description": "当前未绑定淘宝账号",
            "account.settings.binding.alipay": "绑定支付宝",
            "account.settings.binding.alipay-description": "当前未绑定支付宝账号",
            "account.settings.binding.dingding": "绑定钉钉",
            "account.settings.binding.dingding-description": "当前未绑定钉钉账号",
            "account.settings.binding.bind": "绑定",
            "account.settings.notification.password": "账户密码",
            "account.settings.notification.password-description": "其他用户的消息将以站内信的形式通知",
            "account.settings.notification.messages": "系统消息",
            "account.settings.notification.messages-description": "系统消息将以站内信的形式通知",
            "account.settings.notification.todo": "待办任务",
            "account.settings.notification.todo-description": "待办任务将以站内信的形式通知",
            "account.settings.settings.open": "开",
            "account.settings.settings.close": "关"
        }
    },
    1: function(e, a) {},
    "12a1": function(e, a, E) {
        "use strict";
        E.r(a),
        a["default"] = {
            "form.basic-form.basic.title": "基础表单",
            "form.basic-form.basic.description": "表单页用于向用户收集或验证信息，基础表单常见于数据项较少的表单场景。",
            "form.basic-form.title.label": "标题",
            "form.basic-form.title.placeholder": "给目标起个名字",
            "form.basic-form.title.required": "请输入标题",
            "form.basic-form.date.label": "起止日期",
            "form.basic-form.placeholder.start": "开始日期",
            "form.basic-form.placeholder.end": "结束日期",
            "form.basic-form.date.required": "请选择起止日期",
            "form.basic-form.goal.label": "目标描述",
            "form.basic-form.goal.placeholder": "请输入你的阶段性工作目标",
            "form.basic-form.goal.required": "请输入目标描述",
            "form.basic-form.standard.label": "衡量标准",
            "form.basic-form.standard.placeholder": "请输入衡量标准",
            "form.basic-form.standard.required": "请输入衡量标准",
            "form.basic-form.client.label": "客户",
            "form.basic-form.client.required": "请描述你服务的客户",
            "form.basic-form.label.tooltip": "目标的服务对象",
            "form.basic-form.client.placeholder": "请描述你服务的客户，内部客户直接 @姓名／工号",
            "form.basic-form.invites.label": "邀评人",
            "form.basic-form.invites.placeholder": "请直接 @姓名／工号，最多可邀请 5 人",
            "form.basic-form.weight.label": "权重",
            "form.basic-form.weight.placeholder": "请输入",
            "form.basic-form.public.label": "目标公开",
            "form.basic-form.label.help": "客户、邀评人默认被分享",
            "form.basic-form.radio.public": "公开",
            "form.basic-form.radio.partially-public": "部分公开",
            "form.basic-form.radio.private": "不公开",
            "form.basic-form.publicUsers.placeholder": "公开给",
            "form.basic-form.option.A": "同事一",
            "form.basic-form.option.B": "同事二",
            "form.basic-form.option.C": "同事三",
            "form.basic-form.email.required": "请输入邮箱地址！",
            "form.basic-form.email.wrong-format": "邮箱地址格式错误！",
            "form.basic-form.userName.required": "请输入用户名!",
            "form.basic-form.password.required": "请输入密码！",
            "form.basic-form.password.twice": "两次输入的密码不匹配!",
            "form.basic-form.strength.msg": "请至少输入 6 个字符。请不要使用容易被猜到的密码。",
            "form.basic-form.strength.strong": "强度：强",
            "form.basic-form.strength.medium": "强度：中",
            "form.basic-form.strength.short": "强度：太短",
            "form.basic-form.confirm-password.required": "请确认密码！",
            "form.basic-form.phone-number.required": "请输入手机号！",
            "form.basic-form.phone-number.wrong-format": "手机号格式错误！",
            "form.basic-form.verification-code.required": "请输入验证码！",
            "form.basic-form.form.get-captcha": "获取验证码",
            "form.basic-form.captcha.second": "秒",
            "form.basic-form.form.optional": "（选填）",
            "form.basic-form.form.submit": "提交",
            "form.basic-form.form.save": "保存",
            "form.basic-form.email.placeholder": "邮箱",
            "form.basic-form.password.placeholder": "至少6位密码，区分大小写",
            "form.basic-form.confirm-password.placeholder": "确认密码",
            "form.basic-form.phone-number.placeholder": "手机号",
            "form.basic-form.verification-code.placeholder": "验证码"
        }
    },
    1858: function(e, a, E) {
        "use strict";
        E.r(a),
        a["default"] = {
            submit: "提交",
            save: "保存",
            "submit.ok": "提交成功",
            "save.ok": "保存成功"
        }
    },
    "18c7": function(e, a, E) {
        "use strict";
        E.r(a);
        var t = E("f3f3")
          , n = E("12a1");
        a["default"] = Object(t["a"])({}, n["default"])
    },
    "19d4": function(e, a, E) {
        "use strict";
        E("f63d")
    },
    "1d4b": function(e, a, E) {
        "use strict";
        var t = E("f3f3")
          , n = (E("d3b7"),
        E("ed3b"));
        a["a"] = function(e) {
            function a(a, E, c) {
                var _ = this;
                if (c = c || {},
                _ && _._isVue) {
                    var r = document.querySelector("body>div[type=dialog]");
                    r || (r = document.createElement("div"),
                    r.setAttribute("type", "dialog"),
                    document.body.appendChild(r));
                    var i = function(e, a) {
                        if (e instanceof Function) {
                            var E = e();
                            E instanceof Promise ? E.then((function(e) {
                                e && a()
                            }
                            )) : E && a()
                        } else
                            e || a()
                    }
                      , A = new e({
                        data: function() {
                            return {
                                visible: !0
                            }
                        },
                        router: _.$router,
                        store: _.$store,
                        mounted: function() {
                            var e = this;
                            this.$on("close", (function(a) {
                                e.handleClose()
                            }
                            ))
                        },
                        methods: {
                            handleClose: function() {
                                var e = this;
                                i(this.$refs._component.onCancel, (function() {
                                    e.visible = !1,
                                    e.$refs._component.$emit("close"),
                                    e.$refs._component.$emit("cancel"),
                                    A.$destroy()
                                }
                                ))
                            },
                            handleOk: function() {
                                var e = this;
                                i(this.$refs._component.onOK || this.$refs._component.onOk, (function() {
                                    e.visible = !1,
                                    e.$refs._component.$emit("close"),
                                    e.$refs._component.$emit("ok"),
                                    A.$destroy()
                                }
                                ))
                            }
                        },
                        render: function(e) {
                            var _ = this
                              , r = c && c.model;
                            r && delete c.model;
                            var i = Object.assign({}, r && {
                                model: r
                            } || {}, {
                                attrs: Object.assign({}, Object(t["a"])({}, c.attrs || c), {
                                    visible: this.visible
                                }),
                                on: Object.assign({}, Object(t["a"])({}, c.on || c), {
                                    ok: function() {
                                        _.handleOk()
                                    },
                                    cancel: function() {
                                        _.handleClose()
                                    }
                                })
                            })
                              , A = E && E.model;
                            A && delete E.model;
                            var s = Object.assign({}, A && {
                                model: A
                            } || {}, {
                                ref: "_component",
                                attrs: Object.assign({}, Object(t["a"])({}, E && E.attrs || E)),
                                on: Object.assign({}, Object(t["a"])({}, E && E.on || E))
                            });
                            return e(n["a"], i, [e(a, s)])
                        }
                    }).$mount(r)
                }
            }
            Object.defineProperty(e.prototype, "$dialog", {
                get: function() {
                    return function() {
                        a.apply(this, arguments)
                    }
                }
            })
        }
    },
    "1dec": function(e, a, E) {
        "use strict";
        E.r(a),
        a["default"] = {
            "menu.welcome": "欢迎",
            "menu.home": "主页",
            "menu.dashboard": "仪表盘",
            "menu.dashboard.analysis": "分析页",
            "menu.dashboard.monitor": "监控页",
            "menu.dashboard.workplace": "工作台",
            "menu.form": "表单页",
            "menu.form.basic-form": "基础表单",
            "menu.form.step-form": "分步表单",
            "menu.form.step-form.info": "分步表单（填写转账信息）",
            "menu.form.step-form.confirm": "分步表单（确认转账信息）",
            "menu.form.step-form.result": "分步表单（完成）",
            "menu.form.advanced-form": "高级表单",
            "menu.list": "列表页",
            "menu.list.table-list": "查询表格",
            "menu.list.basic-list": "标准列表",
            "menu.list.card-list": "卡片列表",
            "menu.list.search-list": "搜索列表",
            "menu.list.search-list.articles": "搜索列表（文章）",
            "menu.list.search-list.projects": "搜索列表（项目）",
            "menu.list.search-list.applications": "搜索列表（应用）",
            "menu.profile": "详情页",
            "menu.profile.basic": "基础详情页",
            "menu.profile.advanced": "高级详情页",
            "menu.result": "结果页",
            "menu.result.success": "成功页",
            "menu.result.fail": "失败页",
            "menu.exception": "异常页",
            "menu.exception.not-permission": "403",
            "menu.exception.not-find": "404",
            "menu.exception.server-error": "500",
            "menu.exception.trigger": "触发错误",
            "menu.account": "个人页",
            "menu.account.center": "个人中心",
            "menu.account.settings": "个人设置",
            "menu.account.trigger": "触发报错",
            "menu.account.logout": "退出登录",
            "menu.account.change-psd": "修改密码"
        }
    },
    2518: function(e, a, E) {
        "use strict";
        E.r(a),
        a["default"] = {
            "user.login.userName": "用户名",
            "user.login.password": "密码",
            "user.login.username.placeholder": "请输入账户",
            "user.login.password.placeholder": "请输入密码",
            "user.login.message-invalid-credentials": "账户或密码错误（admin/ant.design）",
            "user.login.message-invalid-verification-code": "验证码错误",
            "user.login.tab-login-credentials": "账户密码登录",
            "user.login.tab-login-mobile": "手机号登录",
            "user.login.mobile.placeholder": "手机号",
            "user.login.mobile.verification-code.placeholder": "验证码",
            "user.login.remember-me": "自动登录",
            "user.login.forgot-password": "忘记密码",
            "user.login.sign-in-with": "其他登录方式",
            "user.login.signup": "注册账户",
            "user.login.login": "登录",
            "user.login.forget": "忘记密码?",
            "user.register.register": "注册",
            "user.register.email.placeholder": "邮箱",
            "user.register.password.placeholder": "请至少输入 6 个字符。请不要使用容易被猜到的密码。",
            "user.register.password.popover-message": "请至少输入 6 个字符。请不要使用容易被猜到的密码。",
            "user.register.confirm-password.placeholder": "确认密码",
            "user.register.get-verification-code": "获取验证码",
            "user.register.sign-in": "使用已有账户登录",
            "user.register-result.msg": "你的账户：{email} 注册成功",
            "user.register-result.activation-email": "激活邮件已发送到你的邮箱中，邮件有效期为24小时。请及时登录邮箱，点击邮件中的链接激活帐户。",
            "user.register-result.back-home": "返回首页",
            "user.register-result.view-mailbox": "查看邮箱",
            "user.email.required": "请输入邮箱地址！",
            "user.email.wrong-format": "邮箱地址格式错误！",
            "user.userName.required": "请输入帐户名",
            "user.password.required": "请输入密码！",
            "user.password.twice.msg": "两次输入的密码不匹配!",
            "user.password.strength.msg": "密码强度不够 ",
            "user.password.strength.strong": "强度：强",
            "user.password.strength.medium": "强度：中",
            "user.password.strength.low": "强度：低",
            "user.password.strength.short": "强度：太短",
            "user.confirm-password.required": "请确认密码！",
            "user.phone-number.required": "请输入正确的手机号",
            "user.phone-number.wrong-format": "手机号格式错误！",
            "user.verification-code.required": "请输入验证码！",
            "user.validatePic-code.required": "请输入验证码！",
            "user.userName.validatePic": "验证码",
            "user.login.validatePic.placeholder": "请输入验证码"
        }
    },
    "25da": function(e, a, E) {
        "use strict";
        E.d(a, "a", (function() {
            return c
        }
        ));
        var t = E("f3f3")
          , n = (E("7f6b"),
        E("8592"))
          , c = {
            name: "PageLoading",
            props: {
                tip: {
                    type: String,
                    default: "Loading.."
                },
                size: {
                    type: String,
                    default: "large"
                }
            },
            render: function() {
                var e = arguments[0]
                  , a = {
                    textAlign: "center",
                    background: "rgba(0,0,0,0.6)",
                    position: "fixed",
                    top: 0,
                    bottom: 0,
                    left: 0,
                    right: 0,
                    zIndex: 1100
                }
                  , E = {
                    position: "absolute",
                    left: "50%",
                    top: "40%",
                    transform: "translate(-50%, -50%)"
                };
                return e("div", {
                    style: a
                }, [e(n["a"], {
                    attrs: {
                        size: this.size,
                        tip: this.tip
                    },
                    style: E
                })])
            }
        }
          , _ = "0.0.1"
          , r = {
            newInstance: function(e, a) {
                var E = document.querySelector("body>div[type=loading]");
                E || (E = document.createElement("div"),
                E.setAttribute("type", "loading"),
                E.setAttribute("class", "ant-loading-wrapper"),
                document.body.appendChild(E));
                var n = Object.assign({
                    visible: !1,
                    size: "large",
                    tip: "Loading..."
                }, a)
                  , _ = new e({
                    data: function() {
                        return Object(t["a"])({}, n)
                    },
                    render: function() {
                        var e = arguments[0]
                          , a = this.tip
                          , E = {};
                        return this.tip && (E.tip = a),
                        this.visible ? e(c, {
                            props: Object(t["a"])({}, E)
                        }) : null
                    }
                }).$mount(E);
                function r(e) {
                    var a = Object(t["a"])(Object(t["a"])({}, n), e)
                      , E = a.visible
                      , c = a.size
                      , r = a.tip;
                    _.$set(_, "visible", E),
                    r && _.$set(_, "tip", r),
                    c && _.$set(_, "size", c)
                }
                return {
                    instance: _,
                    update: r
                }
            }
        }
          , i = {
            show: function(e) {
                this.instance.update(Object(t["a"])(Object(t["a"])({}, e), {}, {
                    visible: !0
                }))
            },
            hide: function() {
                this.instance.update({
                    visible: !1
                })
            }
        }
          , A = function(e, a) {
            e.prototype.$loading || (i.instance = r.newInstance(e, a),
            e.prototype.$loading = i)
        };
        a["b"] = {
            version: _,
            install: A
        }
    },
    2807: function(e, a, E) {
        "use strict";
        E.r(a);
        var t = E("f3f3")
          , n = E("52bd")
          , c = E("5c3a")
          , _ = E.n(c)
          , r = E("1858")
          , i = E("1dec")
          , A = E("5436")
          , s = E("2518")
          , u = E("dec6")
          , o = E("18c7")
          , R = E("8176")
          , d = E("2a21")
          , T = {
            antLocale: n["a"],
            momentName: "zh-cn",
            momentLocale: _.a
        };
        a["default"] = Object(t["a"])(Object(t["a"])(Object(t["a"])(Object(t["a"])(Object(t["a"])(Object(t["a"])(Object(t["a"])(Object(t["a"])(Object(t["a"])({
            message: "-",
            "platform.name": "会拓客",
            "layouts.usermenu.dialog.title": "信息",
            "layouts.usermenu.dialog.content": "您确定要注销吗？",
            "layouts.userLayout.title": "惠支付，会生活，一个懂经营的朋友"
        }, T), r["default"]), i["default"]), A["default"]), s["default"]), u["default"]), o["default"]), R["default"]), d["default"])
    },
    "285e": function(e, a, E) {
        "use strict";
        a["a"] = {
            login: "/system/session",
            loginForm: "/system/login",
            logout: "/auth/logout",
            logout_2_0: "/logout",
            showPic: "/common/showPicInfo",
            business: "/businesses",
            businessReview: "/businesses/reviews",
            orgQuery: "/agencies/orgInfo",
            agencyProfitHandSettle: "/agency/day/profit/settle/status",
            agencyManagerQuery: "/agencies/resMgrList",
            agencyDownloadImage: "/agencies/reviews/download",
            agencyMobile: "/agencies/phoneExist",
            agencySettleWaySwitch: "/agencies/update/settleWay",
            agencyOrgSwitch: "/agencies/sub-org",
            agencyCloseInAuth: "/agencies/enable-merchant-in",
            openEqt: "/agencies/openEqtWallet",
            openActivity: "/agencies/actLabel",
            draftInfo: "/agencyDrafts",
            draftDel: "/agencyDrafts/del",
            agencyBranch: "/branch-offices",
            agency: "/agencies",
            agencyBus: "/agencies/createAgencyBus",
            agencyEdition: "/agencies/abbrEdition",
            agencyReview: "/agencies/reviews",
            agencyTeam: "/agencies/teams",
            agencyDirectTeam: "/agencies/teams/direct-team",
            teamQrcode: "/agencies/teams/invite-qrcode",
            agencyTeamEdition: "/agencies/teams/abbrEdition",
            agencyTeamReview: "/agencies/teams/reviews",
            agencyTeamMember: "/agencies/teams/members",
            agencyMemberEdition: "/agencies/teams/members/abbrEdition",
            agencyOpenPayAuth: "/agencies/openPay",
            agencyReviewEdit: "/agencies/reviews/update",
            agencyActivity: "/agencies/activities",
            agencyActivityReview: "/agencies/activities/reviews",
            agencyMemberExchangeQuery: "/agencies/teams/members/modify/query",
            agencyMemberExchangeUpdate: "/agencies/teams/members/modify/update",
            agencyMemberExchangeUpdateV2: "/agencies/teams/members/modify/belong",
            agencyMemberExchangeParent: "/agencies/teams/members/modify/query/parent",
            payRecord: "/pay/records",
            tradeSum: "/pay/records/sum",
            tradeCount: "/pay/records/count",
            tradeDownload: "/pay/records/download",
            merchantTerminal: "/merchants/terminals",
            merchantTerminalReview: "/merchants/terminals/reviews",
            merchantTerminalBusiness: "/merchants/terminals/businesses",
            merchantTerminalReviewBusiness: "/merchants/qrcode/businesses",
            merchantQrocde: "/merchants/qrcode",
            merchantQrocdeReview: "/merchants/qrcode/reviews",
            merchantQrocdeReviewBusiness: "/merchants/qrcode/businesses",
            merchantQrDownload: "/merchants/qrcode/download",
            merchantTerDownload: "/merchants/terminals/download",
            merchantQrcodeRefreshReviewStatus: "/merchants/qrcode/reviews/findHttpMerStatus",
            merchantTerminalRefreshReviewStatus: "/merchants/terminals/reviews/findHttpMerStatus",
            merchantTerminalNameDecrypt: "/merchants/terminals/decryptName",
            profitBusinessRuleGroup: "/profitbus/rules/groups",
            profitRuleReview: "/profitbus/rules/groups/reviews",
            profitRuleDel: "/profitbus/rules/groups/del",
            profitRuleDownloadTem: "/agency/bind/profit/download/template",
            accountFreezeTem: "/accounts/download/template",
            profitUploadBatch: "/agency/bind/profit/upload/excel",
            agencyBindProfit: "/agency/bind/profit",
            agencyBindProfitReview: "/agency/bind/profit/review",
            agencyBindProfitBatch: "/agency/bind/profit/createBatch",
            activityRule: "/activities/rules",
            activityRewardQuery: "/activities/rewards",
            activityRewardSum: "/activities/rewards/count",
            activityRewardApply: "/activities/rewards/create",
            activityRewardReviewQuery: "/activities/rewards/reviews",
            activityRewardReview: "/activities/rewards/reviews",
            activityRebataDownload: "/activities/rebate/download",
            profitRecord: "/profits/records",
            profitCount: "/profits/records/count",
            profitRecordDownload: "/profits/records/download",
            account: "/accounts",
            accountSum: "/accounts/count",
            handAccountSum: "/hand/accounts/count",
            withdrawReportDownload: "/accounts/withdraws/reviews/finance-report",
            accountsBatchFreeze: "/accounts/batch-freeze",
            systemConfig: "/system/configs",
            systemRole: "/system/roles",
            systemProcess: "/system/review-processes",
            systemUser: "/users",
            systemUserPwd: "/users/updatePasswordPhoneNo",
            systemDisable: "/users/disable",
            systemMerchantToAgency: "/merchants/agency/change",
            decrypt: "/users/decryptIdNo",
            systemUndisable: "/users/un-disable",
            systemAllUsers: "/users/frontUsers",
            systemBanAuth: "/agencies/teams/members/bannedProductType",
            downloadCentre: "/download",
            toDoListQuery: "/index/todo",
            taskQuery: "/system/task-manage/agency-run-task",
            taskUpdate: "/system/task-manage/modify-task-status",
            taskBatchUpdate: "/system/task-manage/batch-modify-task-status",
            provinceQuery: "/common/province",
            cityQuery: "/common/city",
            bankQuery: "common/bankType",
            branchBankQuery: "/common/branchBank",
            uploadFile: "/agencies/uploadFile",
            delFile: "/agencies/delFile",
            templateQuery: "/business/template",
            templateCreate: "/business/template/create",
            templateDel: "/business/template/delete",
            templateList: "/business/template/get",
            templateEdit: "/business/template/update",
            agencyDownload: "/agencies/download",
            agencyMsgDownload: "/agencies/download/excel",
            businessesDownload: "/agencies/businesses/download",
            teamDownload: "/agencies/teams/download",
            teamsBusinessDownload: "/agencies/teams/businesses/download",
            membersDownload: "/agencies/teams/members/download",
            membersBusinessDownload: "/agencies/teams/members/businesses/download",
            merchantSettleDownload: "/merchant/day/profit/settle/download",
            agencySettleDownload: "/agency/day/profit/settle/download",
            agencyProfitDayDownload: "/profits/agency/download",
            teamSettleDownload: "/profits/team/download",
            memberSettleDownload: "/agency/team/member/day/profit/settle/download",
            withdrawalReviewDownload: "/accounts/withdraws/reviews/download",
            withdrawalListDownload: "/accounts/withdraw/download",
            transferDownload: "/terminalPos/download",
            transferFlowDownload: "/terminalPosFlow/download",
            increaseRecordDownload: "/increased/serial/download",
            increaseDayRecordDownload: "/increased/report/download",
            userDownload: "/users/download",
            operatorsDownload: "/users/operator/download",
            noticeQueryDashboard: "/publicMsg/list",
            noticeCreate: "/publicMsg",
            noticeQuery: "/publicMsg",
            noticeStatus: "/publicMsg/status",
            changePsd: "/users/password/modify",
            logQuery: "/log/list",
            logOperationType: "/log/biz-type",
            logDataQuery: "/infoNotifyLog",
            authQuery: "/user/xy/wallet",
            capitalFlow: "/capital-flow",
            accountDownload: "/accounts/download",
            systemParamsQuery: "/system/configs/query",
            systemParamsCreate: "/system/configs/newCreate",
            systemParamsUpdate: "/system/configs/update",
            adjustmentDownload: "/hand/accounts/download",
            eqtWithdrawalRecordDownload: "/eqt/withdraw/download",
            eqtMemberReportDownload: "/eqt/withdraw/member/download",
            eqtAgencyReportDownload: "/eqt/withdraw/agency/download",
            rebateTerminalQuery: "terminal-rebate/query",
            rebateTerminalDownload: "/terminal-rebate/download",
            rebateHandlingQuery: "/activities/rebate",
            rebateHandlingSum: "/activities/rebate/count",
            rebateMerchant: "/merchant-trade-reward",
            rebateMerchantSum: "/merchant-trade-reward/sum",
            merchantRebateDownload: "/merchant-trade-reward/download",
            activityDownload: "/activities/rewards/download",
            agencyRecommendRecord: "/agency/recommend/record",
            agencyRecommendRecordSum: "/agency/recommend/record/count",
            agencyRecommendMonth: "/agency/recommend/summary",
            agencyRecommendSumMonth: "/agency/recommend/summary/count",
            agencyRecommendIndex: "/recommend",
            agencyRecommendIndexDownload: "/recommend/agency/download",
            agencyRecommendReview: "/recommend-review",
            agencyRecommendBindChange: "/recommend/isBind",
            agencyRecommendAwardDownload: "/agency/recommend/record/download",
            agencyRecommendSummaryDownload: "/agency/recommend/summary/download",
            agencyRecommendReviewDownload: "",
            modifyAgencyQuery: "/business/unify/agency/query",
            modifyAgencyCreate: "/business/unify/agency/modify",
            modifyMemberCreate: "/business/unify/member/modify",
            invoiceQuery: "/invoice/query",
            invoiceUpdate: "/invoice/sub",
            invoiceUpdateAdd: "/invoice/rollback",
            terminalQueryPos: "/terminalPos",
            terminalQueryRecord: "/terminalPosFlow",
            terminalDown: "/terminalPos/downGive",
            terminalRebuildTrmNo: "/terminalPos/generate/trmNo",
            bankingPolicyAuthQuery: "/system/auths",
            backTerm: "/terminalPos/modify/posStatus",
            backTerminals: "/terminalPos/refundComponent",
            minusAccountDownload: "/accounts/negative/download"
        }
    },
    "2a21": function(e, a, E) {
        "use strict";
        E.r(a);
        var t = E("f3f3")
          , n = E("0e6b");
        a["default"] = Object(t["a"])({}, n["default"])
    },
    "2e21": function(e, a, E) {
        "use strict";
        E.d(a, "b", (function() {
            return n
        }
        )),
        E.d(a, "a", (function() {
            return c
        }
        ));
        E("caad"),
        E("2532");
        var t = {
            allAuthorities: []
        };
        function n(e) {
            t.allAuthorities = e
        }
        function c(e) {
            return !!e && (Array.isArray(e) ? e.some((function(e) {
                return t.allAuthorities.includes(e)
            }
            )) : t.allAuthorities.includes(e))
        }
    },
    3149: function(e, a, E) {
        "use strict";
        E.d(a, "b", (function() {
            return r
        }
        )),
        E.d(a, "a", (function() {
            return i
        }
        ));
        var t, n, c = E("fc11"), _ = {
            INDEX_PAGE: {
                describe: "首页"
            },
            NOTICE: {
                describe: "公告"
            },
            BRANCH_OFFICE_BUSINESS_REVIEW: {
                describe: "分公司费率审核"
            },
            AGENCY_REVIEW: {
                describe: "服务商审核信息"
            },
            AGENCY_BUSINESS: {
                describe: "服务商费率信息"
            },
            MERCHANT_TERMINAL: {
                describe: "终端商户"
            },
            AGENCY_ACTIVITY_REVIEW: {
                describe: "服务商活动审核"
            },
            PAY_RECORD: {
                describe: "交易信息"
            },
            ACTIVITY_RULE_REVIEW: {
                describe: "活动规则审核信息"
            },
            AGENCY_TEAM_BUSINESS: {
                describe: "团队长费率信息"
            },
            AGENCY_TEAM_MEMBER: {
                describe: "团队成员"
            },
            ACTIVITY_RULE: {
                describe: "活动规则"
            },
            ACCOUNT: {
                describe: "账户"
            },
            SYSTEM_ROLE: {
                describe: "系统角色"
            },
            AGENCY_TEAM: {
                describe: "团队长"
            },
            AGENCY_TEAM_MEMBER_BUSINESS_REVIEW: {
                describe: "团队成员费率审核"
            },
            AGENCY_BIND_PROFIT_RULE: {
                describe: "服务商绑定分润规则信息"
            },
            MERCHANT_TERMINAL_REVIEW: {
                describe: "终端商户审核信息"
            },
            MERCHANT_QRCODE: {
                describe: "立牌商户"
            },
            PROFIT_RECORD: {
                describe: "分润信息"
            },
            SYSTEM_PROCESS: {
                describe: "系统流程"
            },
            BRANCH_OFFICE: {
                describe: "分公司"
            },
            AGENCY_BUSINESS_REVIEW: {
                describe: "服务商费率审核"
            },
            AGENCY_BIND_PROFIT_RULE_REVIEW: {
                describe: "服务商绑定分润规则审核信息"
            },
            PROFIT_RULE_REVIEW: {
                describe: "分润规则审核信息"
            },
            ACTIVITY_REWARD: {
                describe: "活动奖励"
            },
            ACTIVITY_REWARD_DOWNLOAD: {
                describe: "活动奖励-导出"
            },
            MERCHANT_QRCODE_REVIEW: {
                describe: "立牌商户审核信息"
            },
            AGENCY_TEAM_MEMBER_BUSINESS: {
                describe: "团队成员费率"
            },
            USER: {
                describe: "用户信息"
            },
            AGENCY_ACTIVITY: {
                describe: "服务商活动"
            },
            WITHDRAW_REVIEW: {
                describe: "提现审核"
            },
            EXPORT_FINANCE_REPORT: {
                describe: "导出财务报表"
            },
            AGENCY: {
                describe: "服务商"
            },
            SYSTEM_CONFIG: {
                describe: "系统配置"
            },
            BRANCH_OFFICE_BUSINESS: {
                describe: "分公司费率"
            },
            AGENCY_TEAM_BUSINESS_REVIEW: {
                describe: "团队长费率审核"
            },
            PROFIT_BUSINESS_RULE_GROUP: {
                describe: "分润业务规则组"
            },
            DAY_PROFIT_SETTLE: {
                describe: "分润清算"
            },
            TAX_CONFIG: {
                describe: "发票税率管理"
            },
            BUSINESS_TEMPLATE: {
                describe: "费率模板"
            },
            DOWNLOAD_FILE: {
                describe: "下载资料"
            },
            BATCH_ERROR: {
                describe: "数据跑批差错"
            },
            USER_CHANGE_PASSWORD: {
                describe: "用户修改密码"
            },
            QUERY_MIDDLE_ACCOUNT_BALANCE: {
                describe: "中间账户查询"
            },
            USER_BIND_XY_WALLET: {
                describe: "用户授权小Y钱包"
            },
            ERROR_PROFIT_RECORD: {
                describe: "差错分润流水"
            },
            PUBLIC_MSG: {
                describe: "公告管理"
            },
            OPERTOER_LOG: {
                describe: "操作日志"
            },
            QUERY_AGENCY_AND_TEAM_AND_MEMBER: {
                describe: "团队长团员下拉"
            },
            PAYMENT_RECORD: {
                describe: "汇款记录"
            },
            AGENCY_BACKTRACK: {
                describe: "服务商补录"
            },
            AGENCY_DISABLE: {
                describe: "服务商关键信息-修改"
            },
            CAPITAL_FLOW: {
                describe: "汇款记录"
            },
            AGENCY_TEAM_MEMBER_MODIFY: {
                describe: "商户变更"
            },
            WITHDRAW_HAND_ACCOUNT: {
                describe: "调账管理"
            },
            REBATE_MANAGER: {
                describe: "返佣管理"
            },
            ACTIVITY_REBATE: {
                describe: "手续费返佣流水"
            },
            MERCHANT_REBATE: {
                describe: "商户交易达标流水"
            },
            AGENCY_RECOMMEND_ALL: {
                describe: "服务商推荐奖励-ALL"
            },
            AGENCY_RECOMMEND_REWARD_QUERY: {
                describe: "服务商奖励流水查询"
            },
            AGENCY_RECOMMEND_REWARD_COUNT: {
                describe: "服务商奖励流水统计"
            },
            AGENCY_RECOMMEND_REWARD_DOWNLOAD: {
                describe: "服务商奖励流水下载"
            },
            AGENCY_RECOMMEND_SUMMARY_QUERY: {
                describe: "服务商奖励报表查询"
            },
            AGENCY_RECOMMEND_SUMMARY_COUNT: {
                describe: "服务商奖励报表统计"
            },
            AGENCY_RECOMMEND_SUMMARY_DOWNLOAD: {
                describe: "服务商奖励报表下载"
            },
            AGENCY_RECOMMEND_ADMIN_ALL: {
                describe: "服务商推荐管理-ALL"
            },
            AGENCY_RECOMMEND_ADMIN_QUERY: {
                describe: "服务商推荐查询"
            },
            AGENCY_RECOMMEND_ADMIN_CREATE: {
                describe: "服务商推荐新增"
            },
            AGENCY_RECOMMEND_ADMIN_UPDATE: {
                describe: "服务商推荐编辑"
            },
            AGENCY_RECOMMEND_ADMIN_BIND: {
                describe: "服务商推荐绑定"
            },
            AGENCY_RECOMMEND_ADMIN_REVIEW_ALL: {
                describe: "服务商推荐审核-ALL"
            },
            AGENCY_RECOMMEND_ADMIN_REVIEW_QUERY: {
                describe: "服务商推荐审核查询"
            },
            AGENCY_RECOMMEND_ADMIN_REVIEW_REVIEW: {
                describe: "服务商推荐审核"
            },
            MERCHANTS_AGENCY_CHANGE_ALL: {
                describe: "切换记录-ALL"
            },
            MERCHANTS_AGENCY_CHANGE_QUERY: {
                describe: "切换记录-查询"
            },
            USER_OPERATOR_PASSWORD: {
                describe: "用户管理-编辑"
            },
            BUSINESS_UNIFY_ALL: {
                describe: "调价管理-ALL"
            },
            WITHDRAW_ALL: {
                describe: "提现流水查询_ALL"
            },
            AGENCY_MARKET_PROFIT_MONTH: {
                describe: "营销不分润月报表"
            },
            AGENCY_MARKET_PROFIT_DAY: {
                describe: "营销不分润日报表"
            },
            AGENCY_INVOICE: {
                describe: "发票管理"
            },
            TERMINAL_ALL: {
                describe: "终端管理"
            },
            SYSTEM_AUTH: {
                describe: "系统管理_银行政策权限"
            },
            AGENCY_PROFIT: {
                describe: "服务商日分润统计"
            },
            MEMBER_ADMIN: {
                describe: "成员权限配置"
            },
            TERMINAL_CONFIG: {
                describe: "终端类型配置"
            },
            EXTERNAL_ACTIVITY: {
                describe: "前海移联活动规则"
            }
        }, r = (t = {
            BRANCH_OFFICE_BUSINESS_UPDATE: "BRANCH_OFFICE_BUSINESS_UPDATE",
            PROFIT_BUSINESS_RULE_GROUP_ALL: "PROFIT_BUSINESS_RULE_GROUP_ALL",
            AGENCY_TEAM_MEMBER_CREATE: "AGENCY_TEAM_MEMBER_CREATE",
            AGENCY_ACTIVITY_REVIEW_REVIEW: "AGENCY_ACTIVITY_REVIEW_REVIEW",
            AGENCY_QUERY: "AGENCY_QUERY",
            AGENCY_OPEN_EQT_WALLET: "AGENCY_OPEN_EQT_WALLET",
            SYSTEM_ROLE_UPDATE: "SYSTEM_ROLE_UPDATE",
            PROFIT_RECORD_ALL: "PROFIT_RECORD_ALL",
            ACCOUNT_QUERY: "ACCOUNT_QUERY",
            WITHDRAW_REVIEW_QUERY: "WITHDRAW_REVIEW_QUERY",
            MERCHANT_QRCODE_QUERY: "MERCHANT_QRCODE_QUERY",
            BROWSE_CAPITAL_FLOW: "BROWSE_CAPITAL_FLOW",
            AGENCY_BUSINESS_REVIEW_QUERY: "AGENCY_BUSINESS_REVIEW_QUERY",
            AGENCY_BIND_PROFIT_RULE_UPDATE: "AGENCY_BIND_PROFIT_RULE_UPDATE",
            AGENCY_BIND_PROFIT_RULE_REVIEW_QUERY: "AGENCY_BIND_PROFIT_RULE_REVIEW_QUERY",
            AGENCY_BIND_PROFIT_RULE_EXCEL_UPLOAD: "AGENCY_BIND_PROFIT_RULE_EXCEL_UPLOAD",
            AGENCY_BIND_PROFIT_RULE_TEMPLATE_DOWNLOAD: "AGENCY_BIND_PROFIT_RULE_TEMPLATE_DOWNLOAD",
            USER_OPERATOR_ALL: "USER_OPERATOR_ALL",
            USER_OPERATOR_QUERY: "USER_OPERATOR_QUERY",
            AGENCY_TEAM_BUSINESS_REVIEW_REVIEW: "AGENCY_TEAM_BUSINESS_REVIEW_REVIEW",
            AGENCY_ACTIVITY_ALL: "AGENCY_ACTIVITY_ALL",
            AGENCY_UPDATE_SUB_ORG: "AGENCY_UPDATE_SUB_ORG",
            AGENCY_TEAM_QUERY: "AGENCY_TEAM_QUERY",
            BRANCH_OFFICE_BUSINESS_QUERY: "BRANCH_OFFICE_BUSINESS_QUERY",
            MERCHANT_QRCODE_REVIEW_REVIEW: "MERCHANT_QRCODE_REVIEW_REVIEW",
            AGENCY_TEAM_DOWNLOAD: "AGENCY_TEAM_DOWNLOAD",
            AGENCY_TEAM_MEMBER_BUSINESS_REVIEW_QUERY: "AGENCY_TEAM_MEMBER_BUSINESS_REVIEW_QUERY",
            AGENCY_TEAM_ALL: "AGENCY_TEAM_ALL",
            AGENCY_TEAM_CREATE: "AGENCY_TEAM_CREATE",
            USER_OPERATOR_UPDATE: "USER_OPERATOR_UPDATE",
            USER_ID_CARD_DECRYPT: "USER_ID_CARD_DECRYPT",
            MERCHANT_QRCODE_REVIEW_ALL: "MERCHANT_QRCODE_REVIEW_ALL",
            SYSTEM_CONFIG_QUERY: "SYSTEM_CONFIG_QUERY",
            MERCHANT_QRCODE_REVIEW_QUERY: "MERCHANT_QRCODE_REVIEW_QUERY",
            SYSTEM_ROLE_QUERY: "SYSTEM_ROLE_QUERY",
            AGENCY_TEAM_MEMBER_QUERY: "AGENCY_TEAM_MEMBER_QUERY",
            MEMBER_CHANGE_TEAM: "MEMBER_CHANGE_TEAM",
            AGENCY_TEAM_MEMBER_REMOVE: "AGENCY_TEAM_MEMBER_REMOVE",
            AGENCY_BIND_PROFIT_RULE_QUERY: "AGENCY_BIND_PROFIT_RULE_QUERY",
            AGENCY_TEAM_BUSINESS_CREATE: "AGENCY_TEAM_BUSINESS_CREATE",
            ACTIVITY_REWARD_QUERY: "ACTIVITY_REWARD_QUERY",
            ACTIVITY_REWARD_REVIEW_ALL: "ACTIVITY_REWARD_REVIEW_ALL",
            ACTIVITY_REWARD_REVIEW_QUERY: "ACTIVITY_REWARD_REVIEW_QUERY",
            ACTIVITY_REWARD_REVIEW_REVIEW: "ACTIVITY_REWARD_REVIEW_REVIEW",
            ACTIVITY_REWARD_APPLY: "ACTIVITY_REWARD_APPLY",
            MERCHANT_QRCODE_ALL: "MERCHANT_QRCODE_ALL",
            ACTIVITY_RULE_UPDATE: "ACTIVITY_RULE_UPDATE",
            AGENCY_BUSINESS_REVIEW_REVIEW: "AGENCY_BUSINESS_REVIEW_REVIEW",
            PROFIT_RULE_REVIEW_QUERY: "PROFIT_RULE_REVIEW_QUERY",
            AGENCY_TEAM_MEMBER_BUSINESS_DELETE: "AGENCY_TEAM_MEMBER_BUSINESS_DELETE",
            MERCHANT_TERMINAL_ALL: "MERCHANT_TERMINAL_ALL",
            MERCHANT_QRCODE_DOWNLOAD: "MERCHANT_QRCODE_DOWNLOAD",
            MERCHANT_TERMINAL_DOWNLOAD: "MERCHANT_TERMINAL_DOWNLOAD",
            MERCHANT_TERMINAL_DECRYPT_NAME: "MERCHANT_TERMINAL_DECRYPT_NAME",
            ACTIVITY_RULE_REVIEW_REVIEW: "ACTIVITY_RULE_REVIEW_REVIEW",
            ACCOUNT_ALL: "ACCOUNT_ALL",
            ACCOUNT_FREEZE: "ACCOUNT_FREEZE",
            ACCOUNT_UN_FREEZE: "ACCOUNT_UN_FREEZE",
            ACCOUNT_BATCH_FREEZE: "ACCOUNT_BATCH_FREEZE",
            AGENCY_TEAM_MEMBER_BUSINESS_QUERY: "AGENCY_TEAM_MEMBER_BUSINESS_QUERY",
            AGENCY_TEAM_MEMBER_BANNED_PRODUCT_TYPE: "AGENCY_TEAM_MEMBER_BANNED_PRODUCT_TYPE",
            BRANCH_OFFICE_BUSINESS_REVIEW_QUERY: "BRANCH_OFFICE_BUSINESS_REVIEW_QUERY",
            AGENCY_BUSINESS_ALL: "AGENCY_BUSINESS_ALL",
            AGENCY_ACTIVITY_QUERY: "AGENCY_ACTIVITY_QUERY",
            AGENCY_BIND_PROFIT_RULE_REVIEW_ALL: "AGENCY_BIND_PROFIT_RULE_REVIEW_ALL",
            AGENCY_BUSINESS_REVIEW_ALL: "AGENCY_BUSINESS_REVIEW_ALL",
            PAY_RECORD_ALL: "PAY_RECORD_ALL",
            PAY_RECORD_QUERY: "PAY_RECORD_QUERY",
            PAY_RECORD_SUM: "PAY_RECORD_SUM",
            PAY_RECORD_DOWNLOAD: "PAY_RECORD_DOWNLOAD",
            BRANCH_OFFICE_BUSINESS_CREATE: "BRANCH_OFFICE_BUSINESS_CREATE",
            AGENCY_CREATE: "AGENCY_CREATE",
            MERCHANT_TERMINAL_QUERY: "MERCHANT_TERMINAL_QUERY",
            SYSTEM_CONFIG_UPDATE: "SYSTEM_CONFIG_UPDATE",
            AGENCY_BUSINESS_DELETE: "AGENCY_BUSINESS_DELETE",
            ACTIVITY_RULE_REVIEW_ALL: "ACTIVITY_RULE_REVIEW_ALL",
            USER_OPERATOR_CREATE: "USER_OPERATOR_CREATE",
            AGENCY_ACTIVITY_CREATE: "AGENCY_ACTIVITY_CREATE",
            AGENCY_BIND_PROFIT_RULE_CREATE: "AGENCY_BIND_PROFIT_RULE_CREATE",
            AGENCY_TEAM_BUSINESS_DELETE: "AGENCY_TEAM_BUSINESS_DELETE",
            AGENCY_REVIEW_REVIEW: "AGENCY_REVIEW_REVIEW",
            AGENCY_DOWNLOAD_EXCEL: "AGENCY_DOWNLOAD_EXCEL",
            PROFIT_RECORD_QUERY: "PROFIT_RECORD_QUERY",
            PROFIT_RECORD_COUNT: "PROFIT_RECORD_COUNT",
            PROFIT_RECORD_DOWNLOAD: "PROFIT_RECORD_DOWNLOAD",
            AGENCY_TEAM_BUSINESS_REVIEW_ALL: "AGENCY_TEAM_BUSINESS_REVIEW_ALL",
            AGENCY_BIND_PROFIT_RULE_ALL: "AGENCY_BIND_PROFIT_RULE_ALL",
            ACTIVITY_RULE_REVIEW_QUERY: "ACTIVITY_RULE_REVIEW_QUERY",
            BRANCH_OFFICE_DELETE: "BRANCH_OFFICE_DELETE",
            AGENCY_TEAM_UPDATE: "AGENCY_TEAM_UPDATE",
            SYSTEM_PROCESS_QUERY: "SYSTEM_PROCESS_QUERY",
            WITHDRAW_REVIEW_ALL: "WITHDRAW_REVIEW_ALL",
            EXPORT_FINANCE_REPORT: "EXPORT_FINANCE_REPORT",
            AGENCY_UPDATE: "AGENCY_UPDATE",
            AGENCY_BUSINESS_QUERY: "AGENCY_BUSINESS_QUERY",
            ACTIVITY_RULE_ALL: "ACTIVITY_RULE_ALL",
            ACTIVITY_REWARD_ALL: "ACTIVITY_REWARD_ALL",
            ACTIVITY_REWARD_DOWNLOAD: "ACTIVITY_REWARD_DOWNLOAD",
            AGENCY_REVIEW_QUERY: "AGENCY_REVIEW_QUERY",
            AGENCY_PATCH_PARENT_ID: "AGENCY_PATCH_PARENT_ID",
            USER_QUERY: "USER_QUERY",
            AGENCY_ACTIVITY_UPDATE: "AGENCY_ACTIVITY_UPDATE",
            BRANCH_OFFICE_BUSINESS_ALL: "BRANCH_OFFICE_BUSINESS_ALL",
            PROFIT_BUSINESS_RULE_GROUP_PATCH_PROFIT_RULE_GROUP_IDS: "PROFIT_BUSINESS_RULE_GROUP_PATCH_PROFIT_RULE_GROUP_IDS",
            BRANCH_OFFICE_BUSINESS_DELETE: "BRANCH_OFFICE_BUSINESS_DELETE",
            AGENCY_BUSINESS_CREATE: "AGENCY_BUSINESS_CREATE",
            SYSTEM_ROLE_DELETE: "SYSTEM_ROLE_DELETE",
            MERCHANT_TERMINAL_REVIEW_REVIEW: "MERCHANT_TERMINAL_REVIEW_REVIEW",
            AGENCY_ALL: "AGENCY_ALL",
            AGENCY_ENABLE_MERCHANT_IN: "AGENCY_ENABLE_MERCHANT_IN",
            SYSTEM_PROCESS_CREATE: "SYSTEM_PROCESS_CREATE",
            AGENCY_TEAM_MEMBER_BUSINESS_CREATE: "AGENCY_TEAM_MEMBER_BUSINESS_CREATE",
            PROFIT_BUSINESS_RULE_GROUP_CREATE: "PROFIT_BUSINESS_RULE_GROUP_CREATE",
            AGENCY_BUSINESS_UPDATE: "AGENCY_BUSINESS_UPDATE",
            SYSTEM_CONFIG_DELETE: "SYSTEM_CONFIG_DELETE",
            SYSTEM_CONFIG_PAGE_QUERY: "SYSTEM_CONFIG_PAGE_QUERY",
            SYSTEM_CONFIG_NEW_CREATE: "SYSTEM_CONFIG_NEW_CREATE",
            SYSTEM_CONFIG_PAGE_UPDATE: "SYSTEM_CONFIG_PAGE_UPDATE",
            AGENCY_REVIEW_ALL: "AGENCY_REVIEW_ALL",
            AGENCY_TEAM_BUSINESS_UPDATE: "AGENCY_TEAM_BUSINESS_UPDATE",
            BRANCH_OFFICE_UPDATE: "BRANCH_OFFICE_UPDATE",
            AGENCY_TEAM_BUSINESS_REVIEW_QUERY: "AGENCY_TEAM_BUSINESS_REVIEW_QUERY",
            PROFIT_BUSINESS_RULE_GROUP_QUERY: "PROFIT_BUSINESS_RULE_GROUP_QUERY",
            MERCHANT_TERMINAL_REVIEW_QUERY: "MERCHANT_TERMINAL_REVIEW_QUERY",
            SYSTEM_ROLE_ALL: "SYSTEM_ROLE_ALL",
            ACTIVITY_RULE_CREATE: "ACTIVITY_RULE_CREATE",
            BRANCH_OFFICE_QUERY: "BRANCH_OFFICE_QUERY",
            AGENCY_TEAM_MEMBER_BUSINESS_REVIEW_REVIEW: "AGENCY_TEAM_MEMBER_BUSINESS_REVIEW_REVIEW",
            BRANCH_OFFICE_BUSINESS_REVIEW_REVIEW: "BRANCH_OFFICE_BUSINESS_REVIEW_REVIEW",
            AGENCY_ACTIVITY_REVIEW_ALL: "AGENCY_ACTIVITY_REVIEW_ALL",
            MERCHANT_TERMINAL_REVIEW_ALL: "MERCHANT_TERMINAL_REVIEW_ALL",
            WITHDRAW_REVIEW_REVIEW: "WITHDRAW_REVIEW_REVIEW",
            AGENCY_REFUSED: "AGENCY_REFUSED",
            WITHDRAW_REVIEW_REMITTING: "WITHDRAW_REVIEW_REMITTING",
            WITHDRAW_REVIEW_REMITTED: "WITHDRAW_REVIEW_REMITTED",
            COMMISSION_REBATE_ALL: "COMMISSION_REBATE_ALL",
            COMMISSION_REBATE_QUERY: "COMMISSION_REBATE_QUERY",
            COMMISSION_REBATE_DOWNLOAD: "COMMISSION_REBATE_DOWNLOAD",
            HAND_ACCOUNT_ALL: "HAND_ACCOUNT_ALL",
            HAND_ACCOUNT_UPLOAD: "HAND_ACCOUNT_UPLOAD",
            HAND_ACCOUNT_QUERY: "HAND_ACCOUNT_QUERY",
            HAND_ACCOUNT_REVIEW: "HAND_ACCOUNT_REVIEW",
            HAND_ACCOUNT_DOWNLOAD: "HAND_ACCOUNT_DOWNLOAD",
            HAND_ACCOUNT_COUNT: "HAND_ACCOUNT_COUNT",
            TAX_CONFIG_ALL: "TAX_CONFIG_ALL",
            SYSTEM_PROCESS_ALL: "SYSTEM_PROCESS_ALL",
            PROFIT_BUSINESS_RULE_GROUP_UPDATE: "PROFIT_BUSINESS_RULE_GROUP_UPDATE",
            ACTIVITY_RULE_DELETE: "ACTIVITY_RULE_DELETE",
            SYSTEM_ROLE_CREATE: "SYSTEM_ROLE_CREATE",
            PROFIT_RULE_REVIEW_REVIEW: "PROFIT_RULE_REVIEW_REVIEW",
            SYSTEM_CONFIG_ALL: "SYSTEM_CONFIG_ALL",
            SYSTEM_PROCESS_UPDATE: "SYSTEM_PROCESS_UPDATE",
            BRANCH_OFFICE_CREATE: "BRANCH_OFFICE_CREATE",
            AGENCY_TEAM_MEMBER_UPDATE: "AGENCY_TEAM_MEMBER_UPDATE",
            SYSTEM_PROCESS_DELETE: "SYSTEM_PROCESS_DELETE",
            AGENCY_PATCH_BRANCH_OFFICE: "AGENCY_PATCH_BRANCH_OFFICE",
            AGENCY_TEAM_BUSINESS_ALL: "AGENCY_TEAM_BUSINESS_ALL"
        },
        Object(c["a"])(t, "AGENCY_TEAM_CREATE", "AGENCY_TEAM_CREATE"),
        Object(c["a"])(t, "AGENCY_BIND_PROFIT_RULE_REVIEW_REVIEW", "AGENCY_BIND_PROFIT_RULE_REVIEW_REVIEW"),
        Object(c["a"])(t, "USER_ALL", "USER_ALL"),
        Object(c["a"])(t, "USER_OPERATOR_DOWNLOAD", "USER_OPERATOR_DOWNLOAD"),
        Object(c["a"])(t, "USER_DOWNLOAD", "USER_DOWNLOAD"),
        Object(c["a"])(t, "AGENCY_TEAM_BUSINESS_QUERY", "AGENCY_TEAM_BUSINESS_QUERY"),
        Object(c["a"])(t, "AGENCY_TEAM_MEMBER_BUSINESS_ALL", "AGENCY_TEAM_MEMBER_BUSINESS_ALL"),
        Object(c["a"])(t, "BRANCH_OFFICE_ALL", "BRANCH_OFFICE_ALL"),
        Object(c["a"])(t, "ACTIVITY_RULE_QUERY", "ACTIVITY_RULE_QUERY"),
        Object(c["a"])(t, "AGENCY_ACTIVITY_REVIEW_QUERY", "AGENCY_ACTIVITY_REVIEW_QUERY"),
        Object(c["a"])(t, "AGENCY_TEAM_MEMBER_ALL", "AGENCY_TEAM_MEMBER_ALL"),
        Object(c["a"])(t, "AGENCY_TEAM_MEMBER_BUSINESS_REVIEW_ALL", "AGENCY_TEAM_MEMBER_BUSINESS_REVIEW_ALL"),
        Object(c["a"])(t, "PROFIT_BUSINESS_RULE_GROUP_DELETE", "PROFIT_BUSINESS_RULE_GROUP_DELETE"),
        Object(c["a"])(t, "BRANCH_OFFICE_BUSINESS_REVIEW_ALL", "BRANCH_OFFICE_BUSINESS_REVIEW_ALL"),
        Object(c["a"])(t, "AGENCY_TEAM_MEMBER_BUSINESS_UPDATE", "AGENCY_TEAM_MEMBER_BUSINESS_UPDATE"),
        Object(c["a"])(t, "DAY_AGENCY_SETTLE_ALL", "DAY_AGENCY_SETTLE_ALL"),
        Object(c["a"])(t, "DAY_AGENCY_SETTLE_QUERY", "DAY_AGENCY_SETTLE_QUERY"),
        Object(c["a"])(t, "DAY_AGENCY_SETTLE_SUM", "DAY_AGENCY_SETTLE_SUM"),
        Object(c["a"])(t, "DAY_AGENCY_SETTLE_CREATE_REVIEW", "DAY_AGENCY_SETTLE_CREATE_REVIEW"),
        Object(c["a"])(t, "DAY_AGENCY_SETTLE_REVIEW_ALL", "DAY_AGENCY_SETTLE_REVIEW_ALL"),
        Object(c["a"])(t, "DAY_AGENCY_SETTLE_REVIEW_QUERY", "DAY_AGENCY_SETTLE_REVIEW_QUERY"),
        Object(c["a"])(t, "DAY_AGENCY_SETTLE_REVIEW_REVIEW", "DAY_AGENCY_SETTLE_REVIEW_REVIEW"),
        Object(c["a"])(t, "DAY_AGENCY_TEAM_SETTLE_ALL", "DAY_AGENCY_TEAM_SETTLE_ALL"),
        Object(c["a"])(t, "DAY_AGENCY_TEAM_SETTLE_QUERY", "DAY_AGENCY_TEAM_SETTLE_QUERY"),
        Object(c["a"])(t, "DAY_AGENCY_TEAM_SETTLE_SUM", "DAY_AGENCY_TEAM_SETTLE_SUM"),
        Object(c["a"])(t, "DAY_AGENCY_TEAM_MEMBER_SETTLE_ALL", "DAY_AGENCY_TEAM_MEMBER_SETTLE_ALL"),
        Object(c["a"])(t, "DAY_AGENCY_TEAM_MEMBER_SETTLE_QUERY", "DAY_AGENCY_TEAM_MEMBER_SETTLE_QUERY"),
        Object(c["a"])(t, "DAY_AGENCY_TEAM_MEMBER_SETTLE_SUM", "DAY_AGENCY_TEAM_MEMBER_SETTLE_SUM"),
        Object(c["a"])(t, "DAY_MERCHANT_SETTLE_ALL", "DAY_MERCHANT_SETTLE_ALL"),
        Object(c["a"])(t, "DAY_MERCHANT_SETTLE_QUERY", "DAY_MERCHANT_SETTLE_QUERY"),
        Object(c["a"])(t, "DAY_MERCHANT_SETTLE_SUM", "DAY_MERCHANT_SETTLE_SUM"),
        Object(c["a"])(t, "DAY_AGENCY_SETTLE_HAND_SETTLE_SUCCESS", "DAY_AGENCY_SETTLE_HAND_SETTLE_SUCCESS"),
        Object(c["a"])(t, "TASK_MANAGE_ALL", "TASK_MANAGE_ALL"),
        Object(c["a"])(t, "TASK_MANAGE_QUERY", "TASK_MANAGE_QUERY"),
        Object(c["a"])(t, "TASK_MANAGE_UPDATE", "TASK_MANAGE_UPDATE"),
        Object(c["a"])(t, "INDEX_PAGE_ALL", "INDEX_PAGE_ALL"),
        Object(c["a"])(t, "INDEX_PAGE_QUERY", "INDEX_PAGE_QUERY"),
        Object(c["a"])(t, "BUSINESS_TEMPLATE_ALL", "BUSINESS_TEMPLATE_ALL"),
        Object(c["a"])(t, "BUSINESS_TEMPLATE_QUERY", "BUSINESS_TEMPLATE_QUERY"),
        Object(c["a"])(t, "BUSINESS_TEMPLATE_GET", "BUSINESS_TEMPLATE_GET"),
        Object(c["a"])(t, "BUSINESS_TEMPLATE_CREATE", "BUSINESS_TEMPLATE_CREATE"),
        Object(c["a"])(t, "BUSINESS_TEMPLATE_UPDATE", "BUSINESS_TEMPLATE_UPDATE"),
        Object(c["a"])(t, "BUSINESS_TEMPLATE_DELETE", "BUSINESS_TEMPLATE_DELETE"),
        Object(c["a"])(t, "AGENCY_DOWNLOAD", "AGENCY_DOWNLOAD"),
        Object(c["a"])(t, "AGENCY_BUSINESS_DOWNLOAD", "AGENCY_BUSINESS_DOWNLOAD"),
        Object(c["a"])(t, "AGENCY_TEAM_DOWNLOAD", "AGENCY_TEAM_DOWNLOAD"),
        Object(c["a"])(t, "AGENCY_TEAM_BUSINESS_DOWNLOAD", "AGENCY_TEAM_BUSINESS_DOWNLOAD"),
        Object(c["a"])(t, "AGENCY_TEAM_MEMBER_DOWNLOAD", "AGENCY_TEAM_MEMBER_DOWNLOAD"),
        Object(c["a"])(t, "AGENCY_TEAM_MEMBER_BUSINESS_DOWNLOAD", "AGENCY_TEAM_MEMBER_BUSINESS_DOWNLOAD"),
        Object(c["a"])(t, "DAY_AGENCY_SETTLE_DOWNLOAD", "DAY_AGENCY_SETTLE_DOWNLOAD"),
        Object(c["a"])(t, "DAY_AGENCY_TEAM_SETTLE_DOWNLOAD", "DAY_AGENCY_TEAM_SETTLE_DOWNLOAD"),
        Object(c["a"])(t, "DAY_AGENCY_TEAM_MEMBER_SETTLE_DOWNLOAD", "DAY_AGENCY_TEAM_MEMBER_SETTLE_DOWNLOAD"),
        Object(c["a"])(t, "DAY_MERCHANT_SETTLE_DOWNLOAD", "DAY_MERCHANT_SETTLE_DOWNLOAD"),
        Object(c["a"])(t, "WITHDRAW_REVIEW_EXPORT", "WITHDRAW_REVIEW_EXPORT"),
        Object(c["a"])(t, "WITHDRAW_REVIEW_PAY", "WITHDRAW_REVIEW_PAY"),
        Object(c["a"])(t, "USER_CHANGE_PASSWORD", "USER_CHANGE_PASSWORD"),
        Object(c["a"])(t, "QUERY_MIDDLE_ACCOUNT_BALANCE", "QUERY_MIDDLE_ACCOUNT_BALANCE"),
        Object(c["a"])(t, "USER_BIND_XY_WALLET_ALL", "USER_BIND_XY_WALLET_ALL"),
        Object(c["a"])(t, "USER_BIND_XY_WALLET_QUERY", "USER_BIND_XY_WALLET_QUERY"),
        Object(c["a"])(t, "USER_DISABLE", "USER_DISABLE"),
        Object(c["a"])(t, "ERROR_PROFIT_RECORD_ALL", "ERROR_PROFIT_RECORD_ALL"),
        Object(c["a"])(t, "ERROR_PROFIT_RECORD_QUERY", "ERROR_PROFIT_RECORD_QUERY"),
        Object(c["a"])(t, "PUBLIC_MSG_ALL", "PUBLIC_MSG_ALL"),
        Object(c["a"])(t, "PUBLIC_MSG_QUERY", "PUBLIC_MSG_QUERY"),
        Object(c["a"])(t, "PUBLIC_MSG_CREATE", "PUBLIC_MSG_CREATE"),
        Object(c["a"])(t, "PUBLIC_MSG_STATUS", "PUBLIC_MSG_STATUS"),
        Object(c["a"])(t, "OPERTOER_LOG_ALL", "OPERTOER_LOG_ALL"),
        Object(c["a"])(t, "OPERTOER_LOG_QUERY", "OPERTOER_LOG_QUERY"),
        Object(c["a"])(t, "QUERY_AGENCY_AND_TEAM_AND_MEMBER", "QUERY_AGENCY_AND_TEAM_AND_MEMBER"),
        Object(c["a"])(t, "AGENCY_OPEN_PAY_PERMISSION", "AGENCY_OPEN_PAY_PERMISSION"),
        Object(c["a"])(t, "AGENCY_BACKTRACK", "AGENCY_BACKTRACK"),
        Object(c["a"])(t, "AGENCY_DISABLE", "AGENCY_DISABLE"),
        Object(c["a"])(t, "CAPITAL_FLOW_ALL", "CAPITAL_FLOW_ALL"),
        Object(c["a"])(t, "CAPITAL_FLOW_QUERY", "CAPITAL_FLOW_QUERY"),
        Object(c["a"])(t, "CAPITAL_FLOW_UPDATE", "CAPITAL_FLOW_UPDATE"),
        Object(c["a"])(t, "AGENCY_TEAM_MEMBER_MODIFY_ALL", "AGENCY_TEAM_MEMBER_MODIFY_ALL"),
        Object(c["a"])(t, "AGENCY_TEAM_MEMBER_MODIFY_QUERY", "AGENCY_TEAM_MEMBER_MODIFY_QUERY"),
        Object(c["a"])(t, "AGENCY_TEAM_MEMBER_MODIFY_UPDATE", "AGENCY_TEAM_MEMBER_MODIFY_UPDATE"),
        Object(c["a"])(t, "TERMINAL_REBATE_ALL", "TERMINAL_REBATE_ALL"),
        Object(c["a"])(t, "TERMINAL_REBATE_QUERY", "TERMINAL_REBATE_QUERY"),
        Object(c["a"])(t, "TERMINAL_REBATE_DOWNLOAD", "TERMINAL_REBATE_DOWNLOAD"),
        Object(c["a"])(t, "MERCHANT_TRADE_REWARD_ALL", "MERCHANT_TRADE_REWARD_ALL"),
        Object(c["a"])(t, "MERCHANT_TRADE_REWARD_QUERY", "MERCHANT_TRADE_REWARD_QUERY"),
        Object(c["a"])(t, "AGENCY_RECOMMEND_ALL", "AGENCY_RECOMMEND_ALL"),
        Object(c["a"])(t, "AGENCY_RECOMMEND_REWARD_QUERY", "AGENCY_RECOMMEND_REWARD_QUERY"),
        Object(c["a"])(t, "AGENCY_RECOMMEND_REWARD_COUNT", "AGENCY_RECOMMEND_REWARD_COUNT"),
        Object(c["a"])(t, "AGENCY_RECOMMEND_REWARD_DOWNLOAD", "AGENCY_RECOMMEND_REWARD_DOWNLOAD"),
        Object(c["a"])(t, "AGENCY_RECOMMEND_SUMMARY_QUERY", "AGENCY_RECOMMEND_SUMMARY_QUERY"),
        Object(c["a"])(t, "AGENCY_RECOMMEND_SUMMARY_COUNT", "AGENCY_RECOMMEND_SUMMARY_COUNT"),
        Object(c["a"])(t, "AGENCY_RECOMMEND_SUMMARY_DOWNLOAD", "AGENCY_RECOMMEND_SUMMARY_DOWNLOAD"),
        Object(c["a"])(t, "AGENCY_RECOMMEND_ADMIN_ALL", "AGENCY_RECOMMEND_ADMIN_ALL"),
        Object(c["a"])(t, "AGENCY_RECOMMEND_ADMIN_QUERY", "AGENCY_RECOMMEND_ADMIN_QUERY"),
        Object(c["a"])(t, "AGENCY_RECOMMEND_ADMIN_CREATE", "AGENCY_RECOMMEND_ADMIN_CREATE"),
        Object(c["a"])(t, "AGENCY_RECOMMEND_ADMIN_UPDATE", "AGENCY_RECOMMEND_ADMIN_UPDATE"),
        Object(c["a"])(t, "AGENCY_RECOMMEND_ADMIN_BIND", "AGENCY_RECOMMEND_ADMIN_BIND"),
        Object(c["a"])(t, "AGENCY_RECOMMEND_ADMIN_REVIEW_ALL", "AGENCY_RECOMMEND_ADMIN_REVIEW_ALL"),
        Object(c["a"])(t, "AGENCY_RECOMMEND_ADMIN_REVIEW_QUERY", "AGENCY_RECOMMEND_ADMIN_REVIEW_QUERY"),
        Object(c["a"])(t, "AGENCY_RECOMMEND_ADMIN_REVIEW_REVIEW", "AGENCY_RECOMMEND_ADMIN_REVIEW_REVIEW"),
        Object(c["a"])(t, "MERCHANTS_AGENCY_CHANGE_ALL", "MERCHANTS_AGENCY_CHANGE_ALL"),
        Object(c["a"])(t, "MERCHANTS_AGENCY_CHANGE_QUERY", "MERCHANTS_AGENCY_CHANGE_QUERY"),
        Object(c["a"])(t, "USER_OPERATOR_PASSWORD", "USER_OPERATOR_PASSWORD"),
        Object(c["a"])(t, "PROFIT_RECORD_REVENUE", "PROFIT_RECORD_REVENUE"),
        Object(c["a"])(t, "BUSINESS_UNIFY_ALL", "BUSINESS_UNIFY_ALL"),
        Object(c["a"])(t, "BUSINESS_UNIFY_AGENCY_MODIFY", "BUSINESS_UNIFY_AGENCY_MODIFY"),
        Object(c["a"])(t, "BUSINESS_UNIFY_AGENCY_QUERY", "BUSINESS_UNIFY_AGENCY_QUERY"),
        Object(c["a"])(t, "WITHDRAW_ALL", "WITHDRAW_ALL"),
        Object(c["a"])(t, "WITHDRAW_QUERY", "WITHDRAW_QUERY"),
        Object(c["a"])(t, "WITHDRAW_DOWNLOAD", "WITHDRAW_DOWNLOAD"),
        Object(c["a"])(t, "AGENCY_MARKET_PROFIT_MONTH_ALL", "AGENCY_MARKET_PROFIT_MONTH_ALL"),
        Object(c["a"])(t, "AGENCY_MARKET_PROFIT_MONTH_QUERY", "AGENCY_MARKET_PROFIT_MONTH_QUERY"),
        Object(c["a"])(t, "AGENCY_MARKET_PROFIT_MONTH_DOWNLOAD", "AGENCY_MARKET_PROFIT_MONTH_DOWNLOAD"),
        Object(c["a"])(t, "NETTING_BALANCE_VISIBLE", "NETTING_BALANCE_VISIBLE"),
        Object(c["a"])(t, "AGENCY_MARKET_PROFIT_DAY_ALL", "AGENCY_MARKET_PROFIT_DAY_ALL"),
        Object(c["a"])(t, "AGENCY_MARKET_PROFIT_DAY_QUERY", "AGENCY_MARKET_PROFIT_DAY_QUERY"),
        Object(c["a"])(t, "AGENCY_MARKET_PROFIT_DAY_DOWNLOAD", "AGENCY_MARKET_PROFIT_DAY_DOWNLOAD"),
        Object(c["a"])(t, "AGENCY_INVOICE_ALL", "AGENCY_INVOICE_ALL"),
        Object(c["a"])(t, "AGENCY_INVOICE_QUERY", "AGENCY_INVOICE_QUERY"),
        Object(c["a"])(t, "AGENCY_INVOICE_SUB", "AGENCY_INVOICE_SUB"),
        Object(c["a"])(t, "AGENCY_INVOICE_ROLLBACK", "AGENCY_INVOICE_ROLLBACK"),
        Object(c["a"])(t, "AGENCY_UPDATE_SETTLEWAY", "AGENCY_UPDATE_SETTLEWAY"),
        Object(c["a"])(t, "USER_UN_DISABLE", "USER_UN_DISABLE"),
        Object(c["a"])(t, "TEAM_PROFIT_RECORD_ALL", "TEAM_PROFIT_RECORD_ALL"),
        Object(c["a"])(t, "TEAM_PROFIT_RECORD_QUERY", "TEAM_PROFIT_RECORD_QUERY"),
        Object(c["a"])(t, "TEAM_PROFIT_RECORD_DOWNLOAD", "TEAM_PROFIT_RECORD_DOWNLOAD"),
        Object(c["a"])(t, "INFO_NOTIFY_LOG_ALL", "INFO_NOTIFY_LOG_ALL"),
        Object(c["a"])(t, "INFO_NOTIFY_LOG_QUERY", "INFO_NOTIFY_LOG_QUERY"),
        Object(c["a"])(t, "TERMINAL_POS_ALL", "TERMINAL_POS_ALL"),
        Object(c["a"])(t, "TERMINAL_POS_QUERY", "TERMINAL_POS_QUERY"),
        Object(c["a"])(t, "TERMINAL_POS_FLOW_ALL", "TERMINAL_POS_FLOW_ALL"),
        Object(c["a"])(t, "TERMINAL_POS_FLOW_QUERY", "TERMINAL_POS_FLOW_QUERY"),
        Object(c["a"])(t, "TERMINAL_POS_DOWN", "TERMINAL_POS_DOWN"),
        Object(c["a"])(t, "TERMINAL_GENERATE_TRMNO", "TERMINAL_GENERATE_TRMNO"),
        Object(c["a"])(t, "TERMINAL_MODIFY_POSSTATUS", "TERMINAL_MODIFY_POSSTATUS"),
        Object(c["a"])(t, "TERMINAL_REFUND_COMPONENT", "TERMINAL_REFUND_COMPONENT"),
        Object(c["a"])(t, "SYSTEM_AUTH_ALL", "SYSTEM_AUTH_ALL"),
        Object(c["a"])(t, "SYSTEM_AUTH_QUERY", "SYSTEM_AUTH_QUERY"),
        Object(c["a"])(t, "SYSTEM_AUTH_CREATE", "SYSTEM_AUTH_CREATE"),
        Object(c["a"])(t, "SYSTEM_AUTH_UPDATE", "SYSTEM_AUTH_UPDATE"),
        Object(c["a"])(t, "CLOUD_TRUMPET_ALL", "CLOUD_TRUMPET_ALL"),
        Object(c["a"])(t, "CLOUD_TRUMPET_QUERY", "CLOUD_TRUMPET_QUERY"),
        Object(c["a"])(t, "EQT_WITHDRAW_ALL", "EQT_WITHDRAW_ALL"),
        Object(c["a"])(t, "EQT_WITHDRAW_FINANCIAL_DOWNLOAD", "EQT_WITHDRAW_FINANCIAL_DOWNLOAD"),
        Object(c["a"])(t, "EQT_WITHDRAW_QUERY", "EQT_WITHDRAW_QUERY"),
        Object(c["a"])(t, "EQT_WITHDRAW_CASH_AMOUNT", "EQT_WITHDRAW_CASH_AMOUNT"),
        Object(c["a"])(t, "EQT_WITHDRAW_DOWNLOAD", "EQT_WITHDRAW_DOWNLOAD"),
        Object(c["a"])(t, "EQT_WALLET_ALL", "EQT_WALLET_ALL"),
        Object(c["a"])(t, "EQT_WALLET_QUERY", "EQT_WALLET_QUERY"),
        Object(c["a"])(t, "EQT_BANK_CARD_ALL", "EQT_BANK_CARD_ALL"),
        Object(c["a"])(t, "EQT_BANK_CARD_QUERY", "EQT_BANK_CARD_QUERY"),
        Object(c["a"])(t, "AGENCY_PROFIT_ALL", "AGENCY_PROFIT_ALL"),
        Object(c["a"])(t, "AGENCY_PROFIT_QUERY", "AGENCY_PROFIT_QUERY"),
        Object(c["a"])(t, "AGENCY_PROFIT_COUNT", "AGENCY_PROFIT_COUNT"),
        Object(c["a"])(t, "AGENCY_PROFIT_DOWNLOAD", "AGENCY_PROFIT_DOWNLOAD"),
        Object(c["a"])(t, "ACCOUNT_PROFIT_AMT_FREEZE", "ACCOUNT_PROFIT_AMT_FREEZE"),
        Object(c["a"])(t, "ACCOUNT_PROFIT_AMT_UNFREEZE", "ACCOUNT_PROFIT_AMT_UNFREEZE"),
        Object(c["a"])(t, "AGENCY_ACT_LABEL", "AGENCY_ACT_LABEL"),
        Object(c["a"])(t, "WITHDRAW_UPDATE_STATUS", "WITHDRAW_UPDATE_STATUS"),
        Object(c["a"])(t, "AGENCY_RECOMMEND_ADMIN_EDIT_BELONG", "AGENCY_RECOMMEND_ADMIN_EDIT_BELONG"),
        Object(c["a"])(t, "TERMINAL_CONFIG_ALL", "TERMINAL_CONFIG_ALL"),
        Object(c["a"])(t, "TERMINAL_CONFIG_QUERY", "TERMINAL_CONFIG_QUERY"),
        Object(c["a"])(t, "TERMINAL_CONFIG_SAVE_OR_UPDATE", "TERMINAL_CONFIG_SAVE_OR_UPDATE"),
        Object(c["a"])(t, "USER_CLOSE_LOGIN", "USER_CLOSE_LOGIN"),
        Object(c["a"])(t, "USER_OPEN_LOGIN", "USER_OPEN_LOGIN"),
        Object(c["a"])(t, "ACCOUNT_NEGATIVE_QUERY", "ACCOUNT_NEGATIVE_QUERY"),
        Object(c["a"])(t, "ACCOUNT_NEGATIVE_COUNT", "ACCOUNT_NEGATIVE_COUNT"),
        Object(c["a"])(t, "ACCOUNT_NEGATIVE_DOWNLOAD", "ACCOUNT_NEGATIVE_DOWNLOAD"),
        Object(c["a"])(t, "USER_MEMBER_ROLE_QUERY", "USER_MEMBER_ROLE_QUERY"),
        Object(c["a"])(t, "UPDATE_EQT_BEFORE_BALANCE", "UPDATE_EQT_BEFORE_BALANCE"),
        Object(c["a"])(t, "AGENCY_TEAM_UPDATE_STATUS", "AGENCY_TEAM_UPDATE_STATUS"),
        Object(c["a"])(t, "ENABLE_CREATE_TEAM", "ENABLE_CREATE_TEAM"),
        Object(c["a"])(t, "EQT", "EQT"),
        Object(c["a"])(t, "AGENCY_RECOMMEND_ADMIN_BUSINESS_UPDATE", "AGENCY_RECOMMEND_ADMIN_BUSINESS_UPDATE"),
        Object(c["a"])(t, "EXTERNAL_ACTIVITY_ALL", "EXTERNAL_ACTIVITY_ALL"),
        Object(c["a"])(t, "EXTERNAL_ACTIVITY_QUERY", "EXTERNAL_ACTIVITY_QUERY"),
        Object(c["a"])(t, "EXTERNAL_ACTIVITY_CREATE", "EXTERNAL_ACTIVITY_CREATE"),
        Object(c["a"])(t, "EXTERNAL_ACTIVITY_UPDATE", "EXTERNAL_ACTIVITY_UPDATE"),
        Object(c["a"])(t, "AGENCY_UPDATE_SETTLE_BEFORE_DAY", "AGENCY_UPDATE_SETTLE_BEFORE_DAY"),
        Object(c["a"])(t, "MERCHANT_TERMINAL_SYNC_YSF_INFO", "MERCHANT_TERMINAL_SYNC_YSF_INFO"),
        Object(c["a"])(t, "MERCHANT_QRCODE_SYNC_YSF_INFO", "MERCHANT_QRCODE_SYNC_YSF_INFO"),
        Object(c["a"])(t, "MARKETING_ALL", "MARKETING_ALL"),
        Object(c["a"])(t, "MARKETING_QUERY", "MARKETING_QUERY"),
        Object(c["a"])(t, "MARKETING_REVIEW_QUERY", "MARKETING_REVIEW_QUERY"),
        Object(c["a"])(t, "MARKETING_REVIEW_CREATE", "MARKETING_REVIEW_CREATE"),
        Object(c["a"])(t, "MARKETING_REVIEW_REVIEW", "MARKETING_REVIEW_REVIEW"),
        Object(c["a"])(t, "MARKETING_RULE_ALL", "MARKETING_RULE_ALL"),
        Object(c["a"])(t, "MARKETING_RULE_QUERY", "MARKETING_RULE_QUERY"),
        Object(c["a"])(t, "MARKETING_RULE_CREATE", "MARKETING_RULE_CREATE"),
        Object(c["a"])(t, "MARKETING_RULE_REVIEW_QUERY", "MARKETING_RULE_REVIEW_QUERY"),
        Object(c["a"])(t, "MARKETING_RULE_REVIEW_REVIEW", "MARKETING_RULE_REVIEW_REVIEW"),
        Object(c["a"])(t, "MARKETING_PARTICIPANT_ALL", "MARKETING_PARTICIPANT_ALL"),
        Object(c["a"])(t, "MARKETING_PARTICIPANT_QUERY", "MARKETING_PARTICIPANT_QUERY"),
        Object(c["a"])(t, "MARKETING_PARTICIPANT_CREATE", "MARKETING_PARTICIPANT_CREATE"),
        Object(c["a"])(t, "MARKETING_PARTICIPANT_UPDATE", "MARKETING_PARTICIPANT_UPDATE"),
        Object(c["a"])(t, "MARKETING_PARTICIPANT_INVALID", "MARKETING_PARTICIPANT_INVALID"),
        Object(c["a"])(t, "TERMINAL_REBATE_REWARD_ALL", "TERMINAL_REBATE_REWARD_ALL"),
        Object(c["a"])(t, "TERMINAL_REBATE_REWARD_QUERY", "TERMINAL_REBATE_REWARD_QUERY"),
        Object(c["a"])(t, "MARKETING_RISK_ALL", "MARKETING_RISK_ALL"),
        Object(c["a"])(t, "MARKETING_RISK_QUERY", "MARKETING_RISK_QUERY"),
        Object(c["a"])(t, "MARKETING_SETTLE_ALL", "MARKETING_SETTLE_ALL"),
        Object(c["a"])(t, "MARKETING_SETTLE_QUERY", "MARKETING_SETTLE_QUERY"),
        Object(c["a"])(t, "MARKETING_RISK_CREATE", "MARKETING_RISK_CREATE"),
        Object(c["a"])(t, "MARKETING_RISK_INVALID", "MARKETING_RISK_INVALID"),
        Object(c["a"])(t, "INCREASED_REVENUE_SERIAL_ALL", "INCREASED_REVENUE_SERIAL_ALL"),
        Object(c["a"])(t, "INCREASED_REVENUE_SERIAL_QUERY", "INCREASED_REVENUE_SERIAL_QUERY"),
        Object(c["a"])(t, "INCREASED_REVENUE_SERIAL_DOWNLOAD", "INCREASED_REVENUE_SERIAL_DOWNLOAD"),
        Object(c["a"])(t, "INCREASED_REVENUE_REPORT_QUERY", "INCREASED_REVENUE_REPORT_QUERY"),
        Object(c["a"])(t, "INCREASED_REVENUE_REPORT_DOWNLOAD", "INCREASED_REVENUE_REPORT_DOWNLOAD"),
        t), i = (n = {},
        Object(c["a"])(n, r.BRANCH_OFFICE_ALL, {
            value: "BRANCH_OFFICE_ALL",
            describe: "分公司-ALL",
            resource: _.BRANCH_OFFICE
        }),
        Object(c["a"])(n, r.BRANCH_OFFICE_QUERY, {
            value: "BRANCH_OFFICE_QUERY",
            describe: "分公司查询",
            resource: _.BRANCH_OFFICE
        }),
        Object(c["a"])(n, r.BRANCH_OFFICE_CREATE, {
            value: "BRANCH_OFFICE_CREATE",
            describe: "分公司新增",
            resource: _.BRANCH_OFFICE
        }),
        Object(c["a"])(n, r.BRANCH_OFFICE_UPDATE, {
            value: "BRANCH_OFFICE_UPDATE",
            describe: "分公司修改",
            resource: _.BRANCH_OFFICE
        }),
        Object(c["a"])(n, r.BRANCH_OFFICE_DELETE, {
            value: "BRANCH_OFFICE_DELETE",
            describe: "分公司删除",
            resource: _.BRANCH_OFFICE
        }),
        Object(c["a"])(n, r.BRANCH_OFFICE_BUSINESS_ALL, {
            value: "BRANCH_OFFICE_BUSINESS_ALL",
            describe: "分公司费率信息-ALL",
            resource: _.BRANCH_OFFICE_BUSINESS
        }),
        Object(c["a"])(n, r.BRANCH_OFFICE_BUSINESS_QUERY, {
            value: "BRANCH_OFFICE_BUSINESS_QUERY",
            describe: "分公司费率信息-查询",
            resource: _.BRANCH_OFFICE_BUSINESS
        }),
        Object(c["a"])(n, r.BRANCH_OFFICE_BUSINESS_CREATE, {
            value: "BRANCH_OFFICE_BUSINESS_CREATE",
            describe: "分公司费率信息-新增",
            resource: _.BRANCH_OFFICE_BUSINESS
        }),
        Object(c["a"])(n, r.BRANCH_OFFICE_BUSINESS_UPDATE, {
            value: "BRANCH_OFFICE_BUSINESS_UPDATE",
            describe: "分公司费率信息-更新",
            resource: _.BRANCH_OFFICE_BUSINESS
        }),
        Object(c["a"])(n, r.BRANCH_OFFICE_BUSINESS_DELETE, {
            value: "BRANCH_OFFICE_BUSINESS_DELETE",
            describe: "分公司费率信息-删除",
            resource: _.BRANCH_OFFICE_BUSINESS
        }),
        Object(c["a"])(n, r.BRANCH_OFFICE_BUSINESS_REVIEW_ALL, {
            value: "BRANCH_OFFICE_BUSINESS_REVIEW_ALL",
            describe: "分公司费率审核-ALL",
            resource: _.BRANCH_OFFICE_BUSINESS_REVIEW
        }),
        Object(c["a"])(n, r.BRANCH_OFFICE_BUSINESS_REVIEW_QUERY, {
            value: "BRANCH_OFFICE_BUSINESS_REVIEW_QUERY",
            describe: "分公司费率审核-查询",
            resource: _.BRANCH_OFFICE_BUSINESS_REVIEW
        }),
        Object(c["a"])(n, r.BRANCH_OFFICE_BUSINESS_REVIEW_REVIEW, {
            value: "BRANCH_OFFICE_BUSINESS_REVIEW_REVIEW",
            describe: "分公司费率审核-审核",
            resource: _.BRANCH_OFFICE_BUSINESS_REVIEW
        }),
        Object(c["a"])(n, r.AGENCY_ALL, {
            value: "AGENCY_ALL",
            describe: "服务商-ALL",
            resource: _.AGENCY
        }),
        Object(c["a"])(n, r.AGENCY_QUERY, {
            value: "AGENCY_QUERY",
            describe: "服务商-查询",
            resource: _.AGENCY
        }),
        Object(c["a"])(n, r.AGENCY_CREATE, {
            value: "AGENCY_CREATE",
            describe: "服务商-新增",
            resource: _.AGENCY
        }),
        Object(c["a"])(n, r.AGENCY_UPDATE, {
            value: "AGENCY_UPDATE",
            describe: "服务商-更新",
            resource: _.AGENCY
        }),
        Object(c["a"])(n, r.AGENCY_OPEN_PAY_PERMISSION, {
            value: "AGENCY_OPEN_PAY_PERMISSION",
            describe: "服务商-开通代付权限",
            resource: _.AGENCY
        }),
        Object(c["a"])(n, r.AGENCY_UPDATE_SETTLEWAY, {
            value: "AGENCY_UPDATE_SETTLEWAY",
            describe: "服务商-修改结算周期",
            resource: _.AGENCY
        }),
        Object(c["a"])(n, r.AGENCY_UPDATE_SETTLE_BEFORE_DAY, {
            value: "AGENCY_UPDATE_SETTLE_BEFORE_DAY",
            describe: "服务商-修改清算周期",
            resource: _.AGENCY
        }),
        Object(c["a"])(n, r.AGENCY_UPDATE_SUB_ORG, {
            value: "AGENCY_UPDATE_SUB_ORG",
            describe: "服务商-切换机构",
            resource: _.AGENCY
        }),
        Object(c["a"])(n, r.AGENCY_PATCH_BRANCH_OFFICE, {
            value: "AGENCY_PATCH_BRANCH_OFFICE",
            describe: "服务商-切换所属分公司",
            resource: _.AGENCY
        }),
        Object(c["a"])(n, r.AGENCY_PATCH_PARENT_ID, {
            value: "AGENCY_PATCH_PARENT_ID",
            describe: "服务商-切换所属上级服务商",
            resource: _.AGENCY
        }),
        Object(c["a"])(n, r.AGENCY_ENABLE_MERCHANT_IN, {
            value: "AGENCY_ENABLE_MERCHANT_IN",
            describe: "服务商-进件权限开关",
            resource: _.AGENCY
        }),
        Object(c["a"])(n, r.AGENCY_OPEN_EQT_WALLET, {
            value: "AGENCY_OPEN_EQT_WALLET",
            describe: "服务商-灵活用工设置",
            resource: _.AGENCY
        }),
        Object(c["a"])(n, r.AGENCY_ACT_LABEL, {
            value: "AGENCY_ACT_LABEL",
            describe: "服务商-冬日暖阳设置",
            resource: _.AGENCY
        }),
        Object(c["a"])(n, r.EQT, {
            value: "EQT",
            describe: "服务商-修改灵工提现手续费",
            resource: _.AGENCY
        }),
        Object(c["a"])(n, r.AGENCY_REVIEW_ALL, {
            value: "AGENCY_REVIEW_ALL",
            describe: "服务商审核-ALL",
            resource: _.AGENCY_REVIEW
        }),
        Object(c["a"])(n, r.AGENCY_DOWNLOAD_EXCEL, {
            value: "AGENCY_DOWNLOAD_EXCEL",
            describe: "服务商信息-导出"
        }),
        Object(c["a"])(n, r.AGENCY_REVIEW_QUERY, {
            value: "AGENCY_REVIEW_QUERY",
            describe: "服务商审核息查询",
            resource: _.AGENCY_REVIEW
        }),
        Object(c["a"])(n, r.AGENCY_REVIEW_REVIEW, {
            value: "AGENCY_REVIEW_REVIEW",
            describe: "服务商审核",
            resource: _.AGENCY_REVIEW
        }),
        Object(c["a"])(n, r.AGENCY_BUSINESS_ALL, {
            value: "AGENCY_BUSINESS_ALL",
            describe: "服务商费率信息-ALL",
            resource: _.AGENCY_BUSINESS
        }),
        Object(c["a"])(n, r.AGENCY_BUSINESS_QUERY, {
            value: "AGENCY_BUSINESS_QUERY",
            describe: "服务商费率信息-查询",
            resource: _.AGENCY_BUSINESS
        }),
        Object(c["a"])(n, r.AGENCY_BUSINESS_CREATE, {
            value: "AGENCY_BUSINESS_CREATE",
            describe: "服务商费率信息-新增",
            resource: _.AGENCY_BUSINESS
        }),
        Object(c["a"])(n, r.AGENCY_BUSINESS_UPDATE, {
            value: "AGENCY_BUSINESS_UPDATE",
            describe: "服务商费率信息-更新",
            resource: _.AGENCY_BUSINESS
        }),
        Object(c["a"])(n, r.AGENCY_BUSINESS_DELETE, {
            value: "AGENCY_BUSINESS_DELETE",
            describe: "服务商费率信息-删除",
            resource: _.AGENCY_BUSINESS
        }),
        Object(c["a"])(n, r.AGENCY_BUSINESS_REVIEW_ALL, {
            value: "AGENCY_BUSINESS_REVIEW_ALL",
            describe: "服务商费率审核-ALL",
            resource: _.AGENCY_BUSINESS_REVIEW
        }),
        Object(c["a"])(n, r.AGENCY_BUSINESS_REVIEW_QUERY, {
            value: "AGENCY_BUSINESS_REVIEW_QUERY",
            describe: "服务商费率审核-查询",
            resource: _.AGENCY_BUSINESS_REVIEW
        }),
        Object(c["a"])(n, r.AGENCY_BUSINESS_REVIEW_REVIEW, {
            value: "AGENCY_BUSINESS_REVIEW_REVIEW",
            describe: "服务商费率审核-审核",
            resource: _.AGENCY_BUSINESS_REVIEW
        }),
        Object(c["a"])(n, r.AGENCY_ACTIVITY_ALL, {
            value: "AGENCY_ACTIVITY_ALL",
            describe: "服务商活动-ALL",
            resource: _.AGENCY_ACTIVITY
        }),
        Object(c["a"])(n, r.AGENCY_ACTIVITY_QUERY, {
            value: "AGENCY_ACTIVITY_QUERY",
            describe: "服务商活动-查询",
            resource: _.AGENCY_ACTIVITY
        }),
        Object(c["a"])(n, r.AGENCY_ACTIVITY_CREATE, {
            value: "AGENCY_ACTIVITY_CREATE",
            describe: "服务商活动-新增",
            resource: _.AGENCY_ACTIVITY
        }),
        Object(c["a"])(n, r.AGENCY_ACTIVITY_UPDATE, {
            value: "AGENCY_ACTIVITY_UPDATE",
            describe: "服务商活动-更新",
            resource: _.AGENCY_ACTIVITY
        }),
        Object(c["a"])(n, r.AGENCY_ACTIVITY_REVIEW_ALL, {
            value: "AGENCY_ACTIVITY_REVIEW_ALL",
            describe: "服务商活动审核-ALL",
            resource: _.AGENCY_ACTIVITY_REVIEW
        }),
        Object(c["a"])(n, r.AGENCY_ACTIVITY_REVIEW_QUERY, {
            value: "AGENCY_ACTIVITY_REVIEW_QUERY",
            describe: "服务商活动审核-查询",
            resource: _.AGENCY_ACTIVITY_REVIEW
        }),
        Object(c["a"])(n, r.AGENCY_ACTIVITY_REVIEW_REVIEW, {
            value: "AGENCY_ACTIVITY_REVIEW_REVIEW",
            describe: "服务商活动审核-审核",
            resource: _.AGENCY_ACTIVITY_REVIEW
        }),
        Object(c["a"])(n, r.AGENCY_TEAM_ALL, {
            value: "AGENCY_TEAM_ALL",
            describe: "团队管理-ALL",
            resource: _.AGENCY_TEAM
        }),
        Object(c["a"])(n, r.AGENCY_TEAM_QUERY, {
            value: "AGENCY_TEAM_QUERY",
            describe: "团队管理-查询",
            resource: _.AGENCY_TEAM
        }),
        Object(c["a"])(n, r.AGENCY_TEAM_CREATE, {
            value: "AGENCY_TEAM_CREATE",
            describe: "团队管理-新增",
            resource: _.AGENCY_TEAM
        }),
        Object(c["a"])(n, r.AGENCY_TEAM_UPDATE, {
            value: "AGENCY_TEAM_UPDATE",
            describe: "团队管理-更新",
            resource: _.AGENCY_TEAM
        }),
        Object(c["a"])(n, r.AGENCY_TEAM_DOWNLOAD, {
            value: "AGENCY_TEAM_DOWNLOAD",
            describe: "团队管理-下载",
            resource: _.AGENCY_TEAM
        }),
        Object(c["a"])(n, r.AGENCY_TEAM_UPDATE_STATUS, {
            value: "AGENCY_TEAM_UPDATE_STATUS",
            describe: "团队管理-设置团队状态",
            resource: _.AGENCY_TEAM
        }),
        Object(c["a"])(n, r.AGENCY_TEAM_BUSINESS_ALL, {
            value: "AGENCY_TEAM_BUSINESS_ALL",
            describe: "团队费率信息-ALL",
            resource: _.AGENCY_TEAM_BUSINESS
        }),
        Object(c["a"])(n, r.AGENCY_TEAM_BUSINESS_QUERY, {
            value: "AGENCY_TEAM_BUSINESS_QUERY",
            describe: "团队费率信息-查询",
            resource: _.AGENCY_TEAM_BUSINESS
        }),
        Object(c["a"])(n, r.AGENCY_TEAM_BUSINESS_CREATE, {
            value: "AGENCY_TEAM_BUSINESS_CREATE",
            describe: "团队费率信息-新增",
            resource: _.AGENCY_TEAM_BUSINESS
        }),
        Object(c["a"])(n, r.AGENCY_TEAM_BUSINESS_UPDATE, {
            value: "AGENCY_TEAM_BUSINESS_UPDATE",
            describe: "团队费率信息-修改",
            resource: _.AGENCY_TEAM_BUSINESS
        }),
        Object(c["a"])(n, r.AGENCY_TEAM_BUSINESS_DELETE, {
            value: "AGENCY_TEAM_BUSINESS_DELETE",
            describe: "团队费率信息-删除",
            resource: _.AGENCY_TEAM_BUSINESS
        }),
        Object(c["a"])(n, r.AGENCY_TEAM_BUSINESS_REVIEW_ALL, {
            value: "AGENCY_TEAM_BUSINESS_REVIEW_ALL",
            describe: "团队费率信息审核-ALL",
            resource: _.AGENCY_TEAM_BUSINESS_REVIEW
        }),
        Object(c["a"])(n, r.AGENCY_TEAM_BUSINESS_REVIEW_QUERY, {
            value: "AGENCY_TEAM_BUSINESS_REVIEW_QUERY",
            describe: "团队费率信息审核-查询",
            resource: _.AGENCY_TEAM_BUSINESS_REVIEW
        }),
        Object(c["a"])(n, r.AGENCY_TEAM_BUSINESS_REVIEW_REVIEW, {
            value: "AGENCY_TEAM_BUSINESS_REVIEW_REVIEW",
            describe: "团队费率信息审核-审核",
            resource: _.AGENCY_TEAM_BUSINESS_REVIEW
        }),
        Object(c["a"])(n, r.AGENCY_TEAM_MEMBER_ALL, {
            value: "AGENCY_TEAM_MEMBER_ALL",
            describe: "团队成员-ALL",
            resource: _.AGENCY_TEAM_MEMBER
        }),
        Object(c["a"])(n, r.AGENCY_TEAM_MEMBER_QUERY, {
            value: "AGENCY_TEAM_MEMBER_QUERY",
            describe: "团队成员-查询",
            resource: _.AGENCY_TEAM_MEMBER
        }),
        Object(c["a"])(n, r.AGENCY_TEAM_MEMBER_CREATE, {
            value: "AGENCY_TEAM_MEMBER_CREATE",
            describe: "团队成员-新增",
            resource: _.AGENCY_TEAM_MEMBER
        }),
        Object(c["a"])(n, r.AGENCY_TEAM_MEMBER_UPDATE, {
            value: "AGENCY_TEAM_MEMBER_UPDATE",
            describe: "团队成员-更新",
            resource: _.AGENCY_TEAM_MEMBER
        }),
        Object(c["a"])(n, r.MEMBER_CHANGE_TEAM, {
            value: "MEMBER_CHANGE_TEAM",
            describe: "团队成员-变更",
            resource: _.AGENCY_TEAM_MEMBER
        }),
        Object(c["a"])(n, r.AGENCY_TEAM_MEMBER_REMOVE, {
            value: "AGENCY_TEAM_MEMBER_REMOVE",
            describe: "团队成员-删除",
            resource: _.AGENCY_TEAM_MEMBER
        }),
        Object(c["a"])(n, r.AGENCY_TEAM_MEMBER_BUSINESS_ALL, {
            value: "AGENCY_TEAM_MEMBER_BUSINESS_ALL",
            describe: "团队成员费率信息-ALL",
            resource: _.AGENCY_TEAM_MEMBER_BUSINESS
        }),
        Object(c["a"])(n, r.AGENCY_TEAM_MEMBER_BUSINESS_QUERY, {
            value: "AGENCY_TEAM_MEMBER_BUSINESS_QUERY",
            describe: "团队成员费率信息-查询",
            resource: _.AGENCY_TEAM_MEMBER_BUSINESS
        }),
        Object(c["a"])(n, r.AGENCY_TEAM_MEMBER_BUSINESS_CREATE, {
            value: "AGENCY_TEAM_MEMBER_BUSINESS_CREATE",
            describe: "团队成员费率信息-新增",
            resource: _.AGENCY_TEAM_MEMBER_BUSINESS
        }),
        Object(c["a"])(n, r.AGENCY_TEAM_MEMBER_BUSINESS_UPDATE, {
            value: "AGENCY_TEAM_MEMBER_BUSINESS_UPDATE",
            describe: "团队成员费率信息-修改",
            resource: _.AGENCY_TEAM_MEMBER_BUSINESS
        }),
        Object(c["a"])(n, r.AGENCY_TEAM_MEMBER_BUSINESS_DELETE, {
            value: "AGENCY_TEAM_MEMBER_BUSINESS_DELETE",
            describe: "团队成员费率信息-删除",
            resource: _.AGENCY_TEAM_MEMBER_BUSINESS
        }),
        Object(c["a"])(n, r.AGENCY_TEAM_MEMBER_BUSINESS_REVIEW_ALL, {
            value: "AGENCY_TEAM_MEMBER_BUSINESS_REVIEW_ALL",
            describe: "团队成员费率信息审核-ALL",
            resource: _.AGENCY_TEAM_MEMBER_BUSINESS_REVIEW
        }),
        Object(c["a"])(n, r.AGENCY_TEAM_MEMBER_BUSINESS_REVIEW_QUERY, {
            value: "AGENCY_TEAM_MEMBER_BUSINESS_REVIEW_QUERY",
            describe: "团队成员费率信息审核-查询",
            resource: _.AGENCY_TEAM_MEMBER_BUSINESS_REVIEW
        }),
        Object(c["a"])(n, r.AGENCY_TEAM_MEMBER_BUSINESS_REVIEW_REVIEW, {
            value: "AGENCY_TEAM_MEMBER_BUSINESS_REVIEW_REVIEW",
            describe: "团队成员费率信息审核-审核",
            resource: _.AGENCY_TEAM_MEMBER_BUSINESS_REVIEW
        }),
        Object(c["a"])(n, r.AGENCY_TEAM_MEMBER_MODIFY_ALL, {
            value: "AGENCY_TEAM_MEMBER_MODIFY_ALL",
            describe: "商户变更管理-ALL",
            resource: _.AGENCY_TEAM_MEMBER_MODIFY
        }),
        Object(c["a"])(n, r.AGENCY_TEAM_MEMBER_MODIFY_QUERY, {
            value: "AGENCY_TEAM_MEMBER_MODIFY_QUERY",
            describe: "商户变更管理-查询",
            resource: _.AGENCY_TEAM_MEMBER_MODIFY
        }),
        Object(c["a"])(n, r.AGENCY_TEAM_MEMBER_MODIFY_UPDATE, {
            value: "AGENCY_TEAM_MEMBER_MODIFY_UPDATE",
            describe: "商户变更管理-修改",
            resource: _.AGENCY_TEAM_MEMBER_MODIFY
        }),
        Object(c["a"])(n, r.MERCHANT_QRCODE_ALL, {
            value: "MERCHANT_QRCODE_ALL",
            describe: "立牌商户-ALL",
            resource: _.MERCHANT_QRCODE
        }),
        Object(c["a"])(n, r.MERCHANT_QRCODE_QUERY, {
            value: "MERCHANT_QRCODE_QUERY",
            describe: "立牌商户-查询",
            resource: _.MERCHANT_QRCODE
        }),
        Object(c["a"])(n, r.MERCHANT_QRCODE_DOWNLOAD, {
            value: "MERCHANT_QRCODE_DOWNLOAD",
            describe: "立牌商户-导出",
            resource: _.MERCHANT_QRCODE
        }),
        Object(c["a"])(n, r.MERCHANT_QRCODE_SYNC_YSF_INFO, {
            value: "MERCHANT_QRCODE_SYNC_YSF_INFO",
            describe: "立牌商户-同步资料",
            resource: _.MERCHANT_QRCODE
        }),
        Object(c["a"])(n, r.MERCHANT_QRCODE_REVIEW_ALL, {
            value: "MERCHANT_QRCODE_REVIEW_ALL",
            describe: "立牌商户审核-ALL",
            resource: _.MERCHANT_QRCODE_REVIEW
        }),
        Object(c["a"])(n, r.MERCHANT_QRCODE_REVIEW_QUERY, {
            value: "MERCHANT_QRCODE_REVIEW_QUERY",
            describe: "立牌商户审核-查询",
            resource: _.MERCHANT_QRCODE_REVIEW
        }),
        Object(c["a"])(n, r.MERCHANT_QRCODE_REVIEW_REVIEW, {
            value: "MERCHANT_QRCODE_REVIEW_REVIEW",
            describe: "立牌商户审核-审核",
            resource: _.MERCHANT_QRCODE_REVIEW
        }),
        Object(c["a"])(n, r.MERCHANT_TERMINAL_ALL, {
            value: "MERCHANT_TERMINAL_ALL",
            describe: "终端商户-ALL",
            resource: _.MERCHANT_TERMINAL
        }),
        Object(c["a"])(n, r.MERCHANT_TERMINAL_QUERY, {
            value: "MERCHANT_TERMINAL_QUERY",
            describe: "终端商户-查询",
            resource: _.MERCHANT_TERMINAL
        }),
        Object(c["a"])(n, r.MERCHANT_TERMINAL_DOWNLOAD, {
            value: "MERCHANT_TERMINAL_DOWNLOAD",
            describe: "终端商户-导出",
            resource: _.MERCHANT_TERMINAL
        }),
        Object(c["a"])(n, r.MERCHANT_TERMINAL_SYNC_YSF_INFO, {
            value: "MERCHANT_TERMINAL_SYNC_YSF_INFO",
            describe: "终端商户-同步资料",
            resource: _.MERCHANT_TERMINAL
        }),
        Object(c["a"])(n, r.MERCHANT_TERMINAL_REVIEW_ALL, {
            value: "MERCHANT_TERMINAL_REVIEW_ALL",
            describe: "终端商户审核-ALL",
            resource: _.MERCHANT_TERMINAL_REVIEW
        }),
        Object(c["a"])(n, r.MERCHANT_TERMINAL_REVIEW_QUERY, {
            value: "MERCHANT_TERMINAL_REVIEW_QUERY",
            describe: "终端商户审核-查询",
            resource: _.MERCHANT_TERMINAL_REVIEW
        }),
        Object(c["a"])(n, r.MERCHANT_TERMINAL_REVIEW_REVIEW, {
            value: "MERCHANT_TERMINAL_REVIEW_REVIEW",
            describe: "终端商户审核-审核",
            resource: _.MERCHANT_TERMINAL_REVIEW
        }),
        Object(c["a"])(n, r.MERCHANT_TERMINAL_DECRYPT_NAME, {
            value: "MERCHANT_TERMINAL_DECRYPT_NAME",
            describe: "终端商户-名称解密",
            resource: _.MERCHANT_TERMINAL
        }),
        Object(c["a"])(n, r.PAY_RECORD_ALL, {
            value: "PAY_RECORD_ALL",
            describe: "交易信息-ALL",
            resource: _.PAY_RECORD
        }),
        Object(c["a"])(n, r.PAY_RECORD_QUERY, {
            value: "PAY_RECORD_QUERY",
            describe: "交易信息-查询",
            resource: _.PAY_RECORD
        }),
        Object(c["a"])(n, r.PAY_RECORD_SUM, {
            value: "PAY_RECORD_SUM",
            describe: "交易信息-汇总"
        }),
        Object(c["a"])(n, r.PAY_RECORD_DOWNLOAD, {
            value: "PAY_RECORD_DOWNLOAD",
            describe: "交易信息-下载"
        }),
        Object(c["a"])(n, r.AGENCY_BIND_PROFIT_RULE_ALL, {
            value: "AGENCY_BIND_PROFIT_RULE_ALL",
            describe: "服务商绑定分润规则信息-ALL",
            resource: _.AGENCY_BIND_PROFIT_RULE
        }),
        Object(c["a"])(n, r.AGENCY_BIND_PROFIT_RULE_QUERY, {
            value: "AGENCY_BIND_PROFIT_RULE_QUERY",
            describe: "服务商绑定分润规则信息-查询",
            resource: _.AGENCY_BIND_PROFIT_RULE
        }),
        Object(c["a"])(n, r.AGENCY_BIND_PROFIT_RULE_CREATE, {
            value: "AGENCY_BIND_PROFIT_RULE_CREATE",
            describe: "服务商绑定分润规则信息-创建",
            resource: _.AGENCY_BIND_PROFIT_RULE
        }),
        Object(c["a"])(n, r.AGENCY_BIND_PROFIT_RULE_UPDATE, {
            value: "AGENCY_BIND_PROFIT_RULE_UPDATE",
            describe: "服务商绑定分润规则信息-更新",
            resource: _.AGENCY_BIND_PROFIT_RULE
        }),
        Object(c["a"])(n, r.AGENCY_BIND_PROFIT_RULE_EXCEL_UPLOAD, {
            value: "AGENCY_BIND_PROFIT_RULE_EXCEL_UPLOAD",
            describe: "服务商绑定分润规则信息-批量导入",
            resource: _.AGENCY_BIND_PROFIT_RULE
        }),
        Object(c["a"])(n, r.AGENCY_BIND_PROFIT_RULE_TEMPLATE_DOWNLOAD, {
            value: "AGENCY_BIND_PROFIT_RULE_TEMPLATE_DOWNLOAD",
            describe: "服务商绑定分润规则信息-模板下载",
            resource: _.AGENCY_BIND_PROFIT_RULE
        }),
        Object(c["a"])(n, r.AGENCY_BIND_PROFIT_RULE_REVIEW_ALL, {
            value: "AGENCY_BIND_PROFIT_RULE_REVIEW_ALL",
            describe: "服务商绑定分润规则审核信息-ALL",
            resource: _.AGENCY_BIND_PROFIT_RULE_REVIEW
        }),
        Object(c["a"])(n, r.AGENCY_BIND_PROFIT_RULE_REVIEW_QUERY, {
            value: "AGENCY_BIND_PROFIT_RULE_REVIEW_QUERY",
            describe: "服务商绑定分润规则审核信息-查询",
            resource: _.AGENCY_BIND_PROFIT_RULE_REVIEW
        }),
        Object(c["a"])(n, r.AGENCY_BIND_PROFIT_RULE_REVIEW_REVIEW, {
            value: "AGENCY_BIND_PROFIT_RULE_REVIEW_REVIEW",
            describe: "服务商绑定分润规则审核信息-审核",
            resource: _.AGENCY_BIND_PROFIT_RULE_REVIEW
        }),
        Object(c["a"])(n, r.PROFIT_BUSINESS_RULE_GROUP_ALL, {
            value: "PROFIT_BUSINESS_RULE_GROUP_ALL",
            describe: "分润规则-ALL",
            resource: _.PROFIT_BUSINESS_RULE_GROUP
        }),
        Object(c["a"])(n, r.PROFIT_BUSINESS_RULE_GROUP_QUERY, {
            value: "PROFIT_BUSINESS_RULE_GROUP_QUERY",
            describe: "分润规则-查询",
            resource: _.PROFIT_BUSINESS_RULE_GROUP
        }),
        Object(c["a"])(n, r.PROFIT_BUSINESS_RULE_GROUP_CREATE, {
            value: "PROFIT_BUSINESS_RULE_GROUP_CREATE",
            describe: "分润规则-新增",
            resource: _.PROFIT_BUSINESS_RULE_GROUP
        }),
        Object(c["a"])(n, r.PROFIT_BUSINESS_RULE_GROUP_UPDATE, {
            value: "PROFIT_BUSINESS_RULE_GROUP_UPDATE",
            describe: "分润规则-更新",
            resource: _.PROFIT_BUSINESS_RULE_GROUP
        }),
        Object(c["a"])(n, r.PROFIT_BUSINESS_RULE_GROUP_DELETE, {
            value: "PROFIT_BUSINESS_RULE_GROUP_DELETE",
            describe: "分润规则-删除",
            resource: _.PROFIT_BUSINESS_RULE_GROUP
        }),
        Object(c["a"])(n, r.PROFIT_BUSINESS_RULE_GROUP_PATCH_PROFIT_RULE_GROUP_IDS, {
            value: "PROFIT_BUSINESS_RULE_GROUP_PATCH_PROFIT_RULE_GROUP_IDS",
            describe: "分润规则-分润业务规则组修改分润规则组",
            resource: _.PROFIT_BUSINESS_RULE_GROUP
        }),
        Object(c["a"])(n, r.PROFIT_RULE_REVIEW_QUERY, {
            value: "PROFIT_RULE_REVIEW_QUERY",
            describe: "分润规则审核-查询",
            resource: _.PROFIT_RULE_REVIEW
        }),
        Object(c["a"])(n, r.PROFIT_RULE_REVIEW_REVIEW, {
            value: "PROFIT_RULE_REVIEW_REVIEW",
            describe: "分润规则审核-审核",
            resource: _.PROFIT_RULE_REVIEW
        }),
        Object(c["a"])(n, r.PROFIT_RECORD_ALL, {
            value: "PROFIT_RECORD_ALL",
            describe: "分润流水-ALL",
            resource: _.PROFIT_RECORD
        }),
        Object(c["a"])(n, r.PROFIT_RECORD_QUERY, {
            value: "PROFIT_RECORD_QUERY",
            describe: "分润流水-查询",
            resource: _.PROFIT_RECORD
        }),
        Object(c["a"])(n, r.PROFIT_RECORD_COUNT, {
            value: "PROFIT_RECORD_COUNT",
            describe: "分润流水-汇总",
            resource: _.PROFIT_RECORD
        }),
        Object(c["a"])(n, r.PROFIT_RECORD_DOWNLOAD, {
            value: "PROFIT_RECORD_DOWNLOAD",
            describe: "分润流水-下载",
            resource: _.PROFIT_RECORD
        }),
        Object(c["a"])(n, r.PROFIT_RECORD_REVENUE, {
            value: "PROFIT_RECORD_REVENUE",
            describe: "分润流水-收入",
            resource: _.PROFIT_RECORD
        }),
        Object(c["a"])(n, r.NETTING_BALANCE_VISIBLE, {
            value: "NETTING_BALANCE_VISIBLE",
            describe: "分润流水-倒挂信息",
            resource: _.PROFIT_RECORD
        }),
        Object(c["a"])(n, r.ACTIVITY_RULE_ALL, {
            value: "ACTIVITY_RULE_ALL",
            describe: "活动规则-ALL",
            resource: _.ACTIVITY_RULE
        }),
        Object(c["a"])(n, r.ACTIVITY_RULE_QUERY, {
            value: "ACTIVITY_RULE_QUERY",
            describe: "活动规则-查询",
            resource: _.ACTIVITY_RULE
        }),
        Object(c["a"])(n, r.ACTIVITY_RULE_CREATE, {
            value: "ACTIVITY_RULE_CREATE",
            describe: "活动规则-新增",
            resource: _.ACTIVITY_RULE
        }),
        Object(c["a"])(n, r.ACTIVITY_RULE_UPDATE, {
            value: "ACTIVITY_RULE_UPDATE",
            describe: "活动规则-更新",
            resource: _.ACTIVITY_RULE
        }),
        Object(c["a"])(n, r.ACTIVITY_RULE_DELETE, {
            value: "ACTIVITY_RULE_DELETE",
            describe: "活动规则-删除",
            resource: _.ACTIVITY_RULE
        }),
        Object(c["a"])(n, r.ACTIVITY_RULE_REVIEW_ALL, {
            value: "ACTIVITY_RULE_REVIEW_ALL",
            describe: "活动规则审核-ALL",
            resource: _.ACTIVITY_RULE_REVIEW
        }),
        Object(c["a"])(n, r.ACTIVITY_RULE_REVIEW_QUERY, {
            value: "ACTIVITY_RULE_REVIEW_QUERY",
            describe: "活动规则审核-查询",
            resource: _.ACTIVITY_RULE_REVIEW
        }),
        Object(c["a"])(n, r.ACTIVITY_RULE_REVIEW_REVIEW, {
            value: "ACTIVITY_RULE_REVIEW_REVIEW",
            describe: "活动规则审核-审核",
            resource: _.ACTIVITY_RULE_REVIEW
        }),
        Object(c["a"])(n, r.ACTIVITY_REWARD_ALL, {
            value: "ACTIVITY_REWARD_ALL",
            describe: "活动奖励-ALL",
            resource: _.ACTIVITY_REWARD
        }),
        Object(c["a"])(n, r.ACTIVITY_REWARD_QUERY, {
            value: "ACTIVITY_REWARD_QUERY",
            describe: "活动奖励-查询",
            resource: _.ACTIVITY_REWARD
        }),
        Object(c["a"])(n, r.ACTIVITY_REWARD_DOWNLOAD, {
            value: "ACTIVITY_REWARD_DOWNLOAD",
            describe: "活动奖励-导出",
            resource: _.ACTIVITY_REWARD
        }),
        Object(c["a"])(n, r.ACTIVITY_REWARD_APPLY, {
            value: "ACTIVITY_REWARD_APPLY",
            describe: "活动奖励清算申请-清算申请",
            resource: _.ACTIVITY_REWARD
        }),
        Object(c["a"])(n, r.ACTIVITY_REWARD_REVIEW_ALL, {
            value: "ACTIVITY_REWARD_REVIEW_ALL",
            describe: "活动奖励清算审核-ALL",
            resource: _.ACTIVITY_REWARD
        }),
        Object(c["a"])(n, r.ACTIVITY_REWARD_REVIEW_QUERY, {
            value: "ACTIVITY_REWARD_REVIEW_QUERY",
            describe: "活动奖励清算审核-查询",
            resource: _.ACTIVITY_REWARD
        }),
        Object(c["a"])(n, r.ACTIVITY_REWARD_REVIEW_REVIEW, {
            value: "ACTIVITY_REWARD_REVIEW_REVIEW",
            describe: "活动奖励清算审核-审核",
            resource: _.ACTIVITY_REWARD
        }),
        Object(c["a"])(n, r.EXTERNAL_ACTIVITY_ALL, {
            value: "EXTERNAL_ACTIVITY_ALL",
            describe: "前海移联活动规则-ALL",
            resource: _.EXTERNAL_ACTIVITY
        }),
        Object(c["a"])(n, r.EXTERNAL_ACTIVITY_QUERY, {
            value: "EXTERNAL_ACTIVITY_QUERY",
            describe: "前海移联活动规则-查询",
            resource: _.EXTERNAL_ACTIVITY
        }),
        Object(c["a"])(n, r.EXTERNAL_ACTIVITY_CREATE, {
            value: "EXTERNAL_ACTIVITY_CREATE",
            describe: "前海移联活动规则-新增",
            resource: _.EXTERNAL_ACTIVITY
        }),
        Object(c["a"])(n, r.EXTERNAL_ACTIVITY_UPDATE, {
            value: "EXTERNAL_ACTIVITY_UPDATE",
            describe: "前海移联活动规则-编辑",
            resource: _.EXTERNAL_ACTIVITY
        }),
        Object(c["a"])(n, r.MARKETING_ALL, {
            value: "MARKETING_ALL",
            describe: "活动查询(新)-ALL",
            resource: _.ACTIVITY_RULE
        }),
        Object(c["a"])(n, r.MARKETING_QUERY, {
            value: "MARKETING_QUERY",
            describe: "活动查询(新)-查询",
            resource: _.ACTIVITY_RULE
        }),
        Object(c["a"])(n, r.MARKETING_REVIEW_CREATE, {
            value: "MARKETING_REVIEW_CREATE",
            describe: "活动查询(新)-新增/编辑",
            resource: _.ACTIVITY_RULE
        }),
        Object(c["a"])(n, r.MARKETING_REVIEW_QUERY, {
            value: "MARKETING_REVIEW_QUERY",
            describe: "活动审核(新)-查询",
            resource: _.ACTIVITY_RULE
        }),
        Object(c["a"])(n, r.MARKETING_REVIEW_REVIEW, {
            value: "MARKETING_REVIEW_REVIEW",
            describe: "活动审核(新)-审核",
            resource: _.ACTIVITY_RULE
        }),
        Object(c["a"])(n, r.MARKETING_RULE_ALL, {
            value: "MARKETING_RULE_ALL",
            describe: "规则管理(新)-ALL",
            resource: _.ACTIVITY_RULE
        }),
        Object(c["a"])(n, r.MARKETING_RULE_QUERY, {
            value: "MARKETING_RULE_QUERY",
            describe: "规则管理(新)-查询",
            resource: _.ACTIVITY_RULE
        }),
        Object(c["a"])(n, r.MARKETING_RULE_CREATE, {
            value: "MARKETING_RULE_CREATE",
            describe: "规则管理(新)-新增/编辑",
            resource: _.ACTIVITY_RULE
        }),
        Object(c["a"])(n, r.MARKETING_RULE_REVIEW_QUERY, {
            value: "MARKETING_RULE_REVIEW_QUERY",
            describe: "规则审核(新)-查询",
            resource: _.ACTIVITY_RULE
        }),
        Object(c["a"])(n, r.MARKETING_RULE_REVIEW_REVIEW, {
            value: "MARKETING_RULE_REVIEW_REVIEW",
            describe: "规则审核(新)-审核",
            resource: _.ACTIVITY_RULE
        }),
        Object(c["a"])(n, r.MARKETING_PARTICIPANT_ALL, {
            value: "MARKETING_PARTICIPANT_ALL",
            describe: "活动查询(新)-参与对象-ALL",
            resource: _.ACTIVITY_RULE
        }),
        Object(c["a"])(n, r.MARKETING_PARTICIPANT_QUERY, {
            value: "MARKETING_PARTICIPANT_QUERY",
            describe: "活动查询(新)-参与对象-查询",
            resource: _.ACTIVITY_RULE
        }),
        Object(c["a"])(n, r.MARKETING_PARTICIPANT_CREATE, {
            value: "MARKETING_PARTICIPANT_CREATE",
            describe: "活动查询(新)-参与对象-新增",
            resource: _.ACTIVITY_RULE
        }),
        Object(c["a"])(n, r.MARKETING_PARTICIPANT_UPDATE, {
            value: "MARKETING_PARTICIPANT_UPDATE",
            describe: "活动查询(新)-参与对象-编辑",
            resource: _.ACTIVITY_RULE
        }),
        Object(c["a"])(n, r.MARKETING_PARTICIPANT_INVALID, {
            value: "MARKETING_PARTICIPANT_INVALID",
            describe: "活动查询(新)-参与对象-失效",
            resource: _.ACTIVITY_RULE
        }),
        Object(c["a"])(n, r.MARKETING_RISK_CREATE, {
            value: "MARKETING_RISK_CREATE",
            describe: "活动查询(新)-风控对象-新增",
            resource: _.ACTIVITY_RULE
        }),
        Object(c["a"])(n, r.MARKETING_RISK_INVALID, {
            value: "MARKETING_RISK_INVALID",
            describe: "活动查询(新)-风控对象-失效",
            resource: _.ACTIVITY_RULE
        }),
        Object(c["a"])(n, r.MARKETING_RISK_ALL, {
            value: "MARKETING_RISK_ALL",
            describe: "风控对象查询-ALL",
            resource: _.ACTIVITY_RULE
        }),
        Object(c["a"])(n, r.MARKETING_RISK_QUERY, {
            value: "MARKETING_RISK_QUERY",
            describe: "风控对象查询-查询",
            resource: _.ACTIVITY_RULE
        }),
        Object(c["a"])(n, r.MARKETING_SETTLE_ALL, {
            value: "MARKETING_SETTLE_ALL",
            describe: "活动奖励(新)-ALL",
            resource: _.ACTIVITY_RULE
        }),
        Object(c["a"])(n, r.MARKETING_SETTLE_QUERY, {
            value: "MARKETING_SETTLE_QUERY",
            describe: "活动奖励(新)-查询",
            resource: _.ACTIVITY_RULE
        }),
        Object(c["a"])(n, r.TERMINAL_CONFIG_ALL, {
            value: "TERMINAL_CONFIG_ALL",
            describe: "终端类型-ALL",
            resource: _.TERMINAL_CONFIG
        }),
        Object(c["a"])(n, r.TERMINAL_CONFIG_SAVE_OR_UPDATE, {
            value: "TERMINAL_CONFIG_SAVE_OR_UPDATE",
            describe: "终端类型-新增/编辑",
            resource: _.TERMINAL_CONFIG
        }),
        Object(c["a"])(n, r.TERMINAL_CONFIG_QUERY, {
            value: "TERMINAL_CONFIG_QUERY",
            describe: "终端类型-查询",
            resource: _.TERMINAL_CONFIG
        }),
        Object(c["a"])(n, r.ACCOUNT_ALL, {
            value: "ACCOUNT_ALL",
            describe: "账户信息-ALL",
            resource: _.ACCOUNT
        }),
        Object(c["a"])(n, r.ACCOUNT_QUERY, {
            value: "ACCOUNT_QUERY",
            describe: "账户信息-查询",
            resource: _.ACCOUNT
        }),
        Object(c["a"])(n, r.ACCOUNT_FREEZE, {
            value: "ACCOUNT_FREEZE",
            describe: "账户信息-冻结账户",
            resource: _.ACCOUNT
        }),
        Object(c["a"])(n, r.ACCOUNT_UN_FREEZE, {
            value: "ACCOUNT_UN_FREEZE",
            describe: "账户信息-解冻账户",
            resource: _.ACCOUNT
        }),
        Object(c["a"])(n, r.ACCOUNT_BATCH_FREEZE, {
            value: "ACCOUNT_BATCH_FREEZE",
            describe: "账户信息-批量冻结/解冻账户",
            resource: _.ACCOUNT
        }),
        Object(c["a"])(n, r.ACCOUNT_PROFIT_AMT_FREEZE, {
            value: "ACCOUNT_PROFIT_AMT_FREEZE",
            describe: "账户信息-冻结金额",
            resource: _.ACCOUNT
        }),
        Object(c["a"])(n, r.ACCOUNT_PROFIT_AMT_UNFREEZE, {
            value: "ACCOUNT_PROFIT_AMT_UNFREEZE",
            describe: "账户信息-解冻金额",
            resource: _.ACCOUNT
        }),
        Object(c["a"])(n, r.UPDATE_EQT_BEFORE_BALANCE, {
            value: "UPDATE_EQT_BEFORE_BALANCE",
            describe: "账户信息-修改灵工前余额",
            resource: _.ACCOUNT
        }),
        Object(c["a"])(n, r.WITHDRAW_REVIEW_ALL, {
            value: "WITHDRAW_REVIEW_ALL",
            describe: "账户提现-ALL",
            resource: _.WITHDRAW_REVIEW
        }),
        Object(c["a"])(n, r.WITHDRAW_REVIEW_QUERY, {
            value: "WITHDRAW_REVIEW_QUERY",
            describe: "账户提现-查询",
            resource: _.WITHDRAW_REVIEW
        }),
        Object(c["a"])(n, r.WITHDRAW_REVIEW_REVIEW, {
            value: "WITHDRAW_REVIEW_REVIEW",
            describe: "账户提现-审核",
            resource: _.WITHDRAW_REVIEW
        }),
        Object(c["a"])(n, r.AGENCY_REFUSED, {
            value: "AGENCY_REFUSED",
            describe: "账户提现-总部拒绝",
            resource: _.WITHDRAW_REVIEW
        }),
        Object(c["a"])(n, r.WITHDRAW_REVIEW_PAY, {
            value: "WITHDRAW_REVIEW_PAY",
            describe: "账户提现-汇款",
            resource: _.WITHDRAW_REVIEW
        }),
        Object(c["a"])(n, r.EXPORT_FINANCE_REPORT, {
            value: "EXPORT_FINANCE_REPORT",
            describe: "账户提现-导出财务报表",
            resource: _.WITHDRAW_REVIEW
        }),
        Object(c["a"])(n, r.BROWSE_CAPITAL_FLOW, {
            value: "BROWSE_CAPITAL_FLOW",
            describe: "账户提现-查看汇款流水"
        }),
        Object(c["a"])(n, r.WITHDRAW_UPDATE_STATUS, {
            value: "WITHDRAW_UPDATE_STATUS",
            describe: "账户提现-修改提现状态",
            resource: _.CAPITAL_FLOW
        }),
        Object(c["a"])(n, r.CAPITAL_FLOW_ALL, {
            value: "CAPITAL_FLOW_ALL",
            describe: "汇款记录-ALL",
            resource: _.CAPITAL_FLOW
        }),
        Object(c["a"])(n, r.CAPITAL_FLOW_QUERY, {
            value: "CAPITAL_FLOW_QUERY",
            describe: "汇款记录-查询",
            resource: _.CAPITAL_FLOW
        }),
        Object(c["a"])(n, r.CAPITAL_FLOW_UPDATE, {
            value: "CAPITAL_FLOW_UPDATE",
            describe: "汇款记录-修改",
            resource: _.CAPITAL_FLOW
        }),
        Object(c["a"])(n, r.TAX_CONFIG_ALL, {
            value: "TAX_CONFIG_ALL",
            describe: "发票税率管理-ALL",
            resource: _.TAX_CONFIG
        }),
        Object(c["a"])(n, r.ACCOUNT_NEGATIVE_QUERY, {
            value: "ACCOUNT_NEGATIVE_QUERY",
            describe: "负余额查询-查询",
            resource: _.ACCOUNT
        }),
        Object(c["a"])(n, r.ACCOUNT_NEGATIVE_COUNT, {
            value: "ACCOUNT_NEGATIVE_COUNT",
            describe: "负余额查询-汇总",
            resource: _.ACCOUNT
        }),
        Object(c["a"])(n, r.ACCOUNT_NEGATIVE_DOWNLOAD, {
            value: "ACCOUNT_NEGATIVE_DOWNLOAD",
            describe: "负余额查询-导出",
            resource: _.ACCOUNT
        }),
        Object(c["a"])(n, r.HAND_ACCOUNT_ALL, {
            value: "HAND_ACCOUNT_ALL",
            describe: "调账管理-ALL",
            resource: _.WITHDRAW_HAND_ACCOUNT
        }),
        Object(c["a"])(n, r.HAND_ACCOUNT_QUERY, {
            value: "HAND_ACCOUNT_QUERY",
            describe: "调账管理-查询",
            resource: _.WITHDRAW_HAND_ACCOUNT
        }),
        Object(c["a"])(n, r.HAND_ACCOUNT_REVIEW, {
            value: "HAND_ACCOUNT_REVIEW",
            describe: "调账管理-审核",
            resource: _.WITHDRAW_HAND_ACCOUNT
        }),
        Object(c["a"])(n, r.HAND_ACCOUNT_DOWNLOAD, {
            value: "HAND_ACCOUNT_DOWNLOAD",
            describe: "调账管理-导出",
            resource: _.WITHDRAW_HAND_ACCOUNT
        }),
        Object(c["a"])(n, r.HAND_ACCOUNT_UPLOAD, {
            value: "HAND_ACCOUNT_UPLOAD",
            describe: "调账管理-上传明细文件",
            resource: _.WITHDRAW_HAND_ACCOUNT
        }),
        Object(c["a"])(n, r.HAND_ACCOUNT_COUNT, {
            value: "HAND_ACCOUNT_COUNT",
            describe: "调账管理-手工调账汇总",
            resource: _.WITHDRAW_HAND_ACCOUNT
        }),
        Object(c["a"])(n, r.USER_ALL, {
            value: "USER_ALL",
            describe: "用户管理-ALL",
            resource: _.USER
        }),
        Object(c["a"])(n, r.USER_QUERY, {
            value: "USER_QUERY",
            describe: "用户管理-查询",
            resource: _.USER
        }),
        Object(c["a"])(n, r.USER_DISABLE, {
            value: "USER_DISABLE",
            describe: "用户管理-禁用",
            resource: _.USER
        }),
        Object(c["a"])(n, r.USER_UN_DISABLE, {
            value: "USER_UN_DISABLE",
            describe: "用户管理-解禁",
            resource: _.USER
        }),
        Object(c["a"])(n, r.USER_OPERATOR_PASSWORD, {
            value: "USER_OPERATOR_PASSWORD",
            describe: "用户管理-编辑",
            resource: _.USER
        }),
        Object(c["a"])(n, r.USER_DOWNLOAD, {
            value: "USER_DOWNLOAD",
            describe: "用户管理-导出",
            resource: _.USER
        }),
        Object(c["a"])(n, r.AGENCY_TEAM_MEMBER_BANNED_PRODUCT_TYPE, {
            value: "AGENCY_TEAM_MEMBER_BANNED_PRODUCT_TYPE",
            describe: "用户管理-禁用进件权限"
        }),
        Object(c["a"])(n, r.USER_CLOSE_LOGIN, {
            value: "USER_CLOSE_LOGIN",
            describe: "用户管理-后台系统权限关闭",
            resource: _.USER
        }),
        Object(c["a"])(n, r.USER_OPEN_LOGIN, {
            value: "USER_OPEN_LOGIN",
            describe: "用户管理-后台系统权限开通",
            resource: _.USER
        }),
        Object(c["a"])(n, r.ENABLE_CREATE_TEAM, {
            value: "ENABLE_CREATE_TEAM",
            describe: "用户管理-成员创建团队权限",
            resource: _.USER
        }),
        Object(c["a"])(n, r.USER_OPERATOR_ALL, {
            value: "USER_OPERATOR_ALL",
            describe: "操作员-ALL",
            resource: _.USER
        }),
        Object(c["a"])(n, r.USER_ID_CARD_DECRYPT, {
            value: "USER_ID_CARD_DECRYPT",
            describe: "用户管理-身份证解密",
            resource: _.USER
        }),
        Object(c["a"])(n, r.USER_OPERATOR_QUERY, {
            value: "USER_OPERATOR_QUERY",
            describe: "操作员-查询",
            resource: _.USER
        }),
        Object(c["a"])(n, r.USER_OPERATOR_CREATE, {
            value: "USER_OPERATOR_CREATE",
            describe: "操作员-新增",
            resource: _.USER
        }),
        Object(c["a"])(n, r.USER_OPERATOR_UPDATE, {
            value: "USER_OPERATOR_UPDATE",
            describe: "操作员-编辑",
            resource: _.USER
        }),
        Object(c["a"])(n, r.USER_OPERATOR_DOWNLOAD, {
            value: "USER_OPERATOR_DOWNLOAD",
            describe: "操作员-导出",
            resource: _.USER
        }),
        Object(c["a"])(n, r.SYSTEM_CONFIG_ALL, {
            value: "SYSTEM_CONFIG_ALL",
            describe: "系统配置-ALL",
            resource: _.SYSTEM_CONFIG
        }),
        Object(c["a"])(n, r.SYSTEM_CONFIG_QUERY, {
            value: "SYSTEM_CONFIG_QUERY",
            describe: "系统配置-查询",
            resource: _.SYSTEM_CONFIG
        }),
        Object(c["a"])(n, r.SYSTEM_CONFIG_UPDATE, {
            value: "SYSTEM_CONFIG_UPDATE",
            describe: "系统配置-更新",
            resource: _.SYSTEM_CONFIG
        }),
        Object(c["a"])(n, r.SYSTEM_CONFIG_DELETE, {
            value: "SYSTEM_CONFIG_DELETE",
            describe: "系统配置-删除",
            resource: _.SYSTEM_CONFIG
        }),
        Object(c["a"])(n, r.SYSTEM_CONFIG_PAGE_QUERY, {
            value: "SYSTEM_CONFIG_PAGE_QUERY",
            describe: "系统参数-查询",
            resource: _.SYSTEM_CONFIG
        }),
        Object(c["a"])(n, r.SYSTEM_CONFIG_NEW_CREATE, {
            value: "SYSTEM_CONFIG_NEW_CREATE",
            describe: "系统参数-新增",
            resource: _.SYSTEM_CONFIG
        }),
        Object(c["a"])(n, r.SYSTEM_CONFIG_PAGE_UPDATE, {
            value: "SYSTEM_CONFIG_PAGE_UPDATE",
            describe: "系统参数-编辑",
            resource: _.SYSTEM_CONFIG
        }),
        Object(c["a"])(n, r.SYSTEM_PROCESS_ALL, {
            value: "SYSTEM_PROCESS_ALL",
            describe: "流程-ALL",
            resource: _.SYSTEM_PROCESS
        }),
        Object(c["a"])(n, r.SYSTEM_PROCESS_QUERY, {
            value: "SYSTEM_PROCESS_QUERY",
            describe: "流程-查询",
            resource: _.SYSTEM_PROCESS
        }),
        Object(c["a"])(n, r.SYSTEM_PROCESS_CREATE, {
            value: "SYSTEM_PROCESS_CREATE",
            describe: "流程-新增",
            resource: _.SYSTEM_PROCESS
        }),
        Object(c["a"])(n, r.SYSTEM_PROCESS_UPDATE, {
            value: "SYSTEM_PROCESS_UPDATE",
            describe: "流程-变更",
            resource: _.SYSTEM_PROCESS
        }),
        Object(c["a"])(n, r.SYSTEM_PROCESS_DELETE, {
            value: "SYSTEM_PROCESS_DELETE",
            describe: "流程-删除",
            resource: _.SYSTEM_PROCESS
        }),
        Object(c["a"])(n, r.SYSTEM_ROLE_ALL, {
            value: "SYSTEM_ROLE_ALL",
            describe: "系统角色-ALL",
            resource: _.SYSTEM_ROLE
        }),
        Object(c["a"])(n, r.SYSTEM_ROLE_QUERY, {
            value: "SYSTEM_ROLE_QUERY",
            describe: "系统角色-查询",
            resource: _.SYSTEM_ROLE
        }),
        Object(c["a"])(n, r.SYSTEM_ROLE_CREATE, {
            value: "SYSTEM_ROLE_CREATE",
            describe: "系统角色-新增",
            resource: _.SYSTEM_ROLE
        }),
        Object(c["a"])(n, r.SYSTEM_ROLE_UPDATE, {
            value: "SYSTEM_ROLE_UPDATE",
            describe: "系统角色-更新",
            resource: _.SYSTEM_ROLE
        }),
        Object(c["a"])(n, r.SYSTEM_ROLE_DELETE, {
            value: "SYSTEM_ROLE_DELETE",
            describe: "系统角色-删除",
            resource: _.SYSTEM_ROLE
        }),
        Object(c["a"])(n, r.USER_MEMBER_ROLE_QUERY, {
            value: "USER_MEMBER_ROLE_QUERY",
            describe: "系统角色-成员角色查询",
            resource: _.SYSTEM_ROLE
        }),
        Object(c["a"])(n, r.SYSTEM_AUTH_ALL, {
            value: "SYSTEM_AUTH_ALL",
            describe: "银行政策系统权限-ALL",
            resource: _.SYSTEM_AUTH
        }),
        Object(c["a"])(n, r.SYSTEM_AUTH_QUERY, {
            value: "SYSTEM_AUTH_QUERY",
            describe: "银行政策系统权限-查询",
            resource: _.SYSTEM_AUTH
        }),
        Object(c["a"])(n, r.SYSTEM_AUTH_CREATE, {
            value: "SYSTEM_AUTH_CREATE",
            describe: "银行政策系统权限-新增",
            resource: _.SYSTEM_AUTH
        }),
        Object(c["a"])(n, r.SYSTEM_AUTH_UPDATE, {
            value: "SYSTEM_AUTH_UPDATE",
            describe: "银行政策系统权限-更新",
            resource: _.SYSTEM_AUTH
        }),
        Object(c["a"])(n, r.INFO_NOTIFY_LOG_ALL, {
            value: "INFO_NOTIFY_LOG_ALL",
            describe: "业务信息通知日志-ALL",
            resource: _.SYSTEM_ROLE
        }),
        Object(c["a"])(n, r.INFO_NOTIFY_LOG_QUERY, {
            value: "INFO_NOTIFY_LOG_QUERY",
            describe: "业务信息通知日志-查询",
            resource: _.SYSTEM_ROLE
        }),
        Object(c["a"])(n, r.DAY_AGENCY_SETTLE_ALL, {
            value: "DAY_AGENCY_SETTLE_ALL",
            describe: "服务商分润查询-ALL",
            resource: _.DAY_PROFIT_SETTLE
        }),
        Object(c["a"])(n, r.DAY_AGENCY_SETTLE_QUERY, {
            value: "DAY_AGENCY_SETTLE_QUERY",
            describe: "服务商分润查询-查询",
            resource: _.DAY_PROFIT_SETTLE
        }),
        Object(c["a"])(n, r.DAY_AGENCY_SETTLE_SUM, {
            value: "DAY_AGENCY_SETTLE_SUM",
            describe: "服务商分润查询-汇总",
            resource: _.DAY_PROFIT_SETTLE
        }),
        Object(c["a"])(n, r.DAY_AGENCY_SETTLE_CREATE_REVIEW, {
            value: "DAY_AGENCY_SETTLE_CREATE_REVIEW",
            describe: "服务商分润查询-申请清算",
            resource: _.DAY_PROFIT_SETTLE
        }),
        Object(c["a"])(n, r.DAY_AGENCY_SETTLE_HAND_SETTLE_SUCCESS, {
            value: "DAY_AGENCY_SETTLE_HAND_SETTLE_SUCCESS",
            describe: "服务商分润查询-手工清算",
            resource: _.DAY_PROFIT_SETTLE
        }),
        Object(c["a"])(n, r.DAY_AGENCY_SETTLE_REVIEW_ALL, {
            value: "DAY_AGENCY_SETTLE_REVIEW_ALL",
            describe: "服务商分润审核-ALL",
            resource: _.DAY_PROFIT_SETTLE
        }),
        Object(c["a"])(n, r.DAY_AGENCY_SETTLE_REVIEW_QUERY, {
            value: "DAY_AGENCY_SETTLE_REVIEW_QUERY",
            describe: "服务商分润审核-查询",
            resource: _.DAY_PROFIT_SETTLE
        }),
        Object(c["a"])(n, r.DAY_AGENCY_SETTLE_REVIEW_REVIEW, {
            value: "DAY_AGENCY_SETTLE_REVIEW_REVIEW",
            describe: "服务商分润审核-申请清算",
            resource: _.DAY_PROFIT_SETTLE
        }),
        Object(c["a"])(n, r.AGENCY_PROFIT_ALL, {
            value: "AGENCY_PROFIT_ALL",
            describe: "服务商日分润汇总-ALL",
            resource: _.AGENCY_PROFIT
        }),
        Object(c["a"])(n, r.AGENCY_PROFIT_QUERY, {
            value: "AGENCY_PROFIT_QUERY",
            describe: "服务商日分润汇总-查询",
            resource: _.AGENCY_PROFIT
        }),
        Object(c["a"])(n, r.AGENCY_PROFIT_COUNT, {
            value: "AGENCY_PROFIT_COUNT",
            describe: "服务商日分润汇总-汇总",
            resource: _.AGENCY_PROFIT
        }),
        Object(c["a"])(n, r.AGENCY_PROFIT_DOWNLOAD, {
            value: "AGENCY_PROFIT_DOWNLOAD",
            describe: "服务商日分润汇总-导出",
            resource: _.AGENCY_PROFIT
        }),
        Object(c["a"])(n, r.TEAM_PROFIT_RECORD_ALL, {
            value: "TEAM_PROFIT_RECORD_ALL",
            describe: "团队分润流水-ALL",
            resource: _.DAY_PROFIT_SETTLE
        }),
        Object(c["a"])(n, r.TEAM_PROFIT_RECORD_QUERY, {
            value: "TEAM_PROFIT_RECORD_QUERY",
            describe: "团队分润流水-查询",
            resource: _.DAY_PROFIT_SETTLE
        }),
        Object(c["a"])(n, r.TEAM_PROFIT_RECORD_DOWNLOAD, {
            value: "TEAM_PROFIT_RECORD_DOWNLOAD",
            describe: "团队分润流水-导出",
            resource: _.DAY_PROFIT_SETTLE
        }),
        Object(c["a"])(n, r.DAY_AGENCY_TEAM_MEMBER_SETTLE_ALL, {
            value: "DAY_AGENCY_TEAM_MEMBER_SETTLE_ALL",
            describe: "团员分润查询-ALL",
            resource: _.DAY_PROFIT_SETTLE
        }),
        Object(c["a"])(n, r.DAY_AGENCY_TEAM_MEMBER_SETTLE_QUERY, {
            value: "DAY_AGENCY_TEAM_MEMBER_SETTLE_QUERY",
            describe: "团员分润查询-查询",
            resource: _.DAY_PROFIT_SETTLE
        }),
        Object(c["a"])(n, r.DAY_AGENCY_TEAM_MEMBER_SETTLE_SUM, {
            value: "DAY_AGENCY_TEAM_MEMBER_SETTLE_SUM",
            describe: "团员分润查询-汇总",
            resource: _.DAY_PROFIT_SETTLE
        }),
        Object(c["a"])(n, r.DAY_MERCHANT_SETTLE_ALL, {
            value: "DAY_MERCHANT_SETTLE_ALL",
            describe: "商户分润查询-ALL",
            resource: _.DAY_PROFIT_SETTLE
        }),
        Object(c["a"])(n, r.DAY_MERCHANT_SETTLE_QUERY, {
            value: "DAY_MERCHANT_SETTLE_QUERY",
            describe: "商户分润查询-查询",
            resource: _.DAY_PROFIT_SETTLE
        }),
        Object(c["a"])(n, r.DAY_MERCHANT_SETTLE_SUM, {
            value: "DAY_MERCHANT_SETTLE_SUM",
            describe: "商户分润查询-汇总",
            resource: _.DAY_PROFIT_SETTLE
        }),
        Object(c["a"])(n, r.ERROR_PROFIT_RECORD_ALL, {
            value: "ERROR_PROFIT_RECORD_ALL",
            describe: "差错分润流水-ALL",
            resource: _.ERROR_PROFIT_RECORD
        }),
        Object(c["a"])(n, r.ERROR_PROFIT_RECORD_QUERY, {
            value: "ERROR_PROFIT_RECORD_QUERY",
            describe: "差错分润流水-查询",
            resource: _.ERROR_PROFIT_RECORD
        }),
        Object(c["a"])(n, r.TASK_MANAGE_ALL, {
            value: "TASK_MANAGE_ALL",
            describe: "任务管理-ALL",
            resource: _.SYSTEM_ROLE
        }),
        Object(c["a"])(n, r.TASK_MANAGE_QUERY, {
            value: "TASK_MANAGE_QUERY",
            describe: "任务管理-查询",
            resource: _.SYSTEM_ROLE
        }),
        Object(c["a"])(n, r.TASK_MANAGE_UPDATE, {
            value: "TASK_MANAGE_UPDATE",
            describe: "任务管理-修改",
            resource: _.SYSTEM_ROLE
        }),
        Object(c["a"])(n, r.INDEX_PAGE_ALL, {
            value: "INDEX_PAGE_ALL",
            describe: "首页待办事项-ALL",
            resource: _.INDEX_PAGE
        }),
        Object(c["a"])(n, r.INDEX_PAGE_QUERY, {
            value: "INDEX_PAGE_QUERY",
            describe: "首页待办事项-查询",
            resource: _.INDEX_PAGE
        }),
        Object(c["a"])(n, r.BUSINESS_TEMPLATE_ALL, {
            value: "BUSINESS_TEMPLATE_ALL",
            describe: "费率模板-ALL",
            resource: _.BUSINESS_TEMPLATE
        }),
        Object(c["a"])(n, r.BUSINESS_TEMPLATE_QUERY, {
            value: "BUSINESS_TEMPLATE_QUERY",
            describe: "费率模板-分页查询",
            resource: _.BUSINESS_TEMPLATE
        }),
        Object(c["a"])(n, r.BUSINESS_TEMPLATE_GET, {
            value: "BUSINESS_TEMPLATE_GET",
            describe: "费率模板-获取费率模板",
            resource: _.BUSINESS_TEMPLATE
        }),
        Object(c["a"])(n, r.BUSINESS_TEMPLATE_CREATE, {
            value: "BUSINESS_TEMPLATE_CREATE",
            describe: "费率模板-创建",
            resource: _.BUSINESS_TEMPLATE
        }),
        Object(c["a"])(n, r.BUSINESS_TEMPLATE_UPDATE, {
            value: "BUSINESS_TEMPLATE_UPDATE",
            describe: "费率模板-修改",
            resource: _.BUSINESS_TEMPLATE
        }),
        Object(c["a"])(n, r.BUSINESS_TEMPLATE_DELETE, {
            value: "BUSINESS_TEMPLATE_DELETE",
            describe: "费率模板-删除",
            resource: _.BUSINESS_TEMPLATE
        }),
        Object(c["a"])(n, r.AGENCY_DOWNLOAD, {
            value: "AGENCY_DOWNLOAD",
            describe: "服务商信息-资料下载",
            resource: _.DOWNLOAD_FILE
        }),
        Object(c["a"])(n, r.AGENCY_BUSINESS_DOWNLOAD, {
            value: "AGENCY_BUSINESS_DOWNLOAD",
            describe: "服务商费率信息-下载",
            resource: _.DOWNLOAD_FILE
        }),
        Object(c["a"])(n, r.AGENCY_TEAM_DOWNLOAD, {
            value: "AGENCY_TEAM_DOWNLOAD",
            describe: "团队长信息-下载",
            resource: _.DOWNLOAD_FILE
        }),
        Object(c["a"])(n, r.AGENCY_TEAM_BUSINESS_DOWNLOAD, {
            value: "AGENCY_TEAM_BUSINESS_DOWNLOAD",
            describe: "团队费率信息-下载",
            resource: _.DOWNLOAD_FILE
        }),
        Object(c["a"])(n, r.AGENCY_TEAM_MEMBER_DOWNLOAD, {
            value: "AGENCY_TEAM_MEMBER_DOWNLOAD",
            describe: "成员信息管理-下载",
            resource: _.DOWNLOAD_FILE
        }),
        Object(c["a"])(n, r.AGENCY_TEAM_MEMBER_BUSINESS_DOWNLOAD, {
            value: "AGENCY_TEAM_MEMBER_BUSINESS_DOWNLOAD",
            describe: "团队成员费率信息-下载",
            resource: _.DOWNLOAD_FILE
        }),
        Object(c["a"])(n, r.DAY_AGENCY_SETTLE_DOWNLOAD, {
            value: "DAY_AGENCY_SETTLE_DOWNLOAD",
            describe: "服务商分润查询管理-下载",
            resource: _.DOWNLOAD_FILE
        }),
        Object(c["a"])(n, r.DAY_AGENCY_TEAM_SETTLE_DOWNLOAD, {
            value: "DAY_AGENCY_TEAM_SETTLE_DOWNLOAD",
            describe: "团队分润查询-下载",
            resource: _.DOWNLOAD_FILE
        }),
        Object(c["a"])(n, r.DAY_AGENCY_TEAM_MEMBER_SETTLE_DOWNLOAD, {
            value: "DAY_AGENCY_TEAM_MEMBER_SETTLE_DOWNLOAD",
            describe: "团员分润查询-下载",
            resource: _.DOWNLOAD_FILE
        }),
        Object(c["a"])(n, r.DAY_MERCHANT_SETTLE_DOWNLOAD, {
            value: "DAY_MERCHANT_SETTLE_DOWNLOAD",
            describe: "商户分润查询-下载",
            resource: _.DOWNLOAD_FILE
        }),
        Object(c["a"])(n, r.WITHDRAW_REVIEW_EXPORT, {
            value: "WITHDRAW_REVIEW_EXPORT",
            describe: "提现审核明细-下载",
            resource: _.DOWNLOAD_FILE
        }),
        Object(c["a"])(n, r.USER_CHANGE_PASSWORD, {
            value: "USER_CHANGE_PASSWORD",
            describe: "修改密码",
            resource: _.USER_CHANGE_PASSWORD
        }),
        Object(c["a"])(n, r.QUERY_MIDDLE_ACCOUNT_BALANCE, {
            value: "QUERY_MIDDLE_ACCOUNT_BALANCE",
            describe: "中间账户查询",
            resource: _.QUERY_MIDDLE_ACCOUNT_BALANCE
        }),
        Object(c["a"])(n, r.USER_BIND_XY_WALLET_ALL, {
            value: "USER_BIND_XY_WALLET_ALL",
            describe: "钱包授权-ALL",
            resource: _.USER_BIND_XY_WALLET
        }),
        Object(c["a"])(n, r.USER_BIND_XY_WALLET_QUERY, {
            value: "USER_BIND_XY_WALLET_QUERY",
            describe: "钱包授权-查询",
            resource: _.USER_BIND_XY_WALLET
        }),
        Object(c["a"])(n, r.PUBLIC_MSG_ALL, {
            value: "PUBLIC_MSG_ALL",
            describe: "公告管理-ALL",
            resource: _.PUBLIC_MSG
        }),
        Object(c["a"])(n, r.PUBLIC_MSG_QUERY, {
            value: "PUBLIC_MSG_QUERY",
            describe: "公告管理-查询",
            resource: _.PUBLIC_MSG
        }),
        Object(c["a"])(n, r.PUBLIC_MSG_CREATE, {
            value: "PUBLIC_MSG_CREATE",
            describe: "公告管理-新增",
            resource: _.PUBLIC_MSG
        }),
        Object(c["a"])(n, r.PUBLIC_MSG_STATUS, {
            value: "PUBLIC_MSG_STATUS",
            describe: "公告管理-发布",
            resource: _.PUBLIC_MSG
        }),
        Object(c["a"])(n, r.OPERTOER_LOG_ALL, {
            value: "OPERTOER_LOG_ALL",
            describe: "操作日志-ALL",
            resource: _.OPERTOER_LOG
        }),
        Object(c["a"])(n, r.OPERTOER_LOG_QUERY, {
            value: "OPERTOER_LOG_QUERY",
            describe: "操作日志-查询",
            resource: _.OPERTOER_LOG
        }),
        Object(c["a"])(n, r.QUERY_AGENCY_AND_TEAM_AND_MEMBER, {
            value: "QUERY_AGENCY_AND_TEAM_AND_MEMBER",
            describe: "下拉列表查询-服务商/团队/团员",
            resource: _.QUERY_AGENCY_AND_TEAM_AND_MEMBER
        }),
        Object(c["a"])(n, r.AGENCY_BACKTRACK, {
            value: "AGENCY_BACKTRACK",
            describe: "服务商补录",
            resource: _.AGENCY_BACKTRACK
        }),
        Object(c["a"])(n, r.AGENCY_DISABLE, {
            value: "AGENCY_DISABLE",
            describe: "服务商关键信息-修改",
            resource: _.AGENCY_DISABLE
        }),
        Object(c["a"])(n, r.TERMINAL_REBATE_ALL, {
            value: "TERMINAL_REBATE_ALL",
            describe: "终端返佣流水-ALL",
            resource: _.REBATE_MANAGER
        }),
        Object(c["a"])(n, r.TERMINAL_REBATE_QUERY, {
            value: "TERMINAL_REBATE_QUERY",
            describe: "终端返佣流水-查询",
            resource: _.REBATE_MANAGER
        }),
        Object(c["a"])(n, r.TERMINAL_REBATE_DOWNLOAD, {
            value: "TERMINAL_REBATE_DOWNLOAD",
            describe: "终端返佣流水-下载",
            resource: _.REBATE_MANAGER
        }),
        Object(c["a"])(n, r.COMMISSION_REBATE_ALL, {
            value: "COMMISSION_REBATE_ALL",
            describe: "手续费返佣流水-ALL",
            resource: _.ACTIVITY_REBATE
        }),
        Object(c["a"])(n, r.COMMISSION_REBATE_QUERY, {
            value: "COMMISSION_REBATE_QUERY",
            describe: "手续费返佣流水-查询",
            resource: _.ACTIVITY_REBATE
        }),
        Object(c["a"])(n, r.COMMISSION_REBATE_DOWNLOAD, {
            value: "COMMISSION_REBATE_DOWNLOAD",
            describe: "手续费返佣流水-导出",
            resource: _.ACTIVITY_REBATE
        }),
        Object(c["a"])(n, r.TERMINAL_REBATE_REWARD_ALL, {
            value: "TERMINAL_REBATE_REWARD_ALL",
            describe: "终端返佣流水(新)-ALL",
            resource: _.ACTIVITY_REBATE
        }),
        Object(c["a"])(n, r.TERMINAL_REBATE_REWARD_QUERY, {
            value: "TERMINAL_REBATE_REWARD_QUERY",
            describe: "终端返佣流水(新)-查询",
            resource: _.ACTIVITY_REBATE
        }),
        Object(c["a"])(n, r.MERCHANT_TRADE_REWARD_ALL, {
            value: "MERCHANT_TRADE_REWARD_ALL",
            describe: "商户交易达标流水-ALL",
            resource: _.MERCHANT_REBATE
        }),
        Object(c["a"])(n, r.MERCHANT_TRADE_REWARD_QUERY, {
            value: "MERCHANT_TRADE_REWARD_QUERY",
            describe: "商户交易达标流水-查询",
            resource: _.MERCHANT_REBATE
        }),
        Object(c["a"])(n, r.AGENCY_RECOMMEND_ALL, {
            value: "AGENCY_RECOMMEND_ALL",
            describe: "服务商推荐奖励-ALL",
            resource: _.AGENCY_RECOMMEND_ALL
        }),
        Object(c["a"])(n, r.AGENCY_RECOMMEND_REWARD_QUERY, {
            value: "AGENCY_RECOMMEND_REWARD_QUERY",
            describe: "服务商推荐奖励流水-查询",
            resource: _.AGENCY_RECOMMEND_REWARD_QUERY
        }),
        Object(c["a"])(n, r.AGENCY_RECOMMEND_REWARD_COUNT, {
            value: "AGENCY_RECOMMEND_REWARD_COUNT",
            describe: "服务商推荐奖励流水-统计",
            resource: _.AGENCY_RECOMMEND_REWARD_COUNT
        }),
        Object(c["a"])(n, r.AGENCY_RECOMMEND_REWARD_DOWNLOAD, {
            value: "AGENCY_RECOMMEND_REWARD_DOWNLOAD",
            describe: "服务商推荐奖励流水-下载",
            resource: _.AGENCY_RECOMMEND_REWARD_DOWNLOAD
        }),
        Object(c["a"])(n, r.AGENCY_RECOMMEND_SUMMARY_QUERY, {
            value: "AGENCY_RECOMMEND_SUMMARY_QUERY",
            describe: "服务商推荐奖励报表-查询",
            resource: _.AGENCY_RECOMMEND_SUMMARY_QUERY
        }),
        Object(c["a"])(n, r.AGENCY_RECOMMEND_SUMMARY_COUNT, {
            value: "AGENCY_RECOMMEND_SUMMARY_COUNT",
            describe: "服务商推荐奖励报表-统计",
            resource: _.AGENCY_RECOMMEND_SUMMARY_COUNT
        }),
        Object(c["a"])(n, r.AGENCY_RECOMMEND_SUMMARY_DOWNLOAD, {
            value: "AGENCY_RECOMMEND_SUMMARY_DOWNLOAD",
            describe: "服务商推荐奖励报表-下载",
            resource: _.AGENCY_RECOMMEND_SUMMARY_DOWNLOAD
        }),
        Object(c["a"])(n, r.AGENCY_RECOMMEND_ADMIN_ALL, {
            value: "AGENCY_RECOMMEND_ADMIN_ALL",
            describe: "服务商推荐管理-ALL",
            resource: _.AGENCY_RECOMMEND_ADMIN_ALL
        }),
        Object(c["a"])(n, r.AGENCY_RECOMMEND_ADMIN_QUERY, {
            value: "AGENCY_RECOMMEND_ADMIN_QUERY",
            describe: "服务商推荐管理-查询",
            resource: _.AGENCY_RECOMMEND_ADMIN_QUERY
        }),
        Object(c["a"])(n, r.AGENCY_RECOMMEND_ADMIN_CREATE, {
            value: "AGENCY_RECOMMEND_ADMIN_CREATE",
            describe: "服务商推荐管理-新增",
            resource: _.AGENCY_RECOMMEND_ADMIN_CREATE
        }),
        Object(c["a"])(n, r.AGENCY_RECOMMEND_ADMIN_UPDATE, {
            value: "AGENCY_RECOMMEND_ADMIN_UPDATE",
            describe: "服务商推荐管理-编辑",
            resource: _.AGENCY_RECOMMEND_ADMIN_UPDATE
        }),
        Object(c["a"])(n, r.AGENCY_RECOMMEND_ADMIN_BIND, {
            value: "AGENCY_RECOMMEND_ADMIN_BIND",
            describe: "服务商推荐管理-绑定/解绑",
            resource: _.AGENCY_RECOMMEND_ADMIN_BIND
        }),
        Object(c["a"])(n, r.AGENCY_RECOMMEND_ADMIN_EDIT_BELONG, {
            value: "AGENCY_RECOMMEND_ADMIN_EDIT_BELONG",
            describe: "服务商推荐关联-设置奖励归属人",
            resource: _.AGENCY_RECOMMEND_ADMIN_BIND
        }),
        Object(c["a"])(n, r.AGENCY_RECOMMEND_ADMIN_BUSINESS_UPDATE, {
            value: "AGENCY_RECOMMEND_ADMIN_BUSINESS_UPDATE",
            describe: "服务商推荐管理-修改费率",
            resource: _.AGENCY_RECOMMEND_ADMIN_ALL
        }),
        Object(c["a"])(n, r.AGENCY_RECOMMEND_ADMIN_REVIEW_ALL, {
            value: "AGENCY_RECOMMEND_ADMIN_REVIEW_ALL",
            describe: "服务商推荐审核-ALL",
            resource: _.AGENCY_RECOMMEND_ADMIN_REVIEW_ALL
        }),
        Object(c["a"])(n, r.AGENCY_RECOMMEND_ADMIN_REVIEW_QUERY, {
            value: "AGENCY_RECOMMEND_ADMIN_REVIEW_QUERY",
            describe: "服务商推荐审核-查询",
            resource: _.AGENCY_RECOMMEND_ADMIN_REVIEW_QUERY
        }),
        Object(c["a"])(n, r.AGENCY_RECOMMEND_ADMIN_REVIEW_REVIEW, {
            value: "AGENCY_RECOMMEND_ADMIN_REVIEW_REVIEW",
            describe: "服务商推荐审核-审核",
            resource: _.AGENCY_RECOMMEND_ADMIN_REVIEW_REVIEW
        }),
        Object(c["a"])(n, r.MERCHANTS_AGENCY_CHANGE_ALL, {
            value: "MERCHANTS_AGENCY_CHANGE_ALL",
            describe: "切换记录-ALL",
            resource: _.MERCHANTS_AGENCY_CHANGE_ALL
        }),
        Object(c["a"])(n, r.MERCHANTS_AGENCY_CHANGE_QUERY, {
            value: "MERCHANTS_AGENCY_CHANGE_QUERY",
            describe: "切换记录-查询",
            resource: _.MERCHANTS_AGENCY_CHANGE_QUERY
        }),
        Object(c["a"])(n, r.BUSINESS_UNIFY_ALL, {
            value: "BUSINESS_UNIFY_ALL",
            describe: "调价管理-ALL",
            resource: _.BUSINESS_UNIFY_ALL
        }),
        Object(c["a"])(n, r.BUSINESS_UNIFY_AGENCY_QUERY, {
            value: "BUSINESS_UNIFY_AGENCY_QUERY",
            describe: "调价管理-查询",
            resource: _.BUSINESS_UNIFY_ALL
        }),
        Object(c["a"])(n, r.BUSINESS_UNIFY_AGENCY_MODIFY, {
            value: "BUSINESS_UNIFY_AGENCY_MODIFY",
            describe: "调价管理-新增",
            resource: _.BUSINESS_UNIFY_ALL
        }),
        Object(c["a"])(n, r.WITHDRAW_ALL, {
            value: "WITHDRAW_ALL",
            describe: "提现流水查询-ALL",
            resource: _.WITHDRAW_ALL
        }),
        Object(c["a"])(n, r.WITHDRAW_QUERY, {
            value: "WITHDRAW_QUERY",
            describe: "提现流水查询-查询",
            resource: _.WITHDRAW_ALL
        }),
        Object(c["a"])(n, r.WITHDRAW_DOWNLOAD, {
            value: "WITHDRAW_DOWNLOAD",
            describe: "提现流水查询-导出",
            resource: _.WITHDRAW_ALL
        }),
        Object(c["a"])(n, r.AGENCY_MARKET_PROFIT_MONTH_ALL, {
            value: "AGENCY_MARKET_PROFIT_MONTH_ALL",
            describe: "营销不分润月报表-ALL",
            resource: _.AGENCY_MARKET_PROFIT_MONTH
        }),
        Object(c["a"])(n, r.AGENCY_MARKET_PROFIT_MONTH_QUERY, {
            value: "AGENCY_MARKET_PROFIT_MONTH_QUERY",
            describe: "营销不分润月报表-查询",
            resource: _.AGENCY_MARKET_PROFIT_MONTH
        }),
        Object(c["a"])(n, r.AGENCY_MARKET_PROFIT_MONTH_DOWNLOAD, {
            value: "AGENCY_MARKET_PROFIT_MONTH_DOWNLOAD",
            describe: "营销不分润月报表-导出",
            resource: _.AGENCY_MARKET_PROFIT_MONTH
        }),
        Object(c["a"])(n, r.AGENCY_MARKET_PROFIT_DAY_ALL, {
            value: "AGENCY_MARKET_PROFIT_DAY_ALL",
            describe: "营销不分润日报表-ALL",
            resource: _.AGENCY_MARKET_PROFIT_DAY
        }),
        Object(c["a"])(n, r.AGENCY_MARKET_PROFIT_DAY_QUERY, {
            value: "AGENCY_MARKET_PROFIT_DAY_QUERY",
            describe: "营销不分润日报表-查询",
            resource: _.AGENCY_MARKET_PROFIT_DAY
        }),
        Object(c["a"])(n, r.AGENCY_MARKET_PROFIT_DAY_DOWNLOAD, {
            value: "AGENCY_MARKET_PROFIT_DAY_DOWNLOAD",
            describe: "营销不分润日报表-导出",
            resource: _.AGENCY_MARKET_PROFIT_DAY
        }),
        Object(c["a"])(n, r.AGENCY_INVOICE_ALL, {
            value: "AGENCY_INVOICE_ALL",
            describe: "服务商发票额度-ALL",
            resource: _.AGENCY_INVOICE
        }),
        Object(c["a"])(n, r.AGENCY_INVOICE_QUERY, {
            value: "AGENCY_INVOICE_QUERY",
            describe: "服务商发票额度-查询",
            resource: _.AGENCY_INVOICE
        }),
        Object(c["a"])(n, r.AGENCY_INVOICE_SUB, {
            value: "AGENCY_INVOICE_SUB",
            describe: "服务商发票额度-扣减",
            resource: _.AGENCY_INVOICE
        }),
        Object(c["a"])(n, r.AGENCY_INVOICE_ROLLBACK, {
            value: "AGENCY_INVOICE_ROLLBACK",
            describe: "服务商发票额度-回滚",
            resource: _.AGENCY_INVOICE
        }),
        Object(c["a"])(n, r.TERMINAL_POS_ALL, {
            value: "TERMINAL_POS_ALL",
            describe: "终端管理-ALL",
            resource: _.TERMINAL_ALL
        }),
        Object(c["a"])(n, r.TERMINAL_POS_QUERY, {
            value: "TERMINAL_POS_QUERY",
            describe: "终端管理-查询",
            resource: _.TERMINAL_ALL
        }),
        Object(c["a"])(n, r.TERMINAL_MODIFY_POSSTATUS, {
            value: "TERMINAL_MODIFY_POSSTATUS",
            describe: "终端管理-人工退货",
            resource: _.TERMINAL_ALL
        }),
        Object(c["a"])(n, r.TERMINAL_POS_FLOW_ALL, {
            value: "TERMINAL_POS_FLOW_ALL",
            describe: "终端划拨流水-ALL",
            resource: _.TERMINAL_ALL
        }),
        Object(c["a"])(n, r.TERMINAL_POS_FLOW_QUERY, {
            value: "TERMINAL_POS_FLOW_QUERY",
            describe: "终端划拨流水-查询",
            resource: _.TERMINAL_ALL
        }),
        Object(c["a"])(n, r.TERMINAL_POS_DOWN, {
            value: "TERMINAL_POS_DOWN",
            describe: "终端管理-下拨"
        }),
        Object(c["a"])(n, r.TERMINAL_GENERATE_TRMNO, {
            value: "TERMINAL_GENERATE_TRMNO",
            describe: "终端管理-生成终端号"
        }),
        Object(c["a"])(n, r.TERMINAL_REFUND_COMPONENT, {
            value: "TERMINAL_REFUND_COMPONENT",
            describe: "终端管理-部分退货"
        }),
        Object(c["a"])(n, r.CLOUD_TRUMPET_ALL, {
            value: "CLOUD_TRUMPET_ALL",
            describe: "喇叭管理_ALL"
        }),
        Object(c["a"])(n, r.CLOUD_TRUMPET_QUERY, {
            value: "CLOUD_TRUMPET_QUERY",
            describe: "喇叭管理_查询"
        }),
        Object(c["a"])(n, r.INCREASED_REVENUE_SERIAL_ALL, {
            value: "INCREASED_REVENUE_SERIAL_ALL",
            describe: "增收流水查询_ALL"
        }),
        Object(c["a"])(n, r.INCREASED_REVENUE_SERIAL_QUERY, {
            value: "INCREASED_REVENUE_SERIAL_QUERY",
            describe: "增收流水查询_查询"
        }),
        Object(c["a"])(n, r.INCREASED_REVENUE_SERIAL_DOWNLOAD, {
            value: "INCREASED_REVENUE_SERIAL_DOWNLOAD",
            describe: "增收流水查询_导出"
        }),
        Object(c["a"])(n, r.INCREASED_REVENUE_REPORT_QUERY, {
            value: "INCREASED_REVENUE_REPORT_QUERY",
            describe: "增收日报表_查询"
        }),
        Object(c["a"])(n, r.INCREASED_REVENUE_REPORT_DOWNLOAD, {
            value: "INCREASED_REVENUE_REPORT_DOWNLOAD",
            describe: "增收日报表_导出"
        }),
        Object(c["a"])(n, r.EQT_WALLET_ALL, {
            value: "EQT_WALLET_ALL",
            describe: "灵活用工-签约查询-ALL"
        }),
        Object(c["a"])(n, r.EQT_WALLET_QUERY, {
            value: "EQT_WALLET_QUERY",
            describe: "灵活用工-签约查询-查询"
        }),
        Object(c["a"])(n, r.EQT_BANK_CARD_ALL, {
            value: "EQT_BANK_CARD_ALL",
            describe: "灵活用工-银行卡查询-ALL"
        }),
        Object(c["a"])(n, r.EQT_BANK_CARD_QUERY, {
            value: "EQT_BANK_CARD_QUERY",
            describe: "灵活用工-银行卡查询-查询"
        }),
        Object(c["a"])(n, r.EQT_WITHDRAW_ALL, {
            value: "EQT_WITHDRAW_ALL",
            describe: "灵活用工-提现流水-ALL"
        }),
        Object(c["a"])(n, r.EQT_WITHDRAW_QUERY, {
            value: "EQT_WITHDRAW_QUERY",
            describe: "灵活用工-提现流水-查询"
        }),
        Object(c["a"])(n, r.EQT_WITHDRAW_DOWNLOAD, {
            value: "EQT_WITHDRAW_DOWNLOAD",
            describe: "灵活用工-提现流水-导出"
        }),
        Object(c["a"])(n, r.EQT_WITHDRAW_CASH_AMOUNT, {
            value: "EQT_WITHDRAW_CASH_AMOUNT",
            describe: "灵活用工-发起方账户余额-查询"
        }),
        Object(c["a"])(n, r.EQT_WITHDRAW_FINANCIAL_DOWNLOAD, {
            value: "EQT_WITHDRAW_FINANCIAL_DOWNLOAD",
            describe: "灵活用工-提现流水-报表导出"
        }),
        n)
    },
    3191: function(e, a, E) {
        "use strict";
        E.d(a, "b", (function() {
            return c
        }
        )),
        E.d(a, "a", (function() {
            return _
        }
        )),
        E.d(a, "c", (function() {
            return r
        }
        ));
        var t = E("b775")
          , n = E("285e");
        function c() {
            return Object(t["b"])({
                url: n["a"].toDoListQuery,
                method: "get"
            })
        }
        function _() {
            return Object(t["b"])({
                url: "/business/remind-config-rate",
                method: "get"
            })
        }
        function r() {
            return Object(t["b"])({
                url: "/business/wxFeeRateSwitch",
                method: "get"
            })
        }
    },
    3489: function(e, a, E) {},
    "45b5": function(e, a, E) {
        "use strict";
        E.d(a, "a", (function() {
            return _
        }
        )),
        E.d(a, "b", (function() {
            return r
        }
        ));
        var t, n = E("fc11"), c = {
            MEMBER_ADMIN: {
                describe: "成员管理"
            },
            PUBLIC_MSG: {
                describe: "公告管理"
            },
            MEMBER_MERCHANT: {
                describe: "商户管理"
            },
            MEMBER_TEAM: {
                describe: "团队管理"
            },
            MEMBER_MEMBER: {
                describe: "成员管理"
            },
            MEMBER_BUS: {
                describe: "成员费率管理"
            },
            MEMBER_PROFIT: {
                describe: "成员分润管理"
            },
            MEMBER_ACCOUNT: {
                describe: "成员账户管理"
            }
        }, _ = {
            MEMBER_ADMIN_ALL: "MEMBER_ADMIN_ALL",
            QUERY_AGENCY_AND_TEAM_AND_MEMBER: "QUERY_AGENCY_AND_TEAM_AND_MEMBER",
            MEMBER_PUBLIC_MSG_ALL: "MEMBER_PUBLIC_MSG_ALL",
            MEMBER_PUBLIC_MSG_QUERY: "MEMBER_PUBLIC_MSG_QUERY",
            MEMBER_MERCHANT_TERMINAL_ALL: "MEMBER_MERCHANT_TERMINAL_ALL",
            MEMBER_MERCHANT_TERMINAL_QUERY: "MEMBER_MERCHANT_TERMINAL_QUERY",
            MEMBER_MERCHANT_TERMINAL_REVIEW_ALL: "MEMBER_MERCHANT_TERMINAL_REVIEW_ALL",
            MEMBER_MERCHANT_TERMINAL_REVIEW_QUERY: "MEMBER_MERCHANT_TERMINAL_REVIEW_QUERY",
            MEMBER_MERCHANT_QRCODE_ALL: "MEMBER_MERCHANT_QRCODE_ALL",
            MEMBER_MERCHANT_QRCODE_QUERY: "MEMBER_MERCHANT_QRCODE_QUERY",
            MEMBER_MERCHANT_QRCODE_REVIEW_ALL: "MEMBER_MERCHANT_QRCODE_REVIEW_ALL",
            MEMBER_MERCHANT_QRCODE_REVIEW_QUERY: "MEMBER_MERCHANT_QRCODE_REVIEW_QUERY",
            MEMBER_AGENCY_TEAM_ALL: "MEMBER_AGENCY_TEAM_ALL",
            MEMBER_AGENCY_TEAM_QUERY: "MEMBER_AGENCY_TEAM_QUERY",
            MEMBER_AGENCY_TEAM_MEMBER_ALL: "MEMBER_AGENCY_TEAM_MEMBER_ALL",
            MEMBER_AGENCY_TEAM_MEMBER_QUERY: "MEMBER_AGENCY_TEAM_MEMBER_QUERY",
            MEMBER_BUSINESS_ALL: "MEMBER_BUSINESS_ALL",
            MEMBER_BUSINESS_QUERY: "MEMBER_BUSINESS_QUERY",
            MEMBER_AGENCY_TEAM_INVITE_QRCODE: "MEMBER_AGENCY_TEAM_INVITE_QRCODE",
            AGENCY_TEAM_QUERY: "AGENCY_TEAM_QUERY",
            MEMBER_DAY_AGENCY_TEAM_MEMBER_SETTLE_ALL: "MEMBER_DAY_AGENCY_TEAM_MEMBER_SETTLE_ALL",
            MEMBER_DAY_AGENCY_TEAM_MEMBER_SETTLE_QUERY: "MEMBER_DAY_AGENCY_TEAM_MEMBER_SETTLE_QUERY",
            MEMBER_DAY_AGENCY_TEAM_MEMBER_SETTLE_SUM: "MEMBER_DAY_AGENCY_TEAM_MEMBER_SETTLE_SUM",
            MEMBER_ACCOUNT_ALL: "MEMBER_ACCOUNT_ALL",
            MEMBER_ACCOUNT_QUERY: "MEMBER_ACCOUNT_QUERY",
            MEMBER_PROFIT_RECORD_QUERY: "MEMBER_PROFIT_RECORD_QUERY",
            MEMBER_PROFIT_RECORD_COUNT: "MEMBER_PROFIT_RECORD_COUNT"
        }, r = (t = {},
        Object(n["a"])(t, _.MEMBER_ADMIN_ALL, {
            value: "MEMBER_ADMIN_ALL",
            describe: "成员_管理员_ALL",
            resource: c.MEMBER_ADMIN
        }),
        Object(n["a"])(t, _.QUERY_AGENCY_AND_TEAM_AND_MEMBER, {
            value: "QUERY_AGENCY_AND_TEAM_AND_MEMBER",
            describe: "下拉列表查询-团队/团员",
            resource: c.QUERY_AGENCY_AND_TEAM_AND_MEMBER
        }),
        Object(n["a"])(t, _.MEMBER_PUBLIC_MSG_ALL, {
            value: "MEMBER_PUBLIC_MSG_ALL",
            describe: "公告管理-ALL",
            resource: c.PUBLIC_MSG
        }),
        Object(n["a"])(t, _.MEMBER_PUBLIC_MSG_QUERY, {
            value: "MEMBER_PUBLIC_MSG_QUERY",
            describe: "公告管理-查询",
            resource: c.PUBLIC_MSG
        }),
        Object(n["a"])(t, _.MEMBER_MERCHANT_TERMINAL_ALL, {
            value: "MEMBER_MERCHANT_TERMINAL_ALL",
            describe: "终端商户-ALL",
            resource: c.MEMBER_MERCHANT
        }),
        Object(n["a"])(t, _.MEMBER_MERCHANT_TERMINAL_QUERY, {
            value: "MEMBER_MERCHANT_TERMINAL_QUERY",
            describe: "终端商户-查询",
            resource: c.MEMBER_MERCHANT
        }),
        Object(n["a"])(t, _.MEMBER_MERCHANT_TERMINAL_REVIEW_ALL, {
            value: "MEMBER_MERCHANT_TERMINAL_REVIEW_ALL",
            describe: "终端商户审核-ALL",
            resource: c.MEMBER_MERCHANT
        }),
        Object(n["a"])(t, _.MEMBER_MERCHANT_TERMINAL_REVIEW_QUERY, {
            value: "MEMBER_MERCHANT_TERMINAL_REVIEW_QUERY",
            describe: "终端商户审核-查询",
            resource: c.MEMBER_MERCHANT
        }),
        Object(n["a"])(t, _.MEMBER_MERCHANT_QRCODE_ALL, {
            value: "MEMBER_MERCHANT_QRCODE_ALL",
            describe: "立牌商户-ALL",
            resource: c.MEMBER_MERCHANT
        }),
        Object(n["a"])(t, _.MEMBER_MERCHANT_QRCODE_QUERY, {
            value: "MEMBER_MERCHANT_QRCODE_QUERY",
            describe: "立牌商户-查询",
            resource: c.MEMBER_MERCHANT
        }),
        Object(n["a"])(t, _.MEMBER_MERCHANT_QRCODE_REVIEW_ALL, {
            value: "MEMBER_MERCHANT_QRCODE_REVIEW_ALL",
            describe: "立牌商户审核-ALL",
            resource: c.MEMBER_MERCHANT
        }),
        Object(n["a"])(t, _.MEMBER_MERCHANT_QRCODE_REVIEW_QUERY, {
            value: "MEMBER_MERCHANT_QRCODE_REVIEW_QUERY",
            describe: "立牌商户审核-查询",
            resource: c.MEMBER_MERCHANT
        }),
        Object(n["a"])(t, _.MEMBER_AGENCY_TEAM_ALL, {
            value: "MEMBER_AGENCY_TEAM_ALL",
            describe: "团队管理-ALL",
            resource: c.MEMBER_TEAM
        }),
        Object(n["a"])(t, _.MEMBER_AGENCY_TEAM_QUERY, {
            value: "MEMBER_AGENCY_TEAM_QUERY",
            describe: "团队查询-查询",
            resource: c.MEMBER_TEAM
        }),
        Object(n["a"])(t, _.MEMBER_AGENCY_TEAM_INVITE_QRCODE, {
            value: "MEMBER_AGENCY_TEAM_INVITE_QRCODE",
            describe: "团队查询-查看二维码",
            resource: c.MEMBER_TEAM
        }),
        Object(n["a"])(t, _.MEMBER_AGENCY_TEAM_MEMBER_ALL, {
            value: "MEMBER_AGENCY_TEAM_MEMBER_ALL",
            describe: "成员查询-ALL",
            resource: c.MEMBER_MEMBER
        }),
        Object(n["a"])(t, _.MEMBER_AGENCY_TEAM_MEMBER_QUERY, {
            value: "MEMBER_AGENCY_TEAM_MEMBER_QUERY",
            describe: "成员查询-查询",
            resource: c.MEMBER_MEMBER
        }),
        Object(n["a"])(t, _.MEMBER_BUSINESS_ALL, {
            value: "MEMBER_BUSINESS_ALL",
            describe: "成员费率查询-ALL",
            resource: c.MEMBER_BUS
        }),
        Object(n["a"])(t, _.MEMBER_BUSINESS_QUERY, {
            value: "MEMBER_BUSINESS_QUERY",
            describe: "成员费率查询-查询",
            resource: c.MEMBER_BUS
        }),
        Object(n["a"])(t, _.MEMBER_DAY_AGENCY_TEAM_MEMBER_SETTLE_ALL, {
            value: "MEMBER_DAY_AGENCY_TEAM_MEMBER_SETTLE_ALL",
            describe: "成员分润查询-ALL",
            resource: c.MEMBER_PROFIT
        }),
        Object(n["a"])(t, _.MEMBER_DAY_AGENCY_TEAM_MEMBER_SETTLE_QUERY, {
            value: "MEMBER_DAY_AGENCY_TEAM_MEMBER_SETTLE_QUERY",
            describe: "成员分润查询-查询",
            resource: c.MEMBER_PROFIT
        }),
        Object(n["a"])(t, _.MEMBER_DAY_AGENCY_TEAM_MEMBER_SETTLE_SUM, {
            value: "MEMBER_DAY_AGENCY_TEAM_MEMBER_SETTLE_SUM",
            describe: "成员分润查询-汇总",
            resource: c.MEMBER_PROFIT
        }),
        Object(n["a"])(t, _.MEMBER_PROFIT_RECORD_QUERY, {
            value: "MEMBER_PROFIT_RECORD_QUERY",
            describe: "成员分润流水-查询",
            resource: c.MEMBER_PROFIT
        }),
        Object(n["a"])(t, _.MEMBER_PROFIT_RECORD_COUNT, {
            value: "MEMBER_PROFIT_RECORD_COUNT",
            describe: "成员分润流水-汇总",
            resource: c.MEMBER_PROFIT
        }),
        Object(n["a"])(t, _.MEMBER_ACCOUNT_ALL, {
            value: "MEMBER_ACCOUNT_ALL",
            describe: "成员账户查询-ALL",
            resource: c.MEMBER_ACCOUNT
        }),
        Object(n["a"])(t, _.MEMBER_ACCOUNT_QUERY, {
            value: "MEMBER_ACCOUNT_QUERY",
            describe: "成员账户查询-查询",
            resource: c.MEMBER_ACCOUNT
        }),
        t)
    },
    "498c": function(e, a) {
        e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3ZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQ1IDc5LjE2MzQ5OSwgMjAxOC8wOC8xMy0xNjo0MDoyMiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDozNjBiMzZlMC03MGVjLWUyNGMtODQwOS03ZGVmMTEwYjk4OTYiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6OTUyNDI4NkU5RkMyMTFFQUEyNjFCQjlFNjVDN0ZGRkMiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6OTUyNDI4NkQ5RkMyMTFFQUEyNjFCQjlFNjVDN0ZGRkMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKFdpbmRvd3MpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MzYwYjM2ZTAtNzBlYy1lMjRjLTg0MDktN2RlZjExMGI5ODk2IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjM2MGIzNmUwLTcwZWMtZTI0Yy04NDA5LTdkZWYxMTBiOTg5NiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pk5V2UEAAAreSURBVHja7F17lFVVGd9zHcPUJMOWDwooFB8s1DU+/7B8IbgQji0rTNMDyhKX6UKi1EUu02VLHpooWjrho+FIYoikV5liEk3RVARBJxHzlWIhJaXLSCgd+/3O3jPee7lzz97ncc8+c8+31nfurJk7++zv+51vv77HaRK2kuM14ToMfCT4YPCB4H3BQ8B7iaL7nkYbg3DtAL8Cfhm8BvwceD3+/xMbxW62DAQqcAx4FPhY8BcitlgA7694bMnv38W9nsTnMvBSgPNWDsinIAzE9SzweHBLne66B/hUxewDreYe8EKA83bjAeJ4fHJPBl8EHq2e5DSpRfEs9K0dn63g9jSGteY6A7Ejrt8F/wi8n4VDeEENbWP9OcfxZuFzAYD5qJ4dqI9FON7Z+OlV8C8tBaOS9ld9XY++u8qq+wAgjncMrqvBHniQyB4NBc8HPwtZvpbdIcvxPo/rDeCJom8Q55jHIded+LwUw9jm7FiI43Hp+mIfAqOUzgV3QsZT7LcQx+uH67XgKaJv097ghyDvXGUt/7XPQuR+4okGAKOULvZldrwv2QWI4x2tJu7DRePREeBVSgcWAOJ43O0+At5TNC7t6evA8calC4jjcZO3BPxZkRN1cL/SSQqAON5ktbco5FiU6dODbs6rLyDyKbg1B6NXnbZCR2fUBxDH42FgWw5GoF7nQ1cnJwuI49FRdK9I/9j+4wyAwoPURUpnCQDieANwLYI/l7KgW7ER+yAjlkJdPah0FyMg8qRzIXhwjJ3dBn7fgN8BrwVflrHhiweqd0OHO8R5dEIlnBRD5zrBM/01e9Hd1EBzyiilwxlBX2zSsA7uvp+KYd64D3xmnOc+Gn0fgusbloBCJ9fRkH91+CHL8T6jVlRRwVgp6DevJxj2UbNaee0YZQ6hmQ2PYa6YADC25qthX5fTwwHieF8R0vcdla4CGOtzLHpouhpKjS3kOvBOEW/O8fKnKQq/g4WA7KR0awCI4zFa8JsxTGKT6hmxUYW+aqmVfEvpWNtCfhLDTWcCjOdTFvwUYS9drQeIRG5UxJvRn35NquJKOc63GJDR1aykuZeVVRTqUkPVNgPl0QU6RMRzRrY7eKTfByH6WT7BX1Y5NTRVKIbb/NcjToZzAMYPNIHgPoc+ldMbdMXV5T+IRXdDb0PW5IhgMDLxCqMlceOC0a3/ydUtRB4gvgmOEkFxAtB+VNM6uElaK2xLiag/Mdp+MPTWVWkhx0UEo9UAjCYhI8wbHQyhdH5stSHr2xEa3WC4GJgAPibHoofGlw9Zcrii6ewder1fdNs1rYNZUTxK+WKOQw9tBA9kPkr3kHFIBDDu0gaje8NYG4w/ga+3QElcPjOncYxakidJ1P2h4DXdgIwM2RCdTN832G8chWutEJl1/nhadP9pzbMr5ztG2cwTycafnUhACiUTehiaqh2WL12YraJ3pxjdtKdaBQaJaW1FdwF+Gqf2DUnRCaWT+lEhGngGHb3H4PsXKrPsjS5He69aO8oX3eX+pjc5OlICIv0eA0I0cKOB2dPUf1zjG/8C35aByZeb3pcTansAsaCFjAjZwFMG3z04APQ/Z8K9K72e54CTys4dQUAOCvnPJhPc3wP+Pkwl+4gMgMIH8aaEWj+IgAyNMglpCsHIj/aAJeb5IjtE13YS891QAhI2M3ZqUATFdt+XAQ+90TVo78CMWMl/hMw1jHvoGlTwd4jhiLnmUwyEYAGYa2t8Y1ch8/b2yggoK3C9OeZWBzZBAX+LsEv/0N/lS2XrrLbo4Kc3sZav+zXwz+qsXj7p3E89blSIxvH4EHXGuJPfSEC4cogyoT6hdtddmkIwJLXD0ueeARmXQBaTJf3xQqb0xUHbCiK6m5OnthcZmPrvhfQS2kg8SroBSp5kIA9dDrfEdP9+cSXdzFAbTF2aBv6HxTPEzw3zOuh6eDOOG8cFyC7gO9VBnM5TxfH6AosB6afkadaU59+iwhWbNiCk48DfMzB1RsPfajEoh6mluq48nBdvjwOQbTEKMRtPlUlSDwVeYjEoV0Mek+hHRttsiDKpR132ViNO2qO1q7HJYe4bYK5Wdquzwnlvuq5rHQM9DFn0k5Ucj0GGy6Ise+mhGx6zoJMhRBZOb6lAHgG1B6w2vwN5fm3QZpuQcQOmtI5D1l8TEPN6FXSXhR33Ixpz3xzIY2K9lwrpcDOltwlIEiVSmX2aDQuRoLAo2W9rfGMfUdufU9keT7fnhejJWwV1VJEEjcJTNVFkh2YF/P1CyNPfoL0HQ/ThNQKyLkEhb1R1tLJAfwz4O8/hvmzQ3jth55DOBIXsH9J006AgZW8RZhm9h4boQ2dBOY82JyjoGFjJhAwAEjS8XgddbTFob5Lh/TcTi+6d+sqEhZ1juGGs99KX53DTanzjdX/Tq9/eSUJW7DahlaVHJ48mLDLDR5ejowdYCMbOgkVipIOs9wldN61bthfm9Nc/wm/u2Y0mT/Tdv4AO/0YtMbm6S7uITJOQYau1akUuBhi/M2iT+Zn7hujL8lJAmJy5MeYjlGpEH/x4URLtbTnxFNc0VHZqiPtQ92s/HbKkt+8BkVMlXaX9+goZxnSHCHeC/kD32V/pP9+b6798CQqea/D9y0X4M8FF3T+UAvIHIXNEcpJ0gXbRA8djOsf0kPehzh/bHhA5bM3PcfDpdujjSU0wmtVQFTY9r600QKRyvOOu+uMGB+OZgD1JJf1QSO9iGCIQt1Uu+yoRp2v1tIwob4Uy9zhOGj5SRyPLDIaqA9TqKGzkzhLcq6xwQDUzm50BQPhknQ5hFqe4oSyopztKGNV2u//tl2hFl1v4DssBuSNVMLp379EyiTuUrgMAkXSF5YAsSvm4hWdfMyO2UlXH1QGRyN1nMSAvpQgG591fCBmLFpYWV7MOEbCrvESwaLGdtCXFezODKkrJ3K1Kt8IMEOknmSFyKrUO+tajJn6ysNtfzAGRxHyOF3MkelZV3Kf1j9AKdVnTd18bEFmEbKJaozc6sXBllJKB1OGEoOTW4JPJorsK1ysb2DKGq83ytIgtXRlU1bq3jWE1opkx1HNkBhXKWiXcDZvm4jO1brD6jEodQtMF3GQgGAVaLeJ9Q0JY2l3zBfd84BhBuHOKfWUgYotuCRJ9Z4pskG9k+yBD9rFrymBQV+NMXtNq5t2SdXjHZ2iS3y3Fe//P11XRfcHkn8zdjdLhz5VXVwYASes9WV2+jsyCIyJ0uOj+SsiI8U9ETtXAoLfx7vo+QUWX5zlnZ8RS6gmGC93MS8ekpaVwSflhjoWvg9OUTlIcY4vu/UIWotnUwGBsErJmceRQqngmvaL7tJDRf6saEIxnfdmlDixahciAMnrQbm4gMOb6MusG02lQvJWl5WHkFOyQmYXKiW2fPgoEQz/Pg7xLs7FOlx1lFF9bHwSD+YgjkgAjfgspB4VnTefAWhhExnJLh2QciOeELIu7Its72aLL8k0t/vo8mYzfpIlpE8wAOyJpMJK1kHJQuGG6C9bC5PszhaxZuJ/lQLAcLN0OC+r5YrP6vi5CesvaAAzrZfFd46yzNVrY8252Pjis6tDqf+qWB8ksIOUW0+6zTJs+S8hT5JYU5wdW6V4Y5xI2O4CUg8PSHrOFrCTEchxjhQyz+bqQuYlJ0LtgRrdzeb7UqM5inwekHBwq5hafZUDaMCHr0rP6Ngs+M09xiOEQxLngFfW5RlnD+jSGIx36vwADAFt1zr2YetIwAAAAAElFTkSuQmCC"
    },
    "4aa4": function(e, a, E) {
        var t = {
            "./en-US": ["743d", "lang-en-US"],
            "./en-US.js": ["743d", "lang-en-US"],
            "./en-US/account": ["29fd", "lang-en-US-account"],
            "./en-US/account.js": ["29fd", "lang-en-US-account"],
            "./en-US/account/settings": ["4404", "lang-en-US-account-settings"],
            "./en-US/account/settings.js": ["4404", "lang-en-US-account-settings"],
            "./en-US/dashboard": ["dea1", "lang-en-US-dashboard"],
            "./en-US/dashboard.js": ["dea1", "lang-en-US-dashboard"],
            "./en-US/dashboard/analysis": ["b781", "lang-en-US-dashboard-analysis"],
            "./en-US/dashboard/analysis.js": ["b781", "lang-en-US-dashboard-analysis"],
            "./en-US/form": ["ffb6", "lang-en-US-form"],
            "./en-US/form.js": ["ffb6", "lang-en-US-form"],
            "./en-US/form/basicForm": ["0af2", "lang-en-US-form-basicForm"],
            "./en-US/form/basicForm.js": ["0af2", "lang-en-US-form-basicForm"],
            "./en-US/global": ["6e2f", "lang-en-US-global"],
            "./en-US/global.js": ["6e2f", "lang-en-US-global"],
            "./en-US/menu": ["771d", "lang-en-US-menu"],
            "./en-US/menu.js": ["771d", "lang-en-US-menu"],
            "./en-US/result": ["78a1", "lang-en-US-result"],
            "./en-US/result.js": ["78a1", "lang-en-US-result"],
            "./en-US/result/fail": ["69c3", "lang-en-US-result-fail"],
            "./en-US/result/fail.js": ["69c3", "lang-en-US-result-fail"],
            "./en-US/result/success": ["44e5", "lang-en-US-result-success"],
            "./en-US/result/success.js": ["44e5", "lang-en-US-result-success"],
            "./en-US/setting": ["5030", "lang-en-US-setting"],
            "./en-US/setting.js": ["5030", "lang-en-US-setting"],
            "./en-US/user": ["928e", "lang-en-US-user"],
            "./en-US/user.js": ["928e", "lang-en-US-user"],
            "./zh-CN": ["2807"],
            "./zh-CN.js": ["2807"],
            "./zh-CN/account": ["2a21"],
            "./zh-CN/account.js": ["2a21"],
            "./zh-CN/account/settings": ["0e6b"],
            "./zh-CN/account/settings.js": ["0e6b"],
            "./zh-CN/dashboard": ["dec6"],
            "./zh-CN/dashboard.js": ["dec6"],
            "./zh-CN/dashboard/analysis": ["5dd5"],
            "./zh-CN/dashboard/analysis.js": ["5dd5"],
            "./zh-CN/form": ["18c7"],
            "./zh-CN/form.js": ["18c7"],
            "./zh-CN/form/basicForm": ["12a1"],
            "./zh-CN/form/basicForm.js": ["12a1"],
            "./zh-CN/global": ["1858"],
            "./zh-CN/global.js": ["1858"],
            "./zh-CN/menu": ["1dec"],
            "./zh-CN/menu.js": ["1dec"],
            "./zh-CN/result": ["8176"],
            "./zh-CN/result.js": ["8176"],
            "./zh-CN/result/fail": ["d5c8"],
            "./zh-CN/result/fail.js": ["d5c8"],
            "./zh-CN/result/success": ["4fd4"],
            "./zh-CN/result/success.js": ["4fd4"],
            "./zh-CN/setting": ["5436"],
            "./zh-CN/setting.js": ["5436"],
            "./zh-CN/user": ["2518"],
            "./zh-CN/user.js": ["2518"]
        };
        function n(e) {
            if (!E.o(t, e))
                return Promise.resolve().then((function() {
                    var a = new Error("Cannot find module '" + e + "'");
                    throw a.code = "MODULE_NOT_FOUND",
                    a
                }
                ));
            var a = t[e]
              , n = a[0];
            return Promise.all(a.slice(1).map(E.e)).then((function() {
                return E(n)
            }
            ))
        }
        n.keys = function() {
            return Object.keys(t)
        }
        ,
        n.id = "4aa4",
        e.exports = n
    },
    "4fd4": function(e, a, E) {
        "use strict";
        E.r(a),
        a["default"] = {
            "result.success.title": "提交成功",
            "result.success.description": "提交结果页用于反馈一系列操作任务的处理结果， 如果仅是简单操作，使用 Message 全局提示反馈即可。 本文字区域可以展示简单的补充说明，如果有类似展示 “单据”的需求，下面这个灰色区域可以呈现比较复杂的内容。",
            "result.success.operate-title": "项目名称",
            "result.success.operate-id": "项目 ID",
            "result.success.principal": "负责人",
            "result.success.operate-time": "生效时间",
            "result.success.step1-title": "创建项目",
            "result.success.step1-operator": "曲丽丽",
            "result.success.step2-title": "部门初审",
            "result.success.step2-operator": "周毛毛",
            "result.success.step2-extra": "催一下",
            "result.success.step3-title": "财务复核",
            "result.success.step4-title": "完成",
            "result.success.btn-return": "返回列表",
            "result.success.btn-project": "查看项目",
            "result.success.btn-print": "打印"
        }
    },
    5436: function(e, a, E) {
        "use strict";
        E.r(a),
        a["default"] = {
            "app.setting.pagestyle": "整体风格设置",
            "app.setting.pagestyle.light": "亮色菜单风格",
            "app.setting.pagestyle.dark": "暗色菜单风格",
            "app.setting.pagestyle.realdark": "暗黑模式",
            "app.setting.themecolor": "主题色",
            "app.setting.navigationmode": "导航模式",
            "app.setting.content-width": "内容区域宽度",
            "app.setting.fixedheader": "固定 Header",
            "app.setting.fixedsidebar": "固定侧边栏",
            "app.setting.sidemenu": "侧边菜单布局",
            "app.setting.topmenu": "顶部菜单布局",
            "app.setting.content-width.fixed": "Fixed",
            "app.setting.content-width.fluid": "Fluid",
            "app.setting.othersettings": "其他设置",
            "app.setting.weakmode": "色弱模式",
            "app.setting.copy": "拷贝设置",
            "app.setting.loading": "加载主题中",
            "app.setting.copyinfo": "拷贝设置成功 src/const/defaultSettings.js",
            "app.setting.production.hint": "配置栏只在开发环境用于预览，生产环境不会展现，请拷贝后手动修改配置文件",
            "app.setting.themecolor.daybreak": "拂晓蓝",
            "app.setting.themecolor.dust": "薄暮",
            "app.setting.themecolor.volcano": "火山",
            "app.setting.themecolor.sunset": "日暮",
            "app.setting.themecolor.cyan": "明青",
            "app.setting.themecolor.green": "极光绿",
            "app.setting.themecolor.geekblue": "极客蓝",
            "app.setting.themecolor.purple": "酱紫"
        }
    },
    5696: function(e, a, E) {
        "use strict";
        E.d(a, "a", (function() {
            return t
        }
        ));
        var t = {
            dashboard: "/dashboard",
            downloadCentre: "/downloadCentre",
            changePsd: "/user/changePsd",
            changePhone: "/user/changePhone",
            system: "/system",
            systemProcess: {
                path: "/system/process",
                query: "/system/process/query",
                create: "/system/process/create",
                update: "/system/process/update"
            },
            bankingPolicyAuth: {
                path: "/bankingPolicy/auth",
                query: "/bankingPolicy/auth/query",
                create: "/bankingPolicy/auth/create",
                update: "/bankingPolicy/auth/update"
            },
            bankingPolicyPage: "/bankingPolicy/query",
            systemTask: {
                path: "/system/task",
                query: "/system/task/query"
            },
            systemRole: {
                path: "/system/role",
                query: "/system/role/query",
                create: "/system/role/create",
                update: "/system/role/update"
            },
            systemUser: {
                path: "/system/user",
                query: "/system/user/query",
                create: "/system/user/create",
                update: "/system/user/update"
            },
            systemOperation: {
                path: "/system/operation",
                query: "/system/operation/query",
                create: "/system/operation/create",
                update: "/system/operation/update",
                data: "/system/operation/data"
            },
            systemConfig: {
                query: "/system/const"
            },
            systemLog: {
                path: "/system/opertaion/log",
                query: "/system/operation/log"
            },
            systemParametes: {
                path: "/system/parametes",
                query: "/system/parametes/query"
            },
            systemNotice: {
                path: "/system/notice",
                query: "/system/notice/query",
                create: "/system/notice/create",
                update: "/system/notice/update",
                detail: "/system/notice/detail"
            },
            systemAuth: {
                path: "/system/auth",
                query: "/system/auth/query",
                detail: "/system/auth/detail"
            },
            systemMerchant: {
                path: "/system/merchant",
                query: "/system/merchant/query"
            },
            merchant: {
                base: "/merchant",
                terminal: "/merchant/terminal",
                terminalQuery: "/merchant/terminal/query",
                terminalReviewQuery: "/merchant/terminal/review/query",
                terminalBusiness: "/merchant/terminal/business",
                terminalBusinessQuery: "/merchant/terminal/business/query",
                terminalBusinessCreate: "/merchant/terminal/business/create",
                terminalBusinessUpdate: "/merchant/terminal/business/update",
                terminalBusinessReview: "/merchant/terminal/business/review/query",
                qrcodeQuery: "/merchant/qrcode/query",
                qrcodeReviewQuery: "/merchant/qrcode/review/query",
                qrcodeBusiness: "/merchant/qrcode/business",
                qrcodeBusinessQuery: "/merchant/qrcode/business/query",
                qrcodeBusinessCreate: "/merchant/qrcode/business/create",
                qrcodeBusinessUpdate: "/merchant/qrcode/business/update",
                qrcodeBusinessReview: "/merchant/qrcode/business/review/query"
            },
            modifyPrice: {
                base: "/modifyPrice",
                agency: "/modifyPrice/agency",
                query: "/modifyPrice/query",
                queryBase: "/modifyPrice/query/base",
                create: "/modifyPrice/create"
            },
            merchantBusiness: {
                path: "/merchant/business",
                query: "/merchant/business/query",
                create: "/merchant/business/create",
                update: "/merchant/business/update"
            },
            merchantTerminal: {
                path: "/merchant/device",
                query: "/merchant/device/query",
                create: "/merchant/device/create",
                update: "/merchant/device/update"
            },
            branchOffice: {
                path: "/branch-office",
                query: "/branch-office/query",
                create: "/branch-office/create",
                update: "/branch-office/update"
            },
            branchOfficeBusiness: {
                path: "/branch-office/business",
                query: "/branch-office/business/query",
                create: "/branch-office/business/create",
                update: "/branch-office/business/update",
                review: "/branch-office/business/review/query"
            },
            agency: {
                path: "/agency",
                query: "/agency/query",
                create: "/agency/create",
                update: "/agency/update"
            },
            agencyReview: {
                path: "/agency/review",
                query: "/agency/review/query",
                update: "/agency/review/update"
            },
            agencyBusiness: {
                path: "/agency/businesses",
                query: "/agency/businesses/query",
                create: "/agency/businesses/create",
                update: "/agency/businesses/update",
                review: "/agecny/businesses/reivew"
            },
            agencyTeams: {
                path: "/agency/teams",
                query: "/agency/teams/query",
                create: "/agency/teams/create",
                update: "/agency/teams/update"
            },
            agencyTeamsBusiness: {
                path: "/agency/teams/businesses",
                query: "/agency/teams/businesses/query",
                create: "/agency/teams/businesses/create",
                update: "/agency/teams/businesses/update"
            },
            agencyTeamMember: {
                path: "/agency/teams/member",
                query: "/agency/teams/member/query",
                create: "/agency/teams/member/create",
                update: "/agency/teams/member/update"
            },
            agencyTeamMemberBusiness: {
                path: "/agency/teams/member/businesses",
                query: "/agency/teams/member/businesses/query",
                create: "/agency/teams/member/businesses/create",
                update: "/agency/teams/member/businesses/update"
            },
            agencyTeamExchange: {
                path: "/agency/team/exchange",
                query: "/agency/team/exchange/query"
            },
            agencyActivity: {
                path: "/agency/activity",
                query: "/agency/activity/query",
                create: "/agency/activity/create",
                update: "/agency/activity/update",
                review: "agency/activity/review"
            },
            account: "/account",
            accountManage: {
                path: "/account/manage",
                query: "/account/manage/query",
                create: "/account/manage/create",
                update: "/account/manage/update",
                minusBalance: "/account/minusBalance"
            },
            paymentRecord: {
                path: "/account/paymentRecord/",
                query: "/account/paymentRecord/query"
            },
            accountInvoice: {
                path: "/account/invoice",
                query: "account/invoice/query"
            },
            accountWithdrawal: {
                path: "/account/withdrawal",
                list: "/account/list"
            },
            accountAdjustment: {
                path: "/account/adjustment"
            },
            invoiceManage: {
                path: "/account/invoice",
                query: "/accouont/invoiceManage/query"
            },
            activityAudit: {
                path: "/account/audit",
                query: "/account/audit/query",
                create: "/account/audit/create",
                update: "/account/audit/update"
            },
            activityAward: {
                path: "/account/award",
                query: "/account/award/query",
                create: "/account/award/create",
                update: "/account/award/update",
                review: "/account/award/review"
            },
            activityAwardAudit: {
                path: "/account/award/audit",
                query: "/account/award/audit/query",
                create: "/account/award/audit/create",
                update: "/account/award/audit/update"
            },
            activity: "/activity",
            activityConfig: "/activity/config",
            activityRule: {
                path: "/activity/rule",
                query: "/activity/rule/query",
                create: "/activity/rule/create",
                update: "/activity/rule/update"
            },
            activityAgency: {
                query: "/activity/agency/query",
                review: "/activity/agency/review"
            },
            activityManage: {
                ruleManage: "/activity/rules",
                ruleReview: "/activity/rules/review",
                agencyManage: "/activity/agency",
                agencyReview: "/activity/review",
                participantQuery: "/activity/participant/query",
                riskQuery: "/risk/query",
                rewardQuery: "/reward/query"
            },
            activityTerminalTypeConfig: "/activity/terminal/config/query",
            qianhaiActivityConfig: "/activity/qianhai/query",
            profit: "/profit",
            profitRule: {
                path: "/profit/rule",
                query: "/profit/rule/query",
                create: "/profit/rule/create",
                update: "/profit/rule/update",
                copy: "/profit/rule/copy"
            },
            profitRuleReview: {
                path: "/profit/rule/review",
                query: "/profit/rule/review/query"
            },
            agencyBindProfit: {
                path: "/agency/bind/profit",
                query: "/agency/bind/profit/query",
                create: "/agency/bind/profit/create",
                update: "/agency/bind/profit/update"
            },
            agencyBindProfitReview: {
                path: "/agency/bind/profit/review",
                query: "/agency/bind/profit/review/query"
            },
            profitRecord: {
                query: "/profit/record/query"
            },
            trade: "/trade",
            profitSettlement: {
                base: "/profitSettlement",
                agency: "/profitSettlement/agency",
                agencyQuery: "/profitSettlement/agency/query",
                agencyReview: "/profitSettlement/agency/review",
                agencyDay: "profitSettlement/agency/day",
                team: "/profitSettlement/team",
                teamQuery: "/profitSettlement/team/query",
                member: "/profitSettlement/member",
                memberQuery: "/profitSettlement/member/query",
                merchant: "/profitSettlement/merchant",
                merchantQuery: "/profitSettlement/merchant/query",
                batchErrorQuery: "/profitSettlement/batch-error/query",
                profit0Day: "/profitSettlement/profit0/day/query",
                profit0Month: "/profitSettlement/profit0/month/query"
            },
            home: {
                dashboard: "/dashboard"
            },
            toToList: {
                base: "/todoList",
                query: "/todoList/query"
            },
            businessTemplate: {
                base: "/businessTemplate",
                query: "/businessTemplate/query",
                edit: "/businessTemplate/edit"
            },
            rebateManage: {
                base: "/rebateManage",
                rulesQuery: "/rebateManage/rules",
                rebateDetail: "/rebateManage/rebateDetail",
                agencyRebate: "/rebateManage/agencyRebate",
                agencyRebateReview: "/rebateManage/agencyRebate/review",
                terminalRebate: "/rebateManage/terminalRebate",
                terminalRebateNew: "/rebateManage/terminalRebateNew",
                handlingRebate: "/rabateManage/handlingRebate",
                merchantRebate: "/rebateManage/merchantRebate",
                rebateTest: "/rebateManage/rebateTest"
            },
            recommend: {
                base: "/recommend",
                agencyRecommend: "/recommend/agency/index",
                agencyRecommendReward: "/recommend/agency/award",
                agencyRecommendReview: "/recommend/agency/review",
                agencyRecommendCreate: "/recommend/agency/create",
                agencyRecommendUpdate: "/recommend/agency/update",
                agencyRecommendMonth: "/recommend/agency/month"
            },
            terminal: {
                base: "/terminal",
                query: "/terminal/query",
                merchant: "/terminal/merchant",
                record: "/terminal/record",
                down: "/terminal/down",
                hornQuery: "/horn/query"
            },
            eqt: {
                base: "/eqt",
                signQuery: "/eqt-sign/query",
                recordQuery: "/eqt-record/query",
                quotaQuery: "/eqt-quota/query"
            },
            coupon: {
                base: "/coupon",
                couponUser: "/coupon/user",
                couponActivity: "/coupon/activity",
                couponActivityTemp: "/coupon/template",
                couponTempQuery: "/coupon/template/query",
                couponRedpaper: "/coupon/redpaper",
                couponVerificat: "/coupon/verificat"
            },
            increase: {
                base: "/increase",
                record: "/increase/record",
                day: "/increase/day"
            }
        }
    },
    "56d7": function(e, a, E) {
        "use strict";
        E.r(a);
        E("f2ef");
        var t, n = E("3af3"), c = (E("68c7"),
        E("de1b")), _ = (E("7d24"),
        E("dfae")), r = (E("e260"),
        E("e6cf"),
        E("cca6"),
        E("a79df"),
        E("a4d3"),
        E("e01a"),
        E("b636"),
        E("dc8d"),
        E("efe9"),
        E("d28b"),
        E("2a1b"),
        E("80e0"),
        E("6b9e"),
        E("197b"),
        E("2351"),
        E("8172"),
        E("944a"),
        E("81b8"),
        E("99af"),
        E("a874"),
        E("cb29"),
        E("4de4"),
        E("7db0"),
        E("c740"),
        E("0481"),
        E("5db7"),
        E("a630"),
        E("caad"),
        E("a15b"),
        E("d81d"),
        E("5ded"),
        E("13d5"),
        E("f4dd"),
        E("fb6a"),
        E("f785"),
        E("a434"),
        E("4069"),
        E("73d9"),
        E("c19f"),
        E("82da"),
        E("ace4"),
        E("efec"),
        E("b56e"),
        E("b0c0"),
        E("0c47"),
        E("4ec9"),
        E("5327"),
        E("79a8"),
        E("9ff9"),
        E("3ea3"),
        E("40d9"),
        E("ff9c"),
        E("0ac8"),
        E("f664"),
        E("4057"),
        E("bc01"),
        E("6b93"),
        E("ca21"),
        E("90d7"),
        E("2af1"),
        E("0261"),
        E("7898"),
        E("23dc"),
        E("b65f"),
        E("a9e3"),
        E("35b3"),
        E("f00c"),
        E("8ba4"),
        E("9129"),
        E("583b"),
        E("aff5"),
        E("e6e1"),
        E("c35a"),
        E("25eb"),
        E("b6802"),
        E("12a8"),
        E("e71b"),
        E("4fad"),
        E("dca8"),
        E("c1f9"),
        E("e439"),
        E("dbb4"),
        E("7039"),
        E("3410"),
        E("2b19"),
        E("c906"),
        E("e21d"),
        E("e43e"),
        E("b64b"),
        E("bf96"),
        E("5bf7"),
        E("cee8"),
        E("af93"),
        E("131a"),
        E("d3b7"),
        E("07ac"),
        E("a6fd"),
        E("4ae1"),
        E("3f3a"),
        E("ac16"),
        E("5d41"),
        E("9e4a"),
        E("7f78"),
        E("c760"),
        E("db96"),
        E("1bf2"),
        E("d6dd"),
        E("7ed3"),
        E("8b9a"),
        E("4d63"),
        E("ac1f"),
        E("5377"),
        E("25f0"),
        E("6062"),
        E("f5b2"),
        E("8a79"),
        E("f6d6"),
        E("2532"),
        E("3ca3"),
        E("466d"),
        E("843c"),
        E("4d90"),
        E("d80f"),
        E("38cf"),
        E("5319"),
        E("841c"),
        E("1276"),
        E("2ca0"),
        E("498a"),
        E("1e25"),
        E("eee7"),
        E("18a5"),
        E("1393"),
        E("04d3"),
        E("cc71"),
        E("c7cd"),
        E("9767"),
        E("1913"),
        E("c5d0"),
        E("9911"),
        E("c96a"),
        E("2315"),
        E("4c53"),
        E("664f"),
        E("cfc3"),
        E("4a9b"),
        E("fd87"),
        E("8b09"),
        E("143c"),
        E("5cc6"),
        E("8a59"),
        E("84c3"),
        E("fb2c"),
        E("9a8c"),
        E("a975"),
        E("735e"),
        E("c1ac"),
        E("d139"),
        E("3a7b"),
        E("d5d6"),
        E("20bf"),
        E("82f8"),
        E("e91f"),
        E("60bd"),
        E("5f96"),
        E("3280"),
        E("3fcc"),
        E("ec97"),
        E("ca91"),
        E("25a1"),
        E("cd26"),
        E("3c5d"),
        E("2954"),
        E("649e"),
        E("219c"),
        E("170b"),
        E("b39a"),
        E("72f7"),
        E("10d1"),
        E("1fe2"),
        E("159b"),
        E("ddb0"),
        E("130f"),
        E("9f96"),
        E("2b3d"),
        E("bf19"),
        E("9861"),
        E("96cf"),
        E("d042")), i = E("2b0e"), A = function() {
            var e = this
              , a = e.$createElement
              , E = e._self._c || a;
            return E("a-config-provider", {
                attrs: {
                    locale: e.locale
                }
            }, [E("div", {
                attrs: {
                    id: "app"
                }
            }, [E("router-view")], 1)])
        }, s = [], u = E("7bdf"), o = function(e) {
            document.title = e;
            var a = navigator.userAgent
              , E = /\bMicroMessenger\/([\d\.]+)/;
            if (E.test(a) && /ip(hone|od|ad)/i.test(a)) {
                var t = document.createElement("iframe");
                t.src = "/favicon.ico",
                t.style.display = "none",
                t.onload = function() {
                    setTimeout((function() {
                        t.remove()
                    }
                    ), 9)
                }
                ,
                document.body.appendChild(t)
            }
        }, R = u["a"].title, d = E("bf0f"), T = {
            data: function() {
                return {}
            },
            computed: {
                locale: function() {
                    var e = this.$route.meta.title;
                    return e && o("".concat(Object(d["b"])(e), " - ").concat(R)),
                    this.$i18n.getLocaleMessage(this.$store.getters.lang).antLocale
                }
            }
        }, l = T, b = E("2877"), N = Object(b["a"])(l, A, s, !1, null, null, null), C = N.exports, O = E("a18c"), I = E("2f62"), L = E("fc11"), m = E("8ded"), M = E.n(m), h = E("9fb0"), S = {
            state: {
                sideCollapsed: !1,
                isMobile: !1,
                theme: "dark",
                layout: "",
                contentWidth: "",
                fixedHeader: !1,
                fixedSidebar: !1,
                autoHideHeader: !1,
                color: "",
                weak: !1,
                multiTab: !0,
                lang: "zh-CN",
                _antLocale: {},
                XRecord: null,
                agencyTeamId: "",
                keepAlivePages: [],
                keepAlivePagesCache: []
            },
            mutations: (t = {},
            Object(L["a"])(t, h["g"], (function(e, a) {
                e.sideCollapsed = a,
                M.a.set(h["g"], a)
            }
            )),
            Object(L["a"])(t, h["n"], (function(e, a) {
                e.isMobile = a
            }
            )),
            Object(L["a"])(t, h["p"], (function(e, a) {
                e.theme = a,
                M.a.set(h["p"], a)
            }
            )),
            Object(L["a"])(t, h["m"], (function(e, a) {
                e.layout = a,
                M.a.set(h["m"], a)
            }
            )),
            Object(L["a"])(t, h["j"], (function(e, a) {
                e.fixedHeader = a,
                M.a.set(h["j"], a)
            }
            )),
            Object(L["a"])(t, h["k"], (function(e, a) {
                e.fixedSidebar = a,
                M.a.set(h["k"], a)
            }
            )),
            Object(L["a"])(t, h["i"], (function(e, a) {
                e.contentWidth = a,
                M.a.set(h["i"], a)
            }
            )),
            Object(L["a"])(t, h["l"], (function(e, a) {
                e.autoHideHeader = a,
                M.a.set(h["l"], a)
            }
            )),
            Object(L["a"])(t, h["h"], (function(e, a) {
                e.color = a,
                M.a.set(h["h"], a)
            }
            )),
            Object(L["a"])(t, h["q"], (function(e, a) {
                e.weak = a,
                M.a.set(h["q"], a)
            }
            )),
            Object(L["a"])(t, h["c"], (function(e, a) {
                var E = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                e.lang = a,
                e._antLocale = E,
                M.a.set(h["c"], a)
            }
            )),
            Object(L["a"])(t, h["o"], (function(e, a) {
                M.a.set(h["o"], a),
                e.multiTab = a
            }
            )),
            Object(L["a"])(t, h["f"], (function(e, a) {
                e.XRecord = a
            }
            )),
            Object(L["a"])(t, h["e"], (function(e, a) {
                e.agencyTeamId = a
            }
            )),
            Object(L["a"])(t, "ADD_KEEP_ALIVE_PAGE", (function(e, a) {
                e.keepAlivePages.push(a)
            }
            )),
            Object(L["a"])(t, "DEL_KEEP_ALIVE_PAGE", (function(e, a) {
                var E = e.keepAlivePages.findIndex((function(e) {
                    return e == a
                }
                ));
                -1 != E && e.keepAlivePages.splice(E, 1)
            }
            )),
            Object(L["a"])(t, "ADD_KEEP_ALIVE_PAGE_CACHE", (function(e, a) {
                e.keepAlivePagesCache.push(a)
            }
            )),
            t),
            actions: {
                setLang: function(e, a) {
                    var E = e.commit;
                    return new Promise((function(e, t) {
                        E(h["c"], a),
                        Object(d["c"])(a).then((function() {
                            e()
                        }
                        )).catch((function(e) {
                            t(e)
                        }
                        ))
                    }
                    ))
                }
            }
        }, f = S, Y = E("7ded"), U = E("ca00"), p = (E("b899"),
        E("3191")), D = {
            state: {
                token: "",
                name: "",
                welcome: "",
                avatar: "",
                roles: [],
                info: {},
                wechatBusinessOpen: !1
            },
            mutations: {
                SET_TOKEN: function(e, a) {
                    e.token = a
                },
                SET_NAME: function(e, a) {
                    var E = a.name
                      , t = a.welcome;
                    e.name = E,
                    e.welcome = t
                },
                SET_ROLES: function(e, a) {
                    e.roles = a
                },
                SET_INFO: function(e, a) {
                    e.info = a
                },
                SET_WECHAT_BUSINESS_CONFIG: function(e, a) {
                    e.wechatBusinessOpen = a
                }
            },
            actions: {
                Login: function(e, a) {
                    var E = e.commit
                      , t = e.dispatch;
                    return new Promise((function(e, n) {
                        Object(Y["b"])(a).then((function(a) {
                            var c = a;
                            c.id ? (E("SET_NAME", {
                                name: a.nameMask,
                                welcome: Object(U["A"])()
                            }),
                            E("SET_INFO", c),
                            sessionStorage.setItem(h["a"], JSON.stringify(a)),
                            t("GenerateRoutes"),
                            e(c)) : n(c)
                        }
                        )).catch((function(e) {
                            n(e)
                        }
                        ))
                    }
                    ))
                },
                Logout: function(e) {
                    var a = e.commit;
                    e.state;
                    a("SET_TOKEN", ""),
                    a("SET_ROLES", []),
                    Object(Y["c"])().then((function() {
                        O["a"].replace({
                            name: "login"
                        })
                    }
                    ))
                },
                GetWechatBusinessConfig: function(e) {
                    var a = e.commit
                      , E = e.state;
                    return new Promise((function(e, t) {
                        Object(p["c"])().then((function(t) {
                            a("SET_WECHAT_BUSINESS_CONFIG", t),
                            e(E.wechatBusinessOpen)
                        }
                        ))
                    }
                    ))
                }
            }
        }, y = D, g = E("d0ff"), G = E("f23b"), P = E("680a"), B = {
            dashboard: "/dashboard",
            downloadCentre: "/downloadCentre",
            changePsd: "/user/changePsd",
            changePhone: "/user/changePhone",
            systemNotice: {
                detail: "/system/notice/detail"
            },
            team: {
                path: "/team",
                query: "/team/list",
                member: "/team/memberList",
                memberBus: "/team/memberBusList"
            },
            merchant: {
                path: "/merchant",
                termnalQuery: "/merchant/terminal/list",
                termnalReview: "/merchant/terminal/reviewList",
                qrcodeQuery: "/merchant/qrcode/list",
                qrcodeReview: "/merchant/qrcode/reviewList"
            },
            profit: {
                path: "/profit",
                memberDayProfit: "/profit/day",
                memberProfitQuery: "/profit/record"
            },
            withdrawal: {
                path: "/withdrawal",
                accountQuery: "/withdrawal/account"
            }
        }, v = {
            downloadCenter: {
                title: "下载中心"
            },
            notice: {
                detail: "公告详情"
            },
            team: {
                mainTitle: "团队管理",
                teamZH: "团队查询",
                teamEN: "TeamQuery",
                memberZH: "成员查询",
                memberEN: "MemberQuery",
                memberBusEN: "MemberBusinessQuery",
                memberBusZH: "成员费率查询"
            },
            merchant: {
                mainTitle: "商户管理",
                terminalQueryEN: "TerminalQuery",
                terminalQueryZH: "终端商户查询",
                terminalReviewEN: "TerminalReview",
                terminalReviewZH: "终端商户审核",
                qrcodeQueryEN: "QrcodeQuery",
                qrcodeQueryZH: "立牌商户查询",
                qrcodeReviewEN: "QrcodeReview",
                qrcodeReviewZH: "立牌商户审核"
            },
            profit: {
                mainTitle: "分润管理",
                dayQueryEN: "MemberProfitDayQuery",
                dayQueryZH: "分润日汇总",
                memberProfitEN: "MemberProfitQuery",
                memberProfitZH: "分润流水查询"
            },
            withdrawal: {
                mainTitle: "提现管理",
                accountQueryEN: "accountQueryEN",
                accountQueryZH: "账户信息"
            }
        }, k = E("45b5"), W = [{
            path: "/",
            name: "index",
            component: P["a"],
            meta: {
                title: "首页"
            },
            redirect: B.dashboard,
            children: [{
                name: "dashboard",
                meta: {
                    title: "公告",
                    icon: "home",
                    keepAlive: !0,
                    permission: []
                },
                path: B.dashboard,
                component: function() {
                    return E.e("chunk-9699d590").then(E.bind(null, "7277"))
                }
            }, {
                name: v.notice.detail,
                meta: {
                    title: v.notice.detail,
                    permission: []
                },
                hidden: !0,
                path: B.systemNotice.detail,
                component: function() {
                    return E.e("chunk-418b56ee").then(E.bind(null, "e131"))
                }
            }, {
                name: "changePsd",
                meta: {
                    title: "修改密码",
                    icon: ""
                },
                hidden: !0,
                path: B.changePsd,
                component: function() {
                    return Promise.all([E.e("chunk-70c7a28c"), E.e("chunk-36c1f648"), E.e("chunk-2d0dacf8"), E.e("chunk-3b9c38a6"), E.e("chunk-71119059")]).then(E.bind(null, "af58"))
                }
            }, {
                name: "changePsd",
                meta: {
                    title: "修改手机号",
                    icon: ""
                },
                hidden: !0,
                path: B.changePhone,
                component: function() {
                    return Promise.all([E.e("chunk-70c7a28c"), E.e("chunk-36c1f648"), E.e("chunk-2d0dacf8"), E.e("chunk-3b9c38a6"), E.e("chunk-d55dfed2")]).then(E.bind(null, "9749"))
                }
            }, {
                path: B.team.path,
                component: P["b"],
                redirect: B.team.query,
                meta: {
                    title: v.team.mainTitle,
                    icon: "team",
                    permission: [k["a"].MEMBER_AGENCY_TEAM_ALL, k["a"].MEMBER_AGENCY_TEAM_QUERY, k["a"].MEMBER_AGENCY_TEAM_MEMBER_ALL, k["a"].MEMBER_AGENCY_TEAM_MEMBER_QUERY, k["a"].MEMBER_BUSINESS_ALL, k["a"].MEMBER_BUSINESS_QUERY]
                },
                children: [{
                    name: v.team.teamEN,
                    meta: {
                        title: v.team.teamZH,
                        keepAlive: !0,
                        permission: [k["a"].MEMBER_AGENCY_TEAM_ALL, k["a"].MEMBER_AGENCY_TEAM_QUERY]
                    },
                    path: B.team.query,
                    component: function() {
                        return Promise.all([E.e("chunk-3ddd0db4"), E.e("chunk-74678edd"), E.e("chunk-5fcd58ec")]).then(E.bind(null, "ba4c"))
                    }
                }, {
                    name: v.team.memberEN,
                    meta: {
                        title: v.team.memberZH,
                        keepAlive: !0,
                        permission: [k["a"].MEMBER_AGENCY_TEAM_MEMBER_ALL, k["a"].MEMBER_AGENCY_TEAM_MEMBER_QUERY]
                    },
                    path: B.team.member,
                    component: function() {
                        return Promise.all([E.e("chunk-3ddd0db4"), E.e("chunk-7b0afb11")]).then(E.bind(null, "99bb"))
                    }
                }, {
                    name: v.team.memberBusEN,
                    meta: {
                        title: v.team.memberBusZH,
                        keepAlive: !0,
                        permission: [k["a"].MEMBER_BUSINESS_ALL, k["a"].MEMBER_BUSINESS_QUERY]
                    },
                    path: B.team.memberBus,
                    component: function() {
                        return Promise.all([E.e("chunk-3ddd0db4"), E.e("chunk-b06a3124")]).then(E.bind(null, "9a91"))
                    }
                }]
            }, {
                path: B.merchant.path,
                component: P["b"],
                redirect: B.merchant.terminal,
                meta: {
                    title: v.merchant.mainTitle,
                    icon: "shop",
                    permission: [k["a"].MEMBER_MERCHANT_TERMINAL_ALL, k["a"].MEMBER_MERCHANT_TERMINAL_QUERY, k["a"].MEMBER_MERCHANT_TERMINAL_REVIEW_ALL, k["a"].MEMBER_MERCHANT_TERMINAL_REVIEW_QUERY, k["a"].MEMBER_MERCHANT_QRCODE_ALL, k["a"].MEMBER_MERCHANT_QRCODE_QUERY, k["a"].MEMBER_MERCHANT_QRCODE_REVIEW_ALL, k["a"].MEMBER_MERCHANT_QRCODE_REVIEW_QUERY]
                },
                children: [{
                    name: v.merchant.terminalQueryEN,
                    meta: {
                        title: v.merchant.terminalQueryZH,
                        keepAlive: !0,
                        permission: [k["a"].MEMBER_MERCHANT_TERMINAL_ALL, k["a"].MEMBER_MERCHANT_TERMINAL_QUERY]
                    },
                    path: B.merchant.termnalQuery,
                    component: function() {
                        return Promise.all([E.e("chunk-3f4c1290"), E.e("chunk-51f1bff2"), E.e("chunk-fb47b0a0")]).then(E.bind(null, "567b"))
                    }
                }, {
                    name: v.merchant.terminalReviewEN,
                    meta: {
                        title: v.merchant.terminalReviewZH,
                        keepAlive: !0,
                        permission: [k["a"].MEMBER_MERCHANT_TERMINAL_REVIEW_ALL, k["a"].MEMBER_MERCHANT_TERMINAL_REVIEW_QUERY]
                    },
                    path: B.merchant.termnalReview,
                    component: function() {
                        return Promise.all([E.e("chunk-3f4c1290"), E.e("chunk-51f1bff2"), E.e("chunk-c632a812")]).then(E.bind(null, "b15b"))
                    }
                }, {
                    name: v.merchant.qrcodeQueryEN,
                    meta: {
                        title: v.merchant.qrcodeQueryZH,
                        keepAlive: !0,
                        permission: [k["a"].MEMBER_MERCHANT_QRCODE_ALL, k["a"].MEMBER_MERCHANT_QRCODE_QUERY]
                    },
                    path: B.merchant.qrcodeQuery,
                    component: function() {
                        return Promise.all([E.e("chunk-2d0dacf8"), E.e("chunk-3f4c1290"), E.e("chunk-8074d8e8"), E.e("chunk-c6b51fe6")]).then(E.bind(null, "4c11"))
                    }
                }, {
                    name: v.merchant.qrcodeReviewEN,
                    meta: {
                        title: v.merchant.qrcodeReviewZH,
                        keepAlive: !0,
                        permission: [k["a"].MEMBER_MERCHANT_QRCODE_REVIEW_ALL, k["a"].MEMBER_MERCHANT_QRCODE_REVIEW_QUERY]
                    },
                    path: B.merchant.qrcodeReview,
                    component: function() {
                        return Promise.all([E.e("chunk-2d0dacf8"), E.e("chunk-3f4c1290"), E.e("chunk-8074d8e8"), E.e("chunk-c1fd3524")]).then(E.bind(null, "aff54"))
                    }
                }]
            }, {
                path: B.profit.path,
                component: P["b"],
                redirect: B.profit.memberDayProfit,
                meta: {
                    title: v.profit.mainTitle,
                    icon: "strikethrough",
                    permission: [k["a"].MEMBER_DAY_AGENCY_TEAM_MEMBER_SETTLE_ALL, k["a"].MEMBER_DAY_AGENCY_TEAM_MEMBER_SETTLE_QUERY, k["a"].MEMBER_DAY_AGENCY_TEAM_MEMBER_SETTLE_SUM, k["a"].MEMBER_PROFIT_RECORD_QUERY, k["a"].MEMBER_PROFIT_RECORD_COUNT]
                },
                children: [{
                    name: v.profit.dayQueryEN,
                    meta: {
                        title: v.profit.dayQueryZH,
                        keepAlive: !0,
                        permission: [k["a"].MEMBER_DAY_AGENCY_TEAM_MEMBER_SETTLE_ALL, k["a"].MEMBER_DAY_AGENCY_TEAM_MEMBER_SETTLE_QUERY, k["a"].MEMBER_DAY_AGENCY_TEAM_MEMBER_SETTLE_SUM]
                    },
                    path: B.profit.memberDayProfit,
                    component: function() {
                        return E.e("chunk-7e9455f2").then(E.bind(null, "aea4"))
                    }
                }, {
                    name: v.profit.memberProfitEN,
                    meta: {
                        title: v.profit.memberProfitZH,
                        keepAlive: !0,
                        permission: [k["a"].MEMBER_PROFIT_RECORD_QUERY, k["a"].MEMBER_PROFIT_RECORD_COUNT]
                    },
                    path: B.profit.memberProfitQuery,
                    component: function() {
                        return E.e("chunk-6827bde4").then(E.bind(null, "81ea"))
                    }
                }]
            }, {
                path: B.withdrawal.path,
                component: P["b"],
                redirect: B.withdrawal.accountQuery,
                meta: {
                    title: v.withdrawal.mainTitle,
                    icon: "bank",
                    permission: [k["a"].MEMBER_ACCOUNT_ALL, k["a"].MEMBER_ACCOUNT_QUERY]
                },
                children: [{
                    name: v.withdrawal.accountQueryEN,
                    meta: {
                        title: v.withdrawal.accountQueryZH,
                        keepAlive: !0,
                        permission: [k["a"].MEMBER_ACCOUNT_ALL, k["a"].MEMBER_ACCOUNT_QUERY]
                    },
                    path: B.withdrawal.accountQuery,
                    component: function() {
                        return E.e("chunk-56d29dda").then(E.bind(null, "921f"))
                    }
                }]
            }]
        }, {
            path: "*",
            redirect: "/404",
            hidden: !0
        }], Q = E("6e87"), F = E.n(Q), j = E("2e21"), V = E("3149"), H = E("5696");
        function w() {
            var e = sessionStorage.getItem(h["a"]);
            if (e) {
                var a = "";
                try {
                    a = JSON.parse(e)
                } catch (E) {}
                return a
            }
            return ""
        }
        function q() {
            var e = w();
            return F.a.get(e, "administrator")
        }
        function K() {
            var e, a = w(), t = a.bankPolicyMenu, n = [], c = G["a"][0].children.findIndex((function(e) {
                return "/bankingPolicy" === e.path
            }
            )), _ = G["a"][0].children[c], r = _.children.length;
            _.children = [_.children[r - 1]],
            t && t.length && t.forEach((function(e, a) {
                n.push({
                    path: H["a"].bankingPolicyPage + "_" + a,
                    name: e.id,
                    component: function() {
                        return E("c2e6")("./index_" + a)
                    },
                    meta: {
                        title: e.name,
                        keepAlive: !0,
                        permission: [],
                        url: e.perms
                    }
                })
            }
            )),
            (e = _.children).unshift.apply(e, n),
            G["a"][0].children[c] = _
        }
        function x(e) {
            var a = G["a"][0];
            if (a.children = a.children.filter((function(e) {
                return "卡券中台" != e.meta.title
            }
            )),
            !e.ownerType) {
                var E = a.children.length
                  , t = a.children[E - 1];
                a.children[E - 1] = G["c"],
                a.children[E] = t
            }
        }
        var Z = {
            state: {
                routers: G["b"],
                addRouters: []
            },
            mutations: {
                SET_ROUTERS: function(e, a) {
                    e.addRouters = a,
                    e.routers = G["b"].concat(a)
                }
            },
            actions: {
                GenerateRoutes: function(e) {
                    var a = e.commit;
                    return a("SET_ROUTERS", []),
                    Object(j["b"])([]),
                    new Promise((function(e) {
                        var E = w()
                          , t = [];
                        if (q())
                            t = G["a"],
                            Object(j["b"])(Object.keys(V["b"]));
                        else if ("AGENCY_TEAM" == E.ownerType || "AGENCY_TEAM_MEMBER" == E.ownerType) {
                            var n = E || {}
                              , c = n.roles
                              , _ = void 0 === c ? [] : c
                              , r = n.authorities
                              , i = void 0 === r ? [] : r
                              , A = [];
                            A.push.apply(A, Object(g["a"])(i)),
                            _.forEach((function(e) {
                                var a = e.authorities
                                  , E = void 0 === a ? [] : a;
                                return A.push.apply(A, Object(g["a"])(E))
                            }
                            )),
                            Object(j["b"])(A),
                            t = Object(U["e"])(W)
                        } else {
                            var s = E || {}
                              , u = s.roles
                              , o = void 0 === u ? [] : u
                              , R = s.authorities
                              , d = void 0 === R ? [] : R
                              , T = [];
                            T.push.apply(T, Object(g["a"])(d)),
                            o.forEach((function(e) {
                                var a = e.authorities
                                  , E = void 0 === a ? [] : a;
                                return T.push.apply(T, Object(g["a"])(E))
                            }
                            )),
                            Object(j["b"])(T),
                            K(),
                            x(E),
                            t = Object(U["e"])(G["a"])
                        }
                        a("SET_ROUTERS", t),
                        O["b"].addRoutes(t),
                        e()
                    }
                    ))
                }
            }
        }
          , X = Z
          , z = {
            isMobile: function(e) {
                return e.app.isMobile
            },
            lang: function(e) {
                return e.app.lang
            },
            theme: function(e) {
                return e.app.theme
            },
            color: function(e) {
                return e.app.color
            },
            token: function(e) {
                return e.user.token
            },
            avatar: function(e) {
                return e.user.avatar
            },
            nickname: function(e) {
                return e.user.name
            },
            welcome: function(e) {
                return e.user.welcome
            },
            roles: function(e) {
                return e.user.roles
            },
            userInfo: function(e) {
                return e.user.info
            },
            addRouters: function(e) {
                return e.permission.addRouters
            },
            multiTab: function(e) {
                return e.app.multiTab
            },
            agencyTeamId: function(e) {
                return e.app.agencyTeamId
            },
            keepAlivePages: function(e) {
                return e.app.keepAlivePages
            },
            keepAlivePagesCache: function(e) {
                return e.app.keepAlivePagesCache
            }
        }
          , J = z;
        i["default"].use(I["a"]);
        var $ = new I["a"].Store({
            modules: {
                app: f,
                user: y,
                permission: X
            },
            state: {},
            mutations: {},
            actions: {},
            getters: J
        })
          , ee = E("b775")
          , ae = E("c0d2")
          , Ee = {
            theme: [{
                key: "dark",
                fileName: "dark.css",
                theme: "dark"
            }, {
                key: "#F5222D",
                fileName: "#F5222D.css",
                modifyVars: {
                    "@primary-color": "#F5222D"
                }
            }, {
                key: "#FA541C",
                fileName: "#FA541C.css",
                modifyVars: {
                    "@primary-color": "#FA541C"
                }
            }, {
                key: "#FAAD14",
                fileName: "#FAAD14.css",
                modifyVars: {
                    "@primary-color": "#FAAD14"
                }
            }, {
                key: "#13C2C2",
                fileName: "#13C2C2.css",
                modifyVars: {
                    "@primary-color": "#13C2C2"
                }
            }, {
                key: "#52C41A",
                fileName: "#52C41A.css",
                modifyVars: {
                    "@primary-color": "#52C41A"
                }
            }, {
                key: "#2F54EB",
                fileName: "#2F54EB.css",
                modifyVars: {
                    "@primary-color": "#2F54EB"
                }
            }, {
                key: "#722ED1",
                fileName: "#722ED1.css",
                modifyVars: {
                    "@primary-color": "#722ED1"
                }
            }, {
                key: "#F5222D",
                theme: "dark",
                fileName: "dark-#F5222D.css",
                modifyVars: {
                    "@primary-color": "#F5222D"
                }
            }, {
                key: "#FA541C",
                theme: "dark",
                fileName: "dark-#FA541C.css",
                modifyVars: {
                    "@primary-color": "#FA541C"
                }
            }, {
                key: "#FAAD14",
                theme: "dark",
                fileName: "dark-#FAAD14.css",
                modifyVars: {
                    "@primary-color": "#FAAD14"
                }
            }, {
                key: "#13C2C2",
                theme: "dark",
                fileName: "dark-#13C2C2.css",
                modifyVars: {
                    "@primary-color": "#13C2C2"
                }
            }, {
                key: "#52C41A",
                theme: "dark",
                fileName: "dark-#52C41A.css",
                modifyVars: {
                    "@primary-color": "#52C41A"
                }
            }, {
                key: "#2F54EB",
                theme: "dark",
                fileName: "dark-#2F54EB.css",
                modifyVars: {
                    "@primary-color": "#2F54EB"
                }
            }, {
                key: "#722ED1",
                theme: "dark",
                fileName: "dark-#722ED1.css",
                modifyVars: {
                    "@primary-color": "#722ED1"
                }
            }]
        }
          , te = {
            Login: {
                5101: "用户名或密码错误"
            },
            3005: "只能新增或者编辑下级数据",
            3302: "此条数据正在审核列表中",
            1957: "费率小于上级费率,存在倒挂,请检查费率配置信息",
            1959: "上级费率类型不存在",
            2004: "信息已经在审核中,请不要重复添加",
            agencys: {
                "0000": "请求成功",
                3301: "该服务商已存在",
                3001: "一级服务商，没有上级服务商"
            },
            agencyTeams: {
                3301: "团队编号或名称已存在",
                3001: "创建错误，名称过长"
            },
            agencyActivity: {
                "0000": "操作成功,等待审核",
                3e3: "此条数据正在审核列表中"
            },
            branchOffice: {
                3302: "此条数据正在审核列表中"
            },
            businessRate: {
                3302: "此条数据正在审核列表中"
            },
            activityRule: {
                3e3: "此条数据正在审核列表中"
            },
            systemRole: {
                3001: "权限列表不能为空"
            },
            persistOperator: {
                3005: "只能新增或者编辑自身或者下级分公司的操作员"
            },
            creatProfitRule: {
                3301: "分润业务规则组名称已存在"
            },
            createAgency: {
                3301: "名称已存在"
            }
        };
        function ne() {
            $.commit(h["m"], M.a.get(h["m"], u["a"].layout)),
            $.commit(h["j"], M.a.get(h["j"], u["a"].fixedHeader)),
            $.commit(h["k"], M.a.get(h["k"], u["a"].fixSiderbar)),
            $.commit(h["i"], M.a.get(h["i"], u["a"].contentWidth)),
            $.commit(h["l"], M.a.get(h["l"], u["a"].autoHideHeader)),
            $.commit(h["p"], M.a.get(h["p"], u["a"].navTheme)),
            $.commit(h["q"], M.a.get(h["q"], u["a"].colorWeak)),
            $.commit(h["h"], M.a.get(h["h"], u["a"].primaryColor)),
            $.commit(h["o"], M.a.get(h["o"], u["a"].multiTab)),
            $.commit("SET_TOKEN", M.a.get(h["b"])),
            $.dispatch("setLang", M.a.get(h["c"], "zh-CN"))
        }
        E("dc5a");
        var ce = E("56cd")
          , _e = (E("3b18"),
        E("f64c"))
          , re = (E("5cad"),
        E("7b2d"))
          , ie = (E("ea98"),
        E("1d87"))
          , Ae = (E("bffa"),
        E("6634"))
          , se = (E("e7c6"),
        E("a8ba"))
          , ue = (E("dd98"),
        E("3779"))
          , oe = (E("34c0"),
        E("9fd0"))
          , Re = (E("2a26"),
        E("768f"))
          , de = (E("cc70"),
        E("1fd5"))
          , Te = (E("1273"),
        E("f2ca"))
          , le = (E("eb14"),
        E("39ab"))
          , be = (E("0025"),
        E("27ab"))
          , Ne = (E("9980"),
        E("0bb7"))
          , Ce = (E("55ec"),
        E("a79d"))
          , Oe = (E("b97c"),
        E("7571"))
          , Ie = (E("ab9e"),
        E("2c92"))
          , Le = (E("9a33"),
        E("f933"))
          , me = (E("6d2a"),
        E("9571"))
          , Me = (E("fbd8"),
        E("55f1"))
          , he = (E("7f6b"),
        E("8592"))
          , Se = (E("b380"),
        E("bf7b"))
          , fe = (E("dd48"),
        E("2fc4"))
          , Ye = (E("af3d"),
        E("27fd"))
          , Ue = (E("d88f"),
        E("fe2b"))
          , pe = (E("9d5c"),
        E("a600"))
          , De = (E("5136"),
        E("681b"))
          , ye = (E("4a96"),
        E("a071"))
          , ge = (E("8fb1"),
        E("0c63"))
          , Ge = (E("d13f"),
        E("ccb9"))
          , Pe = (E("c68a"),
        E("0020"))
          , Be = (E("cd17"),
        E("ed3b"))
          , ve = (E("0032"),
        E("e32c"))
          , ke = (E("de6a"),
        E("9a63"))
          , We = (E("288f"),
        E("cdeb"))
          , Qe = (E("cd51"),
        E("fa07"))
          , Fe = (E("3c1f"),
        E("2f50"))
          , je = (E("420d"),
        E("3d8c"))
          , Ve = (E("2ef0f"),
        E("9839"))
          , He = (E("ee00"),
        E("bb76"))
          , we = (E("5783"),
        E("59a5"))
          , qe = (E("fbd6"),
        E("160c"))
          , Ke = (E("6ba6"),
        E("5efb"))
          , xe = (E("922d"),
        E("09d9"))
          , Ze = (E("5704"),
        E("b558"))
          , Xe = (E("1a62"),
        E("98c5"))
          , ze = (E("d2a3"),
        E("4df5"))
          , Je = E("3654")
          , $e = E("7e79")
          , ea = E.n($e)
          , aa = E("1d4b")
          , Ea = E("25da")
          , ta = E("d0af")
          , na = {
            add: {
                key: "add",
                label: "新增"
            },
            delete: {
                key: "delete",
                label: "删除"
            },
            edit: {
                key: "edit",
                label: "修改"
            },
            query: {
                key: "query",
                label: "查询"
            },
            get: {
                key: "get",
                label: "详情"
            },
            enable: {
                key: "enable",
                label: "启用"
            },
            disable: {
                key: "disable",
                label: "禁用"
            },
            import: {
                key: "import",
                label: "导入"
            },
            export: {
                key: "export",
                label: "导出"
            }
        };
        function ca(e) {
            ca.installed || (!e.prototype.$auth && Object.defineProperties(e.prototype, {
                $auth: {
                    get: function() {
                        var e = this;
                        return function(a) {
                            var E = a.split(".")
                              , t = Object(ta["a"])(E, 2)
                              , n = t[0]
                              , c = t[1]
                              , _ = e.$store.getters.roles.permissions;
                            return _.find((function(e) {
                                return e.permissionId === n
                            }
                            )).actionList.findIndex((function(e) {
                                return e === c
                            }
                            )) > -1
                        }
                    }
                }
            }),
            !e.prototype.$enum && Object.defineProperties(e.prototype, {
                $enum: {
                    get: function() {
                        return function(e) {
                            var a = na;
                            return e && e.split(".").forEach((function(e) {
                                a = a && a[e] || null
                            }
                            )),
                            a
                        }
                    }
                }
            }))
        }
        var _a = ca;
        i["default"].directive("action", {
            inserted: function(e, a, E) {
                a.arg
            }
        });
        i["default"].use(ze["a"]),
        i["default"].use(Xe["a"]),
        i["default"].use(Ze["a"]),
        i["default"].use(xe["a"]),
        i["default"].use(Ke["a"]),
        i["default"].use(qe["a"]),
        i["default"].use(we["a"]),
        i["default"].use(He["a"]),
        i["default"].use(Ve["b"]),
        i["default"].use(je["a"]),
        i["default"].use(Fe["a"]),
        i["default"].use(Qe["a"]),
        i["default"].use(We["a"]),
        i["default"].use(n["a"]),
        i["default"].use(ke["a"]),
        i["default"].use(ve["a"]),
        i["default"].use(Be["a"]),
        i["default"].use(Pe["a"]),
        i["default"].use(Ge["a"]),
        i["default"].use(ge["a"]),
        i["default"].use(ye["a"]),
        i["default"].use(De["a"]),
        i["default"].use(pe["a"]),
        i["default"].use(Ue["b"]),
        i["default"].use(Ye["a"]),
        i["default"].use(fe["a"]),
        i["default"].use(Se["a"]),
        i["default"].use(he["a"]),
        i["default"].use(Me["a"]),
        i["default"].use(me["a"]),
        i["default"].use(Le["a"]),
        i["default"].use(Ie["a"]),
        i["default"].use(Oe["a"]),
        i["default"].use(Ce["a"]),
        i["default"].use(Ne["a"]),
        i["default"].use(be["a"]),
        i["default"].use(le["a"]),
        i["default"].use(Te["a"]),
        i["default"].use(de["a"]),
        i["default"].use(Re["a"]),
        i["default"].use(oe["b"]),
        i["default"].use(ue["a"]),
        i["default"].use(se["a"]),
        i["default"].use(Ae["a"]),
        i["default"].use(ie["a"]),
        i["default"].use(re["a"]),
        i["default"].prototype.$confirm = Be["a"].confirm,
        i["default"].prototype.$message = _e["a"],
        i["default"].prototype.$notification = ce["a"],
        i["default"].prototype.$info = Be["a"].info,
        i["default"].prototype.$success = Be["a"].success,
        i["default"].prototype.$error = Be["a"].error,
        i["default"].prototype.$warning = Be["a"].warning,
        i["default"].use(Je["a"]),
        i["default"].use(aa["a"]),
        i["default"].use(Ea["b"]),
        i["default"].use(_a),
        i["default"].use(ea.a);
        var ra = E("323e")
          , ia = E.n(ra)
          , Aa = (E("fddb"),
        E("bc3a"))
          , sa = E.n(Aa)
          , ua = function() {
            if ("agencon.ysepay.com" == window.location.host) {
                var e = "json/version.json?t=".concat((new Date).getTime());
                sa.a.get(e).then((function(e) {
                    if (200 === e.status) {
                        var a = e.data.version
                          , E = localStorage.getItem("YS_HTK_VERSIOIN");
                        if (E && E != a)
                            return localStorage.setItem("YS_HTK_VERSIOIN", a),
                            void window.location.reload(!0);
                        localStorage.setItem("YS_HTK_VERSIOIN", a)
                    }
                }
                ))
            }
        }
          , oa = {
            isNewVersion: ua
        };
        ia.a.configure({
            showSpinner: !1
        });
        var Ra = ["login", "register", "registerResult", "forget"]
          , da = "/user/login"
          , Ta = H["a"].branchOffice.path;
        $.dispatch("GenerateRoutes"),
        O["a"].beforeEach((function(e, a, E) {
            oa.isNewVersion(),
            ia.a.start(),
            e.meta && "undefined" !== typeof e.meta.title && o("".concat(Object(d["b"])(e.meta.title), " - ").concat(R)),
            "login" === e.name && o("".concat(R)),
            sessionStorage.getItem(h["a"]) ? e.path === da ? (E({
                path: Ta
            }),
            ia.a.done()) : E() : Ra.includes(e.name) ? E() : (E({
                path: da,
                query: {
                    redirect: e.fullPath
                }
            }),
            ia.a.done())
        }
        )),
        O["a"].afterEach((function(e) {
            ia.a.done()
        }
        ));
        E("7f08");
        var la = {
            install: function(e) {
                e.prototype.hasPower = function(e, a) {
                    var E = !1;
                    return a.forEach((function(a, t) {
                        a.url === e && (E = !0)
                    }
                    )),
                    E
                }
                ,
                e.prototype.initPassPlug = function(e, a, E) {
                    var t, n;
                    a && (t = a[0],
                    n = a[1]);
                    var c = new pge({
                        pgePath: "https://newportal.ysepay.com/agent/ocx/",
                        pgeId: e,
                        pgeEditType: 0,
                        pgeEreg1: "[\\s\\S]*",
                        pgeEreg2: "[0-9a-zA-Z]{6,12}",
                        pgeMaxLength: 20,
                        placeHoder: E || "",
                        pgeTabIndex: 2,
                        pgeClass: "el-input__inner",
                        pgeInstallClass: "el-input__inner",
                        pgeOnKeyDown: "",
                        tabCallBack: "",
                        pgeOnFocus: "",
                        pgeOnBlur: "",
                        AffineX: "62eec27b4e8d405b1074d62b95ee188c71e48cb12f1aba6102ba5c430c6d8d71",
                        AffineY: "890a76f2fc732387d106860f502007e1b2eca2ee60e65df84021bfcfc7c0b747",
                        pgeWindowID: "password" + (new Date).getTime() + e,
                        pgeRZRandNum: t,
                        pgeRZDataB: n
                    });
                    return window.pgeCtrl = c,
                    c
                }
                ,
                e.prototype.trimPass = function(e) {
                    return e.replace(/(^\s*)|(\s*$)/g, "")
                }
                ,
                e.prototype.isHasJson = function(e) {
                    var a = Object.keys(e);
                    return 0 !== a.length
                }
            }
        }
          , ba = E("cd1a")
          , Na = E("a8ca")
          , Ca = (E("861f"),
        E("6944"))
          , Oa = E.n(Ca);
        E("0808");
        i["default"].use(_["a"]),
        i["default"].prototype.$bus = new i["default"],
        i["default"].use(ba["a"], {
            locale: "en-gb"
        }),
        i["default"].prototype.$numeral = E("6612"),
        Object(r["b"])(te),
        i["default"].config.productionTip = !1,
        i["default"].use(ee["a"]),
        i["default"].use(la),
        i["default"].component("pro-layout", ae["d"]),
        i["default"].component("page-container", ae["b"]),
        i["default"].component("page-header-wrapper", ae["b"]),
        i["default"].component("BigSelect", Na["a"]),
        i["default"].use(n["a"]).use(c["a"]),
        window.umi_plugin_ant_themeVar = Ee.theme,
        i["default"].prototype.$auth_member = k["a"],
        i["default"].use(Oa.a),
        new i["default"]({
            router: O["a"],
            store: $,
            i18n: d["a"],
            created: ne,
            render: function(e) {
                return e(C)
            }
        }).$mount("#app")
    },
    "5dd5": function(e, a, E) {
        "use strict";
        E.r(a),
        a["default"] = {
            "dashboard.analysis.test": "工专路 {no} 号店",
            "dashboard.analysis.introduce": "指标说明",
            "dashboard.analysis.total-sales": "总销售额",
            "dashboard.analysis.day-sales": "日均销售额￥",
            "dashboard.analysis.visits": "访问量",
            "dashboard.analysis.visits-trend": "访问量趋势",
            "dashboard.analysis.visits-ranking": "门店访问量排名",
            "dashboard.analysis.day-visits": "日访问量",
            "dashboard.analysis.week": "周同比",
            "dashboard.analysis.day": "日同比",
            "dashboard.analysis.payments": "支付笔数",
            "dashboard.analysis.conversion-rate": "转化率",
            "dashboard.analysis.operational-effect": "运营活动效果",
            "dashboard.analysis.sales-trend": "销售趋势",
            "dashboard.analysis.sales-ranking": "门店销售额排名",
            "dashboard.analysis.all-year": "全年",
            "dashboard.analysis.all-month": "本月",
            "dashboard.analysis.all-week": "本周",
            "dashboard.analysis.all-day": "今日",
            "dashboard.analysis.search-users": "搜索用户数",
            "dashboard.analysis.per-capita-search": "人均搜索次数",
            "dashboard.analysis.online-top-search": "线上热门搜索",
            "dashboard.analysis.the-proportion-of-sales": "销售额类别占比",
            "dashboard.analysis.dropdown-option-one": "操作一",
            "dashboard.analysis.dropdown-option-two": "操作二",
            "dashboard.analysis.channel.all": "全部渠道",
            "dashboard.analysis.channel.online": "线上",
            "dashboard.analysis.channel.stores": "门店",
            "dashboard.analysis.sales": "销售额",
            "dashboard.analysis.traffic": "客流量",
            "dashboard.analysis.table.rank": "排名",
            "dashboard.analysis.table.search-keyword": "搜索关键词",
            "dashboard.analysis.table.users": "用户数",
            "dashboard.analysis.table.weekly-range": "周涨幅"
        }
    },
    "63ca": function(e, a, E) {},
    6692: function(e, a, E) {
        "use strict";
        E("63ca")
    },
    "680a": function(e, a, E) {
        "use strict";
        E.d(a, "c", (function() {
            return o
        }
        )),
        E.d(a, "a", (function() {
            return se
        }
        )),
        E.d(a, "b", (function() {
            return de
        }
        ));
        var t, n, c = function() {
            var e = this
              , a = e.$createElement
              , t = e._self._c || a;
            return t("div", {
                class: ["user-layout-wrapper", e.isMobile && "mobile"],
                attrs: {
                    id: "userLayout"
                }
            }, [t("div", {
                staticClass: "container"
            }, [t("div", {
                staticClass: "user-layout-content"
            }, [t("div", {
                staticClass: "top"
            }, [t("div", {
                staticClass: "header"
            }, [t("a", {
                attrs: {
                    href: "/"
                }
            }, [t("img", {
                staticClass: "logo",
                attrs: {
                    src: E("ba3c"),
                    alt: "logo"
                }
            }), t("span", {
                staticClass: "title"
            }, [e._v(" " + e._s(e.$t("platform.name")) + " ")])])]), t("div", {
                staticClass: "desc"
            }, [e._v(" " + e._s(e.$t("layouts.userLayout.title")) + " ")])]), t("router-view"), e._m(0)], 1)])])
        }, _ = [function() {
            var e = this
              , a = e.$createElement
              , E = e._self._c || a;
            return E("div", {
                staticClass: "footer"
            }, [E("div", {
                staticClass: "copyright"
            }, [e._v(" 2009 - 2023.银盛支付服务股份有限公司版权所有 ")])])
        }
        ], r = E("705f"), i = {
            name: "UserLayout",
            mixins: [r["a"]],
            mounted: function() {
                document.body.classList.add("userLayout")
            },
            beforeDestroy: function() {
                document.body.classList.remove("userLayout")
            }
        }, A = i, s = (E("f5a0"),
        E("2877")), u = Object(s["a"])(A, c, _, !1, null, "ad3c6b34", null), o = u.exports, R = function() {
            var e = this
              , a = e.$createElement
              , E = e._self._c || a;
            return E("div", [E("router-view")], 1)
        }, d = [], T = {
            name: "BlankLayout"
        }, l = T, b = Object(s["a"])(l, R, d, !1, null, "7f25f9eb", null), N = (b.exports,
        function() {
            var e = this
              , a = e.$createElement
              , t = e._self._c || a;
            return t("pro-layout", e._b({
                attrs: {
                    menus: e.menus,
                    collapsed: e.collapsed,
                    mediaQuery: e.query,
                    isMobile: e.isMobile,
                    handleMediaQuery: e.handleMediaQuery,
                    handleCollapse: e.handleCollapse,
                    i18nRender: e.i18nRender,
                    "sider-width": 216
                },
                scopedSlots: e._u([{
                    key: "menuHeaderRender",
                    fn: function() {
                        return [t("div", [t("img", {
                            attrs: {
                                src: E("498c"),
                                alt: "会拓客"
                            }
                        }), t("h1", [e._v(e._s(e.title))])])]
                    },
                    proxy: !0
                }, {
                    key: "headerContentRender",
                    fn: function() {},
                    proxy: !0
                }, {
                    key: "rightContentRender",
                    fn: function() {
                        return [t("right-content", {
                            attrs: {
                                "top-menu": "topmenu" === e.settings.layout,
                                "is-mobile": e.isMobile,
                                theme: e.settings.theme
                            }
                        })]
                    },
                    proxy: !0
                }, {
                    key: "footerRender",
                    fn: function() {
                        return [t("global-footer")]
                    },
                    proxy: !0
                }])
            }, "pro-layout", e.settings, !1), [t("a-layout-content", {
                style: {
                    height: "100%",
                    margin: "0 0 40px 0",
                    paddingTop: e.fixedHeader ? "64px" : "0"
                }
            }, [e.multiTab ? t("multi-tab") : e._e(), t("transition", {
                attrs: {
                    name: "page-transition"
                }
            })], 1), e.isProPreviewSite ? t("setting-drawer", {
                attrs: {
                    settings: e.settings
                },
                on: {
                    change: e.handleSettingChange
                }
            }, [t("div", {
                staticStyle: {
                    margin: "12px 0"
                }
            }, [e._v(" This is SettingDrawer custom footer content. ")])]) : e._e(), t("keep-alive", [e.$route.meta.keepAlive ? t("router-view") : e._e()], 1), e.$route.meta.keepAlive ? e._e() : t("router-view")], 1)
        }
        ), C = [], O = E("f3f3"), I = (E("7db0"),
        E("2b0e")), L = new I["default"], m = (E("b0c0"),
        E("4de4"),
        E("caad"),
        E("2532"),
        E("159b"),
        E("d81d"),
        {
            name: "MultiTab",
            data: function() {
                return {
                    fullPathList: [],
                    pages: [],
                    activeKey: "",
                    newTabIndex: 0
                }
            },
            created: function() {
                var e = this;
                L.$on("open", (function(a) {
                    if (!a)
                        throw new Error("multi-tab: open tab ".concat(a, " err"));
                    e.activeKey = a
                }
                )).$on("close", (function(a) {
                    a ? e.closeThat(a) : e.closeThat(e.activeKey)
                }
                )).$on("rename", (function(a) {
                    var E = a.key
                      , t = a.name;
                    try {
                        var n = e.pages.find((function(e) {
                            return e.path === E
                        }
                        ));
                        n.meta.customTitle = t,
                        e.$forceUpdate()
                    } catch (c) {}
                }
                )),
                this.pages.push(this.$route),
                this.fullPathList.push(this.$route.fullPath),
                this.selectedLastPath()
            },
            methods: {
                onEdit: function(e, a) {
                    this[a](e)
                },
                remove: function(e) {
                    this.$store.commit("DEL_KEEP_ALIVE_PAGE", e),
                    this.pages = this.pages.filter((function(a) {
                        return a.fullPath !== e
                    }
                    )),
                    this.fullPathList = this.fullPathList.filter((function(a) {
                        return a !== e
                    }
                    )),
                    this.fullPathList.includes(this.activeKey) || this.selectedLastPath()
                },
                selectedLastPath: function() {
                    this.activeKey = this.fullPathList[this.fullPathList.length - 1]
                },
                closeThat: function(e) {
                    this.fullPathList.length > 1 ? this.remove(e) : this.$message.info("这是最后一个标签了, 无法被关闭")
                },
                closeLeft: function(e) {
                    var a = this
                      , E = this.fullPathList.indexOf(e);
                    E > 0 ? this.fullPathList.forEach((function(e, t) {
                        t < E && a.remove(e)
                    }
                    )) : this.$message.info("左侧没有标签")
                },
                closeRight: function(e) {
                    var a = this
                      , E = this.fullPathList.indexOf(e);
                    E < this.fullPathList.length - 1 ? this.fullPathList.forEach((function(e, t) {
                        t > E && a.remove(e)
                    }
                    )) : this.$message.info("右侧没有标签")
                },
                closeAll: function(e) {
                    var a = this
                      , E = this.fullPathList.indexOf(e);
                    this.fullPathList.forEach((function(e, t) {
                        t !== E && a.remove(e)
                    }
                    ))
                },
                closeMenuClick: function(e, a) {
                    this[e](a)
                },
                renderTabPaneMenu: function(e) {
                    var a = this
                      , E = this.$createElement;
                    return E("a-menu", {
                        on: Object(O["a"])({}, {
                            click: function(E) {
                                var t = E.key;
                                E.item,
                                E.domEvent;
                                a.closeMenuClick(t, e)
                            }
                        })
                    }, [E("a-menu-item", {
                        key: "closeThat"
                    }, ["关闭当前标签"])])
                },
                renderTabPane: function(e, a) {
                    var E = this.$createElement
                      , t = this.renderTabPaneMenu(a);
                    return E("a-dropdown", {
                        attrs: {
                            overlay: t,
                            trigger: ["contextmenu"]
                        }
                    }, [E("span", {
                        style: {
                            userSelect: "none"
                        }
                    }, [e])])
                }
            },
            watch: {
                $route: function(e) {
                    this.activeKey = e.fullPath,
                    this.fullPathList.indexOf(e.fullPath) < 0 && (this.fullPathList.push(e.fullPath),
                    this.pages.push(e))
                },
                activeKey: function(e) {
                    this.$router.push({
                        path: e
                    })
                }
            },
            render: function() {
                var e = this
                  , a = arguments[0]
                  , E = this.onEdit
                  , t = this.$data.pages
                  , n = t.map((function(E) {
                    return a("a-tab-pane", {
                        style: {
                            height: 0
                        },
                        attrs: {
                            tab: e.renderTabPane(E.meta.customTitle || E.meta.title, E.fullPath),
                            closable: t.length > 1
                        },
                        key: E.fullPath
                    })
                }
                ));
                return a("div", {
                    class: "ant-pro-multi-tab"
                }, [a("div", {
                    class: "ant-pro-multi-tab-wrapper"
                }, [a("a-tabs", {
                    attrs: {
                        hideAdd: !0,
                        type: "editable-card",
                        tabBarStyle: {
                            background: "#FFF",
                            margin: 0,
                            paddingLeft: "16px",
                            paddingTop: "1px"
                        }
                    },
                    on: Object(O["a"])({}, {
                        edit: E
                    }),
                    model: {
                        value: e.activeKey,
                        callback: function(a) {
                            e.activeKey = a
                        }
                    }
                }, [n])])])
            }
        }), M = m, h = Object(s["a"])(M, t, n, !1, null, null, null), S = h.exports, f = (E("3489"),
        {
            open: function(e) {
                L.$emit("open", e)
            },
            rename: function(e, a) {
                L.$emit("rename", {
                    key: e,
                    name: a
                })
            },
            closeCurrentPage: function() {
                this.close()
            },
            close: function(e) {
                L.$emit("close", e)
            }
        });
        S.install = function(e) {
            e.prototype.$multiTab || (f.instance = L,
            e.prototype.$multiTab = f,
            e.component("multi-tab", S))
        }
        ;
        var Y, U, p = S, D = E("c0d2"), y = E("bf0f"), g = E("2f62"), G = E("9fb0"), P = E("7bdf"), B = function() {
            var e = this
              , a = e.$createElement
              , E = e._self._c || a;
            return E("div", {
                class: e.wrpCls
            }, [E("avatar-dropdown", {
                class: e.prefixCls,
                attrs: {
                    menu: e.showMenu,
                    userInfo: e.userInfo
                }
            })], 1)
        }, v = [], k = E("fc11"), W = function() {
            var e = this
              , a = e.$createElement
              , E = e._self._c || a;
            return e.userInfo ? E("a-dropdown", {
                attrs: {
                    placement: "bottomRight"
                },
                scopedSlots: e._u([{
                    key: "overlay",
                    fn: function() {
                        return [E("a-menu", {
                            staticClass: "ant-pro-drop-down menu",
                            attrs: {
                                "selected-keys": []
                            }
                        }, [e.menu ? E("a-menu-divider") : e._e(), E("a-menu-item", {
                            key: "logout",
                            on: {
                                click: e.handleLogout
                            }
                        }, [E("a-icon", {
                            attrs: {
                                type: "logout"
                            }
                        }), e._v(" " + e._s(e.$t("menu.account.logout")) + " ")], 1), E("a-menu-item", {
                            key: "password",
                            on: {
                                click: e.handleChangePsd
                            }
                        }, [E("a-icon", {
                            attrs: {
                                type: "lock"
                            }
                        }), e._v(" " + e._s(e.$t("menu.account.change-psd")) + " ")], 1)], 1)]
                    },
                    proxy: !0
                }], null, !1, 1680094744)
            }, [E("span", {
                staticClass: "ant-pro-account-avatar"
            }, [E("a-avatar", {
                staticClass: "antd-pro-global-header-index-avatar",
                attrs: {
                    size: "small",
                    src: "https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png"
                }
            }), E("span", [e._v(e._s(e.userInfo.nameMask))])], 1)]) : E("span", [E("a-spin", {
                style: {
                    marginLeft: 8,
                    marginRight: 8
                },
                attrs: {
                    size: "small"
                }
            })], 1)
        }, Q = [], F = (E("cd17"),
        E("ed3b")), j = E("3149"), V = E("2e21"), H = {
            name: "AvatarDropdown",
            props: {
                menu: {
                    type: Boolean,
                    default: !0
                },
                userInfo: {
                    type: Object,
                    default: function() {
                        return null
                    }
                }
            },
            data: function() {
                return {
                    changePsdAuthorities: [j["b"].USER_CHANGE_PASSWORD]
                }
            },
            methods: {
                authGuard: function(e) {
                    return Object(V["a"])(e)
                },
                handleToCenter: function() {
                    this.$router.push({
                        path: "/account/center"
                    })
                },
                handleToSettings: function() {
                    this.$router.push({
                        path: "/account/settings"
                    })
                },
                handleChangePsd: function() {
                    this.$router.push({
                        path: "/user/changePsd"
                    })
                },
                handleChangePhone: function() {
                    this.$router.push({
                        path: "/user/changePhone"
                    })
                },
                handleLogout: function(e) {
                    var a = this;
                    F["a"].confirm({
                        title: this.$t("layouts.usermenu.dialog.title"),
                        content: this.$t("layouts.usermenu.dialog.content"),
                        onOk: function() {
                            a.$store.dispatch("Logout")
                        },
                        onCancel: function() {}
                    })
                }
            }
        }, w = H, q = (E("8831"),
        Object(s["a"])(w, W, Q, !1, null, "3e6ad2f1", null)), K = q.exports, x = E("b899"), Z = {
            name: "RightContent",
            components: {
                AvatarDropdown: K
            },
            props: {
                prefixCls: {
                    type: String,
                    default: "ant-pro-global-header-index-action"
                },
                isMobile: {
                    type: Boolean,
                    default: function() {
                        return !1
                    }
                },
                topMenu: {
                    type: Boolean,
                    required: !0
                },
                theme: {
                    type: String,
                    required: !0
                }
            },
            data: function() {
                return {
                    showMenu: !0,
                    userInfo: {}
                }
            },
            computed: {
                wrpCls: function() {
                    return Object(k["a"])({
                        "ant-pro-global-header-index-right": !0
                    }, "ant-pro-global-header-index-".concat(this.isMobile || !this.topMenu ? "light" : this.theme), !0)
                }
            },
            mounted: function() {
                var e = this;
                setTimeout((function() {
                    var a = Object(x["a"])();
                    a.nameMask;
                    e.userInfo = a
                }
                ), 500)
            }
        }, X = Z, z = Object(s["a"])(X, B, v, !1, null, null, null), J = z.exports, $ = function() {
            var e = this
              , a = e.$createElement
              , E = e._self._c || a;
            return E("global-footer", {
                staticClass: "footer custom-render",
                scopedSlots: e._u([{
                    key: "links",
                    fn: function() {
                        return [E("p", [e._v("2009 - 2023.银盛支付服务股份有限公司版权所有")])]
                    },
                    proxy: !0
                }])
            })
        }, ee = [], ae = {
            name: "ProGlobalFooter",
            components: {
                GlobalFooter: D["a"]
            }
        }, Ee = ae, te = (E("19d4"),
        Object(s["a"])(Ee, $, ee, !1, null, "0b6ffa56", null)), ne = te.exports, ce = E("8eeb4"), _e = E.n(ce), re = {
            name: "BasicLayout",
            components: {
                SettingDrawer: D["c"],
                RightContent: J,
                GlobalFooter: ne,
                LogoSvg: _e.a,
                MultiTab: p
            },
            data: function() {
                return {
                    isProPreviewSite: !1,
                    multiTab: P["a"].multiTab,
                    fixedHeader: P["a"].fixedHeader,
                    menus: [],
                    collapsed: !1,
                    title: P["a"].title,
                    settings: {
                        layout: P["a"].layout,
                        contentWidth: "sidemenu" === P["a"].layout ? G["d"].Fluid : P["a"].contentWidth,
                        theme: P["a"].navTheme,
                        primaryColor: P["a"].primaryColor,
                        fixedHeader: P["a"].fixedHeader,
                        fixSiderbar: P["a"].fixSiderbar,
                        colorWeak: P["a"].colorWeak,
                        hideHintAlert: !1,
                        hideCopyButton: !1
                    },
                    query: {},
                    isMobile: !1
                }
            },
            computed: Object(O["a"])({}, Object(g["c"])({
                mainMenu: function(e) {
                    return e.permission.addRouters
                },
                userInfo: function(e) {
                    return e.user.info
                }
            })),
            created: function() {
                var e = this
                  , a = this.mainMenu.find((function(e) {
                    return "/" === e.path
                }
                ));
                this.menus = a && a.children || [],
                this.$watch("collapsed", (function() {
                    e.$store.commit(G["g"], e.collapsed)
                }
                )),
                this.$watch("isMobile", (function() {
                    e.$store.commit(G["n"], e.isMobile)
                }
                ))
            },
            mounted: function() {
                var e = this
                  , a = navigator.userAgent;
                a.indexOf("Edge") > -1 && this.$nextTick((function() {
                    e.collapsed = !e.collapsed,
                    setTimeout((function() {
                        e.collapsed = !e.collapsed
                    }
                    ), 16)
                }
                )),
                this.hideBankingPolicyMenu()
            },
            methods: {
                i18nRender: y["b"],
                handleMediaQuery: function(e) {
                    this.query = e,
                    !this.isMobile || e["screen-xs"] ? !this.isMobile && e["screen-xs"] && (this.isMobile = !0,
                    this.collapsed = !1,
                    this.settings.contentWidth = G["d"].Fluid) : this.isMobile = !1
                },
                handleCollapse: function(e) {
                    this.collapsed = e
                },
                handleSettingChange: function(e) {
                    var a = e.type
                      , E = e.value;
                    switch (a && (this.settings[a] = E),
                    a) {
                    case "contentWidth":
                        this.settings[a] = E;
                        break;
                    case "layout":
                        "sidemenu" === E ? this.settings.contentWidth = G["d"].Fluid : (this.settings.fixSiderbar = !1,
                        this.settings.contentWidth = G["d"].Fixed);
                        break
                    }
                },
                hideBankingPolicyMenu: function() {
                    var e = [j["b"].SYSTEM_AUTH_ALL, j["b"].SYSTEM_AUTH_QUERY, j["b"].SYSTEM_AUTH_CREATE, j["b"].SYSTEM_AUTH_UPDATE]
                      , a = this.userInfo.bankPolicyMenu
                      , E = !(a && a.length || Object(V["a"])(e));
                    if (E) {
                        var t = document.querySelectorAll(".ant-menu li");
                        for (var n in t)
                            if ("银行政策管理" === t[n].innerText)
                                return void (t[n].style.display = "none")
                    }
                }
            }
        }, ie = re, Ae = (E("6692"),
        Object(s["a"])(ie, N, C, !1, null, null, null)), se = Ae.exports, ue = {
            name: "RouteView",
            props: {
                keepAlive: {
                    type: Boolean,
                    default: !0
                }
            },
            data: function() {
                return {}
            },
            computed: Object(O["a"])({}, Object(g["c"])({
                keepAlivePages: function(e) {
                    return e.app.keepAlivePages
                }
            })),
            render: function() {
                var e = arguments[0]
                  , a = this.$route
                  , E = a.meta
                  , t = (a.path,
                this.$store.getters)
                  , n = e("keep-alive", [e("router-view")])
                  , c = e("router-view");
                return (t.multiTab || E.keepAlive) && (this.keepAlive || t.multiTab || E.keepAlive) ? n : c
            }
        }, oe = ue, Re = Object(s["a"])(oe, Y, U, !1, null, null, null), de = Re.exports, Te = function() {
            var e = this
              , a = e.$createElement
              , E = e._self._c || a;
            return E("page-header-wrapper", [E("router-view")], 1)
        }, le = [], be = {
            name: "PageView"
        }, Ne = be, Ce = Object(s["a"])(Ne, Te, le, !1, null, null, null);
        Ce.exports
    },
    "6b9c": function(e, a, E) {},
    "705f": function(e, a, E) {
        "use strict";
        E.d(a, "a", (function() {
            return c
        }
        ));
        var t = E("f3f3")
          , n = E("2f62")
          , c = {
            computed: Object(t["a"])({}, Object(n["c"])({
                isMobile: function(e) {
                    return e.app.isMobile
                }
            }))
        }
    },
    "72a1": function(e, a, E) {
        "use strict";
        E.d(a, "a", (function() {
            return r
        }
        ));
        var t = E("276c")
          , n = E("e954")
          , c = (E("d81d"),
        E("159b"),
        E("b64b"),
        E("5319"),
        E("ac1f"),
        E("d3b7"),
        E("25f0"),
        E("1276"),
        E("a15b"),
        E("6e87"));
        function _(e, a) {
            return void 0 === e || null === e ? a : e
        }
        var r = function() {
            function e() {
                Object(t["a"])(this, e)
            }
            return Object(n["a"])(e, null, [{
                key: "getValue",
                value: function(e, a) {
                    var E = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "-";
                    return Array.isArray(a) ? a.map((function(a) {
                        return _(c["get"](e, a), E)
                    }
                    )) : _(c["get"](e, a), E)
                }
            }, {
                key: "setValue",
                value: function(e, a, E) {
                    c["set"](e, a, E)
                }
            }, {
                key: "delValue",
                value: function(e, a) {
                    c["del"](e, a)
                }
            }, {
                key: "removeNonValue",
                value: function(e) {
                    var a = {};
                    return Object.keys(e).forEach((function(E) {
                        0 !== e[E] && !e[E] || "" === e[E].toString().replace(/(^\s*)|(\s*$)/g, "") || (a[E] = e[E])
                    }
                    )),
                    a
                }
            }, {
                key: "getMultValue",
                value: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
                      , a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ""
                      , E = [];
                    return a && (a = a.split(","),
                    a.map((function(a) {
                        E.push(e[a])
                    }
                    ))),
                    E.join(",")
                }
            }]),
            e
        }()
    },
    "7bdf": function(e, a, E) {
        "use strict";
        a["a"] = {
            navTheme: "dark",
            primaryColor: "#F5222D",
            layout: "sidemenu",
            contentWidth: "Fluid",
            fixedHeader: !1,
            fixSiderbar: !1,
            colorWeak: !1,
            multiTab: !0,
            menu: {
                locale: !0
            },
            title: "会拓客",
            pwa: !1,
            iconfontUrl: "",
            production: !0
        }
    },
    "7ded": function(e, a, E) {
        "use strict";
        E.d(a, "b", (function() {
            return c
        }
        )),
        E.d(a, "a", (function() {
            return _
        }
        )),
        E.d(a, "c", (function() {
            return r
        }
        ));
        var t = E("b775")
          , n = E("285e");
        function c(e) {
            return Object(t["b"])({
                url: n["a"].loginForm,
                method: "post",
                data: e,
                successTip: !1
            })
        }
        function _(e) {
            return Object(t["b"])({
                url: n["a"].changePsd,
                method: "post",
                data: e
            })
        }
        function r() {
            return sessionStorage.clear(),
            Object(t["b"])({
                url: n["a"].logout_2_0,
                method: "get"
            })
        }
    },
    "7f08": function(e, a, E) {
        "use strict";
        E("4de4"),
        E("5319"),
        E("ac1f"),
        E("d3b7"),
        E("25f0");
        var t = E("2b0e")
          , n = E("c1df")
          , c = E.n(n)
          , _ = (E("5c3a"),
        E("6612"))
          , r = E.n(_);
        c.a.locale("zh-cn"),
        t["default"].filter("NumberFormat", (function(e) {
            if (!e)
                return "0";
            var a = e.toString().replace(/(\d)(?=(?:\d{3})+$)/g, "$1,");
            return a
        }
        )),
        t["default"].filter("dayjs", (function(e) {
            var a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "YYYY-MM-DD HH:mm:ss";
            return e && c()(e).format(a)
        }
        )),
        t["default"].filter("moment", (function(e) {
            var a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "YYYY-MM-DD HH:mm:ss";
            return e && c()(e).format(a)
        }
        )),
        t["default"].filter("to_date", (function(e) {
            var a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "YYYY-MM-DD";
            return e && c()(e).format(a)
        }
        )),
        t["default"].filter("amount2substring", (function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0
              , a = String(e)
              , E = a.indexOf(".");
            if (-1 === E)
                return r()(a).format("0,00.00");
            var t = a.substring(0, a.indexOf(".") + 3);
            return r()(t).format("0,00.00")
        }
        )),
        t["default"].filter("timeToMonth", (function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
            return e ? e.replace(/^(\d{4})(\d{2})$/, "$1-$2") : ""
        }
        ))
    },
    8176: function(e, a, E) {
        "use strict";
        E.r(a);
        var t = E("f3f3")
          , n = E("4fd4")
          , c = E("d5c8");
        a["default"] = Object(t["a"])(Object(t["a"])({}, n["default"]), c["default"])
    },
    "861f": function(e, a, E) {},
    8831: function(e, a, E) {
        "use strict";
        E("6b9c")
    },
    "8eeb4": function(e, a, E) {
        var t = E("b2b7");
        e.exports = {
            __esModule: !0,
            default: t.svgComponent({
                tag: "svg",
                attrsMap: {
                    viewBox: "0 0 128 128",
                    version: "1.1",
                    xmlns: "http://www.w3.org/2000/svg",
                    "xmlns:xlink": "http://www.w3.org/1999/xlink"
                },
                children: [{
                    tag: "title",
                    children: [{
                        text: "Vue"
                    }]
                }, {
                    tag: "desc",
                    children: [{
                        text: "Created with Sketch."
                    }]
                }, {
                    tag: "defs",
                    children: [{
                        tag: "linearGradient",
                        attrsMap: {
                            x1: "69.644116%",
                            y1: "0%",
                            x2: "69.644116%",
                            y2: "100%",
                            id: "linearGradient-1"
                        },
                        children: [{
                            tag: "stop",
                            attrsMap: {
                                "stop-color": "#29CDFF",
                                offset: "0%"
                            }
                        }, {
                            tag: "stop",
                            attrsMap: {
                                "stop-color": "#148EFF",
                                offset: "37.8600687%"
                            }
                        }, {
                            tag: "stop",
                            attrsMap: {
                                "stop-color": "#0A60FF",
                                offset: "100%"
                            }
                        }]
                    }, {
                        tag: "linearGradient",
                        attrsMap: {
                            x1: "-19.8191553%",
                            y1: "-36.7931464%",
                            x2: "138.57919%",
                            y2: "157.637507%",
                            id: "linearGradient-2"
                        },
                        children: [{
                            tag: "stop",
                            attrsMap: {
                                "stop-color": "#29CDFF",
                                offset: "0%"
                            }
                        }, {
                            tag: "stop",
                            attrsMap: {
                                "stop-color": "#0F78FF",
                                offset: "100%"
                            }
                        }]
                    }, {
                        tag: "linearGradient",
                        attrsMap: {
                            x1: "68.1279872%",
                            y1: "-35.6905737%",
                            x2: "30.4400914%",
                            y2: "114.942679%",
                            id: "linearGradient-3"
                        },
                        children: [{
                            tag: "stop",
                            attrsMap: {
                                "stop-color": "#FA8E7D",
                                offset: "0%"
                            }
                        }, {
                            tag: "stop",
                            attrsMap: {
                                "stop-color": "#F74A5C",
                                offset: "51.2635191%"
                            }
                        }, {
                            tag: "stop",
                            attrsMap: {
                                "stop-color": "#F51D2C",
                                offset: "100%"
                            }
                        }]
                    }]
                }, {
                    tag: "g",
                    attrsMap: {
                        id: "Vue",
                        stroke: "none",
                        "stroke-width": "1",
                        fill: "none",
                        "fill-rule": "evenodd"
                    },
                    children: [{
                        tag: "g",
                        attrsMap: {
                            id: "Group",
                            transform: "translate(19.000000, 9.000000)"
                        },
                        children: [{
                            tag: "path",
                            attrsMap: {
                                d: "M89.96,90.48 C78.58,93.48 68.33,83.36 67.62,82.48 L46.6604487,62.2292258 C45.5023849,61.1103236 44.8426845,59.5728835 44.8296987,57.9626396 L44.5035564,17.5209948 C44.4948861,16.4458744 44.0537714,15.4195095 43.2796864,14.6733517 L29.6459999,1.53153737 C28.055475,-0.00160504005 25.5232423,0.0449126588 23.9900999,1.63543756 C23.2715121,2.38092066 22.87,3.37600834 22.87,4.41143746 L22.87,64.3864751 C22.87,67.0807891 23.9572233,69.6611067 25.885409,71.5429748 L63.6004615,108.352061 C65.9466323,110.641873 69.6963584,110.624605 72.0213403,108.313281",
                                id: "Path-Copy",
                                fill: "url(#linearGradient-1)",
                                "fill-rule": "nonzero",
                                transform: "translate(56.415000, 54.831157) scale(-1, 1) translate(-56.415000, -54.831157) "
                            }
                        }, {
                            tag: "path",
                            attrsMap: {
                                d: "M68,90.1163122 C56.62,93.1163122 45.46,83.36 44.75,82.48 L23.7904487,62.2292258 C22.6323849,61.1103236 21.9726845,59.5728835 21.9596987,57.9626396 L21.6335564,17.5209948 C21.6248861,16.4458744 21.1837714,15.4195095 20.4096864,14.6733517 L6.7759999,1.53153737 C5.185475,-0.00160504005 2.65324232,0.0449126588 1.12009991,1.63543756 C0.401512125,2.38092066 3.90211878e-13,3.37600834 3.90798505e-13,4.41143746 L3.94351218e-13,64.3864751 C3.94681177e-13,67.0807891 1.08722326,69.6611067 3.01540903,71.5429748 L40.7807092,108.401101 C43.1069304,110.671444 46.8180151,110.676525 49.1504445,108.412561",
                                id: "Path",
                                fill: "url(#linearGradient-2)",
                                "fill-rule": "nonzero"
                            }
                        }, {
                            tag: "path",
                            attrsMap: {
                                d: "M43.2983488,19.0991931 L27.5566079,3.88246244 C26.7624281,3.11476967 26.7409561,1.84862177 27.5086488,1.05444194 C27.8854826,0.664606611 28.4044438,0.444472651 28.9466386,0.444472651 L60.3925021,0.444472651 C61.4970716,0.444472651 62.3925021,1.33990315 62.3925021,2.44447265 C62.3925021,2.9858375 62.1730396,3.50407742 61.7842512,3.88079942 L46.0801285,19.0975301 C45.3051579,19.8484488 44.0742167,19.8491847 43.2983488,19.0991931 Z",
                                id: "Path",
                                fill: "url(#linearGradient-3)"
                            }
                        }]
                    }]
                }]
            })
        }
    },
    "93db": function(e, a, E) {
        "use strict";
        E.d(a, "a", (function() {
            return t
        }
        ));
        var t = {
            merchant: {
                title: "商户管理",
                terminal: "终端商户",
                terminalQuery: "终端商户查询",
                terminalReview: "终端商户审核",
                terminalBusiness: "终端商户费率",
                terminalBusinessQuery: "终端商户费率查询",
                terminalBusinessCreate: "终端商户费率新增",
                terminalBusinessUpdate: "终端商户费率更新",
                terminalBusinessReview: "终端商户费率审核",
                qrcode: "立牌商户",
                qrcodeReview: "立牌商户审核",
                qrcodeBusiness: "立牌商户费率",
                qrcodeBusinessQuery: "立牌商户费率查询",
                qrcodeBusinessCreate: "立牌商户费率新增",
                qrcodeBusinessUpdate: "立牌商户费率更新",
                qrcodeBusinessReview: "立牌商户费率审核"
            },
            merchantBusinesses: "商户费率信息",
            merchantBusinessesQuery: "查询商户费率信息",
            merchantBusinessesCreate: "新增商户费率信息",
            merchantBusinessesUpdate: "编辑商户费率信息",
            modifyPrice: {
                title: "调价管理",
                queryZH: "调价查询",
                queryEN: "modifyPriceQuery",
                createZH: "新增调价",
                createEN: "modifyPriceCreate"
            },
            agency: "服务商管理",
            branchOffice: "分公司管理",
            branchOfficeQuery: "查询分公司信息",
            branchOfficeCreate: "新增分公司信息",
            branchOfficeUpdate: "编辑分公司信息",
            branchOfficeBusiness: "分公司费率管理",
            branchOfficeBusinessQuery: "查询分公司费率",
            branchOfficeBusinessCreate: "新增分公司费率",
            branchOfficeBusinessUpdate: "编辑分公司费率",
            branchOfficeBusinessReview: "分公司费率审核",
            agencyAgencies: "服务商管理",
            agencyAgenciesInfo: "服务商信息",
            agencyAgenciesQuery: "查询服务商信息",
            agencyAgenciesCreate: "新增服务商信息",
            agencyAgenciesUpdate: "编辑服务商信息",
            agencyAgenciesUpdateBusiness: "编辑服务商资料",
            agencyBusinesses: "服务商费率管理",
            agencyBusinessesQuery: "查询服务商费率信息",
            agencyBusinessesCreate: "新增服务商费率信息",
            agencyBusinessesUpdate: "编辑服务商费率信息",
            agencyBusinessReview: "服务商费率审核",
            agencyReview: "服务商审核",
            agencyTeams: "团队管理",
            agencyTeamsInfo: "团队信息",
            agencyTeamsQuery: "查询团队信息",
            agencyTeamsCreate: "新增团队信息",
            agencyTeamsUpdate: "编辑团队信息",
            agencyTeamsBusinesses: "团队费率管理",
            agencyTeamsBusinessesQuery: "查询团队费率信息",
            agencyTeamsBusinessesCreate: "新增团队费率信息",
            agencyTeamsBusinessesUpdate: "编辑团队费率信息",
            agencyTeamExchange: "商户变更管理",
            agencyTeamExchangeBase: "商户变更管理_BASE",
            agencyTeamExchangeQuery: "查询商户变更信息",
            agencyTeamMemberInfo: "成员信息管理",
            agencyTeamMemberInfoEN: "AgencyTeamMemberInfo",
            agencyTeamMember: "团队成员管理",
            agencyTeamMemberQuery: "查询团队成员信息",
            agencyTeamMemberCreate: "新增团队成员信息",
            agencyTeamMemberUpdate: "编辑团队成员信息",
            agencyTeamMemberBusinesses: "成员费率管理",
            agencyTeamMemberBusinessesQuery: "查询团队成员费率信息",
            agencyTeamMemberBusinessesCreate: "新增团队成员费率信息",
            agencyTeamMemberBusinessesUpdate: "编辑团队成员费率信息",
            businessTemplate: "费率模板管理",
            businessTemplateBase: "费率模板管理_BASE",
            businessTemplateQuery: "查询费率模板",
            businessTemplateEdit: "编辑费率模板",
            agencyActivity: {
                title: "服务商活动管理",
                query: "服务商活动查询",
                create: "新增服务商活动",
                update: "更新服务商活动",
                review: "服务商活动审核"
            },
            activityAgency: {
                agencyEN: "ActivityAgencyEN",
                agencyZH: "服务商活动管理",
                agencyReviewEN: "ActivityAgencyReviewEN",
                agencyReviewZH: "服务商活动审核"
            },
            activityManage: {
                ruleManageEN: "RuleManage",
                ruleManageZH: "规则管理",
                ruleReviewEN: "RuleReview",
                ruleReviewZH: "规则审核",
                agencyManageEN: "RuleAgency",
                agencyManageZH: "活动查询",
                agencyReviewEN: "RuleAgencyReview",
                agencyReviewZH: "活动审核",
                participantQueryZH: "参与对象查询",
                participantQueryEN: "ParticipantQueryEN",
                riskQueryZH: "风控对象查询",
                riskQueryEN: "RiskQuery",
                activityAwardNewEN: "ActivityAwardNewEN",
                activityAwardNewZH: "活动奖励(新)"
            },
            system: "系统管理",
            systemRole: "角色管理",
            systemRoleQuery: "查询角色信息",
            systemRoleCreate: "新增角色信息",
            systemRoleUpdate: "编辑角色信息",
            systemUser: "用户管理",
            systemUserQuery: "查询用户信息",
            systemUserCreate: "新增用户信息",
            systemUserUpdate: "编辑用户信息",
            systemOperation: "操作员管理",
            systemOperationQuery: "查询操作员信息",
            systemOperationCreate: "新增操作员信息",
            systemOperationUpdate: "编辑操作员信息",
            systemConfig: "配置管理",
            systemProcess: "流程管理",
            systemProcessQuery: "查询流程信息",
            systemProcessCreate: "新增流程信息",
            systemProcessUpdate: "编辑流程信息",
            systemTask: "总任务管理",
            systemOperationLog: "操作日志",
            systemParametesZH: "系统参数",
            systemParametesEN: "SystemParametes",
            systemParametesQueryZH: "系统参数查询",
            systemParametesQueryEN: "SystemParametesQuery",
            systemAuth: "钱包授权",
            systemAuthQuery: "钱包授权",
            systemMerchant: "切换记录",
            paymentRecord: "汇款记录",
            paymentRecordQuery: "汇款记录",
            systemOperationDataLog: "业务信息通知日志",
            bankingPolicyAuthZH: "权限管理",
            bankingPolicyAuthEN: "bankingPolicyAuth",
            bankingPolicyAuthQueryZH: "权限管理查询",
            bankingPolicyAuthQueryEN: "bankingPolicyAuthQuery",
            account: "提现管理",
            accountWithdrawal: "提现审核",
            accountList: "提现流水查询",
            accountManage: "账户信息",
            accountInvoice: "发票税率管理",
            accouontAdjustment: "调账管理",
            invoiceManage: "发票管理",
            minusBalanceZH: "负余额查询",
            minusBalanceEN: "MinusBalance",
            activity: "活动管理",
            activityConfigNew: "活动管理(新)",
            activityRule: "活动规则管理",
            activityRuleQuery: "查询活动规则信息",
            activityRuleCreate: "新增活动规则信息",
            activityRuleUpdate: "编辑活动规则信息",
            activityAudit: "活动规则审核",
            activityAuditQuery: "查询活动规则审核信息",
            activityAuditCreate: "新增活动规则审核信息",
            activityAuditUpdate: "编辑活动规则审核信息",
            activityAward: "活动奖励",
            activityAwardReview: "活动奖励审核",
            activityTerminalTypeConfigZH: "终端类型",
            activityTerminalTypeConfigEN: "ActivityTerminalTypeConfig",
            qianhaiActivityConfigZH: "前海移联活动规则",
            qianhaiActivityConfigEN: "QianhaiActivityConfigEN",
            profit: "分润规则管理",
            profitRule: "分润规则管理",
            profitRuleQuery: "分润规则查询",
            profitRuleCreate: "新增分润规则",
            profitRuleUpdate: "编辑分润规则",
            profitRuleReview: "分润规则审核",
            profitRuleCopy: "复制分润规则",
            agencyBindProfit: "服务商绑定规则",
            agencyBindProfitQuery: "查询服务商绑定规则",
            agencyBindProfitCreate: "新增服务商绑定规则",
            agencyBindProfitUpdate: "修改服务商绑定规则",
            agencyBindProfitReview: "服务商绑定规则审核",
            profitRecordQuery: "分润流水查询",
            trade: "交易管理",
            profitSettlement: {
                title: "分润管理",
                agency: "服务商分润查询",
                agencyQuery: "服务商分润清算查询",
                agencyReview: "服务商分润审核",
                team: "团队分润管理",
                teamQuery: "团队分润查询",
                member: "团员分润管理",
                memberQuery: "团员分润查询",
                merchant: "商户分润管理",
                merchantQuery: "商户分润查询",
                batchErrorQuery: "数据跑批差错",
                profit0Day: "营销不分润日报表",
                profit0Month: "营销不分润月报表",
                agencyDayZH: "服务商日分润汇总",
                agencyDayEN: "agencyDayEN"
            },
            downloadCenter: {
                title: "下载中心"
            },
            home: {
                title: "首页",
                todoList: "待办事项",
                notice: "公告",
                noticeDetailBase: "公告详情_BASE",
                noticeDetail: "公告详情"
            },
            notice: {
                base: "公告管理_BASE",
                title: "公告管理",
                query: "公告管理_QUERY",
                create: "新增公告",
                update: "修改公告",
                detail: "公告详情"
            },
            rebate: {
                title: "返佣管理",
                rulesQuery: "活动规则",
                rebateDetail: "返佣明细",
                agencyRebate: "服务商返佣管理",
                agencyRebateReview: "服务商返佣清算审核",
                handlingRebate: "手续费返佣流水",
                terminalRebate: "终端返佣流水",
                terminalRebateNewZH: "终端返佣流水(新)",
                terminalRebateNewEN: " TerminalRebateNewEN",
                merchantRebate: "商户交易达标流水",
                rebateTest: "返佣测试"
            },
            recommend: {
                title: "服务商推荐管理",
                base: "服务商推荐管理_BASE",
                agencyRecommend: "服务商推荐管理",
                agencyRecommendReview: "服务商推荐审核",
                agencyRecommendReward: "服务商推荐奖励流水",
                agencyRecommendCreate: "新增推荐服务商",
                agencyRecommendUpdate: "编辑推荐服务商",
                agencyRecommendMonth: "服务商推荐奖励报表"
            },
            terminal: {
                query: "终端管理",
                merchant: "商户装机查询",
                record: "终端划拨流水",
                down: "终端下拨",
                hornQueryZH: "喇叭管理",
                hornQueryEN: "HornQuery"
            },
            eqt: {
                title: "灵活用工管理",
                titleEN: "EQTManagement",
                signZH: "签约查询",
                signEN: "SignQuery",
                recordZH: "提现流水查询",
                recordEN: "RecordQuery"
            },
            coupon: {
                main: "卡券中台",
                userZH: "用户管理",
                userEN: "CouponUserManagement",
                activityZH: "活动查询",
                activityEN: "CouPonActivityQuery",
                activityTempZH: "活动模板",
                activityTempEN: "CouPonActivityTemp",
                TempQueryZH: "模板查询",
                TempQueryEN: "CouPonTempQuery",
                redpaperZH: "红包发放查询",
                redpaperEN: "CouponRedpaperQuery",
                verificatZH: "红包核销查询",
                verificatEN: "CouponVerificatQuery"
            },
            increase: {
                main: "增收管理",
                recordZH: "增收流水查询",
                recordEN: "IncreaseRecordQuery",
                dayZH: "增收日报表",
                dayEN: "IncreaseDayRecord"
            }
        }
    },
    "9fb0": function(e, a, E) {
        "use strict";
        E.d(a, "b", (function() {
            return t
        }
        )),
        E.d(a, "g", (function() {
            return n
        }
        )),
        E.d(a, "n", (function() {
            return c
        }
        )),
        E.d(a, "p", (function() {
            return _
        }
        )),
        E.d(a, "m", (function() {
            return r
        }
        )),
        E.d(a, "j", (function() {
            return i
        }
        )),
        E.d(a, "k", (function() {
            return A
        }
        )),
        E.d(a, "i", (function() {
            return s
        }
        )),
        E.d(a, "l", (function() {
            return u
        }
        )),
        E.d(a, "h", (function() {
            return o
        }
        )),
        E.d(a, "q", (function() {
            return R
        }
        )),
        E.d(a, "o", (function() {
            return d
        }
        )),
        E.d(a, "c", (function() {
            return T
        }
        )),
        E.d(a, "f", (function() {
            return l
        }
        )),
        E.d(a, "a", (function() {
            return b
        }
        )),
        E.d(a, "e", (function() {
            return N
        }
        )),
        E.d(a, "d", (function() {
            return C
        }
        ));
        var t = "Access-Token"
          , n = "sidebar_type"
          , c = "is_mobile"
          , _ = "nav_theme"
          , r = "layout"
          , i = "fixed_header"
          , A = "fixed_sidebar"
          , s = "content_width"
          , u = "auto_hide_header"
          , o = "color"
          , R = "weak"
          , d = "multi_tab"
          , T = "app_language"
          , l = "set_record"
          , b = "YS_ACCESS_INFO"
          , N = "set_agencyTeamId"
          , C = {
            Fluid: "Fluid",
            Fixed: "Fixed"
        }
    },
    a18c: function(e, a, E) {
        "use strict";
        E.d(a, "b", (function() {
            return r
        }
        ));
        var t = E("2b0e")
          , n = E("8c4f")
          , c = E("f23b")
          , _ = n["a"].prototype.push;
        n["a"].prototype.push = function(e, a, E) {
            return a || E ? _.call(this, e, a, E) : _.call(this, e).catch((function(e) {
                return e
            }
            ))
        }
        ,
        t["default"].use(n["a"]);
        var r = new n["a"]({
            routes: c["b"]
        });
        a["a"] = r
    },
    a6e1: function(e, a, E) {},
    a8ca: function(e, a, E) {
        "use strict";
        var t = function() {
            var e = this
              , a = e.$createElement
              , E = e._self._c || a;
            return E("a-form-item", {
                attrs: {
                    label: e.label,
                    required: e.required
                }
            }, [E("a-select", {
                directives: [{
                    name: "decorator",
                    rawName: "v-decorator",
                    value: [e.decorator, {
                        rules: [{
                            required: e.required,
                            message: "请选择" + e.label
                        }]
                    }],
                    expression: "[decorator,{rules:[{required:required,message:'请选择'+label}]}]"
                }],
                attrs: {
                    "label-in-value": "",
                    allowClear: "",
                    showSearch: "",
                    filterOption: !1,
                    notFoundContent: e.notFoundContent,
                    disabled: e.disabled
                },
                on: {
                    change: e.handleSelectChange,
                    search: e.handleSelectSearch,
                    blur: e.handleSelectBlur,
                    focus: e.handleSelectFocus,
                    popupScroll: e.handlePopupScroll
                }
            }, [e.selectLoading ? E("a-spin", {
                attrs: {
                    slot: "notFoundContent",
                    size: "small"
                },
                slot: "notFoundContent"
            }) : e._e(), e._l(e.options100List, (function(a) {
                return E("a-select-option", {
                    key: a[e.selectValue],
                    attrs: {
                        value: a[e.selectValue]
                    }
                }, [e._v(" " + e._s(a[e.selectLabel] + "(" + a[e.selectValue] + ")") + " ")])
            }
            ))], 2)], 1)
        }
          , n = []
          , c = (E("fb6a"),
        E("159b"),
        {
            name: "BigSelect",
            props: {
                label: {
                    type: String,
                    default: ""
                },
                decorator: {
                    type: String,
                    default: ""
                },
                notFoundContent: {
                    type: String,
                    default: ""
                },
                disabled: {
                    type: Boolean,
                    default: !1
                },
                selectLabel: {
                    type: String,
                    default: "userName"
                },
                selectValue: {
                    type: String,
                    default: "userCode"
                },
                required: {
                    type: Boolean,
                    default: !1
                }
            },
            data: function() {
                return {
                    optionsList: [],
                    options100List: [],
                    treePageSize: 100,
                    scrollPage: 1,
                    selectLoading: !0,
                    selectedValue: ""
                }
            },
            methods: {
                handleGetList: function(e) {
                    this.optionsList = e,
                    this.options100List = e.slice(0, this.treePageSize)
                },
                handleSelectChange: function(e, a) {
                    e ? this.$emit("change", e) : (this.selectedValue = "",
                    this.$emit("change", ""))
                },
                handleSelectBlur: function() {
                    var e = this;
                    this.scrollPage = 1;
                    var a = [];
                    this.selectedValue ? this.optionsList.forEach((function(E, t) {
                        E[e.selectLabel].indexOf(e.selectedValue) >= 0 && a.push(E)
                    }
                    )) : a = this.optionsList.slice(0, this.treePageSize),
                    this.options100List = a
                },
                handleSelectFocus: function() {
                    var e = this
                      , a = [];
                    //! 有个bug，list会还原，所以再过滤一次
                    this.selectedValue ? this.optionsList.forEach((function(E, t) {
                        E[e.selectLabel].indexOf(e.selectedValue) >= 0 && a.push(E)
                    }
                    )) : a = this.optionsList.slice(0, this.treePageSize),
                    this.options100List = a
                },
                handleSelectSearch: function(e) {
                    var a = this;
                    if (e) {
                        this.selectedValue = e;
                        var E = [];
                        this.scrollPage = 1,
                        this.optionsList.forEach((function(t) {
                            t[a.selectLabel].indexOf(e) >= 0 && E.push(t)
                        }
                        )),
                        this.options100List = E.slice(0, this.treePageSize)
                    } else
                        this.options100List = this.optionsList.slice(0, this.treePageSize),
                        this.selectedValue = ""
                },
                handlePopupScroll: function(e) {
                    var a = this
                      , E = e.target
                      , t = E.scrollHeight - E.scrollTop
                      , n = E.clientHeight;
                    if (0 === t && 0 === n)
                        this.scrollPage = 1;
                    else if (t < n + 25) {
                        this.scrollPage = this.scrollPage + 1;
                        var c = this.scrollPage
                          , _ = this.treePageSize * (c || 1)
                          , r = []
                          , i = "";
                        if (i = this.optionsList.length > _ ? _ : this.optionsList.length,
                        this.options100List.length >= i)
                            return;
                        if (this.selectedValue) {
                            var A = [];
                            this.optionsList.forEach((function(e, E) {
                                e[a.selectLabel].indexOf(a.selectedValue) >= 0 && A.push(e)
                            }
                            )),
                            A.forEach((function(e, a) {
                                a < i && r.push(e)
                            }
                            ))
                        } else
                            this.optionsList.forEach((function(e, a) {
                                a < i && r.push(e)
                            }
                            ));
                        this.options100List = r
                    }
                }
            }
        })
          , _ = c
          , r = E("2877")
          , i = Object(r["a"])(_, t, n, !1, null, "554345a6", null);
        a["a"] = i.exports
    },
    b775: function(e, a, E) {
        "use strict";
        E.d(a, "a", (function() {
            return T
        }
        ));
        E("d3b7"),
        E("5319"),
        E("ac1f");
        var t = E("bc3a")
          , n = E.n(t)
          , c = E("56cd")
          , _ = {
            vm: {},
            install: function(e, a) {
                this.installed || (this.installed = !0,
                a && (e.axios = a,
                Object.defineProperties(e.prototype, {
                    axios: {
                        get: function() {
                            return a
                        }
                    },
                    $http: {
                        get: function() {
                            return a
                        }
                    }
                })))
            }
        }
          , r = E("4a92")
          , i = E("d042")
          , A = E("a18c")
          , s = E("ca00")
          , u = ["/pay/records/download_get", "/withdraws/reviews/download_post", "/profits/records/download_get", "/agencies/delFile_put", "/agencies/uploadFile_post", "/agencies/download_get", "/agencies/download/excel_get", "/agencies/businesses/download_get", "/agencies/teams/download_get", "/agencies/teams/businesses/download_get", "/agencies/teams/members/download_get", "/agencies/teams/members/businesses/download_get", "/merchant/day/profit/settle/download_get", "/agency/day/profit/settle/download_get", "/agency/team/day/profit/settle/download_get", "/agency/team/member/day/profit/settle/download_get", "/agencies/openPay_post", "/agencies/teams/members/modify/update_get", "/agency/bind/profit/download/template_get", "/agency/bind/profit/upload/excel_post", "/accounts/withdraws/reviews/finance-report_get", "/merchants/terminals/download_get", "/merchants/qrcode/download_get", "/hand/accounts/uploadExcel_post", "/terminal-rebate/download_get", "/activities/rebate/download_get", "/merchant-trade-reward/download_get", "/activities/rewards/download_get", "/recommend/agency/download_get", "/agency/recommend/record/download_get", "/agencies/reviews/download_get", "/accounts/withdraws/reviews/download_get", "/agency/recommend/summary/download_get", "/recommend_put", "/recommend_post", "/logout_get", "/agency/market/month/download_get", "/accounts/withdraw/download_get", "/agency/market/day/download_get", "/agencies/phoneExist_get", "/profits/team/records_post", "/accounts/download_get", "/accounts/download/template_get", "/terminalPosFlow/download_post", "/profits/team/download_get", "/users/download_get", "/system/configs_post", "/system/configs/newCreate_post", "terminalPos/generate/trmNo_post", "/hand/accounts/download_get", "/terminalPos/modify/posStatus_post", "/eqt/withdraw/download_get", "/terminalPos/refundComponent_post", "/profits/agency/download_get", "/eqt/withdraw/member/download_get", "/eqt/withdraw/agency/download_get", "/accounts/negative/count_post", "/accounts/negative/download_get", "/users/download_get", "/cloudTrumpet/page_post", "/increased/serial/download_get", "/increased/report/download_get"]
          , o = n.a.create({
            baseURL: "/mkagentcon",
            timeout: 6e4
        })
          , R = function(e) {
            if (e.response) {
                var a = e.response.data;
                if (403 === e.response.status)
                    c["a"].error({
                        message: "Forbidden",
                        description: a.message
                    });
                else if (404 === e.response.status)
                    e.response.data.path;
                else
                    401 === e.response.status && c["a"].error({
                        message: "Unauthorized",
                        description: "Authorization verification failed"
                    })
            }
            return Promise.reject(e)
        }
          , d = "";
        o.interceptors.request.use((function(e) {
            return d = Object(s["a"])(d, e),
            d && (e.headers["userId"] = d),
            e
        }
        ), R),
        o.interceptors.response.use((function(e) {
            var a = e.config
              , E = e.data
              , t = E.status
              , n = E.payload;
            if (n && n.value && sessionStorage.setItem("YS_IMG_PREVIEW_URL", n.value),
            u.some((function(a) {
                return e.config.url + "_" + e.config.method === a
            }
            )))
                return e;
            var _ = a.successTip
              , s = a.failureTip
              , o = void 0 === s || s
              , R = a.method
              , d = void 0 === R ? "get" : R;
            if ("3210" === t)
                return sessionStorage.clear(),
                localStorage.clear(),
                void A["a"].replace("/user/login");
            var T = Object(i["a"])(E, a.prefix);
            if ("string" != typeof T && (T = ""),
            r["a"].SUCCESS === t || "0" === E.code)
                return "boolean" === typeof _ ? _ && c["a"].success({
                    message: "请求成功",
                    description: T
                }) : "get" !== d.toLowerCase() && ("string" === typeof E.payload ? c["a"].success({
                    message: "请求成功",
                    description: E.payload || E.msg || ""
                }) : "Y" !== a.noToast && c["a"].success({
                    message: "请求成功",
                    description: T
                })),
                n;
            throw o && (T = E.describe || E.msg || "",
            c["a"].error({
                message: "请求处理失败",
                description: T
            })),
            new Error("请求处理失败: ".concat(T))
        }
        ), R);
        var T = {
            vm: {},
            install: function(e) {
                e.use(_, o)
            }
        };
        a["b"] = o
    },
    b899: function(e, a, E) {
        "use strict";
        E.d(a, "a", (function() {
            return n
        }
        ));
        var t = E("9fb0");
        function n() {
            var e = sessionStorage.getItem(t["a"]);
            if (!e)
                return {};
            try {
                return JSON.parse(e)
            } catch (a) {}
            return {}
        }
    },
    ba3c: function(e, a) {
        e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3ZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQ1IDc5LjE2MzQ5OSwgMjAxOC8wOC8xMy0xNjo0MDoyMiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDozNjBiMzZlMC03MGVjLWUyNGMtODQwOS03ZGVmMTEwYjk4OTYiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6OTUyNDI4NkU5RkMyMTFFQUEyNjFCQjlFNjVDN0ZGRkMiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6OTUyNDI4NkQ5RkMyMTFFQUEyNjFCQjlFNjVDN0ZGRkMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKFdpbmRvd3MpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MzYwYjM2ZTAtNzBlYy1lMjRjLTg0MDktN2RlZjExMGI5ODk2IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjM2MGIzNmUwLTcwZWMtZTI0Yy04NDA5LTdkZWYxMTBiOTg5NiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pk5V2UEAAAreSURBVHja7F17lFVVGd9zHcPUJMOWDwooFB8s1DU+/7B8IbgQji0rTNMDyhKX6UKi1EUu02VLHpooWjrho+FIYoikV5liEk3RVARBJxHzlWIhJaXLSCgd+/3O3jPee7lzz97ncc8+c8+31nfurJk7++zv+51vv77HaRK2kuM14ToMfCT4YPCB4H3BQ8B7iaL7nkYbg3DtAL8Cfhm8BvwceD3+/xMbxW62DAQqcAx4FPhY8BcitlgA7694bMnv38W9nsTnMvBSgPNWDsinIAzE9SzweHBLne66B/hUxewDreYe8EKA83bjAeJ4fHJPBl8EHq2e5DSpRfEs9K0dn63g9jSGteY6A7Ejrt8F/wi8n4VDeEENbWP9OcfxZuFzAYD5qJ4dqI9FON7Z+OlV8C8tBaOS9ld9XY++u8qq+wAgjncMrqvBHniQyB4NBc8HPwtZvpbdIcvxPo/rDeCJom8Q55jHIded+LwUw9jm7FiI43Hp+mIfAqOUzgV3QsZT7LcQx+uH67XgKaJv097ghyDvXGUt/7XPQuR+4okGAKOULvZldrwv2QWI4x2tJu7DRePREeBVSgcWAOJ43O0+At5TNC7t6evA8calC4jjcZO3BPxZkRN1cL/SSQqAON5ktbco5FiU6dODbs6rLyDyKbg1B6NXnbZCR2fUBxDH42FgWw5GoF7nQ1cnJwuI49FRdK9I/9j+4wyAwoPURUpnCQDieANwLYI/l7KgW7ER+yAjlkJdPah0FyMg8qRzIXhwjJ3dBn7fgN8BrwVflrHhiweqd0OHO8R5dEIlnBRD5zrBM/01e9Hd1EBzyiilwxlBX2zSsA7uvp+KYd64D3xmnOc+Gn0fgusbloBCJ9fRkH91+CHL8T6jVlRRwVgp6DevJxj2UbNaee0YZQ6hmQ2PYa6YADC25qthX5fTwwHieF8R0vcdla4CGOtzLHpouhpKjS3kOvBOEW/O8fKnKQq/g4WA7KR0awCI4zFa8JsxTGKT6hmxUYW+aqmVfEvpWNtCfhLDTWcCjOdTFvwUYS9drQeIRG5UxJvRn35NquJKOc63GJDR1aykuZeVVRTqUkPVNgPl0QU6RMRzRrY7eKTfByH6WT7BX1Y5NTRVKIbb/NcjToZzAMYPNIHgPoc+ldMbdMXV5T+IRXdDb0PW5IhgMDLxCqMlceOC0a3/ydUtRB4gvgmOEkFxAtB+VNM6uElaK2xLiag/Mdp+MPTWVWkhx0UEo9UAjCYhI8wbHQyhdH5stSHr2xEa3WC4GJgAPibHoofGlw9Zcrii6ewder1fdNs1rYNZUTxK+WKOQw9tBA9kPkr3kHFIBDDu0gaje8NYG4w/ga+3QElcPjOncYxakidJ1P2h4DXdgIwM2RCdTN832G8chWutEJl1/nhadP9pzbMr5ztG2cwTycafnUhACiUTehiaqh2WL12YraJ3pxjdtKdaBQaJaW1FdwF+Gqf2DUnRCaWT+lEhGngGHb3H4PsXKrPsjS5He69aO8oX3eX+pjc5OlICIv0eA0I0cKOB2dPUf1zjG/8C35aByZeb3pcTansAsaCFjAjZwFMG3z04APQ/Z8K9K72e54CTys4dQUAOCvnPJhPc3wP+Pkwl+4gMgMIH8aaEWj+IgAyNMglpCsHIj/aAJeb5IjtE13YS891QAhI2M3ZqUATFdt+XAQ+90TVo78CMWMl/hMw1jHvoGlTwd4jhiLnmUwyEYAGYa2t8Y1ch8/b2yggoK3C9OeZWBzZBAX+LsEv/0N/lS2XrrLbo4Kc3sZav+zXwz+qsXj7p3E89blSIxvH4EHXGuJPfSEC4cogyoT6hdtddmkIwJLXD0ueeARmXQBaTJf3xQqb0xUHbCiK6m5OnthcZmPrvhfQS2kg8SroBSp5kIA9dDrfEdP9+cSXdzFAbTF2aBv6HxTPEzw3zOuh6eDOOG8cFyC7gO9VBnM5TxfH6AosB6afkadaU59+iwhWbNiCk48DfMzB1RsPfajEoh6mluq48nBdvjwOQbTEKMRtPlUlSDwVeYjEoV0Mek+hHRttsiDKpR132ViNO2qO1q7HJYe4bYK5Wdquzwnlvuq5rHQM9DFn0k5Ucj0GGy6Ise+mhGx6zoJMhRBZOb6lAHgG1B6w2vwN5fm3QZpuQcQOmtI5D1l8TEPN6FXSXhR33Ixpz3xzIY2K9lwrpcDOltwlIEiVSmX2aDQuRoLAo2W9rfGMfUdufU9keT7fnhejJWwV1VJEEjcJTNVFkh2YF/P1CyNPfoL0HQ/ThNQKyLkEhb1R1tLJAfwz4O8/hvmzQ3jth55DOBIXsH9J006AgZW8RZhm9h4boQ2dBOY82JyjoGFjJhAwAEjS8XgddbTFob5Lh/TcTi+6d+sqEhZ1juGGs99KX53DTanzjdX/Tq9/eSUJW7DahlaVHJ48mLDLDR5ejowdYCMbOgkVipIOs9wldN61bthfm9Nc/wm/u2Y0mT/Tdv4AO/0YtMbm6S7uITJOQYau1akUuBhi/M2iT+Zn7hujL8lJAmJy5MeYjlGpEH/x4URLtbTnxFNc0VHZqiPtQ92s/HbKkt+8BkVMlXaX9+goZxnSHCHeC/kD32V/pP9+b6798CQqea/D9y0X4M8FF3T+UAvIHIXNEcpJ0gXbRA8djOsf0kPehzh/bHhA5bM3PcfDpdujjSU0wmtVQFTY9r600QKRyvOOu+uMGB+OZgD1JJf1QSO9iGCIQt1Uu+yoRp2v1tIwob4Uy9zhOGj5SRyPLDIaqA9TqKGzkzhLcq6xwQDUzm50BQPhknQ5hFqe4oSyopztKGNV2u//tl2hFl1v4DssBuSNVMLp379EyiTuUrgMAkXSF5YAsSvm4hWdfMyO2UlXH1QGRyN1nMSAvpQgG591fCBmLFpYWV7MOEbCrvESwaLGdtCXFezODKkrJ3K1Kt8IMEOknmSFyKrUO+tajJn6ysNtfzAGRxHyOF3MkelZV3Kf1j9AKdVnTd18bEFmEbKJaozc6sXBllJKB1OGEoOTW4JPJorsK1ysb2DKGq83ytIgtXRlU1bq3jWE1opkx1HNkBhXKWiXcDZvm4jO1brD6jEodQtMF3GQgGAVaLeJ9Q0JY2l3zBfd84BhBuHOKfWUgYotuCRJ9Z4pskG9k+yBD9rFrymBQV+NMXtNq5t2SdXjHZ2iS3y3Fe//P11XRfcHkn8zdjdLhz5VXVwYASes9WV2+jsyCIyJ0uOj+SsiI8U9ETtXAoLfx7vo+QUWX5zlnZ8RS6gmGC93MS8ekpaVwSflhjoWvg9OUTlIcY4vu/UIWotnUwGBsErJmceRQqngmvaL7tJDRf6saEIxnfdmlDixahciAMnrQbm4gMOb6MusG02lQvJWl5WHkFOyQmYXKiW2fPgoEQz/Pg7xLs7FOlx1lFF9bHwSD+YgjkgAjfgspB4VnTefAWhhExnJLh2QciOeELIu7Its72aLL8k0t/vo8mYzfpIlpE8wAOyJpMJK1kHJQuGG6C9bC5PszhaxZuJ/lQLAcLN0OC+r5YrP6vi5CesvaAAzrZfFd46yzNVrY8252Pjis6tDqf+qWB8ksIOUW0+6zTJs+S8hT5JYU5wdW6V4Y5xI2O4CUg8PSHrOFrCTEchxjhQyz+bqQuYlJ0LtgRrdzeb7UqM5inwekHBwq5hafZUDaMCHr0rP6Ngs+M09xiOEQxLngFfW5RlnD+jSGIx36vwADAFt1zr2YetIwAAAAAElFTkSuQmCC"
    },
    bf0f: function(e, a, E) {
        "use strict";
        E.d(a, "c", (function() {
            return l
        }
        )),
        E.d(a, "b", (function() {
            return b
        }
        ));
        var t = E("f3f3")
          , n = (E("d3b7"),
        E("caad"),
        E("3ca3"),
        E("ddb0"),
        E("2b0e"))
          , c = E("a925")
          , _ = E("8ded")
          , r = E.n(_)
          , i = E("c1df")
          , A = E.n(i)
          , s = E("2807");
        n["default"].use(c["a"]);
        var u = "zh-CN"
          , o = {
            "zh-CN": Object(t["a"])({}, s["default"])
        }
          , R = new c["a"]({
            silentTranslationWarn: !0,
            locale: u,
            fallbackLocale: u,
            messages: o
        })
          , d = [u];
        function T(e) {
            return R.locale = e,
            document.querySelector("html").setAttribute("lang", e),
            e
        }
        function l() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : u;
            return new Promise((function(a) {
                return r.a.set("lang", e),
                R.locale !== e ? d.includes(e) ? a(T(e)) : E("4aa4")("./".concat(e)).then((function(a) {
                    var E = a.default;
                    return R.setLocaleMessage(e, E),
                    d.push(e),
                    A.a.updateLocale(E.momentName, E.momentLocale),
                    T(e)
                }
                )) : a(e)
            }
            ))
        }
        function b(e) {
            return R.t("".concat(e))
        }
        a["a"] = R
    },
    c2e6: function(e, a, E) {
        var t = {
            "./index_0": ["7368", "chunk-2d0d6794"],
            "./index_0.vue": ["7368", "chunk-2d0d6794"],
            "./index_1": ["9c1b", "chunk-2d0f0411"],
            "./index_1.vue": ["9c1b", "chunk-2d0f0411"],
            "./index_10": ["e309", "chunk-2d224fed"],
            "./index_10.vue": ["e309", "chunk-2d224fed"],
            "./index_11": ["3f2c", "chunk-2d0c553a"],
            "./index_11.vue": ["3f2c", "chunk-2d0c553a"],
            "./index_12": ["28a2", "chunk-2d0b39ad"],
            "./index_12.vue": ["28a2", "chunk-2d0b39ad"],
            "./index_13": ["d116", "chunk-2d21d428"],
            "./index_13.vue": ["d116", "chunk-2d21d428"],
            "./index_14": ["fdbb", "chunk-2d238274"],
            "./index_14.vue": ["fdbb", "chunk-2d238274"],
            "./index_15": ["e581", "chunk-2d22585f"],
            "./index_15.vue": ["e581", "chunk-2d22585f"],
            "./index_16": ["526a", "chunk-2d0c7b3e"],
            "./index_16.vue": ["526a", "chunk-2d0c7b3e"],
            "./index_17": ["c5cd", "chunk-2d217509"],
            "./index_17.vue": ["c5cd", "chunk-2d217509"],
            "./index_18": ["e5eb", "chunk-2d225e03"],
            "./index_18.vue": ["e5eb", "chunk-2d225e03"],
            "./index_19": ["e76f", "chunk-2d225fd8"],
            "./index_19.vue": ["e76f", "chunk-2d225fd8"],
            "./index_2": ["cebd", "chunk-2d22291a"],
            "./index_2.vue": ["cebd", "chunk-2d22291a"],
            "./index_20": ["f62a", "chunk-2d22cff5"],
            "./index_20.vue": ["f62a", "chunk-2d22cff5"],
            "./index_21": ["c870", "chunk-2d217ac4"],
            "./index_21.vue": ["c870", "chunk-2d217ac4"],
            "./index_22": ["cf94", "chunk-2d2227b4"],
            "./index_22.vue": ["cf94", "chunk-2d2227b4"],
            "./index_23": ["51a9", "chunk-2d0c7c8a"],
            "./index_23.vue": ["51a9", "chunk-2d0c7c8a"],
            "./index_24": ["84fb", "chunk-2d0de5ae"],
            "./index_24.vue": ["84fb", "chunk-2d0de5ae"],
            "./index_25": ["1e60", "chunk-2d0b6904"],
            "./index_25.vue": ["1e60", "chunk-2d0b6904"],
            "./index_3": ["bb98", "chunk-2d21a455"],
            "./index_3.vue": ["bb98", "chunk-2d21a455"],
            "./index_4": ["ae0d", "chunk-2d213a4e"],
            "./index_4.vue": ["ae0d", "chunk-2d213a4e"],
            "./index_5": ["8339", "chunk-2d0ddb97"],
            "./index_5.vue": ["8339", "chunk-2d0ddb97"],
            "./index_6": ["aa6d", "chunk-2d212c04"],
            "./index_6.vue": ["aa6d", "chunk-2d212c04"],
            "./index_7": ["2f99", "chunk-2d0be18a"],
            "./index_7.vue": ["2f99", "chunk-2d0be18a"],
            "./index_8": ["60a7", "chunk-2d0ced26"],
            "./index_8.vue": ["60a7", "chunk-2d0ced26"],
            "./index_9": ["0ff6", "chunk-2d0afe3c"],
            "./index_9.vue": ["0ff6", "chunk-2d0afe3c"]
        };
        function n(e) {
            if (!E.o(t, e))
                return Promise.resolve().then((function() {
                    var a = new Error("Cannot find module '" + e + "'");
                    throw a.code = "MODULE_NOT_FOUND",
                    a
                }
                ));
            var a = t[e]
              , n = a[0];
            return E.e(a[1]).then((function() {
                return E(n)
            }
            ))
        }
        n.keys = function() {
            return Object.keys(t)
        }
        ,
        n.id = "c2e6",
        e.exports = n
    },
    ca00: function(e, a, E) {
        "use strict";
        E.d(a, "t", (function() {
            return l
        }
        )),
        E.d(a, "A", (function() {
            return b
        }
        )),
        E.d(a, "s", (function() {
            return N
        }
        )),
        E.d(a, "j", (function() {
            return C
        }
        )),
        E.d(a, "p", (function() {
            return O
        }
        )),
        E.d(a, "q", (function() {
            return I
        }
        )),
        E.d(a, "o", (function() {
            return L
        }
        )),
        E.d(a, "m", (function() {
            return m
        }
        )),
        E.d(a, "i", (function() {
            return M
        }
        )),
        E.d(a, "k", (function() {
            return h
        }
        )),
        E.d(a, "l", (function() {
            return S
        }
        )),
        E.d(a, "b", (function() {
            return f
        }
        )),
        E.d(a, "r", (function() {
            return Y
        }
        )),
        E.d(a, "d", (function() {
            return U
        }
        )),
        E.d(a, "u", (function() {
            return p
        }
        )),
        E.d(a, "y", (function() {
            return D
        }
        )),
        E.d(a, "v", (function() {
            return y
        }
        )),
        E.d(a, "w", (function() {
            return g
        }
        )),
        E.d(a, "x", (function() {
            return G
        }
        )),
        E.d(a, "c", (function() {
            return P
        }
        )),
        E.d(a, "e", (function() {
            return B
        }
        )),
        E.d(a, "z", (function() {
            return v
        }
        )),
        E.d(a, "g", (function() {
            return k
        }
        )),
        E.d(a, "h", (function() {
            return W
        }
        )),
        E.d(a, "a", (function() {
            return Q
        }
        )),
        E.d(a, "n", (function() {
            return F
        }
        )),
        E.d(a, "f", (function() {
            return j
        }
        ));
        var t = E("d0af")
          , n = E("fc11")
          , c = E("f3f3")
          , _ = E("c9e9")
          , r = (E("159b"),
        E("b64b"),
        E("99af"),
        E("b6802"),
        E("d3b7"),
        E("1276"),
        E("ac1f"),
        E("4de4"),
        E("d81d"),
        E("25eb"),
        E("a9e3"),
        E("498a"),
        E("5319"),
        E("c1f9"),
        E("4fad"),
        E("c1df"))
          , i = E.n(r)
          , A = E("6e87")
          , s = E.n(A)
          , u = E("6612")
          , o = E.n(u)
          , R = E("7909")
          , d = E("2e21")
          , T = E("72a1");
        function l() {
            var e = new Date
              , a = e.getHours();
            return a < 9 ? "早上好" : a <= 11 ? "上午好" : a <= 13 ? "中午好" : a < 20 ? "下午好" : "晚上好"
        }
        function b() {
            var e = ["休息一会儿吧", "准备吃什么呢?", "要不要放松下", "我猜你可能累了"]
              , a = Math.floor(Math.random() * e.length);
            return e[a]
        }
        function N(e) {
            var a = 0;
            if (!e)
                return a;
            for (var E = {}, t = 0; t < e.length; t++)
                E[e[t]] = (E[e[t]] || 0) + 1,
                a += 5 / E[e[t]];
            var n = {
                digits: /\d/.test(e),
                lower: /[a-z]/.test(e),
                upper: /[A-Z]/.test(e),
                nonWords: /\W/.test(e)
            }
              , c = 0;
            for (var _ in n)
                c += !0 === n[_] ? 1 : 0;
            return a += 10 * (c - 1),
            parseInt(a)
        }
        var C = function(e) {
            var a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
              , E = a.labelShowValue
              , t = void 0 !== E && E
              , n = [];
            return Object.keys(e).forEach((function(a) {
                n.push({
                    label: "".concat(t ? "".concat(a, "-") : "").concat(e[a]),
                    value: a
                })
            }
            )),
            n
        }
          , O = function(e) {
            var a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "startAt"
              , E = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "endAt"
              , t = s.a.get(e, "timeInterval")
              , r = e;
            if (t && t.length) {
                var A, u = e.timeInterval, o = Object(_["a"])(e, ["timeInterval"]);
                r = Object(c["a"])(Object(c["a"])({}, o), {}, (A = {},
                Object(n["a"])(A, a, "".concat(i()(u[0]).format("YYYY-MM-DD"), " 00:00:00")),
                Object(n["a"])(A, E, "".concat(i()(u[1]).format("YYYY-MM-DD"), " 23:59:59")),
                A))
            } else
                delete r[a],
                delete r[E];
            return r
        }
          , I = function(e, a, E) {
            if (e && e.length) {
                var t, c = {};
                return t = {},
                Object(n["a"])(t, a, "".concat(i()(e[0]).format("YYYY-MM-DD"), " 00:00:00")),
                Object(n["a"])(t, E, "".concat(i()(e[1]).format("YYYY-MM-DD"), " 23:59:59")),
                c = t,
                c
            }
            return ""
        }
          , L = function(e, a, E) {
            var t = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "YYYYMMDD";
            if (e && e.length) {
                var c, _ = {};
                return c = {},
                Object(n["a"])(c, a, "".concat(i()(e[0]).format(t))),
                Object(n["a"])(c, E, "".concat(i()(e[1]).format(t))),
                _ = c,
                _
            }
            return ""
        };
        function m(e) {
            var a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2;
            return e ? e.toFixed(a) : "0.00"
        }
        function M(e) {
            var a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "YYYY-MM-DD HH:mm:ss";
            return e ? i()(e).format(a) : ""
        }
        function h(e) {
            return new Promise((function(a, E) {
                var t = new FileReader;
                t.readAsDataURL(e),
                t.onload = function() {
                    return a(t.result)
                }
                ,
                t.onerror = function(e) {
                    return E(e)
                }
            }
            ))
        }
        function S(e) {
            for (var a = window.location.href, E = a.substring(a.indexOf("?") + 1), t = E.split("&"), n = 0; n < t.length; n++) {
                var c = t[n].split("=");
                if (c[0] == e)
                    return c[1]
            }
            return !1
        }
        function f(e) {
            var a = String(e)
              , E = a.indexOf(".");
            if (-1 === E)
                return o()(a).format("0,00.00");
            var t = a.substring(0, a.indexOf(".") + 3);
            return o()(t).format("0,00.00")
        }
        function Y(e) {
            return new Promise((function(a) {
                var E = new FileReader;
                E.readAsBinaryString(e),
                E.onload = function(e) {
                    a(e.target.result)
                }
            }
            ))
        }
        function U() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0
              , a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
            return Object(R["a"])(Object(R["b"])(e), Object(R["b"])(a))
        }
        function p(e, a, E) {
            var t = String(a).split(".")[1];
            a && !/^\d+(\.\d+)?$/.test(a) ? E(new Error("请输入有效数字")) : t && t.length > 2 ? E(new Error("最多两位小数")) : E()
        }
        function D(e, a, E) {
            var t = String(a).split(".")[1];
            a && !/^\d+(\.\d+)?$/.test(a) ? E(new Error("请输入有效数字")) : t && t.length > 2 ? E(new Error("最多两位小数")) : a < 0 || a > 10 ? E(new Error("最低金额为0~10元")) : E()
        }
        function y(e, a, E) {
            var t = String(a).split(".")[1];
            a && !/^\d+(\.\d+)?$/.test(a) ? E(new Error("请输入有效数字")) : t && t.length > 3 ? E(new Error("最多三位小数")) : E()
        }
        function g(e, a, E) {
            var t = String(a).split(".")[1];
            a && !/^\d+(\.\d+)?$/.test(a) ? E(new Error("请输入有效数字")) : t && t.length > 3 ? E(new Error("最多三位小数")) : a < .39 ? E(new Error("费率最小0.39%")) : E()
        }
        function G(e, a, E) {
            var t = String(a).split(".")[1];
            a && !/^\d+(\.\d+)?$/.test(a) ? E(new Error("请输入有效数字")) : t && t.length > 2 ? E(new Error("最多两位小数")) : a > 9999 ? E(new Error("封顶金额最高9999元")) : E()
        }
        function P(e) {
            return Object(d["a"])(e)
        }
        function B(e) {
            return e.map((function(e) {
                var a = T["a"].getValue(e, "meta.permission", []);
                if (0 === a.length || Object(d["a"])(a)) {
                    var E = Object(c["a"])({}, e);
                    return Array.isArray(E.children) && (E.children = B(E.children)),
                    E
                }
            }
            )).filter((function(e) {
                return !!e
            }
            ))
        }
        function v(e, a, E) {
            "" === a || void 0 === a ? E(new Error("请输入手机号")) : /^(1)\d{10}$/.test(a) ? E() : E(new Error("请输入有效手机号"))
        }
        function k(e) {
            var a = Number.parseInt(e);
            return isNaN(a) ? "" : a
        }
        function W(e) {
            if ("" === e)
                return "";
            if (e < 0)
                return 0;
            e += "",
            e = e.trim();
            var a = e.replace(/^(\-)*(\d+)\.(\d\d).*$/, "$1$2.$3");
            return "null" == a ? "" : a
        }
        function Q(e, a) {
            if ("/system/login" === a.url)
                return e = "",
                "";
            if (e)
                return e;
            var E = JSON.parse(sessionStorage.getItem("YS_ACCESS_INFO")) || {};
            return E.id ? E.id : ""
        }
        function F(e, a, E) {
            a && !/^[1-9][0-9]*$/.test(a) ? E(new Error("请输入正整数")) : E()
        }
        function j(e) {
            return Object.fromEntries(Object.entries(e).filter((function(e) {
                var a = Object(t["a"])(e, 2)
                  , E = (a[0],
                a[1]);
                return null !== E && void 0 !== E && "" !== E
            }
            )))
        }
    },
    d5c8: function(e, a, E) {
        "use strict";
        E.r(a),
        a["default"] = {
            "result.fail.error.title": "提交失败",
            "result.fail.error.description": "请核对并修改以下信息后，再重新提交。",
            "result.fail.error.hint-title": "您提交的内容有如下错误：",
            "result.fail.error.hint-text1": "您的账户已被冻结",
            "result.fail.error.hint-btn1": "立即解冻",
            "result.fail.error.hint-text2": "您的账户还不具备申请资格",
            "result.fail.error.hint-btn2": "立即升级",
            "result.fail.error.btn-text": "返回修改"
        }
    },
    dec6: function(e, a, E) {
        "use strict";
        E.r(a);
        var t = E("f3f3")
          , n = E("5dd5");
        a["default"] = Object(t["a"])({}, n["default"])
    },
    f23b: function(e, a, E) {
        "use strict";
        E.d(a, "a", (function() {
            return r
        }
        )),
        E.d(a, "c", (function() {
            return i
        }
        )),
        E.d(a, "b", (function() {
            return A
        }
        ));
        E("d3b7"),
        E("3ca3"),
        E("ddb0");
        var t = E("680a")
          , n = E("5696")
          , c = E("93db")
          , _ = E("3149")
          , r = [{
            path: "/",
            name: "index",
            component: t["a"],
            meta: {
                title: "menu.home"
            },
            redirect: n["a"].dashboard,
            children: [{
                name: "dashboard",
                meta: {
                    title: "公告",
                    icon: "home",
                    keepAlive: !1
                },
                path: n["a"].dashboard,
                component: function() {
                    return E.e("chunk-9699d590").then(E.bind(null, "7277"))
                }
            }, {
                name: c["a"].notice.detail,
                meta: {
                    title: c["a"].notice.detail
                },
                hidden: !0,
                path: n["a"].systemNotice.detail,
                component: function() {
                    return E.e("chunk-418b56ee").then(E.bind(null, "e131"))
                }
            }, {
                name: "changePsd",
                meta: {
                    title: "修改密码",
                    icon: ""
                },
                hidden: !0,
                path: n["a"].changePsd,
                component: function() {
                    return Promise.all([E.e("chunk-70c7a28c"), E.e("chunk-36c1f648"), E.e("chunk-2d0dacf8"), E.e("chunk-3b9c38a6"), E.e("chunk-71119059")]).then(E.bind(null, "af58"))
                }
            }, {
                name: "changePsd",
                meta: {
                    title: "修改手机号",
                    icon: ""
                },
                hidden: !0,
                path: n["a"].changePhone,
                component: function() {
                    return Promise.all([E.e("chunk-70c7a28c"), E.e("chunk-36c1f648"), E.e("chunk-2d0dacf8"), E.e("chunk-3b9c38a6"), E.e("chunk-d55dfed2")]).then(E.bind(null, "9749"))
                }
            }, {
                name: c["a"].home.todoList,
                meta: {
                    title: c["a"].home.todoList,
                    icon: "unordered-list",
                    keepAlive: !1,
                    permission: [_["b"].INDEX_PAGE_ALL, _["b"].INDEX_PAGE_QUERY]
                },
                path: n["a"].toToList.base,
                component: function() {
                    return E.e("chunk-c2e9e1ae").then(E.bind(null, "a9e5"))
                }
            }, {
                name: c["a"].branchOffice,
                meta: {
                    title: c["a"].branchOffice,
                    keepAlive: !0,
                    icon: "cluster",
                    permission: [_["b"].BRANCH_OFFICE_ALL, _["b"].BRANCH_OFFICE_QUERY, _["b"].BRANCH_OFFICE_BUSINESS_ALL, _["b"].BRANCH_OFFICE_BUSINESS_QUERY, _["b"].BRANCH_OFFICE_BUSINESS_REVIEW_ALL, _["b"].BRANCH_OFFICE_BUSINESS_REVIEW_QUERY]
                },
                path: n["a"].branchOffice.path,
                redirect: n["a"].branchOffice.query,
                component: t["b"],
                children: [{
                    name: c["a"].branchOfficeQuery,
                    meta: {
                        title: c["a"].branchOffice,
                        keepAlive: !0,
                        permission: [_["b"].BRANCH_OFFICE_ALL, _["b"].BRANCH_OFFICE_QUERY]
                    },
                    path: n["a"].branchOffice.query,
                    component: function() {
                        return Promise.all([E.e("chunk-70c7a28c"), E.e("chunk-36c1f648"), E.e("chunk-14a59e0c"), E.e("chunk-590135bc")]).then(E.bind(null, "0d61"))
                    }
                }, {
                    name: c["a"].branchOfficeCreate,
                    meta: {
                        title: c["a"].branchOfficeCreate,
                        keepAlive: !1,
                        permission: [_["b"].BRANCH_OFFICE_ALL, _["b"].BRANCH_OFFICE_CREATE]
                    },
                    path: n["a"].branchOffice.create,
                    component: function() {
                        return Promise.all([E.e("chunk-70c7a28c"), E.e("chunk-36c1f648"), E.e("chunk-2d0dacf8"), E.e("chunk-3b9c38a6"), E.e("chunk-968bce2e")]).then(E.bind(null, "9f2e"))
                    },
                    hidden: !0
                }, {
                    name: c["a"].branchOfficeUpdate,
                    meta: {
                        title: c["a"].branchOfficeUpdate,
                        keepAlive: !1,
                        permission: [_["b"].BRANCH_OFFICE_ALL, _["b"].BRANCH_OFFICE_UPDATE]
                    },
                    path: n["a"].branchOffice.update,
                    component: function() {
                        return Promise.all([E.e("chunk-70c7a28c"), E.e("chunk-36c1f648"), E.e("chunk-2d0dacf8"), E.e("chunk-3b9c38a6"), E.e("chunk-968bce2e")]).then(E.bind(null, "9f2e"))
                    },
                    hidden: !0
                }, {
                    name: c["a"].branchOfficeBusiness,
                    meta: {
                        title: c["a"].branchOfficeBusiness,
                        keepAlive: !0
                    },
                    path: n["a"].branchOfficeBusiness.path,
                    redirect: n["a"].branchOfficeBusiness.query,
                    hideChildrenInMenu: !0,
                    component: t["b"],
                    children: [{
                        name: c["a"].branchOfficeBusinessQuery,
                        meta: {
                            title: c["a"].branchOfficeBusiness,
                            keepAlive: !0,
                            permission: [_["b"].BRANCH_OFFICE_BUSINESS_ALL, _["b"].BRANCH_OFFICE_BUSINESS_QUERY]
                        },
                        path: n["a"].branchOfficeBusiness.query,
                        component: function() {
                            return E.e("chunk-8922c7a8").then(E.bind(null, "c0ee"))
                        }
                    }, {
                        name: c["a"].branchOfficeBusinessCreate,
                        meta: {
                            title: c["a"].branchOfficeBusinessCreate,
                            keepAlive: !1
                        },
                        path: n["a"].branchOfficeBusiness.create,
                        component: function() {
                            return Promise.all([E.e("chunk-70c7a28c"), E.e("chunk-33c1e548"), E.e("chunk-2d0abdcc")]).then(E.bind(null, "16a2"))
                        }
                    }]
                }, {
                    name: c["a"].branchOfficeBusinessReview,
                    meta: {
                        title: c["a"].branchOfficeBusinessReview,
                        keepAlive: !0,
                        permission: [_["b"].BRANCH_OFFICE_BUSINESS_REVIEW_ALL, _["b"].BRANCH_OFFICE_BUSINESS_REVIEW_QUERY]
                    },
                    path: n["a"].branchOfficeBusiness.review,
                    component: function() {
                        return Promise.all([E.e("chunk-70c7a28c"), E.e("chunk-36c1f648"), E.e("chunk-14a59e0c"), E.e("chunk-011de43d")]).then(E.bind(null, "41d8"))
                    }
                }]
            }, {
                path: n["a"].agency.path,
                component: t["b"],
                redirect: n["a"].agency.query,
                meta: {
                    title: c["a"].agency,
                    icon: "idcard",
                    permission: [_["b"].AGENCY_ALL, _["b"].AGENCY_QUERY, _["b"].AGENCY_ENABLE_MERCHANT_IN, _["b"].AGENCY_BUSINESS_ALL, _["b"].AGENCY_BUSINESS_QUERY, _["b"].AGENCY_BUSINESS_DOWNLOAD, _["b"].AGENCY_DOWNLOAD, _["b"].AGENCY_TEAM_BUSINESS_DOWNLOAD, _["b"].AGENCY_TEAM_MEMBER_BUSINESS_DOWNLOAD, _["b"].AGENCY_TEAM_DOWNLOAD, _["b"].AGENCY_TEAM_MEMBER_DOWNLOAD, _["b"].AGENCY_TEAM_ALL, _["b"].AGENCY_TEAM_QUERY, _["b"].AGENCY_TEAM_CREATE, _["b"].AGENCY_TEAM_BUSINESS_ALL, _["b"].AGENCY_TEAM_BUSINESS_QUERY, _["b"].AGENCY_TEAM_MEMBER_ALL, _["b"].AGENCY_TEAM_MEMBER_QUERY, _["b"].AGENCY_TEAM_MEMBER_BUSINESS_ALL, _["b"].AGENCY_TEAM_MEMBER_BUSINESS_QUERY, _["b"].AGENCY_OPEN_PAY_PERMISSION, _["b"].AGENCY_TEAM_MEMBER_MODIFY_ALL, _["b"].AGENCY_TEAM_MEMBER_MODIFY_QUERY, _["b"].AGENCY_TEAM_MEMBER_MODIFY_UPDATE, _["b"].AGENCY_DOWNLOAD_EXCEL, _["b"].AGENCY_UPDATE_SETTLEWAY, _["b"].AGENCY_UPDATE_SUB_ORG, _["b"].AGENCY_OPEN_EQT_WALLET, _["b"].AGENCY_ACT_LABEL]
                },
                children: [{
                    name: c["a"].agencyAgenciesQuery,
                    meta: {
                        title: c["a"].agencyAgencies,
                        keepAlive: !0,
                        permission: [_["b"].AGENCY_ALL, _["b"].AGENCY_QUERY, _["b"].AGENCY_DOWNLOAD, _["b"].AGENCY_OPEN_PAY_PERMISSION, _["b"].AGENCY_DOWNLOAD_EXCEL, _["b"].AGENCY_UPDATE_SETTLEWAY, _["b"].AGENCY_UPDATE_SUB_ORG, _["b"].AGENCY_ENABLE_MERCHANT_IN, _["b"].AGENCY_OPEN_EQT_WALLET, _["b"].AGENCY_ACT_LABEL]
                    },
                    path: n["a"].agency.query,
                    component: function() {
                        return Promise.all([E.e("chunk-3ddd0db4"), E.e("chunk-70c7a28c"), E.e("chunk-36c1f648"), E.e("chunk-2d0dacf8"), E.e("chunk-71c04d69")]).then(E.bind(null, "90a6"))
                    }
                }, {
                    path: n["a"].agency.create,
                    name: c["a"].agencyAgenciesCreate,
                    hidden: !0,
                    component: function() {
                        return Promise.all([E.e("chunk-70c7a28c"), E.e("chunk-36c1f648"), E.e("chunk-2d0dacf8"), E.e("chunk-3b9c38a6"), E.e("chunk-a167b016")]).then(E.bind(null, "8252"))
                    },
                    meta: {
                        title: c["a"].agencyAgenciesCreate,
                        keepAlive: !1,
                        permission: [_["b"].AGENCY_ALL, _["b"].AGENCY_CREATE]
                    }
                }, {
                    path: n["a"].agency.update,
                    name: c["a"].agencyAgenciesUpdate,
                    hidden: !0,
                    component: function() {
                        return Promise.all([E.e("chunk-70c7a28c"), E.e("chunk-36c1f648"), E.e("chunk-2d0dacf8"), E.e("chunk-3b9c38a6"), E.e("chunk-4473923a")]).then(E.bind(null, "9ddc"))
                    },
                    meta: {
                        title: c["a"].agencyAgenciesUpdate,
                        keepAlive: !1,
                        permission: [_["b"].AGENCY_ALL, _["b"].AGENCY_UPDATE]
                    }
                }, {
                    path: n["a"].agencyReview.query,
                    name: c["a"].agencyReview,
                    meta: {
                        title: c["a"].agencyReview,
                        keepAlive: !0,
                        permission: [_["b"].AGENCY_REVIEW_ALL, _["b"].AGENCY_REVIEW_QUERY]
                    },
                    component: function() {
                        return Promise.all([E.e("chunk-3ddd0db4"), E.e("chunk-2d0dacf8"), E.e("chunk-3f4c1290"), E.e("chunk-165647e7")]).then(E.bind(null, "3ad8"))
                    }
                }, {
                    path: n["a"].agencyReview.update,
                    name: c["a"].agencyAgenciesUpdateBusiness,
                    hidden: !0,
                    component: function() {
                        return Promise.all([E.e("chunk-70c7a28c"), E.e("chunk-36c1f648"), E.e("chunk-2d0dacf8"), E.e("chunk-3b9c38a6"), E.e("chunk-a167b016")]).then(E.bind(null, "8252"))
                    },
                    meta: {
                        title: c["a"].agencyAgenciesUpdate,
                        keepAlive: !1,
                        permission: [_["b"].AGENCY_ALL, _["b"].AGENCY_UPDATE]
                    }
                }, {
                    path: n["a"].agencyBusiness.path,
                    redirect: n["a"].agencyBusiness.query,
                    name: c["a"].agencyBusinesses,
                    component: t["b"],
                    meta: {
                        title: c["a"].agencyBusinesses,
                        keepAlive: !0,
                        permission: [_["b"].AGENCY_BUSINESS_ALL, _["b"].AGENCY_BUSINESS_QUERY, _["b"].AGENCY_BUSINESS_DOWNLOAD]
                    },
                    hideChildrenInMenu: !0,
                    children: [{
                        path: n["a"].agencyBusiness.query,
                        name: c["a"].agencyBusinessesQuery,
                        component: function() {
                            return Promise.all([E.e("chunk-3ddd0db4"), E.e("chunk-70c7a28c"), E.e("chunk-36c1f648"), E.e("chunk-14a59e0c"), E.e("chunk-7a269a80")]).then(E.bind(null, "ff81"))
                        },
                        meta: {
                            title: c["a"].agencyBusinessesQuery,
                            keepAlive: !0,
                            permission: [_["b"].AGENCY_BUSINESS_ALL, _["b"].AGENCY_BUSINESS_QUERY]
                        }
                    }, {
                        path: n["a"].agencyBusiness.create,
                        name: c["a"].agencyBusinessesCreate,
                        hidden: !0,
                        component: function() {
                            return Promise.all([E.e("chunk-70c7a28c"), E.e("chunk-33c1e548"), E.e("chunk-2d0d0281")]).then(E.bind(null, "677a"))
                        },
                        meta: {
                            title: c["a"].agencyBusinessesCreate,
                            keepAlive: !1,
                            permission: [_["b"].AGENCY_BUSINESS_ALL, _["b"].AGENCY_BUSINESS_CREATE]
                        }
                    }, {
                        path: n["a"].agencyBusiness.update,
                        name: c["a"].agencyBusinessesUpdate,
                        hidden: !0,
                        component: function() {
                            return Promise.all([E.e("chunk-70c7a28c"), E.e("chunk-33c1e548"), E.e("chunk-2d0d0281")]).then(E.bind(null, "677a"))
                        },
                        meta: {
                            title: c["a"].agencyBusinessesUpdate,
                            keepAlive: !1,
                            permission: [_["b"].AGENCY_BUSINESS_ALL, _["b"].AGENCY_BUSINESS_UPDATE]
                        }
                    }]
                }, {
                    name: c["a"].agencyBusinessReview,
                    meta: {
                        title: c["a"].agencyBusinessReview,
                        permission: [_["b"].AGENCY_BUSINESS_REVIEW_ALL, _["b"].AGENCY_BUSINESS_REVIEW_QUERY],
                        keepAlive: !0
                    },
                    path: n["a"].agencyBusiness.review,
                    component: function() {
                        return Promise.all([E.e("chunk-3ddd0db4"), E.e("chunk-5792386c")]).then(E.bind(null, "e648"))
                    }
                }, {
                    name: c["a"].agencyTeams,
                    meta: {
                        title: c["a"].agencyTeams,
                        keepAlive: !0,
                        permission: [_["b"].AGENCY_TEAM_ALL, _["b"].AGENCY_TEAM_QUERY, _["b"].AGENCY_TEAM_CREATE, _["b"].AGENCY_TEAM_UPDATE, _["b"].AGENCY_TEAM_DOWNLOAD]
                    },
                    path: n["a"].agencyTeams.query,
                    component: function() {
                        return Promise.all([E.e("chunk-3ddd0db4"), E.e("chunk-74678edd"), E.e("chunk-1bc5b1ea")]).then(E.bind(null, "3c9a"))
                    }
                }, {
                    path: n["a"].agencyTeams.create,
                    name: c["a"].agencyTeamsCreate,
                    hidden: !0,
                    component: function() {
                        return Promise.all([E.e("chunk-70c7a28c"), E.e("chunk-36c1f648"), E.e("chunk-2d0dacf8"), E.e("chunk-3b9c38a6"), E.e("chunk-4d88cb19")]).then(E.bind(null, "c315"))
                    },
                    meta: {
                        title: c["a"].agencyTeamsCreate,
                        keepAlive: !0,
                        permission: [_["b"].AGENCY_TEAM_ALL, _["b"].AGENCY_TEAM_CREATE]
                    }
                }, {
                    path: n["a"].agencyTeams.update,
                    name: c["a"].agencyTeamsUpdate,
                    hidden: !0,
                    component: function() {
                        return Promise.all([E.e("chunk-70c7a28c"), E.e("chunk-36c1f648"), E.e("chunk-2d0dacf8"), E.e("chunk-3b9c38a6"), E.e("chunk-4d88cb19")]).then(E.bind(null, "c315"))
                    },
                    meta: {
                        title: c["a"].agencyTeamsUpdate,
                        keepAlive: !1,
                        permission: [_["b"].AGENCY_TEAM_ALL, _["b"].AGENCY_TEAM_UPDATE]
                    }
                }, {
                    path: n["a"].agencyTeamsBusiness.path,
                    redirect: n["a"].agencyTeamsBusiness.query,
                    name: c["a"].agencyTeamsBusinesses,
                    component: t["b"],
                    meta: {
                        title: c["a"].agencyTeamsBusinesses,
                        keepAlive: !1,
                        permission: [_["b"].AGENCY_TEAM_BUSINESS_ALL, _["b"].AGENCY_TEAM_BUSINESS_QUERY, _["b"].AGENCY_TEAM_BUSINESS_DOWNLOAD]
                    },
                    hideChildrenInMenu: !0,
                    children: [{
                        path: n["a"].agencyTeamsBusiness.query,
                        name: c["a"].agencyTeamsBusinessesQuery,
                        component: function() {
                            return Promise.all([E.e("chunk-3ddd0db4"), E.e("chunk-70c7a28c"), E.e("chunk-36c1f648"), E.e("chunk-14a59e0c"), E.e("chunk-7debbbae")]).then(E.bind(null, "e2a1"))
                        },
                        meta: {
                            title: c["a"].agencyTeamsBusinessesQuery,
                            keepAlive: !0,
                            permission: [_["b"].AGENCY_TEAM_BUSINESS_ALL, _["b"].AGENCY_TEAM_BUSINESS_QUERY, _["b"].AGENCY_TEAM_BUSINESS_DOWNLOAD]
                        }
                    }, {
                        path: n["a"].agencyTeamsBusiness.create,
                        name: c["a"].agencyTeamsBusinessesCreate,
                        hidden: !0,
                        component: function() {
                            return Promise.all([E.e("chunk-70c7a28c"), E.e("chunk-36c1f648"), E.e("chunk-2d0dacf8"), E.e("chunk-6e211f14"), E.e("chunk-2d0a4b05")]).then(E.bind(null, "0807"))
                        },
                        meta: {
                            title: c["a"].agencyTeamsBusinessesCreate,
                            keepAlive: !1,
                            permission: [_["b"].AGENCY_TEAM_BUSINESS_ALL, _["b"].AGENCY_TEAM_BUSINESS_CREATE]
                        }
                    }, {
                        path: n["a"].agencyTeamsBusiness.update,
                        name: c["a"].agencyTeamsBusinessesUpdate,
                        hidden: !0,
                        component: function() {
                            return Promise.all([E.e("chunk-70c7a28c"), E.e("chunk-36c1f648"), E.e("chunk-2d0dacf8"), E.e("chunk-6e211f14"), E.e("chunk-2d0a4b05")]).then(E.bind(null, "0807"))
                        },
                        meta: {
                            title: c["a"].agencyTeamsBusinessesUpdate,
                            keepAlive: !1,
                            permission: [_["b"].AGENCY_TEAM_BUSINESS_ALL, _["b"].AGENCY_TEAM_BUSINESS_UPDATE]
                        }
                    }]
                }, {
                    name: c["a"].agencyTeamMemberInfoEN,
                    meta: {
                        title: c["a"].agencyTeamMemberInfo,
                        keepAlive: !0,
                        permission: [_["b"].AGENCY_TEAM_MEMBER_ALL, _["b"].AGENCY_TEAM_MEMBER_QUERY, _["b"].AGENCY_TEAM_MEMBER_DOWNLOAD]
                    },
                    path: n["a"].agencyTeamMember.query,
                    component: function() {
                        return Promise.all([E.e("chunk-3ddd0db4"), E.e("chunk-34841ae6")]).then(E.bind(null, "2425"))
                    }
                }, {
                    name: c["a"].agencyTeamMemberCreate,
                    meta: {
                        title: c["a"].agencyTeamMemberCreate,
                        keepAlive: !1,
                        permission: [_["b"].AGENCY_TEAM_MEMBER_ALL, _["b"].AGENCY_TEAM_MEMBER_CREATE]
                    },
                    path: n["a"].agencyTeamMember.create,
                    hidden: !0,
                    component: function() {
                        return Promise.all([E.e("chunk-70c7a28c"), E.e("chunk-36c1f648"), E.e("chunk-2d0dacf8"), E.e("chunk-3b9c38a6"), E.e("chunk-78c68993")]).then(E.bind(null, "e7ae"))
                    }
                }, {
                    name: c["a"].agencyTeamMemberUpdate,
                    meta: {
                        title: c["a"].agencyTeamMemberUpdate,
                        keepAlive: !1,
                        permission: [_["b"].AGENCY_TEAM_MEMBER_ALL, _["b"].AGENCY_TEAM_MEMBER_UPDATE]
                    },
                    path: n["a"].agencyTeamMember.update,
                    hidden: !0,
                    component: function() {
                        return Promise.all([E.e("chunk-70c7a28c"), E.e("chunk-36c1f648"), E.e("chunk-2d0dacf8"), E.e("chunk-3b9c38a6"), E.e("chunk-78c68993")]).then(E.bind(null, "e7ae"))
                    }
                }, {
                    path: n["a"].agencyTeamMemberBusiness.path,
                    redirect: n["a"].agencyTeamMemberBusiness.query,
                    name: c["a"].agencyTeamMemberBusinesses,
                    component: t["b"],
                    meta: {
                        title: c["a"].agencyTeamMemberBusinesses,
                        keepAlive: !1,
                        permission: [_["b"].AGENCY_TEAM_MEMBER_BUSINESS_ALL, _["b"].AGENCY_TEAM_MEMBER_BUSINESS_QUERY, _["b"].AGENCY_TEAM_MEMBER_BUSINESS_DOWNLOAD, _["b"].AGENCY_TEAM_MEMBER_BUSINESS_UPDATE]
                    },
                    hideChildrenInMenu: !0,
                    children: [{
                        path: n["a"].agencyTeamMemberBusiness.query,
                        name: c["a"].agencyTeamMemberBusinessesQuery,
                        component: function() {
                            return Promise.all([E.e("chunk-3ddd0db4"), E.e("chunk-70c7a28c"), E.e("chunk-36c1f648"), E.e("chunk-14a59e0c"), E.e("chunk-ca901ba6")]).then(E.bind(null, "b356"))
                        },
                        meta: {
                            title: c["a"].agencyTeamMemberBusinessesQuery,
                            keepAlive: !0,
                            permission: [_["b"].AGENCY_TEAM_MEMBER_BUSINESS_ALL, _["b"].AGENCY_TEAM_MEMBER_BUSINESS_QUERY, _["b"].AGENCY_TEAM_MEMBER_BUSINESS_UPDATE]
                        }
                    }, {
                        path: n["a"].agencyTeamMemberBusiness.create,
                        name: c["a"].agencyTeamMemberBusinessesCreate,
                        hidden: !0,
                        component: function() {
                            return Promise.all([E.e("chunk-70c7a28c"), E.e("chunk-36c1f648"), E.e("chunk-2d0dacf8"), E.e("chunk-6e211f14"), E.e("chunk-2d0b6c4b")]).then(E.bind(null, "1f22"))
                        },
                        meta: {
                            title: c["a"].agencyTeamMemberBusinessesCreate,
                            keepAlive: !1,
                            permission: [_["b"].AGENCY_TEAM_MEMBER_BUSINESS_ALL, _["b"].AGENCY_TEAM_MEMBER_BUSINESS_CREATE]
                        }
                    }, {
                        path: n["a"].agencyTeamMemberBusiness.update,
                        name: c["a"].agencyTeamMemberBusinessesUpdate,
                        hidden: !0,
                        component: function() {
                            return Promise.all([E.e("chunk-70c7a28c"), E.e("chunk-36c1f648"), E.e("chunk-2d0dacf8"), E.e("chunk-6e211f14"), E.e("chunk-2d0b6c4b")]).then(E.bind(null, "1f22"))
                        },
                        meta: {
                            title: c["a"].agencyTeamMemberBusinessesUpdate,
                            keepAlive: !1,
                            permission: [_["b"].AGENCY_TEAM_MEMBER_BUSINESS_ALL, _["b"].AGENCY_TEAM_MEMBER_BUSINESS_UPDATE]
                        }
                    }]
                }, {
                    path: n["a"].agencyTeamExchange.path,
                    redirect: n["a"].agencyTeamExchange.query,
                    name: c["a"].agencyTeamExchangeBase,
                    component: t["b"],
                    meta: {
                        title: c["a"].agencyTeamExchange,
                        keepAlive: !0,
                        permission: [_["b"].AGENCY_TEAM_MEMBER_MODIFY_ALL, _["b"].AGENCY_TEAM_MEMBER_MODIFY_QUERY, _["b"].AGENCY_TEAM_MEMBER_MODIFY_UPDATE]
                    },
                    hideChildrenInMenu: !0,
                    children: [{
                        path: n["a"].agencyTeamExchange.query,
                        name: c["a"].agencyTeamExchange,
                        component: function() {
                            return E.e("chunk-be3357de").then(E.bind(null, "d024"))
                        },
                        meta: {
                            title: c["a"].agencyTeamExchangeQuery,
                            keepAlive: !0,
                            permission: []
                        }
                    }]
                }, {
                    path: n["a"].businessTemplate.base,
                    redirect: n["a"].businessTemplate.query,
                    name: c["a"].businessTemplateBase,
                    component: t["b"],
                    meta: {
                        title: c["a"].businessTemplate,
                        permission: [_["b"].BUSINESS_TEMPLATE_ALL, _["b"].BUSINESS_TEMPLATE_QUERY, _["b"].BUSINESS_TEMPLATE_CREATE, _["b"].BUSINESS_TEMPLATE_UPDATE, _["b"].BUSINESS_TEMPLATE_DELETE]
                    },
                    hideChildrenInMenu: !0,
                    children: [{
                        path: n["a"].businessTemplate.query,
                        name: c["a"].businessTemplate,
                        component: function() {
                            return Promise.all([E.e("chunk-3ddd0db4"), E.e("chunk-3acb5635")]).then(E.bind(null, "a83d"))
                        },
                        meta: {
                            title: c["a"].businessTemplate,
                            keepAlive: !0,
                            permission: []
                        }
                    }, {
                        path: n["a"].businessTemplate.edit,
                        name: c["a"].businessTemplateEdit,
                        component: function() {
                            return Promise.all([E.e("chunk-70c7a28c"), E.e("chunk-33c1e548"), E.e("chunk-2d0e62d4")]).then(E.bind(null, "9843"))
                        },
                        meta: {
                            title: c["a"].businessTemplateEdit,
                            keepAlive: !1,
                            permission: []
                        }
                    }]
                }]
            }, {
                path: n["a"].recommend.base,
                component: t["b"],
                redirect: n["a"].recommend.agencyRecommend,
                meta: {
                    title: c["a"].recommend.title,
                    icon: "money-collect",
                    permission: [_["b"].AGENCY_RECOMMEND_ALL, _["b"].AGENCY_RECOMMEND_REWARD_QUERY, _["b"].AGENCY_RECOMMEND_REWARD_COUNT, _["b"].AGENCY_RECOMMEND_REWARD_DOWNLOAD, _["b"].AGENCY_RECOMMEND_SUMMARY_QUERY, _["b"].AGENCY_RECOMMEND_SUMMARY_COUNT, _["b"].AGENCY_RECOMMEND_SUMMARY_DOWNLOAD, _["b"].AGENCY_RECOMMEND_ADMIN_ALL, _["b"].AGENCY_RECOMMEND_ADMIN_QUERY, _["b"].AGENCY_RECOMMEND_ADMIN_CREATE, _["b"].AGENCY_RECOMMEND_ADMIN_UPDATE, _["b"].AGENCY_RECOMMEND_ADMIN_BIND, _["b"].AGENCY_RECOMMEND_ADMIN_REVIEW_ALL, _["b"].AGENCY_RECOMMEND_ADMIN_REVIEW_QUERY, _["b"].AGENCY_RECOMMEND_ADMIN_REVIEW_REVIEW, _["b"].AGENCY_RECOMMEND_ADMIN_EDIT_BELONG]
                },
                children: [{
                    name: c["a"].recommend.agencyRecommend,
                    meta: {
                        title: c["a"].recommend.agencyRecommend,
                        keepAlive: !0,
                        permission: [_["b"].AGENCY_RECOMMEND_ALL, _["b"].AGENCY_RECOMMEND_ADMIN_ALL, _["b"].AGENCY_RECOMMEND_ADMIN_QUERY, _["b"].AGENCY_RECOMMEND_ADMIN_CREATE, _["b"].AGENCY_RECOMMEND_ADMIN_UPDATE, _["b"].AGENCY_RECOMMEND_ADMIN_BIND, _["b"].AGENCY_RECOMMEND_ADMIN_EDIT_BELONG]
                    },
                    path: n["a"].recommend.agencyRecommend,
                    component: function() {
                        return Promise.all([E.e("chunk-3ddd0db4"), E.e("chunk-def0c684"), E.e("chunk-06dd07aa")]).then(E.bind(null, "dfdb"))
                    }
                }, {
                    name: c["a"].recommend.agencyRecommendReview,
                    meta: {
                        title: c["a"].recommend.agencyRecommendReview,
                        keepAlive: !0,
                        permission: [_["b"].AGENCY_RECOMMEND_ALL, _["b"].AGENCY_RECOMMEND_ADMIN_REVIEW_ALL, _["b"].AGENCY_RECOMMEND_ADMIN_REVIEW_QUERY, _["b"].AGENCY_RECOMMEND_ADMIN_REVIEW_REVIEW]
                    },
                    path: n["a"].recommend.agencyRecommendReview,
                    component: function() {
                        return Promise.all([E.e("chunk-def0c684"), E.e("chunk-459badaa")]).then(E.bind(null, "3540"))
                    }
                }, {
                    name: c["a"].recommend.agencyRecommendReward,
                    meta: {
                        title: c["a"].recommend.agencyRecommendReward,
                        keepAlive: !0,
                        permission: [_["b"].AGENCY_RECOMMEND_ALL, _["b"].AGENCY_RECOMMEND_REWARD_QUERY, _["b"].AGENCY_RECOMMEND_REWARD_COUNT, _["b"].AGENCY_RECOMMEND_REWARD_DOWNLOAD]
                    },
                    path: n["a"].recommend.agencyRecommendReward,
                    component: function() {
                        return E.e("chunk-227c188f").then(E.bind(null, "a918"))
                    }
                }, {
                    name: c["a"].recommend.agencyRecommendCreate,
                    hidden: !0,
                    meta: {
                        title: c["a"].recommend.agencyRecommendCreate,
                        keepAlive: !1,
                        permission: [_["b"].AGENCY_RECOMMEND_ALL, _["b"].AGENCY_RECOMMEND_ADMIN_ALL, _["b"].AGENCY_RECOMMEND_ADMIN_CREATE, _["b"].AGENCY_RECOMMEND_ADMIN_UPDATE]
                    },
                    path: n["a"].recommend.agencyRecommendCreate,
                    component: function() {
                        return Promise.all([E.e("chunk-70c7a28c"), E.e("chunk-4ed395bb"), E.e("chunk-a1a10102")]).then(E.bind(null, "7c41"))
                    }
                }, {
                    name: c["a"].recommend.agencyRecommendUpdate,
                    hidden: !0,
                    meta: {
                        title: c["a"].recommend.agencyRecommendUpdate,
                        keepAlive: !1,
                        permission: [_["b"].AGENCY_RECOMMEND_ALL, _["b"].AGENCY_RECOMMEND_ADMIN_ALL, _["b"].AGENCY_RECOMMEND_ADMIN_CREATE, _["b"].AGENCY_RECOMMEND_ADMIN_UPDATE]
                    },
                    path: n["a"].recommend.agencyRecommendUpdate,
                    component: function() {
                        return Promise.all([E.e("chunk-70c7a28c"), E.e("chunk-4ed395bb"), E.e("chunk-a1a10102")]).then(E.bind(null, "7c41"))
                    }
                }, {
                    name: c["a"].recommend.agencyRecommendMonth,
                    meta: {
                        title: c["a"].recommend.agencyRecommendMonth,
                        keepAlive: !0,
                        permission: [_["b"].AGENCY_RECOMMEND_ALL, _["b"].AGENCY_RECOMMEND_SUMMARY_QUERY, _["b"].AGENCY_RECOMMEND_SUMMARY_COUNT, _["b"].AGENCY_RECOMMEND_SUMMARY_DOWNLOAD]
                    },
                    path: n["a"].recommend.agencyRecommendMonth,
                    component: function() {
                        return E.e("chunk-089a36e9").then(E.bind(null, "4b0b"))
                    }
                }]
            }, {
                path: n["a"].merchant.base,
                component: t["b"],
                meta: {
                    title: c["a"].merchant.title,
                    icon: "shop",
                    permission: [_["b"].MERCHANT_TERMINAL_ALL, _["b"].MERCHANT_TERMINAL_QUERY, _["b"].MERCHANT_QRCODE_ALL, _["b"].MERCHANT_QRCODE_QUERY, _["b"].MERCHANT_QRCODE_REVIEW_ALL, _["b"].MERCHANT_QRCODE_REVIEW_QUERY, _["b"].MERCHANT_QRCODE_REVIEW_REVIEW, _["b"].MERCHANT_TERMINAL_REVIEW_ALL, _["b"].MERCHANT_TERMINAL_REVIEW_QUERY, _["b"].MERCHANT_TERMINAL_DOWNLOAD]
                },
                children: [{
                    name: c["a"].merchant.terminal,
                    path: n["a"].merchant.terminalQuery,
                    meta: {
                        title: c["a"].merchant.terminal,
                        keepAlive: !0,
                        permission: [_["b"].MERCHANT_TERMINAL_ALL, _["b"].MERCHANT_TERMINAL_QUERY, _["b"].MERCHANT_TERMINAL_DOWNLOAD]
                    },
                    component: function() {
                        return Promise.all([E.e("chunk-3ddd0db4"), E.e("chunk-3f4c1290"), E.e("chunk-6cc3dfd6")]).then(E.bind(null, "2a7a"))
                    }
                }, {
                    name: c["a"].merchant.terminalReview,
                    path: n["a"].merchant.terminalReviewQuery,
                    meta: {
                        title: c["a"].merchant.terminalReview,
                        keepAlive: !0,
                        permission: [_["b"].MERCHANT_TERMINAL_REVIEW_ALL, _["b"].MERCHANT_TERMINAL_REVIEW_QUERY]
                    },
                    component: function() {
                        return Promise.all([E.e("chunk-3ddd0db4"), E.e("chunk-36c1f648"), E.e("chunk-2d0dacf8"), E.e("chunk-3f4c1290"), E.e("chunk-b56d1b1e")]).then(E.bind(null, "4163"))
                    }
                }, {
                    name: c["a"].merchant.qrcode,
                    path: n["a"].merchant.qrcodeQuery,
                    meta: {
                        title: c["a"].merchant.qrcode,
                        keepAlive: !0,
                        permission: [_["b"].MERCHANT_QRCODE_ALL, _["b"].MERCHANT_QRCODE_QUERY, _["b"].MERCHANT_QRCODE_DOWNLOAD]
                    },
                    component: function() {
                        return Promise.all([E.e("chunk-3ddd0db4"), E.e("chunk-2d0dacf8"), E.e("chunk-3f4c1290"), E.e("chunk-8074d8e8"), E.e("chunk-10e479f4")]).then(E.bind(null, "11d0"))
                    }
                }, {
                    name: c["a"].merchant.qrcodeReview,
                    path: n["a"].merchant.qrcodeReviewQuery,
                    meta: {
                        title: c["a"].merchant.qrcodeReview,
                        keepAlive: !0,
                        permission: [_["b"].MERCHANT_QRCODE_REVIEW_ALL, _["b"].MERCHANT_QRCODE_REVIEW_QUERY]
                    },
                    component: function() {
                        return Promise.all([E.e("chunk-3ddd0db4"), E.e("chunk-2d0dacf8"), E.e("chunk-3f4c1290"), E.e("chunk-8074d8e8"), E.e("chunk-da448bb0")]).then(E.bind(null, "48b8"))
                    }
                }]
            }, {
                path: n["a"].modifyPrice.base,
                component: t["b"],
                redirect: n["a"].modifyPrice.query,
                meta: {
                    title: c["a"].modifyPrice.title,
                    icon: "account-book",
                    permission: [_["b"].BUSINESS_UNIFY_ALL, _["b"].BUSINESS_UNIFY_AGENCY_QUERY, _["b"].BUSINESS_UNIFY_AGENCY_MODIFY]
                },
                children: [{
                    name: c["a"].modifyPrice.queryZH,
                    path: n["a"].modifyPrice.queryBase,
                    redirect: n["a"].modifyPrice.query,
                    component: t["b"],
                    hideChildrenInMenu: !0,
                    meta: {
                        title: c["a"].modifyPrice.queryZH,
                        keepAlive: !0,
                        permission: [_["b"].BUSINESS_UNIFY_ALL, _["b"].BUSINESS_UNIFY_AGENCY_QUERY, _["b"].BUSINESS_UNIFY_AGENCY_MODIFY]
                    },
                    children: [{
                        name: c["a"].modifyPrice.queryEN,
                        path: n["a"].modifyPrice.query,
                        meta: {
                            title: c["a"].modifyPrice.queryZH,
                            keepAlive: !0,
                            permission: []
                        },
                        component: function() {
                            return Promise.all([E.e("chunk-3ddd0db4"), E.e("chunk-199278de")]).then(E.bind(null, "4d24"))
                        }
                    }, {
                        name: c["a"].modifyPrice.createEN,
                        path: n["a"].modifyPrice.create,
                        hidden: !0,
                        meta: {
                            title: c["a"].modifyPrice.createZH,
                            premissions: [],
                            keepAlive: !1
                        },
                        component: function() {
                            return Promise.all([E.e("chunk-70c7a28c"), E.e("chunk-4ed395bb"), E.e("chunk-294e0b34")]).then(E.bind(null, "0318"))
                        }
                    }]
                }]
            }, {
                path: n["a"].trade,
                name: c["a"].trade,
                meta: {
                    title: c["a"].trade,
                    icon: "shopping-cart",
                    keepAlive: !0,
                    permission: [_["b"].PAY_RECORD_ALL, _["b"].PAY_RECORD_QUERY, _["b"].PAY_RECORD_SUM, _["b"].PAY_RECORD_DOWNLOAD]
                },
                component: function() {
                    return Promise.all([E.e("chunk-3ddd0db4"), E.e("chunk-36c1f648"), E.e("chunk-77dd7c1d")]).then(E.bind(null, "071d"))
                }
            }, {
                meta: {
                    title: c["a"].profit,
                    icon: "strikethrough",
                    permission: [_["b"].PROFIT_BUSINESS_RULE_GROUP_ALL, _["b"].PROFIT_BUSINESS_RULE_GROUP_QUERY, _["b"].PROFIT_BUSINESS_RULE_GROUP_CREATE, _["b"].PROFIT_BUSINESS_RULE_GROUP_DELETE, _["b"].PROFIT_BUSINESS_RULE_GROUP_UPDATE, _["b"].PROFIT_RULE_REVIEW_QUERY, _["b"].AGENCY_BIND_PROFIT_RULE_ALL, _["b"].AGENCY_BIND_PROFIT_RULE_QUERY, _["b"].AGENCY_BIND_PROFIT_RULE_REVIEW_ALL, _["b"].AGENCY_BIND_PROFIT_RULE_REVIEW_QUERY, _["b"].AGENCY_BIND_PROFIT_RULE_EXCEL_UPLOAD, _["b"].AGENCY_BIND_PROFIT_RULE_TEMPLATE_DOWNLOAD]
                },
                path: n["a"].profit,
                component: t["b"],
                children: [{
                    name: c["a"].profitRule,
                    meta: {
                        title: c["a"].profitRule,
                        keepAlive: !0,
                        permission: [_["b"].PROFIT_BUSINESS_RULE_GROUP_ALL, _["b"].PROFIT_BUSINESS_RULE_GROUP_QUERY, _["b"].PROFIT_BUSINESS_RULE_GROUP_DELETE, _["b"].PROFIT_BUSINESS_RULE_GROUP_CREATE, _["b"].PROFIT_BUSINESS_RULE_GROUP_UPDATE]
                    },
                    path: n["a"].profitRule.path,
                    component: t["b"],
                    redirect: n["a"].profitRule.query,
                    hideChildrenInMenu: !0,
                    children: [{
                        name: c["a"].profitRuleQuery,
                        meta: {
                            title: c["a"].profitRuleQuery,
                            keepAlive: !0
                        },
                        path: n["a"].profitRule.query,
                        component: function() {
                            return Promise.all([E.e("chunk-027aaf4f"), E.e("chunk-fcbe9164")]).then(E.bind(null, "8840"))
                        }
                    }, {
                        name: c["a"].profitRuleCreate,
                        meta: {
                            title: c["a"].profitRuleCreate,
                            keepAlive: !1,
                            permission: [_["b"].PROFIT_BUSINESS_RULE_GROUP_ALL, _["b"].PROFIT_BUSINESS_RULE_GROUP_CREATE]
                        },
                        path: n["a"].profitRule.create,
                        component: function() {
                            return Promise.all([E.e("chunk-70c7a28c"), E.e("chunk-36c1f648"), E.e("chunk-2d0dacf8"), E.e("chunk-3b9c38a6"), E.e("chunk-50af70e4")]).then(E.bind(null, "45cd"))
                        }
                    }, {
                        name: c["a"].profitRuleCopy,
                        meta: {
                            title: c["a"].profitRuleCopy,
                            keepAlive: !1,
                            permission: [_["b"].PROFIT_BUSINESS_RULE_GROUP_ALL, _["b"].PROFIT_BUSINESS_RULE_GROUP_CREATE]
                        },
                        path: n["a"].profitRule.copy,
                        component: function() {
                            return Promise.all([E.e("chunk-70c7a28c"), E.e("chunk-36c1f648"), E.e("chunk-2d0dacf8"), E.e("chunk-3b9c38a6"), E.e("chunk-50af70e4")]).then(E.bind(null, "45cd"))
                        }
                    }, {
                        name: c["a"].profitRuleUpdate,
                        meta: {
                            title: c["a"].profitRuleUpdate,
                            keepAlive: !1,
                            permission: [_["b"].PROFIT_BUSINESS_RULE_GROUP_ALL, _["b"].PROFIT_BUSINESS_RULE_GROUP_UPDATE]
                        },
                        path: n["a"].profitRule.update,
                        component: function() {
                            return Promise.all([E.e("chunk-70c7a28c"), E.e("chunk-36c1f648"), E.e("chunk-2d0dacf8"), E.e("chunk-3b9c38a6"), E.e("chunk-50af70e4")]).then(E.bind(null, "45cd"))
                        }
                    }]
                }, {
                    name: c["a"].profitRuleReview,
                    meta: {
                        title: c["a"].profitRuleReview,
                        keepAlive: !0,
                        permission: [_["b"].PROFIT_RULE_REVIEW_QUERY]
                    },
                    path: n["a"].profitRuleReview.query,
                    component: function() {
                        return Promise.all([E.e("chunk-027aaf4f"), E.e("chunk-ab2f70c2")]).then(E.bind(null, "7ae2"))
                    }
                }, {
                    name: c["a"].agencyBindProfit,
                    meta: {
                        title: c["a"].agencyBindProfit,
                        keepAlive: !0,
                        permission: [_["b"].AGENCY_BIND_PROFIT_RULE_ALL, _["b"].AGENCY_BIND_PROFIT_RULE_QUERY, _["b"].AGENCY_BIND_PROFIT_RULE_EXCEL_UPLOAD, _["b"].AGENCY_BIND_PROFIT_RULE_TEMPLATE_DOWNLOAD]
                    },
                    path: n["a"].agencyBindProfit.path,
                    component: t["b"],
                    redirect: n["a"].agencyBindProfit.query,
                    hideChildrenInMenu: !0,
                    children: [{
                        name: c["a"].agencyBindProfitQuery,
                        meta: {
                            title: c["a"].agencyBindProfitQuery,
                            keepAlive: !0
                        },
                        path: n["a"].agencyBindProfit.query,
                        component: function() {
                            return Promise.all([E.e("chunk-3ddd0db4"), E.e("chunk-3b0b8977"), E.e("chunk-bdf84bfa")]).then(E.bind(null, "8565"))
                        }
                    }, {
                        name: c["a"].agencyBindProfitCreate,
                        meta: {
                            title: c["a"].agencyBindProfitCreate,
                            keepAlive: !1,
                            permission: [_["b"].AGENCY_BIND_PROFIT_RULE_ALL, _["b"].AGENCY_BIND_PROFIT_RULE_CREATE]
                        },
                        path: n["a"].agencyBindProfit.create,
                        component: function() {
                            return Promise.all([E.e("chunk-70c7a28c"), E.e("chunk-1813b780")]).then(E.bind(null, "977f"))
                        }
                    }, {
                        name: c["a"].agencyBindProfitUpdate,
                        meta: {
                            title: c["a"].agencyBindProfitUpdate,
                            keepAlive: !1,
                            permission: [_["b"].AGENCY_BIND_PROFIT_RULE_ALL, _["b"].AGENCY_BIND_PROFIT_RULE_UPDATE]
                        },
                        path: n["a"].agencyBindProfit.update,
                        component: function() {
                            return Promise.all([E.e("chunk-70c7a28c"), E.e("chunk-1813b780")]).then(E.bind(null, "977f"))
                        }
                    }]
                }, {
                    name: c["a"].agencyBindProfitReview,
                    meta: {
                        title: c["a"].agencyBindProfitReview,
                        keepAlive: !0,
                        permission: [_["b"].AGENCY_BIND_PROFIT_RULE_REVIEW_ALL, _["b"].AGENCY_BIND_PROFIT_RULE_REVIEW_QUERY]
                    },
                    path: n["a"].agencyBindProfitReview.query,
                    component: function() {
                        return Promise.all([E.e("chunk-3ddd0db4"), E.e("chunk-3b0b8977"), E.e("chunk-16379284")]).then(E.bind(null, "05e9"))
                    }
                }]
            }, {
                path: n["a"].profitSettlement.base,
                component: t["b"],
                meta: {
                    title: c["a"].profitSettlement.title,
                    icon: "project",
                    hiddenHeaderContent: !0,
                    permission: [_["b"].DAY_AGENCY_SETTLE_ALL, _["b"].DAY_AGENCY_SETTLE_QUERY, _["b"].DAY_AGENCY_SETTLE_SUM, _["b"].DAY_AGENCY_SETTLE_CREATE_REVIEW, _["b"].DAY_AGENCY_SETTLE_REVIEW_ALL, _["b"].DAY_AGENCY_SETTLE_REVIEW_QUERY, _["b"].DAY_AGENCY_SETTLE_REVIEW_REVIEW, _["b"].DAY_AGENCY_TEAM_MEMBER_SETTLE_ALL, _["b"].DAY_AGENCY_TEAM_MEMBER_SETTLE_QUERY, _["b"].DAY_AGENCY_TEAM_MEMBER_SETTLE_SUM, _["b"].DAY_MERCHANT_SETTLE_ALL, _["b"].DAY_MERCHANT_SETTLE_QUERY, _["b"].DAY_MERCHANT_SETTLE_SUM, _["b"].PROFIT_RECORD_ALL, _["b"].PROFIT_RECORD_QUERY, _["b"].PROFIT_RECORD_COUNT, _["b"].PROFIT_RECORD_DOWNLOAD, _["b"].DAY_AGENCY_SETTLE_DOWNLOAD, _["b"].DAY_AGENCY_TEAM_MEMBER_SETTLE_DOWNLOAD, _["b"].DAY_AGENCY_TEAM_SETTLE_DOWNLOAD, _["b"].DAY_MERCHANT_SETTLE_DOWNLOAD, _["b"].ERROR_PROFIT_RECORD_ALL, _["b"].ERROR_PROFIT_RECORD_QUERY, _["b"].DAY_AGENCY_SETTLE_HAND_SETTLE_SUCCESS, _["b"].PROFIT_RECORD_REVENUE, _["b"].AGENCY_MARKET_PROFIT_MONTH_ALL, _["b"].AGENCY_MARKET_PROFIT_MONTH_QUERY, _["b"].AGENCY_MARKET_PROFIT_MONTH_DOWNLOAD, _["b"].TEAM_PROFIT_RECORD_ALL, _["b"].TEAM_PROFIT_RECORD_QUERY, _["b"].TEAM_PROFIT_RECORD_DOWNLOAD, _["b"].AGENCY_PROFIT_ALL, _["b"].AGENCY_PROFIT_QUERY, _["b"].AGENCY_PROFIT_COUNT, _["b"].AGENCY_PROFIT_DOWNLOAD]
                },
                children: [{
                    name: c["a"].profitSettlement.agencyQuery,
                    path: n["a"].profitSettlement.agencyQuery,
                    meta: {
                        title: c["a"].profitSettlement.agency,
                        keepAlive: !0,
                        hiddenHeaderContent: !0,
                        permission: [_["b"].DAY_AGENCY_SETTLE_ALL, _["b"].DAY_AGENCY_SETTLE_QUERY, _["b"].DAY_AGENCY_SETTLE_SUM, _["b"].DAY_AGENCY_SETTLE_CREATE_REVIEW, _["b"].DAY_AGENCY_SETTLE_DOWNLOAD, _["b"].DAY_AGENCY_SETTLE_HAND_SETTLE_SUCCESS]
                    },
                    component: function() {
                        return Promise.all([E.e("chunk-3ddd0db4"), E.e("chunk-0b1f4dde"), E.e("chunk-1625056f")]).then(E.bind(null, "64f4"))
                    }
                }, {
                    name: c["a"].profitSettlement.agencyReview,
                    path: n["a"].profitSettlement.agencyReview,
                    meta: {
                        title: c["a"].profitSettlement.agencyReview,
                        keepAlive: !0,
                        hiddenHeaderContent: !0,
                        permission: [_["b"].DAY_AGENCY_SETTLE_REVIEW_ALL, _["b"].DAY_AGENCY_SETTLE_REVIEW_QUERY, _["b"].DAY_AGENCY_SETTLE_REVIEW_REVIEW]
                    },
                    component: function() {
                        return Promise.all([E.e("chunk-3ddd0db4"), E.e("chunk-dc3f79c2"), E.e("chunk-8ba4fc7a")]).then(E.bind(null, "caa4"))
                    }
                }, {
                    name: c["a"].profitSettlement.agencyDayEN,
                    path: n["a"].profitSettlement.agencyDay,
                    meta: {
                        title: c["a"].profitSettlement.agencyDayZH,
                        keepAlive: !0,
                        permission: [_["b"].AGENCY_PROFIT_ALL, _["b"].AGENCY_PROFIT_QUERY, _["b"].AGENCY_PROFIT_COUNT, _["b"].AGENCY_PROFIT_DOWNLOAD]
                    },
                    component: function() {
                        return Promise.all([E.e("chunk-3ddd0db4"), E.e("chunk-54fd167e")]).then(E.bind(null, "8432"))
                    }
                }, {
                    name: c["a"].profitSettlement.teamQuery,
                    path: n["a"].profitSettlement.teamQuery,
                    meta: {
                        title: c["a"].profitSettlement.teamQuery,
                        keepAlive: !0,
                        hiddenHeaderContent: !0,
                        permission: [_["b"].TEAM_PROFIT_RECORD_ALL, _["b"].TEAM_PROFIT_RECORD_QUERY, _["b"].TEAM_PROFIT_RECORD_DOWNLOAD]
                    },
                    component: function() {
                        return Promise.all([E.e("chunk-3ddd0db4"), E.e("chunk-0b1f4dde"), E.e("chunk-75d41716")]).then(E.bind(null, "cb2c"))
                    }
                }, {
                    name: c["a"].profitSettlement.memberQuery,
                    path: n["a"].profitSettlement.memberQuery,
                    meta: {
                        title: c["a"].profitSettlement.memberQuery,
                        keepAlive: !0,
                        hiddenHeaderContent: !0,
                        permission: [_["b"].DAY_AGENCY_TEAM_MEMBER_SETTLE_ALL, _["b"].DAY_AGENCY_TEAM_MEMBER_SETTLE_QUERY, _["b"].DAY_AGENCY_TEAM_MEMBER_SETTLE_SUM, _["b"].DAY_AGENCY_TEAM_MEMBER_SETTLE_DOWNLOAD]
                    },
                    component: function() {
                        return Promise.all([E.e("chunk-3ddd0db4"), E.e("chunk-0b1f4dde"), E.e("chunk-41496ab2")]).then(E.bind(null, "4e53"))
                    }
                }, {
                    name: c["a"].profitSettlement.merchantQuery,
                    path: n["a"].profitSettlement.merchantQuery,
                    meta: {
                        title: c["a"].profitSettlement.merchantQuery,
                        keepAlive: !0,
                        hiddenHeaderContent: !0,
                        permission: [_["b"].DAY_MERCHANT_SETTLE_ALL, _["b"].DAY_MERCHANT_SETTLE_QUERY, _["b"].DAY_MERCHANT_SETTLE_SUM, _["b"].DAY_MERCHANT_SETTLE_DOWNLOAD]
                    },
                    component: function() {
                        return Promise.all([E.e("chunk-3ddd0db4"), E.e("chunk-0b1f4dde"), E.e("chunk-c3c159b0")]).then(E.bind(null, "28d8"))
                    }
                }, {
                    name: c["a"].profitRecordQuery,
                    meta: {
                        title: c["a"].profitRecordQuery,
                        keepAlive: !0,
                        permission: [_["b"].PROFIT_RECORD_ALL, _["b"].PROFIT_RECORD_QUERY, _["b"].PROFIT_RECORD_COUNT, _["b"].PROFIT_RECORD_DOWNLOAD, _["b"].PROFIT_RECORD_REVENUE]
                    },
                    path: n["a"].profitRecord.query,
                    component: function() {
                        return Promise.all([E.e("chunk-3ddd0db4"), E.e("chunk-1969e2a0")]).then(E.bind(null, "c78e"))
                    }
                }, {
                    path: n["a"].profitSettlement.batchErrorQuery,
                    name: c["a"].profitSettlement.batchErrorQuery,
                    component: function() {
                        return Promise.all([E.e("chunk-3ddd0db4"), E.e("chunk-d83c9f22")]).then(E.bind(null, "4f6d"))
                    },
                    meta: {
                        title: c["a"].profitSettlement.batchErrorQuery,
                        keepAlive: !0,
                        permission: [_["b"].ERROR_PROFIT_RECORD_ALL, _["b"].ERROR_PROFIT_RECORD_QUERY]
                    }
                }, {
                    path: n["a"].profitSettlement.profit0Day,
                    name: c["a"].profitSettlement.profit0Day,
                    component: function() {
                        return Promise.all([E.e("chunk-3ddd0db4"), E.e("chunk-356d7d56")]).then(E.bind(null, "6961"))
                    },
                    meta: {
                        title: c["a"].profitSettlement.profit0Day,
                        keepAlive: !0,
                        permission: [_["b"].AGENCY_MARKET_PROFIT_DAY_ALL, _["b"].AGENCY_MARKET_PROFIT_DAY_QUERY, _["b"].AGENCY_MARKET_PROFIT_DAY_DOWNLOAD]
                    }
                }, {
                    path: n["a"].profitSettlement.profit0Month,
                    name: c["a"].profitSettlement.profit0Month,
                    component: function() {
                        return Promise.all([E.e("chunk-3ddd0db4"), E.e("chunk-77fe41dc")]).then(E.bind(null, "8c01"))
                    },
                    meta: {
                        title: c["a"].profitSettlement.profit0Month,
                        keepAlive: !0,
                        permission: [_["b"].AGENCY_MARKET_PROFIT_MONTH_ALL, _["b"].AGENCY_MARKET_PROFIT_MONTH_QUERY, _["b"].AGENCY_MARKET_PROFIT_MONTH_DOWNLOAD]
                    }
                }]
            }, {
                meta: {
                    title: c["a"].activity,
                    icon: "gold",
                    permission: [_["b"].ACTIVITY_RULE_ALL, _["b"].ACTIVITY_RULE_QUERY, _["b"].ACTIVITY_RULE_CREATE, _["b"].ACTIVITY_RULE_UPDATE, _["b"].ACTIVITY_RULE_REVIEW_ALL, _["b"].ACTIVITY_RULE_REVIEW_QUERY, _["b"].AGENCY_ACTIVITY_ALL, _["b"].AGENCY_ACTIVITY_QUERY, _["b"].AGENCY_ACTIVITY_CREATE, _["b"].AGENCY_ACTIVITY_UPDATE, _["b"].AGENCY_ACTIVITY_REVIEW_ALL, _["b"].AGENCY_ACTIVITY_REVIEW_QUERY, _["b"].AGENCY_ACTIVITY_REVIEW_REVIEW, _["b"].ACTIVITY_REWARD_ALL, _["b"].ACTIVITY_REWARD_QUERY, _["b"].ACTIVITY_REWARD_APPLY, _["b"].ACTIVITY_REWARD_REVIEW_ALL, _["b"].ACTIVITY_REWARD_REVIEW_QUERY, _["b"].ACTIVITY_REWARD_REVIEW_REVIEW, _["b"].TERMINAL_CONFIG_ALL, _["b"].TERMINAL_CONFIG_SAVE_OR_UPDATE, _["b"].TERMINAL_CONFIG_QUERY, _["b"].EXTERNAL_ACTIVITY_ALL, _["b"].EXTERNAL_ACTIVITY_CREATE, _["b"].EXTERNAL_ACTIVITY_QUERY, _["b"].EXTERNAL_ACTIVITY_UPDATE]
                },
                path: n["a"].activity,
                redirect: n["a"].activityRule.query,
                component: t["b"],
                children: [{
                    name: c["a"].activityRule,
                    meta: {
                        title: c["a"].activityRule,
                        keepAlive: !0,
                        permission: [_["b"].ACTIVITY_RULE_ALL, _["b"].ACTIVITY_RULE_QUERY]
                    },
                    path: n["a"].activityRule.path,
                    redirect: n["a"].activityRule.query,
                    component: t["b"],
                    hideChildrenInMenu: !0,
                    children: [{
                        path: n["a"].activityRule.query,
                        name: c["a"].activityRuleQuery,
                        component: function() {
                            return Promise.all([E.e("chunk-70c7a28c"), E.e("chunk-36c1f648"), E.e("chunk-14a59e0c"), E.e("chunk-8b144886")]).then(E.bind(null, "c6e3"))
                        },
                        meta: {
                            title: c["a"].activityRuleQuery,
                            keepAlive: !0,
                            permission: [_["b"].ACTIVITY_RULE_ALL, _["b"].ACTIVITY_RULE_QUERY]
                        }
                    }, {
                        path: n["a"].activityRule.create,
                        name: c["a"].activityRuleCreate,
                        component: function() {
                            return Promise.all([E.e("chunk-70c7a28c"), E.e("chunk-36c1f648"), E.e("chunk-2d0dacf8"), E.e("chunk-3b9c38a6"), E.e("chunk-4da584f4")]).then(E.bind(null, "27cb"))
                        },
                        meta: {
                            title: c["a"].activityRuleCreate,
                            keepAlive: !1,
                            permission: [_["b"].ACTIVITY_RULE_ALL, _["b"].ACTIVITY_RULE_CREATE]
                        }
                    }, {
                        path: n["a"].activityRule.update,
                        name: c["a"].activityRuleUpdate,
                        component: function() {
                            return Promise.all([E.e("chunk-70c7a28c"), E.e("chunk-36c1f648"), E.e("chunk-2d0dacf8"), E.e("chunk-3b9c38a6"), E.e("chunk-4da584f4")]).then(E.bind(null, "27cb"))
                        },
                        meta: {
                            title: c["a"].activityRuleUpdate,
                            keepAlive: !1,
                            permission: [_["b"].ACTIVITY_RULE_ALL, _["b"].ACTIVITY_RULE_UPDATE]
                        }
                    }]
                }, {
                    name: c["a"].activityAudit,
                    meta: {
                        title: c["a"].activityAudit,
                        keepAlive: !0,
                        permission: [_["b"].ACTIVITY_RULE_REVIEW_ALL, _["b"].ACTIVITY_RULE_REVIEW_QUERY]
                    },
                    path: n["a"].activityAudit.query,
                    component: function() {
                        return Promise.all([E.e("chunk-70c7a28c"), E.e("chunk-36c1f648"), E.e("chunk-14a59e0c"), E.e("chunk-171dce51")]).then(E.bind(null, "50c4d"))
                    }
                }, {
                    name: c["a"].agencyActivity.title,
                    meta: {
                        title: c["a"].agencyActivity.title,
                        keepAlive: !0,
                        permission: [_["b"].AGENCY_ACTIVITY_ALL, _["b"].AGENCY_ACTIVITY_QUERY]
                    },
                    path: n["a"].agencyActivity.path,
                    redirect: n["a"].agencyActivity.query,
                    component: t["b"],
                    hideChildrenInMenu: !0,
                    children: [{
                        name: c["a"].agencyActivity.query,
                        meta: {
                            title: c["a"].agencyActivity.query,
                            keepAlive: !0,
                            permission: [_["b"].AGENCY_ACTIVITY_ALL, _["b"].AGENCY_ACTIVITY_QUERY]
                        },
                        path: n["a"].agencyActivity.query,
                        component: function() {
                            return Promise.all([E.e("chunk-21bf2f49"), E.e("chunk-1cf9beb8")]).then(E.bind(null, "c733"))
                        }
                    }, {
                        name: c["a"].agencyActivity.create,
                        meta: {
                            title: c["a"].agencyActivity.create,
                            keepAlive: !1,
                            permission: [_["b"].AGENCY_ACTIVITY_ALL, _["b"].AGENCY_ACTIVITY_CREATE]
                        },
                        path: n["a"].agencyActivity.create,
                        component: function() {
                            return Promise.all([E.e("chunk-70c7a28c"), E.e("chunk-7288f83d")]).then(E.bind(null, "d590"))
                        }
                    }, {
                        name: c["a"].agencyActivity.update,
                        meta: {
                            title: c["a"].agencyActivity.update,
                            keepAlive: !1,
                            permission: [_["b"].AGENCY_ACTIVITY_ALL, _["b"].AGENCY_ACTIVITY_UPDATE]
                        },
                        path: n["a"].agencyActivity.update,
                        component: function() {
                            return Promise.all([E.e("chunk-70c7a28c"), E.e("chunk-7288f83d")]).then(E.bind(null, "d590"))
                        }
                    }]
                }, {
                    name: c["a"].agencyActivity.review,
                    meta: {
                        title: c["a"].agencyActivity.review,
                        keepAlive: !0,
                        permission: [_["b"].AGENCY_ACTIVITY_REVIEW_ALL, _["b"].AGENCY_ACTIVITY_REVIEW_QUERY, _["b"].AGENCY_ACTIVITY_REVIEW_REVIEW]
                    },
                    path: n["a"].agencyActivity.review,
                    component: function() {
                        return Promise.all([E.e("chunk-21bf2f49"), E.e("chunk-3853ce79")]).then(E.bind(null, "6fcdc"))
                    }
                }, {
                    name: c["a"].activityAward,
                    meta: {
                        title: c["a"].activityAward,
                        keepAlive: !0,
                        permission: [_["b"].ACTIVITY_REWARD_ALL, _["b"].ACTIVITY_REWARD_QUERY, _["b"].ACTIVITY_REWARD_APPLY, _["b"].ACTIVITY_REWARD_DOWNLOAD]
                    },
                    path: n["a"].activityAward.path,
                    component: function() {
                        return Promise.all([E.e("chunk-3ddd0db4"), E.e("chunk-d7edabae")]).then(E.bind(null, "6167"))
                    }
                }, {
                    name: c["a"].activityAwardReview,
                    meta: {
                        title: c["a"].activityAwardReview,
                        keepAlive: !0,
                        permission: [_["b"].ACTIVITY_REWARD_REVIEW_ALL, _["b"].ACTIVITY_REWARD_REVIEW_QUERY, _["b"].ACTIVITY_REWARD_REVIEW_REVIEW]
                    },
                    path: n["a"].activityAward.review,
                    component: function() {
                        return Promise.all([E.e("chunk-3ddd0db4"), E.e("chunk-dc3f79c2"), E.e("chunk-5639a763")]).then(E.bind(null, "d1d9"))
                    }
                }, {
                    name: c["a"].activityTerminalTypeConfigEN,
                    meta: {
                        title: c["a"].activityTerminalTypeConfigZH,
                        keepAlive: !0,
                        permission: [_["b"].TERMINAL_CONFIG_ALL, _["b"].TERMINAL_CONFIG_SAVE_OR_UPDATE, _["b"].TERMINAL_CONFIG_QUERY]
                    },
                    path: n["a"].activityTerminalTypeConfig,
                    component: function() {
                        return E.e("chunk-4fe7f1ac").then(E.bind(null, "fe35"))
                    }
                }, {
                    name: c["a"].qianhaiActivityConfigEN,
                    meta: {
                        title: c["a"].qianhaiActivityConfigZH,
                        keepAlive: !0,
                        permission: [_["b"].EXTERNAL_ACTIVITY_ALL, _["b"].EXTERNAL_ACTIVITY_CREATE, _["b"].EXTERNAL_ACTIVITY_QUERY, _["b"].EXTERNAL_ACTIVITY_UPDATE]
                    },
                    path: n["a"].qianhaiActivityConfig,
                    component: function() {
                        return E.e("chunk-265ffcca").then(E.bind(null, "2ce5"))
                    }
                }]
            }, {
                meta: {
                    title: c["a"].activityConfigNew,
                    icon: "switcher",
                    permission: [_["b"].MARKETING_ALL, _["b"].MARKETING_QUERY, _["b"].MARKETING_REVIEW_QUERY, _["b"].MARKETING_REVIEW_CREATE, _["b"].MARKETING_REVIEW_REVIEW, _["b"].MARKETING_RULE_ALL, _["b"].MARKETING_RULE_QUERY, _["b"].MARKETING_RULE_CREATE, _["b"].MARKETING_RULE_REVIEW_QUERY, _["b"].MARKETING_RULE_REVIEW_REVIEW, _["b"].MARKETING_PARTICIPANT_ALL, _["b"].MARKETING_PARTICIPANT_QUERY, _["b"].MARKETING_PARTICIPANT_CREATE, _["b"].MARKETING_PARTICIPANT_UPDATE, _["b"].TERMINAL_REBATE_REWARD_ALL, _["b"].TERMINAL_REBATE_REWARD_QUERY]
                },
                path: n["a"].activityConfig,
                redirect: n["a"].activityRule.query,
                component: t["b"],
                children: [{
                    name: c["a"].activityManage.ruleManageEN,
                    meta: {
                        title: c["a"].activityManage.ruleManageZH,
                        keepAlive: !0,
                        permission: [_["b"].MARKETING_RULE_ALL, _["b"].MARKETING_RULE_QUERY, _["b"].MARKETING_RULE_CREATE]
                    },
                    path: n["a"].activityManage.ruleManage,
                    component: function() {
                        return Promise.all([E.e("chunk-3ddd0db4"), E.e("chunk-6cf81a97"), E.e("chunk-22ecc564")]).then(E.bind(null, "766b"))
                    }
                }, {
                    name: c["a"].activityManage.ruleReviewEN,
                    meta: {
                        title: c["a"].activityManage.ruleReviewZH,
                        keepAlive: !0,
                        permission: [_["b"].MARKETING_RULE_ALL, _["b"].MARKETING_RULE_REVIEW_QUERY, _["b"].MARKETING_RULE_REVIEW_REVIEW]
                    },
                    path: n["a"].activityManage.ruleReview,
                    component: function() {
                        return Promise.all([E.e("chunk-6cf81a97"), E.e("chunk-6a23b328")]).then(E.bind(null, "c063"))
                    }
                }, {
                    name: c["a"].activityManage.agencyManageEN,
                    meta: {
                        title: c["a"].activityManage.agencyManageZH,
                        keepAlive: !0,
                        permission: [_["b"].MARKETING_ALL, _["b"].MARKETING_QUERY, _["b"].MARKETING_REVIEW_CREATE]
                    },
                    path: n["a"].activityManage.agencyManage,
                    component: function() {
                        return Promise.all([E.e("chunk-3ddd0db4"), E.e("chunk-6cf81a97"), E.e("chunk-ab64783e"), E.e("chunk-634f5ed4")]).then(E.bind(null, "793f"))
                    }
                }, {
                    name: c["a"].activityManage.agencyReviewEN,
                    meta: {
                        title: c["a"].activityManage.agencyReviewZH,
                        keepAlive: !0,
                        permission: [_["b"].MARKETING_ALL, _["b"].MARKETING_REVIEW_QUERY, _["b"].MARKETING_REVIEW_REVIEW]
                    },
                    path: n["a"].activityManage.agencyReview,
                    component: function() {
                        return Promise.all([E.e("chunk-6cf81a97"), E.e("chunk-056fe338")]).then(E.bind(null, "8b04"))
                    }
                }, {
                    path: n["a"].activityManage.participantQuery,
                    name: c["a"].activityManage.participantQueryEN,
                    meta: {
                        title: c["a"].activityManage.participantQueryZH,
                        keepAlive: !0,
                        permission: [_["b"].MARKETING_PARTICIPANT_ALL, _["b"].MARKETING_PARTICIPANT_QUERY]
                    },
                    component: function() {
                        return Promise.all([E.e("chunk-3ddd0db4"), E.e("chunk-12b5e844")]).then(E.bind(null, "396f"))
                    }
                }, {
                    path: n["a"].activityManage.riskQuery,
                    name: c["a"].activityManage.riskQueryEN,
                    meta: {
                        title: c["a"].activityManage.riskQueryZH,
                        keepAlive: !0,
                        permission: [_["b"].MARKETING_RISK_ALL, _["b"].MARKETING_RISK_QUERY]
                    },
                    component: function() {
                        return Promise.all([E.e("chunk-3ddd0db4"), E.e("chunk-6cf81a97"), E.e("chunk-ab64783e"), E.e("chunk-1c326700")]).then(E.bind(null, "cccb"))
                    }
                }, {
                    path: n["a"].rebateManage.terminalRebateNew,
                    name: c["a"].rebate.terminalRebateNewEN,
                    meta: {
                        title: c["a"].rebate.terminalRebateNewZH,
                        keepAlive: !0,
                        permission: [_["b"].TERMINAL_REBATE_REWARD_ALL, _["b"].TERMINAL_REBATE_REWARD_QUERY]
                    },
                    component: function() {
                        return Promise.all([E.e("chunk-3ddd0db4"), E.e("chunk-85f64c24")]).then(E.bind(null, "ffeb"))
                    }
                }, {
                    name: c["a"].activityManage.activityAwardNewEN,
                    meta: {
                        title: c["a"].activityManage.activityAwardNewZH,
                        keepAlive: !0,
                        permission: [_["b"].MARKETING_SETTLE_ALL, _["b"].MARKETING_SETTLE_QUERY]
                    },
                    path: n["a"].activityManage.rewardQuery,
                    component: function() {
                        return Promise.all([E.e("chunk-3ddd0db4"), E.e("chunk-0e18b572")]).then(E.bind(null, "d67d"))
                    }
                }]
            }, {
                path: n["a"].rebateManage.base,
                component: t["b"],
                meta: {
                    title: c["a"].rebate.title,
                    icon: "sync",
                    permission: [_["b"].TERMINAL_REBATE_ALL, _["b"].TERMINAL_REBATE_QUERY, _["b"].TERMINAL_REBATE_DOWNLOAD, _["b"].COMMISSION_REBATE_ALL, _["b"].COMMISSION_REBATE_QUERY, _["b"].COMMISSION_REBATE_DOWNLOAD, _["b"].MERCHANT_TRADE_REWARD_ALL, _["b"].MERCHANT_TRADE_REWARD_QUERY]
                },
                children: [{
                    path: n["a"].rebateManage.handlingRebate,
                    name: c["a"].rebate.handlingRebate,
                    meta: {
                        title: c["a"].rebate.handlingRebate,
                        keepAlive: !0,
                        permission: [_["b"].COMMISSION_REBATE_ALL, _["b"].COMMISSION_REBATE_QUERY, _["b"].COMMISSION_REBATE_DOWNLOAD]
                    },
                    component: function() {
                        return Promise.all([E.e("chunk-3ddd0db4"), E.e("chunk-3965d699")]).then(E.bind(null, "e7e3"))
                    }
                }, {
                    path: n["a"].rebateManage.terminalRebate,
                    name: c["a"].rebate.terminalRebate,
                    meta: {
                        title: c["a"].rebate.terminalRebate,
                        keepAlive: !0,
                        permission: [_["b"].TERMINAL_REBATE_ALL, _["b"].TERMINAL_REBATE_QUERY, _["b"].TERMINAL_REBATE_DOWNLOAD]
                    },
                    component: function() {
                        return Promise.all([E.e("chunk-3ddd0db4"), E.e("chunk-727a6779")]).then(E.bind(null, "5a84"))
                    }
                }, {
                    name: c["a"].rebate.merchantRebate,
                    meta: {
                        title: c["a"].rebate.merchantRebate,
                        keepAlive: !0,
                        permission: [_["b"].MERCHANT_TRADE_REWARD_ALL, _["b"].MERCHANT_TRADE_REWARD_QUERY]
                    },
                    path: n["a"].rebateManage.merchantRebate,
                    component: function() {
                        return Promise.all([E.e("chunk-3ddd0db4"), E.e("chunk-1c6667a8")]).then(E.bind(null, "d98b"))
                    }
                }]
            }, {
                path: "/increase",
                component: t["b"],
                redirect: n["a"].increase.record,
                meta: {
                    title: c["a"].increase.main,
                    icon: "fund",
                    permission: [_["b"].INCREASED_REVENUE_SERIAL_ALL, _["b"].INCREASED_REVENUE_SERIAL_QUERY, _["b"].INCREASED_REVENUE_SERIAL_DOWNLOAD, _["b"].INCREASED_REVENUE_REPORT_QUERY, _["b"].INCREASED_REVENUE_REPORT_DOWNLOAD]
                },
                children: [{
                    path: n["a"].increase.record,
                    name: c["a"].increase.recordEN,
                    meta: {
                        title: c["a"].increase.recordZH,
                        keepAlive: !0,
                        permission: [_["b"].INCREASED_REVENUE_SERIAL_ALL, _["b"].INCREASED_REVENUE_SERIAL_QUERY, _["b"].INCREASED_REVENUE_SERIAL_DOWNLOAD]
                    },
                    component: function() {
                        return Promise.all([E.e("chunk-3ddd0db4"), E.e("chunk-499414fb")]).then(E.bind(null, "6686"))
                    }
                }, {
                    path: n["a"].increase.day,
                    name: c["a"].increase.dayEN,
                    meta: {
                        title: c["a"].increase.dayZH,
                        keepAlive: !0,
                        permission: [_["b"].INCREASED_REVENUE_REPORT_QUERY, _["b"].INCREASED_REVENUE_REPORT_DOWNLOAD]
                    },
                    component: function() {
                        return Promise.all([E.e("chunk-3ddd0db4"), E.e("chunk-e9316206")]).then(E.bind(null, "1718"))
                    }
                }]
            }, {
                path: n["a"].account,
                component: t["b"],
                redirect: n["a"].accountWithdrawal.query,
                meta: {
                    title: c["a"].account,
                    icon: "bank",
                    permission: [_["b"].ACCOUNT_ALL, _["b"].ACCOUNT_QUERY, _["b"].WITHDRAW_REVIEW_ALL, _["b"].WITHDRAW_REVIEW_QUERY, _["b"].WITHDRAW_REVIEW_REVIEW, _["b"].WITHDRAW_REVIEW_REMITTING, _["b"].WITHDRAW_REVIEW_REMITTED, _["b"].TAX_CONFIG_ALL, _["b"].WITHDRAW_REVIEW_EXPORT, _["b"].QUERY_MIDDLE_ACCOUNT_BALANCE, _["b"].WITHDRAW_REVIEW_PAY, _["b"].CAPITAL_FLOW_ALL, _["b"].CAPITAL_FLOW_QUERY, _["b"].EXPORT_FINANCE_REPORT, _["b"].BROWSE_CAPITAL_FLOW, _["b"].CAPITAL_FLOW_UPDATE, _["b"].HAND_ACCOUNT_ALL, _["b"].HAND_ACCOUNT_UPLOAD, _["b"].HAND_ACCOUNT_QUERY, _["b"].HAND_ACCOUNT_REVIEW, _["b"].HAND_ACCOUNT_DOWNLOAD, _["b"].HAND_ACCOUNT_COUNT, _["b"].ACCOUNT_FREEZE, _["b"].ACCOUNT_BATCH_FREEZE, _["b"].WITHDRAW_ALL, _["b"].WITHDRAW_QUERY, _["b"].WITHDRAW_DOWNLOAD, _["b"].AGENCY_INVOICE_ALL, _["b"].AGENCY_INVOICE_QUERY, _["b"].AGENCY_INVOICE_SUB, _["b"].ACCOUNT_UN_FREEZE, _["b"].ACCOUNT_PROFIT_AMT_FREEZE, _["b"].ACCOUNT_PROFIT_AMT_UNFREEZE, _["b"].BROWSE_CAPITAL_FLOW, _["b"].ACCOUNT_NEGATIVE_QUERY, _["b"].ACCOUNT_NEGATIVE_COUNT]
                },
                children: [{
                    path: n["a"].accountManage.path,
                    name: c["a"].accountManage,
                    meta: {
                        title: c["a"].accountManage,
                        keepAlive: !0,
                        permission: [_["b"].WITHDRAW_REVIEW_ALL, _["b"].ACCOUNT_ALL, _["b"].ACCOUNT_QUERY, _["b"].ACCOUNT_FREEZE, _["b"].ACCOUNT_BATCH_FREEZE, _["b"].ACCOUNT_UN_FREEZE, _["b"].ACCOUNT_PROFIT_AMT_FREEZE, _["b"].ACCOUNT_PROFIT_AMT_UNFREEZE]
                    },
                    component: function() {
                        return Promise.all([E.e("chunk-3ddd0db4"), E.e("chunk-5ae1834d"), E.e("chunk-5e90a3ce")]).then(E.bind(null, "3855"))
                    }
                }, {
                    path: n["a"].accountInvoice.path,
                    name: c["a"].accountInvoice,
                    meta: {
                        title: c["a"].accountInvoice,
                        keepAlive: !0,
                        permission: [_["b"].TAX_CONFIG_ALL]
                    },
                    component: function() {
                        return E.e("chunk-611c3abb").then(E.bind(null, "990f"))
                    }
                }, {
                    name: c["a"].accountWithdrawal,
                    meta: {
                        title: c["a"].accountWithdrawal,
                        keepAlive: !0,
                        permission: [_["b"].WITHDRAW_REVIEW_ALL, _["b"].WITHDRAW_REVIEW_QUERY, _["b"].WITHDRAW_REVIEW_REVIEW, _["b"].WITHDRAW_REVIEW_EXPORT, _["b"].EXPORT_FINANCE_REPORT]
                    },
                    path: n["a"].accountWithdrawal.path,
                    component: function() {
                        return Promise.all([E.e("chunk-3ddd0db4"), E.e("chunk-4a580f96")]).then(E.bind(null, "b306"))
                    }
                }, {
                    name: c["a"].accountList,
                    meta: {
                        title: c["a"].accountList,
                        keepAlive: !0,
                        permission: [_["b"].WITHDRAW_ALL, _["b"].WITHDRAW_QUERY, _["b"].WITHDRAW_DOWNLOAD]
                    },
                    path: n["a"].accountWithdrawal.list,
                    component: function() {
                        return Promise.all([E.e("chunk-3ddd0db4"), E.e("chunk-ade09026")]).then(E.bind(null, "df81"))
                    }
                }, {
                    name: c["a"].paymentRecord,
                    meta: {
                        title: c["a"].paymentRecord,
                        keepAlive: !0,
                        permission: [_["b"].CAPITAL_FLOW_ALL, _["b"].CAPITAL_FLOW_QUERY, _["b"].CAPITAL_FLOW_UPDATE]
                    },
                    path: n["a"].paymentRecord.path,
                    component: function() {
                        return E.e("chunk-234c0f34").then(E.bind(null, "ab60"))
                    }
                }, {
                    name: c["a"].accouontAdjustment,
                    meta: {
                        title: c["a"].accouontAdjustment,
                        keepAlive: !0,
                        permission: [_["b"].HAND_ACCOUNT_ALL, _["b"].HAND_ACCOUNT_UPLOAD, _["b"].HAND_ACCOUNT_QUERY, _["b"].HAND_ACCOUNT_REVIEW, _["b"].HAND_ACCOUNT_DOWNLOAD, _["b"].HAND_ACCOUNT_COUNT]
                    },
                    path: n["a"].accountAdjustment.path,
                    component: function() {
                        return Promise.all([E.e("chunk-3ddd0db4"), E.e("chunk-5ae1834d"), E.e("chunk-45f71785")]).then(E.bind(null, "90e6"))
                    }
                }, {
                    name: c["a"].invoiceManage,
                    meta: {
                        title: c["a"].invoiceManage,
                        keepAlive: !0,
                        permission: [_["b"].AGENCY_INVOICE_ALL, _["b"].AGENCY_INVOICE_QUERY, _["b"].AGENCY_INVOICE_SUB]
                    },
                    path: n["a"].invoiceManage.query,
                    component: function() {
                        return Promise.all([E.e("chunk-3ddd0db4"), E.e("chunk-727cb217")]).then(E.bind(null, "d54f"))
                    }
                }, {
                    name: c["a"].minusBalanceEN,
                    meta: {
                        title: c["a"].minusBalanceZH,
                        keepAlive: !0,
                        permission: [_["b"].ACCOUNT_NEGATIVE_QUERY, _["b"].ACCOUNT_NEGATIVE_COUNT]
                    },
                    path: n["a"].accountManage.minusBalance,
                    component: function() {
                        return Promise.all([E.e("chunk-3ddd0db4"), E.e("chunk-3ddd07ee")]).then(E.bind(null, "e998"))
                    }
                }]
            }, {
                path: n["a"].systemUser.path,
                name: c["a"].systemUser,
                redirect: n["a"].systemUser.query,
                component: t["b"],
                meta: {
                    title: c["a"].systemUser,
                    icon: "exception",
                    keepAlive: !0,
                    permission: [_["b"].USER_ALL, _["b"].USER_QUERY, _["b"].USER_DISABLE, _["b"].USER_OPERATOR_PASSWORD, _["b"].USER_ID_CARD_DECRYPT, _["b"].USER_UN_DISABLE, _["b"].USER_CLOSE_LOGIN, _["b"].USER_OPEN_LOGIN]
                },
                hideChildrenInMenu: !0,
                children: [{
                    path: n["a"].systemUser.query,
                    name: c["a"].systemUserQuery,
                    component: function() {
                        return Promise.all([E.e("chunk-3ddd0db4"), E.e("chunk-ff9380dc")]).then(E.bind(null, "1f34"))
                    },
                    meta: {
                        title: c["a"].systemUserQuery,
                        keepAlive: !0,
                        permission: [_["b"].USER_ALL, _["b"].USER_QUERY, _["b"].USER_DISABLE, _["b"].USER_OPERATOR_PASSWORD, _["b"].USER_ID_CARD_DECRYPT, _["b"].USER_CLOSE_LOGIN, _["b"].USER_OPEN_LOGIN]
                    }
                }, {
                    path: n["a"].systemUser.update,
                    name: c["a"].systemUserUpdate,
                    component: function() {
                        return Promise.all([E.e("chunk-70c7a28c"), E.e("chunk-760fc0a9")]).then(E.bind(null, "2637"))
                    },
                    meta: {
                        title: c["a"].systemUserUpdate,
                        keepAlive: !1
                    }
                }]
            }, {
                path: "/terminal",
                component: t["b"],
                redirect: n["a"].terminal.query,
                meta: {
                    title: "终端管理",
                    icon: "tablet",
                    permission: [_["b"].TERMINAL_POS_ALL, _["b"].TERMINAL_POS_QUERY, _["b"].TERMINAL_POS_FLOW_ALL, _["b"].TERMINAL_POS_FLOW_QUERY, _["b"].TERMINAL_POS_DOWN, _["b"].TERMINAL_GENERATE_TRMNO, _["b"].TERMINAL_MODIFY_POSSTATUS, _["b"].TERMINAL_REFUND_COMPONENT]
                },
                children: [{
                    path: n["a"].terminal.query,
                    name: c["a"].terminal.query,
                    component: function() {
                        return Promise.all([E.e("chunk-3ddd0db4"), E.e("chunk-70242626")]).then(E.bind(null, "d323"))
                    },
                    meta: {
                        title: c["a"].terminal.query,
                        keepAlive: !0,
                        permission: [_["b"].TERMINAL_POS_ALL, _["b"].TERMINAL_POS_QUERY, _["b"].TERMINAL_POS_DOWN, _["b"].TERMINAL_GENERATE_TRMNO, _["b"].TERMINAL_MODIFY_POSSTATUS, _["b"].TERMINAL_REFUND_COMPONENT]
                    }
                }, {
                    path: n["a"].terminal.record,
                    name: c["a"].terminal.record,
                    component: function() {
                        return Promise.all([E.e("chunk-3ddd0db4"), E.e("chunk-246b9992")]).then(E.bind(null, "e5e2"))
                    },
                    meta: {
                        title: c["a"].terminal.record,
                        keepAlive: !0,
                        permission: [_["b"].TERMINAL_POS_FLOW_ALL, _["b"].TERMINAL_POS_FLOW_QUERY]
                    }
                }, {
                    path: n["a"].terminal.hornQuery,
                    name: c["a"].terminal.hornQueryEN,
                    component: function() {
                        return Promise.all([E.e("chunk-3ddd0db4"), E.e("chunk-28b6d784")]).then(E.bind(null, "02e7"))
                    },
                    meta: {
                        title: c["a"].terminal.hornQueryZH,
                        permission: [_["b"].CLOUD_TRUMPET_ALL, _["b"].CLOUD_TRUMPET_QUERY]
                    }
                }]
            }, {
                path: "/eqt",
                component: t["b"],
                redirect: n["a"].eqt.query,
                meta: {
                    title: c["a"].eqt.title,
                    icon: "file-image",
                    permission: [_["b"].EQT_WALLET_ALL, _["b"].EQT_WALLET_QUERY, _["b"].EQT_BANK_CARD_ALL, _["b"].EQT_BANK_CARD_QUERY, _["b"].EQT_WITHDRAW_ALL, _["b"].EQT_WITHDRAW_QUERY, _["b"].EQT_WITHDRAW_CASH_AMOUNT, _["b"].EQT_WITHDRAW_DOWNLOAD, _["b"].EQT_WITHDRAW_FINANCIAL_DOWNLOAD]
                },
                children: [{
                    path: n["a"].eqt.signQuery,
                    name: c["a"].eqt.signEN,
                    component: function() {
                        return Promise.all([E.e("chunk-3ddd0db4"), E.e("chunk-0ba6371c")]).then(E.bind(null, "b611"))
                    },
                    meta: {
                        title: c["a"].eqt.signZH,
                        keepAlive: !0,
                        permission: [_["b"].EQT_WALLET_ALL, _["b"].EQT_WALLET_QUERY, _["b"].EQT_BANK_CARD_ALL, _["b"].EQT_BANK_CARD_QUERY]
                    }
                }, {
                    path: n["a"].eqt.recordQuery,
                    name: c["a"].eqt.recordEN,
                    component: function() {
                        return Promise.all([E.e("chunk-3ddd0db4"), E.e("chunk-6eeb5510")]).then(E.bind(null, "ec3c"))
                    },
                    meta: {
                        title: c["a"].eqt.recordZH,
                        keepAlive: !0,
                        permission: [_["b"].EQT_WITHDRAW_ALL, _["b"].EQT_WITHDRAW_QUERY, _["b"].EQT_WITHDRAW_CASH_AMOUNT, _["b"].EQT_WITHDRAW_DOWNLOAD, _["b"].EQT_WITHDRAW_FINANCIAL_DOWNLOAD]
                    }
                }]
            }, {
                path: "/system",
                component: t["b"],
                redirect: n["a"].systemProcess.query,
                meta: {
                    title: "系统管理",
                    icon: "layout",
                    permission: [_["b"].SYSTEM_CONFIG_ALL, _["b"].SYSTEM_CONFIG_QUERY, _["b"].SYSTEM_ROLE_ALL, _["b"].SYSTEM_ROLE_QUERY, _["b"].SYSTEM_PROCESS_ALL, _["b"].SYSTEM_PROCESS_QUERY, _["b"].TASK_MANAGE_ALL, _["b"].TASK_MANAGE_QUERY, _["b"].TASK_MANAGE_UPDATE, _["b"].USER_BIND_XY_WALLET_ALL, _["b"].USER_BIND_XY_WALLET_QUERY, _["b"].PUBLIC_MSG_ALL, _["b"].PUBLIC_MSG_QUERY, _["b"].PUBLIC_MSG_CREATE, _["b"].PUBLIC_MSG_STATUS, _["b"].MERCHANTS_AGENCY_CHANGE_ALL, _["b"].MERCHANTS_AGENCY_CHANGE_QUERY, _["b"].USER_OPERATOR_QUERY, _["b"].INFO_NOTIFY_LOG_ALL, _["b"].INFO_NOTIFY_LOG_QUERY, _["b"].SYSTEM_CONFIG_PAGE_QUERY, _["b"].SYSTEM_CONFIG_NEW_CREATE, _["b"].SYSTEM_CONFIG_PAGE_UPDATE]
                },
                children: [{
                    path: n["a"].systemProcess.path,
                    redirect: n["a"].systemProcess.query,
                    name: c["a"].systemProcess,
                    meta: {
                        title: c["a"].systemProcess,
                        keepAlive: !0,
                        permission: [_["b"].SYSTEM_PROCESS_ALL, _["b"].SYSTEM_PROCESS_QUERY]
                    },
                    component: t["b"],
                    hideChildrenInMenu: !0,
                    children: [{
                        path: n["a"].systemProcess.query,
                        name: c["a"].systemProcessQuery,
                        component: function() {
                            return Promise.all([E.e("chunk-70c7a28c"), E.e("chunk-36c1f648"), E.e("chunk-14a59e0c"), E.e("chunk-1b956961")]).then(E.bind(null, "bf59"))
                        },
                        meta: {
                            title: c["a"].systemProcessQuery,
                            keepAlive: !0,
                            permission: [_["b"].SYSTEM_PROCESS_ALL, _["b"].SYSTEM_PROCESS_QUERY]
                        }
                    }, {
                        path: n["a"].systemProcess.create,
                        name: c["a"].systemProcessCreate,
                        component: function() {
                            return Promise.all([E.e("chunk-70c7a28c"), E.e("chunk-36c1f648"), E.e("chunk-2d0dacf8"), E.e("chunk-3b9c38a6"), E.e("chunk-53d7f1f3")]).then(E.bind(null, "023f"))
                        },
                        meta: {
                            title: c["a"].systemProcessCreate,
                            keepAlive: !1,
                            permission: [_["b"].SYSTEM_PROCESS_ALL, _["b"].SYSTEM_PROCESS_CREATE]
                        }
                    }, {
                        path: n["a"].systemProcess.update,
                        name: c["a"].systemProcessUpdate,
                        component: function() {
                            return Promise.all([E.e("chunk-70c7a28c"), E.e("chunk-36c1f648"), E.e("chunk-2d0dacf8"), E.e("chunk-3b9c38a6"), E.e("chunk-53d7f1f3")]).then(E.bind(null, "023f"))
                        },
                        meta: {
                            title: c["a"].systemProcessUpdate,
                            keepAlive: !1,
                            permission: [_["b"].SYSTEM_PROCESS_ALL, _["b"].SYSTEM_PROCESS_UPDATE]
                        }
                    }]
                }, {
                    path: n["a"].systemRole.path,
                    name: c["a"].systemRole,
                    redirect: n["a"].systemRole.query,
                    component: t["b"],
                    meta: {
                        title: c["a"].systemRole,
                        keepAlive: !0,
                        permission: [_["b"].SYSTEM_ROLE_ALL, _["b"].SYSTEM_ROLE_QUERY]
                    },
                    hideChildrenInMenu: !0,
                    children: [{
                        path: n["a"].systemRole.query,
                        name: c["a"].systemRoleQuery,
                        component: function() {
                            return E.e("chunk-43714590").then(E.bind(null, "70eb"))
                        },
                        meta: {
                            title: c["a"].systemRoleQuery,
                            keepAlive: !0,
                            permission: [_["b"].SYSTEM_ROLE_ALL, _["b"].SYSTEM_ROLE_QUERY]
                        }
                    }, {
                        path: n["a"].systemRole.create,
                        name: c["a"].systemRoleCreate,
                        component: function() {
                            return Promise.all([E.e("chunk-70c7a28c"), E.e("chunk-871cf974")]).then(E.bind(null, "a653"))
                        },
                        meta: {
                            title: c["a"].systemRoleCreate,
                            keepAlive: !1,
                            permission: [_["b"].SYSTEM_ROLE_ALL, _["b"].SYSTEM_ROLE_CREATE]
                        }
                    }, {
                        path: n["a"].systemRole.update,
                        name: c["a"].systemRoleUpdate,
                        component: function() {
                            return Promise.all([E.e("chunk-70c7a28c"), E.e("chunk-871cf974")]).then(E.bind(null, "a653"))
                        },
                        meta: {
                            title: c["a"].systemRoleUpdate,
                            keepAlive: !1,
                            permission: [_["b"].SYSTEM_ROLE_ALL, _["b"].SYSTEM_ROLE_UPDATE]
                        }
                    }]
                }, {
                    path: n["a"].systemOperation.path,
                    name: c["a"].systemOperation,
                    redirect: n["a"].systemOperation.query,
                    component: t["b"],
                    meta: {
                        title: c["a"].systemOperation,
                        keepAlive: !0,
                        permission: [_["b"].USER_OPERATOR_ALL, _["b"].USER_OPERATOR_QUERY, _["b"].USER_OPERATOR_CREATE, _["b"].USER_OPERATOR_UPDATE, _["b"].USER_OPERATOR_DOWNLOAD]
                    },
                    hideChildrenInMenu: !0,
                    children: [{
                        path: n["a"].systemOperation.query,
                        name: c["a"].systemOperationQuery,
                        component: function() {
                            return Promise.all([E.e("chunk-3ddd0db4"), E.e("chunk-fe18aaee")]).then(E.bind(null, "3b185"))
                        },
                        meta: {
                            title: c["a"].systemOperationQuery,
                            keepAlive: !0,
                            permission: [_["b"].USER_OPERATOR_ALL, _["b"].USER_OPERATOR_QUERY, _["b"].USER_OPERATOR_DOWNLOAD]
                        }
                    }, {
                        path: n["a"].systemOperation.create,
                        name: c["a"].systemOperationCreate,
                        component: function() {
                            return Promise.all([E.e("chunk-70c7a28c"), E.e("chunk-36c1f648"), E.e("chunk-2d0dacf8"), E.e("chunk-3b9c38a6"), E.e("chunk-6b9afced")]).then(E.bind(null, "1142"))
                        },
                        meta: {
                            title: c["a"].systemOperationCreate,
                            keepAlive: !1,
                            permission: [_["b"].USER_OPERATOR_ALL, _["b"].USER_OPERATOR_CREATE]
                        }
                    }, {
                        path: n["a"].systemOperation.update,
                        name: c["a"].systemOperationUpdate,
                        component: function() {
                            return Promise.all([E.e("chunk-70c7a28c"), E.e("chunk-36c1f648"), E.e("chunk-2d0dacf8"), E.e("chunk-3b9c38a6"), E.e("chunk-6b9afced")]).then(E.bind(null, "1142"))
                        },
                        meta: {
                            title: c["a"].systemOperationUpdate,
                            keepAlive: !1,
                            permission: [_["b"].USER_OPERATOR_ALL, _["b"].USER_OPERATOR_UPDATE]
                        }
                    }]
                }, {
                    path: n["a"].systemConfig.query,
                    name: c["a"].systemConfig,
                    component: function() {
                        return Promise.all([E.e("chunk-70c7a28c"), E.e("chunk-36c1f648"), E.e("chunk-2d0dacf8"), E.e("chunk-3b9c38a6"), E.e("chunk-2bd4eb74")]).then(E.bind(null, "cdb7"))
                    },
                    meta: {
                        title: c["a"].systemConfig,
                        keepAlive: !0,
                        permission: [_["b"].SYSTEM_CONFIG_ALL, _["b"].SYSTEM_CONFIG_NEW_CREATE, _["b"].SYSTEM_CONFIG_QUERY]
                    }
                }, {
                    path: n["a"].systemTask.path,
                    name: c["a"].systemTask,
                    component: function() {
                        return E.e("chunk-ebdad4ce").then(E.bind(null, "6133"))
                    },
                    meta: {
                        title: c["a"].systemTask,
                        keepAlive: !0,
                        permission: [_["b"].TASK_MANAGE_ALL, _["b"].TASK_MANAGE_QUERY, _["b"].TASK_MANAGE_UPDATE]
                    }
                }, {
                    path: n["a"].systemLog.path,
                    name: c["a"].systemOperationLog,
                    component: function() {
                        return E.e("chunk-3b49ae28").then(E.bind(null, "cb8a"))
                    },
                    meta: {
                        title: c["a"].systemOperationLog,
                        keepAlive: !0,
                        permission: [_["b"].OPERTOER_LOG_ALL, _["b"].OPERTOER_LOG_QUERY]
                    }
                }, {
                    path: n["a"].systemParametes.path,
                    name: c["a"].systemParametesEN,
                    redirect: n["a"].systemParametes.query,
                    component: t["b"],
                    meta: {
                        title: c["a"].systemParametesZH,
                        keepAlive: !0,
                        permission: [_["b"].SYSTEM_CONFIG_PAGE_QUERY, _["b"].SYSTEM_CONFIG_PAGE_UPDATE]
                    },
                    hideChildrenInMenu: !0,
                    children: [{
                        path: n["a"].systemParametes.query,
                        name: c["a"].systemParametesQueryEN,
                        component: function() {
                            return E.e("chunk-67257826").then(E.bind(null, "ce6f"))
                        },
                        meta: {
                            title: c["a"].systemParametesQueryZH,
                            keepAlive: !0,
                            permission: []
                        }
                    }]
                }, {
                    path: n["a"].systemNotice.path,
                    name: c["a"].notice.base,
                    redirect: n["a"].systemNotice.query,
                    component: t["b"],
                    meta: {
                        title: c["a"].notice.title,
                        keepAlive: !0,
                        permission: [_["b"].PUBLIC_MSG_ALL, _["b"].PUBLIC_MSG_QUERY, _["b"].PUBLIC_MSG_CREATE, _["b"].PUBLIC_MSG_STATUS]
                    },
                    hideChildrenInMenu: !0,
                    children: [{
                        path: n["a"].systemNotice.query,
                        name: c["a"].notice.title,
                        component: function() {
                            return E.e("chunk-c5607280").then(E.bind(null, "202d"))
                        },
                        meta: {
                            title: c["a"].notice.query,
                            keepAlive: !0,
                            permission: [_["b"].PUBLIC_MSG_ALL, _["b"].PUBLIC_MSG_QUERY]
                        }
                    }, {
                        path: n["a"].systemNotice.create,
                        name: c["a"].notice.create,
                        component: function() {
                            return Promise.all([E.e("chunk-70c7a28c"), E.e("chunk-36c1f648"), E.e("chunk-2d0dacf8"), E.e("chunk-3b9c38a6"), E.e("chunk-59f246b8")]).then(E.bind(null, "8d12"))
                        },
                        meta: {
                            title: c["a"].notice.create,
                            keepAlive: !1,
                            permission: [_["b"].PUBLIC_MSG_ALL, _["b"].PUBLIC_MSG_CREATE]
                        }
                    }, {
                        path: n["a"].systemNotice.update,
                        name: c["a"].notice.update,
                        component: function() {
                            return Promise.all([E.e("chunk-70c7a28c"), E.e("chunk-36c1f648"), E.e("chunk-2d0dacf8"), E.e("chunk-3b9c38a6"), E.e("chunk-59f246b8")]).then(E.bind(null, "8d12"))
                        },
                        meta: {
                            title: c["a"].notice.update,
                            keepAlive: !1,
                            permission: [_["b"].PUBLIC_MSG_ALL, _["b"].PUBLIC_MSG_CREATE]
                        }
                    }]
                }, {
                    path: n["a"].systemAuth.path,
                    name: c["a"].systemAuth,
                    component: function() {
                        return E.e("chunk-1c19aed0").then(E.bind(null, "2818"))
                    },
                    meta: {
                        title: c["a"].systemAuth,
                        keepAlive: !0,
                        permission: [_["b"].USER_BIND_XY_WALLET_ALL, _["b"].USER_BIND_XY_WALLET_QUERY]
                    }
                }, {
                    path: n["a"].systemMerchant.path,
                    name: c["a"].systemMerchant,
                    component: function() {
                        return Promise.all([E.e("chunk-3ddd0db4"), E.e("chunk-9f30523e")]).then(E.bind(null, "aaf8"))
                    },
                    meta: {
                        title: c["a"].systemMerchant,
                        keepAlive: !0,
                        permission: [_["b"].MERCHANTS_AGENCY_CHANGE_ALL, _["b"].MERCHANTS_AGENCY_CHANGE_QUERY]
                    }
                }, {
                    path: n["a"].systemOperation.data,
                    name: c["a"].systemOperationDataLog,
                    component: function() {
                        return E.e("chunk-6a88a22c").then(E.bind(null, "7703"))
                    },
                    meta: {
                        title: c["a"].systemOperationDataLog,
                        keepAlive: !0,
                        permission: [_["b"].INFO_NOTIFY_LOG_ALL, _["b"].INFO_NOTIFY_LOG_QUERY]
                    }
                }]
            }, {
                path: "/bankingPolicy",
                component: t["b"],
                meta: {
                    title: "银行政策管理",
                    icon: "audit",
                    permission: []
                },
                children: [{
                    path: n["a"].bankingPolicyAuth.path,
                    redirect: n["a"].bankingPolicyAuth.query,
                    name: c["a"].bankingPolicyAuthEN,
                    meta: {
                        title: c["a"].bankingPolicyAuthZH,
                        keepAlive: !0,
                        permission: [_["b"].SYSTEM_AUTH_ALL, _["b"].SYSTEM_AUTH_QUERY, _["b"].SYSTEM_AUTH_CREATE, _["b"].SYSTEM_AUTH_UPDATE]
                    },
                    component: t["b"],
                    hideChildrenInMenu: !0,
                    children: [{
                        path: n["a"].bankingPolicyAuth.query,
                        name: c["a"].bankingPolicyAuthQueryEN,
                        component: function() {
                            return E.e("chunk-793bee52").then(E.bind(null, "dbe9"))
                        },
                        meta: {
                            title: c["a"].bankingPolicyAuthQueryZH,
                            keepAlive: !0,
                            permission: []
                        }
                    }]
                }]
            }, {
                name: "downloadCentre",
                meta: {
                    title: c["a"].downloadCenter.title,
                    icon: "cloud-download"
                },
                path: n["a"].downloadCentre,
                component: function() {
                    return E.e("chunk-a0f3cc40").then(E.bind(null, "cced"))
                }
            }]
        }, {
            path: "*",
            redirect: "/404",
            hidden: !0
        }]
          , i = {
            path: "/coupon",
            component: t["b"],
            redirect: n["a"].coupon.couponUser,
            meta: {
                title: c["a"].coupon.main,
                icon: "schedule",
                permission: []
            },
            children: [{
                path: n["a"].coupon.couponUser,
                name: c["a"].coupon.userEN,
                component: function() {
                    return E.e("chunk-2d21dbf5").then(E.bind(null, "d32b"))
                },
                meta: {
                    title: c["a"].coupon.userZH,
                    keepAlive: !0,
                    url: "/user-manage",
                    permission: []
                }
            }, {
                path: n["a"].coupon.couponActivity,
                name: c["a"].coupon.activityEN,
                component: function() {
                    return E.e("chunk-2d0b9db4").then(E.bind(null, "3573"))
                },
                meta: {
                    title: c["a"].coupon.activityZH,
                    keepAlive: !0,
                    url: "/activity",
                    permission: []
                }
            }, {
                path: n["a"].coupon.couponActivityTemp,
                name: c["a"].coupon.activityTempEN,
                component: function() {
                    return E.e("chunk-2d0b6e5f").then(E.bind(null, "1eb7"))
                },
                meta: {
                    title: c["a"].coupon.activityTempZH,
                    keepAlive: !0,
                    url: "/activity-template",
                    permission: []
                }
            }, {
                path: n["a"].coupon.couponTempQuery,
                name: c["a"].coupon.TempQueryEN,
                component: function() {
                    return E.e("chunk-2d0b996a").then(E.bind(null, "341d"))
                },
                meta: {
                    title: c["a"].coupon.TempQueryZH,
                    keepAlive: !0,
                    url: "/template1",
                    permission: []
                }
            }, {
                path: n["a"].coupon.couponRedpaper,
                name: c["a"].coupon.redpaperEN,
                component: function() {
                    return E.e("chunk-2d2131d3").then(E.bind(null, "aafc"))
                },
                meta: {
                    title: c["a"].coupon.redpaperZH,
                    keepAlive: !0,
                    url: "/redpaper",
                    permission: []
                }
            }, {
                path: n["a"].coupon.couponVerificat,
                name: c["a"].coupon.verificatEN,
                component: function() {
                    return E.e("chunk-2d0e22a4").then(E.bind(null, "7e11"))
                },
                meta: {
                    title: c["a"].coupon.verificatZH,
                    keepAlive: !0,
                    url: "/verificat",
                    permission: []
                }
            }]
        }
          , A = [{
            path: "/user",
            component: t["c"],
            redirect: "/user/newlogin",
            hidden: !0,
            children: [{
                path: "login",
                name: "login",
                component: function() {
                    return E.e("user").then(E.bind(null, "ebf6"))
                }
            }, {
                path: "register",
                name: "register",
                component: function() {
                    return E.e("user").then(E.bind(null, "1348"))
                }
            }, {
                path: "forget",
                name: "forget",
                component: function() {
                    return E.e("user").then(E.bind(null, "b344"))
                }
            }, {
                path: "register-result",
                name: "registerResult",
                component: function() {
                    return E.e("user").then(E.bind(null, "1037"))
                }
            }, {
                path: "recover",
                name: "recover",
                component: void 0
            }]
        }, {
            path: "/404",
            component: function() {
                return E.e("fail").then(E.bind(null, "e29d"))
            }
        }]
    },
    f5a0: function(e, a, E) {
        "use strict";
        E("a6e1")
    },
    f63d: function(e, a, E) {},
    fddb: function(e, a, E) {}
});
