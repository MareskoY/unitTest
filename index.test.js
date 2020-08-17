const chai = require('chai'),
    expect = chai.expect,
    should = chai.should();

const testObject = require("./index")

const _testData = {
    RSA:{
        RSAKeys:{
            firstSet:{
                publicKey:`-----BEGIN RSA PUBLIC KEY-----
                MIIBCgKCAQEAqPosptEGhKGQ6pwhgJqVMHvvSTMIJpOKlOW8GPkLEjDJF9Ay0do/
                uIDBlRs4P5IzdeHhXdM5VI6cL0x3hzliTzaiYfeB0cjFfSsFZHTNA+3mRt3XC9Wj
                G7Oka8bPTub+/+qav/4KmtbjGfOKZOW7DjD475ujT35FtxIo65PriARpsps9b5Ev
                s5kY2soC/cTLtoeLAWYpcGcxF/ajI0Na42bCVK+/uEKqYUgM8naPrPatOixhVRUt
                hkOldwbOvhkweyI5JJl8teEGsX6W3WS60idqTzcdhngYd//a4xRO41TWhAHjXwva
                6r1NkUp21gB6kBYpOisLIDN7K+OaXhzxuQIDAQAB
                -----END RSA PUBLIC KEY-----`,
                privateKey:`-----BEGIN RSA PRIVATE KEY-----
                MIIEoQIBAAKCAQEAqPosptEGhKGQ6pwhgJqVMHvvSTMIJpOKlOW8GPkLEjDJF9Ay
                0do/uIDBlRs4P5IzdeHhXdM5VI6cL0x3hzliTzaiYfeB0cjFfSsFZHTNA+3mRt3X
                C9WjG7Oka8bPTub+/+qav/4KmtbjGfOKZOW7DjD475ujT35FtxIo65PriARpsps9
                b5Evs5kY2soC/cTLtoeLAWYpcGcxF/ajI0Na42bCVK+/uEKqYUgM8naPrPatOixh
                VRUthkOldwbOvhkweyI5JJl8teEGsX6W3WS60idqTzcdhngYd//a4xRO41TWhAHj
                Xwva6r1NkUp21gB6kBYpOisLIDN7K+OaXhzxuQIDAQABAoIBAQCk0C6RHruOzc99
                JX//4ca2HYvNB7thdPLsPA91BCPqQC9DzMxkps0T9nHaL0xzpPQQfJrGWulGMjrg
                X2MOP8hFnvJPP4wdxAfsB/QggVQeCwJaCLJhVqTatiMfBDDbsq7xijAaJ3zMfd/Q
                RhysQO5r7xQ/ELz/Ihh5cXr8G7DVXmo1Z65hjtDPgAcp/kF6LoECWz+8dTKeZ+0/
                uCYwKFECVmHw+AMuCK08qdIAbqIg9iY3aMUJzKsxZdv/d2cYDuaAu9UkukOeDmTR
                z7d7MzlayRgBvj2fcow+TrahN8JwbN6mpjRqh7OB4H8s780VWOD9BUNZrrHVnev9
                5GvBdHsBAoGBAP9bB1JXxqzfIxmF/xVG4P8Ri14OAFEQzwPQMyizl8wH+L31O+yd
                tI4de0+tq1SVUPg0GBjxkylmJ586Gxv/RxQKP1kQh7FMiKe/bvSGCVconMH+HgA+
                HM0H9ubUq8xetj2x3asBHv8C4uCPhjC8zXOa9MB6PuujbOGTlA95deMJAoGBAKln
                V2nXqwoKnI/Nn00wY9azh53+ZDkRoA9TQo+/u9RGb0HqGgK0n5tNZCc4iVD17NIy
                cwlVZVZSQyulcUZX61sJ6VDON//wMILDrrHgYpqX2rIkM9A++fw9379UCyZAu0aN
                9X62tHhaohKqxM1pJyW5M1FJCpHt/Jp19Idu9tUxAoGARMxIr7W4cHD56vGAJUJg
                cjhO3TtWeIDX1YYtkmS4nB71tHAzAfAHalalF3WJ+JL2KrkWWPoVFQ1R1YN5NFTV
                2J9eK+fZNzqQgul/wl+ueo4VleqaOKSDa/YeXlikJL7LyNl4CI+Xw0sKx0fD9rOX
                gvMXyBfnheMU/b2eIYEu8skCf1YGJF2bJz/yI47i3AJWkFx2zmdsx3gzexRNM3/L
                3ZXuLpFKT+sPzf0PT8ya6SAzwg77j28t7kfnfjSrztnpy5pvbguarNVLI1dEB3JM
                f8YBVw0fVTBqyodM5FJEW2UReghaDlBKd1qmq6bPESE+RKLjaSvd64AvWhcVzxb3
                QmECgYAEh7/hG1teqCa5vfvXbArswX8JiCQVz31r6bdUbJa6q+5iPR20b/ctcAGi
                dJMHCrSVDKgF02VdFmi97l52ogAhku8PoKSRUnasPKOGIAZID9oqGHvPQt3s8435
                m8NzFNNZ8ZBFgnpQEs7kCNDG6rDs97B0I3Hma7QwdIttvaN6EA==
                -----END RSA PRIVATE KEY-----`
            },
            secondSet:{
                publicKey: `-----BEGIN RSA PUBLIC KEY-----
                MIIBCgKCAQEAh/09wHrb6VT1nsrVJ7KJjMMAFUyxSln8s5ZhW3IYmqGbeYgbuFVK
                mleS9OQQKAVzxgY8N85O9affwy4+tQTh890mp3oc6uh5FPRKpCY31km0mtQE/OU0
                lPv5i3WIIzuf62aLGkw35daLeJxmOq3RwS8JRghv8ZJaUzeEg5eY1kF3aOl0y+Qx
                W0fWokTjOSS/GDZAz05nAI4MX0izVLUxQumWKrzTLFpgj8jVlrF3BTErWqHHDA+u
                VjHjIfyt+UYJu0d4RiSL0H5+dahI6gW7HecqRvARENpO2bxdvtNi59LBJzIbG+fR
                ODHXNXtT6FXc8sL5fI0ubmwxeoTpK8QwtQIDAQAB
                -----END RSA PUBLIC KEY-----`,
                privateKey: `-----BEGIN RSA PRIVATE KEY-----
                MIIEogIBAAKCAQEAtRrXbI277pC8XV2QBPzRjtXD/lW5fQKvrnKu5wQY8Dm5nV8v
                ZsYLzCJm8sWKZlBexG51AMVcm3Kpz7HhGKRLjTZ2BxjY7cPppjVsy1X9LE0DDbOf
                GX5T+XT0pFT8q/0szvL9bCzVJhfcJleCrn/r7S9Z72q6CJSXqT+QX+42omAkg3yb
                4qpeyFcmuRfw04nueVPOm2STr/nfCNUjJ2qrEw1rTaVsnxAGhYicPK3tBoKqZ6YB
                zlb2kXy6HP7lx9UiZnBjZNZ75psrwzUFoqNvngnFDejDu5CmnFaM9VBwaWq1Q/t+
                Z+li4FmglpHZlTWACcLY7cDvLBnp3/GxiROM7QIDAQABAoIBAG6kFVPmSxf2KH3J
                uUCyy7u9cN2itY1f5MBoo93SrQGl4nX4PtdEytRNeCN8946GLz9GVAjCik8VgBS5
                EVGind2JlhXD4lNvywCVxv96aw9zhRgL0nkaqmbOQt9aZHsWUxejb5t00EtTbFWo
                RNgiopnmwcT4qOqxDO6DPMq+l3YeyzokFV4JiYbtUVSpk9q7YwGJBd50txrdWF4Y
                CQGnHOjSNn/LlDCuTPM2jTsr6NNTGp3ArNDZzSojNOMxbFRjD+q8qrU2jpk8QvI0
                EsiBSgzwVAK41J5HmNsbogVQoc8IDOSiZp1ZSBVquUXCS0+aI2cNafl4klC2z4fI
                /j65xmkCgYEA3d4CT2OHr8G19HjYpmdjeJiInLPIpQECrA+USo5xY5t6kXKc06qX
                +rWYJdFN7/nzZRadiCpPZwE5veuHpHoR+cpr4Kc4IW0JNDnSHJMYjc15fHRIjMVm
                Ge77rnCGK8U1Vlar4Pof5nPq1yMXmFIbxscx5U8jLM2MFnm1Us4M00sCgYEA0Pdz
                x7g29ImmCo6+/KUPn38lQDRylEnwT7YnIq34e5P34R556SVaj0mKy9tZ0yKoUpJy
                jz4Ra42mi3c7/847pNGygXm4Q0dvscAZXHRfzx4OOZ5qeLjvxPBv2MvmMIqEwh40
                FmdN5SOJbrFPQV11s0SHw23nYVo8v833r7E3xacCgYA1BLGOoR0yndrKYfp7wWce
                0WyL7dZ7v8MQtORd8K4d/HCMw1PArRqGWdDS8LJsL1G/jWj1ug6hccSHovoWDumu
                xHWFCNC8BB9X8J1KIMiUUk6+s9cGdMGSXu6b393gJc86I5oNOBhZbMfow0UHLE/g
                74b34jJoqXHZiRoQgJbGAwKBgEpJTc2YPWEddfuW12p1O2KWDqYOfxUcW+Pae3sm
                oYk9Bwfuj6REdTcvC7qA1iPq1C/WhAdMJ2E20BgQYTIFHMrxCSZiIRE52gk0o09s
                x4qXwrLVEECubf5zAy/s/H4RIDTqC9ZTDywAQCErw2MXWHpMSH8/GNxQ+futuvmo
                ZI1NAoGADBkwbL+Bh0auIAQXLocuGkE4ZD2URAn2EvQFb/nKplYiJRVOL6mP92mQ
                I6V7oTHiJ4XvATYTqF7D3MmsnZ9Pcp9UuVoUIZYYbRAm01hrlBNbEyFCrepoH3Pd
                5ACq/qVz3ld39srSWxiFrC4JZ7lvqvAw+oSFE+86Zbq2K8dn5wI=
                -----END RSA PRIVATE KEY-----`
            }

        },
        RSADecriptedMessage:"test message",
        RSAEncriptedMessage: `H0xiIOAs8oAqAx1peucobBwzrjjF6l08GqYHd7TJtRn4ldLdXHKdvf3PS4+45s8Dzv/Xx0KMWOaYXZGjBlI+nl1ZXvIeEkIKXnyoGLD7SYn8+ElhDcDv0F966qoWjwsjgnrEx4ZUEvZc19seacrc25IchD7eBZK7MYlO9l27MBlvhSaiT8768E5TKg85jC0FQn7RfcgDw5Tj8LoziU8KGGd/D7mLJwvDKebI/cOFWQFtTw75qm0NW50UlsBTeBcOdh+0mSMkDxRNWexgfB+JC7a8NCgQ/k1kxtC46BS15kxbElx+ZbltdnlUSqzeMiepybXRYsXxjOEjPczLfZxewA==`,
        signRSAKey:"7d5af6599d87417968f867b68ba4069a43ce18fd09dcf1c171a0d622bd7b8154153c728349ce20fba74298e0e4d51c4d377e51d52ac3dcb3e6c243c56b6ec9ef4a1b90dc22838847bd34d35e303ef8300ec799957fa1e40a4e608d9cf53bd945ff93ebff13b7e280406bdc64e9a1fda19fd1174fedf762a482e89959b3f6c6e638348029450fddfafb503881d6672ad115b4c50d22002532c4b79db5826bbb01807bbd09587200643b6446b6120dc04f490b90730d137af62b70b7751ddce57b732b014deed4fb63c1087c9257bbb07a78ed6aa9d205e91151b3ebd05a01b7d7a6867bd0fea8d79b58072676625b6f4b1b2ba9c741e87ee3f5e3d491e31697d7"
    },
    SHA:{
        fisrtSet:{
            message:"one more test message",
            Sha1:"8778efe0be890cc88496aa41ac5571f45a854152",
            Sha256:"de1b26df3dc24aabc8c1297683318fc261fb7d3ab8de1eaca4e9938c05498b60"
        },
        secondSet:{
            message:"one more test message2",
        }

    }  
}

const isError = (func) => {
    try{
        func();
        return false;
    }catch{
        return true;
    }
}

describe('index.js tests', () => {
    describe('RSA - test suite',  () => {
        describe('encryptRSA()', ()=>{
            it('encryptRSA() - positive - with correct data', () => {
                expect(testObject.encryptRSA(_testData.RSA.RSADecriptedMessage, _testData.RSA.RSAKeys.firstSet.privateKey)).
                to.equal( _testData.RSA.RSAEncriptedMessage, "Encripted message not eqaul to expected")
            });
            it('encryptRSA() - negative - with different privateKey', () => {
                expect(testObject.encryptRSA(_testData.RSA.RSADecriptedMessage, _testData.RSA.RSAKeys.secondSet.privateKey)).
                to.not.equal( _testData.RSA.RSAEncriptedMessage, "Encripted message was ecrypted incorrect");
            });
            it('encryptRSA() - negative - with incorrect privateKey', () => {
                expect(isError( () => {
                        testObject.encryptRSA(_testData.RSA.RSADecriptedMessage, "_testData.RSA.RSAKeys.privateKey");
                    }
                ), 'function should broke with error, but it was not happened ').to.be.true;        
            });
        });
        describe('decryptRSA()', ()=>{
            it('decryptRSA() - positive - with correct data', () => {
                expect(testObject.decryptRSA(_testData.RSA.RSAEncriptedMessage, _testData.RSA.RSAKeys.firstSet.publicKey)).
                to.equal( _testData.RSA.RSADecriptedMessage, "Decripted message not eqaul to expected");
            });
            it('decryptRSA() - negative - with different publicKey', () => {              
                expect(isError( () => {
                        console.log(testObject.decryptRSA(_testData.RSA.RSAEncriptedMessage, _testData.RSA.RSAKeys.secondSet.publicKey));
                    }
                ), 'function should broke with error, but it was not happened').to.be.true;       
            });
            it('decryptRSA() - negative - with incorrect publicKey', () => {              
                expect(isError( () => {
                        console.log(testObject.decryptRSA(_testData.RSA.RSAEncriptedMessage, "_testData.RSA.RSAKeys.secondSet.publicKey"));
                    }
                ), 'function should broke with error, but it was not happened').to.be.true;       
            });
        });
    });
    describe('SHA - test suite', () => {
        describe('createSha1Digest()', () => {
            it('createSha1Digest() - positive - with first message', () => {
                expect(testObject.createSha1Digest(_testData.SHA.fisrtSet.message)).
                to.equal(_testData.SHA.fisrtSet.Sha1, "Result not equal to expected");
            });
            it('createSha1Digest() - negative - with second message', () => {
                expect(testObject.createSha1Digest(_testData.SHA.secondSet.message)).
                to.not.equal(_testData.SHA.fisrtSet.Sha1, "Result is equal with first test message");
            });
        });
        describe('createSha256Digest()', () => {
            it('createSha256Digest() - positive - with first message', () => {
                expect(testObject.createSha256Digest(_testData.SHA.fisrtSet.message)).
                to.equal(_testData.SHA.fisrtSet.Sha256, "Result not equal to expected");
            });
            it('createSha256Digest() - negative - with second message', () => {
                expect(testObject.createSha256Digest(_testData.SHA.secondSet.message)).
                to.not.equal(_testData.SHA.fisrtSet.Sha256, "Result is equal with first test message");
            });
        });
    });
});
