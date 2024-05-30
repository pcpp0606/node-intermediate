export const MESSAGES = {
    AUTH: {
        COMMON: {
            EMAIL: {
                REQUIRED: '이메일을 입력해 주세요.',
                INVALID_FORMAT: '이메일 형식이 올바르지 않습니다.',
                DUPLICATED: '이미 가입된 사용자입니다.'
            },
            PASSWORD: {
                REQUIRED: '비밀번호를 입력해 주세요.',
                MIN_LENGTH: '비밀번호는 6자리 이상이어야 합니다.'
            },
            PASSWORD_CONFIRM: {
                REQUIRED: '비밀번호 확인을 입력해 주세요.',
                NOT_MATCHED_WITH_PASSWORD: '입력한 두 비밀번호가 일치하지 않습니다.',
            },
            NAME: {
                REQUIRED: '이름을 입력해 주세요.',
            },
        },
        SIGN_UP: {
            SUCCEED: '회원가입에 성공했습니다.',
        }
    }
}