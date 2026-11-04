import { Container } from 'inversify';
import { TYPES } from './types';
import { PrismaClient } from '@prisma/client';
import { PrismaProductRepository } from '../repositories/PrismaProductRepository';
import { PrismaOrderRepository } from '../repositories/PrismaOrderRepository';
import { EtherealMailProvider } from '../providers/EtherealMailProvider';
import { CreditCardPayment } from '../payments/CreditCardPayment';
import { DebitCardPayment } from '../payments/DebitCardPayment';
import { PixPayment } from '../payments/PixPayment';
import { PaymentMethodRegistry } from '../payments/PaymentMethodRegistry';
import { NotificationService } from '../services/NotificationService';
import { OrderService } from '../services/OrderService';
import { OrderController } from '../controllers/OrderController';

const container = new Container();

container.bind(TYPES.PrismaClient).toConstantValue(new PrismaClient());

container.bind(TYPES.ProductRepository).to(PrismaProductRepository).inSingletonScope();
container.bind(TYPES.OrderRepository).to(PrismaOrderRepository).inSingletonScope();

container.bind(TYPES.MailProvider).to(EtherealMailProvider).inSingletonScope();

container.bind(TYPES.PaymentMethod).to(DebitCardPayment);
container.bind(TYPES.PaymentMethod).to(CreditCardPayment);
container.bind(TYPES.PaymentMethod).to(PixPayment);

container.bind(TYPES.PaymentMethodRegistry).to(PaymentMethodRegistry);
container.bind(TYPES.NotificationService).to(NotificationService);
container.bind(TYPES.OrderService).to(OrderService);
container.bind(TYPES.OrderController).to(OrderController);

export { container };